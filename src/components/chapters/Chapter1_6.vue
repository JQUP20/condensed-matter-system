<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.6 固体物理简要回顾</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">基础回顾</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>为什么需要回顾固体物理？</h2>
        <p class="lead-text">
          固体物理学是凝聚态物理的基础，为理解复杂的多体现象提供了必要的概念框架和分析工具。
          本节将系统回顾固体物理的核心概念，为深入学习凝聚态物理奠定坚实基础。
        </p>
      </section>

      <section class="content-section">
        <h2>晶体结构与对称性</h2>
        <div class="crystal-structure">
          <div class="concept-card featured">
            <div class="concept-header">
              <div class="concept-icon">🔷</div>
              <h3>晶格基础</h3>
            </div>
            <div class="concept-content">
              <div class="definition-box">
                <h4>基本定义</h4>
                <p>
                  <strong>晶格</strong>：原子在三维空间中的周期性排列<br>
                  <strong>基矢</strong>：描述晶格周期性的最小向量组 <strong>a₁, a₂, a₃</strong><br>
                  <strong>原胞</strong>：包含一个格点的最小重复单元
                </p>
              </div>
              
              <div class="lattice-types">
                <h4>14种布拉维格子详解</h4>
                <div class="lattice-grid">
                  <div class="lattice-item">
                    <div class="lattice-symbol">P</div>
                    <span>简单</span>
                    <div class="lattice-details">
                      <p>格点仅在顶点</p>
                      <p>配位数：6-12</p>
                      <p>堆积效率：52.4%</p>
                    </div>
                  </div>
                  <div class="lattice-item">
                    <div class="lattice-symbol">I</div>
                    <span>体心</span>
                    <div class="lattice-details">
                      <p>顶点+体心</p>
                      <p>配位数：8</p>
                      <p>堆积效率：68.0%</p>
                    </div>
                  </div>
                  <div class="lattice-item">
                    <div class="lattice-symbol">F</div>
                    <span>面心</span>
                    <div class="lattice-details">
                      <p>顶点+面心</p>
                      <p>配位数：12</p>
                      <p>堆积效率：74.0%</p>
                    </div>
                  </div>
                  <div class="lattice-item">
                    <div class="lattice-symbol">C</div>
                    <span>底心</span>
                    <div class="lattice-details">
                      <p>顶点+底面中心</p>
                      <p>配位数：变化</p>
                      <p>特殊对称性</p>
                    </div>
                  </div>
                </div>
                
                <div class="mathematical-foundation">
                  <h5>数学描述</h5>
                  <div class="formula-group">
                    <div class="formula">R⃗ = n₁a⃗₁ + n₂a⃗₂ + n₃a⃗₃</div>
                    <p class="formula-desc">格矢表示</p>
                  </div>
                  <div class="formula-group">
                    <div class="formula">V = |a⃗₁ · (a⃗₂ × a⃗₃)|</div>
                    <p class="formula-desc">原胞体积</p>
                  </div>
                </div>
              </div>

              <div class="crystal-systems">
                <h4>七大晶系详解</h4>
                <div class="systems-grid">
                  <div class="system-card">
                    <h5>立方 (Cubic)</h5>
                    <p>a = b = c, α = β = γ = 90°</p>
                    <div class="system-examples">
                      <span class="example">NaCl</span>
                      <span class="example">Si</span>
                      <span class="example">Fe</span>
                    </div>
                    <div class="system-properties">
                      <p>最高对称性，48个对称操作</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>四方 (Tetragonal)</h5>
                    <p>a = b ≠ c, α = β = γ = 90°</p>
                    <div class="system-examples">
                      <span class="example">TiO₂</span>
                      <span class="example">SnO₂</span>
                    </div>
                    <div class="system-properties">
                      <p>16个对称操作，单轴各向异性</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>正交 (Orthorhombic)</h5>
                    <p>a ≠ b ≠ c, α = β = γ = 90°</p>
                    <div class="system-examples">
                      <span class="example">CaCO₃</span>
                      <span class="example">BaSO₄</span>
                    </div>
                    <div class="system-properties">
                      <p>8个对称操作，三轴各向异性</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>六方 (Hexagonal)</h5>
                    <p>a = b ≠ c, α = β = 90°, γ = 120°</p>
                    <div class="system-examples">
                      <span class="example">石墨</span>
                      <span class="example">ZnO</span>
                    </div>
                    <div class="system-properties">
                      <p>24个对称操作，六重旋转轴</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>三方 (Trigonal)</h5>
                    <p>a = b = c, α = β = γ ≠ 90°</p>
                    <div class="system-examples">
                      <span class="example">α-Al₂O₃</span>
                      <span class="example">石英</span>
                    </div>
                    <div class="system-properties">
                      <p>12个对称操作，三重旋转轴</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>单斜 (Monoclinic)</h5>
                    <p>a ≠ b ≠ c, α = γ = 90° ≠ β</p>
                    <div class="system-examples">
                      <span class="example">CaSO₄·2H₂O</span>
                    </div>
                    <div class="system-properties">
                      <p>4个对称操作，低对称性</p>
                    </div>
                  </div>
                  <div class="system-card">
                    <h5>三斜 (Triclinic)</h5>
                    <p>a ≠ b ≠ c, α ≠ β ≠ γ ≠ 90°</p>
                    <div class="system-examples">
                      <span class="example">CuSO₄·5H₂O</span>
                    </div>
                    <div class="system-properties">
                      <p>2个对称操作，最低对称性</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="symmetry-section">
            <h3>对称性操作</h3>
            <div class="symmetry-operations">
              <div class="operation-card">
                <div class="operation-icon">↻</div>
                <h4>旋转对称</h4>
                <p>绕轴旋转 2π/n 的操作</p>
                <div class="examples">
                  <span class="example-tag">C₂</span>
                  <span class="example-tag">C₃</span>
                  <span class="example-tag">C₄</span>
                  <span class="example-tag">C₆</span>
                </div>
              </div>

              <div class="operation-card">
                <div class="operation-icon">⟷</div>
                <h4>反射对称</h4>
                <p>通过镜面的反射操作</p>
                <div class="examples">
                  <span class="example-tag">σᵥ</span>
                  <span class="example-tag">σₕ</span>
                  <span class="example-tag">σd</span>
                </div>
              </div>

              <div class="operation-card">
                <div class="operation-icon">⊙</div>
                <h4>反演对称</h4>
                <p>通过中心点的反演操作</p>
                <div class="examples">
                  <span class="example-tag">i</span>
                </div>
              </div>

              <div class="operation-card">
                <div class="operation-icon">↗</div>
                <h4>平移对称</h4>
                <p>沿晶格矢量的平移操作</p>
                <div class="examples">
                  <span class="example-tag">T(R)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>倒格子与布里渊区</h2>
        <div class="reciprocal-lattice">
          <div class="concept-explanation">
            <div class="definition-panel">
              <h3>倒格子的定义</h3>
              <div class="math-content">
                <p>对于正格子基矢 <strong>a₁, a₂, a₃</strong>，倒格子基矢定义为：</p>
                <div class="equation-box">
                  <div class="equation">
                    <strong>b₁</strong> = 2π(<strong>a₂</strong> × <strong>a₃</strong>)/V₀
                  </div>
                  <div class="equation">
                    <strong>b₂</strong> = 2π(<strong>a₃</strong> × <strong>a₁</strong>)/V₀
                  </div>
                  <div class="equation">
                    <strong>b₃</strong> = 2π(<strong>a₁</strong> × <strong>a₂</strong>)/V₀
                  </div>
                </div>
                <p>其中 V₀ = <strong>a₁</strong> · (<strong>a₂</strong> × <strong>a₃</strong>) 是原胞体积</p>
              </div>
            </div>

            <div class="properties-panel">
              <h3>重要性质</h3>
              <div class="property-list">
                <div class="property-item">
                  <div class="property-icon">✓</div>
                  <div class="property-text">
                    <strong>正交性</strong>：<strong>aᵢ</strong> · <strong>bⱼ</strong> = 2πδᵢⱼ
                  </div>
                </div>
                <div class="property-item">
                  <div class="property-icon">✓</div>
                  <div class="property-text">
                    <strong>周期性</strong>：exp(i<strong>G</strong>·<strong>R</strong>) = 1
                  </div>
                </div>
                <div class="property-item">
                  <div class="property-icon">✓</div>
                  <div class="property-text">
                    <strong>对偶性</strong>：倒格子的倒格子是原格子
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="brillouin-zone">
            <h3>布里渊区</h3>
            <div class="bz-content">
              <div class="bz-definition">
                <h4>定义与构造</h4>
                <p>
                  布里渊区是倒格子空间中的Wigner-Seitz原胞，
                  通过倒格子矢量的垂直平分面构造。
                </p>
                <div class="bz-types">
                  <div class="bz-type">
                    <h5>第一布里渊区</h5>
                    <p>包含Γ点的最小区域</p>
                  </div>
                  <div class="bz-type">
                    <h5>第二布里渊区</h5>
                    <p>被一个平分面分割的区域</p>
                  </div>
                  <div class="bz-type">
                    <h5>高阶布里渊区</h5>
                    <p>被多个平分面分割的区域</p>
                  </div>
                </div>
              </div>

              <div class="high-symmetry-points">
                <h4>高对称点</h4>
                <div class="symmetry-points-grid">
                  <div class="point-card">
                    <div class="point-symbol">Γ</div>
                    <div class="point-info">
                      <h6>Γ点</h6>
                      <p>布里渊区中心 (0,0,0)</p>
                    </div>
                  </div>
                  <div class="point-card">
                    <div class="point-symbol">X</div>
                    <div class="point-info">
                      <h6>X点</h6>
                      <p>面心位置</p>
                    </div>
                  </div>
                  <div class="point-card">
                    <div class="point-symbol">L</div>
                    <div class="point-info">
                      <h6>L点</h6>
                      <p>顶点位置</p>
                    </div>
                  </div>
                  <div class="point-card">
                    <div class="point-symbol">K</div>
                    <div class="point-info">
                      <h6>K点</h6>
                      <p>边中点位置</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>能带理论基础</h2>
        <div class="band-theory">
          <div class="theory-overview">
            <h3>理论框架</h3>
            <div class="framework-cards">
              <div class="framework-card">
                <div class="framework-header">
                  <h4>Bloch定理</h4>
                  <span class="importance-badge">核心</span>
                </div>
                <div class="framework-content">
                  <p>在周期势场中，电子波函数具有Bloch形式：</p>
                  <div class="equation-display">
                    ψₙₖ(r) = uₙₖ(r)e^(ik·r)
                  </div>
                  <p>其中 uₙₖ(r) 具有晶格的周期性</p>
                  <div class="implications">
                    <h5>重要结果</h5>
                    <ul>
                      <li>能量的周期性：E(k + G) = E(k)</li>
                      <li>波矢的约化：k ∈ 第一布里渊区</li>
                      <li>能带的形成：连续能谱 → 能带结构</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="framework-card">
                <div class="framework-header">
                  <h4>近似方法</h4>
                  <span class="importance-badge">实用</span>
                </div>
                <div class="framework-content">
                  <div class="approximation-methods">
                    <div class="method-item">
                      <h5>自由电子近似</h5>
                      <p>忽略离子势，E = ℏ²k²/2m</p>
                      <div class="pros-cons">
                        <span class="pro">简单直观</span>
                        <span class="con">精度有限</span>
                      </div>
                    </div>
                    <div class="method-item">
                      <h5>紧束缚近似</h5>
                      <p>原子轨道线性组合</p>
                      <div class="pros-cons">
                        <span class="pro">物理图像清晰</span>
                        <span class="pro">适用于窄带</span>
                      </div>
                    </div>
                    <div class="method-item">
                      <h5>平面波方法</h5>
                      <p>周期势的傅里叶展开</p>
                      <div class="pros-cons">
                        <span class="pro">系统性强</span>
                        <span class="con">计算复杂</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="band-structure-analysis">
            <h3>能带结构分析</h3>
            <div class="analysis-sections">
              <div class="band-types">
                <h4>能带分类</h4>
                <div class="band-classification">
                  <div class="band-category">
                    <div class="category-header">
                      <h5>价带 (Valence Band)</h5>
                      <div class="fill-indicator filled">已占据</div>
                    </div>
                    <p>T=0K时完全被电子占据的能带</p>
                    <div class="characteristics">
                      <span class="char-tag">束缚态</span>
                      <span class="char-tag">局域化</span>
                    </div>
                  </div>

                  <div class="band-category">
                    <div class="category-header">
                      <h5>导带 (Conduction Band)</h5>
                      <div class="fill-indicator empty">未占据</div>
                    </div>
                    <p>T=0K时完全空的能带</p>
                    <div class="characteristics">
                      <span class="char-tag">扩展态</span>
                      <span class="char-tag">导电性</span>
                    </div>
                  </div>

                  <div class="band-category">
                    <div class="category-header">
                      <h5>禁带 (Band Gap)</h5>
                      <div class="fill-indicator gap">能隙</div>
                    </div>
                    <p>价带顶与导带底之间的能量间隔</p>
                    <div class="characteristics">
                      <span class="char-tag">Eg > 0</span>
                      <span class="char-tag">绝缘性</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="material-classification">
                <h4>材料分类</h4>
                <div class="material-types">
                  <div class="material-card conductor">
                    <div class="material-header">
                      <h5>金属 (Metal)</h5>
                      <div class="conductivity-bar">
                        <div class="conductivity-fill" style="width: 100%"></div>
                      </div>
                    </div>
                    <div class="material-properties">
                      <p><strong>特征</strong>：费米面穿过能带</p>
                      <p><strong>电导率</strong>：σ ~ 10⁶ S/m</p>
                      <p><strong>温度依赖</strong>：ρ ∝ T</p>
                    </div>
                    <div class="examples">
                      <span class="example">Cu</span>
                      <span class="example">Al</span>
                      <span class="example">Au</span>
                    </div>
                  </div>

                  <div class="material-card semiconductor">
                    <div class="material-header">
                      <h5>半导体 (Semiconductor)</h5>
                      <div class="conductivity-bar">
                        <div class="conductivity-fill" style="width: 60%"></div>
                      </div>
                    </div>
                    <div class="material-properties">
                      <p><strong>特征</strong>：小能隙 (Eg < 3 eV)</p>
                      <p><strong>电导率</strong>：σ ~ 10⁻⁶-10³ S/m</p>
                      <p><strong>温度依赖</strong>：σ ∝ exp(-Eg/2kT)</p>
                    </div>
                    <div class="examples">
                      <span class="example">Si</span>
                      <span class="example">Ge</span>
                      <span class="example">GaAs</span>
                    </div>
                  </div>

                  <div class="material-card insulator">
                    <div class="material-header">
                      <h5>绝缘体 (Insulator)</h5>
                      <div class="conductivity-bar">
                        <div class="conductivity-fill" style="width: 10%"></div>
                      </div>
                    </div>
                    <div class="material-properties">
                      <p><strong>特征</strong>：大能隙 (Eg > 3 eV)</p>
                      <p><strong>电导率</strong>：σ < 10⁻⁸ S/m</p>
                      <p><strong>温度依赖</strong>：激活型导电</p>
                    </div>
                    <div class="examples">
                      <span class="example">Diamond</span>
                      <span class="example">SiO₂</span>
                      <span class="example">Al₂O₃</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运性质</h2>
        <div class="transport-properties">
          <div class="electrical-transport">
            <h3>电输运</h3>
            <div class="transport-theory">
              <div class="theory-card">
                <h4>Drude模型</h4>
                <div class="model-content">
                  <div class="assumptions">
                    <h5>基本假设</h5>
                    <ul>
                      <li>自由电子气体</li>
                      <li>弹性散射机制</li>
                      <li>弛豫时间近似</li>
                    </ul>
                  </div>
                  <div class="key-results">
                    <h5>主要结果</h5>
                    <div class="result-equations">
                      <div class="equation-item">
                        <span class="equation-label">电导率：</span>
                        <span class="equation-formula">σ = ne²τ/m</span>
                      </div>
                      <div class="equation-item">
                        <span class="equation-label">霍尔系数：</span>
                        <span class="equation-formula">RH = 1/ne</span>
                      </div>
                      <div class="equation-item">
                        <span class="equation-label">洛伦兹数：</span>
                        <span class="equation-formula">L = π²kB²/3e²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="theory-card">
                <h4>Boltzmann输运理论</h4>
                <div class="model-content">
                  <div class="boltzmann-equation">
                    <h5>Boltzmann方程</h5>
                    <div class="equation-display">
                      ∂f/∂t + v·∇f + (e/ℏ)(E + v×B)·∇ₖf = (∂f/∂t)coll
                    </div>
                  </div>
                  <div class="applications">
                    <h5>应用范围</h5>
                    <ul>
                      <li>半经典输运</li>
                      <li>非线性响应</li>
                      <li>热电效应</li>
                      <li>磁输运</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="scattering-mechanisms">
            <h3>散射机制</h3>
            <div class="scattering-types">
              <div class="scattering-card">
                <div class="scattering-header">
                  <h4>声子散射</h4>
                  <span class="temperature-dep">T依赖</span>
                </div>
                <div class="scattering-details">
                  <p><strong>机制</strong>：电子与晶格振动的相互作用</p>
                  <p><strong>温度依赖</strong>：</p>
                  <ul>
                    <li>高温：τ⁻¹ ∝ T</li>
                    <li>低温：τ⁻¹ ∝ T⁵</li>
                  </ul>
                  <div class="scattering-types-sub">
                    <span class="type-tag">声学声子</span>
                    <span class="type-tag">光学声子</span>
                  </div>
                </div>
              </div>

              <div class="scattering-card">
                <div class="scattering-header">
                  <h4>杂质散射</h4>
                  <span class="temperature-dep">T无关</span>
                </div>
                <div class="scattering-details">
                  <p><strong>机制</strong>：电子与杂质原子的散射</p>
                  <p><strong>特点</strong>：</p>
                  <ul>
                    <li>低温主导</li>
                    <li>浓度依赖</li>
                    <li>残余电阻</li>
                  </ul>
                  <div class="scattering-types-sub">
                    <span class="type-tag">离化杂质</span>
                    <span class="type-tag">中性杂质</span>
                  </div>
                </div>
              </div>

              <div class="scattering-card">
                <div class="scattering-header">
                  <h4>边界散射</h4>
                  <span class="temperature-dep">尺寸依赖</span>
                </div>
                <div class="scattering-details">
                  <p><strong>机制</strong>：电子与样品边界的散射</p>
                  <p><strong>重要性</strong>：</p>
                  <ul>
                    <li>薄膜中显著</li>
                    <li>纳米结构</li>
                    <li>尺寸效应</li>
                  </ul>
                  <div class="scattering-types-sub">
                    <span class="type-tag">表面散射</span>
                    <span class="type-tag">界面散射</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="matthiessen-rule">
              <h4>Matthiessen定则</h4>
              <div class="rule-content">
                <p>不同散射机制的弛豫时间倒数相加：</p>
                <div class="equation-display">
                  1/τtotal = 1/τphonon + 1/τimpurity + 1/τboundary + ...
                </div>
                <div class="rule-implications">
                  <p><strong>物理意义</strong>：各散射过程独立，总散射率为各散射率之和</p>
                  <p><strong>应用</strong>：分析不同温度区间的主导散射机制</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>磁性基础</h2>
        <div class="magnetism-basics">
          <div class="magnetic-moments">
            <h3>磁矩的起源</h3>
            <div class="moment-sources">
              <div class="source-card">
                <div class="source-header">
                  <div class="source-icon">🌀</div>
                  <h4>轨道磁矩</h4>
                </div>
                <div class="source-content">
                  <p><strong>经典图像</strong>：电子轨道运动形成电流环</p>
                  <div class="equation-display">
                    μL = -μB√[l(l+1)]
                  </div>
                  <p>其中 μB = eℏ/2m 是玻尔磁子</p>
                  <div class="characteristics">
                    <span class="char-tag">量子化</span>
                    <span class="char-tag">轨道角动量</span>
                  </div>
                </div>
              </div>

              <div class="source-card">
                <div class="source-header">
                  <div class="source-icon">↕️</div>
                  <h4>自旋磁矩</h4>
                </div>
                <div class="source-content">
                  <p><strong>内禀性质</strong>：电子的固有角动量</p>
                  <div class="equation-display">
                    μS = -gSμB√[S(S+1)]
                  </div>
                  <p>对于电子：gS ≈ 2, S = 1/2</p>
                  <div class="characteristics">
                    <span class="char-tag">内禀性质</span>
                    <span class="char-tag">g因子</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="magnetic-types">
            <h3>磁性分类</h3>
            <div class="magnetism-classification">
              <div class="magnetic-type diamagnetic">
                <div class="type-header">
                  <h4>抗磁性 (Diamagnetism)</h4>
                  <div class="susceptibility-value">χ < 0</div>
                </div>
                <div class="type-content">
                  <div class="mechanism">
                    <h5>机制</h5>
                    <p>外磁场诱导的轨道电流产生反向磁场</p>
                  </div>
                  <div class="properties">
                    <h5>性质</h5>
                    <ul>
                      <li>所有材料都有</li>
                      <li>温度无关</li>
                      <li>磁化率很小</li>
                    </ul>
                  </div>
                  <div class="examples">
                    <span class="example">Cu</span>
                    <span class="example">Ag</span>
                    <span class="example">石墨</span>
                  </div>
                </div>
              </div>

              <div class="magnetic-type paramagnetic">
                <div class="type-header">
                  <h4>顺磁性 (Paramagnetism)</h4>
                  <div class="susceptibility-value">χ > 0</div>
                </div>
                <div class="type-content">
                  <div class="mechanism">
                    <h5>机制</h5>
                    <p>未配对电子磁矩在外场中的取向</p>
                  </div>
                  <div class="properties">
                    <h5>性质</h5>
                    <ul>
                      <li>Curie定律：χ ∝ 1/T</li>
                      <li>磁矩随机取向</li>
                      <li>无磁有序</li>
                    </ul>
                  </div>
                  <div class="examples">
                    <span class="example">Al</span>
                    <span class="example">Pt</span>
                    <span class="example">O₂</span>
                  </div>
                </div>
              </div>

              <div class="magnetic-type ferromagnetic">
                <div class="type-header">
                  <h4>铁磁性 (Ferromagnetism)</h4>
                  <div class="susceptibility-value">χ >> 1</div>
                </div>
                <div class="type-content">
                  <div class="mechanism">
                    <h5>机制</h5>
                    <p>交换相互作用导致磁矩平行排列</p>
                  </div>
                  <div class="properties">
                    <h5>性质</h5>
                    <ul>
                      <li>自发磁化</li>
                      <li>Curie温度TC</li>
                      <li>磁滞回线</li>
                    </ul>
                  </div>
                  <div class="examples">
                    <span class="example">Fe</span>
                    <span class="example">Ni</span>
                    <span class="example">Co</span>
                  </div>
                </div>
              </div>

              <div class="magnetic-type antiferromagnetic">
                <div class="type-header">
                  <h4>反铁磁性 (Antiferromagnetism)</h4>
                  <div class="susceptibility-value">χ 有限</div>
                </div>
                <div class="type-content">
                  <div class="mechanism">
                    <h5>机制</h5>
                    <p>相邻磁矩反平行排列</p>
                  </div>
                  <div class="properties">
                    <h5>性质</h5>
                    <ul>
                      <li>无净磁化</li>
                      <li>Néel温度TN</li>
                      <li>磁化率峰值</li>
                    </ul>
                  </div>
                  <div class="examples">
                    <span class="example">MnO</span>
                    <span class="example">Cr</span>
                    <span class="example">NiO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="exchange-interaction">
            <h3>交换相互作用</h3>
            <div class="exchange-content">
              <div class="heisenberg-model">
                <h4>Heisenberg模型</h4>
                <div class="model-description">
                  <p>描述局域磁矩相互作用的基本模型：</p>
                  <div class="equation-display">
                    H = -∑ᵢⱼ Jᵢⱼ Sᵢ · Sⱼ
                  </div>
                  <div class="parameter-meaning">
                    <p><strong>Jᵢⱼ > 0</strong>：铁磁耦合</p>
                    <p><strong>Jᵢⱼ < 0</strong>：反铁磁耦合</p>
                  </div>
                </div>
              </div>

              <div class="mean-field-theory">
                <h4>平均场理论</h4>
                <div class="theory-content">
                  <p>将多体问题简化为单体在有效场中的问题</p>
                  <div class="effective-field">
                    <p><strong>有效场</strong>：Heff = H + λ⟨M⟩</p>
                    <p><strong>自洽方程</strong>：⟨M⟩ = M(Heff)</p>
                  </div>
                  <div class="critical-temperature">
                    <p><strong>临界温度</strong>：</p>
                    <div class="equation-display">
                      TC = (2/3)JS(S+1)z/kB
                    </div>
                    <p>其中 z 是配位数</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>关键学习要点</h2>
        <div class="key-points">
          <div class="point-category">
            <h3>概念理解</h3>
            <div class="points-grid">
              <div class="point-card">
                <div class="point-icon">🔍</div>
                <h4>对称性思维</h4>
                <p>理解对称性如何决定物理性质，掌握群论在固体物理中的应用</p>
              </div>
              <div class="point-card">
                <div class="point-icon">🌊</div>
                <h4>波粒二象性</h4>
                <p>电子既有粒子性质又有波动性质，Bloch波函数体现了这种二象性</p>
              </div>
              <div class="point-card">
                <div class="point-icon">🔗</div>
                <h4>多体效应</h4>
                <p>固体中电子间相互作用导致丰富的集体现象和相变</p>
              </div>
            </div>
          </div>

          <div class="point-category">
            <h3>方法掌握</h3>
            <div class="points-grid">
              <div class="point-card">
                <div class="point-icon">📐</div>
                <h4>近似方法</h4>
                <p>学会选择合适的近似方法，理解其适用范围和局限性</p>
              </div>
              <div class="point-card">
                <div class="point-icon">🧮</div>
                <h4>数值计算</h4>
                <p>掌握基本的数值方法，能够验证理论预测</p>
              </div>
              <div class="point-card">
                <div class="point-icon">📊</div>
                <h4>实验对比</h4>
                <p>理论与实验相结合，培养物理直觉和判断能力</p>
              </div>
            </div>
          </div>

          <div class="point-category">
            <h3>应用拓展</h3>
            <div class="points-grid">
              <div class="point-card">
                <div class="point-icon">💡</div>
                <h4>器件物理</h4>
                <p>理解固体物理原理在电子器件中的应用</p>
              </div>
              <div class="point-card">
                <div class="point-icon">🔬</div>
                <h4>材料设计</h4>
                <p>基于物理原理设计具有特定性质的新材料</p>
              </div>
              <div class="point-card">
                <div class="point-icon">🚀</div>
                <h4>前沿发展</h4>
                <p>关注拓扑材料、量子材料等前沿研究方向</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: #4299e1;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.concept-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
}

