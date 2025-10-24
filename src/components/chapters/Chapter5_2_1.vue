<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.1 Landau平均场理论的可观测量</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">可观测量</span>
        <span class="reading-time">阅读时间：25分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Landau理论的真正价值在于它能够定量预测各种可观测的物理量。
        通过对自由能的分析，我们可以计算比热、磁化率、序参量等重要的热力学量，
        并揭示它们在相变点附近的奇异行为。
      </p>
    </div>

    <div class="content-section">
      <h2>基本热力学关系</h2>
      
      <div class="thermodynamic-relations">
        <div class="relation-cards">
          <div class="relation-card">
            <h3>🌡️ 熵和比热</h3>
            <div class="relation-content">
              <p><strong>熵的计算：</strong></p>
              <div class="formula-block">
                <katex-element expression="S = -\frac{\partial F}{\partial T}" :inline="false" />
              </div>
              
              <p><strong>比热的表达式：</strong></p>
              <div class="formula-block">
                <katex-element expression="C = T\frac{\partial S}{\partial T} = -T\frac{\partial^2 F}{\partial T^2}" :inline="false" />
              </div>
              
              <p><strong>在相变点的行为：</strong></p>
              <div class="behavior-analysis">
                <div class="phase-behavior">
                  <h4>高温相 (T > T_c)</h4>
                  <div class="formula-block">
                    <katex-element expression="C = C_0 + \frac{a_0^2}{2b}(T-T_c)^{-1}" :inline="false" />
                  </div>
                  <p>比热在接近 T_c 时发散</p>
                </div>
                
                <div class="phase-behavior">
                  <h4>低温相 (T < T_c)</h4>
                  <div class="formula-block">
                    <katex-element expression="C = C_0 + \frac{a_0^2}{2b}|T-T_c|^{-1}" :inline="false" />
                  </div>
                  <p>同样的发散行为，但符号相反</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relation-card">
            <h3>🧲 磁化率和响应函数</h3>
            <div class="relation-content">
              <p><strong>磁化率定义：</strong></p>
              <div class="formula-block">
                <katex-element expression="\chi = \frac{\partial M}{\partial H} = \frac{\partial^2 F}{\partial H^2}" :inline="false" />
              </div>
              
              <p><strong>序参量响应：</strong></p>
              <div class="formula-block">
                <katex-element expression="\chi_\eta = \frac{\partial \eta}{\partial h} = \left(\frac{\partial^2 F}{\partial \eta^2}\right)^{-1}" :inline="false" />
              </div>
              
              <p><strong>临界行为：</strong></p>
              <div class="critical-behavior">
                <div class="behavior-item">
                  <h4>T > T_c (顺磁相)</h4>
                  <div class="formula-block">
                    <katex-element expression="\chi = \frac{1}{a(T)} = \frac{1}{a_0(T-T_c)}" :inline="false" />
                  </div>
                  <p>Curie-Weiss定律</p>
                </div>
                
                <div class="behavior-item">
                  <h4>T < T_c (铁磁相)</h4>
                  <div class="formula-block">
                    <katex-element expression="\chi = \frac{1}{2|a(T)|} = \frac{1}{2a_0|T-T_c|}" :inline="false" />
                  </div>
                  <p>磁化率减半</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>序参量的温度依赖性</h2>
      
      <div class="order-parameter-analysis">
        <div class="analysis-framework">
          <div class="equilibrium-condition">
            <h3>🎯 平衡条件</h3>
            <div class="condition-content">
              <p><strong>自由能最小化：</strong></p>
              <div class="formula-block">
                <katex-element expression="\frac{\partial F}{\partial \eta} = a\eta + b\eta^3 + h = 0" :inline="false" />
              </div>
              
              <p><strong>零场情况 (h = 0)：</strong></p>
              <div class="zero-field-solutions">
                <div class="solution-case">
                  <h4>T > T_c: a > 0</h4>
                  <div class="formula-block">
                    <katex-element expression="\eta = 0" :inline="false" />
                  </div>
                  <p>唯一稳定解：无序相</p>
                </div>
                
                <div class="solution-case">
                  <h4>T < T_c: a < 0</h4>
                  <div class="formula-block">
                    <katex-element expression="\eta = \pm\sqrt{\frac{|a|}{b}} = \pm\sqrt{\frac{a_0(T_c-T)}{b}}" :inline="false" />
                  </div>
                  <p>两个等价的稳定解：有序相</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="temperature-profile">
            <h3>📈 温度剖面</h3>
            <div class="profile-content">
              <p><strong>序参量的温度依赖：</strong></p>
              
              <div class="profile-visualization">
                <div class="profile-description">
                  <h4>关键特征</h4>
                  <ul>
                    <li><strong>连续性：</strong>在 T_c 处序参量连续</li>
                    <li><strong>导数不连续：</strong>一阶导数在 T_c 处跳跃</li>
                    <li><strong>平方根行为：</strong><katex-element expression="\eta \propto |T-T_c|^{1/2}" :inline="true" /></li>
                    <li><strong>对称性破缺：</strong>T < T_c 时选择特定方向</li>
                  </ul>
                </div>
                
                <div class="mathematical-form">
                  <h4>数学表达式</h4>
                  <div class="formula-block">
                    <katex-element expression="\eta(T) = \begin{cases} 
                    0 & \text{if } T > T_c \\
                    \pm\sqrt{\frac{a_0(T_c-T)}{b}} & \text{if } T < T_c
                    \end{cases}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>临界指数的计算</h2>
      
      <div class="critical-exponents">
        <div class="exponent-definitions">
          <h3>📊 标准定义</h3>
          <div class="definitions-grid">
            <div class="exponent-card">
              <h4>α - 比热指数</h4>
              <div class="exponent-content">
                <div class="formula-block">
                  <katex-element expression="C \sim |T-T_c|^{-\alpha}" :inline="false" />
                </div>
                <p><strong>Landau预测：</strong> α = 0 (对数发散)</p>
                <p><strong>物理意义：</strong>热容量的奇异性强度</p>
              </div>
            </div>
            
            <div class="exponent-card">
              <h4>β - 序参量指数</h4>
              <div class="exponent-content">
                <div class="formula-block">
                  <katex-element expression="\eta \sim |T-T_c|^\beta" :inline="false" />
                </div>
                <p><strong>Landau预测：</strong> β = 1/2</p>
                <p><strong>物理意义：</strong>序参量增长的速度</p>
              </div>
            </div>
            
            <div class="exponent-card">
              <h4>γ - 磁化率指数</h4>
              <div class="exponent-content">
                <div class="formula-block">
                  <katex-element expression="\chi \sim |T-T_c|^{-\gamma}" :inline="false" />
                </div>
                <p><strong>Landau预测：</strong> γ = 1</p>
                <p><strong>物理意义：</strong>响应函数的发散程度</p>
              </div>
            </div>
            
            <div class="exponent-card">
              <h4>δ - 临界等温线指数</h4>
              <div class="exponent-content">
                <div class="formula-block">
                  <katex-element expression="h \sim \eta^\delta \quad (T = T_c)" :inline="false" />
                </div>
                <p><strong>Landau预测：</strong> δ = 3</p>
                <p><strong>物理意义：</strong>临界点处的非线性响应</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scaling-relations">
          <h3>⚖️ 标度关系</h3>
          <div class="relations-content">
            <p><strong>Rushbrooke关系：</strong></p>
            <div class="formula-block">
              <katex-element expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
            </div>
            
            <p><strong>Widom关系：</strong></p>
            <div class="formula-block">
              <katex-element expression="\gamma = \beta(\delta - 1)" :inline="false" />
            </div>
            
            <p><strong>Landau理论验证：</strong></p>
            <div class="verification-table">
              <div class="verification-row">
                <span>Rushbrooke:</span>
                <span>0 + 2(1/2) + 1 = 2 ✓</span>
              </div>
              <div class="verification-row">
                <span>Widom:</span>
                <span>1 = (1/2)(3-1) = 1 ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>具体计算实例</h2>
      
      <div class="calculation-examples">
        <div class="example-showcase">
          <div class="example-item">
            <h3>🧮 Ising模型的比热</h3>
            <div class="example-content">
              <p><strong>模型设定：</strong></p>
              <div class="model-setup">
                <div class="formula-block">
                  <katex-element expression="F = \frac{a_0(T-T_c)}{2}\eta^2 + \frac{b}{4}\eta^4" :inline="false" />
                </div>
                <p>其中 a₀ > 0, b > 0</p>
              </div>
              
              <p><strong>熵的计算：</strong></p>
              <div class="entropy-calculation">
                <div class="calculation-step">
                  <h4>第一步：求偏导数</h4>
                  <div class="formula-block">
                    <katex-element expression="S = -\frac{\partial F}{\partial T} = \frac{a_0}{2}\eta^2" :inline="false" />
                  </div>
                </div>
                
                <div class="calculation-step">
                  <h4>第二步：代入平衡值</h4>
                  <div class="phase-cases">
                    <div class="case">
                      <h5>T > T_c: η = 0</h5>
                      <div class="formula-block">
                        <katex-element expression="S = 0" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="case">
                      <h5>T < T_c: η² = a₀(T_c - T)/b</h5>
                      <div class="formula-block">
                        <katex-element expression="S = \frac{a_0^2(T_c-T)}{2b}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="calculation-step">
                  <h4>第三步：计算比热</h4>
                  <div class="formula-block">
                    <katex-element expression="C = T\frac{\partial S}{\partial T} = \begin{cases}
                    0 & T > T_c \\
                    -\frac{Ta_0^2}{2b} & T < T_c
                    \end{cases}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="physical-interpretation">
                <h4>物理解释</h4>
                <ul>
                  <li><strong>跳跃不连续：</strong>比热在T_c处有有限跳跃</li>
                  <li><strong>潜热缺失：</strong>二级相变无潜热</li>
                  <li><strong>序参量贡献：</strong>比热跳跃来自序参量的热涨落</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="example-item">
            <h3>🔄 超导体的磁化率</h3>
            <div class="example-content">
              <p><strong>Ginzburg-Landau模型：</strong></p>
              <div class="model-description">
                <div class="formula-block">
                  <katex-element expression="F = \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}|(\nabla - ie\mathbf{A})\psi|^2 + \frac{B^2}{2\mu_0}" :inline="false" />
                </div>
                <p>其中 ψ 是超导序参量，A 是矢量势</p>
              </div>
              
              <p><strong>均匀情况下的磁化率：</strong></p>
              <div class="susceptibility-analysis">
                <div class="analysis-step">
                  <h4>正常态 (T > T_c)</h4>
                  <div class="formula-block">
                    <katex-element expression="\chi_n = -\frac{1}{\mu_0} \quad \text{(抗磁性)}" :inline="false" />
                  </div>
                  <p>Pauli顺磁性被轨道抗磁性抵消</p>
                </div>
                
                <div class="analysis-step">
                  <h4>超导态 (T < T_c)</h4>
                  <div class="formula-block">
                    <katex-element expression="\chi_s = -\frac{1}{\mu_0} \quad \text{(完全抗磁性)}" :inline="false" />
                  </div>
                  <p>Meissner效应：完全排斥磁场</p>
                </div>
                
                <div class="analysis-step">
                  <h4>磁化率跳跃</h4>
                  <div class="formula-block">
                    <katex-element expression="\Delta\chi = \chi_s - \chi_n = -\frac{1}{\mu_0}\left(1 - \frac{\chi_n}{\chi_0}\right)" :inline="false" />
                  </div>
                  <p>其中 χ₀ 是真空磁化率</p>
                </div>
              </div>
              
              <div class="experimental-connection">
                <h4>实验观测</h4>
                <ul>
                  <li><strong>磁通排斥：</strong>超导体内部B = 0</li>
                  <li><strong>临界磁场：</strong>H_c ∝ (1 - T/T_c)</li>
                  <li><strong>比热跳跃：</strong>ΔC/C ≈ 1.43 (BCS理论)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="example-item">
            <h3>🌀 液晶的序参量</h3>
            <div class="example-content">
              <p><strong>向列相液晶模型：</strong></p>
              <div class="liquid-crystal-model">
                <div class="formula-block">
                  <katex-element expression="F = \frac{A(T-T^*)}{2}S^2 + \frac{B}{3}S^3 + \frac{C}{4}S^4" :inline="false" />
                </div>
                <p>其中 S 是向列序参量 (0 ≤ S ≤ 1)</p>
              </div>
              
              <p><strong>相变分析：</strong></p>
              <div class="phase-transition-analysis">
                <div class="transition-condition">
                  <h4>平衡条件</h4>
                  <div class="formula-block">
                    <katex-element expression="\frac{\partial F}{\partial S} = A(T-T^*)S + BS^2 + CS^3 = 0" :inline="false" />
                  </div>
                </div>
                
                <div class="solution-branches">
                  <h4>解的分支</h4>
                  <div class="branch">
                    <h5>各向同性相 (S = 0)</h5>
                    <p>高温时稳定</p>
                  </div>
                  
                  <div class="branch">
                    <h5>向列相 (S ≠ 0)</h5>
                    <div class="formula-block">
                      <katex-element expression="S = \frac{-B \pm \sqrt{B^2 - 4AC(T-T^*)}}{2C}" :inline="false" />
                    </div>
                    <p>低温时稳定</p>
                  </div>
                </div>
                
                <div class="transition-temperature">
                  <h4>相变温度</h4>
                  <div class="formula-block">
                    <katex-element expression="T_c = T^* + \frac{B^2}{4AC}" :inline="false" />
                  </div>
                  <p>一级相变：序参量不连续跳跃</p>
                </div>
              </div>
              
              <div class="optical-properties">
                <h4>光学性质</h4>
                <ul>
                  <li><strong>双折射：</strong>Δn ∝ S²</li>
                  <li><strong>介电各向异性：</strong>Δε ∝ S</li>
                  <li><strong>弹性常数：</strong>K ∝ S²</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验测量技术</h2>
      
      <div class="measurement-techniques">
        <div class="technique-categories">
          <div class="technique-category">
            <h3>🌡️ 热力学测量</h3>
            <div class="technique-list">
              <div class="technique-item">
                <h4>差示扫描量热法 (DSC)</h4>
                <div class="technique-details">
                  <p><strong>原理：</strong>测量样品与参考物的热流差</p>
                  <div class="formula-block">
                    <katex-element expression="\frac{dH}{dt} = C_p\frac{dT}{dt}" :inline="false" />
                  </div>
                  <p><strong>应用：</strong>精确测定相变温度和比热跳跃</p>
                  <div class="advantages">
                    <h5>优势</h5>
                    <ul>
                      <li>高精度温度控制 (±0.1K)</li>
                      <li>直接测量热容量</li>
                      <li>可检测微弱相变</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="technique-item">
                <h4>交流量热法</h4>
                <div class="technique-details">
                  <p><strong>原理：</strong>施加周期性热功率，测量温度响应</p>
                  <div class="formula-block">
                    <katex-element expression="C = \frac{P_0}{2\omega|\Delta T|}" :inline="false" />
                  </div>
                  <p><strong>特点：</strong>高分辨率，适合低温测量</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="technique-category">
            <h3>🧲 磁性测量</h3>
            <div class="technique-list">
              <div class="technique-item">
                <h4>SQUID磁强计</h4>
                <div class="technique-details">
                  <p><strong>原理：</strong>超导量子干涉器件</p>
                  <div class="formula-block">
                    <katex-element expression="\Phi = n\Phi_0 + \frac{2\pi}{\Phi_0}\int \mathbf{A} \cdot d\mathbf{l}" :inline="false" />
                  </div>
                  <p><strong>灵敏度：</strong>10⁻¹⁵ Wb (单磁通量子级别)</p>
                  <div class="applications">
                    <h5>应用范围</h5>
                    <ul>
                      <li>磁化率精密测量</li>
                      <li>磁相变研究</li>
                      <li>超导性质表征</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="technique-item">
                <h4>振动样品磁强计 (VSM)</h4>
                <div class="technique-details">
                  <p><strong>原理：</strong>样品振动在检测线圈中感应电动势</p>
                  <div class="formula-block">
                    <katex-element expression="\varepsilon = -\frac{d\Phi}{dt} = -\mu_0 M A \omega \cos(\omega t)" :inline="false" />
                  </div>
                  <p><strong>优势：</strong>宽温度范围，快速测量</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="technique-category">
            <h3>🔬 结构测量</h3>
            <div class="technique-list">
              <div class="technique-item">
                <h4>X射线衍射</h4>
                <div class="technique-details">
                  <p><strong>Bragg定律：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="2d\sin\theta = n\lambda" :inline="false" />
                  </div>
                  <p><strong>序参量信息：</strong>超结构峰强度 ∝ η²</p>
                  <div class="structural-info">
                    <h5>获得信息</h5>
                    <ul>
                      <li>晶格常数变化</li>
                      <li>对称性破缺</li>
                      <li>序参量大小</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="technique-item">
                <h4>中子散射</h4>
                <div class="technique-details">
                  <p><strong>散射截面：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{d\sigma}{d\Omega} = |f(\mathbf{q})|^2 S(\mathbf{q},\omega)" :inline="false" />
                  </div>
                  <p><strong>优势：</strong>磁结构，轻元素敏感</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论与实验的比较</h2>
      
      <div class="theory-experiment-comparison">
        <div class="comparison-framework">
          <div class="comparison-table">
            <h3>📊 临界指数比较</h3>
            <div class="table-container">
              <table class="comparison-data">
                <thead>
                  <tr>
                    <th>物理量</th>
                    <th>Landau理论</th>
                    <th>3D Ising</th>
                    <th>实验值</th>
                    <th>偏差原因</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>比热指数 α</td>
                    <td>0 (对数)</td>
                    <td>0.110</td>
                    <td>0.11±0.01</td>
                    <td>涨落效应</td>
                  </tr>
                  <tr>
                    <td>序参量指数 β</td>
                    <td>0.5</td>
                    <td>0.326</td>
                    <td>0.33±0.01</td>
                    <td>临界涨落</td>
                  </tr>
                  <tr>
                    <td>磁化率指数 γ</td>
                    <td>1.0</td>
                    <td>1.237</td>
                    <td>1.24±0.02</td>
                    <td>关联长度发散</td>
                  </tr>
                  <tr>
                    <td>临界等温线 δ</td>
                    <td>3.0</td>
                    <td>4.789</td>
                    <td>4.8±0.1</td>
                    <td>非线性涨落</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="deviation-analysis">
            <h3>🔍 偏差分析</h3>
            <div class="analysis-content">
              <div class="deviation-source">
                <h4>主要偏差来源</h4>
                <div class="source-list">
                  <div class="source-item">
                    <h5>1. 临界涨落</h5>
                    <p>Landau理论忽略了序参量的空间涨落，在临界点附近这些涨落变得重要</p>
                    <div class="formula-block">
                      <katex-element expression="\xi \sim |T-T_c|^{-\nu}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="source-item">
                    <h5>2. 维度效应</h5>
                    <p>Landau理论在高维度(d > 4)准确，低维度需要重整化群修正</p>
                    <div class="formula-block">
                      <katex-element expression="d_c = 4 \quad \text{(上临界维度)}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="source-item">
                    <h5>3. 各向异性</h5>
                    <p>实际材料的各向异性导致有效维度降低</p>
                  </div>
                </div>
              </div>
              
              <div class="correction-methods">
                <h4>修正方法</h4>
                <div class="method-list">
                  <div class="method-item">
                    <h5>重整化群理论</h5>
                    <p>系统地处理临界涨落效应</p>
                  </div>
                  
                  <div class="method-item">
                    <h5>ε展开</h5>
                    <p>在 ε = 4 - d 的小参数展开</p>
                  </div>
                  
                  <div class="method-item">
                    <h5>蒙特卡罗模拟</h5>
                    <p>数值计算精确的临界指数</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>应用实例与案例研究</h2>
      
      <div class="application-cases">
        <div class="case-studies">
          <div class="case-study">
            <h3>🔋 锂离子电池中的相变</h3>
            <div class="case-content">
              <p><strong>背景：</strong>LiFePO₄正极材料的相分离</p>
              
              <div class="phase-diagram">
                <h4>相图分析</h4>
                <div class="formula-block">
                  <katex-element expression="F = f_0(x,T) + \frac{\kappa}{2}(\nabla x)^2" :inline="false" />
                </div>
                <p>其中 x 是Li浓度，κ 是梯度能系数</p>
              </div>
              
              <div class="experimental-observations">
                <h4>实验观测</h4>
                <ul>
                  <li><strong>相分离：</strong>充放电过程中形成Li-rich和Li-poor相</li>
                  <li><strong>界面动力学：</strong>相界面移动控制反应速率</li>
                  <li><strong>尺寸效应：</strong>纳米颗粒抑制相分离</li>
                </ul>
              </div>
              
              <div class="practical-implications">
                <h4>实际意义</h4>
                <ul>
                  <li>优化电池性能</li>
                  <li>理解容量衰减机制</li>
                  <li>设计新型电极材料</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="case-study">
            <h3>🌡️ 形状记忆合金</h3>
            <div class="case-content">
              <p><strong>材料：</strong>NiTi合金的马氏体相变</p>
              
              <div class="transformation-mechanism">
                <h4>相变机制</h4>
                <div class="formula-block">
                  <katex-element expression="F = \frac{1}{2}A(T-T_0)e^2 + \frac{1}{4}Be^4 + \frac{1}{6}Ce^6" :inline="false" />
                </div>
                <p>其中 e 是应变序参量</p>
              </div>
              
              <div class="shape-memory-effect">
                <h4>形状记忆效应</h4>
                <div class="effect-mechanism">
                  <div class="step">
                    <h5>1. 低温变形</h5>
                    <p>马氏体相中的孪晶重新取向</p>
                  </div>
                  
                  <div class="step">
                    <h5>2. 加热恢复</h5>
                    <p>马氏体→奥氏体相变恢复原形</p>
                  </div>
                  
                  <div class="step">
                    <h5>3. 循环性能</h5>
                    <p>可逆相变实现重复使用</p>
                  </div>
                </div>
              </div>
              
              <div class="applications">
                <h4>工程应用</h4>
                <ul>
                  <li>医疗器械 (血管支架)</li>
                  <li>航空航天 (自适应结构)</li>
                  <li>机器人 (人工肌肉)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="case-study">
            <h3>🔬 量子相变材料</h3>
            <div class="case-content">
              <p><strong>系统：</strong>重费米子化合物中的量子临界点</p>
              
              <div class="quantum-criticality">
                <h4>量子临界性</h4>
                <div class="formula-block">
                  <katex-element expression="F = r\phi^2 + u\phi^4 + c(\nabla\phi)^2 + \frac{1}{2\chi}(\nabla \times \mathbf{A})^2" :inline="false" />
                </div>
                <p>其中 φ 是反铁磁序参量，A 是规范场</p>
              </div>
              
              <div class="non-fermi-liquid">
                <h4>非费米液体行为</h4>
                <div class="behavior-list">
                  <div class="behavior-item">
                    <h5>电阻率</h5>
                    <div class="formula-block">
                      <katex-element expression="\rho(T) = \rho_0 + AT^n" :inline="false" />
                    </div>
                    <p>其中 n < 2 (偏离T²行为)</p>
                  </div>
                  
                  <div class="behavior-item">
                    <h5>比热</h5>
                    <div class="formula-block">
                      <katex-element expression="C/T = \gamma_0 - b\sqrt{T}" :inline="false" />
                    </div>
                    <p>对数修正或幂律行为</p>
                  </div>
                </div>
              </div>
              
              <div class="experimental-systems">
                <h4>典型系统</h4>
                <ul>
                  <li>CeCu₆₋ₓAuₓ (重费米子)</li>
                  <li>Sr₃Ru₂O₇ (量子临界点)</li>
                  <li>YbRh₂Si₂ (反铁磁量子相变)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>总结与展望</h2>
      
      <div class="summary-outlook">
        <div class="key-insights">
          <h3>🎯 关键洞察</h3>
          <div class="insights-list">
            <div class="insight-item">
              <h4>1. 普适性原理</h4>
              <p>Landau理论揭示了相变的普适性：不同物理系统在临界点附近表现出相似的行为，这种普适性源于长程涨落的主导作用。</p>
            </div>
            
            <div class="insight-item">
              <h4>2. 可观测量的关联</h4>
              <p>各种热力学量通过自由能的导数相互关联，形成了完整的理论框架，使我们能够从少数几个参数预测所有可观测量。</p>
            </div>
            
            <div class="insight-item">
              <h4>3. 理论局限性</h4>
              <p>Landau理论在高维度准确，但在低维度需要涨落修正。这促进了重整化群理论等更精确方法的发展。</p>
            </div>
          </div>
        </div>
        
        <div class="future-directions">
          <h3>🚀 未来方向</h3>
          <div class="directions-grid">
            <div class="direction-card">
              <h4>机器学习应用</h4>
              <p>利用深度学习识别相变，发现新的序参量，加速材料设计</p>
            </div>
            
            <div class="direction-card">
              <h4>非平衡相变</h4>
              <p>扩展到驱动系统，研究动态相变和临界现象</p>
            </div>
            
            <div class="direction-card">
              <h4>拓扑相变</h4>
              <p>结合拓扑序，研究拓扑相变的可观测量</p>
            </div>
            
            <div class="direction-card">
              <h4>量子材料</h4>
              <p>在强关联电子系统中寻找新奇的量子相变</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
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

.relation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.relation-card, .exponent-card, .example-item, .aspect-card {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.relation-card h3, .exponent-card h4, .example-item h3, .aspect-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.behavior-analysis, .critical-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.phase-behavior, .behavior-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #3182ce;
}

.phase-behavior h4, .behavior-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.definitions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.exponent-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.exponent-card h4 {
  color: white;
  font-size: 1.1rem;
}

.verification-table {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.verification-row {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.calculation-steps {
  margin-top: 1rem;
}

.step {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 3px solid #10b981;
}

.step h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.comparison-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.success-cases {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.limitation-cases {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.success-cases h3, .limitation-cases h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.success-list, .limitation-list {
  display: grid;
  gap: 1rem;
}

.success-item, .limitation-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.success-item h4, .limitation-item h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.comparison-table {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 0.5rem;
}

.table-header, .table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0.5rem;
  text-align: center;
}

.table-header {
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

.table-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.understanding-aspects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .relation-cards, .definitions-grid, .comparison-framework, .understanding-aspects {
    grid-template-columns: 1fr;
  }
  
  .behavior-analysis, .critical-behavior {
    grid-template-columns: 1fr;
  }
}
</style>