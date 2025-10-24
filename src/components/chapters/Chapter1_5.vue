<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.5 主要参考书与网络资源推荐</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">学习资源</span>
        <span class="reading-time">预计阅读时间: 15分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>构建知识体系的重要性</h2>
        <p class="lead-text">
          学习凝聚态物理需要系统性的知识构建和多元化的资源支持。
          本节为您推荐经典教材、前沿文献、在线课程和实用工具，
          帮助您建立完整的学习路径和研究基础。
        </p>
      </section>

      <section class="content-section">
        <h2>主要参量与网络结构</h2>
        <div class="parameter-network">
          <div class="parameter-category">
            <h3>🔬 微观参量</h3>
            <div class="parameter-showcase">
              <div class="parameter-card">
                <h4>电子参量</h4>
                <div class="parameter-details">
                  <div class="param-item">
                    <span class="param-name">费米能级 E_F</span>
                    <span class="param-value">典型值: 1-10 eV</span>
                    <div class="param-description">
                      <p>决定金属导电性的关键参量</p>
                      <div class="formula">E_F = (ℏ²/2m)(3π²n)^(2/3)</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">有效质量 m*</span>
                    <span class="param-value">范围: 0.01m₀ - 10m₀</span>
                    <div class="param-description">
                      <p>能带结构对电子运动的影响</p>
                      <div class="formula">1/m* = (1/ℏ²)∂²E/∂k²</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">载流子浓度 n</span>
                    <span class="param-value">10¹⁶ - 10²³ cm⁻³</span>
                    <div class="param-description">
                      <p>半导体器件设计的核心参数</p>
                      <div class="formula">n = N_c exp(-(E_c-E_F)/k_BT)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="parameter-card">
                <h4>磁性参量</h4>
                <div class="parameter-details">
                  <div class="param-item">
                    <span class="param-name">交换积分 J</span>
                    <span class="param-value">10⁻³ - 10² meV</span>
                    <div class="param-description">
                      <p>决定磁有序类型和居里温度</p>
                      <div class="formula">T_c ∝ JS(S+1)z</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">磁各向异性 K</span>
                    <span class="param-value">10⁻⁶ - 10⁻² eV</span>
                    <div class="param-description">
                      <p>磁畴结构和矫顽力的来源</p>
                      <div class="formula">E_anis = K sin²θ</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">g因子</span>
                    <span class="param-value">1.8 - 2.2</span>
                    <div class="param-description">
                      <p>自旋-轨道耦合的体现</p>
                      <div class="formula">μ = gμ_B√[S(S+1)]</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="parameter-card">
                <h4>声子参量</h4>
                <div class="parameter-details">
                  <div class="param-item">
                    <span class="param-name">德拜温度 Θ_D</span>
                    <span class="param-value">100 - 2000 K</span>
                    <div class="param-description">
                      <p>晶格振动的特征能量尺度</p>
                      <div class="formula">Θ_D = (ℏ/k_B)(6π²n)^(1/3)v_s</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">声速 v_s</span>
                    <span class="param-value">10³ - 10⁴ m/s</span>
                    <div class="param-description">
                      <p>弹性常数和密度的函数</p>
                      <div class="formula">v_s = √(C/ρ)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="parameter-category">
            <h3>🌡️ 宏观参量</h3>
            <div class="parameter-showcase">
              <div class="parameter-card">
                <h4>输运参量</h4>
                <div class="parameter-details">
                  <div class="param-item">
                    <span class="param-name">电导率 σ</span>
                    <span class="param-value">10⁻¹⁵ - 10⁸ S/m</span>
                    <div class="param-description">
                      <p>从绝缘体到超导体的巨大跨度</p>
                      <div class="formula">σ = ne²τ/m*</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">热导率 κ</span>
                    <span class="param-value">10⁻² - 10³ W/mK</span>
                    <div class="param-description">
                      <p>电子和声子的热传导贡献</p>
                      <div class="formula">κ = κ_e + κ_ph</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">塞贝克系数 S</span>
                    <span class="param-value">10⁻⁶ - 10⁻³ V/K</span>
                    <div class="param-description">
                      <p>热电效应的核心参数</p>
                      <div class="formula">S = -(π²k_B²T/3eE_F)∂ln σ/∂E</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="parameter-card">
                <h4>相变参量</h4>
                <div class="parameter-details">
                  <div class="param-item">
                    <span class="param-name">临界温度 T_c</span>
                    <span class="param-value">mK - 1000K</span>
                    <div class="param-description">
                      <p>相变发生的特征温度</p>
                      <div class="formula">T_c ∝ J, Δ, λ (不同相变)</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">序参量 η</span>
                    <span class="param-value">0 - 1</span>
                    <div class="param-description">
                      <p>有序程度的量化描述</p>
                      <div class="formula">η ∝ (T_c - T)^β</div>
                    </div>
                  </div>
                  <div class="param-item">
                    <span class="param-name">关联长度 ξ</span>
                    <span class="param-value">Å - μm</span>
                    <div class="param-description">
                      <p>临界涨落的空间尺度</p>
                      <div class="formula">ξ ∝ |T - T_c|^(-ν)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>网络结构与相互关联</h2>
        <div class="network-analysis">
          <div class="network-layer">
            <h3>🔗 参量关联网络</h3>
            <div class="correlation-matrix">
              <div class="correlation-item">
                <h4>电子-声子耦合</h4>
                <div class="coupling-description">
                  <p><strong>核心关系：</strong>λ = N(0)⟨I²⟩/Mω²</p>
                  <div class="coupling-effects">
                    <div class="effect-item">
                      <span class="effect-name">超导配对</span>
                      <span class="effect-formula">T_c ∝ ω_D exp(-1/λ)</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">电阻率</span>
                      <span class="effect-formula">ρ(T) ∝ T⁵ (低温)</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">比热异常</span>
                      <span class="effect-formula">γ = γ₀(1 + λ)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="correlation-item">
                <h4>自旋-轨道耦合</h4>
                <div class="coupling-description">
                  <p><strong>核心关系：</strong>H_SO = λ_SO L⃗·S⃗</p>
                  <div class="coupling-effects">
                    <div class="effect-item">
                      <span class="effect-name">能带分裂</span>
                      <span class="effect-formula">Δ_SO ∝ λ_SO</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">拓扑相变</span>
                      <span class="effect-formula">M_eff = M - 2t_SO</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">自旋霍尔效应</span>
                      <span class="effect-formula">σ_SH ∝ λ_SO²</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="correlation-item">
                <h4>库仑相互作用</h4>
                <div class="coupling-description">
                  <p><strong>核心关系：</strong>U/t 比值决定相图</p>
                  <div class="coupling-effects">
                    <div class="effect-item">
                      <span class="effect-name">Mott相变</span>
                      <span class="effect-formula">(U/t)_c ≈ 8-10</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">磁有序</span>
                      <span class="effect-formula">T_N ∝ t²/U</span>
                    </div>
                    <div class="effect-item">
                      <span class="effect-name">准粒子重整化</span>
                      <span class="effect-formula">Z = 1/(1 + U∂Σ/∂ω)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="network-layer">
            <h3>📊 多尺度关联</h3>
            <div class="scale-connections">
              <div class="scale-item">
                <h4>原子尺度 → 纳米尺度</h4>
                <div class="scale-description">
                  <div class="transition-mechanism">
                    <p><strong>关键机制：</strong>量子相干长度</p>
                    <div class="formula">ξ = ℏv_F/πΔ (超导)</div>
                    <div class="formula">l_B = √(ℏ/eB) (磁长度)</div>
                  </div>
                  <div class="emergent-properties">
                    <h5>涌现性质：</h5>
                    <ul>
                      <li>量子点的库仑阻塞</li>
                      <li>纳米线的量子化电导</li>
                      <li>石墨烯的狄拉克锥</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="scale-item">
                <h4>纳米尺度 → 介观尺度</h4>
                <div class="scale-description">
                  <div class="transition-mechanism">
                    <p><strong>关键机制：</strong>相位相干与退相干</p>
                    <div class="formula">L_φ = √(Dτ_φ) (相位相干长度)</div>
                    <div class="formula">G = (e²/h)T (量子电导)</div>
                  </div>
                  <div class="emergent-properties">
                    <h5>涌现性质：</h5>
                    <ul>
                      <li>弱局域化效应</li>
                      <li>通用电导涨落</li>
                      <li>Aharonov-Bohm振荡</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="scale-item">
                <h4>介观尺度 → 宏观尺度</h4>
                <div class="scale-description">
                  <div class="transition-mechanism">
                    <p><strong>关键机制：</strong>统计平均与涨落</p>
                    <div class="formula">⟨δA²⟩ ∝ 1/√N (中心极限定理)</div>
                    <div class="formula">χ = ∂⟨M⟩/∂H (磁化率)</div>
                  </div>
                  <div class="emergent-properties">
                    <h5>涌现性质：</h5>
                    <ul>
                      <li>宏观量子相干</li>
                      <li>集体激发模式</li>
                      <li>相变临界现象</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>经典教材推荐</h2>
        <div class="textbook-categories">
          <div class="category-section">
            <div class="category-header">
              <h3>入门级教材</h3>
              <span class="level-badge beginner">初学者</span>
            </div>
            <div class="book-grid">
              <div class="book-card featured">
                <div class="book-cover">
                  <div class="cover-placeholder">ASH</div>
                </div>
                <div class="book-info">
                  <h4>Introduction to Solid State Physics</h4>
                  <p class="author">Charles Kittel</p>
                  <div class="book-details">
                    <span class="edition">第8版</span>
                    <span class="difficulty">★★★☆☆</span>
                  </div>
                  <p class="description">
                    固体物理学的经典入门教材，内容全面，适合初学者建立基础概念。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">基础概念</span>
                    <span class="feature-tag">晶体结构</span>
                    <span class="feature-tag">能带理论</span>
                  </div>
                </div>
              </div>

              <div class="book-card">
                <div class="book-cover">
                  <div class="cover-placeholder">MAR</div>
                </div>
                <div class="book-info">
                  <h4>Condensed Matter Physics</h4>
                  <p class="author">Michael P. Marder</p>
                  <div class="book-details">
                    <span class="edition">第2版</span>
                    <span class="difficulty">★★★★☆</span>
                  </div>
                  <p class="description">
                    现代凝聚态物理的综合性教材，理论与实验并重。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">现代理论</span>
                    <span class="feature-tag">实验技术</span>
                    <span class="feature-tag">应用导向</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="category-section">
            <div class="category-header">
              <h3>进阶教材</h3>
              <span class="level-badge intermediate">进阶</span>
            </div>
            <div class="book-grid">
              <div class="book-card">
                <div class="book-cover">
                  <div class="cover-placeholder">AGD</div>
                </div>
                <div class="book-info">
                  <h4>Many-Particle Physics</h4>
                  <p class="author">Gerald D. Mahan</p>
                  <div class="book-details">
                    <span class="edition">第3版</span>
                    <span class="difficulty">★★★★★</span>
                  </div>
                  <p class="description">
                    多体物理学的权威教材，深入讲解格林函数方法。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">多体理论</span>
                    <span class="feature-tag">格林函数</span>
                    <span class="feature-tag">场论方法</span>
                  </div>
                </div>
              </div>

              <div class="book-card">
                <div class="book-cover">
                  <div class="cover-placeholder">TSE</div>
                </div>
                <div class="book-info">
                  <h4>Quantum Theory of Solids</h4>
                  <p class="author">Tinkham & Schrieffer</p>
                  <div class="book-details">
                    <span class="edition">经典版</span>
                    <span class="difficulty">★★★★★</span>
                  </div>
                  <p class="description">
                    固体量子理论的深度阐述，适合研究生和研究人员。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">量子理论</span>
                    <span class="feature-tag">超导理论</span>
                    <span class="feature-tag">磁性理论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="category-section">
            <div class="category-header">
              <h3>专题教材</h3>
              <span class="level-badge advanced">专业</span>
            </div>
            <div class="book-grid">
              <div class="book-card">
                <div class="book-cover">
                  <div class="cover-placeholder">WEN</div>
                </div>
                <div class="book-info">
                  <h4>Quantum Field Theory of Many-Body Systems</h4>
                  <p class="author">Xiao-Gang Wen</p>
                  <div class="book-details">
                    <span class="edition">第2版</span>
                    <span class="difficulty">★★★★★</span>
                  </div>
                  <p class="description">
                    多体系统场论的现代处理，包含拓扑序等前沿内容。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">拓扑序</span>
                    <span class="feature-tag">量子场论</span>
                    <span class="feature-tag">强关联</span>
                  </div>
                </div>
              </div>

              <div class="book-card">
                <div class="book-cover">
                  <div class="cover-placeholder">TKT</div>
                </div>
                <div class="book-info">
                  <h4>Topological Insulators and Topological Superconductors</h4>
                  <p class="author">Teo & Kane</p>
                  <div class="book-details">
                    <span class="edition">2013</span>
                    <span class="difficulty">★★★★★</span>
                  </div>
                  <p class="description">
                    拓扑绝缘体和拓扑超导体的系统性介绍。
                  </p>
                  <div class="book-features">
                    <span class="feature-tag">拓扑绝缘体</span>
                    <span class="feature-tag">拓扑超导</span>
                    <span class="feature-tag">分类理论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>在线课程与视频资源</h2>
        <div class="online-resources">
          <div class="resource-category">
            <h3>大学公开课</h3>
            <div class="course-list">
              <div class="course-item">
                <div class="course-header">
                  <h4>MIT 8.511 Theory of Solids I</h4>
                  <span class="platform-tag">MIT OpenCourseWare</span>
                </div>
                <p class="course-description">
                  MIT的固体理论课程，包含完整的讲义和习题。
                </p>
                <div class="course-features">
                  <span class="feature">视频讲座</span>
                  <span class="feature">课程笔记</span>
                  <span class="feature">习题解答</span>
                </div>
              </div>

              <div class="course-item">
                <div class="course-header">
                  <h4>Stanford Physics 171 Quantum Mechanics</h4>
                  <span class="platform-tag">Stanford Online</span>
                </div>
                <p class="course-description">
                  斯坦福大学的量子力学课程，为凝聚态物理提供基础。
                </p>
                <div class="course-features">
                  <span class="feature">Leonard Susskind主讲</span>
                  <span class="feature">理论物理视角</span>
                  <span class="feature">免费观看</span>
                </div>
              </div>
            </div>
          </div>

          <div class="resource-category">
            <h3>专业平台</h3>
            <div class="platform-grid">
              <div class="platform-card">
                <div class="platform-icon">📚</div>
                <h4>Coursera</h4>
                <p>多所大学的凝聚态物理课程</p>
                <div class="platform-pros">
                  <span class="pro-tag">认证证书</span>
                  <span class="pro-tag">互动作业</span>
                </div>
              </div>

              <div class="platform-card">
                <div class="platform-icon">🎥</div>
                <h4>YouTube</h4>
                <p>丰富的物理讲座和演示</p>
                <div class="platform-pros">
                  <span class="pro-tag">免费资源</span>
                  <span class="pro-tag">多样化内容</span>
                </div>
              </div>

              <div class="platform-card">
                <div class="platform-icon">🔬</div>
                <h4>Physics World</h4>
                <p>物理学前沿资讯和教育资源</p>
                <div class="platform-pros">
                  <span class="pro-tag">前沿动态</span>
                  <span class="pro-tag">专家解读</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学术期刊与文献资源</h2>
        <div class="journal-section">
          <div class="journal-tier">
            <h3>顶级期刊</h3>
            <div class="journal-grid">
              <div class="journal-card top-tier">
                <div class="journal-header">
                  <h4>Physical Review Letters</h4>
                  <span class="impact-factor">IF: 9.2</span>
                </div>
                <p class="journal-description">
                  物理学领域最权威的快报期刊，发表突破性研究成果。
                </p>
                <div class="journal-topics">
                  <span class="topic-tag">量子材料</span>
                  <span class="topic-tag">拓扑物理</span>
                  <span class="topic-tag">超导</span>
                </div>
              </div>

              <div class="journal-card top-tier">
                <div class="journal-header">
                  <h4>Nature Physics</h4>
                  <span class="impact-factor">IF: 20.0</span>
                </div>
                <p class="journal-description">
                  Nature系列的物理学期刊，发表高影响力的物理研究。
                </p>
                <div class="journal-topics">
                  <span class="topic-tag">基础物理</span>
                  <span class="topic-tag">新奇现象</span>
                  <span class="topic-tag">理论突破</span>
                </div>
              </div>
            </div>
          </div>

          <div class="journal-tier">
            <h3>专业期刊</h3>
            <div class="journal-grid">
              <div class="journal-card">
                <div class="journal-header">
                  <h4>Physical Review B</h4>
                  <span class="impact-factor">IF: 3.8</span>
                </div>
                <p class="journal-description">
                  凝聚态物理和材料科学的专业期刊。
                </p>
              </div>

              <div class="journal-card">
                <div class="journal-header">
                  <h4>Journal of Physics: Condensed Matter</h4>
                  <span class="impact-factor">IF: 2.7</span>
                </div>
                <p class="journal-description">
                  凝聚态物理理论和实验的综合性期刊。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算工具与软件</h2>
        <div class="software-section">
          <div class="software-category">
            <h3>第一性原理计算</h3>
            <div class="software-grid">
              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">⚛️</div>
                  <h4>VASP</h4>
                  <span class="license-tag commercial">商业软件</span>
                </div>
                <p class="software-description">
                  Vienna Ab initio Simulation Package，广泛使用的DFT计算软件。
                </p>
                <div class="software-features">
                  <span class="feature-tag">DFT计算</span>
                  <span class="feature-tag">能带结构</span>
                  <span class="feature-tag">态密度</span>
                </div>
              </div>

              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">🔬</div>
                  <h4>Quantum ESPRESSO</h4>
                  <span class="license-tag open-source">开源软件</span>
                </div>
                <p class="software-description">
                  开源的第一性原理计算软件包，功能全面。
                </p>
                <div class="software-features">
                  <span class="feature-tag">免费使用</span>
                  <span class="feature-tag">社区支持</span>
                  <span class="feature-tag">模块化设计</span>
                </div>
              </div>
            </div>
          </div>

          <div class="software-category">
            <h3>多体计算</h3>
            <div class="software-grid">
              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">🧮</div>
                  <h4>ALPS</h4>
                  <span class="license-tag open-source">开源软件</span>
                </div>
                <p class="software-description">
                  Algorithms and Libraries for Physics Simulations，量子蒙特卡罗计算。
                </p>
                <div class="software-features">
                  <span class="feature-tag">QMC算法</span>
                  <span class="feature-tag">强关联系统</span>
                  <span class="feature-tag">并行计算</span>
                </div>
              </div>

              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">🔗</div>
                  <h4>ITensor</h4>
                  <span class="license-tag open-source">开源软件</span>
                </div>
                <p class="software-description">
                  张量网络计算库，实现DMRG等算法。
                </p>
                <div class="software-features">
                  <span class="feature-tag">张量网络</span>
                  <span class="feature-tag">DMRG</span>
                  <span class="feature-tag">C++/Julia</span>
                </div>
              </div>
            </div>
          </div>

          <div class="software-category">
            <h3>数据分析与可视化</h3>
            <div class="software-grid">
              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">🐍</div>
                  <h4>Python生态</h4>
                  <span class="license-tag open-source">开源软件</span>
                </div>
                <p class="software-description">
                  NumPy, SciPy, Matplotlib等科学计算库。
                </p>
                <div class="software-features">
                  <span class="feature-tag">数据处理</span>
                  <span class="feature-tag">科学计算</span>
                  <span class="feature-tag">可视化</span>
                </div>
              </div>

              <div class="software-card">
                <div class="software-header">
                  <div class="software-icon">📊</div>
                  <h4>Mathematica</h4>
                  <span class="license-tag commercial">商业软件</span>
                </div>
                <p class="software-description">
                  符号计算和数值分析的综合平台。
                </p>
                <div class="software-features">
                  <span class="feature-tag">符号计算</span>
                  <span class="feature-tag">数值求解</span>
                  <span class="feature-tag">交互式界面</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学习建议与路径规划</h2>
        <div class="learning-path">
          <div class="path-stage">
            <div class="stage-header">
              <div class="stage-number">1</div>
              <h3>基础阶段 (3-6个月)</h3>
            </div>
            <div class="stage-content">
              <div class="recommended-resources">
                <h4>推荐资源</h4>
                <ul>
                  <li>Kittel《固体物理导论》</li>
                  <li>MIT 8.511公开课</li>
                  <li>基础量子力学复习</li>
                </ul>
              </div>
              <div class="learning-goals">
                <h4>学习目标</h4>
                <ul>
                  <li>掌握晶体结构基本概念</li>
                  <li>理解能带理论基础</li>
                  <li>熟悉基本实验技术</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="path-stage">
            <div class="stage-header">
              <div class="stage-number">2</div>
              <h3>进阶阶段 (6-12个月)</h3>
            </div>
            <div class="stage-content">
              <div class="recommended-resources">
                <h4>推荐资源</h4>
                <ul>
                  <li>Marder《凝聚态物理》</li>
                  <li>Mahan《多粒子物理》</li>
                  <li>专业期刊文献阅读</li>
                </ul>
              </div>
              <div class="learning-goals">
                <h4>学习目标</h4>
                <ul>
                  <li>掌握多体理论方法</li>
                  <li>理解相变和临界现象</li>
                  <li>学习数值计算方法</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="path-stage">
            <div class="stage-header">
              <div class="stage-number">3</div>
              <h3>专业阶段 (持续学习)</h3>
            </div>
            <div class="stage-content">
              <div class="recommended-resources">
                <h4>推荐资源</h4>
                <ul>
                  <li>前沿研究论文</li>
                  <li>国际会议报告</li>
                  <li>专业软件实践</li>
                </ul>
              </div>
              <div class="learning-goals">
                <h4>学习目标</h4>
                <ul>
                  <li>跟踪前沿研究动态</li>
                  <li>发展独立研究能力</li>
                  <li>掌握专业计算工具</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实用学习技巧</h2>
        <div class="study-tips">
          <div class="tip-card">
            <div class="tip-icon">📖</div>
            <h4>阅读策略</h4>
            <ul>
              <li>先读概述，建立整体框架</li>
              <li>重点关注物理图像和直觉</li>
              <li>数学推导要亲自验证</li>
              <li>多本教材对比阅读</li>
            </ul>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🧮</div>
            <h4>计算练习</h4>
            <ul>
              <li>从简单模型开始</li>
              <li>重视数值计算验证</li>
              <li>学会使用专业软件</li>
              <li>培养编程能力</li>
            </ul>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🤝</div>
            <h4>交流学习</h4>
            <ul>
              <li>参加学术讨论组</li>
              <li>关注在线物理社区</li>
              <li>参加会议和讲座</li>
              <li>寻找研究合作机会</li>
            </ul>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🎯</div>
            <h4>目标导向</h4>
            <ul>
              <li>设定阶段性学习目标</li>
              <li>选择感兴趣的研究方向</li>
              <li>关注实际应用价值</li>
              <li>保持学习的持续性</li>
            </ul>
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
  background: #805ad5;
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

