<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.6 无规相近似 (RPA)</h1>
      <p class="chapter-subtitle">Random Phase Approximation - 处理集体激发的重要方法</p>
    </div>

    <div class="content-container">
      <section class="content-section">
        <h2>基本概念</h2>
        <div class="concept-introduction">
          <div class="definition-card primary">
            <div class="card-header">
              <h3>RPA定义</h3>
              <span class="concept-tag">多体理论</span>
            </div>
            <div class="card-content">
              <p class="definition-text">
                无规相近似(Random Phase Approximation, RPA)是处理多体系统中集体激发现象的重要理论方法。
                它通过考虑粒子-空穴对的相干叠加，能够描述等离激元、声子、自旋波等集体模式。
              </p>
              <div class="key-features">
                <h4>核心特征：</h4>
                <div class="feature-grid">
                  <div class="feature-item">
                    <span class="feature-icon">🌊</span>
                    <span class="feature-text">描述集体激发模式</span>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">🔄</span>
                    <span class="feature-text">考虑粒子-空穴相关</span>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span class="feature-text">保持长程关联</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>理论基础</h2>
        <div class="theoretical-foundation">
          <div class="foundation-analysis">
            <h3>从多体微扰理论到RPA</h3>
            <div class="perturbation-development">
              <div class="development-steps">
                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">1</span>
                    <h4>非相互作用系统</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula">
                      H₀ = Σₖ εₖ c†ₖcₖ
                    </div>
                    <p class="step-description">独立粒子哈密顿量，εₖ为单粒子能量</p>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">2</span>
                    <h4>相互作用微扰</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula">
                      V = (1/2)Σₖₖ'qq' Vₖₖ'qq' c†ₖc†ₖ'cq'cq
                    </div>
                    <p class="step-description">两体相互作用，Vₖₖ'qq'为相互作用矩阵元</p>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">3</span>
                    <h4>粒子-空穴激发</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula">
                      |n⟩ = Σₖₖ' Aₖₖ'⁽ⁿ⁾ c†ₖcₖ'|0⟩
                    </div>
                    <p class="step-description">激发态表示为粒子-空穴对的线性组合</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="rpa-approximation">
              <h3>RPA近似的物理图像</h3>
              <div class="approximation-explanation">
                <div class="approximation-cards">
                  <div class="approx-card phase-coherence">
                    <div class="approx-header">
                      <h4>🌊 相位相干性</h4>
                      <span class="approx-tag coherent">相干</span>
                    </div>
                    <div class="approx-content">
                      <p class="approx-description">
                        RPA假设所有粒子-空穴对具有相同的相位关系，忽略相位的随机涨落
                      </p>
                      <div class="coherence-features">
                        <h5>相干效应：</h5>
                        <ul class="coherence-list">
                          <li>粒子-空穴对的集体振荡</li>
                          <li>长程库仑相互作用的屏蔽</li>
                          <li>等离激元等集体模式的形成</li>
                          <li>介电函数的重整化</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="approx-card ring-diagrams">
                    <div class="approx-header">
                      <h4>🔄 环形图求和</h4>
                      <span class="approx-tag diagrammatic">图论</span>
                    </div>
                    <div class="approx-content">
                      <p class="approx-description">
                        RPA对应于费曼图中所有环形图(ring diagrams)的求和
                      </p>
                      <div class="ring-series">
                        <h5>图形级数：</h5>
                        <div class="diagram-representation">
                          <div class="diagram-term">
                            <span class="diagram-symbol">○</span>
                            <span class="diagram-meaning">裸泡泡图</span>
                          </div>
                          <div class="diagram-operator">+</div>
                          <div class="diagram-term">
                            <span class="diagram-symbol">○—○</span>
                            <span class="diagram-meaning">一阶修正</span>
                          </div>
                          <div class="diagram-operator">+</div>
                          <div class="diagram-term">
                            <span class="diagram-symbol">○—○—○</span>
                            <span class="diagram-meaning">二阶修正</span>
                          </div>
                          <div class="diagram-operator">+ ...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>RPA方程</h2>
        <div class="rpa-equations">
          <div class="equation-derivation">
            <h3>介电函数方法</h3>
            <div class="dielectric-approach">
              <div class="approach-container">
                <div class="approach-step">
                  <h4>极化率函数</h4>
                  <div class="equation-formula large">
                    χ₀(q,ω) = Σₖ [f(εₖ) - f(εₖ₊q)] / (ω - εₖ₊q + εₖ + iη)
                  </div>
                  <div class="term-explanation">
                    <div class="term-grid">
                      <div class="term-item">
                        <span class="term-symbol">f(εₖ)</span>
                        <span class="term-meaning">费米分布函数</span>
                      </div>
                      <div class="term-item">
                        <span class="term-symbol">q, ω</span>
                        <span class="term-meaning">动量和频率转移</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="approach-step">
                  <h4>RPA介电函数</h4>
                  <div class="equation-formula large highlighted">
                    ε(q,ω) = 1 - V(q)χ₀(q,ω)
                  </div>
                  <div class="dielectric-interpretation">
                    <p class="interpretation-text">
                      其中V(q)是相互作用势的傅里叶变换。对于库仑相互作用：
                    </p>
                    <div class="equation-formula">
                      V(q) = 4πe²/q²
                    </div>
                  </div>
                </div>

                <div class="approach-step">
                  <h4>屏蔽相互作用</h4>
                  <div class="equation-formula large">
                    W(q,ω) = V(q)/ε(q,ω)
                  </div>
                  <div class="screening-explanation">
                    <p class="screening-text">
                      屏蔽相互作用W(q,ω)描述了在介质中的有效相互作用
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="collective-modes">
            <h3>集体激发模式</h3>
            <div class="modes-analysis">
              <div class="mode-condition">
                <h4>激发条件</h4>
                <div class="condition-card">
                  <div class="equation-formula highlighted">
                    ε(q,ω) = 0
                  </div>
                  <p class="condition-explanation">
                    集体激发模式对应于介电函数的零点，即系统的本征频率
                  </p>
                </div>
              </div>

              <div class="mode-types">
                <h4>主要激发模式</h4>
                <div class="mode-showcase">
                  <div class="mode-cards">
                    <div class="mode-card plasmon">
                      <div class="mode-header">
                        <h5>🌊 等离激元</h5>
                        <span class="mode-tag electronic">电子</span>
                      </div>
                      <div class="mode-content">
                        <div class="mode-description">
                          <p>电子密度的集体振荡模式</p>
                          <div class="mode-frequency">
                            <h6>等离激元频率：</h6>
                            <div class="equation-formula small">
                              ωₚ = √(4πne²/m)
                            </div>
                          </div>
                          <div class="mode-properties">
                            <h6>主要性质：</h6>
                            <ul class="property-list">
                              <li>长程库仑相互作用驱动</li>
                              <li>频率与密度平方根成正比</li>
                              <li>在光学和电子学中重要</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mode-card phonon">
                      <div class="mode-header">
                        <h5>🎵 声子</h5>
                        <span class="mode-tag lattice">晶格</span>
                      </div>
                      <div class="mode-content">
                        <div class="mode-description">
                          <p>离子晶格的集体振动模式</p>
                          <div class="mode-dispersion">
                            <h6>色散关系：</h6>
                            <div class="equation-formula small">
                              ω²(q) = ω₀² + vₛ²q²
                            </div>
                          </div>
                          <div class="mode-properties">
                            <h6>主要性质：</h6>
                            <ul class="property-list">
                              <li>声学和光学支</li>
                              <li>热传导和比热贡献</li>
                              <li>电子-声子耦合</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mode-card magnon">
                      <div class="mode-header">
                        <h5>🧲 磁振子</h5>
                        <span class="mode-tag magnetic">磁性</span>
                      </div>
                      <div class="mode-content">
                        <div class="mode-description">
                          <p>自旋系统的集体激发模式</p>
                          <div class="mode-energy">
                            <h6>能量关系：</h6>
                            <div class="equation-formula small">
                              ω(q) = 2JS(1 - γq)
                            </div>
                          </div>
                          <div class="mode-properties">
                            <h6>主要性质：</h6>
                            <ul class="property-list">
                              <li>海森堡交换相互作用</li>
                              <li>磁性材料的基本激发</li>
                              <li>自旋电子学应用</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数学形式化</h2>
        <div class="mathematical-formulation">
          <div class="matrix-formulation">
            <h3>矩阵形式的RPA方程</h3>
            <div class="matrix-approach">
              <div class="matrix-setup">
                <h4>Tamm-Dancoff近似</h4>
                <div class="tda-explanation">
                  <p class="tda-description">
                    在Tamm-Dancoff近似中，只考虑粒子-空穴激发，忽略空穴-粒子项：
                  </p>
                  <div class="equation-formula large">
                    (A)X = ωX
                  </div>
                  <div class="matrix-elements">
                    <h5>矩阵元：</h5>
                    <div class="equation-formula">
                      Aᵢₐ,ⱼᵦ = (εₐ - εᵢ)δᵢⱼδₐᵦ + ⟨ia|jb⟩ - ⟨ib|ja⟩
                    </div>
                  </div>
                </div>
              </div>

              <div class="full-rpa">
                <h4>完整RPA方程</h4>
                <div class="full-rpa-matrix">
                  <p class="rpa-description">
                    完整的RPA包括粒子-空穴和空穴-粒子耦合：
                  </p>
                  <div class="equation-formula large highlighted">
                    [A  B] [X] = ω [1  0] [X]
                    [B* A*] [Y]     [0 -1] [Y]
                  </div>
                  <div class="matrix-interpretation">
                    <div class="interpretation-grid">
                      <div class="interpretation-item">
                        <h6>A矩阵</h6>
                        <p>粒子-空穴激发</p>
                      </div>
                      <div class="interpretation-item">
                        <h6>B矩阵</h6>
                        <p>粒子-空穴耦合</p>
                      </div>
                      <div class="interpretation-item">
                        <h6>X向量</h6>
                        <p>激发振幅</p>
                      </div>
                      <div class="interpretation-item">
                        <h6>Y向量</h6>
                        <p>去激发振幅</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="casida-equation">
                <h4>Casida方程</h4>
                <div class="casida-formulation">
                  <p class="casida-description">
                    在密度泛函理论框架下的RPA方程：
                  </p>
                  <div class="equation-formula large">
                    Ω²F = (A - B)(A + B)F
                  </div>
                  <div class="casida-advantages">
                    <h5>优势：</h5>
                    <ul class="advantage-list">
                      <li>保证激发能为正</li>
                      <li>计算效率更高</li>
                      <li>数值稳定性好</li>
                      <li>易于实现</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理应用</h2>
        <div class="physical-applications">
          <div class="application-domains">
            <h3>主要应用领域</h3>
            <div class="domain-showcase">
              <div class="domain-cards">
                <div class="domain-card condensed-matter">
                  <div class="domain-header">
                    <h4>🔬 凝聚态物理</h4>
                    <span class="domain-tag solid">固体</span>
                  </div>
                  <div class="domain-content">
                    <div class="condensed-applications">
                      <h5>典型应用：</h5>
                      <ul class="application-list">
                        <li><strong>电子气体：</strong>金属中的等离激元</li>
                        <li><strong>半导体：</strong>激子和等离激元</li>
                        <li><strong>二维材料：</strong>石墨烯等离激元</li>
                        <li><strong>超导体：</strong>集体模式和能隙</li>
                      </ul>
                      <div class="success-examples">
                        <h6>成功案例：</h6>
                        <p>金属表面等离激元的色散关系预测，半导体量子阱中的激子结合能计算</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="domain-card nuclear-physics">
                  <div class="domain-header">
                    <h4>⚛️ 核物理</h4>
                    <span class="domain-tag nuclear">核结构</span>
                  </div>
                  <div class="domain-content">
                    <div class="nuclear-applications">
                      <h5>应用方向：</h5>
                      <ul class="application-list">
                        <li><strong>巨共振：</strong>核的集体激发模式</li>
                        <li><strong>形变核：</strong>四极和八极振动</li>
                        <li><strong>同位旋模式：</strong>质子-中子振荡</li>
                        <li><strong>压缩模式：</strong>核物质的压缩性</li>
                      </ul>
                      <div class="nuclear-insights">
                        <h6>物理洞察：</h6>
                        <p>RPA成功解释了原子核中观察到的各种巨共振现象</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="domain-card quantum-chemistry">
                  <div class="domain-header">
                    <h4>🧪 量子化学</h4>
                    <span class="domain-tag molecular">分子</span>
                  </div>
                  <div class="domain-content">
                    <div class="chemistry-applications">
                      <h5>分子激发：</h5>
                      <ul class="application-list">
                        <li><strong>电子激发：</strong>分子的光学跃迁</li>
                        <li><strong>振动模式：</strong>分子内振动</li>
                        <li><strong>拉曼散射：</strong>非弹性光散射</li>
                        <li><strong>荧光光谱：</strong>发射光谱计算</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="domain-card plasma-physics">
                  <div class="domain-header">
                    <h4>⚡ 等离子体物理</h4>
                    <span class="domain-tag plasma">等离子体</span>
                  </div>
                  <div class="domain-content">
                    <div class="plasma-applications">
                      <h5>等离子体现象：</h5>
                      <ul class="application-list">
                        <li><strong>朗缪尔波：</strong>电子等离子体振荡</li>
                        <li><strong>离子声波：</strong>离子-电子耦合模式</li>
                        <li><strong>阿尔芬波：</strong>磁化等离子体中的波</li>
                        <li><strong>不稳定性：</strong>等离子体不稳定性分析</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="experimental-connections">
            <h3>实验观测与验证</h3>
            <div class="experimental-techniques">
              <div class="technique-cards">
                <div class="technique-card spectroscopy">
                  <div class="technique-header">
                    <h4>📊 光谱学技术</h4>
                    <span class="technique-tag optical">光学</span>
                  </div>
                  <div class="technique-content">
                    <div class="spectroscopy-methods">
                      <h5>主要技术：</h5>
                      <div class="method-grid">
                        <div class="method-item">
                          <h6>吸收光谱</h6>
                          <p>测量激发态能量</p>
                        </div>
                        <div class="method-item">
                          <h6>拉曼散射</h6>
                          <p>振动模式分析</p>
                        </div>
                        <div class="method-item">
                          <h6>EELS</h6>
                          <p>电子能量损失谱</p>
                        </div>
                        <div class="method-item">
                          <h6>光电子谱</h6>
                          <p>电子结构探测</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="technique-card scattering">
                  <div class="technique-header">
                    <h4>🎯 散射技术</h4>
                    <span class="technique-tag scattering">散射</span>
                  </div>
                  <div class="technique-content">
                    <div class="scattering-methods">
                      <h5>散射探测：</h5>
                      <ul class="scattering-list">
                        <li><strong>中子散射：</strong>磁振子和声子</li>
                        <li><strong>X射线散射：</strong>电荷密度波</li>
                        <li><strong>电子散射：</strong>等离激元</li>
                        <li><strong>光散射：</strong>集体激发</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算方法与实现</h2>
        <div class="computational-methods">
          <div class="implementation-strategies">
            <h3>数值实现策略</h3>
            <div class="strategy-analysis">
              <div class="strategy-cards">
                <div class="strategy-card direct-diagonalization">
                  <div class="strategy-header">
                    <h4>🔢 直接对角化</h4>
                    <span class="strategy-tag exact">精确</span>
                  </div>
                  <div class="strategy-content">
                    <div class="diagonalization-approach">
                      <h5>方法特点：</h5>
                      <ul class="approach-features">
                        <li>构造完整的RPA矩阵</li>
                        <li>使用标准本征值求解器</li>
                        <li>获得所有激发态</li>
                        <li>计算复杂度O(N³)</li>
                      </ul>
                      <div class="complexity-analysis">
                        <h6>适用范围：</h6>
                        <p>小到中等规模系统（<1000个轨道）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="strategy-card iterative-methods">
                  <div class="strategy-header">
                    <h4>🔄 迭代方法</h4>
                    <span class="strategy-tag efficient">高效</span>
                  </div>
                  <div class="strategy-content">
                    <div class="iterative-techniques">
                      <h5>主要算法：</h5>
                      <div class="algorithm-grid">
                        <div class="algorithm-item">
                          <h6>Davidson方法</h6>
                          <p>预条件迭代</p>
                        </div>
                        <div class="algorithm-item">
                          <h6>Lanczos算法</h6>
                          <p>Krylov子空间</p>
                        </div>
                        <div class="algorithm-item">
                          <h6>GMRES</h6>
                          <p>广义最小残差</p>
                        </div>
                        <div class="algorithm-item">
                          <h6>CG方法</h6>
                          <p>共轭梯度</p>
                        </div>
                      </div>
                      <div class="iterative-advantages">
                        <h6>优势：</h6>
                        <ul class="advantage-list">
                          <li>只需要最低几个本征值</li>
                          <li>内存需求大幅降低</li>
                          <li>可处理大规模系统</li>
                          <li>并行化效率高</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="strategy-card approximation-schemes">
                  <div class="strategy-header">
                    <h4>📈 近似方案</h4>
                    <span class="strategy-tag scalable">可扩展</span>
                  </div>
                  <div class="strategy-content">
                    <div class="approximation-methods">
                      <h5>近似策略：</h5>
                      <ul class="approximation-list">
                        <li><strong>Tamm-Dancoff近似：</strong>忽略B矩阵</li>
                        <li><strong>单极近似：</strong>只考虑主要跃迁</li>
                        <li><strong>筛选技术：</strong>忽略小的矩阵元</li>
                        <li><strong>局域化方法：</strong>利用空间局域性</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="software-implementations">
            <h3>软件实现</h3>
            <div class="software-landscape">
              <div class="software-categories">
                <div class="software-card quantum-chemistry-codes">
                  <h4>🧪 量子化学软件</h4>
                  <div class="software-list">
                    <div class="software-item">
                      <h5>Gaussian</h5>
                      <p>TD-DFT和CIS方法</p>
                    </div>
                    <div class="software-item">
                      <h5>ORCA</h5>
                      <p>高效的TD-DFT实现</p>
                    </div>
                    <div class="software-item">
                      <h5>Turbomole</h5>
                      <p>快速RPA计算</p>
                    </div>
                    <div class="software-item">
                      <h5>Q-Chem</h5>
                      <p>多种激发态方法</p>
                    </div>
                  </div>
                </div>

                <div class="software-card solid-state-codes">
                  <h4>🔬 固体物理软件</h4>
                  <div class="software-list">
                    <div class="software-item">
                      <h5>VASP</h5>
                      <p>基于平面波的RPA</p>
                    </div>
                    <div class="software-item">
                      <h5>WIEN2k</h5>
                      <p>全电子RPA计算</p>
                    </div>
                    <div class="software-item">
                      <h5>Quantum ESPRESSO</h5>
                      <p>开源RPA实现</p>
                    </div>
                    <div class="software-item">
                      <h5>ABINIT</h5>
                      <p>GW+RPA方法</p>
                    </div>
                  </div>
                </div>

                <div class="software-card specialized-codes">
                  <h4>🎯 专用软件</h4>
                  <div class="software-list">
                    <div class="software-item">
                      <h5>YAMBO</h5>
                      <p>多体微扰理论</p>
                    </div>
                    <div class="software-item">
                      <h5>BerkeleyGW</h5>
                      <p>大规模GW计算</p>
                    </div>
                    <div class="software-item">
                      <h5>EXCITING</h5>
                      <p>全电子激发态</p>
                    </div>
                    <div class="software-item">
                      <h5>FHI-aims</h5>
                      <p>数值原子轨道RPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>局限性与改进</h2>
        <div class="limitations-improvements">
          <div class="limitation-analysis">
            <h3>RPA的主要局限性</h3>
            <div class="limitation-showcase">
              <div class="limitation-cards">
                <div class="limitation-card correlation">
                  <div class="limitation-header">
                    <h4>🔄 关联效应不足</h4>
                    <span class="limitation-tag correlation">关联</span>
                  </div>
                  <div class="limitation-content">
                    <div class="correlation-issues">
                      <h5>主要问题：</h5>
                      <ul class="issue-list">
                        <li>忽略电子-电子关联</li>
                        <li>无法描述强关联系统</li>
                        <li>激发能通常偏高</li>
                        <li>双激发贡献缺失</li>
                      </ul>
                      <div class="correlation-examples">
                        <h6>典型失效案例：</h6>
                        <p>过渡金属化合物、强关联材料、电荷转移激发</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="limitation-card exchange">
                  <div class="limitation-header">
                    <h4>⚡ 交换效应处理</h4>
                    <span class="limitation-tag exchange">交换</span>
                  </div>
                  <div class="limitation-content">
                    <div class="exchange-problems">
                      <h5>交换相关问题：</h5>
                      <ul class="problem-list">
                        <li>依赖于起始的交换关联泛函</li>
                        <li>长程交换效应不准确</li>
                        <li>激子结合能低估</li>
                        <li>电荷转移态描述困难</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="limitation-card computational">
                  <div class="limitation-header">
                    <h4>💻 计算复杂度</h4>
                    <span class="limitation-tag computational">计算</span>
                  </div>
                  <div class="limitation-content">
                    <div class="computational-challenges">
                      <h5>计算挑战：</h5>
                      <ul class="challenge-list">
                        <li>O(N⁴)标度行为</li>
                        <li>大量虚轨道需求</li>
                        <li>内存需求巨大</li>
                        <li>收敛性问题</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="improvement-methods">
            <h3>改进方法与扩展</h3>
            <div class="improvement-showcase">
              <div class="improvement-cards">
                <div class="improvement-card beyond-rpa">
                  <div class="improvement-header">
                    <h4>📈 超越RPA方法</h4>
                    <span class="improvement-tag advanced">高级</span>
                  </div>
                  <div class="improvement-content">
                    <div class="beyond-rpa-methods">
                      <h5>后RPA方法：</h5>
                      <div class="method-descriptions">
                        <div class="method-item">
                          <h6>RPA+SOSEX</h6>
                          <p>包含二阶交换效应</p>
                          <div class="equation-formula small">
                            E = E^RPA + E^SOSEX
                          </div>
                        </div>
                        <div class="method-item">
                          <h6>dRPA</h6>
                          <p>直接RPA，改进交换处理</p>
                        </div>
                        <div class="method-item">
                          <h6>BSE</h6>
                          <p>Bethe-Salpeter方程</p>
                          <div class="equation-formula small">
                            (ε - H₀)Ψ = KΨ
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="improvement-card hybrid-approaches">
                  <div class="improvement-header">
                    <h4>🔄 杂化方法</h4>
                    <span class="improvement-tag hybrid">杂化</span>
                  </div>
                  <div class="improvement-content">
                    <div class="hybrid-strategies">
                      <h5>杂化策略：</h5>
                      <ul class="strategy-list">
                        <li><strong>GW+RPA：</strong>结合GW自能修正</li>
                        <li><strong>RPA+U：</strong>加入Hubbard修正</li>
                        <li><strong>Hybrid functionals：</strong>杂化泛函基础</li>
                        <li><strong>Range-separated：</strong>长短程分离</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="improvement-card algorithmic">
                  <div class="improvement-header">
                    <h4>⚡ 算法优化</h4>
                    <span class="improvement-tag algorithmic">算法</span>
                  </div>
                  <div class="improvement-content">
                    <div class="algorithmic-advances">
                      <h5>算法改进：</h5>
                      <ul class="advance-list">
                        <li><strong>线性标度算法：</strong>O(N)或O(N²)方法</li>
                        <li><strong>局域化技术：</strong>利用空间局域性</li>
                        <li><strong>并行化：</strong>大规模并行计算</li>
                        <li><strong>GPU加速：</strong>图形处理器加速</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>未来发展方向</h2>
        <div class="future-directions">
          <div class="research-frontiers">
            <h3>前沿研究方向</h3>
            <div class="frontier-showcase">
              <div class="frontier-cards">
                <div class="frontier-card machine-learning">
                  <div class="frontier-icon">🤖</div>
                  <div class="frontier-content">
                    <h4>机器学习辅助</h4>
                    <p>利用AI技术加速RPA计算和改进近似</p>
                    <div class="ml-applications">
                      <h5>应用方向：</h5>
                      <ul class="ml-list">
                        <li>智能筛选重要激发</li>
                        <li>机器学习泛函</li>
                        <li>自动参数优化</li>
                        <li>快速性质预测</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="frontier-card quantum-computing">
                  <div class="frontier-icon">🖥️</div>
                  <div class="frontier-content">
                    <h4>量子计算</h4>
                    <p>量子计算机在RPA计算中的潜在应用</p>
                    <div class="quantum-prospects">
                      <h5>发展前景：</h5>
                      <ul class="quantum-list">
                        <li>指数级加速可能</li>
                        <li>自然量子并行性</li>
                        <li>大规模系统处理</li>
                        <li>新的算法范式</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="frontier-card multiscale">
                  <div class="frontier-icon">🔬</div>
                  <div class="frontier-content">
                    <h4>多尺度方法</h4>
                    <p>结合不同尺度的理论方法</p>
                    <div class="multiscale-approaches">
                      <h5>集成策略：</h5>
                      <ul class="multiscale-list">
                        <li>QM/MM结合</li>
                        <li>嵌入理论</li>
                        <li>粗粒化方法</li>
                        <li>连续介质模型</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="frontier-card real-time">
                  <div class="frontier-icon">⏱️</div>
                  <div class="frontier-content">
                    <h4>实时动力学</h4>
                    <p>非平衡态和时间依赖现象</p>
                    <div class="realtime-phenomena">
                      <h5>研究对象：</h5>
                      <ul class="realtime-list">
                        <li>超快光谱学</li>
                        <li>非线性光学</li>
                        <li>泵浦-探测实验</li>
                        <li>量子相干动力学</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="technological-impact">
            <h3>技术影响与应用前景</h3>
            <div class="impact-analysis">
              <div class="impact-areas">
                <div class="impact-card materials-design">
                  <h4>🔬 材料设计</h4>
                  <div class="materials-applications">
                    <ul class="materials-list">
                      <li>光伏材料优化</li>
                      <li>发光材料设计</li>
                      <li>催化剂筛选</li>
                      <li>量子材料探索</li>
                    </ul>
                  </div>
                </div>

                <div class="impact-card drug-discovery">
                  <h4>💊 药物发现</h4>
                  <div class="drug-applications">
                    <ul class="drug-list">
                      <li>分子激发态性质</li>
                      <li>光动力学治疗</li>
                      <li>荧光探针设计</li>
                      <li>药物-蛋白相互作用</li>
                    </ul>
                  </div>
                </div>

                <div class="impact-card energy-technology">
                  <h4>⚡ 能源技术</h4>
                  <div class="energy-applications">
                    <ul class="energy-list">
                      <li>太阳能电池</li>
                      <li>燃料电池</li>
                      <li>储能材料</li>
                      <li>人工光合作用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_6',
  mounted() {
    // 页面加载完成后的初始化
    console.log('无规相近似(RPA)页面已加载');
  }
}
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
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

