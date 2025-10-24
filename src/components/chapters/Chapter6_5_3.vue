<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.5.3 近藤问题</h1>
      <p class="chapter-subtitle">杂质自旋与传导电子的量子多体问题</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：45分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解近藤问题的物理背景和实验现象</li>
        <li>掌握近藤模型的哈密顿量和基本性质</li>
        <li>学习近藤效应的重整化群分析</li>
        <li>理解近藤温度和近藤共振的概念</li>
        <li>掌握近藤问题在量子点和重费米子系统中的应用</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：电阻率的反常行为</h2>
      <div class="highlight-box">
        <p>
          1964年，近藤淳（Jun Kondo）解释了稀磁合金中电阻率
          在低温下的<strong>反常上升</strong>现象。这个看似简单的问题
          实际上涉及了量子多体理论的核心概念：
          <strong>量子纠缠</strong>、<strong>重整化群流</strong>和
          <strong>非费米液体行为</strong>。近藤问题不仅是凝聚态物理
          的经典问题，更成为理解强关联电子系统的重要范例。
        </p>
      </div>
    </section>

    <!-- 实验背景 -->
    <section class="content-section">
      <h2>1. 实验背景与现象</h2>
      
      <div class="experimental-background">
        <div class="resistance-anomaly">
          <h4>电阻率反常</h4>
          <p>
            在稀磁合金（如Cu中掺杂少量Fe、Mn等）中观察到：
          </p>
          <div class="formula-box">
            $$\rho(T) = \rho_0 + AT^2 + B\ln T$$</div>
          <p>
            其中对数项在低温下导致电阻率上升，违反了经典的
            <strong>马蒂森定律</strong>。
          </p>
          
          <div class="resistance-plot">
            <svg viewBox="0 0 400 300" class="plot-svg">
              <!-- 坐标轴 -->
              <line x1="50" y1="250" x2="350" y2="250" stroke="#333" stroke-width="2"/>
              <line x1="50" y1="250" x2="50" y2="50" stroke="#333" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="370" y="255" font-size="14" fill="#333">T</text>
              <text x="45" y="40" font-size="14" fill="#333">ρ</text>
              
              <!-- 正常金属曲线 -->
              <path d="M 80 220 Q 150 200 300 180" stroke="#3498db" stroke-width="3" fill="none"/>
              <text x="310" y="175" font-size="12" fill="#3498db">正常金属</text>
              
              <!-- 近藤合金曲线 -->
              <path d="M 80 220 Q 150 240 200 200 Q 250 160 300 140" stroke="#e74c3c" stroke-width="3" fill="none"/>
              <text x="310" y="135" font-size="12" fill="#e74c3c">近藤合金</text>
              
              <!-- 最小值标记 -->
              <circle cx="200" cy="200" r="3" fill="#e74c3c"/>
              <text x="210" y="195" font-size="10" fill="#e74c3c">T_K</text>
            </svg>
          </div>
        </div>
        
        <div class="magnetic-properties">
          <h4>磁性质</h4>
          <div class="properties-grid">
            <div class="property-card">
              <h5>磁化率</h5>
              <p> 高温时遵循居里定律：</p> <div class="formula-box">$$\chi(T) = \frac{C}{T}$$</div>
              <p>
                低温时趋于常数（泡利磁化率）。
              </p>
            </div>
            
            <div class="property-card">
              <h5>比热</h5>
              <p> 低温时出现增强的线性项：</p> <div class="formula-box">$$C(T) = \gamma T + \beta T^3$$</div><p>其中$\gamma$远大于正常金属。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 近藤模型 -->
    <section class="content-section">
      <h2>2. 近藤模型</h2>
      
      <div class="kondo-model">
        <div class="hamiltonian">
          <h4>模型哈密顿量</h4>
          <p>
            近藤模型描述局域磁性杂质与传导电子的相互作用：
          </p><div class="formula-box">$$H = \sum_{k,\sigma} \epsilon_k c_{k\sigma}^\dagger c_{k\sigma} + J \vec{S} \cdot \vec{s}(0)$$</div>
          <p>
            其中：
          </p><ul><li>$c_{k\sigma}^\dagger$ 创建动量为 $k$、自旋为 $\sigma$的传导电子</li><li>$\vec{S}$是杂质自旋算符</li><li>$\vec{s}(0) = \frac{1}{2}\sum_{\alpha\beta} c_{0\alpha}^\dagger \vec{\sigma}_{\alpha\beta} c_{0\beta}$是原点处的电子自旋密度</li><li>$J$是交换耦合常数</li>
          </ul>
        </div>
        
        <div class="interaction-types">
          <h4>相互作用类型</h4>
          <div class="interaction-analysis">
            <div class="coupling-cases">
              <div class="case-card">
                <h5>反铁磁耦合 (J > 0)</h5>
                <p>
                  杂质自旋与传导电子自旋反平行排列，
                  导致近藤效应。
                </p><div class="formula-box">$$J > 0: \langle \vec{S} \cdot \vec{s}(0) \rangle < 0$$</div>
              </div>
              
              <div class="case-card">
                <h5>铁磁耦合 (J < 0)</h5>
                <p>
                  杂质自旋与传导电子自旋平行排列， 不产生近藤效应。</p> <div class="formula-box">$$J < 0: \langle \vec{S} \cdot \vec{s}(0) \rangle > 0$$</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scattering-picture">
          <h4>散射图像</h4>
          <p>
            近藤相互作用可以理解为电子的自旋相关散射：
          </p>
          <div class="scattering-diagram">
            <svg viewBox="0 0 500 200" class="scattering-svg">
              <!-- 杂质 -->
              <circle cx="250" cy="100" r="20" fill="#e74c3c" opacity="0.7"/>
              <text x="245" y="105" font-size="12" fill="white" font-weight="bold">S</text>
              
              <!-- 入射电子 -->
              <line x1="100" y1="80" x2="200" y2="80" stroke="#3498db" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="120" y="70" font-size="10" fill="#3498db">↑</text>
              
              <!-- 散射电子 -->
              <line x1="300" y1="120" x2="400" y2="120" stroke="#3498db" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="320" y="110" font-size="10" fill="#3498db">↓</text>
              
              <!-- 自旋翻转标记 -->
              <path d="M 220 90 Q 250 70 280 90" stroke="#f39c12" stroke-width="2" fill="none"/>
              <text x="240" y="65" font-size="10" fill="#f39c12">自旋翻转</text>
              
              <!-- 箭头定义 -->
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3498db"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 微扰理论分析 -->
    <section class="content-section">
      <h2>3. 微扰理论与对数发散</h2>
      
      <div class="perturbation-analysis">
        <div class="born-approximation">
          <h4>Born近似</h4>
          <p> 在最低阶微扰中，散射振幅为：</p> <div class="formula-box">$$T_{\sigma\sigma'} = J \langle \sigma | \vec{\sigma} | \sigma' \rangle \cdot \vec{S}$$</div>
          <p>
            这给出了与温度无关的电阻率贡献。
          </p>
        </div>
        
        <div class="second-order-correction">
          <h4>二阶修正</h4>
          <p> 二阶微扰产生对数发散：</p> <div class="formula-box">$$\Delta\rho \propto J^2 \rho_F \ln\left(\frac{D}{T}\right)$$</div><p>其中$\rho_F$ 是费米面态密度，$D$是带宽。
          </p>
          
          <div class="feynman-diagrams">
            <h5>费曼图表示</h5>
            <div class="diagrams-container">
              <svg viewBox="0 0 600 150" class="feynman-svg">
                <!-- 一阶图 -->
                <g transform="translate(50, 75)">
                  <line x1="0" y1="0" x2="80" y2="0" stroke="#333" stroke-width="2"/>
                  <circle cx="40" cy="0" r="5" fill="#e74c3c"/>
                  <text x="30" y="-15" font-size="10">J</text>
                </g>
                
                <!-- 二阶图 -->
                <g transform="translate(200, 75)">
                  <line x1="0" y1="0" x2="30" y2="0" stroke="#333" stroke-width="2"/>
                  <line x1="30" y1="0" x2="60" y2="-20" stroke="#333" stroke-width="2"/>
                  <line x1="30" y1="0" x2="60" y2="20" stroke="#333" stroke-width="2"/>
                  <line x1="60" y1="-20" x2="90" y2="0" stroke="#333" stroke-width="2"/>
                  <line x1="60" y1="20" x2="90" y2="0" stroke="#333" stroke-width="2"/>
                  <line x1="90" y1="0" x2="120" y2="0" stroke="#333" stroke-width="2"/>
                  <circle cx="30" cy="0" r="3" fill="#e74c3c"/>
                  <circle cx="90" cy="0" r="3" fill="#e74c3c"/>
                  <text x="55" y="-35" font-size="10">J²</text>
                </g>
                
                <!-- 标签 -->
                <text x="70" y="120" font-size="12" text-anchor="middle">一阶</text>
                <text x="260" y="120" font-size="12" text-anchor="middle">二阶</text>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="logarithmic-divergence">
          <h4>对数发散的物理起源</h4>
          <p>
            对数发散来自于低能虚过程的积累：
          </p><div class="formula-box">$$\int_0^T \frac{d\omega}{\omega} \sim \ln\left(\frac{D}{T}\right)$$</div>
          <p>
            这表明微扰理论在低温下失效，需要非微扰方法。
          </p>
        </div>
      </div>
    </section>

    <!-- 重整化群分析 -->
    <section class="content-section">
      <h2>4. 重整化群分析</h2>
      
      <div class="rg-analysis">
        <div class="poor-mans-scaling">
          <h4>"穷人的"标度分析</h4>
          <p> Anderson的简化重整化群方程：</p> <div class="formula-box">$$\frac{dJ}{d\ln D} = -\rho_F J^2$$</div><p>其中$D$是能量截断。
          </p>
        </div>
        
        <div class="beta-function">
          <h4>β函数</h4><p>定义$g = \rho_F J$，得到β函数：
          </p><div class="formula-box">$$\beta(g) = \frac{dg}{d\ln D} = -g^2$$</div>
          <p> 这个方程的解为：</p> <div class="formula-box">$$g(D) = \frac{g_0}{1 + g_0 \ln(D_0/D)}$$</div>
        </div>
        
        <div class="kondo-temperature">
          <h4>近藤温度</h4><p>当$g(T_K) \sim 1$时定义近藤温度：
          </p><div class="formula-box">$$T_K = D_0 \exp\left(-\frac{1}{\rho_F J}\right)$$</div>
          <p>
            这是问题中唯一的能量尺度。
          </p>
          
          <div class="temperature-regimes">
            <h5>温度区间</h5>
            <div class="regimes-grid">
              <div class="regime-card">
                <h6>高温区 (T ≫ T_K)</h6>
                <p> 弱耦合，微扰理论有效：</p> <div class="formula-box">$$\rho(T) \propto J^2 \ln(T/T_K)$$</div>
              </div>
              
              <div class="regime-card">
                <h6>低温区 (T ≪ T_K)</h6>
                <p> 强耦合，形成近藤单态：</p> <div class="formula-box">$$\rho(T) \propto (T/T_K)^2$$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 近藤单态 -->
    <section class="content-section">
      <h2>5. 近藤单态与费米液体</h2>
      
      <div class="kondo-singlet">
        <div class="ground-state">
          <h4>基态性质</h4><p>在$T \ll T_K$时，杂质自旋与传导电子形成
            <strong>近藤单态</strong>：
          </p><div class="formula-box">$$|\psi_0\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_{\text{imp}}|\downarrow\rangle_{\text{el}} - |\downarrow\rangle_{\text{imp}}|\uparrow\rangle_{\text{el}}\right)$$</div>
        </div>
        
        <div class="kondo-resonance">
          <h4>近藤共振</h4>
          <p> 在费米能级处形成尖锐的共振峰：</p> <div class="formula-box">$$\rho_{\text{imp}}(\omega) = \frac{\Gamma}{\omega^2 + \Gamma^2}$$</div><p>其中$\Gamma \sim T_K$是共振宽度。
          </p>
          
          <div class="resonance-plot">
            <svg viewBox="0 0 400 250" class="resonance-svg">
              <!-- 坐标轴 -->
              <line x1="50" y1="200" x2="350" y2="200" stroke="#333" stroke-width="2"/>
              <line x1="200" y1="220" x2="200" y2="50" stroke="#333" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="370" y="205" font-size="14" fill="#333">ω</text>
              <text x="190" y="40" font-size="14" fill="#333">ρ(ω)</text>
              <text x="205" y="215" font-size="12" fill="#333">E_F</text>
              
              <!-- 近藤共振峰 -->
              <path d="M 100 200 Q 150 120 200 80 Q 250 120 300 200" stroke="#e74c3c" stroke-width="3" fill="none"/>
              
              <!-- 标记 -->
              <text x="220" y="90" font-size="12" fill="#e74c3c">近藤共振</text>
              <line x1="150" y1="120" x2="250" y2="120" stroke="#666" stroke-width="1" stroke-dasharray="5,5"/>
              <text x="260" y="125" font-size="10" fill="#666">T_K</text>
            </svg>
          </div>
        </div>
        
        <div class="fermi-liquid-properties">
          <h4>费米液体性质</h4>
          <p>
            低温下系统表现为费米液体，但具有增强的参数：
          </p>
          <div class="properties-table">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>物理量</th>
                  <th>正常金属</th>
                  <th>近藤系统</th>
                  <th>增强因子</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>比热系数</td>
                  <td>γ₀</td>
                  <td>γ*</td>
                  <td>γ*/γ₀ ~ ln(D/T_K)</td>
                </tr>
                <tr>
                  <td>磁化率</td>
                  <td>χ₀</td>
                  <td>χ*</td>
                  <td>χ*/χ₀ ~ ln(D/T_K)</td>
                </tr>
                <tr>
                  <td>电阻率</td>
                  <td>ρ₀T²</td>
                  <td>ρ*T²</td>
                  <td>ρ*/ρ₀ ~ [ln(D/T_K)]²</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 数值重整化群 -->
    <section class="content-section">
      <h2>6. 数值重整化群解</h2>
      
      <div class="numerical-rg">
        <div class="wilson-approach">
          <h4>Wilson的方法</h4>
          <p>
            Wilson将传导带离散化为对数间隔的能级：
          </p><div class="formula-box">$$\epsilon_n = \pm D \Lambda^{-n}, \quad n = 0, 1, 2, \ldots$$</div><p>其中$\Lambda > 1$是离散化参数。
          </p>
        </div>
        
        <div class="iterative-diagonalization">
          <h4>迭代对角化</h4>
          <p>
            逐步加入能级并对角化哈密顿量：
          </p><div class="formula-box">$$H_N = \Lambda^{1/2} H_{N-1} + \epsilon_N (c_{N\uparrow}^\dagger c_{N\uparrow} + c_{N\downarrow}^\dagger c_{N\downarrow})$$</div>
        </div>
        
        <div class="fixed-point-spectrum">
          <h4>不动点谱</h4>
          <p>
            数值计算揭示了完整的能谱结构：
          </p>
          <div class="spectrum-diagram">
            <svg viewBox="0 0 500 300" class="spectrum-svg">
              <!-- 能级图 -->
              <g transform="translate(50, 50)">
                <!-- 自由费米子不动点 -->
                <g transform="translate(0, 0)">
                  <text x="50" y="-10" font-size="12" text-anchor="middle">自由费米子</text>
                  <line x1="20" y1="20" x2="80" y2="20" stroke="#3498db" stroke-width="2"/>
                  <line x1="20" y1="40" x2="80" y2="40" stroke="#3498db" stroke-width="2"/>
                  <line x1="20" y1="60" x2="80" y2="60" stroke="#3498db" stroke-width="2"/>
                </g>
                
                <!-- 强耦合不动点 -->
                <g transform="translate(150, 0)">
                  <text x="50" y="-10" font-size="12" text-anchor="middle">强耦合</text>
                  <line x1="20" y1="30" x2="80" y2="30" stroke="#e74c3c" stroke-width="2"/>
                  <line x1="20" y1="50" x2="80" y2="50" stroke="#e74c3c" stroke-width="2"/>
                </g>
                
                <!-- 流线 -->
                <path d="M 100 40 Q 125 30 150 40" stroke="#f39c12" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
              </g>
              
              <!-- 箭头定义 -->
              <defs>
                <marker id="arrow2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#f39c12"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="content-section">
      <h2>7. 实验验证与应用</h2>
      
      <div class="experimental-verification">
        <div class="classic-experiments">
          <h4>经典实验</h4>
          <div class="experiments-grid">
            <div class="experiment-card">
              <h5>稀磁合金</h5>
              <p>
                Cu:Fe, Au:Mn等系统中观察到：
              </p>
              <ul>
                <li>电阻率的对数上升</li>
                <li>磁化率的饱和</li>
                <li>比热的增强</li>
              </ul>
            </div>
            
            <div class="experiment-card">
              <h5>量子点</h5>
              <p>
                人工量子点中的近藤效应：
              </p>
              <ul>
                <li>可调的近藤温度</li>
                <li>零偏压电导峰</li>
                <li>磁场分裂</li>
              </ul>
            </div>
            
            <div class="experiment-card">
              <h5>重费米子</h5>
              <p>
                CeCu₆, UBe₁₃等化合物：
              </p>
              <ul>
                <li>巨大的比热系数</li>
                <li>相干温度标度</li>
                <li>非费米液体行为</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div name="modern-applications">
          <h4>现代应用</h4>
          <div class="applications-grid">
            <div class="application-card">
              <h5>量子输运</h5>
              <p>
                近藤效应在量子器件中的应用：
                单分子晶体管、自旋电子学器件。
              </p>
            </div>
            
            <div class="application-card">
              <h5>拓扑近藤</h5>
              <p>
                拓扑绝缘体表面的磁性杂质
                产生新型近藤效应。
              </p>
            </div>
            
            <div name="application-card">
              <h5>量子计算</h5>
              <p>
                近藤单态作为量子比特的
                候选态，具有长相干时间。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论扩展 -->
    <section class="content-section">
      <h2>8. 理论扩展与前沿</h2>
      
      <div class="theoretical-extensions">
        <div class="multi-channel-kondo">
          <h4>多通道近藤模型</h4>
          <p> 当传导电子有多个通道时：</p> <div class="formula-box">$$H = \sum_{k,\alpha,\sigma} \epsilon_k c_{k\alpha\sigma}^\dagger c_{k\alpha\sigma} + J \vec{S} \cdot \sum_\alpha \vec{s}_\alpha(0)$$</div><p>其中$\alpha$ 是通道指标。当通道数 $N > 2S$时，
            系统表现为<strong>非费米液体</strong>。
          </p>
        </div>
        
        <div class="kondo-lattice">
          <h4>近藤晶格</h4>
          <p>
            当杂质形成周期性阵列时：
          </p><div class="formula-box">$$H = \sum_{k,\sigma} \epsilon_k c_{k\sigma}^\dagger c_{k\sigma} + J \sum_i \vec{S}_i \cdot \vec{s}_i$$</div>
          <p>
            产生重费米子行为和量子临界现象。
          </p>
        </div>
        
        <div class="quantum-criticality">
          <h4>量子临界性</h4>
          <p> 近藤破坏量子临界点的性质：</p> <div class="formula-box">$$T_K \propto |g - g_c|^{z\nu}$$</div><p>其中$z$ 是动力学指数，$\nu$是关联长度指数。
          </p>
        </div>
        
        <div class="future-directions">
          <h4>未来方向</h4>
          <div class="directions-list">
            <ul>
              <li><strong>机器学习</strong>：用AI方法求解复杂近藤问题</li>
              <li><strong>非平衡</strong>：驱动系统中的近藤效应</li>
              <li><strong>拓扑</strong>：拓扑超导体中的近藤物理</li>
              <li><strong>多体局域化</strong>：无序系统中的近藤效应</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <div class="key-points">
          <h4>关键要点</h4>
          <ul>
            <li><strong>近藤效应</strong>：杂质自旋与传导电子的量子纠缠</li>
            <li><strong>对数发散</strong>：微扰理论在低温下的失效</li>
            <li><strong>重整化群</strong>：非微扰方法的成功应用</li>
            <li><strong>近藤温度</strong>：问题的特征能量尺度</li>
            <li><strong>近藤单态</strong>：强耦合极限的基态</li>
            <li><strong>费米液体</strong>：低温下的准粒子描述</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 练习题 -->
    <div class="exercise-box">
      <h3><i class="fas fa-pencil-alt"></i> 思考练习</h3>
      <ol>
        <li>为什么反铁磁耦合才产生近藤效应？</li>
        <li>近藤温度的指数形式有什么物理意义？</li>
        <li>多通道近藤模型为什么产生非费米液体？</li>
        <li>量子点中如何实现可调的近藤效应？</li>
      </ol>
    </div>

    <!-- 扩展阅读 -->
    <div class="reading-list">
      <h3><i class="fas fa-book"></i> 扩展阅读</h3>
      <ul>
        <li>Hewson, A.C. "The Kondo Problem to Heavy Fermions"</li>
        <li>Coleman, P. "Introduction to Many-Body Physics"</li>
        <li>Kondo, J. "Resistance minimum in dilute magnetic alloys"</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_5_3',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {delimiters: [{left: '$$', right: '$$', display: true},{left: '$', right: '$', display: false}
          ]
        });
      }
    });
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin-bottom: 15px;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.learning-objectives h3 {
  color: #2980b9;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.learning-objectives ul {
  margin: 0;
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
}

