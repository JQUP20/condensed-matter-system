<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.2.4 准粒子相互作用对磁化率和有效质量的修正</h1>
      <p class="chapter-subtitle">费米液体理论中的关键物理量修正</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          在费米液体理论中，准粒子间的相互作用不仅改变了系统的基态性质，
          还显著修正了各种可观测的物理量。磁化率和有效质量是两个最重要的例子，
          它们的修正直接反映了多体相互作用的强度和性质。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🧲 磁化率增强</h3>
            <p>Stoner增强因子描述自旋相互作用的影响</p>
          </div>
          <div class="concept-card">
            <h3>⚖️ 有效质量重整化</h3>
            <p>准粒子质量因相互作用而显著增加</p>
          </div>
          <div class="concept-card">
            <h3>🔬 实验验证</h3>
            <p>通过比热和磁化率测量验证理论预测</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 磁化率的修正 -->
    <section class="magnetic-susceptibility">
      <h2>🧲 磁化率的修正</h2>
      
      <div class="susceptibility-content">
        <div class="pauli-susceptibility">
          <h3>Pauli磁化率的基本理论</h3>
          <div class="pauli-theory">
            <div class="free-electron-case">
              <h4>自由电子情况</h4>
              <div class="free-electron-content">
                <div class="formula-section">
                  <h5>基本公式</h5>
                  <div class="formula">
                    <p>χ₀ = μ₀μ²ᵦN(0)</p>
                  </div>
                  <div class="explanation">
                    <p>其中μᵦ是玻尔磁子，N(0)是费米面态密度</p>
                  </div>
                </div>
                
                <div class="physical-origin">
                  <h5>物理起源</h5>
                  <div class="origin-content">
                    <div class="origin-card">
                      <h6>自旋极化</h6>
                      <p>外磁场使自旋向上和向下的能级分裂</p>
                    </div>
                    <div class="origin-card">
                      <h6>费米面重分布</h6>
                      <p>电子在费米面附近重新分布以降低能量</p>
                    </div>
                    <div class="origin-card">
                      <h6>净磁矩产生</h6>
                      <p>自旋不平衡导致宏观磁矩</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="temperature-dependence">
              <h4>温度依赖性</h4>
              <div class="temp-analysis">
                <div class="low-temp-regime">
                  <h5>低温极限 (T ≪ TF)</h5>
                  <div class="regime-content">
                    <div class="formula">
                      <p>χ(T) ≈ χ₀[1 - (π²/12)(T/TF)²]</p>
                    </div>
                    <div class="regime-explanation">
                      <ul>
                        <li>磁化率几乎与温度无关</li>
                        <li>只有费米面附近的电子贡献</li>
                        <li>热激发效应很小</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="high-temp-regime">
                  <h5>高温极限 (T ≫ TF)</h5>
                  <div class="regime-content">
                    <div class="formula">
                      <p>χ(T) ≈ (μ₀μ²ᵦn)/(3kᵦT)</p>
                    </div>
                    <div class="regime-explanation">
                      <ul>
                        <li>经典Curie定律行为</li>
                        <li>磁化率与温度成反比</li>
                        <li>所有电子都参与热激发</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interaction-corrections">
          <h3>相互作用修正</h3>
          <div class="corrections-content">
            <div class="stoner-enhancement">
              <h4>Stoner增强</h4>
              <div class="stoner-theory">
                <div class="enhancement-formula">
                  <h5>增强因子</h5>
                  <div class="formula-box">
                    <div class="formula">
                      <p>χ = χ₀/(1 + F₀ᵃ)</p>
                    </div>
                    <div class="enhancement-factor">
                      <p>增强因子: S = 1/(1 + F₀ᵃ)</p>
                    </div>
                  </div>
                </div>
                
                <div class="physical-interpretation">
                  <h5>物理解释</h5>
                  <div class="interpretation-grid">
                    <div class="interpretation-card">
                      <h6>F₀ᵃ > 0 (排斥相互作用)</h6>
                      <div class="case-content">
                        <p>χ < χ₀ (磁化率被抑制)</p>
                        <ul>
                          <li>自旋极化能量代价增加</li>
                          <li>系统倾向于保持自旋平衡</li>
                          <li>典型例子：简单金属</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="interpretation-card">
                      <h6>F₀ᵃ < 0 (吸引相互作用)</h6>
                      <div class="case-content">
                        <p>χ > χ₀ (磁化率被增强)</p>
                        <ul>
                          <li>自旋极化能量降低</li>
                          <li>系统倾向于自旋排列</li>
                          <li>典型例子：过渡金属</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="interpretation-card">
                      <h6>F₀ᵃ → -1 (临界情况)</h6>
                      <div class="case-content">
                        <p>χ → ∞ (Stoner不稳定性)</p>
                        <ul>
                          <li>铁磁相变的临界点</li>
                          <li>自发磁化的出现</li>
                          <li>费米液体理论失效</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="microscopic-origin">
              <h4>微观起源</h4>
              <div class="origin-analysis">
                <div class="exchange-interaction">
                  <h5>交换相互作用</h5>
                  <div class="exchange-content">
                    <div class="hubbard-model">
                      <h6>Hubbard模型描述</h6>
                      <div class="model-formula">
                        <p>H = -t∑⟨i,j⟩,σ c†ᵢσcⱼσ + U∑ᵢ nᵢ↑nᵢ↓</p>
                      </div>
                      <div class="model-explanation">
                        <p>U项描述同一格点上的库仑排斥</p>
                        <ul>
                          <li>U > 0: 排斥相互作用，抑制双占据</li>
                          <li>有效交换相互作用 Jeff ≈ t²/U</li>
                          <li>导致F₀ᵃ的修正</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="rpa-calculation">
                      <h6>RPA计算</h6>
                      <div class="rpa-content">
                        <div class="rpa-formula">
                          <p>χ(q,ω) = χ₀(q,ω)/[1 - U·χ₀(q,ω)]</p>
                        </div>
                        <div class="rpa-result">
                          <p>在q→0, ω→0极限下：</p>
                          <div class="limit-formula">
                            <p>F₀ᵃ = -U·N(0)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="screening-effects">
                  <h5>屏蔽效应</h5>
                  <div class="screening-content">
                    <div class="thomas-fermi">
                      <h6>Thomas-Fermi屏蔽</h6>
                      <div class="tf-content">
                        <div class="screening-length">
                          <p>屏蔽长度: λTF = (ε₀εr/e²N(0))^(1/2)</p>
                        </div>
                        <div class="effective-interaction">
                          <p>有效相互作用被屏蔽长度截断</p>
                          <ul>
                            <li>长程库仑相互作用变为短程</li>
                            <li>减弱了相互作用强度</li>
                            <li>影响F₀ᵃ的数值</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="dynamic-screening">
                      <h6>动力学屏蔽</h6>
                      <div class="dynamic-content">
                        <div class="frequency-dependence">
                          <p>屏蔽函数: ε(q,ω) = 1 - V(q)Π(q,ω)</p>
                        </div>
                        <div class="dynamic-effects">
                          <ul>
                            <li>频率依赖的介电函数</li>
                            <li>等离激元激发的影响</li>
                            <li>准粒子寿命的有限性</li>
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

        <div class="experimental-measurements">
          <h3>实验测量</h3>
          <div class="measurements-content">
            <div class="measurement-techniques">
              <h4>测量技术</h4>
              <div class="techniques-grid">
                <div class="technique-card">
                  <h5>🧲 SQUID磁强计</h5>
                  <div class="technique-content">
                    <p><strong>原理：</strong>超导量子干涉器件</p>
                    <div class="advantages">
                      <h6>优势：</h6>
                      <ul>
                        <li>极高的磁场灵敏度</li>
                        <li>宽温度范围测量</li>
                        <li>低磁场下的精确测量</li>
                      </ul>
                    </div>
                    <div class="applications">
                      <h6>应用：</h6>
                      <ul>
                        <li>弱磁性材料的磁化率</li>
                        <li>相变点的确定</li>
                        <li>磁性杂质的检测</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="technique-card">
                  <h5>📡 电子自旋共振(ESR)</h5>
                  <div class="technique-content">
                    <p><strong>原理：</strong>微波频率下的磁共振</p>
                    <div class="advantages">
                      <h6>优势：</h6>
                      <ul>
                        <li>直接探测电子自旋</li>
                        <li>高频率分辨率</li>
                        <li>局域环境信息</li>
                      </ul>
                    </div>
                    <div class="applications">
                      <h6>应用：</h6>
                      <ul>
                        <li>g因子的测定</li>
                        <li>自旋-轨道耦合强度</li>
                        <li>磁性相互作用研究</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="technique-card">
                  <h5>🔬 核磁共振(NMR)</h5>
                  <div class="technique-content">
                    <p><strong>原理：</strong>核自旋与电子的超精细相互作用</p>
                    <div class="advantages">
                      <h6>优势：</h6>
                      <ul>
                        <li>局域磁场的精确测量</li>
                        <li>Knight位移信息</li>
                        <li>自旋动力学研究</li>
                      </ul>
                    </div>
                    <div class="applications">
                      <h6>应用：</h6>
                      <ul>
                        <li>电子态密度测定</li>
                        <li>磁性涨落研究</li>
                        <li>相变机制探索</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="data-analysis">
              <h4>数据分析方法</h4>
              <div class="analysis-methods">
                <div class="curie-weiss-analysis">
                  <h5>Curie-Weiss分析</h5>
                  <div class="cw-content">
                    <div class="cw-formula">
                      <p>χ(T) = C/(T - θ)</p>
                    </div>
                    <div class="parameter-extraction">
                      <h6>参数提取：</h6>
                      <ul>
                        <li>Curie常数C反映有效磁矩</li>
                        <li>Weiss温度θ表征相互作用强度</li>
                        <li>θ > 0: 铁磁相互作用</li>
                        <li>θ < 0: 反铁磁相互作用</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="wilson-ratio">
                  <h5>Wilson比值</h5>
                  <div class="wilson-content">
                    <div class="wilson-formula">
                      <p>R = (π²k²ᵦχ)/(3μ²ᵦγ)</p>
                    </div>
                    <div class="wilson-interpretation">
                      <h6>物理意义：</h6>
                      <ul>
                        <li>R = 1: 自由电子系统</li>
                        <li>R > 1: 铁磁涨落增强</li>
                        <li>R < 1: 反铁磁涨落或轨道效应</li>
                        <li>重费米子系统中R ≈ 2</li>
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

    <!-- 有效质量的修正 -->
    <section class="effective-mass">
      <h2>⚖️ 有效质量的修正</h2>
      
      <div class="mass-content">
        <div class="mass-definition">
          <h3>有效质量的定义</h3>
          <div class="definition-content">
            <div class="thermodynamic-definition">
              <h4>热力学定义</h4>
              <div class="thermo-def">
                <div class="formula-section">
                  <h5>比热系数关系</h5>
                  <div class="formula">
                    <p>γ = (π²/3)k²ᵦN*(0) = (π²/3)k²ᵦ(m*/ℏ²)(3π²n)^(1/3)</p>
                  </div>
                  <div class="explanation">
                    <p>其中N*(0)是准粒子态密度，m*是有效质量</p>
                  </div>
                </div>
                
                <div class="enhancement-relation">
                  <h5>质量增强</h5>
                  <div class="formula">
                    <p>m*/m = γ/γ₀ = 1 + F₁ˢ</p>
                  </div>
                  <div class="explanation">
                    <p>γ₀是自由电子比热系数，F₁ˢ是s波对称相互作用参数</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="kinetic-definition">
              <h4>动力学定义</h4>
              <div class="kinetic-def">
                <div class="velocity-relation">
                  <h5>群速度关系</h5>
                  <div class="formula">
                    <p>vF* = (1/ℏ)(∂ε*/∂k)|kF = vF/(1 + F₁ˢ)</p>
                  </div>
                  <div class="explanation">
                    <p>准粒子费米速度被相互作用重整化</p>
                  </div>
                </div>
                
                <div class="dos-relation">
                  <h5>态密度关系</h5>
                  <div class="formula">
                    <p>N*(0) = N(0)(1 + F₁ˢ)</p>
                  </div>
                  <div class="explanation">
                    <p>准粒子态密度增加，反映有效质量增强</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mass-enhancement-mechanisms">
          <h3>质量增强机制</h3>
          <div class="mechanisms-content">
            <div class="electron-phonon">
              <h4>电子-声子相互作用</h4>
              <div class="ep-content">
                <div class="coupling-strength">
                  <h5>耦合强度</h5>
                  <div class="coupling-formula">
                    <p>λ = N(0)⟨I²⟩/⟨ω²⟩</p>
                  </div>
                  <div class="coupling-explanation">
                    <p>其中I是电子-声子耦合矩阵元，ω是声子频率</p>
                  </div>
                </div>
                
                <div class="mass-enhancement">
                  <h5>质量增强公式</h5>
                  <div class="enhancement-formula">
                    <p>m*/m = 1 + λ</p>
                  </div>
                  <div class="enhancement-details">
                    <div class="detail-grid">
                      <div class="detail-card">
                        <h6>弱耦合 (λ ≪ 1)</h6>
                        <ul>
                          <li>微扰理论适用</li>
                          <li>质量增强较小</li>
                          <li>典型简单金属</li>
                        </ul>
                      </div>
                      <div class="detail-card">
                        <h6>中等耦合 (λ ~ 1)</h6>
                        <ul>
                          <li>显著质量增强</li>
                          <li>超导转变温度较高</li>
                          <li>过渡金属化合物</li>
                        </ul>
                      </div>
                      <div class="detail-card">
                        <h6>强耦合 (λ ≫ 1)</h6>
                        <ul>
                          <li>极大质量增强</li>
                          <li>极化子形成</li>
                          <li>氧化物超导体</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="electron-electron">
              <h4>电子-电子相互作用</h4>
              <div class="ee-content">
                <div class="correlation-effects">
                  <h5>关联效应</h5>
                  <div class="correlation-analysis">
                    <div class="hubbard-enhancement">
                      <h6>Hubbard模型中的增强</h6>
                      <div class="hubbard-formula">
                        <p>m*/m ≈ 1 + (U·N(0))²/16t²</p>
                      </div>
                      <div class="hubbard-explanation">
                        <p>在弱到中等关联强度下的近似结果</p>
                      </div>
                    </div>
                    
                    <div class="strong-correlation">
                      <h6>强关联极限</h6>
                      <div class="strong-corr-content">
                        <p>当U ≫ t时，系统进入Mott绝缘体相</p>
                        <ul>
                          <li>准粒子峰消失</li>
                          <li>有效质量发散</li>
                          <li>金属-绝缘体转变</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="many-body-effects">
                  <h5>多体效应</h5>
                  <div class="many-body-analysis">
                    <div class="self-energy">
                      <h6>自能修正</h6>
                      <div class="self-energy-content">
                        <div class="self-energy-formula">
                          <p>Σ(k,ω) = Σ'(k,ω) + iΣ''(k,ω)</p>
                        </div>
                        <div class="mass-from-self-energy">
                          <p>有效质量: m*/m = 1 - ∂Σ'/∂ω|ω=0</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="vertex-corrections">
                      <h6>顶点修正</h6>
                      <div class="vertex-content">
                        <p>高阶图的贡献：</p>
                        <ul>
                          <li>散射振幅的重整化</li>
                          <li>多粒子激发的影响</li>
                          <li>非费米液体行为的起源</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="kondo-effect">
              <h4>Kondo效应</h4>
              <div class="kondo-content">
                <div class="single-impurity">
                  <h5>单杂质Kondo效应</h5>
                  <div class="single-kondo">
                    <div class="kondo-temperature">
                      <h6>Kondo温度</h6>
                      <div class="tk-formula">
                        <p>TK = D exp(-1/ρJ)</p>
                      </div>
                      <div class="tk-explanation">
                        <p>其中D是带宽，ρ是态密度，J是交换耦合</p>
                      </div>
                    </div>
                    
                    <div class="resistivity-enhancement">
                      <h6>电阻率增强</h6>
                      <div class="resistivity-content">
                        <p>低温下电阻率的对数修正：</p>
                        <div class="resistivity-formula">
                          <p>ρ(T) = ρ₀ + A ln(T/TK)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="heavy-fermion">
                  <h5>重费米子系统</h5>
                  <div class="heavy-fermion-content">
                    <div class="coherence-temperature">
                      <h6>相干温度</h6>
                      <div class="coherence-content">
                        <p>T* ~ TK：Kondo单重态形成的特征温度</p>
                        <ul>
                          <li>T > T*: 局域磁矩行为</li>
                          <li>T < T*: 重准粒子形成</li>
                          <li>巨大的有效质量增强</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="mass-enhancement-scale">
                      <h6>质量增强标度</h6>
                      <div class="scale-content">
                        <div class="scale-formula">
                          <p>m*/m ~ TF/TK ~ 10² - 10³</p>
                        </div>
                        <div class="scale-examples">
                          <p>典型例子：</p>
                          <ul>
                            <li>CeCu₆: m*/m ~ 200</li>
                            <li>UBe₁₃: m*/m ~ 100</li>
                            <li>CeCoIn₅: m*/m ~ 150</li>
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

        <div class="experimental-determination">
          <h3>有效质量的实验测定</h3>
          <div class="determination-content">
            <div class="specific-heat">
              <h4>比热测量</h4>
              <div class="specific-heat-content">
                <div class="measurement-principle">
                  <h5>测量原理</h5>
                  <div class="principle-content">
                    <div class="heat-capacity-formula">
                      <p>C = γT + βT³</p>
                    </div>
                    <div class="coefficient-meaning">
                      <ul>
                        <li>γT: 电子贡献（线性项）</li>
                        <li>βT³: 声子贡献（立方项）</li>
                        <li>γ ∝ m*: 有效质量的直接测量</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="low-temperature-techniques">
                  <h5>低温技术</h5>
                  <div class="techniques-content">
                    <div class="technique-grid">
                      <div class="tech-card">
                        <h6>绝热去磁</h6>
                        <p>达到mK温度范围</p>
                      </div>
                      <div class="tech-card">
                        <h6>稀释制冷机</h6>
                        <p>连续冷却到10mK以下</p>
                      </div>
                      <div class="tech-card">
                        <h6>脉冲热技术</h6>
                        <p>快速热容测量</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="quantum-oscillations">
              <h4>量子振荡</h4>
              <div class="oscillations-content">
                <div class="dhas-effect">
                  <h5>de Haas-van Alphen效应</h5>
                  <div class="dhas-content">
                    <div class="oscillation-formula">
                      <p>M ∝ cos(2πF/B + φ) × RT × RD × RS</p>
                    </div>
                    <div class="damping-factors">
                      <h6>阻尼因子：</h6>
                      <ul>
                        <li>RT: 温度阻尼，包含m*信息</li>
                        <li>RD: 无序散射阻尼</li>
                        <li>RS: 自旋阻尼</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mass-extraction">
                  <h5>质量提取</h5>
                  <div class="extraction-content">
                    <div class="temperature-dependence">
                      <h6>温度依赖分析</h6>
                      <div class="temp-formula">
                        <p>RT = (2π²kBTm*/ℏeB)/sinh(2π²kBTm*/ℏeB)</p>
                      </div>
                      <div class="extraction-method">
                        <p>通过拟合振荡幅度的温度依赖性提取m*</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="transport-measurements">
              <h4>输运测量</h4>
              <div class="transport-content">
                <div class="hall-effect">
                  <h5>霍尔效应</h5>
                  <div class="hall-content">
                    <div class="hall-coefficient">
                      <p>RH = 1/(nec) × (1 + F₁ˢ)/(1 + F₀ˢ)</p>
                    </div>
                    <div class="mass-information">
                      <p>结合载流子密度信息可以提取有效质量</p>
                    </div>
                  </div>
                </div>
                
                <div class="cyclotron-resonance">
                  <h5>回旋共振</h5>
                  <div class="cyclotron-content">
                    <div class="resonance-frequency">
                      <p>ωc = eB/m*</p>
                    </div>
                    <div class="direct-measurement">
                      <p>直接测量有效质量的最精确方法</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 典型材料中的实例 -->
    <section class="material-examples">
      <h2>🧪 典型材料中的实例</h2>
      
      <div class="examples-content">
        <div class="simple-metals">
          <h3>简单金属</h3>
          <div class="simple-metals-content">
            <div class="alkali-metals">
              <h4>碱金属</h4>
              <div class="alkali-table">
                <div class="table-container">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>金属</th>
                        <th>χ/χ₀</th>
                        <th>m*/m</th>
                        <th>F₀ᵃ</th>
                        <th>F₁ˢ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Li</td>
                        <td>0.91</td>
                        <td>1.3</td>
                        <td>-0.1</td>
                        <td>+0.3</td>
                      </tr>
                      <tr>
                        <td>Na</td>
                        <td>0.83</td>
                        <td>1.5</td>
                        <td>-0.2</td>
                        <td>+0.5</td>
                      </tr>
                      <tr>
                        <td>K</td>
                        <td>0.77</td>
                        <td>1.7</td>
                        <td>-0.3</td>
                        <td>+0.7</td>
                      </tr>
                      <tr>
                        <td>Cs</td>
                        <td>0.71</td>
                        <td>2.2</td>
                        <td>-0.4</td>
                        <td>+1.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="alkali-analysis">
                <h5>趋势分析</h5>
                <div class="trend-analysis">
                  <div class="trend-card">
                    <h6>📉 磁化率抑制</h6>
                    <p>随原子序数增加，磁化率相对自由电子值的抑制增强</p>
                  </div>
                  <div class="trend-card">
                    <h6>📈 质量增强</h6>
                    <p>有效质量增强随电子密度降低而增大</p>
                  </div>
                  <div class="trend-card">
                    <h6>🔗 参数关联</h6>
                    <p>F₀ᵃ和F₁ˢ都随相互作用强度增加</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="noble-metals">
              <h4>贵金属</h4>
              <div class="noble-content">
                <div class="copper-example">
                  <h5>铜 (Cu)</h5>
                  <div class="cu-properties">
                    <div class="property-grid">
                      <div class="prop-card">
                        <h6>磁化率</h6>
                        <p>χ/χ₀ ≈ 0.8</p>
                        <p>轻微抑制</p>
                      </div>
                      <div class="prop-card">
                        <h6>有效质量</h6>
                        <p>m*/m ≈ 1.4</p>
                        <p>中等增强</p>
                      </div>
                      <div class="prop-card">
                        <h6>d带效应</h6>
                        <p>d电子的贡献</p>
                        <p>Van Hove奇点</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="silver-gold">
                  <h5>银 (Ag) 和金 (Au)</h5>
                  <div class="ag-au-content">
                    <p>类似的d带效应，但强度不同：</p>
                    <ul>
                      <li>Ag: d带距费米面较远，效应较弱</li>
                      <li>Au: 自旋-轨道耦合增强效应</li>
                      <li>相对论效应在Au中更显著</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="transition-metals">
          <h3>过渡金属</h3>
          <div class="transition-content">
            <div class="iron-group">
              <h4>铁族金属</h4>
              <div class="iron-group-content">
                <div class="ferromagnetic-metals">
                  <h5>铁磁金属</h5>
                  <div class="ferro-analysis">
                    <div class="ferro-grid">
                      <div class="ferro-card">
                        <h6>铁 (Fe)</h6>
                        <div class="fe-properties">
                          <p><strong>磁化率：</strong>巨大增强</p>
                          <p><strong>有效质量：</strong>m*/m ~ 3-5</p>
                          <p><strong>特点：</strong>强交换相互作用</p>
                        </div>
                      </div>
                      <div class="ferro-card">
                        <h6>镍 (Ni)</h6>
                        <div class="ni-properties">
                          <p><strong>磁化率：</strong>强增强</p>
                          <p><strong>有效质量：</strong>m*/m ~ 2-3</p>
                          <p><strong>特点：</strong>d带接近费米面</p>
                        </div>
                      </div>
                      <div class="ferro-card">
                        <h6>钴 (Co)</h6>
                        <div class="co-properties">
                          <p><strong>磁化率：</strong>中等增强</p>
                          <p><strong>有效质量：</strong>m*/m ~ 1.5-2</p>
                          <p><strong>特点：</strong>六角密堆积结构</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="stoner-criterion">
                  <h5>Stoner判据</h5>
                  <div class="stoner-content">
                    <div class="criterion-formula">
                      <p>UN(0) > 1</p>
                    </div>
                    <div class="criterion-explanation">
                      <p>当交换相互作用足够强时，系统变为铁磁性</p>
                      <ul>
                        <li>U: 库仑排斥强度</li>
                        <li>N(0): 费米面态密度</li>
                        <li>临界点处F₀ᵃ = -1</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="platinum-group">
              <h4>铂族金属</h4>
              <div class="platinum-content">
                <div class="palladium-example">
                  <h5>钯 (Pd)</h5>
                  <div class="pd-properties">
                    <div class="pd-characteristics">
                      <h6>接近铁磁不稳定性</h6>
                      <div class="pd-data">
                        <p><strong>增强因子：</strong>S ≈ 10</p>
                        <p><strong>F₀ᵃ ≈ -0.9</strong></p>
                        <p><strong>特征：</strong>巨大的磁化率增强</p>
                      </div>
                    </div>
                    
                    <div class="pd-applications">
                      <h6>应用意义</h6>
                      <ul>
                        <li>氢吸收研究的模型系统</li>
                        <li>催化反应中的磁性效应</li>
                        <li>量子临界点附近的行为</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="heavy-fermion-systems">
          <h3>重费米子系统</h3>
          <div class="heavy-fermion-content">
            <div class="cerium-compounds">
              <h4>铈化合物</h4>
              <div class="ce-compounds-content">
                <div class="compound-examples">
                  <div class="compound-grid">
                    <div class="compound-card">
                      <h5>CeCu₆</h5>
                      <div class="compound-data">
                        <p><strong>γ:</strong> 1.6 J/mol·K²</p>
                        <p><strong>m*/m:</strong> ~200</p>
                        <p><strong>χ增强:</strong> ~10</p>
                        <p><strong>Wilson比:</strong> ~2</p>
                      </div>
                    </div>
                    
                    <div class="compound-card">
                      <h5>CeAl₃</h5>
                      <div class="compound-data">
                        <p><strong>γ:</strong> 1.6 J/mol·K²</p>
                        <p><strong>m*/m:</strong> ~150</p>
                        <p><strong>TK:</strong> ~5K</p>
                        <p><strong>特点:</strong> 反铁磁序</p>
                      </div>
                    </div>
                    
                    <div class="compound-card">
                      <h5>CeCoIn₅</h5>
                      <div class="compound-data">
                        <p><strong>γ:</strong> 0.3 J/mol·K²</p>
                        <p><strong>Tc:</strong> 2.3K (超导)</p>
                        <p><strong>特点:</strong> d波配对</p>
                        <p><strong>应用:</strong> 非常规超导</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="kondo-physics">
                  <h5>Kondo物理</h5>
                  <div class="kondo-analysis">
                    <div class="temperature-scales">
                      <h6>特征温度标度</h6>
                      <div class="scales-content">
                        <ul>
                          <li><strong>TK:</strong> Kondo温度 (~1-10K)</li>
                          <li><strong>T*:</strong> 相干温度 (~TK)</li>
                          <li><strong>TN:</strong> 反铁磁转变温度</li>
                          <li><strong>Tc:</strong> 超导转变温度</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="competition-effects">
                      <h6>竞争效应</h6>
                      <div class="competition-content">
                        <p>RKKY相互作用与Kondo效应的竞争：</p>
                        <ul>
                          <li>RKKY占主导 → 磁有序</li>
                          <li>Kondo占主导 → 重费米子液体</li>
                          <li>平衡点 → 量子临界点</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="uranium-compounds">
              <h4>铀化合物</h4>
              <div class="u-compounds-content">
                <div class="u-examples">
                  <div class="u-grid">
                    <div class="u-card">
                      <h5>UBe₁₃</h5>
                      <div class="u-data">
                        <p><strong>Tc:</strong> 0.9K</p>
                        <p><strong>配对:</strong> 非常规</p>
                        <p><strong>特点:</strong> 重费米子超导体</p>
                      </div>
                    </div>
                    
                    <div class="u-card">
                      <h5>UPt₃</h5>
                      <div class="u-data">
                        <p><strong>Tc:</strong> 0.5K</p>
                        <p><strong>相图:</strong> 多重超导相</p>
                        <p><strong>对称性:</strong> 可能的p波配对</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="f-electron-physics">
                  <h5>f电子物理</h5>
                  <div class="f-physics-content">
                    <p>5f电子的特殊性质：</p>
                    <ul>
                      <li>局域性与巡游性的中间态</li>
                      <li>强自旋-轨道耦合</li>
                      <li>多极矩相互作用</li>
                      <li>隐藏序参量的可能性</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论与实验的比较 -->
    <section class="theory-experiment">
      <h2>🔬 理论与实验的比较</h2>
      
      <div class="comparison-content">
        <div class="success-cases">
          <h3>成功案例</h3>
          <div class="success-content">
            <div class="liquid-helium-3">
              <h4>液态³He</h4>
              <div class="he3-success">
                <div class="theoretical-predictions">
                  <h5>理论预测</h5>
                  <div class="predictions-content">
                    <ul>
                      <li>磁化率增强因子的精确计算</li>
                      <li>有效质量与相互作用参数的关系</li>
                      <li>输运系数的温度依赖性</li>
                      <li>相变点的预测</li>
                    </ul>
                  </div>
                </div>
                
                <div class="experimental-verification">
                  <h5>实验验证</h5>
                  <div class="verification-content">
                    <ul>
                      <li>所有热力学量的精确测量</li>
                      <li>理论与实验的完美符合</li>
                      <li>费米液体理论的标杆验证</li>
                      <li>超流相变的成功描述</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="simple-metals-verification">
              <h4>简单金属</h4>
              <div class="metals-verification">
                <div class="agreement-aspects">
                  <h5>符合的方面</h5>
                  <div class="agreement-content">
                    <div class="agreement-grid">
                      <div class="agreement-card">
                        <h6>低温比热</h6>
                        <p>线性温度依赖性得到很好验证</p>
                      </div>
                      <div class="agreement-card">
                        <h6>Pauli磁化率</h6>
                        <p>增强因子与理论预测一致</p>
                      </div>
                      <div class="agreement-card">
                        <h6>电阻率</h6>
                        <p>T²依赖性在低温下成立</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="discrepancy-sources">
                  <h5>偏差来源</h5>
                  <div class="discrepancy-content">
                    <ul>
                      <li>晶格效应的影响</li>
                      <li>杂质散射的贡献</li>
                      <li>能带结构的复杂性</li>
                      <li>多体效应的高阶修正</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="challenges-limitations">
          <h3>挑战与局限</h3>
          <div class="challenges-content">
            <div class="strongly-correlated">
              <h4>强关联系统</h4>
              <div class="strong-corr-challenges">
                <div class="theoretical-difficulties">
                  <h5>理论困难</h5>
                  <div class="difficulties-content">
                    <ul>
                      <li>微扰理论的失效</li>
                      <li>准粒子概念的模糊</li>
                      <li>非费米液体行为的出现</li>
                      <li>量子临界点附近的奇异性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="experimental-challenges">
                  <h5>实验挑战</h5>
                  <div class="exp-challenges-content">
                    <ul>
                      <li>极低温度的要求</li>
                      <li>样品质量的严格要求</li>
                      <li>多种能量标度的竞争</li>
                      <li>长时间弛豫过程</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="quantum-critical">
              <h4>量子临界现象</h4>
              <div class="qc-content">
                <div class="scaling-behavior">
                  <h5>标度行为</h5>
                  <div class="scaling-content">
                    <p>量子临界点附近的异常标度：</p>
                    <ul>
                      <li>电阻率: ρ ∝ T^n (n ≠ 2)</li>
                      <li>比热: C/T ∝ -ln T</li>
                      <li>磁化率: χ ∝ T^(-α)</li>
                    </ul>
                  </div>
                </div>
                
                <div class="theoretical-approaches">
                  <h5>理论方法</h5>
                  <div class="approaches-content">
                    <div class="approach-grid">
                      <div class="approach-card">
                        <h6>重整化群</h6>
                        <p>临界指数的计算</p>
                      </div>
                      <div class="approach-card">
                        <h6>大N展开</h6>
                        <p>可控的理论框架</p>
                      </div>
                      <div class="approach-card">
                        <h6>AdS/CFT对应</h6>
                        <p>全息方法的应用</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>未来发展方向</h3>
          <div class="future-content">
            <div class="theoretical-advances">
              <h4>理论进展</h4>
              <div class="theory-advances">
                <div class="new-methods">
                  <h5>新方法发展</h5>
                  <div class="methods-content">
                    <div class="method-grid">
                      <div class="method-card">
                        <h6>🧮 机器学习</h6>
                        <div class="ml-applications">
                          <ul>
                            <li>相图的自动识别</li>
                            <li>有效模型的构建</li>
                            <li>实验数据的智能分析</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="method-card">
                        <h6>💻 量子蒙特卡罗</h6>
                        <div class="qmc-applications">
                          <ul>
                            <li>符号问题的缓解</li>
                            <li>有限温度性质</li>
                            <li>动力学性质的计算</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="method-card">
                        <h6>🔗 张量网络</h6>
                        <div class="tn-applications">
                          <ul>
                            <li>强关联系统的精确解</li>
                            <li>纠缠结构的理解</li>
                            <li>拓扑相的分类</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="experimental-frontiers">
              <h4>实验前沿</h4>
              <div class="exp-frontiers">
                <div class="new-techniques">
                  <h5>新技术发展</h5>
                  <div class="techniques-content">
                    <div class="technique-grid">
                      <div class="tech-card">
                        <h6>🔬 扫描探针</h6>
                        <p>原子尺度的局域性质测量</p>
                      </div>
                      <div class="tech-card">
                        <h6>📡 太赫兹光谱</h6>
                        <p>低能激发的直接探测</p>
                      </div>
                      <div class="tech-card">
                        <h6>🌟 中子散射</h6>
                        <p>磁激发和声子的研究</p>
                      </div>
                      <div class="tech-card">
                        <h6>⚡ 超快光谱</h6>
                        <p>非平衡态动力学</p>
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

    <!-- 总结 -->
    <section class="summary">
      <h2>📋 本节总结</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>🎯 关键要点</h3>
          <div class="points-grid">
            <div class="point-card">
              <h4>磁化率修正</h4>
              <ul>
                <li>Stoner增强因子量化相互作用效应</li>
                <li>F₀ᵃ参数决定增强或抑制</li>
                <li>铁磁不稳定性的判据</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>有效质量增强</h4>
              <ul>
                <li>多种机制导致质量重整化</li>
                <li>比热测量提供直接信息</li>
                <li>重费米子系统的巨大增强</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>实验验证</h4>
              <ul>
                <li>液态³He的完美验证</li>
                <li>简单金属的良好符合</li>
                <li>强关联系统的挑战</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="physical-insights">
          <h3>🔍 物理洞察</h3>
          <div class="insights-content">
            <p>
              准粒子相互作用对磁化率和有效质量的修正揭示了多体系统的深层物理：
            </p>
            <div class="insight-list">
              <div class="insight-item">
                <h4>🧲 磁性相互作用的重要性</h4>
                <p>自旋相关的相互作用不仅影响磁性质，还与超导、量子相变等现象密切相关</p>
              </div>
              <div class="insight-item">
                <h4>⚖️ 质量重整化的普遍性</h4>
                <p>从弱相互作用到强关联，有效质量增强是多体系统的普遍特征</p>
              </div>
              <div class="insight-item">
                <h4>🔬 理论与实验的对话</h4>
                <p>精确的实验测量推动理论发展，理论预测指导新实验设计</p>
              </div>
            </div>
          </div>
        </div>

        <div class="learning-resources">
          <h3>📚 学习资源</h3>
          <div class="resources-content">
            <div class="textbooks">
              <h4>经典教材</h4>
              <ul>
                <li>Pines & Nozières: "The Theory of Quantum Liquids"</li>
                <li>Ashcroft & Mermin: "Solid State Physics"</li>
                <li>Kittel: "Introduction to Solid State Physics"</li>
              </ul>
            </div>
            
            <div class="review-articles">
              <h4>综述文章</h4>
              <ul>
                <li>Stewart: "Heavy-fermion systems" (Rev. Mod. Phys.)</li>
                <li>Löhneysen et al.: "Fermi-liquid instabilities" (Rev. Mod. Phys.)</li>
                <li>Sachdev: "Quantum phase transitions" (Physics World)</li>
              </ul>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