/* 卡片样式 */
.definition-card, .step-card, .approx-card, .mode-card, .domain-card,
.technique-card, .strategy-card, .software-card, .limitation-card,
.improvement-card, .frontier-card, .impact-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #3498db;
}

.definition-card.primary {
  border-left-color: #667eea;
  background: linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%);
}

.card-header, .approx-header, .mode-header, .domain-header, .technique-header,
.strategy-header, .limitation-header, .improvement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3, .approx-header h4, .mode-header h5, .domain-header h4,
.technique-header h4, .strategy-header h4, .limitation-header h4, .improvement-header h4 {
  color: #2c3e50;
  margin: 0;
}

/* 标签样式 */
.concept-tag, .approx-tag, .mode-tag, .domain-tag, .technique-tag,
.strategy-tag, .limitation-tag, .improvement-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
}

.concept-tag {
  background: #667eea;
  color: white;
}

.approx-tag.coherent {
  background: #3498db;
  color: white;
}

.approx-tag.diagrammatic {
  background: #e74c3c;
  color: white;
}

.mode-tag.electronic {
  background: #f39c12;
  color: white;
}

.mode-tag.lattice {
  background: #27ae60;
  color: white;
}

.mode-tag.magnetic {
  background: #e74c3c;
  color: white;
}

