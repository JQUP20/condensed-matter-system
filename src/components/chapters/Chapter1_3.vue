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
      </section>

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
        <h2>核心理论方法</h2>
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
        <h2>重要理论概念</h2>
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
        <h2>未来发展方向</h2>
        <div class="future-directions">
          <div class="direction-card">
            <div class="direction-icon">🤖</div>
            <h4>机器学习与凝聚态</h4>
            <p>利用AI发现新材料、预测相图、优化理论计算</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 30%"></div>
            </div>
            <span class="progress-label">发展中</span>
          </div>

          <div class="direction-card">
            <div class="direction-icon">🔗</div>
            <h4>量子多体纠缠理论</h4>
            <p>深入理解强关联系统中的量子纠缠结构</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
            <span class="progress-label">快速发展</span>
          </div>

          <div class="direction-card">
            <div class="direction-icon">🌐</div>
            <h4>非平衡态理论</h4>
            <p>开放量子系统、驱动系统的理论描述</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 45%"></div>
            </div>
            <span class="progress-label">活跃研究</span>
          </div>

          <div class="direction-card">
            <div class="direction-icon">🎯</div>
            <h4>量子材料设计</h4>
            <p>基于理论指导的功能材料定向设计</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
            <span class="progress-label">蓬勃发展</span>
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