/* 引言样式 */
.introduction {
  margin-bottom: 40px;
  padding: 25px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 15px;
  color: white;
}

.introduction h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  text-align: center;
}

.intro-content p {
  font-size: 1.1em;
  margin-bottom: 25px;
  text-align: justify;
}

.key-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.concept-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.concept-card h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #fff;
}

.concept-card p {
  font-size: 1em;
  opacity: 0.9;
}

/* 磁化率修正样式 */
.magnetic-susceptibility {
  margin-bottom: 40px;
}

.magnetic-susceptibility h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
}

.susceptibility-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.pauli-susceptibility, .interaction-corrections, .experimental-measurements {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.pauli-susceptibility h3, .interaction-corrections h3, .experimental-measurements h3 {
  font-size: 1.6em;
  color: #2980b9;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #3498db;
}

/* 公式样式 */
.formula {
  background: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  box-shadow: 0 3px 10px rgba(44, 62, 80, 0.3);
}

.formula-box {
  background: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  border-left: 4px solid #3498db;
}

.enhancement-factor {
  background: #e8f5e8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  border-left: 3px solid #27ae60;
}

/* 网格布局 */
.interpretation-grid, .origin-content, .techniques-grid, .detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.interpretation-card, .origin-card, .technique-card, .detail-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.interpretation-card:hover, .origin-card:hover, .technique-card:hover, .detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.interpretation-card h6, .origin-card h6, .technique-card h5, .detail-card h6 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.2em;
}