.domain-tag.solid {
  background: #34495e;
  color: white;
}

.domain-tag.nuclear {
  background: #9b59b6;
  color: white;
}

.domain-tag.molecular {
  background: #e67e22;
  color: white;
}

.domain-tag.plasma {
  background: #f39c12;
  color: white;
}

.technique-tag.optical {
  background: #3498db;
  color: white;
}

.technique-tag.scattering {
  background: #27ae60;
  color: white;
}

.strategy-tag.exact {
  background: #e74c3c;
  color: white;
}

.strategy-tag.efficient {
  background: #27ae60;
  color: white;
}

.strategy-tag.scalable {
  background: #f39c12;
  color: white;
}

.limitation-tag.correlation {
  background: #e74c3c;
  color: white;
}

.limitation-tag.exchange {
  background: #f39c12;
  color: white;
}

.limitation-tag.computational {
  background: #9b59b6;
  color: white;
}

.improvement-tag.advanced {
  background: #27ae60;
  color: white;
}

.improvement-tag.hybrid {
  background: #3498db;
  color: white;
}

.improvement-tag.algorithmic {
  background: #f39c12;
  color: white;
}

/* 方程式样式 */
.equation-formula {
  background: #2c3e50;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  overflow-x: auto;
}

.equation-formula.large {
  font-size: 1.3em;
  padding: 20px;
}

