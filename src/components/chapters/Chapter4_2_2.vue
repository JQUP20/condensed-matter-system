<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.2.2 费米液体的热力学稳定和自由能</h1>
      <p class="chapter-subtitle">从微观相互作用到宏观热力学性质</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          费米液体理论的一个重要成就是建立了微观相互作用与宏观热力学性质之间的定量联系。
          通过Landau能量泛函，我们可以系统地计算各种热力学量，并分析系统的稳定性条件。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🌡️ 热力学框架</h3>
            <p>基于准粒子分布的热力学势和状态方程</p>
          </div>
          <div class="concept-card">
            <h3>⚖️ 稳定性分析</h3>
            <p>Pomeranchuk稳定性条件和相变判据</p>
          </div>
          <div class="concept-card">
            <h3>🔄 响应函数</h3>
            <p>热力学响应函数与Landau参数的关系</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 自由能的构造 -->
    <section class="free-energy-construction">
      <h2>🏗️ 自由能的构造</h2>
      
      <div class="construction-content">
        <div class="basic-formulation">
          <h3>基本自由能表达式</h3>
          <div class="formulation-box">
            <div class="formula-section">
              <h4>总自由能</h4>
              <div class="formula">
                <p>F = F₀ + ∫ ε(p)δn(p)d³p + ½∫∫ f(p,p')δn(p)δn(p')d³pd³p' - TS</p>
              </div>
            </div>
            
            <div class="formula-section">
              <h4>熵贡献</h4>
              <div class="formula">
                <p>S = -kᵦ ∫ [n(p)ln n(p) + (1-n(p))ln(1-n(p))]d³p</p>
              </div>
            </div>
          </div>
          
          <div class="terms-explanation">
            <h4>各项物理意义：</h4>
            <div class="terms-grid">
              <div class="term-card">
                <h5>F₀</h5>
                <p>基态自由能（T=0时的基态能量）</p>
              </div>
              <div class="term-card">
                <h5>动能项</h5>
                <p>准粒子分布偏离对动能的贡献</p>
              </div>
              <div class="term-card">
                <h5>相互作用项</h5>
                <p>准粒子间相互作用的能量贡献</p>
              </div>
              <div class="term-card">
                <h5>熵项</h5>
                <p>有限温度下的统计熵贡献</p>
              </div>
            </div>
          </div>
        </div>

        <div class="equilibrium-distribution">
          <h3>平衡分布的确定</h3>
          <div class="equilibrium-content">
            <div class="variational-condition">
              <h4>变分条件</h4>
              <p>平衡态通过自由能最小化确定：</p>
              <div class="condition-formula">
                <p>δF/δn(p) = 0</p>
              </div>
            </div>
            
            <div class="fermi-dirac">
              <h4>费米-狄拉克分布</h4>
              <p>这导致修正的费米-狄拉克分布：</p>
              <div class="distribution-formula">
                <p>n(p) = 1/(e^(ε*(p)/kᵦT) + 1)</p>
                <p>其中 ε*(p) = ε(p) + ∫ f(p,p')δn(p')d³p' - μ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 低温展开 -->
    <section class="low-temperature-expansion">
      <h2>❄️ 低温展开</h2>
      
      <div class="expansion-content">
        <div class="sommerfeld-expansion">
          <h3>Sommerfeld展开</h3>
          <p>在低温极限下，热力学量可以按温度的幂次展开：</p>
          
          <div class="expansion-formulas">
            <div class="expansion-card">
              <h4>🔥 内能</h4>
              <div class="formula-content">
                <p>U = U₀ + (π²/6)(kᵦT)²N(0)(1 + F₁ˢ) + O(T⁴)</p>
                <div class="explanation">
                  <ul>
                    <li>U₀：基态能量</li>
                    <li>N(0)：费米面态密度</li>
                    <li>F₁ˢ：自旋对称Landau参数</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="expansion-card">
              <h4>🌡️ 比热</h4>
              <div class="formula-content">
                <p>C = γT，其中 γ = (π²/3)k²ᵦN(0)(1 + F₁ˢ)</p>
                <div class="explanation">
                  <ul>
                    <li>线性温度依赖</li>
                    <li>相互作用增强因子</li>
                    <li>实验可测量的量</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="expansion-card">
              <h4>📊 熵</h4>
              <div class="formula-content">
                <p>S = γT + O(T³)</p>
                <div class="explanation">
                  <ul>
                    <li>低温下的线性行为</li>
                    <li>与比热系数的关系</li>
                    <li>热力学第三定律</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="temperature-corrections">
          <h3>高阶温度修正</h3>
          <div class="corrections-content">
            <div class="correction-analysis">
              <h4>T³修正项</h4>
              <p>来源于费米面曲率和相互作用的非线性效应：</p>
              <div class="correction-formula">
                <p>ΔC/T = AT² + BT⁴ + ...</p>
              </div>
            </div>
            
            <div class="physical-origins">
              <h4>物理起源</h4>
              <div class="origins-grid">
                <div class="origin-card">
                  <h5>费米面几何</h5>
                  <ul>
                    <li>费米面曲率效应</li>
                    <li>维度相关的修正</li>
                    <li>各向异性的影响</li>
                  </ul>
                </div>
                <div class="origin-card">
                  <h5>相互作用非线性</h5>
                  <ul>
                    <li>高阶Landau参数</li>
                    <li>多体关联效应</li>
                    <li>量子涨落贡献</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热力学响应函数 -->
    <section class="thermodynamic-responses">
      <h2>📈 热力学响应函数</h2>
      
      <div class="responses-content">
        <div class="compressibility">
          <h3>压缩性和体模量</h3>
          <div class="compressibility-analysis">
            <div class="formula-derivation">
              <h4>等温压缩性</h4>
              <div class="derivation-content">
                <p>κₜ = -(1/V)(∂V/∂P)ₜ = κ₀/(1 + F₀ᵃ)</p>
                <div class="derivation-steps">
                  <div class="step">
                    <h5>步骤1：压力与化学势</h5>
                    <p>P = n²(∂ε/∂n)，其中n是粒子密度</p>
                  </div>
                  <div class="step">
                    <h5>步骤2：Landau参数修正</h5>
                    <p>相互作用通过F₀ᵃ参数修正压缩性</p>
                  </div>
                  <div class="step">
                    <h5>步骤3：稳定性条件</h5>
                    <p>κₜ > 0 要求 F₀ᵃ > -1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="physical-interpretation">
              <h4>物理解释</h4>
              <div class="interpretation-grid">
                <div class="interp-card">
                  <h5>F₀ᵃ > 0</h5>
                  <p>排斥相互作用，增加压缩性</p>
                </div>
                <div class="interp-card">
                  <h5>F₀ᵃ < 0</h5>
                  <p>吸引相互作用，减少压缩性</p>
                </div>
                <div class="interp-card">
                  <h5>F₀ᵃ → -1</h5>
                  <p>压缩不稳定性的临界点</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="magnetic-susceptibility">
          <h3>磁化率和自旋响应</h3>
          <div class="susceptibility-analysis">
            <div class="pauli-susceptibility">
              <h4>Pauli磁化率</h4>
              <div class="pauli-content">
                <p>χ = χ₀/(1 + F₀ᵃ)</p>
                <div class="pauli-explanation">
                  <ul>
                    <li>χ₀ = μ²ᵦN(0)：自由电子磁化率</li>
                    <li>F₀ᵃ：反对称Landau参数</li>
                    <li>Stoner增强因子：1/(1 + F₀ᵃ)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="stoner-criterion">
              <h4>Stoner判据</h4>
              <div class="stoner-content">
                <div class="criterion-formula">
                  <p>铁磁不稳定性条件：F₀ᵃ ≥ -1</p>
                </div>
                <div class="criterion-analysis">
                  <div class="analysis-grid">
                    <div class="analysis-card">
                      <h5>稳定顺磁态</h5>
                      <p>F₀ᵃ > -1</p>
                      <ul>
                        <li>有限磁化率</li>
                        <li>顺磁响应</li>
                        <li>热力学稳定</li>
                      </ul>
                    </div>
                    <div class="analysis-card">
                      <h5>铁磁临界点</h5>
                      <p>F₀ᵃ = -1</p>
                      <ul>
                        <li>磁化率发散</li>
                        <li>临界涨落</li>
                        <li>相变点</li>
                      </ul>
                    </div>
                    <div class="analysis-card">
                      <h5>铁磁不稳定</h5>
                      <p>F₀ᵃ < -1</p>
                      <ul>
                        <li>自发磁化</li>
                        <li>铁磁基态</li>
                        <li>对称性破缺</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="thermal-expansion">
          <h3>热膨胀和Grüneisen参数</h3>
          <div class="expansion-analysis">
            <div class="thermal-expansion-coeff">
              <h4>热膨胀系数</h4>
              <div class="expansion-formula">
                <p>α = (1/V)(∂V/∂T)ₚ = (γ/3Bₛ) × (∂ln N(0)/∂ln V)</p>
              </div>
              <div class="expansion-explanation">
                <ul>
                  <li>γ：比热系数</li>
                  <li>Bₛ：绝热体模量</li>
                  <li>N(0)：费米面态密度</li>
                </ul>
              </div>
            </div>
            
            <div class="gruneisen-parameter">
              <h4>Grüneisen参数</h4>
              <div class="gruneisen-content">
                <p>Γ = (3BₛV α)/(C) = -(∂ln N(0)/∂ln V)</p>
                <div class="gruneisen-significance">
                  <h5>物理意义：</h5>
                  <ul>
                    <li>描述热膨胀与比热的关系</li>
                    <li>反映费米面对体积变化的敏感性</li>
                    <li>连接电子性质与晶格性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 稳定性分析 -->
    <section class="stability-analysis">
      <h2>⚖️ 稳定性分析</h2>
      
      <div class="stability-content">
        <div class="pomeranchuk-conditions">
          <h3>Pomeranchuk稳定性条件</h3>
          <div class="conditions-content">
            <div class="general-conditions">
              <h4>一般稳定性条件</h4>
              <p>费米液体的稳定性要求自由能的二阶变分为正定：</p>
              <div class="condition-formula">
                <p>δ²F > 0 对所有允许的δn(p)变化</p>
              </div>
            </div>
            
            <div class="specific-conditions">
              <h4>具体稳定性判据</h4>
              <div class="conditions-grid">
                <div class="condition-card">
                  <h5>🔸 s波稳定性</h5>
                  <div class="condition-content">
                    <p>F₀ˢ > -1 和 F₀ᵃ > -1</p>
                    <ul>
                      <li>防止密度不稳定性</li>
                      <li>确保正压缩性</li>
                      <li>避免相分离</li>
                    </ul>
                  </div>
                </div>
                
                <div class="condition-card">
                  <h5>🔸 p波稳定性</h5>
                  <div class="condition-content">
                    <p>F₁ˢ > -1 和 F₁ᵃ > -1</p>
                    <ul>
                      <li>防止p波配对不稳定性</li>
                      <li>确保有效质量有限</li>
                      <li>避免超流转变</li>
                    </ul>
                  </div>
                </div>
                
                <div class="condition-card">
                  <h5>🔸 高阶稳定性</h5>
                  <div class="condition-content">
                    <p>Fₗˢ,ᵃ > -1 对所有 l ≥ 0</p>
                    <ul>
                      <li>防止高阶多极不稳定性</li>
                      <li>确保费米面稳定</li>
                      <li>避免向列相等奇异相</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="instability-mechanisms">
          <h3>不稳定性机制</h3>
          <div class="mechanisms-content">
            <div class="instability-types">
              <h4>主要不稳定性类型</h4>
              <div class="types-grid">
                <div class="type-card">
                  <h5>🔥 铁磁不稳定性</h5>
                  <div class="type-content">
                    <p><strong>条件：</strong>F₀ᵃ ≤ -1</p>
                    <p><strong>结果：</strong>自发磁化，自旋极化</p>
                    <div class="mechanism-details">
                      <h6>物理机制：</h6>
                      <ul>
                        <li>交换相互作用占主导</li>
                        <li>Hund规则的宏观体现</li>
                        <li>巡游电子铁磁性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="type-card">
                  <h5>🌊 密度波不稳定性</h5>
                  <div class="type-content">
                    <p><strong>条件：</strong>特定q处的响应函数发散</p>
                    <p><strong>结果：</strong>电荷/自旋密度波形成</p>
                    <div class="mechanism-details">
                      <h6>物理机制：</h6>
                      <ul>
                        <li>费米面嵌套效应</li>
                        <li>Peierls不稳定性</li>
                        <li>维度降低的影响</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="type-card">
                  <h5>🔄 向列相不稳定性</h5>
                  <div class="type-content">
                    <p><strong>条件：</strong>F₂ᵃ ≤ -1</p>
                    <p><strong>结果：</strong>费米面变形，旋转对称性破缺</p>
                    <div class="mechanism-details">
                      <h6>物理机制：</h6>
                      <ul>
                        <li>轨道序的形成</li>
                        <li>电子向列相</li>
                        <li>结构相变的前驱</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相变和临界现象 -->
    <section class="phase-transitions">
      <h2>🔄 相变和临界现象</h2>
      
      <div class="transitions-content">
        <div class="quantum-phase-transitions">
          <h3>量子相变</h3>
          <div class="qpt-content">
            <div class="qpt-characteristics">
              <h4>量子相变的特征</h4>
              <div class="characteristics-grid">
                <div class="char-card">
                  <h5>🌡️ 零温相变</h5>
                  <ul>
                    <li>由量子涨落驱动</li>
                    <li>调节参数：压力、磁场、掺杂</li>
                    <li>临界点处的奇异行为</li>
                  </ul>
                </div>
                <div class="char-card">
                  <h5>📊 临界标度</h5>
                  <ul>
                    <li>关联长度发散</li>
                    <li>动力学临界指数</li>
                    <li>有限尺寸标度</li>
                  </ul>
                </div>
                <div class="char-card">
                  <h5>🔬 实验观测</h5>
                  <ul>
                    <li>比热异常</li>
                    <li>电阻率的非费米液体行为</li>
                    <li>磁化率的临界行为</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="qcp-physics">
              <h4>量子临界点物理</h4>
              <div class="qcp-analysis">
                <div class="qcp-card">
                  <h5>临界涨落</h5>
                  <div class="qcp-content">
                    <p>在量子临界点附近，系统表现出：</p>
                    <ul>
                      <li>时空标度不变性</li>
                      <li>ω/T标度行为</li>
                      <li>边际费米液体性质</li>
                    </ul>
                  </div>
                </div>
                
                <div class="qcp-card">
                  <h5>非费米液体行为</h5>
                  <div class="qcp-content">
                    <p>偏离标准费米液体预测：</p>
                    <ul>
                      <li>C/T ∝ -ln T</li>
                      <li>ρ ∝ T</li>
                      <li>χ ∝ T^(-α)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="finite-temperature-crossovers">
          <h3>有限温度交叉行为</h3>
          <div class="crossover-content">
            <div class="temperature-scales">
              <h4>特征温度标度</h4>
              <div class="scales-grid">
                <div class="scale-card">
                  <h5>费米温度</h5>
                  <p>TF = εF/kB ≈ 10⁴-10⁵ K</p>
                  <p>量子简并的特征温度</p>
                </div>
                <div class="scale-card">
                  <h5>相干温度</h5>
                  <p>T* ∝ (εF/N(0)U²)</p>
                  <p>准粒子相干性建立的温度</p>
                </div>
                <div class="scale-card">
                  <h5>临界温度</h5>
                  <p>Tc ∝ εF exp(-1/N(0)U)</p>
                  <p>相变或配对的特征温度</p>
                </div>
              </div>
            </div>
            
            <div class="crossover-behavior">
              <h4>交叉行为的描述</h4>
              <div class="behavior-analysis">
                <div class="regime-card">
                  <h5>高温区域 (T >> T*)</h5>
                  <div class="regime-content">
                    <ul>
                      <li>非相干散射占主导</li>
                      <li>经典统计行为</li>
                      <li>输运性质的高温渐近</li>
                    </ul>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>中间温度区域 (T ~ T*)</h5>
                  <div class="regime-content">
                    <ul>
                      <li>准粒子图像逐渐建立</li>
                      <li>交叉标度行为</li>
                      <li>非费米液体特征</li>
                    </ul>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>低温区域 (T << T*)</h5>
                  <div class="regime-content">
                    <ul>
                      <li>完全的费米液体行为</li>
                      <li>准粒子寿命长</li>
                      <li>Landau理论适用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="experimental-verification">
      <h2>🧪 实验验证</h2>
      
      <div class="experimental-content">
        <div class="measurement-techniques">
          <h3>测量技术</h3>
          <div class="techniques-grid">
            <div class="technique-card">
              <h4>🌡️ 热力学测量</h4>
              <div class="technique-content">
                <h5>比热测量</h5>
                <ul>
                  <li>绝热去磁制冷</li>
                  <li>交流量热法</li>
                  <li>脉冲加热法</li>
                </ul>
                <h5>获得信息</h5>
                <ul>
                  <li>比热系数γ</li>
                  <li>Landau参数F₁ˢ</li>
                  <li>有效质量增强</li>
                </ul>
              </div>
            </div>
            
            <div class="technique-card">
              <h4>⚡ 磁性测量</h4>
              <div class="technique-content">
                <h5>磁化率测量</h5>
                <ul>
                  <li>SQUID磁强计</li>
                  <li>交流磁化率</li>
                  <li>高场磁化</li>
                </ul>
                <h5>获得信息</h5>
                <ul>
                  <li>Pauli磁化率</li>
                  <li>Stoner增强因子</li>
                  <li>磁性不稳定性</li>
                </ul>
              </div>
            </div>
            
            <div class="technique-card">
              <h4>🔊 输运测量</h4>
              <div class="technique-content">
                <h5>电阻率测量</h5>
                <ul>
                  <li>四探针法</li>
                  <li>范德堡法</li>
                  <li>微波电导率</li>
                </ul>
                <h5>获得信息</h5>
                <ul>
                  <li>准粒子散射率</li>
                  <li>费米液体参数</li>
                  <li>相干温度</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="case-studies">
          <h3>典型实验案例</h3>
          <div class="cases-content">
            <div class="case-card">
              <h4>🧊 液态³He</h4>
              <div class="case-content">
                <div class="case-data">
                  <h5>实验数据：</h5>
                  <ul>
                    <li>γ = 2.8 mJ/mol·K²（增强因子~3）</li>
                    <li>χ = 2.2×10⁻⁴ emu/mol（Stoner增强）</li>
                    <li>完美的T²电阻率</li>
                  </ul>
                </div>
                <div class="case-analysis">
                  <h5>理论分析：</h5>
                  <ul>
                    <li>F₁ˢ ≈ +6（强p波相互作用）</li>
                    <li>F₀ᵃ ≈ -0.75（接近铁磁不稳定）</li>
                    <li>费米液体理论的完美验证</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="case-card">
              <h4>⚡ 重费米子系统</h4>
              <div class="case-content">
                <div class="case-data">
                  <h5>CeCu₆实验：</h5>
                  <ul>
                    <li>γ ≈ 1.6 J/mol·K²（巨大增强）</li>
                    <li>m*/m ≈ 200（重准粒子）</li>
                    <li>Wilson比偏离</li>
                  </ul>
                </div>
                <div class="case-analysis">
                  <h5>物理机制：</h5>
                  <ul>
                    <li>Kondo效应的多体版本</li>
                    <li>f电子的局域-巡游杂化</li>
                    <li>量子临界点附近的行为</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="case-card">
              <h4>🔬 二维电子系统</h4>
              <div class="case-content">
                <div class="case-data">
                  <h5>GaAs量子阱：</h5>
                  <ul>
                    <li>可调节的载流子密度</li>
                    <li>清洁的二维系统</li>
                    <li>强磁场下的分数量子霍尔效应</li>
                  </ul>
                </div>
                <div class="case-analysis">
                  <h5>理论挑战：</h5>
                  <ul>
                    <li>维度效应的影响</li>
                    <li>库仑相互作用的长程性</li>
                    <li>Wigner晶体转变</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>🚀 现代发展</h2>
      
      <div class="developments-content">
        <div class="theoretical-advances">
          <h3>理论进展</h3>
          <div class="advances-grid">
            <div class="advance-card">
              <h4>🌐 非费米液体理论</h4>
              <div class="advance-content">
                <ul>
                  <li>边际费米液体理论</li>
                  <li>全息对偶方法</li>
                  <li>奇异金属的理论描述</li>
                </ul>
              </div>
            </div>
            
            <div class="advance-card">
              <h4>🔄 动力学平均场理论</h4>
              <div class="advance-content">
                <ul>
                  <li>DMFT方法的发展</li>
                  <li>强关联系统的处理</li>
                  <li>Mott转变的描述</li>
                </ul>
              </div>
            </div>
            
            <div class="advance-card">
              <h4>🎯 拓扑费米液体</h4>
              <div class="advance-content">
                <ul>
                  <li>拓扑不变量的影响</li>
                  <li>表面态的费米液体性质</li>
                  <li>拓扑相变的热力学</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="computational-methods">
          <h3>计算方法</h3>
          <div class="methods-grid">
            <div class="method-card">
              <h4>💻 量子蒙特卡罗</h4>
              <div class="method-content">
                <ul>
                  <li>连续时间QMC</li>
                  <li>符号问题的缓解</li>
                  <li>有限温度性质的精确计算</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <h4>🔢 密度泛函理论</h4>
              <div class="method-content">
                <ul>
                  <li>DFT+DMFT结合方法</li>
                  <li>从第一性原理计算Landau参数</li>
                  <li>材料设计的指导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary">
      <h2>📋 本节总结</h2>
      
      <div class="summary-content">
        <div class="key-achievements">
          <h3>🎯 主要成就</h3>
          <div class="achievements-grid">
            <div class="achievement-card">
              <h4>理论框架</h4>
              <ul>
                <li>建立了微观相互作用与宏观热力学的定量联系</li>
                <li>提供了系统稳定性分析的完整方法</li>
                <li>预测了各种相变和临界现象</li>
              </ul>
            </div>
            
            <div class="achievement-card">
              <h4>实验验证</h4>
              <ul>
                <li>液态³He中的完美验证</li>
                <li>重费米子系统的成功描述</li>
                <li>量子临界现象的理解</li>
              </ul>
            </div>
            
            <div class="achievement-card">
              <h4>应用拓展</h4>
              <ul>
                <li>新材料性质的预测</li>
                <li>量子相变的分类</li>
                <li>非费米液体行为的理解</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>🔮 未来方向</h3>
          <div class="directions-content">
            <p>
              费米液体的热力学理论将继续在以下方面发挥重要作用：
            </p>
            <div class="directions-list">
              <div class="direction-item">
                <h4>🌟 新奇量子相</h4>
                <p>拓扑费米液体、分数化费米液体等新奇相态的热力学性质研究</p>
              </div>
              <div class="direction-item">
                <h4>🔬 强关联系统</h4>
                <p>高温超导体、重费米子系统中非费米液体行为的深入理解</p>
              </div>
              <div class="direction-item">
                <h4>💻 计算物理</h4>
                <p>机器学习与量子多体计算的结合，预测新材料的费米液体性质</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.introduction {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.intro-content p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: justify;
}

