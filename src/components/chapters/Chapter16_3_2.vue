<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.3.2 平均场理论</h1>
      <p class="chapter-subtitle">束缚子平均场理论：从微观哈密顿量到宏观序参量的桥梁</p>
    </header>

    <section class="content-section">
      <h2>🎯 平均场近似的基本思想</h2>
      
      <div class="mean-field-concept">
        <h3>平均场方法的核心理念</h3>
        <div class="mathematical-content">
          <h4>基本假设：</h4>
          <div class="assumption-explanation">
            <p>将复杂的多体相互作用问题简化为单体在有效场中的运动</p>
            <katex-element expression="\langle AB \rangle \approx \langle A \rangle B + A \langle B \rangle - \langle A \rangle \langle B \rangle"></katex-element>
            
            <div class="approximation-grid">
              <div class="approximation-item">
                <h5>🎯 物理图像</h5>
                <p>每个粒子感受到其他所有粒子产生的平均场</p>
                <p>忽略粒子间的关联和涨落</p>
              </div>
              
              <div class="approximation-item">
                <h5>🔄 自洽性</h5>
                <p>平均场由粒子的平均行为决定</p>
                <p>需要自洽求解平均场方程</p>
              </div>
              
              <div class="approximation-item">
                <h5>⚖️ 适用条件</h5>
                <p>高维系统或长程相互作用</p>
                <p>相变附近的临界行为</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mean-field-concept">
        <h3>束缚子系统中的平均场</h3>
        <div class="mathematical-content">
          <h4>束缚子哈密顿量回顾：</h4>
          <katex-element expression="H = -t \sum_{\langle i,j \rangle, \sigma} f_{i\sigma}^\dagger b_i f_{j\sigma} b_j^\dagger + J \sum_{\langle i,j \rangle} \left( \vec{S}_i \cdot \vec{S}_j - \frac{1}{4} n_i n_j \right)"></katex-element>
          
          <div class="slave-mf-strategy">
            <h4>平均场策略：</h4>
            <div class="strategy-steps">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h5>玻色子场平均场化</h5>
                  <katex-element expression="b_i^\dagger b_j \to \langle b_i^\dagger \rangle b_j + b_i^\dagger \langle b_j \rangle - \langle b_i^\dagger \rangle \langle b_j \rangle"></katex-element>
                  <p>处理空穴的跳跃和配对</p>
                </div>
              </div>
              
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h5>费米子相互作用平均场化</h5>
                  <katex-element expression="\vec{S}_i \cdot \vec{S}_j \to \langle \vec{S}_i \rangle \cdot \vec{S}_j + \vec{S}_i \cdot \langle \vec{S}_j \rangle - \langle \vec{S}_i \rangle \cdot \langle \vec{S}_j \rangle"></katex-element>
                  <p>处理自旋交换相互作用</p>
                </div>
              </div>
              
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h5>约束条件平均场化</h5>
                  <katex-element expression="\langle \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i \rangle = 1"></katex-element>
                  <p>保持粒子数约束</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔬 序参量的定义与分类</h2>
      
      <div class="order-parameters">
        <h3>主要序参量</h3>
        <div class="parameter-classification">
          <div class="parameter-category">
            <h4>🎯 玻色子序参量</h4>
            <div class="mathematical-content">
              <div class="boson-parameters">
                <div class="param-item">
                  <h5>空穴密度：</h5>
                  <katex-element expression="x = \langle b_i^\dagger b_i \rangle"></katex-element>
                  <p>描述系统中空穴的浓度</p>
                  <p>与电子掺杂浓度 δ = x 直接相关</p>
                </div>
                
                <div class="param-item">
                  <h5>玻色子凝聚：</h5>
                  <katex-element expression="\chi = \langle b_i \rangle = \sqrt{x} e^{i\phi}"></katex-element>
                  <p>玻色子的宏观量子相干</p>
                  <p>可能导致超流或超导现象</p>
                </div>
                
                <div class="param-item">
                  <h5>配对场：</h5>
                  <katex-element expression="\Delta_{ij} = \langle b_i b_j \rangle"></katex-element>
                  <p>空穴间的配对关联</p>
                  <p>与超导序参量相关</p>
                </div>
              </div>
            </div>
          </div>

          <div class="parameter-category">
            <h4>🧲 费米子序参量</h4>
            <div class="mathematical-content">
              <div class="fermion-parameters">
                <div class="param-item">
                  <h5>费米子密度：</h5>
                  <katex-element expression="n_f = \langle \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} \rangle = 1 - x"></katex-element>
                  <p>费米子的平均占据数</p>
                  <p>由约束条件确定</p>
                </div>
                
                <div class="param-item">
                  <h5>反铁磁序参量：</h5>
                  <katex-element expression="m_{AF} = \langle (-1)^i S_i^z \rangle"></katex-element>
                  <p>交错磁矩的大小</p>
                  <p>反铁磁长程序的量度</p>
                </div>
                
                <div class="param-item">
                  <h5>费米子配对：</h5>
                  <katex-element expression="\Delta_f = \langle f_{i\uparrow} f_{i\downarrow} \rangle"></katex-element>
                  <p>费米子的局域配对</p>
                  <p>与d波超导相关</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-parameters">
        <h3>序参量的物理意义</h3>
        <div class="physical-meaning-grid">
          <div class="meaning-card">
            <h4>🌊 超导序参量</h4>
            <div class="meaning-content">
              <div class="mathematical-content">
                <h5>有效超导序参量：</h5>
                <katex-element expression="\Delta_{SC} = \chi^2 \Delta_f"></katex-element>
                
                <div class="meaning-explanation">
                  <p><strong>物理图像：</strong></p>
                  <ul>
                    <li>χ²：玻色子凝聚提供的相干因子</li>
                    <li>Δf：费米子配对的内禀强度</li>
                    <li>两者结合产生宏观超导</li>
                  </ul>
                  
                  <p><strong>温度依赖：</strong></p>
                  <ul>
                    <li>低温：χ 和 Δf 都有限</li>
                    <li>高温：χ → 0，超导消失</li>
                    <li>Tc 由两个能量尺度竞争决定</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="meaning-card">
            <h4>🧲 磁序参量</h4>
            <div class="meaning-content">
              <div class="mathematical-content">
                <h5>反铁磁序的演化：</h5>
                <katex-element expression="m_{AF}(\delta) = m_0 \sqrt{1 - \delta/\delta_c}"></katex-element>
                
                <div class="meaning-explanation">
                  <p><strong>掺杂效应：</strong></p>
                  <ul>
                    <li>δ = 0：完美反铁磁序</li>
                    <li>0 < δ < δc：磁序被削弱</li>
                    <li>δ > δc：磁序完全消失</li>
                  </ul>
                  
                  <p><strong>竞争机制：</strong></p>
                  <ul>
                    <li>动能倾向于破坏磁序</li>
                    <li>交换能倾向于维持磁序</li>
                    <li>平衡点决定相变</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚡ 平均场哈密顿量的构建</h2>
      
      <div class="mf-hamiltonian">
        <h3>有效单粒子哈密顿量</h3>
        <div class="mathematical-content">
          <h4>费米子部分：</h4>
          <katex-element expression="H_f = \sum_{i,\sigma} \epsilon_{f,\sigma} f_{i\sigma}^\dagger f_{i\sigma} - t_{eff} \sum_{\langle i,j \rangle, \sigma} f_{i\sigma}^\dagger f_{j\sigma}"></katex-element>
          
          <div class="hamiltonian-terms">
            <h4>各项的物理意义：</h4>
            <div class="term-analysis">
              <div class="term-item">
                <h5>🎯 有效化学势</h5>
                <katex-element expression="\epsilon_{f,\sigma} = \mu_f + \sigma h_{AF} + \lambda"></katex-element>
                <div class="term-components">
                  <p><strong>μf：</strong>费米子化学势</p>
                  <p><strong>hAF：</strong>反铁磁场强度</p>
                  <p><strong>λ：</strong>约束拉格朗日乘子</p>
                </div>
              </div>
              
              <div class="term-item">
                <h5>🏃 有效跳跃积分</h5>
                <katex-element expression="t_{eff} = t \cdot x = t \cdot \delta"></katex-element>
                <div class="term-components">
                  <p><strong>物理图像：</strong>跳跃被空穴密度重整化</p>
                  <p><strong>掺杂效应：</strong>带宽随掺杂线性增加</p>
                  <p><strong>极限行为：</strong>δ → 0 时，teff → 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mf-hamiltonian">
        <h3>玻色子部分</h3>
        <div class="mathematical-content">
          <h4>玻色子有效哈密顿量：</h4>
          <katex-element expression="H_b = \sum_i \epsilon_b b_i^\dagger b_i - t_b \sum_{\langle i,j \rangle} (b_i^\dagger b_j + h.c.)"></katex-element>
          
          <div class="boson-analysis">
            <h4>玻色子参数：</h4>
            <div class="boson-parameters-grid">
              <div class="boson-param">
                <h5>🎯 玻色子化学势</h5>
                <katex-element expression="\epsilon_b = \mu_b - \lambda"></katex-element>
                <p>控制玻色子密度</p>
                <p>与费米子化学势耦合</p>
              </div>
              
              <div class="boson-param">
                <h5>🌊 玻色子跳跃</h5>
                <katex-element expression="t_b = t \cdot n_f"></katex-element>
                <p>被费米子密度重整化</p>
                <p>决定玻色子色散关系</p>
              </div>
              
              <div class="boson-param">
                <h5>🔄 玻色子凝聚条件</h5>
                <katex-element expression="\epsilon_b - z t_b = 0"></katex-element>
                <p>z是配位数</p>
                <p>凝聚发生的临界条件</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔄 自洽方程组</h2>
      
      <div class="self-consistent-equations">
        <h3>基本自洽方程</h3>
        <div class="mathematical-content">
          <h4>序参量自洽条件：</h4>
          <div class="equation-system">
            <div class="equation-group">
              <h5>🎯 空穴密度方程</h5>
              <katex-element expression="x = \langle b_i^\dagger b_i \rangle = \frac{1}{N} \sum_{\vec{k}} \frac{1}{e^{\beta(\epsilon_b(\vec{k}) - \mu_b)} - 1}"></katex-element>
              <p>玻色-爱因斯坦分布</p>
            </div>
            
            <div class="equation-group">
              <h5>🧲 费米子密度方程</h5>
              <katex-element expression="n_f = \langle \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} \rangle = \frac{1}{N} \sum_{\vec{k},\sigma} \frac{1}{e^{\beta(\epsilon_f(\vec{k},\sigma) - \mu_f)} + 1}"></katex-element>
              <p>费米-狄拉克分布</p>
            </div>
            
            <div class="equation-group">
              <h5>⚖️ 约束方程</h5>
              <katex-element expression="n_f + x = 1"></katex-element>
              <p>粒子数守恒</p>
            </div>
            
            <div class="equation-group">
              <h5>🔄 反铁磁序方程</h5>
              <katex-element expression="m_{AF} = \frac{1}{N} \sum_{\vec{k}} \frac{\tanh(\beta E_{\vec{k}}/2)}{2E_{\vec{k}}} h_{AF}"></katex-element>
              <p>其中 E_k 是准粒子能谱</p>
            </div>
          </div>
        </div>
      </div>

      <div class="self-consistent-equations">
        <h3>求解策略与数值方法</h3>
        <div class="solution-methods">
          <div class="method-grid">
            <div class="method-card">
              <h4>🔄 迭代求解法</h4>
              <div class="method-content">
                <div class="algorithm-steps">
                  <div class="algo-step">
                    <span class="step-num">1</span>
                    <p>初始猜测序参量值</p>
                  </div>
                  <div class="algo-step">
                    <span class="step-num">2</span>
                    <p>计算有效哈密顿量本征值</p>
                  </div>
                  <div class="algo-step">
                    <span class="step-num">3</span>
                    <p>更新序参量</p>
                  </div>
                  <div class="algo-step">
                    <span class="step-num">4</span>
                    <p>检查收敛性</p>
                  </div>
                </div>
                
                <div class="convergence-criteria">
                  <h5>收敛判据：</h5>
                  <katex-element expression="|\Delta x^{(n+1)} - \Delta x^{(n)}| < \epsilon"></katex-element>
                  <p>通常取 ε ~ 10⁻⁶</p>
                </div>
              </div>
            </div>

            <div class="method-card">
              <h4>🎯 变分方法</h4>
              <div class="method-content">
                <div class="variational-principle">
                  <h5>变分原理：</h5>
                  <katex-element expression="F = \langle H \rangle - TS"></katex-element>
                  <p>最小化自由能</p>
                  
                  <h5>变分条件：</h5>
                  <katex-element expression="\frac{\partial F}{\partial x} = 0, \quad \frac{\partial F}{\partial m_{AF}} = 0"></katex-element>
                  <p>对所有序参量求导为零</p>
                </div>
                
                <div class="stability-analysis">
                  <h5>稳定性分析：</h5>
                  <katex-element expression="\frac{\partial^2 F}{\partial x^2} > 0"></katex-element>
                  <p>二阶导数正定保证稳定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🌡️ 温度相图</h2>
      
      <div class="phase-diagram-analysis">
        <h3>不同掺杂下的相图</h3>
        <div class="phase-regions">
          <div class="phase-region-grid">
            <div class="region-card">
              <h4>🧲 反铁磁绝缘体区域</h4>
              <div class="region-content">
                <div class="mathematical-content">
                  <h5>特征参数：</h5>
                  <ul>
                    <li>δ ≈ 0（半填充附近）</li>
                    <li>mAF ≠ 0（长程磁序）</li>
                    <li>χ = 0（无玻色子凝聚）</li>
                  </ul>
                  
                  <h5>能隙结构：</h5>
                  <katex-element expression="\Delta_{Mott} = U - 2zt \approx J \cdot S"></katex-element>
                  <p>Mott绝缘体能隙</p>
                  
                  <h5>相变温度：</h5>
                  <katex-element expression="T_N \approx \frac{J S^2}{k_B}"></katex-element>
                  <p>Néel温度</p>
                </div>
              </div>
            </div>

            <div class="region-card">
              <h4>🌊 d波超导区域</h4>
              <div class="region-content">
                <div class="mathematical-content">
                  <h5>特征参数：</h5>
                  <ul>
                    <li>0.05 < δ < 0.25（最优掺杂）</li>
                    <li>mAF = 0（无磁序）</li>
                    <li>χ ≠ 0（玻色子凝聚）</li>
                  </ul>
                  
                  <h5>超导能隙：</h5>
                  <katex-element expression="\Delta_d(\vec{k}) = \Delta_0 (\cos k_x - \cos k_y)"></katex-element>
                  <p>d波对称性</p>
                  
                  <h5>临界温度：</h5>
                  <katex-element expression="T_c \propto \frac{\Delta_0^2}{t_{eff}}"></katex-element>
                  <p>BCS-BEC crossover</p>
                </div>
              </div>
            </div>

            <div class="region-card">
              <h4>🎭 赝能隙区域</h4>
              <div class="region-content">
                <div class="mathematical-content">
                  <h5>特征参数：</h5>
                  <ul>
                    <li>Tc < T < T*（赝能隙温度）</li>
                    <li>局域配对但无相位相干</li>
                    <li>费米弧现象</li>
                  </ul>
                  
                  <h5>赝能隙：</h5>
                  <katex-element expression="\Delta^* \propto |t| \sqrt{\delta}"></katex-element>
                  <p>局域配对能隙</p>
                  
                  <h5>crossover温度：</h5>
                  <katex-element expression="T^* \approx \frac{\Delta^*}{k_B}"></katex-element>
                  <p>配对形成温度</p>
                </div>
              </div>
            </div>

            <div class="region-card">
              <h4>🔄 奇异金属区域</h4>
              <div class="region-content">
                <div class="mathematical-content">
                  <h5>特征参数：</h5>
                  <ul>
                    <li>T > T*（高温区域）</li>
                    <li>线性电阻率 ρ ∝ T</li>
                    <li>非费米液体行为</li>
                  </ul>
                  
                  <h5>输运性质：</h5>
                  <katex-element expression="\rho(T) = \rho_0 + AT"></katex-element>
                  <p>线性温度依赖</p>
                  
                  <h5>散射率：</h5>
                  <katex-element expression="\frac{1}{\tau} \propto T"></katex-element>
                  <p>Planckian散射</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-diagram-analysis">
        <h3>相变的性质</h3>
        <div class="transition-analysis">
          <div class="transition-grid">
            <div class="transition-card">
              <h4>🧲 磁性相变</h4>
              <div class="transition-content">
                <div class="mathematical-content">
                  <h5>序参量行为：</h5>
                  <katex-element expression="m_{AF} \propto (T_N - T)^\beta"></katex-element>
                  <p>β ≈ 0.5（平均场）</p>
                  
                  <h5>比热异常：</h5>
                  <katex-element expression="C \propto |T - T_N|^{-\alpha}"></katex-element>
                  <p>α = 0（平均场）</p>
                  
                  <h5>磁化率发散：</h5>
                  <katex-element expression="\chi \propto |T - T_N|^{-\gamma}"></katex-element>
                  <p>γ = 1（平均场）</p>
                </div>
              </div>
            </div>

            <div class="transition-card">
              <h4>🌊 超导相变</h4>
              <div class="transition-content">
                <div class="mathematical-content">
                  <h5>序参量跳跃：</h5>
                  <katex-element expression="\Delta_{SC}(T_c^-) = \Delta_0"></katex-element>
                  <p>一级相变特征</p>
                  
                  <h5>比热跳跃：</h5>
                  <katex-element expression="\Delta C = \gamma T_c"></katex-element>
                  <p>BCS理论预言</p>
                  
                  <h5>临界场：</h5>
                  <katex-element expression="H_{c2} \propto \frac{\Delta_0^2}{v_F^2}"></katex-element>
                  <p>上临界磁场</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🧪 实验对比</h2>
      
      <div class="experimental-validation">
        <h3>理论预言与实验对比</h3>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🔬 ARPES实验</h4>
            <div class="comparison-content">
              <div class="theory-prediction">
                <h5>理论预言：</h5>
                <ul>
                  <li>费米弧的出现</li>
                  <li>d波超导能隙</li>
                  <li>赝能隙现象</li>
                </ul>
              </div>
              
              <div class="experimental-observation">
                <h5>实验观测：</h5>
                <ul>
                  <li>✓ 费米弧确实存在</li>
                  <li>✓ d波能隙对称性</li>
                  <li>✓ 赝能隙温度依赖</li>
                </ul>
              </div>
              
              <div class="agreement-level">
                <h5>符合程度：</h5>
                <div class="agreement-bar">
                  <div class="agreement-fill" style="width: 85%"></div>
                  <span class="agreement-text">85%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="comparison-card">
            <h4>🌡️ 输运测量</h4>
            <div class="comparison-content">
              <div class="theory-prediction">
                <h5>理论预言：</h5>
                <ul>
                  <li>线性电阻率</li>
                  <li>霍尔系数异常</li>
                  <li>热电效应</li>
                </ul>
              </div>
              
              <div class="experimental-observation">
                <h5>实验观测：</h5>
                <ul>
                  <li>✓ ρ ∝ T 确实观测到</li>
                  <li>? 霍尔系数部分符合</li>
                  <li>✓ Seebeck系数符合</li>
                </ul>
              </div>
              
              <div class="agreement-level">
                <h5>符合程度：</h5>
                <div class="agreement-bar">
                  <div class="agreement-fill" style="width: 70%"></div>
                  <span class="agreement-text">70%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="comparison-card">
            <h4>🧲 磁性质</h4>
            <div class="comparison-content">
              <div class="theory-prediction">
                <h5>理论预言：</h5>
                <ul>
                  <li>反铁磁涨落增强</li>
                  <li>自旋能隙</li>
                  <li>Knight位移</li>
                </ul>
              </div>
              
              <div class="experimental-observation">
                <h5>实验观测：</h5>
                <ul>
                  <li>✓ 中子散射确认</li>
                  <li>✓ NMR测量符合</li>
                  <li>? 定量差异存在</li>
                </ul>
              </div>
              
              <div class="agreement-level">
                <h5>符合程度：</h5>
                <div class="agreement-bar">
                  <div class="agreement-fill" style="width: 75%"></div>
                  <span class="agreement-text">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚠️ 平均场理论的局限性</h2>
      
      <div class="limitations-analysis">
        <h3>主要问题与挑战</h3>
        <div class="limitation-grid">
          <div class="limitation-card">
            <h3>🌊 量子涨落的忽略</h3>
            <div class="limitation-content">
              <div class="problem-description">
                <h4>问题表现：</h4>
                <ul>
                  <li>相变温度过高</li>
                  <li>临界指数不正确</li>
                  <li>低维效应被忽略</li>
                </ul>
                
                <h4>物理原因：</h4>
                <p>平均场近似假设序参量的涨落很小，但在相变点附近和低维系统中，量子涨落和热涨落都很重要。</p>
                
                <h4>改进方向：</h4>
                <ul>
                  <li>包含高斯涨落修正</li>
                  <li>重整化群方法</li>
                  <li>1/N展开技术</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3>🎭 非费米液体行为</h3>
            <div class="limitation-content">
              <div class="problem-description">
                <h4>实验现象：</h4>
                <ul>
                  <li>奇异金属相</li>
                  <li>边缘费米液体</li>
                  <li>量子临界点</li>
                </ul>
                
                <h4>理论挑战：</h4>
                <p>平均场理论基于准粒子图像，无法描述准粒子寿命趋于零的强关联系统。</p>
                
                <h4>新理论需求：</h4>
                <ul>
                  <li>全息对偶理论</li>
                  <li>SYK模型</li>
                  <li>分数化费米子理论</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3>🔄 动力学性质</h3>
            <div class="limitation-content">
              <div class="problem-description">
                <h4>缺失信息：</h4>
                <ul>
                  <li>谱函数的精细结构</li>
                  <li>输运系数的频率依赖</li>
                  <li>光学电导率</li>
                </ul>
                
                <h4>方法限制：</h4>
                <p>平均场理论主要处理静态性质，对于动力学响应函数的计算需要更高级的技术。</p>
                
                <h4>扩展方法：</h4>
                <ul>
                  <li>动力学平均场理论</li>
                  <li>量子蒙特卡罗</li>
                  <li>精确对角化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🚀 理论发展前景</h2>
      
      <div class="future-directions">
        <h3>改进方向与新发展</h3>
        <div class="direction-grid">
          <div class="direction-card">
            <h4>🌊 涨落效应的包含</h4>
            <div class="direction-content">
              <div class="mathematical-content">
                <h5>高斯涨落修正：</h5>
                <katex-element expression="S_{eff} = S_{MF} + \frac{1}{2} \sum_q \delta\phi(-q) G^{-1}(q) \delta\phi(q)"></katex-element>
                
                <h5>重整化群方程：</h5>
                <katex-element expression="\frac{dg}{dl} = \beta(g)"></katex-element>
                
                <div class="improvement-benefits">
                  <h6>预期改进：</h6>
                  <ul>
                    <li>更准确的临界指数</li>
                    <li>正确的相变温度</li>
                    <li>维度效应的包含</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="direction-card">
            <h4>🎯 机器学习辅助</h4>
            <div class="direction-content">
              <div class="ml-applications">
                <h5>应用领域：</h5>
                <ul>
                  <li>相图的自动识别</li>
                  <li>序参量的优化</li>
                  <li>临界点的精确定位</li>
                </ul>
                
                <h5>技术方法：</h5>
                <ul>
                  <li>神经网络变分</li>
                  <li>强化学习优化</li>
                  <li>深度学习分类</li>
                </ul>
                
                <div class="ml-advantages">
                  <h6>优势：</h6>
                  <ul>
                    <li>处理高维参数空间</li>
                    <li>发现隐藏的相关性</li>
                    <li>加速计算过程</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="direction-card">
            <h4>🔬 实验指导</h4>
            <div class="direction-content">
              <div class="experimental-guidance">
                <h5>理论预言：</h5>
                <ul>
                  <li>新的量子相</li>
                  <li>相变临界行为</li>
                  <li>输运异常</li>
                </ul>
                
                <h5>实验验证：</h5>
                <ul>
                  <li>ARPES精细测量</li>
                  <li>STM/STS局域探测</li>
                  <li>量子振荡实验</li>
                </ul>
                
                <div class="feedback-loop">
                  <h6>理论-实验反馈：</h6>
                  <ul>
                    <li>实验验证理论预言</li>
                    <li>实验发现推动理论</li>
                    <li>理论指导实验设计</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📚 本节总结</h2>
      <div class="summary-container">
        <div class="summary-points">
          <div class="point-item">
            <div class="point-number">1</div>
            <div class="point-content">
              <h4>平均场方法</h4>
              <p>将多体问题简化为单体在有效场中的运动</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>序参量理论</h4>
              <p>通过序参量描述不同量子相的特征</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>自洽求解</h4>
              <p>序参量方程的自洽求解给出相图</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>实验对比</h4>
              <p>理论预言与高温超导体实验基本符合</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">5</div>
            <div class="point-content">
              <h4>理论局限</h4>
              <p>需要包含涨落效应和非费米液体行为</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter16_3_2',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid #e3f2fd;
}

