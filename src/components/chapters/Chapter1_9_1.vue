<template>
  <div class="chapter-content">
    <h1 class="chapter-title">1.9.1 习题1：一些概念</h1>
    
    <!-- 习题说明 -->
    <section class="exercise-introduction">
      <h2>习题说明</h2>
      <div class="intro-content">
        <p>本习题集旨在帮助学生巩固凝聚态物理学的基本概念。通过这些练习，您将加深对固体物理基础理论的理解，包括晶体结构、电子能带、声子、相变等核心概念。</p>
        
        <div class="learning-objectives">
          <h3>学习目标</h3>
          <div class="objectives-grid">
            <div class="objective-item">
              <span class="objective-icon">🎯</span>
              <div class="objective-content">
                <h4>概念理解</h4>
                <p>深入理解凝聚态物理的基本概念和原理</p>
              </div>
            </div>
            <div class="objective-item">
              <span class="objective-icon">🧮</span>
              <div class="objective-content">
                <h4>计算能力</h4>
                <p>掌握相关物理量的计算方法和技巧</p>
              </div>
            </div>
            <div class="objective-item">
              <span class="objective-icon">🔬</span>
              <div class="objective-content">
                <h4>物理直觉</h4>
                <p>培养对固体物理现象的物理直觉和洞察力</p>
              </div>
            </div>
            <div class="objective-item">
              <span class="objective-icon">📊</span>
              <div class="objective-content">
                <h4>应用能力</h4>
                <p>能够将理论知识应用到实际问题中</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：晶体结构 -->
    <section class="crystal-structure-problems">
      <h2>第一部分：晶体结构</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">1.1</span>
            <h3>布拉维格子</h3>
            <span class="difficulty easy">基础</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在三维空间中，共有多少种布拉维格子？请列出它们的名称，并简述每种格子的特点。</p>
            </div>
            
            <div class="solution-section">
              <h4>解答思路</h4>
              <div class="solution-steps">
                <div class="step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <p>回顾布拉维格子的定义：通过平移操作能够重现自身的点阵</p>
                  </div>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <p>按照晶系分类：立方、四方、正交、六方、三角、单斜、三斜</p>
                  </div>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <p>考虑每个晶系中可能的格点排列方式</p>
                  </div>
                </div>
              </div>
              
              <div class="detailed-answer">
                <h4>详细解答</h4>
                <p><strong>答案：</strong>三维空间中共有14种布拉维格子</p>
                
                <div class="bravais-lattices">
                  <div class="lattice-category">
                    <h5>立方晶系 (3种)</h5>
                    <ul>
                      <li><strong>简单立方 (P)：</strong>格点仅在立方体顶点</li>
                      <li><strong>体心立方 (I)：</strong>格点在顶点和体心</li>
                      <li><strong>面心立方 (F)：</strong>格点在顶点和面心</li>
                    </ul>
                  </div>
                  
                  <div class="lattice-category">
                    <h5>四方晶系 (2种)</h5>
                    <ul>
                      <li><strong>简单四方 (P)：</strong>a = b ≠ c，α = β = γ = 90°</li>
                      <li><strong>体心四方 (I)：</strong>在简单四方基础上加体心</li>
                    </ul>
                  </div>
                  
                  <div class="lattice-category">
                    <h5>正交晶系 (4种)</h5>
                    <ul>
                      <li><strong>简单正交 (P)：</strong>a ≠ b ≠ c，α = β = γ = 90°</li>
                      <li><strong>体心正交 (I)：</strong>加体心格点</li>
                      <li><strong>面心正交 (F)：</strong>加面心格点</li>
                      <li><strong>底心正交 (C)：</strong>仅在一对面的中心有格点</li>
                    </ul>
                  </div>
                  
                  <div class="lattice-category">
                    <h5>其他晶系 (5种)</h5>
                    <ul>
                      <li><strong>六方 (P)：</strong>a = b ≠ c，α = β = 90°，γ = 120°</li>
                      <li><strong>三角 (R)：</strong>菱面体格子</li>
                      <li><strong>简单单斜 (P)：</strong>a ≠ b ≠ c，α = γ = 90° ≠ β</li>
                      <li><strong>底心单斜 (C)：</strong>在简单单斜基础上加底心</li>
                      <li><strong>三斜 (P)：</strong>a ≠ b ≠ c，α ≠ β ≠ γ ≠ 90°</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">1.2</span>
            <h3>密勒指数</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在立方晶系中，一个平面在x、y、z轴上的截距分别为2a、3a、6a（其中a为晶格常数）。求该平面的密勒指数。</p>
            </div>
            
            <div class="solution-section">
              <h4>解答步骤</h4>
              <div class="miller-calculation">
                <div class="calc-step">
                  <h5>步骤1：确定截距</h5>
                  <p>x轴截距：2a，y轴截距：3a，z轴截距：6a</p>
                </div>
                
                <div class="calc-step">
                  <h5>步骤2：以晶格常数为单位</h5>
                  <p>截距比例：2 : 3 : 6</p>
                </div>
                
                <div class="calc-step">
                  <h5>步骤3：取倒数</h5>
                  <p>1/2 : 1/3 : 1/6</p>
                </div>
                
                <div class="calc-step">
                  <h5>步骤4：化为最小整数</h5>
                  <p>通分：3/6 : 2/6 : 1/6</p>
                  <p>乘以6：3 : 2 : 1</p>
                </div>
                
                <div class="calc-result">
                  <h5>结果</h5>
                  <p><strong>密勒指数：(321)</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">1.3</span>
            <h3>配位数</h3>
            <span class="difficulty easy">基础</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>计算面心立方结构中原子的配位数，并说明最近邻原子的位置关系。</p>
            </div>
            
            <div class="solution-section">
              <div class="coordination-analysis">
                <h4>分析过程</h4>
                
                <div class="fcc-structure">
                  <h5>面心立方结构特点</h5>
                  <ul>
                    <li>原子位于立方体的8个顶点和6个面心</li>
                    <li>每个原子被相同的原子环境包围</li>
                    <li>最近邻距离为 a/√2（a为晶格常数）</li>
                  </ul>
                </div>
                
                <div class="nearest-neighbors">
                  <h5>最近邻分析</h5>
                  <p>以一个面心原子为例，其最近邻原子位于：</p>
                  <ul>
                    <li>同一面上的4个顶点原子</li>
                    <li>相邻两个面上各4个顶点原子</li>
                    <li>总计：4 + 4 + 4 = 12个最近邻原子</li>
                  </ul>
                </div>
                
                <div class="coordination-result">
                  <h5>结论</h5>
                  <p><strong>面心立方结构的配位数为12</strong></p>
                  <p>这是密堆积结构，具有最高的空间利用率（74%）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二部分：倒格子与布里渊区 -->
    <section class="reciprocal-lattice-problems">
      <h2>第二部分：倒格子与布里渊区</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.1</span>
            <h3>倒格子基矢</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>已知正格子的基矢为 <strong>a₁</strong> = a<strong>x̂</strong>，<strong>a₂</strong> = a<strong>ŷ</strong>，<strong>a₃</strong> = c<strong>ẑ</strong>，求对应的倒格子基矢。</p>
            </div>
            
            <div class="solution-section">
              <h4>解答过程</h4>
              
              <div class="reciprocal-calculation">
                <div class="formula-reminder">
                  <h5>倒格子基矢公式</h5>
                  <div class="formula-box">
                    <p><strong>b₁</strong> = 2π(<strong>a₂</strong> × <strong>a₃</strong>)/V</p>
                    <p><strong>b₂</strong> = 2π(<strong>a₃</strong> × <strong>a₁</strong>)/V</p>
                    <p><strong>b₃</strong> = 2π(<strong>a₁</strong> × <strong>a₂</strong>)/V</p>
                    <p>其中 V = <strong>a₁</strong> · (<strong>a₂</strong> × <strong>a₃</strong>)</p>
                  </div>
                </div>
                
                <div class="calculation-steps">
                  <div class="calc-step">
                    <h5>步骤1：计算原胞体积</h5>
                    <p><strong>a₂</strong> × <strong>a₃</strong> = a<strong>ŷ</strong> × c<strong>ẑ</strong> = ac<strong>x̂</strong></p>
                    <p>V = <strong>a₁</strong> · (<strong>a₂</strong> × <strong>a₃</strong>) = a<strong>x̂</strong> · ac<strong>x̂</strong> = a²c</p>
                  </div>
                  
                  <div class="calc-step">
                    <h5>步骤2：计算各倒格子基矢</h5>
                    <p><strong>b₁</strong> = 2π(ac<strong>x̂</strong>)/(a²c) = (2π/a)<strong>x̂</strong></p>
                    <p><strong>b₂</strong> = 2π(c<strong>ẑ</strong> × a<strong>x̂</strong>)/(a²c) = 2π(ac<strong>ŷ</strong>)/(a²c) = (2π/a)<strong>ŷ</strong></p>
                    <p><strong>b₃</strong> = 2π(a<strong>x̂</strong> × a<strong>ŷ</strong>)/(a²c) = 2π(a²<strong>ẑ</strong>)/(a²c) = (2π/c)<strong>ẑ</strong></p>
                  </div>
                </div>
                
                <div class="result-summary">
                  <h5>最终结果</h5>
                  <div class="result-box">
                    <p><strong>b₁</strong> = (2π/a)<strong>x̂</strong></p>
                    <p><strong>b₂</strong> = (2π/a)<strong>ŷ</strong></p>
                    <p><strong>b₃</strong> = (2π/c)<strong>ẑ</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.2</span>
            <h3>布里渊区</h3>
            <span class="difficulty hard">困难</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>对于一维单原子链（晶格常数为a），求第一布里渊区的范围，并解释其物理意义。</p>
            </div>
            
            <div class="solution-section">
              <h4>解答分析</h4>
              
              <div class="brillouin-analysis">
                <div class="one-d-lattice">
                  <h5>一维倒格子</h5>
                  <p>一维单原子链的倒格子基矢：<strong>b</strong> = 2π/a</p>
                  <p>倒格子点位于：G = n(2π/a)，其中n为整数</p>
                </div>
                
                <div class="first-bz">
                  <h5>第一布里渊区构造</h5>
                  <div class="construction-steps">
                    <div class="step">
                      <span class="step-number">1</span>
                      <p>以原点为中心，找到最近的倒格子点：±2π/a</p>
                    </div>
                    <div class="step">
                      <span class="step-number">2</span>
                      <p>在原点和这些倒格子点的中点处作垂直平分面</p>
                    </div>
                    <div class="step">
                      <span class="step-number">3</span>
                      <p>垂直平分面位于：k = ±π/a</p>
                    </div>
                  </div>
                </div>
                
                <div class="bz-result">
                  <h5>第一布里渊区</h5>
                  <div class="result-box">
                    <p><strong>范围：-π/a ≤ k ≤ π/a</strong></p>
                    <p><strong>大小：2π/a</strong></p>
                  </div>
                </div>
                
                <div class="physical-meaning">
                  <h5>物理意义</h5>
                  <ul>
                    <li><strong>周期性边界：</strong>k = ±π/a是布拉格反射的边界</li>
                    <li><strong>能带结构：</strong>电子能带在布里渊区边界处出现能隙</li>
                    <li><strong>态密度：</strong>第一布里渊区包含与原胞中原子数相等的k态</li>
                    <li><strong>扩展区方案：</strong>所有物理信息都包含在第一布里渊区内</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三部分：电子能带 -->
    <section class="electronic-band-problems">
      <h2>第三部分：电子能带</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">3.1</span>
            <h3>自由电子模型</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在自由电子模型中，计算三维金属中费米能级EF与电子密度n的关系。</p>
            </div>
            
            <div class="solution-section">
              <h4>推导过程</h4>
              
              <div class="fermi-energy-derivation">
                <div class="k-space-analysis">
                  <h5>k空间中的电子分布</h5>
                  <p>在T = 0K时，所有k < kF的态被占据，形成费米球</p>
                  <p>费米球体积：V_k = (4π/3)kF³</p>
                </div>
                
                <div class="electron-counting">
                  <h5>电子计数</h5>
                  <p>k空间中每个态占据的体积：(2π)³/V（考虑周期性边界条件）</p>
                  <p>费米球内的态数：N = 2 × V_k / [(2π)³/V] = V(kF³)/(3π²)</p>
                  <p>（因子2来自自旋简并）</p>
                </div>
                
                <div class="density-relation">
                  <h5>电子密度关系</h5>
                  <p>电子密度：n = N/V = kF³/(3π²)</p>
                  <p>因此：kF = (3π²n)^(1/3)</p>
                </div>
                
                <div class="fermi-energy">
                  <h5>费米能级</h5>
                  <p>EF = ℏ²kF²/(2m) = (ℏ²/2m)(3π²n)^(2/3)</p>
                </div>
                
                <div class="final-result">
                  <h5>最终结果</h5>
                  <div class="result-box">
                    <p><strong>EF = (ℏ²/2m)(3π²n)^(2/3)</strong></p>
                    <p>费米能级与电子密度的2/3次方成正比</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">3.2</span>
            <h3>能带填充</h3>
            <span class="difficulty easy">基础</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>解释为什么具有偶数个价电子的元素通常是绝缘体或半导体，而具有奇数个价电子的元素通常是金属？</p>
            </div>
            
            <div class="solution-section">
              <h4>能带填充分析</h4>
              
              <div class="band-filling-explanation">
                <div class="even-electrons">
                  <h5>偶数价电子情况</h5>
                  <div class="explanation-content">
                    <p><strong>能带完全填充：</strong></p>
                    <ul>
                      <li>每个能带最多容纳2N个电子（N为原胞数，因子2来自自旋）</li>
                      <li>偶数个价电子恰好填满整数个能带</li>
                      <li>最高占据能带（价带）完全填满</li>
                      <li>下一个能带（导带）完全空着</li>
                    </ul>
                    
                    <div class="energy-gap">
                      <p><strong>能隙效应：</strong></p>
                      <ul>
                        <li>价带和导带之间存在能隙Eg</li>
                        <li>如果Eg较大（>3eV）→ 绝缘体</li>
                        <li>如果Eg较小（<3eV）→ 半导体</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="odd-electrons">
                  <h5>奇数价电子情况</h5>
                  <div class="explanation-content">
                    <p><strong>能带部分填充：</strong></p>
                    <ul>
                      <li>奇数个价电子无法完全填满整数个能带</li>
                      <li>最高占据能带只部分填充</li>
                      <li>费米能级位于能带内部</li>
                      <li>在费米面附近有大量可用的空态</li>
                    </ul>
                    
                    <div class="metallic-behavior">
                      <p><strong>金属性质：</strong></p>
                      <ul>
                        <li>电子可以轻易跃迁到邻近的空态</li>
                        <li>在外电场作用下形成电流</li>
                        <li>表现出金属导电性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="exceptions">
                  <h5>例外情况</h5>
                  <div class="exception-cases">
                    <p><strong>能带重叠：</strong></p>
                    <ul>
                      <li>某些偶数价电子元素（如Be、Mg）由于能带重叠而表现为金属</li>
                      <li>价带顶部与导带底部在能量上重叠</li>
                    </ul>
                    
                    <p><strong>强关联效应：</strong></p>
                    <ul>
                      <li>某些奇数价电子化合物由于强电子关联而成为绝缘体</li>
                      <li>例如：Mott绝缘体</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四部分：声子与晶格振动 -->
    <section class="phonon-problems">
      <h2>第四部分：声子与晶格振动</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">4.1</span>
            <h3>德拜模型</h3>
            <span class="difficulty hard">困难</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在德拜模型中，推导三维晶体的德拜截止频率ωD与德拜温度ΘD的关系。</p>
            </div>
            
            <div class="solution-section">
              <h4>德拜模型推导</h4>
              
              <div class="debye-derivation">
                <div class="model-assumptions">
                  <h5>德拜模型假设</h5>
                  <ul>
                    <li>将晶格振动视为连续介质中的弹性波</li>
                    <li>存在一个纵波模式和两个横波模式</li>
                    <li>线性色散关系：ω = v|k|</li>
                    <li>引入截止频率ωD以保证正确的模式总数</li>
                  </ul>
                </div>
                
                <div class="mode-counting">
                  <h5>模式计数</h5>
                  <p><strong>k空间中的模式密度：</strong></p>
                  <p>每个模式占据的k空间体积：(2π)³/V</p>
                  <p>球壳dk内的模式数：3 × 4πk²dk / [(2π)³/V] = 3Vk²dk/(2π²)</p>
                  <p>（因子3来自三个偏振方向）</p>
                </div>
                
                <div class="frequency-conversion">
                  <h5>频率空间转换</h5>
                  <p>对于平均声速 v̄：1/v̄³ = (1/3)(1/vₗ³ + 2/vₜ³)</p>
                  <p>k = ω/v̄，dk = dω/v̄</p>
                  <p>频率ω到ω+dω间的模式数：g(ω)dω = 3Vω²dω/(2π²v̄³)</p>
                </div>
                
                <div class="cutoff-condition">
                  <h5>截止条件</h5>
                  <p>总模式数必须等于3N（N为原子数）：</p>
                  <p>∫₀^ωD g(ω)dω = 3N</p>
                  <p>∫₀^ωD [3Vω²/(2π²v̄³)]dω = 3N</p>
                  <p>Vω³D/(2π²v̄³) = 3N</p>
                </div>
                
                <div class="debye-frequency">
                  <h5>德拜截止频率</h5>
                  <p>ωD = v̄(6π²N/V)^(1/3) = v̄(6π²n)^(1/3)</p>
                  <p>其中n = N/V为原子密度</p>
                </div>
                
                <div class="debye-temperature">
                  <h5>德拜温度</h5>
                  <div class="result-box">
                    <p><strong>ΘD = ℏωD/kB = (ℏv̄/kB)(6π²n)^(1/3)</strong></p>
                    <p>德拜温度是晶格振动的特征温度</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 练习总结 -->
    <section class="exercise-summary">
      <h2>练习总结</h2>
      
      <div class="summary-content">
        <div class="key-concepts">
          <h3>核心概念回顾</h3>
          <div class="concepts-grid">
            <div class="concept-card">
              <div class="concept-header">
                <span class="concept-icon">🔷</span>
                <h4>晶体结构</h4>
              </div>
              <div class="concept-content">
                <ul>
                  <li>14种布拉维格子</li>
                  <li>密勒指数表示法</li>
                  <li>配位数与堆积</li>
                </ul>
              </div>
            </div>
            
            <div class="concept-card">
              <div class="concept-header">
                <span class="concept-icon">🌐</span>
                <h4>倒格子</h4>
              </div>
              <div class="concept-content">
                <ul>
                  <li>倒格子基矢构造</li>
                  <li>布里渊区定义</li>
                  <li>k空间的物理意义</li>
                </ul>
              </div>
            </div>
            
            <div class="concept-card">
              <div class="concept-header">
                <span class="concept-icon">⚡</span>
                <h4>电子能带</h4>
              </div>
              <div class="concept-content">
                <ul>
                  <li>费米能级计算</li>
                  <li>能带填充规律</li>
                  <li>金属与绝缘体</li>
                </ul>
              </div>
            </div>
            
            <div class="concept-card">
              <div class="concept-header">
                <span class="concept-icon">🎵</span>
                <h4>晶格振动</h4>
              </div>
              <div class="concept-content">
                <ul>
                  <li>德拜模型</li>
                  <li>声子概念</li>
                  <li>德拜温度</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="study-tips">
          <h3>学习建议</h3>
          <div class="tips-container">
            <div class="tip-item">
              <span class="tip-icon">📚</span>
              <div class="tip-content">
                <h4>理论联系实际</h4>
                <p>将抽象概念与具体材料性质联系起来，加深理解</p>
              </div>
            </div>
            
            <div class="tip-item">
              <span class="tip-icon">🧮</span>
              <div class="tip-content">
                <h4>数学工具</h4>
                <p>熟练掌握向量运算、傅里叶变换等数学方法</p>
              </div>
            </div>
            
            <div class="tip-item">
              <span class="tip-icon">🔄</span>
              <div class="tip-content">
                <h4>反复练习</h4>
                <p>通过大量练习巩固概念，培养解题技巧</p>
              </div>
            </div>
            
            <div class="tip-item">
              <span class="tip-icon">🤝</span>
              <div class="tip-content">
                <h4>讨论交流</h4>
                <p>与同学讨论疑难问题，互相启发思路</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_9_1',
  mounted() {
    // 添加数学公式渲染支持
    if (window.MathJax) {
      window.MathJax.typesetPromise();
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

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #3498db;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  color: #555;
}

/* 习题说明 */
.exercise-introduction {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

.exercise-introduction h2 {
  color: white;
  border-left-color: white;
}

.intro-content p {
  color: #f8f9fa;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.learning-objectives {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.learning-objectives h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.objective-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.objective-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.objective-content h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.objective-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
}

/* 问题卡片 */
.problem-set {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.problem-card {
  background: white;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.problem-header {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.problem-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.problem-header h3 {
  color: white;
  margin: 0;
  flex-grow: 1;
}

.difficulty {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.difficulty.easy {
  background: #10b981;
  color: white;
}

.difficulty.medium {
  background: #f59e0b;
  color: white;
}

.difficulty.hard {
  background: #ef4444;
  color: white;
}

.problem-content {
  padding: 2rem;
}

.problem-statement {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.problem-statement p {
  margin: 0;
  color: #374151;
  font-size: 1.05rem;
}

/* 解答部分 */
.solution-section {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.solution-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  background: #3b82f6;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  flex-grow: 1;
}

.step-content p {
  margin: 0;
  color: #4a5568;
}

/* 详细解答 */
.detailed-answer {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  margin-top: 2rem;
}

.bravais-lattices {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.lattice-category {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.lattice-category h5 {
  color: #2563eb;
  margin-bottom: 1rem;
}

.lattice-category ul {
  margin: 0;
  padding-left: 1.5rem;
}

.lattice-category li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* 密勒指数计算 */
.miller-calculation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.calc-step {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.calc-step h5 {
  color: #2563eb;
  margin-bottom: 1rem;
}

.calc-result {
  background: #dbeafe;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #3b82f6;
}

.calc-result h5 {
  color: #1e40af;
  margin-bottom: 1rem;
}

/* 配位数分析 */
.coordination-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fcc-structure,
.nearest-neighbors,
.coordination-result {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.fcc-structure h5,
.nearest-neighbors h5,
.coordination-result h5 {
  color: #2563eb;
  margin-bottom: 1rem;
}

.fcc-structure ul,
.nearest-neighbors ul {
  margin: 0;
  padding-left: 1.5rem;
}

.fcc-structure li,
.nearest-neighbors li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* 倒格子计算 */
.reciprocal-calculation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.formula-reminder {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #f59e0b;
}

.formula-reminder h5 {
  color: #92400e;
  margin-bottom: 1rem;
}

.formula-box {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.formula-box p {
  margin-bottom: 0.5rem;
  font-family: 'Times New Roman', serif;
  color: #92400e;
  font-weight: 600;
}

.calculation-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.result-summary {
  background: #d1fae5;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #10b981;
}

.result-summary h5 {
  color: #065f46;
  margin-bottom: 1rem;
}

.result-box {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #10b981;
}

.result-box p {
  margin-bottom: 0.5rem;
  font-family: 'Times New Roman', serif;
  color: #065f46;
  font-weight: 600;
}

/* 布里渊区分析 */
.brillouin-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.one-d-lattice,
.first-bz,
.bz-result,
.physical-meaning {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.construction-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.construction-steps .step {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.physical-meaning ul {
  margin: 0;
  padding-left: 1.5rem;
}

.physical-meaning li {
  margin-bottom: 0.75rem;
  color: #4a5568;
}

/* 费米能级推导 */
.fermi-energy-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.k-space-analysis,
.electron-counting,
.density-relation,
.fermi-energy,
.final-result {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.final-result {
  background: #d1fae5;
  border-color: #10b981;
}

.final-result h5 {
  color: #065f46;
}

/* 能带填充解释 */
.band-filling-explanation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.even-electrons,
.odd-electrons,
.exceptions {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.explanation-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.energy-gap,
.metallic-behavior {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.exception-cases {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 德拜模型推导 */
.debye-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.model-assumptions,
.mode-counting,
.frequency-conversion,
.cutoff-condition,
.debye-frequency,
.debye-temperature {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.debye-temperature {
  background: #d1fae5;
  border-color: #10b981;
}

.debye-temperature h5 {
  color: #065f46;
}

/* 练习总结 */
.exercise-summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
}

.exercise-summary h2 {
  color: white;
  border-left-color: white;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.key-concepts {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.key-concepts h3 {
  color: white;
  margin-bottom: 2rem;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.concept-header {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.concept-icon {
  font-size: 1.5rem;
}

.concept-header h4 {
  color: white;
  margin: 0;
}

.concept-content {
  padding: 1rem;
}

.concept-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.concept-content li {
  margin-bottom: 0.5rem;
  color: #f8f9fa;
  font-size: 0.9rem;
}

.study-tips {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.study-tips h3 {
  color: white;
  margin-bottom: 2rem;
}

.tips-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tip-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.tip-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.tip-content h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.tip-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .objectives-grid,
  .concepts-grid,
  .tips-container {
    grid-template-columns: 1fr;
  }
  
  .problem-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>