/* 有效质量样式 */
.effective-mass {
  margin-bottom: 40px;
}

.effective-mass h2 {
  font-size: 2em;
  color: #8e44ad;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #9b59b6;
}

.mass-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.mass-definition, .mass-enhancement-mechanisms, .experimental-determination {
  background: #fdf2e9;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.mass-definition h3, .mass-enhancement-mechanisms h3, .experimental-determination h3 {
  font-size: 1.6em;
  color: #d35400;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e67e22;
}

/* 材料实例样式 */
.material-examples {
  margin-bottom: 40px;
}

.material-examples h2 {
  font-size: 2em;
  color: #27ae60;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #2ecc71;
}

.examples-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.simple-metals, .transition-metals, .heavy-fermion-systems {
  background: #eafaf1;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.simple-metals h3, .transition-metals h3, .heavy-fermion-systems h3 {
  font-size: 1.6em;
  color: #1e8449;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #27ae60;
}

/* 表格样式 */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.data-table th, .data-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.data-table th {
  background: #3498db;
  color: white;
  font-weight: 600;
}

.data-table tr:hover {
  background: #f5f5f5;
}

/* 理论与实验比较样式 */
.theory-experiment {
  margin-bottom: 40px;
}

.theory-experiment h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #c0392b;
}

.comparison-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.success-cases, .challenges-limitations, .future-directions {
  background: #fdedec;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.success-cases h3, .challenges-limitations h3, .future-directions h3 {
  font-size: 1.6em;
  color: #c0392b;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e74c3c;
}