.equation-formula.small {
  font-size: 0.9em;
  padding: 10px 15px;
}

.equation-formula.highlighted {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* 网格布局 */
.feature-grid, .term-grid, .interpretation-grid, .method-grid, .algorithm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.feature-item, .term-item, .interpretation-item, .method-item, .algorithm-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.feature-icon {
  font-size: 1.2em;
}

/* 步骤样式 */
.development-steps, .approach-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.step-number {
  background: #667eea;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-header h4 {
  margin: 0;
  color: #2c3e50;
}

/* 近似卡片 */
.approximation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

.approx-card.phase-coherence {
  border-left-color: #3498db;
}

.approx-card.ring-diagrams {
  border-left-color: #e74c3c;
}

/* 图形表示 */
.diagram-representation {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.diagram-term {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.diagram-symbol {
  font-family: monospace;
  font-size: 1.2em;
  color: #2c3e50;
}

.diagram-meaning {
  font-size: 0.8em;
  color: #666;
}

.diagram-operator {
  font-size: 1.2em;
  color: #667eea;
  font-weight: bold;
}

/* 模式卡片 */
.mode-showcase {
  margin-top: 20px;
}

.mode-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.mode-card.plasmon {
  border-left-color: #f39c12;
}

.mode-card.phonon {
  border-left-color: #27ae60;
}

.mode-card.magnon {
  border-left-color: #e74c3c;
}

/* 应用领域卡片 */
.domain-showcase {
  margin-top: 20px;
}

.domain-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.domain-card.condensed-matter {
  border-left-color: #34495e;
}

.domain-card.nuclear-physics {
  border-left-color: #9b59b6;
}

.domain-card.quantum-chemistry {
  border-left-color: #e67e22;
}

.domain-card.plasma-physics {
  border-left-color: #f39c12;
}

/* 技术卡片 */
.technique-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.technique-card.spectroscopy {
  border-left-color: #3498db;
}

.technique-card.scattering {
  border-left-color: #27ae60;
}

/* 策略卡片 */
.strategy-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.strategy-card.direct-diagonalization {
  border-left-color: #e74c3c;
}

.strategy-card.iterative-methods {
  border-left-color: #27ae60;
}

.strategy-card.approximation-schemes {
  border-left-color: #f39c12;
}

/* 软件分类 */
.software-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.software-card.quantum-chemistry-codes {
  border-left-color: #e67e22;
}

.software-card.solid-state-codes {
  border-left-color: #34495e;
}

.software-card.specialized-codes {
  border-left-color: #9b59b6;
}

.software-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.software-item {
  padding: 10px 0;
  border-bottom: 1px solid #ecf0f1;
}

.software-item:last-child {
  border-bottom: none;
}

.software-item h5 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.software-item p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

/* 局限性卡片 */
.limitation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.limitation-card.correlation {
  border-left-color: #e74c3c;
}

.limitation-card.exchange {
  border-left-color: #f39c12;
}

.limitation-card.computational {
  border-left-color: #9b59b6;
}

/* 改进方法卡片 */
.improvement-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.improvement-card.beyond-rpa {
  border-left-color: #27ae60;
}

.improvement-card.hybrid-approaches {
  border-left-color: #3498db;
}

.improvement-card.algorithmic {
  border-left-color: #f39c12;
}

/* 前沿研究卡片 */
.frontier-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.frontier-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.frontier-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.frontier-content h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.frontier-content p {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.9em;
}

.ml-applications, .quantum-prospects, .multiscale-approaches, .realtime-phenomena {
  text-align: left;
}

/* 影响分析 */
.impact-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.impact-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #667eea;
}

.impact-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 列表样式 */
.coherence-list, .application-list, .property-list, .approach-features,
.advantage-list, .approximation-list, .issue-list, .problem-list,
.challenge-list, .strategy-list, .advance-list, .ml-list, .quantum-list,
.multiscale-list, .realtime-list, .materials-list, .drug-list, .energy-list,
.scattering-list {
  list-style: none;
  padding: 0;
}

.coherence-list li, .application-list li, .property-list li, .approach-features li,
.advantage-list li, .approximation-list li, .issue-list li, .problem-list li,
.challenge-list li, .strategy-list li, .advance-list li, .ml-list li, .quantum-list li,
.multiscale-list li, .realtime-list li, .materials-list li, .drug-list li, .energy-list li,
.scattering-list li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.coherence-list li::before, .application-list li::before, .property-list li::before,
.approach-features li::before, .advantage-list li::before, .approximation-list li::before,
.issue-list li::before, .problem-list li::before, .challenge-list li::before,
.strategy-list li::before, .advance-list li::before, .ml-list li::before,
.quantum-list li::before, .multiscale-list li::before, .realtime-list li::before,
.materials-list li::before, .drug-list li::before, .energy-list li::before,
.scattering-list li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #667eea;
  font-size: 0.8em;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .feature-grid, .term-grid, .interpretation-grid, .method-grid, .algorithm-grid {
    grid-template-columns: 1fr;
  }
  
  .approximation-cards, .mode-cards, .domain-cards, .technique-cards,
  .strategy-cards, .software-categories, .limitation-cards, .improvement-cards,
  .frontier-cards, .impact-areas {
    grid-template-columns: 1fr;
  }
  
  .equation-formula {
    font-size: 0.9em;
    padding: 10px;
  }
  
  .equation-formula.large {
    font-size: 1em;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .chapter-header {
    padding: 20px 0;
  }
  
  .chapter-header h1 {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .content-section {
    padding: 15px;
  }
  
  .content-section h2 {
    font-size: 1.5em;
  }
  
  .equation-formula {
    font-size: 0.8em;
    padding: 8px;
  }
}

/* 动画效果 */
.definition-card, .step-card, .approx-card, .mode-card, .domain-card,
.technique-card, .strategy-card, .software-card, .limitation-card,
.improvement-card, .frontier-card, .impact-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.definition-card:hover, .step-card:hover, .approx-card:hover, .mode-card:hover,
.domain-card:hover, .technique-card:hover, .strategy-card:hover, .software-card:hover,
.limitation-card:hover, .improvement-card:hover, .frontier-card:hover, .impact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.equation-formula {
  transition: box-shadow 0.2s ease;
}

.equation-formula:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    padding: 0;
  }
  
  .chapter-header {
    background: none !important;
    color: black !important;
    border: 2px solid #333;
  }
  
  .content-section {
    box-shadow: none;
    border: 1px solid #ccc;
    page-break-inside: avoid;
  }
  
  .equation-formula {
    background: #f5f5f5 !important;
    color: black !important;
    border: 1px solid #333;
  }
  
  .definition-card, .step-card, .approx-card, .mode-card, .domain-card,
  .technique-card, .strategy-card, .software-card, .limitation-card,
  .improvement-card, .frontier-card, .impact-card {
    background: white !important;
    border: 1px solid #ccc;
    box-shadow: none;
  }
}
</style>