.chapter-header h1 {
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #546e7a;
  font-style: italic;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  color: #1976d2;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bbdefb;
}

.mean-field-concept {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ff9800;
}

.mean-field-concept h3 {
  color: #e65100;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.mathematical-content {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.mathematical-content h4 {
  color: #424242;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.assumption-explanation {
  margin-top: 1rem;
}

.approximation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.approximation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.approximation-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.approximation-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.slave-mf-strategy {
  margin-top: 1.5rem;
}

.strategy-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: #ff9800;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.step-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.order-parameters {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #4caf50;
}

.order-parameters h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.parameter-classification {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.parameter-category {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.parameter-category h4 {
  color: #388e3c;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.boson-parameters, .fermion-parameters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.param-item {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #4caf50;
}

.param-item h5 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.param-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.physical-meaning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.meaning-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.meaning-card h4 {
  color: #388e3c;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.meaning-content h5 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.meaning-explanation p {
  margin-bottom: 1rem;
}

.meaning-explanation ul {
  list-style: none;
  padding: 0;
}

.meaning-explanation li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.meaning-explanation li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #4caf50;
}

.mf-hamiltonian {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #9c27b0;
}

.mf-hamiltonian h3 {
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.hamiltonian-terms {
  margin-top: 1.5rem;
}

.term-analysis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.term-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.term-item h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.term-components {
  margin-top: 0.5rem;
}

.term-components p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.boson-analysis {
  margin-top: 1.5rem;
}

.boson-parameters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.boson-param {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.boson-param h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.boson-param p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.self-consistent-equations {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #009688;
}

.self-consistent-equations h3 {
  color: #00695c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.equation-system {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.equation-group {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.equation-group h5 {
  color: #00796b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-group p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.solution-methods {
  margin-top: 1.5rem;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.method-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-card h4 {
  color: #00796b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.algorithm-steps {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.algo-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.step-num {
  background: #009688;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.algo-step p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0;
}

.convergence-criteria, .variational-principle, .stability-analysis {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.convergence-criteria h5, .variational-principle h5, .stability-analysis h5 {
  color: #00695c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.convergence-criteria p, .variational-principle p, .stability-analysis p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.phase-diagram-analysis {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #2196f3;
}

.phase-diagram-analysis h3 {
  color: #0d47a1;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.phase-region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.region-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.region-card h4 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.region-content h5 {
  color: #1976d2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.region-content ul {
  list-style: none;
  padding: 0;
}

.region-content li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.region-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #2196f3;
}

.region-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.transition-analysis {
  margin-top: 1.5rem;
}

.transition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.transition-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transition-card h4 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.transition-content h5 {
  color: #1976d2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.transition-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.experimental-validation {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
}

.experimental-validation h3 {
  color: #f57f17;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.comparison-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comparison-card h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.theory-prediction, .experimental-observation {
  margin-bottom: 1rem;
}

.theory-prediction h5, .experimental-observation h5 {
  color: #f57f17;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.theory-prediction ul, .experimental-observation ul {
  list-style: none;
  padding: 0;
}

.theory-prediction li, .experimental-observation li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.theory-prediction li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ffc107;
}

.experimental-observation li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4caf50;
}

.experimental-observation li:has-text("?")::before {
  content: "?";
  color: #ff9800;
}

.agreement-level {
  margin-top: 1rem;
}

.agreement-level h5 {
  color: #f57f17;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.agreement-bar {
  position: relative;
  background: #e0e0e0;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.agreement-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.3s ease;
}

.agreement-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
}

.limitations-analysis {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #f44336;
}

.limitations-analysis h3 {
  color: #c62828;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.limitation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.limitation-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.limitation-card h3 {
  color: #d32f2f;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.limitation-content h4 {
  color: #f44336;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.limitation-content ul {
  list-style: none;
  padding: 0;
}

.limitation-content li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.limitation-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #f44336;
}

.limitation-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.future-directions {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #8bc34a;
}

.future-directions h3 {
  color: #33691e;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.direction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.direction-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.direction-card h4 {
  color: #689f38;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.direction-content h5 {
  color: #558b2f;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.direction-content h6 {
  color: #689f38;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.direction-content ul {
  list-style: none;
  padding: 0;
}

.direction-content li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.direction-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #8bc34a;
}

.improvement-benefits, .ml-advantages, .feedback-loop {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.ml-applications, .experimental-guidance {
  margin-top: 1rem;
}

.summary-container {
  background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #3f51b5;
}

.summary-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.point-number {
  background: #3f51b5;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content h4 {
  color: #303f9f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 0 15px;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .approximation-grid,
  .physical-meaning-grid,
  .method-grid,
  .phase-region-grid,
  .transition-grid,
  .comparison-grid,
  .limitation-grid,
  .direction-grid {
    grid-template-columns: 1fr;
  }
  
  .parameter-classification {
    flex-direction: column;
  }
  
  .boson-parameters-grid {
    grid-template-columns: 1fr;
  }
}
</style>