.content-section {
  margin: 30px 0;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.highlight-box {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  border-left: 5px solid #28a745;
}

.formula-box {
  background: #f1f3f4;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
}

.plot-svg, .scattering-svg, .feynman-svg, .resonance-svg, .spectrum-svg {
  width: 100%;
  height: auto;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.properties-grid, .regimes-grid, .experiments-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-card, .regime-card, .experiment-card, .application-card, .case-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.property-card h5, .regime-card h6, .experiment-card h5, .application-card h5, .case-card h5 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.property-card ul, .experiment-card ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.property-card li, .experiment-card li {
  margin-bottom: 5px;
}

.fl-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.fl-table th,
.fl-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.fl-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.fl-table tr:hover {
  background: #f8f9fa;
}

.diagrams-container {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.directions-list ul {
  margin: 10px 0;
  padding-left: 20px;
}

.directions-list li {
  margin-bottom: 8px;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
}

.summary-box h4 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-box ul {
  margin: 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 8px;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.exercise-box h3 {
  color: #f57f17;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin-bottom: 10px;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

.reading-list h3 {
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.reading-list ul {
  margin: 0;
  padding-left: 20px;
}

.reading-list li {
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .properties-grid,
  .regimes-grid,
  .experiments-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .fl-table {
    font-size: 0.8em;
  }
  
  .plot-svg,
  .scattering-svg,
  .feynman-svg,
  .resonance-svg,
  .spectrum-svg {
    padding: 5px;
  }
}
</style>