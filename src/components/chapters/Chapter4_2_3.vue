<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.2.3 Landau参数</h1>
      <p class="chapter-subtitle">费米液体相互作用的量化描述</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          Landau参数是费米液体理论的核心概念，它们量化了准粒子间的相互作用强度，
          并直接关联到可观测的物理量。这些参数不仅决定了系统的稳定性，
          还控制着各种响应函数和输运性质。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>📊 参数定义</h3>
            <p>通过相互作用函数的球谐展开定义</p>
          </div>
          <div class="concept-card">
            <h3>🔬 实验测定</h3>
            <p>从热力学和输运测量中提取参数值</p>
          </div>
          <div class="concept-card">
            <h3>⚖️ 稳定性判据</h3>
            <p>参数值决定系统的各种不稳定性</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Landau参数的定义 -->
    <section class="parameter-definition">
      <h2>📐 Landau参数的定义</h2>
      
      <div class="definition-content">
        <div class="basic-definition">
          <h3>基本定义</h3>
          <div class="definition-box">
            <div class="formula-section">
              <h4>相互作用函数的展开</h4>
              <div class="formula">
                <p>f(p,p') = ∑ₗ Fₗ(|p|,|p'|) Pₗ(cos θ)</p>
              </div>
              <div class="explanation">
                <p>其中θ是动量p和p'之间的夹角，Pₗ是勒让德多项式</p>
              </div>
            </div>
            
            <div class="formula-section">
              <h4>费米面上的Landau参数</h4>
              <div class="formula">
                <p>Fₗˢ'ᵃ = N(0) fₗˢ'ᵃ(εF, εF)</p>
              </div>
              <div class="explanation">
                <p>N(0)是费米面态密度，上标s/a表示自旋对称/反对称</p>
              </div>
            </div>
          </div>
          
          <div class="symmetry-classification">
            <h4>对称性分类</h4>
            <div class="symmetry-grid">
              <div class="symmetry-card">
                <h5>自旋对称 (s)</h5>
                <div class="symmetry-content">
                  <p>f^s(p↑,p'↑) = f^s(p↓,p'↓) = f^s(p↑,p'↓)</p>
                  <ul>
                    <li>不改变自旋的散射</li>
                    <li>库仑相互作用</li>
                    <li>声子交换</li>
                  </ul>
                </div>
              </div>
              
              <div class="symmetry-card">
                <h5>自旋反对称 (a)</h5>
                <div class="symmetry-content">
                  <p>f^a(p↑,p'↑) = f^a(p↓,p'↓) = -f^a(p↑,p'↓)</p>
                  <ul>
                    <li>自旋翻转散射</li>
                    <li>交换相互作用</li>
                    <li>磁性杂质散射</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="angular-momentum-expansion">
          <h3>角动量展开</h3>
          <div class="expansion-content">
            <div class="low-order-terms">
              <h4>低阶项的物理意义</h4>
              <div class="terms-grid">
                <div class="term-card">
                  <h5>l = 0 (s波)</h5>
                  <div class="term-content">
                    <p><strong>F₀ˢ：</strong>密度-密度相互作用</p>
                    <p><strong>F₀ᵃ：</strong>自旋-自旋相互作用</p>
                    <div class="physical-meaning">
                      <h6>物理效应：</h6>
                      <ul>
                        <li>压缩性的修正</li>
                        <li>磁化率的增强</li>
                        <li>相分离和铁磁不稳定性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="term-card">
                  <h5>l = 1 (p波)</h5>
                  <div class="term-content">
                    <p><strong>F₁ˢ：</strong>流-流相互作用</p>
                    <p><strong>F₁ᵃ：</strong>自旋流相互作用</p>
                    <div class="physical-meaning">
                      <h6>物理效应：</h6>
                      <ul>
                        <li>有效质量的增强</li>
                        <li>比热系数的修正</li>
                        <li>p波配对不稳定性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="term-card">
                  <h5>l = 2 (d波)</h5>
                  <div class="term-content">
                    <p><strong>F₂ˢ：</strong>四极相互作用</p>
                    <p><strong>F₂ᵃ：</strong>自旋四极相互作用</p>
                    <div class="physical-meaning">
                      <h6>物理效应：</h6>
                      <ul>
                        <li>费米面变形</li>
                        <li>向列相不稳定性</li>
                        <li>d波超导配对</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="higher-order-terms">
              <h4>高阶项和截断</h4>
              <div class="higher-order-content">
                <div class="truncation-analysis">
                  <h5>截断条件</h5>
                  <p>在实际计算中，通常只保留前几项：</p>
                  <div class="truncation-formula">
                    <p>f(p,p') ≈ F₀ + F₁P₁(cos θ) + F₂P₂(cos θ) + ...</p>
                  </div>
                  <div class="truncation-justification">
                    <ul>
                      <li>高阶项通常较小</li>
                      <li>实验精度的限制</li>
                      <li>计算复杂度的考虑</li>
                    </ul>
                  </div>
                </div>
                
                <div class="convergence-properties">
                  <h5>收敛性质</h5>
                  <div class="convergence-analysis">
                    <div class="convergence-card">
                      <h6>短程相互作用</h6>
                      <p>展开快速收敛，低阶项占主导</p>
                    </div>
                    <div class="convergence-card">
                      <h6>长程相互作用</h6>
                      <p>需要更多项，收敛较慢</p>
                    </div>
                    <div class="convergence-card">
                      <h6>奇点附近</h6>
                      <p>可能需要特殊处理</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 参数的计算方法 -->
    <section class="calculation-methods">
      <h2>🧮 参数的计算方法</h2>
      
      <div class="methods-content">
        <div class="theoretical-calculations">
          <h3>理论计算方法</h3>
          <div class="theoretical-methods">
            <div class="method-card">
              <h4>🔬 微观模型计算</h4>
              <div class="method-content">
                <div class="model-approach">
                  <h5>Hubbard模型</h5>
                  <div class="model-details">
                    <p>对于强关联电子系统：</p>
                    <div class="model-formula">
                      <p>H = -t∑⟨i,j⟩,σ (c†ᵢσcⱼσ + h.c.) + U∑ᵢ nᵢ↑nᵢ↓</p>
                    </div>
                    <div class="parameter-extraction">
                      <h6>参数提取：</h6>
                      <ul>
                        <li>F₀ᵃ ≈ -U·N(0)（局域相互作用）</li>
                        <li>通过RPA或DMFT计算修正</li>
                        <li>考虑动力学效应</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="model-approach">
                  <h5>Jellium模型</h5>
                  <div class="model-details">
                    <p>对于简单金属：</p>
                    <div class="model-formula">
                      <p>V(q) = 4πe²/(εq²)，其中ε是介电常数</p>
                    </div>
                    <div class="parameter-extraction">
                      <h6>RPA结果：</h6>
                      <ul>
                        <li>F₀ˢ = 1/(1 + F₀ˢ) - 1</li>
                        <li>包含屏蔽效应</li>
                        <li>密度依赖的修正</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="method-card">
              <h4>💻 第一性原理计算</h4>
              <div class="method-content">
                <div class="dft-approach">
                  <h5>密度泛函理论</h5>
                  <div class="dft-details">
                    <p>现代计算方法：</p>
                    <div class="dft-steps">
                      <div class="step-card">
                        <h6>步骤1：基态计算</h6>
                        <p>获得Kohn-Sham本征态和费米面</p>
                      </div>
                      <div class="step-card">
                        <h6>步骤2：响应函数</h6>
                        <p>计算密度-密度响应函数χ(q,ω)</p>
                      </div>
                      <div class="step-card">
                        <h6>步骤3：参数提取</h6>
                        <p>从χ(q→0,ω→0)提取Landau参数</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="gw-approach">
                  <h5>GW近似</h5>
                  <div class="gw-details">
                    <p>包含动力学屏蔽效应：</p>
                    <div class="gw-formula">
                      <p>Σ(k,ω) = i∫ G(k,ω+ω')W(k-k',ω')d³k'dω'</p>
                    </div>
                    <div class="gw-advantages">
                      <ul>
                        <li>更准确的准粒子性质</li>
                        <li>频率依赖的自能</li>
                        <li>动力学关联效应</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-determination">
          <h3>实验测定方法</h3>
          <div class="experimental-methods">
            <div class="thermodynamic-measurements">
              <h4>🌡️ 热力学测量</h4>
              <div class="thermo-content">
                <div class="measurement-grid">
                  <div class="measurement-card">
                    <h5>比热测量</h5>
                    <div class="measurement-details">
                      <p><strong>关系式：</strong></p>
                      <div class="relation-formula">
                        <p>γ = (π²/3)k²ᵦN(0)(1 + F₁ˢ)</p>
                      </div>
                      <p><strong>提取方法：</strong></p>
                      <ul>
                        <li>测量低温比热C = γT</li>
                        <li>计算自由电子γ₀</li>
                        <li>F₁ˢ = γ/γ₀ - 1</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="measurement-card">
                    <h5>磁化率测量</h5>
                    <div class="measurement-details">
                      <p><strong>关系式：</strong></p>
                      <div class="relation-formula">
                        <p>χ = χ₀/(1 + F₀ᵃ)</p>
                      </div>
                      <p><strong>提取方法：</strong></p>
                      <ul>
                        <li>测量Pauli磁化率χ</li>
                        <li>计算自由电子χ₀</li>
                        <li>F₀ᵃ = χ₀/χ - 1</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="measurement-card">
                    <h5>压缩性测量</h5>
                    <div class="measurement-details">
                      <p><strong>关系式：</strong></p>
                      <div class="relation-formula">
                        <p>κ = κ₀/(1 + F₀ˢ)</p>
                      </div>
                      <p><strong>提取方法：</strong></p>
                      <ul>
                        <li>测量等温压缩性κ</li>
                        <li>计算自由电子κ₀</li>
                        <li>F₀ˢ = κ₀/κ - 1</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="transport-measurements">
              <h4>⚡ 输运测量</h4>
              <div class="transport-content">
                <div class="transport-grid">
                  <div class="transport-card">
                    <h5>电阻率测量</h5>
                    <div class="transport-details">
                      <p><strong>温度依赖：</strong></p>
                      <div class="temp-formula">
                        <p>ρ(T) = ρ₀ + AT²</p>
                      </div>
                      <p><strong>参数关系：</strong></p>
                      <ul>
                        <li>A系数与F₁ˢ相关</li>
                        <li>反映准粒子散射</li>
                        <li>费米液体行为的验证</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="transport-card">
                    <h5>霍尔效应</h5>
                    <div class="transport-details">
                      <p><strong>霍尔系数：</strong></p>
                      <div class="hall-formula">
                        <p>RH = 1/(nec)(1 + F₁ˢ)/(1 + F₀ˢ)</p>
                      </div>
                      <p><strong>信息提取：</strong></p>
                      <ul>
                        <li>载流子密度修正</li>
                        <li>多个参数的组合</li>
                        <li>费米面几何的影响</li>
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

    <!-- 典型材料的Landau参数 -->
    <section class="material-parameters">
      <h2>🧪 典型材料的Landau参数</h2>
      
      <div class="materials-content">
        <div class="liquid-helium">
          <h3>液态³He</h3>
          <div class="helium-content">
            <div class="parameter-table">
              <h4>实验测定的参数值</h4>
              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>参数</th>
                      <th>数值</th>
                      <th>测量方法</th>
                      <th>物理意义</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>F₀ˢ</td>
                      <td>+9.4</td>
                      <td>压缩性</td>
                      <td>强排斥相互作用</td>
                    </tr>
                    <tr>
                      <td>F₀ᵃ</td>
                      <td>-0.75</td>
                      <td>磁化率</td>
                      <td>接近铁磁不稳定</td>
                    </tr>
                    <tr>
                      <td>F₁ˢ</td>
                      <td>+6.0</td>
                      <td>比热</td>
                      <td>有效质量增强</td>
                    </tr>
                    <tr>
                      <td>F₁ᵃ</td>
                      <td>+0.7</td>
                      <td>自旋扩散</td>
                      <td>自旋输运修正</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="helium-analysis">
              <h4>物理分析</h4>
              <div class="analysis-grid">
                <div class="analysis-card">
                  <h5>强相互作用特征</h5>
                  <ul>
                    <li>所有参数都相当大</li>
                    <li>相互作用能与动能可比</li>
                    <li>非微扰性质明显</li>
                  </ul>
                </div>
                <div class="analysis-card">
                  <h5>稳定性分析</h5>
                  <ul>
                    <li>F₀ᵃ接近-1，近铁磁边界</li>
                    <li>所有参数满足稳定性条件</li>
                    <li>量子涨落抑制相变</li>
                  </ul>
                </div>
                <div class="analysis-card">
                  <h5>实验验证</h5>
                  <ul>
                    <li>费米液体理论的完美验证</li>
                    <li>所有预测与实验一致</li>
                    <li>理论框架的可靠性</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="simple-metals">
          <h3>简单金属</h3>
          <div class="metals-content">
            <div class="metals-table">
              <h4>碱金属的Landau参数</h4>
              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>金属</th>
                      <th>F₀ˢ</th>
                      <th>F₀ᵃ</th>
                      <th>F₁ˢ</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Li</td>
                      <td>+0.2</td>
                      <td>-0.1</td>
                      <td>+0.3</td>
                      <td>弱相互作用</td>
                    </tr>
                    <tr>
                      <td>Na</td>
                      <td>+0.4</td>
                      <td>-0.2</td>
                      <td>+0.5</td>
                      <td>典型简单金属</td>
                    </tr>
                    <tr>
                      <td>K</td>
                      <td>+0.6</td>
                      <td>-0.3</td>
                      <td>+0.7</td>
                      <td>相互作用增强</td>
                    </tr>
                    <tr>
                      <td>Cs</td>
                      <td>+1.0</td>
                      <td>-0.4</td>
                      <td>+1.2</td>
                      <td>最强相互作用</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="metals-trends">
              <h4>趋势分析</h4>
              <div class="trends-content">
                <div class="trend-card">
                  <h5>📈 随原子序数的变化</h5>
                  <div class="trend-details">
                    <ul>
                      <li>参数绝对值随Z增加而增大</li>
                      <li>反映电子密度降低的影响</li>
                      <li>屏蔽效应的减弱</li>
                    </ul>
                  </div>
                </div>
                
                <div class="trend-card">
                  <h5>🔬 微观起源</h5>
                  <div class="trend-details">
                    <ul>
                      <li>主要来自库仑相互作用</li>
                      <li>交换关联效应的贡献</li>
                      <li>晶格效应相对较小</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="heavy-fermion-systems">
          <h3>重费米子系统</h3>
          <div class="heavy-fermion-content">
            <div class="hf-characteristics">
              <h4>特征参数</h4>
              <div class="hf-grid">
                <div class="hf-card">
                  <h5>CeCu₆</h5>
                  <div class="hf-data">
                    <p><strong>F₁ˢ ≈ +200</strong></p>
                    <p>巨大的有效质量增强</p>
                    <ul>
                      <li>γ ≈ 1.6 J/mol·K²</li>
                      <li>m*/m ≈ 200</li>
                      <li>Kondo温度 TK ≈ 5K</li>
                    </ul>
                  </div>
                </div>
                
                <div class="hf-card">
                  <h5>UPt₃</h5>
                  <div class="hf-data">
                    <p><strong>F₁ˢ ≈ +150</strong></p>
                    <p>非常规超导体</p>
                    <ul>
                      <li>γ ≈ 0.45 J/mol·K²</li>
                      <li>多重超导相</li>
                      <li>p波配对可能性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="hf-card">
                  <h5>CeCoIn₅</h5>
                  <div class="hf-data">
                    <p><strong>F₀ᵃ ≈ -0.9</strong></p>
                    <p>接近量子临界点</p>
                    <ul>
                      <li>反铁磁量子临界点</li>
                      <li>非费米液体行为</li>
                      <li>d波超导</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="hf-physics">
              <h4>物理机制</h4>
              <div class="physics-analysis">
                <div class="mechanism-card">
                  <h5>🔄 Kondo效应</h5>
                  <div class="mechanism-content">
                    <p>局域f电子与传导电子的杂化：</p>
                    <ul>
                      <li>形成重准粒子</li>
                      <li>相干温度T*的出现</li>
                      <li>巨大的有效质量</li>
                    </ul>
                  </div>
                </div>
                
                <div class="mechanism-card">
                  <h5>⚖️ 竞争相互作用</h5>
                  <div class="mechanism-content">
                    <p>RKKY相互作用与Kondo效应的竞争：</p>
                    <ul>
                      <li>量子临界点的形成</li>
                      <li>非费米液体行为</li>
                      <li>奇异金属相</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 参数间的关系和约束 -->
    <section class="parameter-relations">
      <h2>🔗 参数间的关系和约束</h2>
      
      <div class="relations-content">
        <div class="sum-rules">
          <h3>求和规则</h3>
          <div class="sum-rules-content">
            <div class="compressibility-sum-rule">
              <h4>压缩性求和规则</h4>
              <div class="sum-rule-box">
                <div class="rule-formula">
                  <p>1 + F₀ˢ = (κ₀/κ) = (∂²E/∂n²)/(∂²E₀/∂n²)</p>
                </div>
                <div class="rule-explanation">
                  <p>连接微观相互作用与宏观压缩性</p>
                  <ul>
                    <li>E是总能量，E₀是动能</li>
                    <li>n是粒子密度</li>
                    <li>κ是等温压缩性</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="effective-mass-sum-rule">
              <h4>有效质量求和规则</h4>
              <div class="sum-rule-box">
                <div class="rule-formula">
                  <p>m*/m = 1 + F₁ˢ = (∂ε*/∂p)/(∂ε₀/∂p)|pF</p>
                </div>
                <div class="rule-explanation">
                  <p>准粒子有效质量的增强</p>
                  <ul>
                    <li>ε*是准粒子能量</li>
                    <li>ε₀是自由粒子能量</li>
                    <li>在费米面处评估</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ward-identities">
          <h3>Ward恒等式</h3>
          <div class="ward-content">
            <div class="gauge-invariance">
              <h4>规范不变性约束</h4>
              <div class="gauge-constraints">
                <div class="constraint-card">
                  <h5>电荷守恒</h5>
                  <div class="constraint-content">
                    <p>电流-电流关联函数的约束：</p>
                    <div class="constraint-formula">
                      <p>lim(q→0) Π(q,ω=0) = -N(0)/(1+F₀ˢ)</p>
                    </div>
                  </div>
                </div>
                
                <div class="constraint-card">
                  <h5>动量守恒</h5>
                  <div class="constraint-content">
                    <p>应力张量的约束关系：</p>
                    <div class="constraint-formula">
                      <p>∑ₗ (2l+1)Fₗˢ = 常数</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="thermodynamic-consistency">
              <h4>热力学一致性</h4>
              <div class="consistency-requirements">
                <div class="requirement-card">
                  <h5>Maxwell关系</h5>
                  <p>热力学势的混合偏导数相等</p>
                </div>
                <div class="requirement-card">
                  <h5>涨落-耗散定理</h5>
                  <p>响应函数与关联函数的关系</p>
                </div>
                <div class="requirement-card">
                  <h5>Kramers-Kronig关系</h5>
                  <p>响应函数实部与虚部的关系</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="stability-constraints">
          <h3>稳定性约束</h3>
          <div class="stability-content">
            <div class="pomeranchuk-conditions">
              <h4>Pomeranchuk稳定性条件</h4>
              <div class="conditions-matrix">
                <div class="condition-row">
                  <div class="condition-cell">
                    <h5>l = 0</h5>
                    <p>F₀ˢ > -1, F₀ᵃ > -1</p>
                  </div>
                  <div class="condition-cell">
                    <h5>l = 1</h5>
                    <p>F₁ˢ > -1, F₁ᵃ > -1</p>
                  </div>
                </div>
                <div class="condition-row">
                  <div class="condition-cell">
                    <h5>l = 2</h5>
                    <p>F₂ˢ > -1, F₂ᵃ > -1</p>
                  </div>
                  <div class="condition-cell">
                    <h5>l ≥ 3</h5>
                    <p>Fₗˢ'ᵃ > -1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="instability-phase-diagram">
              <h4>不稳定性相图</h4>
              <div class="phase-diagram-content">
                <div class="instability-regions">
                  <div class="region-card">
                    <h5>铁磁区域</h5>
                    <p>F₀ᵃ < -1</p>
                    <ul>
                      <li>自发磁化</li>
                      <li>Stoner不稳定性</li>
                      <li>巡游铁磁性</li>
                    </ul>
                  </div>
                  
                  <div class="region-card">
                    <h5>向列相区域</h5>
                    <p>F₂ᵃ < -1</p>
                    <ul>
                      <li>费米面变形</li>
                      <li>旋转对称破缺</li>
                      <li>电子向列相</li>
                    </ul>
                  </div>
                  
                  <div class="region-card">
                    <h5>p波超流区域</h5>
                    <p>F₁ᵃ < -1</p>
                    <ul>
                      <li>三重态配对</li>
                      <li>自旋三重态</li>
                      <li>拓扑超导</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展和应用 -->
    <section class="modern-applications">
      <h2>🚀 现代发展和应用</h2>
      
      <div class="applications-content">
        <div class="computational-advances">
          <h3>计算方法的进展</h3>
          <div class="computational-methods">
            <div class="method-card">
              <h4>💻 机器学习方法</h4>
              <div class="ml-content">
                <div class="ml-approach">
                  <h5>神经网络拟合</h5>
                  <ul>
                    <li>从实验数据直接提取参数</li>
                    <li>处理复杂的多参数拟合</li>
                    <li>发现隐藏的参数关联</li>
                  </ul>
                </div>
                <div class="ml-approach">
                  <h5>深度学习预测</h5>
                  <ul>
                    <li>基于材料结构预测参数</li>
                    <li>加速材料设计过程</li>
                    <li>发现新的费米液体材料</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="method-card">
              <h4>🔬 高精度计算</h4>
              <div class="precision-content">
                <div class="precision-method">
                  <h5>量子蒙特卡罗</h5>
                  <ul>
                    <li>无偏的多体计算</li>
                    <li>处理强关联效应</li>
                    <li>验证费米液体理论</li>
                  </ul>
                </div>
                <div class="precision-method">
                  <h5>DMFT+DFT</h5>
                  <ul>
                    <li>结合第一性原理与多体理论</li>
                    <li>材料特异性的参数</li>
                    <li>预测新材料性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="emerging-applications">
          <h3>新兴应用领域</h3>
          <div class="emerging-content">
            <div class="application-grid">
              <div class="app-card">
                <h4>🌟 拓扑材料</h4>
                <div class="app-content">
                  <h5>拓扑费米液体</h5>
                  <ul>
                    <li>表面态的费米液体性质</li>
                    <li>拓扑保护的参数</li>
                    <li>新型量子器件应用</li>
                  </ul>
                </div>
              </div>
              
              <div class="app-card">
                <h4>🔋 能源材料</h4>
                <div class="app-content">
                  <h5>热电材料设计</h5>
                  <ul>
                    <li>优化电子输运性质</li>
                    <li>提高热电转换效率</li>
                    <li>理解载流子散射机制</li>
                  </ul>
                </div>
              </div>
              
              <div class="app-card">
                <h4>🧠 量子计算</h4>
                <div class="app-content">
                  <h5>量子比特材料</h5>
                  <ul>
                    <li>低噪声费米液体</li>
                    <li>相干时间的优化</li>
                    <li>拓扑量子比特</li>
                  </ul>
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
              <h4>理论框架</h4>
              <ul>
                <li>Landau参数量化准粒子相互作用</li>
                <li>球谐展开提供系统分类</li>
                <li>连接微观相互作用与宏观性质</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>计算方法</h4>
              <ul>
                <li>理论计算：微观模型、第一性原理</li>
                <li>实验测定：热力学、输运测量</li>
                <li>现代方法：机器学习、高精度计算</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>物理意义</h4>
              <ul>
                <li>决定系统稳定性和相变</li>
                <li>控制响应函数和输运性质</li>
                <li>指导新材料设计和应用</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-outlook">
          <h3>🔮 未来展望</h3>
          <div class="outlook-content">
            <p>
              Landau参数的研究将继续在凝聚态物理中发挥重要作用，
              特别是在新材料发现、量子技术应用和理论方法发展方面。
            </p>
            <div class="outlook-directions">
              <div class="direction-item">
                <h4>🔬 精密测量</h4>
                <p>发展更精确的实验技术，测定更多材料的完整参数集</p>
              </div>
              <div class="direction-item">
                <h4>🧮 理论发展</h4>
                <p>扩展到非费米液体、强关联系统和拓扑相</p>
              </div>
              <div class="direction-item">
                <h4>💡 技术应用</h4>
                <p>指导量子材料设计和新型电子器件开发</p>
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

.parameter-definition {
  background: #f0fff4;
}

.definition-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.basic-definition,
.angular-momentum-expansion {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.basic-definition h3,
.angular-momentum-expansion h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.definition-box {
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
  margin-bottom: 1rem;
}

.formula p {
  margin: 0;
  color: #2d3748;
}

.explanation p {
  color: #4a5568;
  font-style: italic;
  margin: 0;
}

.symmetry-classification h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.symmetry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.symmetry-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.symmetry-card h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.symmetry-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.symmetry-content ul {
  list-style: none;
  padding: 0;
}

.symmetry-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.symmetry-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.expansion-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.low-order-terms,
.higher-order-terms {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.low-order-terms h4,
.higher-order-terms h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.term-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #667eea;
}

.term-card h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.term-content p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  border: 1px solid #e2e8f0;
}

.physical-meaning h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.physical-meaning ul {
  list-style: none;
  padding: 0;
}

.physical-meaning li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.physical-meaning li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.higher-order-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.truncation-analysis,
.convergence-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.truncation-analysis h5,
.convergence-properties h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.truncation-analysis p,
.convergence-properties p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.truncation-formula {
  background: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.truncation-formula p {
  font-family: 'Courier New', monospace;
  margin: 0;
  color: #2d3748;
}

.truncation-justification ul {
  list-style: none;
  padding: 0;
}

.truncation-justification li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.truncation-justification li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.convergence-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.convergence-card {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.convergence-card h6 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.convergence-card p {
  color: #4a5568;
  font-size: 0.85rem;
  margin: 0;
}

.calculation-methods {
  background: #f0f9ff;
}

.methods-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theoretical-calculations,
.experimental-determination {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.theoretical-calculations h3,
.experimental-determination h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.theoretical-methods,
.experimental-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.method-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.method-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.model-approach,
.dft-approach,
.gw-approach {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.model-approach h5,
.dft-approach h5,
.gw-approach h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.model-details p,
.dft-details p,
.gw-details p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.model-formula,
.dft-steps,
.gw-formula {
  background: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
}

.model-formula p,
.gw-formula p {
  font-family: 'Courier New', monospace;
  text-align: center;
  margin: 0;
  color: #2d3748;
}

.parameter-extraction h6 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.parameter-extraction ul,
.gw-advantages ul {
  list-style: none;
  padding: 0;
}

.parameter-extraction li,
.gw-advantages li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.parameter-extraction li::before,
.gw-advantages li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.dft-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-left: 3px solid #667eea;
}

.step-card h6 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.step-card p {
  color: #4a5568;
  font-size: 0.85rem;
  margin: 0;
}

.thermodynamic-measurements,
.transport-measurements {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.thermodynamic-measurements h4,
.transport-measurements h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.thermo-content,
.transport-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.measurement-grid,
.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.measurement-card,
.transport-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.measurement-card h5,
.transport-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.measurement-details,
.transport-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.measurement-details p,
.transport-details p {
  color: #4a5568;
  margin: 0;
}

.relation-formula,
.temp-formula,
.hall-formula {
  background: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.relation-formula p,
.temp-formula p,
.hall-formula p {
  font-family: 'Courier New', monospace;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.measurement-details ul,
.transport-details ul {
  list-style: none;
  padding: 0;
}

.measurement-details li,
.transport-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.measurement-details li::before,
.transport-details li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.material-parameters {
  background: #fef5e7;
}

.materials-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.liquid-helium,
.simple-metals,
.heavy-fermion-systems {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.liquid-helium h3,
.simple-metals h3,
.heavy-fermion-systems h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.helium-content,
.metals-content,
.heavy-fermion-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.parameter-table,
.metals-table {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-table h4,
.metals-table h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.data-table td {
  color: #4a5568;
  font-size: 0.9rem;
}

.data-table tr:hover {
  background: #f8f9fa;
}

.helium-analysis,
.metals-trends {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.helium-analysis h4,
.metals-trends h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.analysis-grid,
.trends-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.analysis-card,
.trend-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.analysis-card h5,
.trend-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.analysis-card ul,
.trend-card ul {
  list-style: none;
  padding: 0;
}

.analysis-card li,
.trend-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.analysis-card li::before,
.trend-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.trend-details ul {
  list-style: none;
  padding: 0;
}

.trend-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.trend-details li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.hf-characteristics {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hf-characteristics h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.hf-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hf-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.hf-data p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
  color: #2d3748;
  font-weight: bold;
}

.hf-data ul {
  list-style: none;
  padding: 0;
}

.hf-data li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.hf-data li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.hf-physics {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hf-physics h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.physics-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
}

.mechanism-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mechanism-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mechanism-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.mechanism-content ul {
  list-style: none;
  padding: 0;
}

.mechanism-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.mechanism-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.parameter-relations {
  background: #f0f4f8;
}

.relations-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sum-rules,
.ward-identities,
.stability-constraints {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.sum-rules h3,
.ward-identities h3,
.stability-constraints h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.sum-rules-content,
.ward-content,
.stability-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.compressibility-sum-rule,
.effective-mass-sum-rule {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.compressibility-sum-rule h4,
.effective-mass-sum-rule h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.sum-rule-box {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.rule-formula {
  background: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.rule-formula p {
  font-family: 'Courier New', monospace;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.rule-explanation p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.rule-explanation ul {
  list-style: none;
  padding: 0;
}

.rule-explanation li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.rule-explanation li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.gauge-invariance,
.thermodynamic-consistency {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.gauge-invariance h4,
.thermodynamic-consistency h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.gauge-constraints,
.consistency-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.constraint-card,
.requirement-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.constraint-card h5,
.requirement-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.constraint-content p,
.requirement-card p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.constraint-formula {
  background: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.constraint-formula p {
  font-family: 'Courier New', monospace;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.pomeranchuk-conditions {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.pomeranchuk-conditions h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.conditions-matrix {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.condition-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.condition-cell {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.condition-cell h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.condition-cell p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
  border: 1px solid #e2e8f0;
}

.instability-phase-diagram {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.instability-phase-diagram h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phase-diagram-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.instability-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.region-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.region-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.region-card p {
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #2d3748;
  font-weight: bold;
  border: 1px solid #e2e8f0;
}

.region-card ul {
  list-style: none;
  padding: 0;
}

.region-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.region-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-applications {
  background: #f7fafc;
}

.applications-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.computational-advances,
.emerging-applications {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.computational-advances h3,
.emerging-applications h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.computational-methods,
.emerging-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ml-content,
.precision-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-approach,
.precision-method {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.ml-approach h5,
.precision-method h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.ml-approach ul,
.precision-method ul {
  list-style: none;
  padding: 0;
}

.ml-approach li,
.precision-method li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.ml-approach li::before,
.precision-method li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.app-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.app-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app-content {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.app-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.app-content ul {
  list-style: none;
  padding: 0;
}

.app-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.app-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #e6fffa 0%, #f0fff4 100%);
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.key-points,
.future-outlook {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.key-points h3,
.future-outlook h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.point-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.point-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.point-card ul {
  list-style: none;
  padding: 0;
}

.point-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.point-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

.outlook-content p {
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: justify;
  font-size: 1.1rem;
}

.outlook-directions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.direction-item {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.direction-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.direction-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
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
  .symmetry-grid,
  .terms-grid,
  .measurement-grid,
  .transport-grid,
  .analysis-grid,
  .trends-content,
  .hf-grid,
  .physics-analysis,
  .gauge-constraints,
  .consistency-requirements,
  .condition-row,
  .instability-regions,
  .application-grid,
  .points-grid,
  .outlook-directions {
    grid-template-columns: 1fr;
  }
  
  .table-container {
    font-size: 0.8rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .chapter-content {
    padding: 0.5rem;
  }
  
  .chapter-title {
    font-size: 1.5rem;
  }
  
  section {
    padding: 1rem;
  }
  
  .formula,
  .rule-formula,
  .constraint-formula {
    font-size: 0.9rem;
  }
}
</style>