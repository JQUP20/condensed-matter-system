<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.3 凝聚态理论</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">理论基础</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>理论框架的建立</h2>
        <p class="lead-text">
          凝聚态理论是描述和预测凝聚态物质性质的理论体系。它融合了量子力学、
          统计力学、场论等多个理论分支，形成了一套完整的理论框架，
          用于理解从简单晶体到复杂量子材料的各种现象。
        </p>
        
        <div class="theoretical-pillars">
          <h3>理论基础的四大支柱</h3>
          <div class="pillars-grid">
            <div class="pillar-card quantum">
              <div class="pillar-icon">⚛️</div>
              <h4>量子力学基础</h4>
              <div class="pillar-content">
                <p><strong>核心原理：</strong>多体薛定谔方程</p>
                <div class="key-equation">
                  <div class="equation">iℏ ∂|Ψ⟩/∂t = Ĥ|Ψ⟩</div>
                </div>
                <div class="pillar-applications">
                  <h5>关键概念：</h5>
                  <ul>
                    <li><strong>波函数反对称性：</strong>费米子的泡利不相容原理</li>
                    <li><strong>二次量子化：</strong>产生湮灭算符形式</li>
                    <li><strong>量子统计：</strong>费米-狄拉克和玻色-爱因斯坦分布</li>
                    <li><strong>量子纠缠：</strong>多体系统的非局域关联</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="pillar-card statistical">
              <div class="pillar-icon">📊</div>
              <h4>统计力学</h4>
              <div class="pillar-content">
                <p><strong>核心原理：</strong>系综理论与热力学极限</p>
                <div class="key-equation">
                  <div class="equation">Z = Tr[e^{-βĤ}]</div>
                </div>
                <div class="pillar-applications">
                  <h5>重要方法：</h5>
                  <ul>
                    <li><strong>正则系综：</strong>固定温度下的平衡态</li>
                    <li><strong>巨正则系综：</strong>开放系统的化学势</li>
                    <li><strong>涨落-耗散定理：</strong>平衡态涨落与响应</li>
                    <li><strong>相变理论：</strong>临界现象与标度律</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="pillar-card symmetry">
              <div class="pillar-icon">🔄</div>
              <h4>对称性理论</h4>
              <div class="pillar-content">
                <p><strong>核心原理：</strong>群论与对称性分析</p>
                <div class="key-equation">
                  <div class="equation">[Ĥ, Ĝ] = 0</div>
                </div>
                <div class="pillar-applications">
                  <h5>基本概念：</h5>
                  <ul>
                    <li><strong>空间群：</strong>晶体的对称性分类</li>
                    <li><strong>Noether定理：</strong>对称性与守恒律</li>
                    <li><strong>自发对称破缺：</strong>相变的群论描述</li>
                    <li><strong>拓扑不变量：</strong>受保护的量子数</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="pillar-card field-theory">
              <div class="pillar-icon">🌊</div>
              <h4>量子场论</h4>
              <div class="pillar-content">
                <p><strong>核心原理：</strong>场的量子化与多体相互作用</p>
                <div class="key-equation">
                  <div class="equation">S = ∫ d⁴x ℒ[φ, ∂φ]</div>
                </div>
                <div class="pillar-applications">
                  <h5>重要工具：</h5>
                  <ul>
                    <li><strong>路径积分：</strong>量子涨落的求和</li>
                    <li><strong>费曼图：</strong>微扰论的图形表示</li>
                    <li><strong>重整化：</strong>发散的正规化处理</li>
                    <li><strong>有效场论：</strong>低能物理的描述</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mathematical-framework">
          <h3>数学框架体系</h3>
          <div class="framework-overview">
            <div class="framework-layer">
              <h4>🔢 基础数学工具</h4>
              <div class="math-tools">
                <div class="tool-category">
                  <h5>线性代数</h5>
                  <ul>
                    <li>希尔伯特空间理论</li>
                    <li>算符理论与谱分解</li>
                    <li>矩阵对角化技术</li>
                  </ul>
                </div>
                <div class="tool-category">
                  <h5>复分析</h5>
                  <ul>
                    <li>格林函数方法</li>
                    <li>解析延拓技术</li>
                    <li>留数定理应用</li>
                  </ul>
                </div>
                <div class="tool-category">
                  <h5>微分几何</h5>
                  <ul>
                    <li>流形上的场论</li>
                    <li>纤维丛理论</li>
                    <li>拓扑不变量计算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="framework-layer">
              <h4>🧮 专业数学方法</h4>
              <div class="specialized-methods">
                <div class="method-box">
                  <h5>群论与表示论</h5>
                  <p>对称性分析的数学基础，用于分类量子态和预测选择定则</p>
                  <div class="method-applications">
                    <span class="app-tag">能带理论</span>
                    <span class="app-tag">相变分类</span>
                    <span class="app-tag">选择定则</span>
                  </div>
                </div>
                <div class="method-box">
                  <h5>泛函分析</h5>
                  <p>无穷维空间中的分析，处理连续系统和场论问题</p>
                  <div class="method-applications">
                    <span class="app-tag">变分原理</span>
                    <span class="app-tag">泛函导数</span>
                    <span class="app-tag">算符理论</span>
                  </div>
                </div>
                <div class="method-box">
                  <h5>拓扑学</h5>
                  <p>研究空间的拓扑性质，理解拓扑相变和受保护边界态</p>
                  <div class="method-applications">
                    <span class="app-tag">同伦群</span>
                    <span class="app-tag">上同调</span>
                    <span class="app-tag">K理论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <section class="content-section">
        <h2>理论发展历程</h2>
        <div class="theory-timeline">
          <div class="timeline-period">
            <div class="period-header">
              <h3>经典时期 (1900-1925)</h3>
              <span class="period-tag classical">经典理论</span>
            </div>
            <div class="period-content">
              <div class="theory-item">
                <h4>德拜模型 (1912)</h4>
                <p>固体比热的量子理论，引入了声子概念的雏形</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>德拜比热公式：</h5>
                    <div class="equation">C_V = 9Nk_B(T/Θ_D)³∫₀^(Θ_D/T) (x⁴e^x)/(e^x-1)² dx</div>
                  </div>
                  <div class="physical-insight">
                    <h5>物理洞察：</h5>
                    <ul>
                      <li>将晶格振动视为连续介质中的声波</li>
                      <li>引入德拜截止频率，避免紫外发散</li>
                      <li>预言了低温下T³比热定律</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>爱因斯坦模型 (1907)</h4>
                <p>固体中原子振动的量子化处理</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>爱因斯坦比热公式：</h5>
                    <div class="equation">C_V = 3Nk_B(ℏω/k_BT)²(e^(ℏω/k_BT))/(e^(ℏω/k_BT)-1)²</div>
                  </div>
                  <div class="physical-insight">
                    <h5>历史意义：</h5>
                    <ul>
                      <li>首次将量子假说应用于固体物理</li>
                      <li>解释了固体比热的温度依赖性</li>
                      <li>为后续的量子理论发展奠定基础</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>朗道相变理论 (1930s)</h4>
                <p>相变的唯象理论，对称性破缺的早期描述</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>朗道自由能展开：</h5>
                    <div class="equation">F = F₀ + α(T-T_c)η² + βη⁴ + γη⁶ + ...</div>
                  </div>
                  <div class="physical-insight">
                    <h5>核心思想：</h5>
                    <ul>
                      <li>引入序参量η描述有序程度</li>
                      <li>基于对称性分析构建自由能</li>
                      <li>预言连续相变的临界行为</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-period">
            <div class="period-header">
              <h3>量子时期 (1925-1950)</h3>
              <span class="period-tag quantum">量子理论</span>
            </div>
            <div class="period-content">
              <div class="theory-item">
                <h4>能带理论 (1928)</h4>
                <p>布洛赫定理，周期势中电子的量子力学处理</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>布洛赫定理：</h5>
                    <div class="equation">ψ_{n,k}(r) = u_{n,k}(r)e^{ik·r}</div>
                  </div>
                  <div class="physical-insight">
                    <h5>重要结果：</h5>
                    <ul>
                      <li>电子态可用波矢k和能带指标n标记</li>
                      <li>能带结构决定材料的电学性质</li>
                      <li>解释了金属、半导体、绝缘体的区别</li>
                      <li>为现代电子器件奠定理论基础</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>BCS超导理论 (1957)</h4>
                <p>超导的微观理论，Cooper对的形成机制</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>BCS基态波函数：</h5>
                    <div class="equation">|BCS⟩ = ∏_k (u_k + v_k c†_{k↑}c†_{-k↓})|0⟩</div>
                  </div>
                  <div class="physical-insight">
                    <h5>理论突破：</h5>
                    <ul>
                      <li>电子通过声子交换形成Cooper对</li>
                      <li>超导能隙的微观起源</li>
                      <li>解释迈斯纳效应和零电阻现象</li>
                      <li>预言约瑟夫森效应</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>费米液体理论 (1950s)</h4>
                <p>朗道的准粒子概念，金属的低能激发</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>准粒子能量：</h5>
                    <div class="equation">ε_k = v_F(|k| - k_F) + Σ_{k'} f_{k,k'} δn_{k'}</div>
                  </div>
                  <div class="physical-insight">
                    <h5>核心概念：</h5>
                    <ul>
                      <li>强相互作用系统的准粒子描述</li>
                      <li>朗道参数刻画准粒子相互作用</li>
                      <li>解释金属的输运和热力学性质</li>
                      <li>为理解强关联系统提供基础</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-period">
            <div class="period-header">
              <h3>现代时期 (1950-至今)</h3>
              <span class="period-tag modern">现代理论</span>
            </div>
            <div class="period-content">
              <div class="theory-item">
                <h4>重整化群理论 (1970s)</h4>
                <p>临界现象的统一描述，标度不变性</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>重整化群方程：</h5>
                    <div class="equation">β(g) = μ ∂g/∂μ = -ε g + b g² + ...</div>
                  </div>
                  <div class="physical-insight">
                    <h5>革命性贡献：</h5>
                    <ul>
                      <li>解释临界现象的普适性</li>
                      <li>计算临界指数的精确值</li>
                      <li>建立标度理论的数学基础</li>
                      <li>应用于量子相变和无序系统</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>拓扑理论 (1980s-2000s)</h4>
                <p>拓扑不变量，受保护的边界态</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>Chern数：</h5>
                    <div class="equation">C = (1/2π) ∫_{BZ} Ω(k) d²k</div>
                  </div>
                  <div class="physical-insight">
                    <h5>新的物理图像：</h5>
                    <ul>
                      <li>拓扑不变量分类量子态</li>
                      <li>体-边对应关系</li>
                      <li>拓扑保护的边界态</li>
                      <li>量子霍尔效应的拓扑理解</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="theory-item">
                <h4>强关联理论 (1990s-至今)</h4>
                <p>超越费米液体的新奇量子态</p>
                <div class="theory-details">
                  <div class="key-equation">
                    <h5>Hubbard模型：</h5>
                    <div class="equation">H = -t Σ_{⟨i,j⟩,σ} (c†_{i,σ}c_{j,σ} + h.c.) + U Σ_i n_{i,↑}n_{i,↓}</div>
                  </div>
                  <div class="physical-insight">
                    <h5>新奇量子态：</h5>
                    <ul>
                      <li>Mott绝缘体和金属-绝缘体相变</li>
                      <li>量子自旋液体和分数化激发</li>
                      <li>非费米液体行为</li>
                      <li>高温超导的理论探索</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代理论方法体系</h2>
        <div class="modern-theory-framework">
          <div class="framework-category">
            <h3>🧮 数值计算方法</h3>
            <div class="method-showcase">
              <div class="method-item">
                <h4>密度泛函理论 (DFT)</h4>
                <div class="method-description">
                  <p><strong>核心思想：</strong>将多体问题映射为有效单体问题</p>
                  <div class="key-equations">
                    <div class="equation-block">
                      <h5>Kohn-Sham方程：</h5>
                      <div class="equation">[-½∇² + V_eff(r)]ψ_i(r) = ε_i ψ_i(r)</div>
                    </div>
                  </div>
                  <div class="applications">
                    <h5>主要应用：</h5>
                    <ul>
                      <li>材料的电子结构计算</li>
                      <li>化学反应路径预测</li>
                      <li>新材料设计与筛选</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="method-item">
                <h4>量子蒙特卡罗 (QMC)</h4>
                <div class="method-description">
                  <p><strong>核心思想：</strong>统计采样求解量子多体问题</p>
                  <div class="key-equations">
                    <div class="equation-block">
                      <h5>路径积分表示：</h5>
                      <div class="equation">Z = ∫ D[φ] e^{-S[φ]/ℏ}</div>
                    </div>
                  </div>
                  <div class="applications">
                    <h5>优势与应用：</h5>
                    <ul>
                      <li>处理强关联系统</li>
                      <li>精确求解小系统基态</li>
                      <li>研究量子相变</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="method-item">
                <h4>密度矩阵重整化群 (DMRG)</h4>
                <div class="method-description">
                  <p><strong>核心思想：</strong>保留最重要的量子纠缠信息</p>
                  <div class="key-equations">
                    <div class="equation-block">
                      <h5>纠缠熵：</h5>
                      <div class="equation">S = -Tr[ρ_A ln ρ_A]</div>
                    </div>
                  </div>
                  <div class="applications">
                    <h5>特别适用于：</h5>
                    <ul>
                      <li>一维强关联系统</li>
                      <li>量子自旋链</li>
                      <li>低维量子相变</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="framework-category">
            <h3>🌊 场论方法</h3>
            <div class="method-showcase">
              <div class="method-item">
                <h4>有效场论</h4>
                <div class="method-description">
                  <p><strong>核心思想：</strong>在相关能量尺度上构建有效理论</p>
                  <div class="key-equations">
                    <div class="equation-block">
                      <h5>有效拉格朗日量：</h5>
                      <div class="equation">ℒ_eff = ℒ₀ + c₁O₁ + c₂O₂ + ...</div>
                    </div>
                  </div>
                  <div class="applications">
                    <h5>应用领域：</h5>
                    <ul>
                      <li>低能激发的描述</li>
                      <li>相变临界行为</li>
                      <li>拓扑场论</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="method-item">
                <h4>共形场论 (CFT)</h4>
                <div class="method-description">
                  <p><strong>核心思想：</strong>利用共形对称性求解临界系统</p>
                  <div class="key-equations">
                    <div class="equation-block">
                      <h5>Virasoro代数：</h5>
                      <div class="equation">[L_m, L_n] = (m-n)L_{m+n} + (c/12)m(m²-1)δ_{m+n,0}</div>
                    </div>
                  </div>
                  <div class="applications">
                    <h5>重要应用：</h5>
                    <ul>
                      <li>二维临界系统</li>
                      <li>量子相变的精确解</li>
                      <li>纠缠熵的计算</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算方法详解</h2>
        <div class="computational-methods-detailed">
          <div class="methods-intro">
            <p class="lead-text">
              现代凝聚态理论依赖于多种计算方法来处理复杂的多体问题。
              每种方法都有其适用范围、优势和局限性，理解这些方法的原理和特点
              对于选择合适的研究工具至关重要。
            </p>
          </div>

          <div class="method-categories-detailed">
            <div class="method-category-detailed">
              <div class="category-header-detailed first-principles">
                <div class="category-icon">⚛️</div>
                <h3>第一性原理方法</h3>
                <span class="accuracy-badge">高精度</span>
              </div>
              
              <div class="method-detailed-grid">
                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>密度泛函理论 (DFT)</h4>
                    <div class="method-badges">
                      <span class="complexity-badge medium">中等复杂度</span>
                      <span class="scale-badge large">大规模</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>Hohenberg-Kohn定理：</strong>基态性质由电子密度唯一确定
                      </div>
                      <div class="foundation-item">
                        <strong>Kohn-Sham方程：</strong>将多体问题映射为有效单体问题
                      </div>
                      <div class="key-equation-box">
                        <div class="equation">[-½∇² + v_eff(r)]ψᵢ(r) = εᵢψᵢ(r)</div>
                      </div>
                    </div>

                    <div class="advantages-limitations">
                      <div class="advantages">
                        <h5>✅ 优势</h5>
                        <ul>
                          <li>计算效率高，可处理数百原子系统</li>
                          <li>预测精度较好，适用范围广</li>
                          <li>可计算多种物理性质</li>
                          <li>软件成熟，易于使用</li>
                        </ul>
                      </div>
                      <div class="limitations">
                        <h5>❌ 局限性</h5>
                        <ul>
                          <li>交换关联泛函的近似性</li>
                          <li>难以处理强关联系统</li>
                          <li>带隙通常被低估</li>
                          <li>范德华相互作用描述不准确</li>
                        </ul>
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">晶体结构优化</span>
                        <span class="app-tag">电子能带计算</span>
                        <span class="app-tag">态密度分析</span>
                        <span class="app-tag">声子谱计算</span>
                        <span class="app-tag">表面性质</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>GW近似方法</h4>
                    <div class="method-badges">
                      <span class="complexity-badge high">高复杂度</span>
                      <span class="scale-badge medium">中等规模</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>多体微扰理论：</strong>考虑电子-电子相互作用的动态屏蔽
                      </div>
                      <div class="foundation-item">
                        <strong>Hedin方程：</strong>自能的自洽计算
                      </div>
                      <div class="key-equation-box">
                        <div class="equation">Σ(r,r',ω) = i∫ G(r,r',ω+ω')W(r,r',ω') dω'/(2π)</div>
                      </div>
                    </div>

                    <div class="advantages-limitations">
                      <div class="advantages">
                        <h5>✅ 优势</h5>
                        <ul>
                          <li>准确描述激发态性质</li>
                          <li>正确预测带隙大小</li>
                          <li>考虑准粒子效应</li>
                        </ul>
                      </div>
                      <div class="limitations">
                        <h5>❌ 局限性</h5>
                        <ul>
                          <li>计算成本极高</li>
                          <li>系统尺寸受限</li>
                          <li>收敛性问题</li>
                        </ul>
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">准粒子能带</span>
                        <span class="app-tag">光学性质</span>
                        <span class="app-tag">激子效应</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-category-detailed">
              <div class="category-header-detailed many-body">
                <div class="category-icon">🌌</div>
                <h3>多体数值方法</h3>
                <span class="accuracy-badge">精确解</span>
              </div>
              
              <div class="method-detailed-grid">
                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>量子蒙特卡罗 (QMC)</h4>
                    <div class="method-badges">
                      <span class="complexity-badge high">高复杂度</span>
                      <span class="scale-badge medium">中等规模</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>路径积分表示：</strong>量子系统的经典统计力学映射
                      </div>
                      <div class="foundation-item">
                        <strong>重要性采样：</strong>Monte Carlo统计采样技术
                      </div>
                      <div class="qmc-variants">
                        <h6>主要变种：</h6>
                        <div class="variant-item">
                          <strong>VMC：</strong>变分蒙特卡罗，试探波函数优化
                        </div>
                        <div class="variant-item">
                          <strong>DMC：</strong>扩散蒙特卡罗，基态精确求解
                        </div>
                        <div class="variant-item">
                          <strong>PIMC：</strong>路径积分蒙特卡罗，有限温度性质
                        </div>
                      </div>
                    </div>

                    <div class="advantages-limitations">
                      <div class="advantages">
                        <h5>✅ 优势</h5>
                        <ul>
                          <li>原则上精确，无近似</li>
                          <li>可处理强关联系统</li>
                          <li>统计误差可控</li>
                          <li>并行效率高</li>
                        </ul>
                      </div>
                      <div class="limitations">
                        <h5>❌ 局限性</h5>
                        <ul>
                          <li>符号问题（费米子系统）</li>
                          <li>计算时间长</li>
                          <li>系统尺寸效应</li>
                          <li>动力学性质难以计算</li>
                        </ul>
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">Hubbard模型</span>
                        <span class="app-tag">量子磁性</span>
                        <span class="app-tag">超导配对</span>
                        <span class="app-tag">相变研究</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>密度矩阵重整化群 (DMRG)</h4>
                    <div class="method-badges">
                      <span class="complexity-badge medium">中等复杂度</span>
                      <span class="scale-badge small">小规模</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>Wilson重整化群：</strong>系统地截断希尔伯特空间
                      </div>
                      <div class="foundation-item">
                        <strong>矩阵乘积态：</strong>基于纠缠结构的波函数表示
                      </div>
                      <div class="key-equation-box">
                        <div class="equation">|ψ⟩ = ∑ A¹[s₁]A²[s₂]...Aᴸ[sᴸ] |s₁s₂...sᴸ⟩</div>
                      </div>
                    </div>

                    <div class="advantages-limitations">
                      <div class="advantages">
                        <h5>✅ 优势</h5>
                        <ul>
                          <li>一维系统的精确解</li>
                          <li>可计算基态和低激发态</li>
                          <li>动力学性质可计算</li>
                          <li>纠缠结构清晰</li>
                        </ul>
                      </div>
                      <div class="limitations">
                        <h5>❌ 局限性</h5>
                        <ul>
                          <li>主要限于一维系统</li>
                          <li>临界系统收敛慢</li>
                          <li>长程相互作用困难</li>
                          <li>高维推广复杂</li>
                        </ul>
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">自旋链</span>
                        <span class="app-tag">一维电子系统</span>
                        <span class="app-tag">量子杂质问题</span>
                        <span class="app-tag">纠缠熵计算</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-category-detailed">
              <div class="category-header-detailed field-theory">
                <div class="category-icon">🌊</div>
                <h3>场论与解析方法</h3>
                <span class="accuracy-badge">理论洞察</span>
              </div>
              
              <div class="method-detailed-grid">
                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>重整化群理论</h4>
                    <div class="method-badges">
                      <span class="complexity-badge high">高复杂度</span>
                      <span class="scale-badge universal">普适性</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>标度不变性：</strong>临界点附近的普适行为
                      </div>
                      <div class="foundation-item">
                        <strong>β函数：</strong>耦合常数的流动方程
                      </div>
                      <div class="key-equation-box">
                        <div class="equation">β(g) = μ ∂g/∂μ = -ε g + b₂g² + b₃g³ + ...</div>
                      </div>
                    </div>

                    <div class="rg-methods">
                      <h5>🔄 主要方法</h5>
                      <div class="rg-method-item">
                        <strong>Wilson RG：</strong>动量空间的逐步积分
                      </div>
                      <div class="rg-method-item">
                        <strong>ε展开：</strong>维数正规化技术
                      </div>
                      <div class="rg-method-item">
                        <strong>实空间RG：</strong>实空间的粗粒化
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">相变临界指数</span>
                        <span class="app-tag">普适性类</span>
                        <span class="app-tag">标度律</span>
                        <span class="app-tag">临界现象</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="method-detailed-card">
                  <div class="method-header">
                    <h4>格林函数方法</h4>
                    <div class="method-badges">
                      <span class="complexity-badge medium">中等复杂度</span>
                      <span class="scale-badge analytical">解析</span>
                    </div>
                  </div>
                  
                  <div class="method-content">
                    <div class="theoretical-foundation">
                      <h5>🔬 理论基础</h5>
                      <div class="foundation-item">
                        <strong>传播子概念：</strong>粒子在时空中的传播
                      </div>
                      <div class="foundation-item">
                        <strong>Dyson方程：</strong>自能的自洽求解
                      </div>
                      <div class="key-equation-box">
                        <div class="equation">G = G₀ + G₀ΣG</div>
                      </div>
                    </div>

                    <div class="green-function-types">
                      <h5>📊 函数类型</h5>
                      <div class="gf-type-item">
                        <strong>单粒子格林函数：</strong>电子传播子
                      </div>
                      <div class="gf-type-item">
                        <strong>两粒子格林函数：</strong>响应函数和顶点
                      </div>
                      <div class="gf-type-item">
                        <strong>非平衡格林函数：</strong>Keldysh形式
                      </div>
                    </div>

                    <div class="applications-scope">
                      <h5>🎯 应用范围</h5>
                      <div class="application-tags">
                        <span class="app-tag">谱函数计算</span>
                        <span class="app-tag">输运性质</span>
                        <span class="app-tag">多体效应</span>
                        <span class="app-tag">非平衡态</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="method-comparison">
            <h3>🔍 方法比较与选择指南</h3>
            <div class="comparison-matrix">
              <div class="comparison-header">
                <div class="method-name">方法</div>
                <div class="criterion">精度</div>
                <div class="criterion">规模</div>
                <div class="criterion">速度</div>
                <div class="criterion">适用性</div>
              </div>
              
              <div class="comparison-row">
                <div class="method-name">DFT</div>
                <div class="rating good">★★★☆☆</div>
                <div class="rating excellent">★★★★★</div>
                <div class="rating excellent">★★★★★</div>
                <div class="rating excellent">★★★★★</div>
              </div>
              
              <div class="comparison-row">
                <div class="method-name">GW</div>
                <div class="rating excellent">★★★★★</div>
                <div class="rating fair">★★☆☆☆</div>
                <div class="rating poor">★★☆☆☆</div>
                <div class="rating good">★★★☆☆</div>
              </div>
              
              <div class="comparison-row">
                <div class="method-name">QMC</div>
                <div class="rating excellent">★★★★★</div>
                <div class="rating good">★★★☆☆</div>
                <div class="rating poor">★☆☆☆☆</div>
                <div class="rating good">★★★☆☆</div>
              </div>
              
              <div class="comparison-row">
                <div class="method-name">DMRG</div>
                <div class="rating excellent">★★★★★</div>
                <div class="rating fair">★★☆☆☆</div>
                <div class="rating good">★★★☆☆</div>
                <div class="rating fair">★★☆☆☆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="theory-methods">
          <div class="method-category">
            <div class="category-header">
              <div class="category-icon">🔬</div>
              <h3>微观理论</h3>
            </div>
            <div class="method-grid">
              <div class="method-card">
                <h4>第一性原理计算</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>从基本的量子力学原理出发</p>
                  <div class="method-tools">
                    <span class="tool-tag">DFT</span>
                    <span class="tool-tag">Hartree-Fock</span>
                    <span class="tool-tag">GW方法</span>
                  </div>
                </div>
              </div>
              <div class="method-card">
                <h4>紧束缚模型</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>电子在原子轨道间的跃迁</p>
                  <div class="method-tools">
                    <span class="tool-tag">Hubbard模型</span>
                    <span class="tool-tag">t-J模型</span>
                    <span class="tool-tag">Anderson模型</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <div class="category-header">
              <div class="category-icon">📊</div>
              <h3>统计理论</h3>
            </div>
            <div class="method-grid">
              <div class="method-card">
                <h4>平均场理论</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>多体问题的单体近似</p>
                  <div class="method-tools">
                    <span class="tool-tag">Weiss场</span>
                    <span class="tool-tag">Hartree近似</span>
                    <span class="tool-tag">BCS理论</span>
                  </div>
                </div>
              </div>
              <div class="method-card">
                <h4>蒙特卡罗方法</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>统计采样求解多体问题</p>
                  <div class="method-tools">
                    <span class="tool-tag">经典MC</span>
                    <span class="tool-tag">量子MC</span>
                    <span class="tool-tag">DMRG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <div class="category-header">
              <div class="category-icon">🌊</div>
              <h3>场论方法</h3>
            </div>
            <div class="method-grid">
              <div class="method-card">
                <h4>格林函数方法</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>多体系统的传播子描述</p>
                  <div class="method-tools">
                    <span class="tool-tag">费曼图</span>
                    <span class="tool-tag">Dyson方程</span>
                    <span class="tool-tag">自能</span>
                  </div>
                </div>
              </div>
              <div class="method-card">
                <h4>路径积分方法</h4>
                <div class="method-details">
                  <p><strong>核心思想：</strong>量子涨落的路径求和</p>
                  <div class="method-tools">
                    <span class="tool-tag">虚时间</span>
                    <span class="tool-tag">有效作用量</span>
                    <span class="tool-tag">鞍点近似</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代理论发展前沿</h2>
        <div class="modern-developments">
          <div class="development-intro">
            <p class="lead-text">
              21世纪以来，凝聚态理论在计算能力提升、实验技术进步和跨学科融合的推动下，
              涌现出许多革命性的新理论和方法，为理解复杂量子材料开辟了新的道路。
            </p>
          </div>

          <div class="frontier-areas">
            <div class="frontier-category">
              <div class="category-header ai-ml">
                <div class="category-icon">🤖</div>
                <h3>人工智能与机器学习</h3>
                <span class="category-badge hot">热点</span>
              </div>
              <div class="frontier-content">
                <div class="frontier-item">
                  <h4>🧠 机器学习势函数</h4>
                  <div class="item-description">
                    <p>利用神经网络等机器学习方法构建高精度的原子间相互作用势，
                    实现大规模分子动力学模拟</p>
                    <div class="key-advances">
                      <div class="advance-tag">DeepMD</div>
                      <div class="advance-tag">GAP</div>
                      <div class="advance-tag">SNAP</div>
                      <div class="advance-tag">NequIP</div>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🔍 量子态识别与分类</h4>
                  <div class="item-description">
                    <p>使用机器学习算法自动识别和分类复杂的量子多体态，
                    发现新的量子相和相变</p>
                    <div class="key-advances">
                      <div class="advance-tag">CNN识别</div>
                      <div class="advance-tag">无监督学习</div>
                      <div class="advance-tag">相图绘制</div>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🎯 材料设计与发现</h4>
                  <div class="item-description">
                    <p>结合高通量计算和机器学习，预测和设计具有特定性质的新材料</p>
                    <div class="key-advances">
                      <div class="advance-tag">Materials Project</div>
                      <div class="advance-tag">AFLOW</div>
                      <div class="advance-tag">逆向设计</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="frontier-category">
              <div class="category-header quantum-computing">
                <div class="category-icon">⚡</div>
                <h3>拓扑量子计算</h3>
                <span class="category-badge emerging">新兴</span>
              </div>
              <div class="frontier-content">
                <div class="frontier-item">
                  <h4>🌀 Majorana费米子</h4>
                  <div class="item-description">
                    <p>在拓扑超导体中实现Majorana零模，为容错量子计算提供硬件基础</p>
                    <div class="theoretical-basis">
                      <h5>理论基础：</h5>
                      <ul>
                        <li>Kitaev链模型与拓扑超导</li>
                        <li>非阿贝尔统计与编织操作</li>
                        <li>拓扑保护与退相干抑制</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🔗 拓扑量子纠错码</h4>
                  <div class="item-description">
                    <p>基于拓扑序的量子纠错码，实现高容错率的量子信息处理</p>
                    <div class="key-advances">
                      <div class="advance-tag">Surface Code</div>
                      <div class="advance-tag">Color Code</div>
                      <div class="advance-tag">Toric Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="frontier-category">
              <div class="category-header many-body">
                <div class="category-icon">🌌</div>
                <h3>量子多体纠缠理论</h3>
                <span class="category-badge fundamental">基础</span>
              </div>
              <div class="frontier-content">
                <div class="frontier-item">
                  <h4>📊 纠缠熵与量子信息</h4>
                  <div class="item-description">
                    <p>利用纠缠熵等量子信息测度理解多体系统的相变和临界行为</p>
                    <div class="theoretical-tools">
                      <div class="tool-item">
                        <strong>面积定律：</strong>基态纠缠熵的标度行为
                      </div>
                      <div class="tool-item">
                        <strong>纠缠谱：</strong>约化密度矩阵的本征值分布
                      </div>
                      <div class="tool-item">
                        <strong>拓扑纠缠熵：</strong>拓扑序的量子信息特征
                      </div>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🔄 张量网络方法</h4>
                  <div class="item-description">
                    <p>基于纠缠结构的高效数值方法，突破传统方法的指数复杂度</p>
                    <div class="key-advances">
                      <div class="advance-tag">MPS/MPO</div>
                      <div class="advance-tag">PEPS</div>
                      <div class="advance-tag">MERA</div>
                      <div class="advance-tag">TNS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="frontier-category">
              <div class="category-header non-equilibrium">
                <div class="category-icon">⚡</div>
                <h3>非平衡量子理论</h3>
                <span class="category-badge growing">发展中</span>
              </div>
              <div class="frontier-content">
                <div class="frontier-item">
                  <h4>🌊 量子输运理论</h4>
                  <div class="item-description">
                    <p>描述开放量子系统中的输运现象和非平衡稳态</p>
                    <div class="theoretical-framework">
                      <div class="framework-item">
                        <strong>Keldysh形式：</strong>非平衡格林函数方法
                      </div>
                      <div class="framework-item">
                        <strong>Lindblad方程：</strong>开放系统的主方程
                      </div>
                      <div class="framework-item">
                        <strong>随机薛定谔方程：</strong>量子轨迹方法
                      </div>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🔥 量子热化与多体局域化</h4>
                  <div class="item-description">
                    <p>研究孤立量子系统的热化机制和局域化相变</p>
                    <div class="key-concepts">
                      <div class="concept-tag">ETH假设</div>
                      <div class="concept-tag">MBL相变</div>
                      <div class="concept-tag">量子疤痕</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="frontier-category">
              <div class="category-header quantum-materials">
                <div class="category-icon">💎</div>
                <h3>量子材料设计</h3>
                <span class="category-badge applied">应用导向</span>
              </div>
              <div class="frontier-content">
                <div class="frontier-item">
                  <h4>🎨 理性材料设计</h4>
                  <div class="item-description">
                    <p>基于第一性原理计算和机器学习的材料逆向设计</p>
                    <div class="design-pipeline">
                      <div class="pipeline-step">
                        <span class="step-number">1</span>
                        <span class="step-name">性质预测</span>
                      </div>
                      <div class="pipeline-arrow">→</div>
                      <div class="pipeline-step">
                        <span class="step-number">2</span>
                        <span class="step-name">结构优化</span>
                      </div>
                      <div class="pipeline-arrow">→</div>
                      <div class="pipeline-step">
                        <span class="step-number">3</span>
                        <span class="step-name">合成验证</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="frontier-item">
                  <h4>🔬 二维材料工程</h4>
                  <div class="item-description">
                    <p>设计和调控二维材料的电子、光学和磁性性质</p>
                    <div class="key-advances">
                      <div class="advance-tag">范德华异质结</div>
                      <div class="advance-tag">魔角石墨烯</div>
                      <div class="advance-tag">摩尔超晶格</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cross-disciplinary">
            <h3>🌐 跨学科融合趋势</h3>
            <div class="fusion-areas">
              <div class="fusion-item">
                <div class="fusion-header">
                  <span class="fusion-icon">🧬</span>
                  <h4>生物物理</h4>
                </div>
                <p>将凝聚态理论应用于生物系统，理解蛋白质折叠、DNA动力学等</p>
              </div>
              <div class="fusion-item">
                <div class="fusion-header">
                  <span class="fusion-icon">🌍</span>
                  <h4>地球科学</h4>
                </div>
                <p>研究极端条件下的物质性质，理解地球内部结构和动力学</p>
              </div>
              <div class="fusion-item">
                <div class="fusion-header">
                  <span class="fusion-icon">💻</span>
                  <h4>计算科学</h4>
                </div>
                <p>发展新的算法和计算方法，处理大规模复杂系统</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div class="concept-showcase">
          <div class="concept-item featured">
            <div class="concept-header">
              <h3>准粒子概念</h3>
              <span class="concept-level">核心概念</span>
            </div>
            <div class="concept-body">
              <p class="concept-description">
                在多体系统中，复杂的相互作用可以用简单的准粒子图像来描述。
                准粒子保留了单粒子的某些性质，但具有重整化的参数。
              </p>
              <div class="concept-examples">
                <div class="example-tag">声子</div>
                <div class="example-tag">磁子</div>
                <div class="example-tag">激子</div>
                <div class="example-tag">极化子</div>
              </div>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-header">
              <h3>对称性破缺</h3>
              <span class="concept-level">基础概念</span>
            </div>
            <div class="concept-body">
              <p class="concept-description">
                系统的基态具有比哈密顿量更低的对称性，导致相变和有序态的出现。
              </p>
              <div class="concept-examples">
                <div class="example-tag">铁磁序</div>
                <div class="example-tag">超导序</div>
                <div class="example-tag">晶格畸变</div>
              </div>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-header">
              <h3>拓扑不变量</h3>
              <span class="concept-level">前沿概念</span>
            </div>
            <div class="concept-body">
              <p class="concept-description">
                描述量子态拓扑性质的整数，在连续变形下保持不变，
                决定了系统的拓扑保护性质。
              </p>
              <div class="concept-examples">
                <div class="example-tag">Chern数</div>
                <div class="example-tag">Z₂不变量</div>
                <div class="example-tag">缠绕数</div>
              </div>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-header">
              <h3>量子纠缠</h3>
              <span class="concept-level">新兴概念</span>
            </div>
            <div class="concept-body">
              <p class="concept-description">
                多体量子态的非经典关联，是理解量子相变和强关联系统的新视角。
              </p>
              <div class="concept-examples">
                <div class="example-tag">纠缠熵</div>
                <div class="example-tag">纠缠谱</div>
                <div class="example-tag">面积定律</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>理论与实验的深度联系</h2>
        <div class="theory-experiment-connection">
          <div class="connection-overview">
            <p class="lead-text">
              凝聚态理论与实验之间存在着深刻而复杂的相互作用关系。理论不仅为实验提供指导和预测，
              实验也为理论发展提供验证和新的启发。这种双向互动推动了凝聚态物理学的快速发展。
            </p>
          </div>

          <div class="connection-categories">
            <div class="connection-category">
              <div class="category-header theory-guides">
                <div class="category-icon">🎯</div>
                <h3>理论指导实验设计</h3>
                <span class="category-badge predictive">预测性</span>
              </div>
              
              <div class="guidance-examples">
                <div class="guidance-item">
                  <div class="guidance-header">
                    <h4>🔍 实验参数优化</h4>
                    <span class="guidance-type">参数设计</span>
                  </div>
                  <div class="guidance-content">
                    <div class="theoretical-input">
                      <h5>理论输入</h5>
                      <ul>
                        <li><strong>能带计算：</strong>预测材料的电子结构和能隙</li>
                        <li><strong>相图计算：</strong>确定相变温度和压力范围</li>
                        <li><strong>响应函数：</strong>预测光学、磁学响应特征</li>
                        <li><strong>输运理论：</strong>预测电导率、霍尔系数等</li>
                      </ul>
                    </div>
                    <div class="experimental-design">
                      <h5>实验设计指导</h5>
                      <div class="design-aspects">
                        <div class="aspect-item">
                          <strong>温度范围：</strong>基于理论相图选择测量温度
                        </div>
                        <div class="aspect-item">
                          <strong>磁场强度：</strong>根据理论预测选择合适磁场
                        </div>
                        <div class="aspect-item">
                          <strong>样品制备：</strong>理论指导最优生长条件
                        </div>
                        <div class="aspect-item">
                          <strong>测量技术：</strong>选择最敏感的探测方法
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="guidance-item">
                  <div class="guidance-header">
                    <h4>🎨 新实验方法设计</h4>
                    <span class="guidance-type">方法创新</span>
                  </div>
                  <div class="guidance-content">
                    <div class="method-innovation">
                      <div class="innovation-example">
                        <h5>角分辨光电子能谱 (ARPES)</h5>
                        <p><strong>理论基础：</strong>能带理论预测的费米面结构</p>
                        <p><strong>实验实现：</strong>直接测量k空间中的电子态</p>
                        <div class="innovation-impact">
                          <span class="impact-tag">拓扑绝缘体发现</span>
                          <span class="impact-tag">超导能隙测量</span>
                          <span class="impact-tag">量子振荡研究</span>
                        </div>
                      </div>
                      
                      <div class="innovation-example">
                        <h5>扫描隧道显微镜 (STM)</h5>
                        <p><strong>理论基础：</strong>隧道效应和局域态密度理论</p>
                        <p><strong>实验实现：</strong>原子尺度的电子态成像</p>
                        <div class="innovation-impact">
                          <span class="impact-tag">量子点研究</span>
                          <span class="impact-tag">表面态观测</span>
                          <span class="impact-tag">Majorana费米子</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="guidance-item">
                  <div class="guidance-header">
                    <h4>🔬 新现象预测与寻找</h4>
                    <span class="guidance-type">现象发现</span>
                  </div>
                  <div class="guidance-content">
                    <div class="prediction-pipeline">
                      <div class="pipeline-stage">
                        <div class="stage-number">1</div>
                        <div class="stage-content">
                          <h5>理论预测</h5>
                          <p>基于第一性原理计算或模型分析预测新现象</p>
                        </div>
                      </div>
                      <div class="pipeline-arrow">↓</div>
                      <div class="pipeline-stage">
                        <div class="stage-number">2</div>
                        <div class="stage-content">
                          <h5>材料筛选</h5>
                          <p>理论计算筛选可能实现预测现象的材料</p>
                        </div>
                      </div>
                      <div class="pipeline-arrow">↓</div>
                      <div class="pipeline-stage">
                        <div class="stage-number">3</div>
                        <div class="stage-content">
                          <h5>实验验证</h5>
                          <p>设计专门实验验证理论预测的现象</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="prediction-examples">
                      <div class="example-card">
                        <h5>Weyl半金属</h5>
                        <div class="example-timeline">
                          <span class="timeline-item theory">理论预测 (2011)</span>
                          <span class="timeline-arrow">→</span>
                          <span class="timeline-item material">材料发现 (2015)</span>
                          <span class="timeline-arrow">→</span>
                          <span class="timeline-item experiment">实验确认 (2015-2016)</span>
                        </div>
                      </div>
                      
                      <div class="example-card">
                        <h5>时间晶体</h5>
                        <div class="example-timeline">
                          <span class="timeline-item theory">理论提出 (2012)</span>
                          <span class="timeline-arrow">→</span>
                          <span class="timeline-item material">系统设计 (2016)</span>
                          <span class="timeline-arrow">→</span>
                          <span class="timeline-item experiment">实验实现 (2017)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="connection-category">
              <div class="category-header experiment-informs">
                <div class="category-icon">🔄</div>
                <h3>实验推动理论发展</h3>
                <span class="category-badge empirical">实证性</span>
              </div>
              
              <div class="feedback-examples">
                <div class="feedback-item">
                  <div class="feedback-header">
                    <h4>🎯 理论验证与修正</h4>
                    <span class="feedback-type">验证修正</span>
                  </div>
                  <div class="feedback-content">
                    <div class="verification-process">
                      <div class="verification-aspect">
                        <h5>定量验证</h5>
                        <ul>
                          <li><strong>临界指数测量：</strong>验证重整化群理论预测</li>
                          <li><strong>能隙测量：</strong>检验能带理论计算精度</li>
                          <li><strong>输运系数：</strong>验证玻尔兹曼输运理论</li>
                          <li><strong>相变温度：</strong>检验平均场理论适用性</li>
                        </ul>
                      </div>
                      
                      <div class="verification-aspect">
                        <h5>理论修正</h5>
                        <div class="correction-examples">
                          <div class="correction-item">
                            <strong>高温超导：</strong>BCS理论无法解释 → 发展强关联理论
                          </div>
                          <div class="correction-item">
                            <strong>分数量子霍尔：</strong>单粒子图像失效 → Laughlin波函数
                          </div>
                          <div class="correction-item">
                            <strong>重费米子：</strong>传统能带论不适用 → 近藤效应理论
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="feedback-item">
                  <div class="feedback-header">
                    <h4>💡 新理论概念启发</h4>
                    <span class="feedback-type">概念创新</span>
                  </div>
                  <div class="feedback-content">
                    <div class="inspiration-cases">
                      <div class="inspiration-case">
                        <h5>🌊 拓扑序概念</h5>
                        <div class="case-development">
                          <div class="development-stage">
                            <strong>实验观察：</strong>分数量子霍尔态的奇异性质
                          </div>
                          <div class="development-arrow">↓</div>
                          <div class="development-stage">
                            <strong>理论启发：</strong>发展拓扑序和任意子理论
                          </div>
                          <div class="development-arrow">↓</div>
                          <div class="development-stage">
                            <strong>概念推广：</strong>拓扑量子计算、拓扑绝缘体
                          </div>
                        </div>
                      </div>
                      
                      <div class="inspiration-case">
                        <h5>🔗 量子纠缠</h5>
                        <div class="case-development">
                          <div class="development-stage">
                            <strong>实验发现：</strong>强关联系统的非经典关联
                          </div>
                          <div class="development-arrow">↓</div>
                          <div class="development-stage">
                            <strong>理论发展：</strong>纠缠熵、面积定律理论
                          </div>
                          <div class="development-arrow">↓</div>
                          <div class="development-stage">
                            <strong>方法创新：</strong>张量网络、DMRG方法
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="feedback-item">
                  <div class="feedback-header">
                    <h4>🔧 新计算方法需求</h4>
                    <span class="feedback-type">方法发展</span>
                  </div>
                  <div class="feedback-content">
                    <div class="method-demands">
                      <div class="demand-category">
                        <h5>精度需求驱动</h5>
                        <div class="demand-examples">
                          <div class="demand-item">
                            <strong>强关联系统：</strong>DFT不足 → 发展DFT+U、混合泛函
                          </div>
                          <div class="demand-item">
                            <strong>激发态性质：</strong>基态方法局限 → GW、BSE方法
                          </div>
                          <div class="demand-item">
                            <strong>非平衡态：</strong>平衡态理论不适用 → 非平衡格林函数
                          </div>
                        </div>
                      </div>
                      
                      <div class="demand-category">
                        <h5>尺度需求驱动</h5>
                        <div class="demand-examples">
                          <div class="demand-item">
                            <strong>大系统计算：</strong>传统方法指数复杂度 → 线性标度方法
                          </div>
                          <div class="demand-item">
                            <strong>长时间演化：</strong>数值不稳定 → 时间演化算法优化
                          </div>
                          <div class="demand-item">
                            <strong>多尺度问题：</strong>单一方法不足 → 多尺度建模
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="connection-category">
              <div class="category-header synergy">
                <div class="category-icon">🤝</div>
                <h3>理论实验协同创新</h3>
                <span class="category-badge collaborative">协同性</span>
              </div>
              
              <div class="synergy-examples">
                <div class="synergy-item">
                  <div class="synergy-header">
                    <h4>🎯 实时理论指导</h4>
                    <span class="synergy-type">实时协作</span>
                  </div>
                  <div class="synergy-content">
                    <div class="realtime-guidance">
                      <div class="guidance-scenario">
                        <h5>材料生长优化</h5>
                        <div class="scenario-flow">
                          <div class="flow-step">
                            <span class="step-label">实验</span>
                            <span class="step-content">初步样品制备</span>
                          </div>
                          <div class="flow-arrow">⇄</div>
                          <div class="flow-step">
                            <span class="step-label">理论</span>
                            <span class="step-content">快速结构优化计算</span>
                          </div>
                          <div class="flow-arrow">⇄</div>
                          <div class="flow-step">
                            <span class="step-label">实验</span>
                            <span class="step-content">参数调整与验证</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="guidance-scenario">
                        <h5>相图探索</h5>
                        <div class="scenario-flow">
                          <div class="flow-step">
                            <span class="step-label">理论</span>
                            <span class="step-content">相图计算预测</span>
                          </div>
                          <div class="flow-arrow">⇄</div>
                          <div class="flow-step">
                            <span class="step-label">实验</span>
                            <span class="step-content">关键点测量验证</span>
                          </div>
                          <div class="flow-arrow">⇄</div>
                          <div class="flow-step">
                            <span class="step-label">理论</span>
                            <span class="step-content">模型参数精化</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="synergy-item">
                  <div class="synergy-header">
                    <h4>🔬 数据驱动理论</h4>
                    <span class="synergy-type">数据科学</span>
                  </div>
                  <div class="synergy-content">
                    <div class="data-driven-approach">
                      <div class="approach-aspect">
                        <h5>机器学习辅助</h5>
                        <ul>
                          <li><strong>模式识别：</strong>从实验数据中发现隐藏规律</li>
                          <li><strong>参数优化：</strong>自动调节理论模型参数</li>
                          <li><strong>预测加速：</strong>快速筛选候选材料</li>
                          <li><strong>异常检测：</strong>识别实验中的新现象</li>
                        </ul>
                      </div>
                      
                      <div class="approach-aspect">
                        <h5>高通量计算</h5>
                        <div class="throughput-pipeline">
                          <div class="pipeline-component">
                            <strong>自动化计算：</strong>批量第一性原理计算
                          </div>
                          <div class="pipeline-component">
                            <strong>数据库构建：</strong>材料性质数据库
                          </div>
                          <div class="pipeline-component">
                            <strong>智能筛选：</strong>基于目标性质的材料发现
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="connection-impact">
            <h3>🌟 理论实验结合的重大突破</h3>
            <div class="breakthrough-timeline">
              <div class="timeline-item">
                <div class="timeline-year">1957</div>
                <div class="timeline-content">
                  <h4>BCS超导理论</h4>
                  <p>理论预测Cooper对机制，实验验证同位素效应和能隙结构</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-year">1980</div>
                <div class="timeline-content">
                  <h4>整数量子霍尔效应</h4>
                  <p>实验发现精确量子化，理论解释拓扑起源</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-year">1982</div>
                <div class="timeline-content">
                  <h4>分数量子霍尔效应</h4>
                  <p>实验观测分数填充，Laughlin理论解释强关联液体态</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-year">2007</div>
                <div class="timeline-content">
                  <h4>拓扑绝缘体</h4>
                  <p>理论预测Z₂拓扑分类，实验发现Bi₂Se₃等材料</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-year">2015</div>
                <div class="timeline-content">
                  <h4>Weyl半金属</h4>
                  <p>理论预测Weyl点，实验在TaAs中观测到Fermi弧</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>理论与实验的对话</h2>
        <div class="theory-experiment">
          <div class="dialogue-flow">
            <div class="flow-step theory-step">
              <div class="step-icon">🧮</div>
              <h4>理论预测</h4>
              <p>基于模型和计算提出新现象</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step experiment-step">
              <div class="step-icon">🔬</div>
              <h4>实验验证</h4>
              <p>设计实验检验理论预测</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step refinement-step">
              <div class="step-icon">🔄</div>
              <h4>理论完善</h4>
              <p>根据实验结果修正理论</p>
            </div>
          </div>

          <div class="success-stories">
            <h4>成功案例</h4>
            <div class="story-grid">
              <div class="story-card">
                <h5>BCS理论与超导</h5>
                <p>理论预测Cooper对 → 实验证实同位素效应 → 完整的超导理论</p>
              </div>
              <div class="story-card">
                <h5>量子霍尔效应</h5>
                <p>Laughlin波函数 → 分数量子霍尔态发现 → 拓扑量子态理论</p>
              </div>
              <div class="story-card">
                <h5>拓扑绝缘体</h5>
                <p>Z₂分类理论 → Bi₂Se₃等材料发现 → 拓扑材料学</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>理论应用案例研究</h2>
        <div class="case-studies">
          <div class="case-study-intro">
            <p class="lead-text">
              以下案例展示了凝聚态理论如何在实际问题中发挥关键作用，从基础科学发现到技术应用，
              理论与实验的结合推动了我们对物质世界的深入理解和技术进步。
            </p>
          </div>

          <div class="case-categories">
            <div class="case-category">
              <div class="category-header breakthrough">
                <div class="category-icon">🏆</div>
                <h3>重大科学突破</h3>
                <span class="category-badge scientific">基础研究</span>
              </div>

              <div class="case-items">
                <div class="case-item featured">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>🌟 高温超导机理研究</h4>
                      <span class="case-year">1986-至今</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level breakthrough">重大突破</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="case-timeline">
                      <div class="timeline-phase">
                        <div class="phase-marker discovery">发现</div>
                        <div class="phase-content">
                          <h5>实验发现 (1986)</h5>
                          <p>Bednorz和Müller发现La-Ba-Cu-O系统中的高温超导现象</p>
                          <div class="key-findings">
                            <span class="finding">Tc ≈ 35K</span>
                            <span class="finding">铜氧化物</span>
                            <span class="finding">反常性质</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="timeline-phase">
                        <div class="phase-marker theory">理论</div>
                        <div class="phase-content">
                          <h5>理论挑战 (1987-2000)</h5>
                          <p>传统BCS理论无法解释高温超导，需要新的理论框架</p>
                          <div class="theoretical-approaches">
                            <div class="approach-item">
                              <strong>强关联理论：</strong>Hubbard模型、t-J模型
                            </div>
                            <div class="approach-item">
                              <strong>RVB理论：</strong>Anderson的共振价键态
                            </div>
                            <div class="approach-item">
                              <strong>自旋涨落：</strong>磁性配对机制
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="timeline-phase">
                        <div class="phase-marker progress">进展</div>
                        <div class="phase-content">
                          <h5>理论发展 (2000-至今)</h5>
                          <p>多种理论方法的发展和实验验证</p>
                          <div class="progress-highlights">
                            <div class="highlight-item">
                              <strong>ARPES实验：</strong>直接观测到d波配对对称性
                            </div>
                            <div class="highlight-item">
                              <strong>量子振荡：</strong>证实费米面的存在
                            </div>
                            <div class="highlight-item">
                              <strong>中子散射：</strong>揭示自旋涨落谱
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="case-impact-analysis">
                      <h5>理论贡献与影响</h5>
                      <div class="impact-grid">
                        <div class="impact-item">
                          <div class="impact-icon">🧮</div>
                          <h6>计算方法发展</h6>
                          <p>推动了量子蒙特卡洛、DMRG等强关联方法的发展</p>
                        </div>
                        <div class="impact-item">
                          <div class="impact-icon">🔬</div>
                          <h6>实验技术进步</h6>
                          <p>促进了ARPES、STM等高分辨实验技术的发展</p>
                        </div>
                        <div class="impact-item">
                          <div class="impact-icon">🌐</div>
                          <h6>概念框架扩展</h6>
                          <p>强关联电子系统理论框架的建立和完善</p>
                        </div>
                        <div class="impact-item">
                          <div class="impact-icon">🎯</div>
                          <h6>材料设计指导</h6>
                          <p>为寻找新的高温超导材料提供理论指导</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="case-item">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>🌊 拓扑绝缘体的发现与应用</h4>
                      <span class="case-year">2005-2015</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level major">重要发现</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="discovery-process">
                      <div class="process-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                          <h5>理论预测 (2005-2007)</h5>
                          <p>Kane-Mele模型预测石墨烯中的量子自旋霍尔效应</p>
                          <div class="theoretical-foundation">
                            <span class="foundation-item">Z₂拓扑分类</span>
                            <span class="foundation-item">时间反演对称性</span>
                            <span class="foundation-item">自旋轨道耦合</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="process-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                          <h5>材料预测 (2007-2009)</h5>
                          <p>第一性原理计算预测Bi₂Se₃、Bi₂Te₃等材料</p>
                          <div class="material-properties">
                            <div class="property-item">
                              <strong>体能隙：</strong>~0.3 eV
                            </div>
                            <div class="property-item">
                              <strong>表面态：</strong>Dirac锥结构
                            </div>
                            <div class="property-item">
                              <strong>自旋纹理：</strong>螺旋性锁定
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="process-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                          <h5>实验验证 (2009-2012)</h5>
                          <p>ARPES实验直接观测到拓扑表面态</p>
                          <div class="experimental-evidence">
                            <span class="evidence-item">线性色散关系</span>
                            <span class="evidence-item">自旋-动量锁定</span>
                            <span class="evidence-item">拓扑保护性</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="applications-potential">
                      <h5>应用前景</h5>
                      <div class="application-areas">
                        <div class="area-item">
                          <div class="area-icon">💻</div>
                          <h6>自旋电子学</h6>
                          <p>利用自旋-动量锁定实现高效自旋流</p>
                        </div>
                        <div class="area-item">
                          <div class="area-icon">🔮</div>
                          <h6>量子计算</h6>
                          <p>寻找Majorana费米子实现拓扑量子比特</p>
                        </div>
                        <div class="area-item">
                          <div class="area-icon">🎯</div>
                          <h6>低功耗器件</h6>
                          <p>拓扑保护的无耗散输运</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-category">
              <div class="category-header technology">
                <div class="category-icon">🔧</div>
                <h3>技术应用案例</h3>
                <span class="category-badge applied">应用研究</span>
              </div>

              <div class="case-items">
                <div class="case-item">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>💾 磁存储技术中的理论应用</h4>
                      <span class="case-year">1990-至今</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level commercial">商业应用</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="technology-evolution">
                      <div class="evolution-stage">
                        <h5>🔍 巨磁阻效应 (GMR)</h5>
                        <div class="stage-details">
                          <div class="theoretical-basis">
                            <strong>理论基础：</strong>自旋相关散射理论
                          </div>
                          <div class="practical-application">
                            <strong>应用：</strong>硬盘读取头，存储密度提升1000倍
                          </div>
                          <div class="impact-metrics">
                            <span class="metric">诺贝尔奖 (2007)</span>
                            <span class="metric">TB级硬盘</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="evolution-stage">
                        <h5>🌀 自旋转移力矩 (STT)</h5>
                        <div class="stage-details">
                          <div class="theoretical-basis">
                            <strong>理论基础：</strong>自旋角动量转移理论
                          </div>
                          <div class="practical-application">
                            <strong>应用：</strong>MRAM存储器，非易失性内存
                          </div>
                          <div class="impact-metrics">
                            <span class="metric">低功耗</span>
                            <span class="metric">高速写入</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="evolution-stage">
                        <h5>🎯 磁性隧道结 (MTJ)</h5>
                        <div class="stage-details">
                          <div class="theoretical-basis">
                            <strong>理论基础：</strong>隧道磁阻理论
                          </div>
                          <div class="practical-application">
                            <strong>应用：</strong>高密度存储，传感器
                          </div>
                          <div class="impact-metrics">
                            <span class="metric">TMR > 500%</span>
                            <span class="metric">纳米尺度</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="case-item">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>⚡ 热电材料的理论设计</h4>
                      <span class="case-year">2000-至今</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level emerging">新兴技术</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="design-strategy">
                      <div class="strategy-aspect">
                        <h5>理论指导原则</h5>
                        <div class="design-principles">
                          <div class="principle-item">
                            <strong>电子结构优化：</strong>调节载流子浓度和迁移率
                          </div>
                          <div class="principle-item">
                            <strong>声子工程：</strong>降低晶格热导率
                          </div>
                          <div class="principle-item">
                            <strong>能带工程：</strong>优化Seebeck系数
                          </div>
                        </div>
                      </div>
                      
                      <div class="strategy-aspect">
                        <h5>成功案例</h5>
                        <div class="success-examples">
                          <div class="example-item">
                            <strong>Bi₂Te₃合金：</strong>ZT ~ 1.0，商业化应用
                          </div>
                          <div class="example-item">
                            <strong>SnSe单晶：</strong>ZT ~ 2.6，理论预测验证
                          </div>
                          <div class="example-item">
                            <strong>纳米结构：</strong>量子限制效应提升性能
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-category">
              <div class="category-header emerging">
                <div class="category-icon">🚀</div>
                <h3>前沿探索案例</h3>
                <span class="category-badge frontier">前沿研究</span>
              </div>

              <div class="case-items">
                <div class="case-item">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>🔮 量子材料的机器学习设计</h4>
                      <span class="case-year">2015-至今</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level cutting-edge">前沿技术</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="ml-approach">
                      <div class="approach-pipeline">
                        <div class="pipeline-stage">
                          <div class="stage-icon">📊</div>
                          <h5>数据收集</h5>
                          <p>高通量第一性原理计算构建材料数据库</p>
                        </div>
                        <div class="pipeline-arrow">→</div>
                        <div class="pipeline-stage">
                          <div class="stage-icon">🤖</div>
                          <h5>模型训练</h5>
                          <p>机器学习算法学习结构-性质关系</p>
                        </div>
                        <div class="pipeline-arrow">→</div>
                        <div class="pipeline-stage">
                          <div class="stage-icon">🎯</div>
                          <h5>材料预测</h5>
                          <p>快速筛选具有目标性质的新材料</p>
                        </div>
                      </div>
                      
                      <div class="success-metrics">
                        <div class="metric-item">
                          <strong>加速比：</strong>计算速度提升10³-10⁶倍
                        </div>
                        <div class="metric-item">
                          <strong>准确性：</strong>预测精度达到DFT水平
                        </div>
                        <div class="metric-item">
                          <strong>发现率：</strong>新材料发现效率提升10倍
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="case-item">
                  <div class="case-header">
                    <div class="case-title">
                      <h4>🌌 非平衡量子多体系统</h4>
                      <span class="case-year">2010-至今</span>
                    </div>
                    <div class="case-impact">
                      <span class="impact-level fundamental">基础前沿</span>
                    </div>
                  </div>
                  
                  <div class="case-content">
                    <div class="research-frontiers">
                      <div class="frontier-area">
                        <h5>🔥 多体局域化 (MBL)</h5>
                        <div class="area-description">
                          <p>强无序系统中的非热化行为研究</p>
                          <div class="key-concepts">
                            <span class="concept">本征态热化假设</span>
                            <span class="concept">纠缠增长</span>
                            <span class="concept">量子疤痕</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="frontier-area">
                        <h5>⏰ 时间晶体</h5>
                        <div class="area-description">
                          <p>时间平移对称性自发破缺的新物态</p>
                          <div class="key-concepts">
                            <span class="concept">Floquet系统</span>
                            <span class="concept">周期驱动</span>
                            <span class="concept">时间有序</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="case-study-summary">
            <h3>📈 案例研究总结</h3>
            <div class="summary-insights">
              <div class="insight-item">
                <div class="insight-icon">🎯</div>
                <h4>理论预测的重要性</h4>
                <p>理论预测为实验提供明确方向，大大提高研究效率</p>
              </div>
              
              <div class="insight-item">
                <div class="insight-icon">🔄</div>
                <h4>理论实验的协同</h4>
                <p>理论与实验的紧密结合是重大突破的关键</p>
              </div>
              
              <div class="insight-item">
                <div class="insight-icon">🚀</div>
                <h4>技术转化的潜力</h4>
                <p>基础理论研究往往孕育着革命性的技术应用</p>
              </div>
              
              <div class="insight-item">
                <div class="insight-icon">🌐</div>
                <h4>跨学科的融合</h4>
                <p>现代凝聚态理论越来越依赖跨学科的方法和工具</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>未来发展方向</h2>
        <div class="future-directions">
          <div class="direction-overview">
            <p class="lead-text">
              凝聚态理论正朝着更加精确、高效和智能的方向发展。新兴的计算方法、实验技术和理论框架
              将继续推动我们对复杂量子多体系统的理解，并为未来的技术革命奠定基础。
            </p>
          </div>

          <div class="direction-categories">
            <div class="direction-category computational">
              <div class="category-header">
                <div class="category-icon">💻</div>
                <h3>计算方法革新</h3>
                <span class="category-badge">方法学</span>
              </div>
              
              <div class="direction-items">
                <div class="direction-card">
                  <div class="direction-icon">🤖</div>
                  <h4>机器学习与凝聚态</h4>
                  <div class="direction-content">
                    <p>AI技术在材料发现、相图预测、理论计算优化中的应用</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>神经网络势函数：</strong>结合DFT精度与经典MD效率
                      </div>
                      <div class="aspect-item">
                        <strong>自动化发现：</strong>AI驱动的新材料和新现象发现
                      </div>
                      <div class="aspect-item">
                        <strong>智能优化：</strong>自适应算法参数和计算策略
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 35%"></div>
                      </div>
                      <span class="progress-label">快速发展中</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">⚡</div>
                  <h4>量子计算辅助</h4>
                  <div class="direction-content">
                    <p>利用量子计算机解决经典计算机难以处理的强关联问题</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>变分量子算法：</strong>VQE求解基态和激发态
                      </div>
                      <div class="aspect-item">
                        <strong>量子模拟：</strong>直接模拟量子多体系统
                      </div>
                      <div class="aspect-item">
                        <strong>混合算法：</strong>经典-量子协同计算
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 20%"></div>
                      </div>
                      <span class="progress-label">早期探索</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">🔗</div>
                  <h4>张量网络方法</h4>
                  <div class="direction-content">
                    <p>基于量子纠缠结构的高效数值方法</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>高维系统：</strong>PEPS处理二维强关联系统
                      </div>
                      <div class="aspect-item">
                        <strong>实时演化：</strong>非平衡态动力学模拟
                      </div>
                      <div class="aspect-item">
                        <strong>有限温度：</strong>热态性质的精确计算
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 60%"></div>
                      </div>
                      <span class="progress-label">成熟发展</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="direction-category theoretical">
              <div class="category-header">
                <div class="category-icon">🧮</div>
                <h3>理论框架拓展</h3>
                <span class="category-badge">理论基础</span>
              </div>
              
              <div class="direction-items">
                <div class="direction-card">
                  <div class="direction-icon">🔗</div>
                  <h4>量子多体纠缠理论</h4>
                  <div class="direction-content">
                    <p>深入理解强关联系统中的量子纠缠结构和动力学</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>纠缠相变：</strong>测量诱导的相变和纠缠临界性
                      </div>
                      <div class="aspect-item">
                        <strong>纠缠谱：</strong>拓扑序和对称性破缺的表征
                      </div>
                      <div class="aspect-item">
                        <strong>纠缠动力学：</strong>非平衡态中的纠缠传播
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 70%"></div>
                      </div>
                      <span class="progress-label">活跃发展</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">🌐</div>
                  <h4>非平衡态理论</h4>
                  <div class="direction-content">
                    <p>开放量子系统、驱动系统的理论描述和新现象</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>Floquet工程：</strong>周期驱动系统的拓扑相
                      </div>
                      <div class="aspect-item">
                        <strong>耗散相变：</strong>开放系统中的临界现象
                      </div>
                      <div class="aspect-item">
                        <strong>量子热化：</strong>孤立系统的统计力学
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 45%"></div>
                      </div>
                      <span class="progress-label">快速发展</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">🎯</div>
                  <h4>拓扑量子物态</h4>
                  <div class="direction-content">
                    <p>新型拓扑相的理论预测和实验实现</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>高阶拓扑：</strong>铰链态、角态的理论和实现
                      </div>
                      <div class="aspect-item">
                        <strong>非阿贝尔相：</strong>Majorana费米子和拓扑量子计算
                      </div>
                      <div class="aspect-item">
                        <strong>分数拓扑：</strong>分数Chern绝缘体和分数拓扑绝缘体
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 55%"></div>
                      </div>
                      <span class="progress-label">蓬勃发展</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="direction-category applications">
              <div class="category-header">
                <div class="category-icon">🚀</div>
                <h3>应用前景展望</h3>
                <span class="category-badge">技术应用</span>
              </div>
              
              <div class="direction-items">
                <div class="direction-card">
                  <div class="direction-icon">🎯</div>
                  <h4>量子材料设计</h4>
                  <div class="direction-content">
                    <p>基于理论指导的功能材料定向设计和合成</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>逆向设计：</strong>从目标性质反推材料结构
                      </div>
                      <div class="aspect-item">
                        <strong>多尺度建模：</strong>从原子到器件的全尺度模拟
                      </div>
                      <div class="aspect-item">
                        <strong>智能合成：</strong>AI指导的材料制备工艺
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 65%"></div>
                      </div>
                      <span class="progress-label">快速推进</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">💻</div>
                  <h4>量子信息技术</h4>
                  <div class="direction-content">
                    <p>基于凝聚态系统的量子计算和量子通信</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>拓扑量子比特：</strong>容错量子计算的硬件基础
                      </div>
                      <div class="aspect-item">
                        <strong>自旋量子比特：</strong>半导体量子点中的量子信息
                      </div>
                      <div class="aspect-item">
                        <strong>量子传感：</strong>高精度测量和成像技术
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 40%"></div>
                      </div>
                      <span class="progress-label">积极探索</span>
                    </div>
                  </div>
                </div>

                <div class="direction-card">
                  <div class="direction-icon">🌱</div>
                  <h4>能源环境应用</h4>
                  <div class="direction-content">
                    <p>清洁能源和环境保护中的材料理论应用</p>
                    <div class="development-aspects">
                      <div class="aspect-item">
                        <strong>光伏材料：</strong>高效太阳能电池材料设计
                      </div>
                      <div class="aspect-item">
                        <strong>储能材料：</strong>电池和超级电容器材料优化
                      </div>
                      <div class="aspect-item">
                        <strong>催化材料：</strong>绿色化学反应的催化剂设计
                      </div>
                    </div>
                    <div class="progress-indicator">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 50%"></div>
                      </div>
                      <span class="progress-label">稳步发展</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="future-timeline">
            <h3>🗓️ 发展时间线展望</h3>
            <div class="timeline-container">
              <div class="timeline-item near-term">
                <div class="timeline-period">2024-2030</div>
                <div class="timeline-content">
                  <h4>近期目标</h4>
                  <ul>
                    <li>机器学习方法在材料发现中的广泛应用</li>
                    <li>张量网络方法处理更大规模系统</li>
                    <li>拓扑量子比特的原理验证</li>
                    <li>高温超导机理的进一步澄清</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item medium-term">
                <div class="timeline-period">2030-2040</div>
                <div class="timeline-content">
                  <h4>中期愿景</h4>
                  <ul>
                    <li>量子计算机在凝聚态问题中的实用化</li>
                    <li>非平衡态理论的成熟和应用</li>
                    <li>智能材料设计平台的建立</li>
                    <li>室温量子器件的实现</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item long-term">
                <div class="timeline-period">2040+</div>
                <div class="timeline-content">
                  <h4>长远展望</h4>
                  <ul>
                    <li>完全可编程的量子物质</li>
                    <li>人工智能驱动的理论发现</li>
                    <li>量子技术的全面产业化</li>
                    <li>新的物理定律和现象的发现</li>
                  </ul>
                </div>
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
  background: #38a169;
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

.theory-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-period {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 2rem;
  border-left: 4px solid #4299e1;
}

.period-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.period-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

.period-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.period-tag.classical {
  background: #fed7d7;
  color: #c53030;
}

.period-tag.quantum {
  background: #bee3f8;
  color: #2b6cb0;
}

.period-tag.modern {
  background: #c6f6d5;
  color: #2f855a;
}

.period-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.theory-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.theory-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.theory-item p {
  color: #718096;
  font-size: 0.875rem;
}

.theory-methods {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.method-category {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 2rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  font-size: 2rem;
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.method-details p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.method-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tool-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.theory-details {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.key-equation {
  margin-bottom: 1rem;
}

.key-equation h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.equation {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.75rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #2d3748;
  overflow-x: auto;
}

.physical-insight h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.physical-insight ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.physical-insight li {
  color: #4a5568;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.modern-theory-framework {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.framework-category {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.75rem;
  padding: 2rem;
}

.framework-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.method-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.method-item {
  background: white;
  border: 1px solid #c6f6d5;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.method-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1rem;
}

.method-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.key-equations {
  margin-bottom: 1rem;
}

.equation-block {
  margin-bottom: 0.75rem;
}

.equation-block h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.applications h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.applications ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.applications li {
  color: #38a169;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.concept-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-item.featured {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.concept-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.concept-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.concept-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.concept-level {
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
}

.concept-item:not(.featured) .concept-level {
  background: #edf2f7;
  color: #4a5568;
}

.concept-description {
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.concept-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.example-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
}

.concept-item:not(.featured) .example-tag {
  background: #e2e8f0;
  color: #4a5568;
}

.theory-experiment {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.75rem;
  padding: 2rem;
}

.dialogue-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.flow-step {
  background: white;
  border: 2px solid #68d391;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  min-width: 150px;
}

.step-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.flow-step h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.flow-step p {
  color: #38a169;
  font-size: 0.875rem;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #68d391;
  font-weight: bold;
}

.success-stories h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1rem;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.story-card {
  background: white;
  border: 1px solid #c6f6d5;
  border-radius: 0.5rem;
  padding: 1rem;
}

.story-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.story-card p {
  color: #38a169;
  font-size: 0.875rem;
}

.future-directions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.direction-card {
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.direction-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.direction-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 0.75rem;
}

.direction-card p {
  color: #9c4221;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.progress-bar {
  background: #fed7d7;
  height: 0.5rem;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  background: #ed8936;
  height: 100%;
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 0.75rem;
  color: #c05621;
  font-weight: 500;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .period-content,
  .method-grid,
  .concept-showcase,
  .story-grid,
  .future-directions {
    grid-template-columns: 1fr;
  }
  
  .dialogue-flow {
    flex-direction: column;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
  }
  
  .period-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>