.key-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.concept-card p {
  color: #4a5568;
  margin: 0;
}

.free-energy-construction {
  background: #f0fff4;
}

.construction-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.basic-formulation {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.basic-formulation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.formulation-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.formula-section {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.formula-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.formula {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border-left: 4px solid #667eea;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.formula p {
  margin: 0;
  color: #2d3748;
}

.terms-explanation h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.term-card {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.term-card h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.term-card p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

.equilibrium-distribution {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.equilibrium-distribution h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.equilibrium-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.variational-condition,
.fermi-dirac {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.variational-condition h4,
.fermi-dirac h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.variational-condition p,
.fermi-dirac p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.condition-formula,
.distribution-formula {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.condition-formula p,
.distribution-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #2d3748;
  font-weight: bold;
}

.low-temperature-expansion {
  background: #f0f9ff;
}

.expansion-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sommerfeld-expansion {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.sommerfeld-expansion h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.sommerfeld-expansion > p {
  color: #4a5568;
  margin-bottom: 2rem;
}

.expansion-formulas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.expansion-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.expansion-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.formula-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.explanation ul {
  list-style: none;
  padding: 0;
}

.explanation li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.explanation li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.temperature-corrections {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.temperature-corrections h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.corrections-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.correction-analysis {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.correction-analysis h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.correction-analysis p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.correction-formula {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.correction-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.physical-origins h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.origins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.origin-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.origin-card h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.origin-card ul {
  list-style: none;
  padding: 0;
}

.origin-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.origin-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.thermodynamic-responses {
  background: #fffaf0;
}

.responses-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.compressibility,
.magnetic-susceptibility,
.thermal-expansion {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.compressibility h3,
.magnetic-susceptibility h3,
.thermal-expansion h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.compressibility-analysis,
.susceptibility-analysis,
.expansion-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.formula-derivation,
.pauli-susceptibility,
.thermal-expansion-coeff {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.formula-derivation h4,
.pauli-susceptibility h4,
.thermal-expansion-coeff h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.derivation-content p,
.pauli-content p,
.expansion-formula p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #667eea;
}

.step h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.step p {
  color: #4a5568;
  margin: 0;
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.pauli-explanation ul,
.expansion-explanation ul {
  list-style: none;
  padding: 0;
}

.pauli-explanation li,
.expansion-explanation li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.pauli-explanation li::before,
.expansion-explanation li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.physical-interpretation,
.stoner-criterion,
.gruneisen-parameter {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-interpretation h4,
.stoner-criterion h4,
.gruneisen-parameter h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interpretation-grid,
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.interp-card,
.analysis-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.interp-card h5,
.analysis-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.interp-card p,
.analysis-card p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

.stoner-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.criterion-formula {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.criterion-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.criterion-analysis {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.analysis-card {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.analysis-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.analysis-card p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.analysis-card ul {
  list-style: none;
  padding: 0;
}

.analysis-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.analysis-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.gruneisen-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.gruneisen-significance h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.gruneisen-significance ul {
  list-style: none;
  padding: 0;
}

.gruneisen-significance li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.gruneisen-significance li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.stability-analysis {
  background: #fef5e7;
}

.stability-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.pomeranchuk-conditions,
.instability-mechanisms {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.pomeranchuk-conditions h3,
.instability-mechanisms h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.conditions-content,
.mechanisms-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.general-conditions,
.specific-conditions,
.instability-types {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.general-conditions h4,
.specific-conditions h4,
.instability-types h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.general-conditions p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.condition-formula {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.condition-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.conditions-grid,
.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.condition-card,
.type-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #667eea;
}

.condition-card h5,
.type-card h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.condition-content,
.type-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.condition-content p,
.type-content p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.condition-content ul,
.type-content ul {
  list-style: none;
  padding: 0;
}

.condition-content li,
.type-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.condition-content li::before,
.type-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.mechanism-details h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.phase-transitions {
  background: #f0f4f8;
}

.transitions-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quantum-phase-transitions,
.finite-temperature-crossovers {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.quantum-phase-transitions h3,
.finite-temperature-crossovers h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.qpt-content,
.crossover-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.qpt-characteristics,
.temperature-scales,
.crossover-behavior {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.qpt-characteristics h4,
.temperature-scales h4,
.crossover-behavior h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.characteristics-grid,
.scales-grid,
.behavior-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.char-card,
.scale-card,
.regime-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.char-card h5,
.scale-card h5,
.regime-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.char-card ul,
.regime-card ul {
  list-style: none;
  padding: 0;
}

.char-card li,
.regime-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.char-card li::before,
.regime-card li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.scale-card p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  text-align: center;
  border: 1px solid #e2e8f0;
  color: #2d3748;
}

.qcp-physics {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.qcp-physics h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.qcp-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.qcp-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.qcp-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.qcp-content p {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.qcp-content ul {
  list-style: none;
  padding: 0;
}

.qcp-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
}

.qcp-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.regime-content ul {
  list-style: none;
  padding: 0;
}

.regime-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.regime-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-verification {
  background: #f7fafc;
}

.experimental-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.measurement-techniques,
.case-studies {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.measurement-techniques h3,
.case-studies h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.techniques-grid,
.cases-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.technique-card,
.case-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.technique-card h4,
.case-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.technique-content,
.case-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.technique-content h5,
.case-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.technique-content ul,
.case-content ul {
  list-style: none;
  padding: 0;
}

.technique-content li,
.case-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.technique-content li::before,
.case-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.case-data,
.case-analysis {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.modern-developments {
  background: #f0fff4;
}

.developments-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theoretical-advances,
.computational-methods {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.theoretical-advances h3,
.computational-methods h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.advances-grid,
.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.advance-card,
.method-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.advance-card h4,
.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.advance-content ul,
.method-content ul {
  list-style: none;
  padding: 0;
}

.advance-content li,
.method-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.advance-content li::before,
.method-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.summary h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.key-achievements,
.future-directions {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.key-achievements h3,
.future-directions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.achievement-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.achievement-card ul {
  list-style: none;
  padding: 0;
}

.achievement-card li {
  padding: 0.25rem 0;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.achievement-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #90cdf4;
  font-weight: bold;
}

.directions-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.directions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.direction-item {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.direction-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.direction-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 0.95rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .key-concepts,
  .expansion-formulas,
  .conditions-grid,
  .types-grid,
  .characteristics-grid,
  .scales-grid,
  .behavior-analysis,
  .techniques-grid,
  .cases-content,
  .advances-grid,
  .methods-grid,
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .equilibrium-content,
  .qcp-analysis {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.5rem;
  }
  
  .chapter-subtitle {
    font-size: 1rem;
  }
  
  section {
    padding: 1rem;
  }
  
  .terms-grid,
  .origins-grid,
  .interpretation-grid,
  .analysis-grid {
    grid-template-columns: 1fr;
  }
}
</style>