.concept-card.featured {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.concept-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.concept-icon {
  font-size: 2rem;
}

.concept-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

.definition-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.concept-card:not(.featured) .definition-box {
  background: white;
  border: 1px solid #e2e8f0;
}

.definition-box h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.lattice-types,
.crystal-systems {
  margin-bottom: 1.5rem;
}

.lattice-types h4,
.crystal-systems h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.lattice-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.lattice-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.lattice-symbol {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
}

.concept-card:not(.featured) .lattice-symbol {
  background: #4299e1;
  color: white;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.system-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.concept-card:not(.featured) .system-card {
  background: #edf2f7;
  color: #2d3748;
}

.system-card h5 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.symmetry-operations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.operation-card {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.operation-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.operation-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.75rem;
}

.operation-card p {
  color: #38a169;
  margin-bottom: 1rem;
}

.examples {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.example-tag {
  background: #c6f6d5;
  color: #2f855a;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.reciprocal-lattice {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.concept-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.definition-panel,
.properties-panel {
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.definition-panel h3,
.properties-panel h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 1rem;
}

.equation-box {
  background: #fed7d7;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem 0;
}

.equation {
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #c53030;
  margin-bottom: 0.5rem;
}

.property-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.property-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.property-icon {
  color: #38a169;
  font-weight: bold;
}

.property-text {
  color: #9c4221;
}

.brillouin-zone {
  background: #f0f4f8;
  border-radius: 0.75rem;
  padding: 2rem;
}

.brillouin-zone h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.bz-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.bz-definition {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.bz-definition h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.bz-types {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.bz-type {
  background: #edf2f7;
  border-radius: 0.25rem;
  padding: 1rem;
}

.bz-type h5 {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.high-symmetry-points {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.high-symmetry-points h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.symmetry-points-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.point-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f7fafc;
  border-radius: 0.25rem;
  padding: 1rem;
}

.point-symbol {
  width: 2.5rem;
  height: 2.5rem;
  background: #4299e1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
}

.point-info h6 {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.point-info p {
  font-size: 0.875rem;
  color: #718096;
}

.band-theory {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.framework-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.framework-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.framework-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.framework-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
}

.importance-badge {
  background: #fed7d7;
  color: #c53030;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.equation-display {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  margin: 1rem 0;
}

.implications h5 {
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.implications ul {
  list-style: none;
  padding: 0;
}

.implications li {
  padding: 0.25rem 0;
  color: #4a5568;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1rem;
}

.implications li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.approximation-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.method-item {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.5rem;
  padding: 1rem;
}

.method-item h5 {
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.method-item p {
  color: #38a169;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.pros-cons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pro {
  background: #c6f6d5;
  color: #2f855a;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.con {
  background: #fed7d7;
  color: #c53030;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.band-structure-analysis {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 2rem;
}

.band-structure-analysis h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.analysis-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.band-types h4,
.material-classification h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.band-classification {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.band-category {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category-header h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
}

.fill-indicator {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.fill-indicator.filled {
  background: #c6f6d5;
  color: #2f855a;
}

.fill-indicator.empty {
  background: #fed7d7;
  color: #c53030;
}

.fill-indicator.gap {
  background: #fbd38d;
  color: #c05621;
}

.characteristics {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.char-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.material-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.material-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.material-card.conductor {
  border-color: #68d391;
  background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
}

.material-card.semiconductor {
  border-color: #fbd38d;
  background: linear-gradient(135deg, #fffaf0 0%, #fbd38d 100%);
}

.material-card.insulator {
  border-color: #fed7d7;
  background: linear-gradient(135deg, #fffaf0 0%, #fed7d7 100%);
}

.material-header {
  margin-bottom: 1rem;
}

.material-header h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.conductivity-bar {
  width: 100%;
  height: 0.5rem;
  background: #e2e8f0;
  border-radius: 0.25rem;
  overflow: hidden;
}

.conductivity-fill {
  height: 100%;
  background: linear-gradient(90deg, #68d391, #38a169);
  transition: width 0.3s ease;
}

.material-properties {
  margin-bottom: 1rem;
}

.material-properties p {
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.25rem;
}

.examples {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.example {
  background: rgba(255, 255, 255, 0.7);
  color: #2d3748;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.transport-properties {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.electrical-transport h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.transport-theory {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.theory-card {
  background: #f0f4f8;
  border: 1px solid #cbd5e0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.theory-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.assumptions,
.key-results,
.applications {
  margin-bottom: 1.5rem;
}

.assumptions h5,
.key-results h5,
.applications h5 {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

.assumptions ul,
.applications ul {
  list-style: none;
  padding: 0;
}

.assumptions li,
.applications li {
  padding: 0.25rem 0;
  color: #718096;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1rem;
}

.assumptions li::before,
.applications li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.result-equations {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.equation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
}

.equation-label {
  font-weight: 600;
  color: #4a5568;
}

.equation-formula {
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #2d3748;
}

.scattering-mechanisms h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.scattering-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.scattering-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.scattering-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.scattering-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
}

.temperature-dep {
  background: #bee3f8;
  color: #2b6cb0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.scattering-details p {
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

.scattering-details ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.scattering-details li {
  padding: 0.25rem 0;
  color: #718096;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1rem;
}

.scattering-details li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.scattering-types-sub {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.type-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.matthiessen-rule {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.matthiessen-rule h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.rule-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.rule-implications {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1rem;
}

.rule-implications p {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.5rem;
}

.magnetism-basics {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.magnetic-moments h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.moment-sources {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.source-card {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.75rem;
  padding: 2rem;
}

.source-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.source-icon {
  font-size: 2rem;
}

.source-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2f855a;
}

.source-content p {
  color: #38a169;
  margin-bottom: 1rem;
}

.magnetic-types h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.magnetism-classification {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.magnetic-type {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.magnetic-type.diamagnetic {
  border-color: #fed7d7;
  background: linear-gradient(135deg, #fffaf0 0%, #fed7d7 100%);
}

.magnetic-type.paramagnetic {
  border-color: #fbd38d;
  background: linear-gradient(135deg, #fffaf0 0%, #fbd38d 100%);
}

.magnetic-type.ferromagnetic {
  border-color: #9ae6b4;
  background: linear-gradient(135deg, #f0fff4 0%, #9ae6b4 100%);
}

.magnetic-type.antiferromagnetic {
  border-color: #bee3f8;
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
}

.type-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.type-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
}

.susceptibility-value {
  background: rgba(255, 255, 255, 0.8);
  color: #2d3748;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.type-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mechanism h5,
.properties h5 {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.mechanism p,
.properties ul {
  color: #718096;
  font-size: 0.875rem;
}

.properties ul {
  list-style: none;
  padding: 0;
}

.properties li {
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;
}

.properties li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.exchange-interaction {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 2rem;
}

.exchange-interaction h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.exchange-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.heisenberg-model,
.mean-field-theory {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.heisenberg-model h4,
.mean-field-theory h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.model-description p,
.theory-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.parameter-meaning,
.effective-field,
.critical-temperature {
  background: #f7fafc;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 1rem;
}

.parameter-meaning p,
.effective-field p,
.critical-temperature p {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.5rem;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.point-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.point-card {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.point-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.point-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #234e52;
  margin-bottom: 1rem;
}

.point-card p {
  color: #285e61;
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-explanation,
  .bz-content,
  .framework-cards,
  .transport-theory,
  .moment-sources,
  .exchange-content {
    grid-template-columns: 1fr;
  }
  
  .lattice-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .systems-grid,
  .symmetry-operations,
  .symmetry-points-grid {
    grid-template-columns: 1fr;
  }
  
  .scattering-types,
  .material-types,
  .magnetism-classification,
  .points-grid {
    grid-template-columns: 1fr;
  }
}
</style>