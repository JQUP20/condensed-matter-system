<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.3.2 无碰撞Boltzmann方程与零声</h1>
      <p class="chapter-subtitle">集体激发的量子流体动力学</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          在极低温度下，费米液体中准粒子的散射率急剧下降，系统进入无碰撞区域。
          在这种情况下，Boltzmann方程简化为无碰撞形式，描述准粒子在自洽场中的运动。
          这种无碰撞动力学导致了零声（zero sound）等集体激发模式的出现，
          这是费米液体理论最重要的预言之一。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🌊 无碰撞区域</h3>
            <p>ωτ ≫ 1，集体运动主导</p>
          </div>
          <div class="concept-card">
            <h3>🔊 零声模式</h3>
            <p>密度涨落的无阻尼传播</p>
          </div>
          <div class="concept-card">
            <h3>⚖️ 自洽场</h3>
            <p>准粒子与集体场的耦合</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 无碰撞Boltzmann方程 -->
    <section class="collisionless-boltzmann">
      <h2>📐 无碰撞Boltzmann方程</h2>
      
      <div class="equation-content">
        <div class="basic-form">
          <h3>基本形式</h3>
          <div class="form-content">
            <div class="equation-derivation">
              <h4>方程推导</h4>
              <div class="derivation-content">
                <div class="starting-equation">
                  <h5>完整Boltzmann方程</h5>
                  <div class="equation-section">
                    <div class="formula">
                      <p>∂f/∂t + v·∇f + (F/ℏ)·∇ₖf = I[f]</p>
                    </div>
                    <div class="equation-explanation">
                      <p>其中I[f]是碰撞积分</p>
                    </div>
                  </div>
                </div>
                
                <div class="collisionless-limit">
                  <h5>无碰撞极限</h5>
                  <div class="limit-content">
                    <div class="condition">
                      <p><strong>条件：</strong>ωτ ≫ 1</p>
                      <ul>
                        <li>ω: 激发频率</li>
                        <li>τ: 准粒子寿命</li>
                        <li>碰撞项可忽略</li>
                      </ul>
                    </div>
                    
                    <div class="simplified-equation">
                      <h6>简化方程</h6>
                      <div class="formula">
                        <p>∂f/∂t + v·∇f + (F/ℏ)·∇ₖf = 0</p>
                      </div>
                      <div class="simplification-explanation">
                        <p>准粒子在自洽场中的无碰撞运动</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="linearization">
              <h4>线性化处理</h4>
              <div class="linearization-content">
                <div class="small-perturbation">
                  <h5>小扰动展开</h5>
                  <div class="perturbation-content">
                    <div class="expansion">
                      <p>设f = f₀ + δf，其中|δf| ≪ f₀</p>
                      <div class="formula">
                        <p>∂δf/∂t + v·∇δf + (δF/ℏ)·∇ₖf₀ = 0</p>
                      </div>
                    </div>
                    
                    <div class="self-consistent-field">
                      <h6>自洽场</h6>
                      <div class="field-content">
                        <div class="formula">
                          <p>δF = -∇δΦ</p>
                        </div>
                        <div class="potential-definition">
                          <p>其中δΦ是由密度涨落产生的自洽势</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="fourier-analysis">
                  <h5>傅里叶分析</h5>
                  <div class="fourier-content">
                    <div class="plane-wave-ansatz">
                      <h6>平面波假设</h6>
                      <div class="ansatz-content">
                        <div class="formula">
                          <p>δf(k,r,t) = δf(k)e^(i(q·r - ωt))</p>
                        </div>
                        <div class="ansatz-explanation">
                          <p>q: 波矢，ω: 频率</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="dispersion-equation">
                      <h6>色散方程</h6>
                      <div class="dispersion-content">
                        <div class="formula">
                          <p>(-iω + iq·v)δf(k) + (iq·δF/ℏ)∂f₀/∂εₖ = 0</p>
                        </div>
                        <div class="dispersion-explanation">
                          <p>决定集体模式频率的基本方程</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="self-consistency">
          <h3>自洽性条件</h3>
          <div class="consistency-content">
            <div class="density-response">
              <h4>密度响应</h4>
              <div class="response-content">
                <div class="density-fluctuation">
                  <h5>密度涨落</h5>
                  <div class="fluctuation-content">
                    <div class="formula">
                      <p>δn(r,t) = ∫ δf(k,r,t) d³k/(2π)³</p>
                    </div>
                    <div class="fluctuation-explanation">
                      <p>局域密度变化</p>
                    </div>
                  </div>
                </div>
                
                <div class="response-function">
                  <h5>响应函数</h5>
                  <div class="function-content">
                    <div class="formula">
                      <p>δn(q,ω) = χ₀(q,ω)δΦ(q,ω)</p>
                    </div>
                    <div class="bare-susceptibility">
                      <h6>裸磁化率</h6>
                      <div class="formula">
                        <p>χ₀(q,ω) = ∫ (∂f₀/∂εₖ)/(ω - q·v + iδ) d³k/(2π)³</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="interaction-potential">
              <h4>相互作用势</h4>
              <div class="potential-content">
                <div class="landau-interaction">
                  <h5>Landau相互作用</h5>
                  <div class="interaction-content">
                    <div class="formula">
                      <p>δΦ(q,ω) = ∫ f(k,k')δn(k',q,ω) d³k'/(2π)³</p>
                    </div>
                    <div class="interaction-explanation">
                      <p>f(k,k')是Landau相互作用函数</p>
                    </div>
                  </div>
                </div>
                
                <div class="self-consistency-condition">
                  <h5>自洽条件</h5>
                  <div class="condition-content">
                    <div class="formula">
                      <p>δΦ(q,ω) = f₀ˢδn(q,ω)</p>
                    </div>
                    <div class="condition-explanation">
                      <p>对于s波相互作用的简化</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 零声模式 -->
    <section class="zero-sound">
      <h2>🔊 零声模式</h2>
      
      <div class="zero-sound-content">
        <div class="dispersion-relation">
          <h3>色散关系</h3>
          <div class="dispersion-content">
            <div class="zero-sound-equation">
              <h4>零声方程</h4>
              <div class="equation-content">
                <div class="derivation-steps">
                  <h5>推导步骤</h5>
                  <div class="steps-content">
                    <div class="step-grid">
                      <div class="step-card">
                        <h6>步骤1: 自洽条件</h6>
                        <div class="formula">
                          <p>1 + f₀ˢχ₀(q,ω) = 0</p>
                        </div>
                        <p>集体模式的极点条件</p>
                      </div>
                      
                      <div class="step-card">
                        <h6>步骤2: 磁化率计算</h6>
                        <div class="formula">
                          <p>χ₀(q,ω) = N(0)∫₋₁¹ (dx)/(ω/vFq - x + iδ)</p>
                        </div>
                        <p>其中x = cos θ，θ是k与q的夹角</p>
                      </div>
                      
                      <div class="step-card">
                        <h6>步骤3: 积分求解</h6>
                        <div class="formula">
                          <p>χ₀(q,ω) = N(0)ln|(ω/vFq + 1)/(ω/vFq - 1)|</p>
                        </div>
                        <p>主值积分的结果</p>
                      </div>
                      
                      <div class="step-card">
                        <h6>步骤4: 零声方程</h6>
                        <div class="formula">
                          <p>1 + F₀ˢ∫₋₁¹ (dx)/(s - x) = 0</p>
                        </div>
                        <p>其中s = ω/vFq是约化速度</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="solution-analysis">
                  <h5>解的分析</h5>
                  <div class="analysis-content">
                    <div class="existence-condition">
                      <h6>存在条件</h6>
                      <div class="condition-content">
                        <div class="formula">
                          <p>F₀ˢ > 0</p>
                        </div>
                        <div class="physical-meaning">
                          <p><strong>物理意义：</strong>需要排斥性相互作用</p>
                          <ul>
                            <li>F₀ˢ < 0: 吸引相互作用，无零声</li>
                            <li>F₀ˢ = 0: 自由费米气体，无零声</li>
                            <li>F₀ˢ > 0: 排斥相互作用，存在零声</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="velocity-calculation">
                      <h6>速度计算</h6>
                      <div class="velocity-content">
                        <div class="weak-coupling">
                          <h6>弱耦合极限 (F₀ˢ ≪ 1)</h6>
                          <div class="weak-content">
                            <div class="formula">
                              <p>s ≈ 1 + F₀ˢ/3</p>
                            </div>
                            <div class="formula">
                              <p>v₀ ≈ vF(1 + F₀ˢ/3)</p>
                            </div>
                            <div class="weak-explanation">
                              <p>零声速度略大于费米速度</p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="strong-coupling">
                          <h6>强耦合极限 (F₀ˢ ≫ 1)</h6>
                          <div class="strong-content">
                            <div class="formula">
                              <p>s ≈ √(F₀ˢ/3)</p>
                            </div>
                            <div class="formula">
                              <p>v₀ ≈ vF√(F₀ˢ/3)</p>
                            </div>
                            <div class="strong-explanation">
                              <p>零声速度可以远大于费米速度</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="numerical-solutions">
              <h4>数值解</h4>
              <div class="numerical-content">
                <div class="solution-table">
                  <h5>不同F₀ˢ值的零声速度</h5>
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>F₀ˢ</th>
                        <th>s = v₀/vF</th>
                        <th>近似公式</th>
                        <th>精确数值</th>
                        <th>误差 (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0.1</td>
                        <td>1.033</td>
                        <td>1.033</td>
                        <td>1.033</td>
                        <td>0.0</td>
                      </tr>
                      <tr>
                        <td>0.5</td>
                        <td>1.167</td>
                        <td>1.167</td>
                        <td>1.167</td>
                        <td>0.1</td>
                      </tr>
                      <tr>
                        <td>1.0</td>
                        <td>1.333</td>
                        <td>1.333</td>
                        <td>1.333</td>
                        <td>0.2</td>
                      </tr>
                      <tr>
                        <td>2.0</td>
                        <td>1.667</td>
                        <td>1.633</td>
                        <td>1.667</td>
                        <td>2.0</td>
                      </tr>
                      <tr>
                        <td>5.0</td>
                        <td>2.291</td>
                        <td>2.291</td>
                        <td>2.291</td>
                        <td>0.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-properties">
          <h3>物理性质</h3>
          <div class="properties-content">
            <div class="properties-grid">
              <div class="property-card">
                <h4>🌡️ 温度效应</h4>
                <div class="temperature-content">
                  <div class="low-temperature">
                    <h5>低温行为</h5>
                    <div class="formula">
                      <p>T ≪ ℏv₀q/kB</p>
                    </div>
                    <ul>
                      <li>无阻尼传播</li>
                      <li>速度与温度无关</li>
                      <li>长程相干性</li>
                    </ul>
                  </div>
                  
                  <div class="high-temperature">
                    <h5>高温行为</h5>
                    <div class="formula">
                      <p>T ≫ ℏv₀q/kB</p>
                    </div>
                    <ul>
                      <li>强阻尼</li>
                      <li>转为第一声</li>
                      <li>扩散行为</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="property-card">
                <h4>📏 波长依赖</h4>
                <div class="wavelength-content">
                  <div class="long-wavelength">
                    <h5>长波长极限</h5>
                    <div class="formula">
                      <p>qξ₀ ≪ 1</p>
                    </div>
                    <ul>
                      <li>流体动力学行为</li>
                      <li>线性色散关系</li>
                      <li>ω = v₀q</li>
                    </ul>
                  </div>
                  
                  <div class="short-wavelength">
                    <h5>短波长行为</h5>
                    <div class="formula">
                      <p>qξ₀ ≫ 1</p>
                    </div>
                    <ul>
                      <li>单粒子激发主导</li>
                      <li>Landau阻尼</li>
                      <li>模式消失</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="property-card">
                <h4>🔊 声学性质</h4>
                <div class="acoustic-content">
                  <div class="sound-velocity">
                    <h5>声速比较</h5>
                    <div class="velocity-comparison">
                      <p><strong>零声：</strong>v₀ = vF(1 + F₀ˢ/3)</p>
                      <p><strong>第一声：</strong>v₁ = √(∂P/∂ρ)</p>
                      <p><strong>关系：</strong>v₀ > v₁ (通常)</p>
                    </div>
                  </div>
                  
                  <div class="attenuation">
                    <h5>衰减机制</h5>
                    <ul>
                      <li>准粒子散射</li>
                      <li>Landau阻尼</li>
                      <li>边界散射</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 与第一声的比较 -->
    <section class="sound-comparison">
      <h2>⚖️ 零声与第一声的比较</h2>
      
      <div class="comparison-content">
        <div class="comparison-table-section">
          <h3>详细比较</h3>
          <div class="comparison-table">
            <table class="data-table">
              <thead>
                <tr>
                  <th>特性</th>
                  <th>零声 (Zero Sound)</th>
                  <th>第一声 (First Sound)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>物理机制</strong></td>
                  <td>无碰撞集体运动</td>
                  <td>流体动力学压缩波</td>
                </tr>
                <tr>
                  <td><strong>适用条件</strong></td>
                  <td>ωτ ≫ 1, T → 0</td>
                  <td>ωτ ≪ 1, 局域平衡</td>
                </tr>
                <tr>
                  <td><strong>声速</strong></td>
                  <td>v₀ = vF(1 + F₀ˢ/3)</td>
                  <td>v₁ = √(∂P/∂ρ)ₛ</td>
                </tr>
                <tr>
                  <td><strong>温度依赖</strong></td>
                  <td>几乎无关</td>
                  <td>强依赖</td>
                </tr>
                <tr>
                  <td><strong>阻尼</strong></td>
                  <td>极低 (T → 0)</td>
                  <td>粘滞阻尼</td>
                </tr>
                <tr>
                  <td><strong>存在条件</strong></td>
                  <td>F₀ˢ > 0</td>
                  <td>总是存在</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="transition-region">
          <h3>转换区域</h3>
          <div class="transition-content">
            <div class="crossover-analysis">
              <h4>交叉行为</h4>
              <div class="crossover-content">
                <div class="crossover-condition">
                  <h5>交叉条件</h5>
                  <div class="formula">
                    <p>ωτ ~ 1</p>
                  </div>
                  <div class="condition-explanation">
                    <p>零声与第一声的交叉区域</p>
                  </div>
                </div>
                
                <div class="interpolation-formula">
                  <h5>插值公式</h5>
                  <div class="formula">
                    <p>v(ω,T) = [v₀²(iωτ)/(1 + iωτ) + v₁²/(1 + iωτ)]^(1/2)</p>
                  </div>
                  <div class="interpolation-explanation">
                    <p>连接两个极限的近似公式</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="experimental-observation">
              <h4>实验观测</h4>
              <div class="observation-content">
                <div class="observation-grid">
                  <div class="observation-card">
                    <h5>🌡️ 温度扫描</h5>
                    <div class="temp-scan-content">
                      <p><strong>低温：</strong>观测到零声</p>
                      <p><strong>中温：</strong>两种模式共存</p>
                      <p><strong>高温：</strong>只有第一声</p>
                    </div>
                  </div>
                  
                  <div class="observation-card">
                    <h5>📊 频率扫描</h5>
                    <div class="freq-scan-content">
                      <p><strong>高频：</strong>零声主导</p>
                      <p><strong>中频：</strong>复杂行为</p>
                      <p><strong>低频：</strong>第一声主导</p>
                    </div>
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
      <h2>🔬 实验验证</h2>
      
      <div class="verification-content">
        <div class="helium-3-experiments">
          <h3>液态³He实验</h3>
          <div class="he3-content">
            <div class="historical-experiments">
              <h4>历史性实验</h4>
              <div class="historical-content">
                <div class="experiment-timeline">
                  <div class="timeline-grid">
                    <div class="timeline-card">
                      <h5>1966年 - Abel等人</h5>
                      <div class="experiment-details">
                        <p><strong>方法：</strong>超声波传播</p>
                        <p><strong>频率：</strong>10-100 MHz</p>
                        <p><strong>结果：</strong>首次观测到零声</p>
                        <p><strong>意义：</strong>验证费米液体理论</p>
                      </div>
                    </div>
                    
                    <div class="timeline-card">
                      <h5>1970年 - Dobbs等人</h5>
                      <div class="experiment-details">
                        <p><strong>方法：</strong>精密声速测量</p>
                        <p><strong>温度：</strong>1-100 mK</p>
                        <p><strong>结果：</strong>v₀/vF = 1.05</p>
                        <p><strong>意义：</strong>精确验证理论预言</p>
                      </div>
                    </div>
                    
                    <div class="timeline-card">
                      <h5>1980年代 - 衰减研究</h5>
                      <div class="experiment-details">
                        <p><strong>方法：</strong>衰减系数测量</p>
                        <p><strong>发现：</strong>α ∝ T²规律</p>
                        <p><strong>结果：</strong>准粒子散射机制</p>
                        <p><strong>意义：</strong>验证微观理论</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="modern-techniques">
              <h4>现代实验技术</h4>
              <div class="techniques-content">
                <div class="technique-grid">
                  <div class="technique-card">
                    <h5>🔊 超声共振</h5>
                    <div class="ultrasonic-content">
                      <p><strong>原理：</strong>腔体共振测量</p>
                      <p><strong>精度：</strong>Δv/v ~ 10⁻⁶</p>
                      <p><strong>优势：</strong>高精度，宽频范围</p>
                    </div>
                  </div>
                  
                  <div class="technique-card">
                    <h5>📡 脉冲回波</h5>
                    <div class="pulse-echo-content">
                      <p><strong>原理：</strong>时间飞行测量</p>
                      <p><strong>精度：</strong>Δt ~ 1 ns</p>
                      <p><strong>优势：</strong>直接测量，简单</p>
                    </div>
                  </div>
                  
                  <div class="technique-card">
                    <h5>🌊 Brillouin散射</h5>
                    <div class="brillouin-content">
                      <p><strong>原理：</strong>光声相互作用</p>
                      <p><strong>精度：</strong>Δω/ω ~ 10⁻⁸</p>
                      <p><strong>优势：</strong>非接触，高分辨</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="other-systems">
          <h3>其他系统</h3>
          <div class="systems-content">
            <div class="system-grid">
              <div class="system-card">
                <h4>🔬 二维电子气</h4>
                <div class="2deg-content">
                  <div class="system-properties">
                    <h5>系统特性</h5>
                    <ul>
                      <li>GaAs/AlGaAs异质结</li>
                      <li>高迁移率：μ > 10⁶ cm²/Vs</li>
                      <li>低温：T < 100 mK</li>
                    </ul>
                  </div>
                  
                  <div class="experimental-results">
                    <h5>实验结果</h5>
                    <ul>
                      <li>等离激元零声模式</li>
                      <li>磁等离激元</li>
                      <li>边缘态激发</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="system-card">
                <h4>⚛️ 冷原子气体</h4>
                <div class="cold-atoms-content">
                  <div class="system-properties">
                    <h5>系统特性</h5>
                    <ul>
                      <li>费米原子：⁶Li, ⁴⁰K</li>
                      <li>可调相互作用</li>
                      <li>超低温：T ~ nK</li>
                    </ul>
                  </div>
                  
                  <div class="experimental-results">
                    <h5>实验结果</h5>
                    <ul>
                      <li>集体振荡模式</li>
                      <li>声速测量</li>
                      <li>阻尼研究</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="system-card">
                <h4>🧲 重费米子系统</h4>
                <div class="heavy-fermion-content">
                  <div class="system-properties">
                    <h5>系统特性</h5>
                    <ul>
                      <li>CeCoIn₅, UPt₃等</li>
                      <li>大有效质量</li>
                      <li>强关联效应</li>
                    </ul>
                  </div>
                  
                  <div class="experimental-results">
                    <h5>实验结果</h5>
                    <ul>
                      <li>修正的零声</li>
                      <li>自旋涨落效应</li>
                      <li>量子临界行为</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论扩展 -->
    <section class="theoretical-extensions">
      <h2>🧮 理论扩展</h2>
      
      <div class="extensions-content">
        <div class="finite-temperature">
          <h3>有限温度效应</h3>
          <div class="temperature-effects">
            <div class="thermal-corrections">
              <h4>热修正</h4>
              <div class="corrections-content">
                <div class="landau-damping">
                  <h5>Landau阻尼</h5>
                  <div class="damping-content">
                    <div class="damping-mechanism">
                      <h6>阻尼机制</h6>
                      <div class="formula">
                        <p>Γ = (π/8)(kBT/εF)²(ω/vFq)</p>
                      </div>
                      <div class="mechanism-explanation">
                        <p>准粒子-准空穴对产生导致的阻尼</p>
                      </div>
                    </div>
                    
                    <div class="temperature-scaling">
                      <h6>温度标度</h6>
                      <div class="formula">
                        <p>Γ ∝ T²</p>
                      </div>
                      <div class="scaling-explanation">
                        <p>费米液体的特征T²行为</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="velocity-renormalization">
                  <h5>速度重整化</h5>
                  <div class="renormalization-content">
                    <div class="formula">
                      <p>v(T) = v₀[1 - (π²/12)(kBT/εF)²]</p>
                    </div>
                    <div class="renormalization-explanation">
                      <p>温度对零声速度的修正</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="anisotropic-systems">
          <h3>各向异性系统</h3>
          <div class="anisotropy-content">
            <div class="fermi-surface-effects">
              <h4>费米面效应</h4>
              <div class="fs-effects-content">
                <div class="angular-dependence">
                  <h5>角度依赖</h5>
                  <div class="angular-content">
                    <div class="formula">
                      <p>v(θ) = vF(θ)[1 + F₀ˢ(θ)/3]</p>
                    </div>
                    <div class="angular-explanation">
                      <p>零声速度的角度依赖性</p>
                    </div>
                  </div>
                </div>
                
                <div class="focusing-effects">
                  <h5>聚焦效应</h5>
                  <div class="focusing-content">
                    <p>费米面曲率导致的声波聚焦：</p>
                    <ul>
                      <li>声波束的聚焦和散焦</li>
                      <li>焦散线的形成</li>
                      <li>强度增强效应</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nonlinear-effects">
          <h3>非线性效应</h3>
          <div class="nonlinear-content">
            <div class="amplitude-dependence">
              <h4>振幅依赖</h4>
              <div class="amplitude-content">
                <div class="nonlinear-velocity">
                  <h5>非线性声速</h5>
                  <div class="formula">
                    <p>v = v₀ + βA²</p>
                  </div>
                  <div class="nonlinear-explanation">
                    <p>其中A是振幅，β是非线性系数</p>
                  </div>
                </div>
                
                <div class="shock-waves">
                  <h5>激波形成</h5>
                  <div class="shock-content">
                    <p>大振幅时的非线性现象：</p>
                    <ul>
                      <li>波形畸变</li>
                      <li>激波形成</li>
                      <li>能量耗散</li>
                    </ul>
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
              <h4>无碰撞动力学</h4>
              <ul>
                <li>ωτ ≫ 1条件下的集体运动</li>
                <li>自洽场中的准粒子运动</li>
                <li>线性响应理论的应用</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>零声模式</h4>
              <ul>
                <li>需要排斥性相互作用F₀ˢ > 0</li>
                <li>速度v₀ > vF</li>
                <li>低温下无阻尼传播</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>实验验证</h4>
              <ul>
                <li>液态³He中的精确观测</li>
                <li>理论与实验的完美符合</li>
                <li>费米液体理论的重要验证</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="physical-insights">
          <h3>🔍 物理洞察</h3>
          <div class="insights-content">
            <p>
              无碰撞Boltzmann方程和零声的研究揭示了费米液体的深层物理：
            </p>
            <div class="insight-list">
              <div class="insight-item">
                <h4>🌊 集体与单粒子的分离</h4>
                <p>在无碰撞区域，集体运动与单粒子激发完全分离</p>
              </div>
              <div class="insight-item">
                <h4>🔄 自洽性的重要性</h4>
                <p>准粒子与自洽场的耦合产生新的集体激发模式</p>
              </div>
              <div class="insight-item">
                <h4>🎯 理论预言的精确性</h4>
                <p>费米液体理论对零声的预言得到实验的精确验证</p>
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
                <li>Pines & Nozières: "The Theory of Quantum Liquids" Vol. I</li>
                <li>Baym & Pethick: "Landau Fermi-Liquid Theory"</li>
                <li>Abrikosov, Gorkov & Dzyaloshinski: "Methods of Quantum Field Theory"</li>
              </ul>
            </div>
            
            <div class="review-articles">
              <h4>重要文献</h4>
              <ul>
                <li>Abel, Anderson & Wheatley: "Propagation of Zero Sound in Liquid ³He" (Phys. Rev. Lett. 1966)</li>
                <li>Dobbs: "Helium Three" (Oxford University Press)</li>
                <li>Vollhardt: "Normal ³He: an almost localized Fermi liquid" (Rev. Mod. Phys. 1984)</li>
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

/* 主要章节样式 */
.collisionless-boltzmann, .zero-sound, .sound-comparison, .experimental-verification, .theoretical-extensions {
  margin-bottom: 40px;
}

.collisionless-boltzmann h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
}

.zero-sound h2 {
  font-size: 2em;
  color: #8e44ad;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #9b59b6;
}

.sound-comparison h2 {
  font-size: 2em;
  color: #27ae60;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #2ecc71;
}

.experimental-verification h2 {
  font-size: 2em;
  color: #17a2b8;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #20c997;
}

.theoretical-extensions h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #c0392b;
}