/* 总结样式 */
.summary {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin-bottom: 40px;
}

.summary h2 {
  font-size: 2em;
  text-align: center;
  margin-bottom: 25px;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.point-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.point-card h4 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #fff;
}

.point-card ul {
  list-style-type: none;
  padding: 0;
}

.point-card li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.point-card li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #74b9ff;
}

.insights-content {
  margin-top: 25px;
}

.insight-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.insight-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #74b9ff;
}

.insight-item h4 {
  margin-bottom: 8px;
  font-size: 1.1em;
}

.insight-item p {
  font-size: 0.95em;
  opacity: 0.9;
}

.learning-resources {
  margin-top: 30px;
}

.learning-resources h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: center;
}

.resources-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.textbooks, .review-articles {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.textbooks h4, .review-articles h4 {
  margin-bottom: 15px;
  font-size: 1.2em;
}

.textbooks ul, .review-articles ul {
  list-style-type: none;
  padding: 0;
}

.textbooks li, .review-articles li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.95em;
}

.textbooks li::before, .review-articles li::before {
  content: "📖";
  position: absolute;
  left: 0;
}

.review-articles li::before {
  content: "📄";
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .key-concepts, .interpretation-grid, .origin-content, .techniques-grid, .detail-grid, .points-grid {
    grid-template-columns: 1fr;
  }
  
  .formula {
    font-size: 1em;
    padding: 12px;
  }
  
  .data-table {
    font-size: 0.9em;
  }
  
  .data-table th, .data-table td {
    padding: 8px 10px;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula {
    font-size: 0.9em;
    padding: 10px;
  }
  
  .interpretation-card, .origin-card, .technique-card, .detail-card {
    padding: 15px;
  }
}
</style>