.textbook-categories {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.category-section {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 2rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

.level-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.level-badge.beginner {
  background: #c6f6d5;
  color: #2f855a;
}

.level-badge.intermediate {
  background: #fbd38d;
  color: #c05621;
}

.level-badge.advanced {
  background: #fed7d7;
  color: #c53030;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.book-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.book-card.featured {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.book-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.book-cover {
  flex-shrink: 0;
  width: 80px;
  height: 100px;
}

.cover-placeholder {
  width: 100%;
  height: 100%;
  background: #4a5568;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 0.25rem;
}

.book-card.featured .cover-placeholder {
  background: rgba(255, 255, 255, 0.2);
}

.book-info {
  flex: 1;
}

.book-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.author {
  font-style: italic;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.book-details {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.edition {
  font-size: 0.875rem;
  color: #718096;
}

.book-card.featured .edition {
  color: rgba(255, 255, 255, 0.8);
}

.difficulty {
  font-size: 0.875rem;
  color: #f6ad55;
}

.description {
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.book-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.book-card:not(.featured) .feature-tag {
  background: #edf2f7;
  color: #4a5568;
}

.online-resources {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.resource-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.course-item {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.course-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2f855a;
}

.platform-tag {
  background: #68d391;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.course-description {
  color: #38a169;
  margin-bottom: 1rem;
}

.course-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature {
  background: #c6f6d5;
  color: #2f855a;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.platform-card {
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.platform-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.platform-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 0.5rem;
}

.platform-card p {
  color: #9c4221;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.platform-pros {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pro-tag {
  background: #fed7d7;
  color: #c05621;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.journal-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.journal-tier h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.journal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.journal-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.journal-card.top-tier {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border: none;
}

.journal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.journal-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
}

.impact-factor {
  background: #4299e1;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.journal-description {
  color: #4a5568;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.journal-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-tag {
  background: #bee3f8;
  color: #2b6cb0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.software-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.software-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.software-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.software-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.software-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.software-icon {
  font-size: 1.5rem;
}

.license-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.license-tag.commercial {
  background: #fed7d7;
  color: #c53030;
}

.license-tag.open-source {
  background: #c6f6d5;
  color: #2f855a;
}

.software-description {
  color: #4a5568;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.software-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.learning-path {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.path-stage {
  background: #f7fafc;
  border-left: 4px solid #4299e1;
  border-radius: 0.5rem;
  padding: 2rem;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stage-number {
  background: #4299e1;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
}

.stage-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

.stage-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.recommended-resources,
.learning-goals {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.recommended-resources h4,
.learning-goals h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.recommended-resources ul,
.learning-goals ul {
  list-style: none;
  padding: 0;
}

.recommended-resources li,
.learning-goals li {
  padding: 0.25rem 0;
  color: #4a5568;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1rem;
}

.recommended-resources li::before,
.learning-goals li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.study-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tip-card {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.tip-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tip-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #234e52;
  margin-bottom: 1rem;
}

.tip-card ul {
  list-style: none;
  padding: 0;
}

.tip-card li {
  padding: 0.25rem 0;
  color: #285e61;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1rem;
}

.tip-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #38b2ac;
  font-weight: bold;
}

.parameter-network {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.parameter-category h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.parameter-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.parameter-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 2px solid #0ea5e9;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.1);
}

.parameter-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0c4a6e;
  margin-bottom: 1.5rem;
  text-align: center;
}

.parameter-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.param-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1.25rem;
  border-left: 4px solid #0ea5e9;
}

.param-name {
  font-weight: 600;
  color: #1e40af;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.param-value {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.param-description p {
  color: #374151;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.formula {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #475569;
  text-align: center;
}

.network-analysis {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.network-layer h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.correlation-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.correlation-item {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.1);
}

.correlation-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #92400e;
  margin-bottom: 1.5rem;
  text-align: center;
}

.coupling-description p {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #374151;
  font-size: 0.875rem;
  text-align: center;
}

.coupling-effects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.effect-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid #f59e0b;
}

.effect-name {
  font-weight: 600;
  color: #92400e;
  font-size: 0.875rem;
}

.effect-formula {
  font-family: 'Courier New', monospace;
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.scale-connections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.scale-item {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #22c55e;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.1);
}

.scale-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #15803d;
  margin-bottom: 1.5rem;
  text-align: center;
}

.scale-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.transition-mechanism {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid #22c55e;
}

.transition-mechanism p {
  color: #374151;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.transition-mechanism .formula {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #15803d;
  margin-bottom: 0.5rem;
}

.emergent-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid #22c55e;
}

.emergent-properties h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #15803d;
  margin-bottom: 1rem;
}

.emergent-properties ul {
  list-style: none;
  padding: 0;
}

.emergent-properties li {
  padding: 0.5rem 0;
  color: #374151;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1.5rem;
}

.emergent-properties li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #22c55e;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .book-grid,
  .platform-grid,
  .journal-grid,
  .software-grid,
  .study-tips {
    grid-template-columns: 1fr;
  }
  
  .parameter-showcase,
  .correlation-matrix {
    grid-template-columns: 1fr;
  }
  
  .scale-description {
    grid-template-columns: 1fr;
  }
  
  .book-card {
    flex-direction: column;
    text-align: center;
  }
  
  .stage-content {
    grid-template-columns: 1fr;
  }
  
  .course-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .journal-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>