/* 内容区域样式 */
.equation-content, .zero-sound-content, .comparison-content, .verification-content, .extensions-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.basic-form, .self-consistency, .dispersion-relation, .physical-properties, .comparison-table-section, .transition-region, .helium-3-experiments, .other-systems, .finite-temperature, .anisotropic-systems, .nonlinear-effects {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.basic-form h3, .self-consistency h3, .dispersion-relation h3, .physical-properties h3, .comparison-table-section h3, .transition-region h3, .helium-3-experiments h3, .other-systems h3, .finite-temperature h3, .anisotropic-systems h3, .nonlinear-effects h3 {
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

/* 网格布局 */
.step-grid, .properties-grid, .observation-grid, .timeline-grid, .technique-grid, .system-grid, .points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.step-card, .property-card, .observation-card, .timeline-card, .technique-card, .system-card, .point-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover, .property-card:hover, .observation-card:hover, .timeline-card:hover, .technique-card:hover, .system-card:hover, .point-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.step-card h6, .property-card h4, .observation-card h5, .timeline-card h5, .technique-card h5, .system-card h4, .point-card h4 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.2em;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  list-style: none;
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

.physical-insights {
  margin-top: 30px;
}

.physical-insights h3 {
  font-size: 1.6em;
  margin-bottom: 20px;
  text-align: center;
}

.insights-content p {
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: center;
}

.insight-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.insight-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.insight-item h4 {
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #fff;
}

.insight-item p {
  font-size: 1em;
  opacity: 0.9;
  margin: 0;
}

.learning-resources {
  margin-top: 30px;
}

.learning-resources h3 {
  font-size: 1.6em;
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
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.textbooks h4, .review-articles h4 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #fff;
}

.textbooks ul, .review-articles ul {
  list-style: none;
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
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .key-concepts {
    grid-template-columns: 1fr;
  }
  
  .step-grid, .properties-grid, .observation-grid, .timeline-grid, .technique-grid, .system-grid, .points-grid {
    grid-template-columns: 1fr;
  }
  
  .resources-content {
    grid-template-columns: 1fr;
  }
  
  .formula {
    font-size: 0.9em;
    padding: 10px;
  }
  
  .data-table {
    font-size: 0.8em;
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
    font-size: 0.9em;
  }
  
  .formula {
    font-size: 0.8em;
    padding: 8px;
  }
  
  .step-card, .property-card, .observation-card, .timeline-card, .technique-card, .system-card, .point-card {
    padding: 15px;
  }
  
  .basic-form, .self-consistency, .dispersion-relation, .physical-properties, .comparison-table-section, .transition-region, .helium-3-experiments, .other-systems, .finite-temperature, .anisotropic-systems, .nonlinear-effects {
    padding: 20px;
  }
}
</style>