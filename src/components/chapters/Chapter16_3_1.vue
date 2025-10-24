<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.3.1 t-J模型的束缚子表示</h1>
      <p class="chapter-subtitle">从Hubbard模型到t-J模型：强关联电子系统的有效理论</p>
    </header>

    <section class="content-section">
      <h2>🎯 从Hubbard到t-J：理论推导</h2>
      
      <div class="derivation-container">
        <h3>Hubbard模型的回顾</h3>
        <div class="mathematical-content">
          <h4>原始Hubbard哈密顿量：</h4>
          <katex-element expression="H_{Hubbard} = -t \sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + h.c.) + U \sum_i n_{i\uparrow} n_{i\downarrow}"></katex-element>
          
          <div class="parameter-explanation">
            <h4>参数意义：</h4>
            <div class="parameter-grid">
              <div class="parameter-item">
                <h5>跳跃积分 t</h5>
                <p>电子在相邻格点间的跳跃振幅</p>
                <p>决定动能尺度</p>
              </div>
              
              <div class="parameter-item">
                <h5>库仑排斥 U</h5>
                <p>同一格点上的电子-电子相互作用</p>
                <p>决定关联强度</p>
              </div>
              
              <div class="parameter-item">
                <h5>强关联极限</h5>
                <p>U >> t 的物理情况</p>
                <p>双占据被强烈抑制</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="derivation-container">
        <h3>强关联极限的处理</h3>
        <div class="mathematical-content">
          <h4>投影算符方法：</h4>
          <katex-element expression="P = \prod_i (1 - n_{i\uparrow} n_{i\downarrow})"></katex-element>
          <p>消除双占据态的投影算符</p>
          
          <h4>有效哈密顿量：</h4>
          <katex-element expression="H_{eff} = P H_{Hubbard} P"></katex-element>
          
          <div class="perturbation-analysis">
            <h4>微扰展开（U >> t）：</h4>
            <div class="order-analysis">
              <div class="order-item">
                <h5>零阶项（O(1)）：</h5>
                <katex-element expression="H^{(0)} = U \sum_i n_{i\uparrow} n_{i\downarrow}"></katex-element>
                <p>双占据能量惩罚</p>
              </div>
              
              <div class="order-item">
                <h5>一阶项（O(t)）：</h5>
                <katex-element expression="H^{(1)} = 0"></katex-element>
                <p>投影后直接跳跃被禁止</p>
              </div>
              
              <div class="order-item">
                <h5>二阶项（O(t²/U)）：</h5>
                <katex-element expression="H^{(2)} = -\frac{t^2}{U} \sum_{\langle i,j \rangle} P_{ij}"></katex-element>
                <p>虚拟跳跃产生的有效相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔬 t-J模型的推导</h2>
      
      <div class="tj-derivation">
        <h3>有效相互作用的计算</h3>
        <div class="mathematical-content">
          <h4>虚拟过程分析：</h4>
          <div class="virtual-process-grid">
            <div class="process-card">
              <h5>🔄 电子跳跃过程</h5>
              <div class="process-steps">
                <div class="step">
                  <span class="step-number">1</span>
                  <p>电子从格点i跳到格点j</p>
                  <p>能量代价：+U（产生双占据）</p>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <p>另一个电子从j跳回i</p>
                  <p>能量收益：-U（消除双占据）</p>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <p>净效果：有效相互作用</p>
                  <p>强度：-t²/U</p>
                </div>
              </div>
            </div>

            <div class="process-card">
              <h5>🎯 自旋交换过程</h5>
              <div class="process-steps">
                <div class="step">
                  <span class="step-number">1</span>
                  <p>相邻格点自旋反平行</p>
                  <p>初态：|↑⟩ᵢ|↓⟩ⱼ</p>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <p>虚拟跳跃交换自旋</p>
                  <p>中间态：双占据</p>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <p>最终态：|↓⟩ᵢ|↑⟩ⱼ</p>
                  <p>自旋交换完成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tj-derivation">
        <h3>t-J模型哈密顿量</h3>
        <div class="mathematical-content">
          <h4>最终形式：</h4>
          <katex-element expression="H_{t-J} = -t \sum_{\langle i,j \rangle, \sigma} \tilde{c}_{i\sigma}^\dagger \tilde{c}_{j\sigma} + J \sum_{\langle i,j \rangle} \left( \vec{S}_i \cdot \vec{S}_j - \frac{1}{4} n_i n_j \right)"></katex-element>
          
          <div class="term-explanation">
            <h4>各项物理意义：</h4>
            <div class="term-grid">
              <div class="term-item">
                <h5>🏃 动能项</h5>
                <katex-element expression="-t \sum_{\langle i,j \rangle, \sigma} \tilde{c}_{i\sigma}^\dagger \tilde{c}_{j\sigma}"></katex-element>
                <p>投影后的电子跳跃</p>
                <p>禁止双占据的约束跳跃</p>
              </div>
              
              <div class="term-item">
                <h5>🔄 交换项</h5>
                <katex-element expression="J \sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j"></katex-element>
                <p>Heisenberg交换相互作用</p>
                <p>J = 4t²/U > 0（反铁磁）</p>
              </div>
              
              <div class="term-item">
                <h5>⚖️ 密度项</h5>
                <katex-element expression="-\frac{J}{4} \sum_{\langle i,j \rangle} n_i n_j"></katex-element>
                <p>密度-密度相互作用</p>
                <p>来自交换项的修正</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🧬 束缚子表示的引入</h2>
      
      <div class="slave-representation">
        <h3>束缚子分解方案</h3>
        <div class="mathematical-content">
          <h4>电子算符的分解：</h4>
          <katex-element expression="\tilde{c}_{i\sigma} = f_{i\sigma} b_i^\dagger"></katex-element>
          
          <div class="decomposition-explanation">
            <h4>分解的物理图像：</h4>
            <div class="physics-grid">
              <div class="physics-item">
                <div class="physics-icon">🔬</div>
                <h5>费米子 fᵢσ</h5>
                <p>携带电子的自旋和统计性质</p>
                <p>描述电子的"内禀"量子数</p>
                <p>满足反对易关系</p>
              </div>
              
              <div class="physics-item">
                <div class="physics-icon">🎯</div>
                <h5>玻色子 bᵢ</h5>
                <p>描述空穴的产生和湮灭</p>
                <p>控制电子的存在与否</p>
                <p>满足对易关系</p>
              </div>
              
              <div class="physics-item">
                <div class="physics-icon">⚖️</div>
                <h5>约束条件</h5>
                <p>每个格点最多一个电子</p>
                <katex-element expression="\sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i = 1"></katex-element>
                <p>保持物理希尔伯特空间</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slave-representation">
        <h3>约束条件的实现</h3>
        <div class="mathematical-content">
          <h4>局域约束：</h4>
          <katex-element expression="Q_i = \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i - 1 = 0"></katex-element>
          
          <div class="constraint-methods">
            <h4>约束实现方法：</h4>
            <div class="method-comparison">
              <div class="method-card">
                <h5>🎭 拉格朗日乘子法</h5>
                <div class="method-content">
                  <katex-element expression="H_{total} = H_{t-J} + \sum_i \lambda_i Q_i"></katex-element>
                  <div class="method-pros-cons">
                    <div class="pros">
                      <h6>优点：</h6>
                      <ul>
                        <li>严格满足约束</li>
                        <li>理论上精确</li>
                        <li>适合解析计算</li>
                      </ul>
                    </div>
                    <div class="cons">
                      <h6>缺点：</h6>
                      <ul>
                        <li>引入额外变量λᵢ</li>
                        <li>计算复杂度增加</li>
                        <li>数值实现困难</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="method-card">
                <h5>🌊 平均场近似</h5>
                <div class="method-content">
                  <katex-element expression="\langle Q_i \rangle = 0 \Rightarrow \langle \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} \rangle + \langle b_i^\dagger b_i \rangle = 1"></katex-element>
                  <div class="method-pros-cons">
                    <div class="pros">
                      <h6>优点：</h6>
                      <ul>
                        <li>计算相对简单</li>
                        <li>物理图像清晰</li>
                        <li>便于数值计算</li>
                      </ul>
                    </div>
                    <div class="cons">
                      <h6>缺点：</h6>
                      <ul>
                        <li>忽略量子涨落</li>
                        <li>近似程度未知</li>
                        <li>可能遗漏重要物理</li>
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

    <section class="content-section">
      <h2>🔄 t-J模型的束缚子表示</h2>
      
      <div class="slave-tj-model">
        <h3>哈密顿量的重写</h3>
        <div class="mathematical-content">
          <h4>动能项的变换：</h4>
          <katex-element expression="H_t = -t \sum_{\langle i,j \rangle, \sigma} f_{i\sigma}^\dagger b_i f_{j\sigma} b_j^\dagger"></katex-element>
          
          <div class="kinetic-analysis">
            <h4>动能项的物理解释：</h4>
            <div class="interpretation-grid">
              <div class="interpretation-item">
                <h5>🎯 跳跃过程</h5>
                <p>电子从格点j跳到格点i</p>
                <p>需要格点i为空（bᵢ存在）</p>
                <p>需要格点j有电子（bⱼ†作用）</p>
              </div>
              
              <div class="interpretation-item">
                <h5>🔄 空穴运动</h5>
                <p>等价于空穴的反向运动</p>
                <p>空穴从i跳到j</p>
                <p>保持总粒子数守恒</p>
              </div>
              
              <div class="interpretation-item">
                <h5>⚖️ 约束保持</h5>
                <p>跳跃过程自动满足约束</p>
                <p>不产生双占据态</p>
                <p>保持单占据子空间</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slave-tj-model">
        <h3>交换项的变换</h3>
        <div class="mathematical-content">
          <h4>自旋算符表示：</h4>
          <katex-element expression="\vec{S}_i = \frac{1}{2} \sum_{\sigma, \sigma'} f_{i\sigma}^\dagger \vec{\tau}_{\sigma\sigma'} f_{i\sigma'}"></katex-element>
          <p>其中 τ⃗ 是Pauli矩阵</p>
          
          <h4>交换项重写：</h4>
          <katex-element expression="H_J = \frac{J}{4} \sum_{\langle i,j \rangle} \sum_{\sigma,\sigma',\tau,\tau'} f_{i\sigma}^\dagger f_{i\sigma'} f_{j\tau}^\dagger f_{j\tau'} (\vec{\tau}_{\sigma\sigma'} \cdot \vec{\tau}_{\tau\tau'})"></katex-element>
          
          <div class="exchange-components">
            <h4>交换项的分量：</h4>
            <div class="component-analysis">
              <div class="component-item">
                <h5>🔄 Sᶻ-Sᶻ 项</h5>
                <katex-element expression="S_i^z S_j^z = \frac{1}{4}(n_{i\uparrow} - n_{i\downarrow})(n_{j\uparrow} - n_{j\downarrow})"></katex-element>
                <p>纵向自旋关联</p>
              </div>
              
              <div class="component-item">
                <h5>🌊 S⁺S⁻ + S⁻S⁺ 项</h5>
                <katex-element expression="S_i^+ S_j^- + S_i^- S_j^+ = f_{i\uparrow}^\dagger f_{i\downarrow} f_{j\downarrow}^\dagger f_{j\uparrow} + h.c."></katex-element>
                <p>横向自旋翻转</p>
              </div>
              
              <div class="component-item">
                <h5>⚖️ 密度修正项</h5>
                <katex-element expression="-\frac{1}{4} n_i n_j = -\frac{1}{4} \sum_{\sigma,\tau} f_{i\sigma}^\dagger f_{i\sigma} f_{j\tau}^\dagger f_{j\tau}"></katex-element>
                <p>密度-密度相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎭 平均场理论</h2>
      
      <div class="mean-field-theory">
        <h3>平均场分解</h3>
        <div class="mathematical-content">
          <h4>玻色子场的平均场处理：</h4>
          <katex-element expression="b_i^\dagger b_j \approx \langle b_i^\dagger \rangle b_j + b_i^\dagger \langle b_j \rangle - \langle b_i^\dagger \rangle \langle b_j \rangle"></katex-element>
          
          <div class="mean-field-assumptions">
            <h4>平均场假设：</h4>
            <div class="assumption-grid">
              <div class="assumption-item">
                <h5>🎯 均匀态假设</h5>
                <katex-element expression="\langle b_i^\dagger b_i \rangle = x"></katex-element>
                <p>空穴密度在所有格点相同</p>
                <p>忽略空间涨落</p>
              </div>
              
              <div class="assumption-item">
                <h5>🔄 相位一致性</h5>
                <katex-element expression="\langle b_i \rangle = \sqrt{x} e^{i\phi_i}"></katex-element>
                <p>玻色子场的相位序参量</p>
                <p>可能的超流态</p>
              </div>
              
              <div class="assumption-item">
                <h5>⚖️ 约束条件</h5>
                <katex-element expression="\langle n_f \rangle + x = 1"></katex-element>
                <p>费米子密度 + 空穴密度 = 1</p>
                <p>自洽条件</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mean-field-theory">
        <h3>有效费米子哈密顿量</h3>
        <div class="mathematical-content">
          <h4>平均场哈密顿量：</h4>
          <katex-element expression="H_{MF} = -t_{eff} \sum_{\langle i,j \rangle, \sigma} f_{i\sigma}^\dagger f_{j\sigma} + H_{exchange}"></katex-element>
          
          <div class="effective-parameters">
            <h4>有效参数：</h4>
            <div class="parameter-definitions">
              <div class="param-item">
                <h5>🏃 有效跳跃积分</h5>
                <katex-element expression="t_{eff} = t \cdot x"></katex-element>
                <p>被空穴密度重整化的跳跃</p>
                <p>掺杂依赖的带宽</p>
              </div>
              
              <div class="param-item">
                <h5>🔄 交换场</h5>
                <katex-element expression="H_{exchange} = -h_{AF} \sum_{i,\sigma} \sigma f_{i\sigma}^\dagger f_{i\sigma}"></katex-element>
                <p>反铁磁序产生的有效磁场</p>
                <p>自旋相关的化学势</p>
              </div>
              
              <div class="param-item">
                <h5>⚖️ 化学势</h5>
                <katex-element expression="\mu_{eff} = \mu + \lambda"></katex-element>
                <p>包含约束拉格朗日乘子</p>
                <p>控制总粒子数</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🌊 物理相和相变</h2>
      
      <div class="phase-diagram">
        <h3>t-J模型的相图</h3>
        <div class="phase-analysis">
          <div class="phase-grid">
            <div class="phase-card">
              <h4>🧲 反铁磁绝缘体相</h4>
              <div class="phase-content">
                <div class="mathematical-content">
                  <h5>特征：</h5>
                  <ul>
                    <li>半填充（δ = 0）</li>
                    <li>长程反铁磁序</li>
                    <li>Mott绝缘体能隙</li>
                  </ul>
                  
                  <h5>序参量：</h5>
                  <katex-element expression="m_{AF} = \frac{1}{N} \sum_i (-1)^i \langle S_i^z \rangle \neq 0"></katex-element>
                </div>
              </div>
            </div>

            <div class="phase-card">
              <h4>🌊 d波超导相</h4>
              <div class="phase-content">
                <div class="mathematical-content">
                  <h5>特征：</h5>
                  <ul>
                    <li>有限掺杂（δ > 0）</li>
                    <li>d波配对对称性</li>
                    <li>节点超导能隙</li>
                  </ul>
                  
                  <h5>序参量：</h5>
                  <katex-element expression="\Delta_d(\vec{k}) = \Delta_0 (\cos k_x - \cos k_y)"></katex-element>
                </div>
              </div>
            </div>

            <div class="phase-card">
              <h4>🔄 自旋液体相</h4>
              <div class="phase-content">
                <div class="mathematical-content">
                  <h5>特征：</h5>
                  <ul>
                    <li>无长程磁序</li>
                    <li>短程自旋关联</li>
                    <li>可能的拓扑序</li>
                  </ul>
                  
                  <h5>特性：</h5>
                  <katex-element expression="S(\vec{q}) \sim \frac{1}{|\vec{q} - \vec{Q}|^2 + \xi^{-2}}"></katex-element>
                </div>
              </div>
            </div>

            <div class="phase-card">
              <h4>🎯 费米液体相</h4>
              <div class="phase-content">
                <div class="mathematical-content">
                  <h5>特征：</h5>
                  <ul>
                    <li>大掺杂极限</li>
                    <li>准粒子激发</li>
                    <li>费米面存在</li>
                  </ul>
                  
                  <h5>性质：</h5>
                  <katex-element expression="C \propto T, \quad \chi \propto const"></katex-element>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-diagram">
        <h3>相变的物理机制</h3>
        <div class="mathematical-content">
          <h4>竞争能量尺度：</h4>
          <div class="energy-competition">
            <div class="energy-item">
              <h5>🏃 动能增益</h5>
              <katex-element expression="E_{kinetic} \sim -t \cdot \delta"></katex-element>
              <p>掺杂电子的动能降低</p>
              <p>倾向于破坏反铁磁序</p>
            </div>
            
            <div class="energy-item">
              <h5>🔄 交换能损失</h5>
              <katex-element expression="E_{exchange} \sim J \cdot S^2"></katex-element>
              <p>反铁磁序的交换能</p>
              <p>倾向于维持磁序</p>
            </div>
            
            <div class="energy-item">
              <h5>⚖️ 平衡条件</h5>
              <katex-element expression="t \cdot \delta \sim J \cdot S^2"></katex-element>
              <p>相变临界点</p>
              <p>δc ~ J/t</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🧪 实验对比与验证</h2>
      
      <div class="experimental-comparison">
        <h3>高温超导体中的验证</h3>
        <div class="experiment-grid">
          <div class="experiment-card">
            <h4>🔬 ARPES实验</h4>
            <div class="experiment-content">
              <div class="mathematical-content">
                <h5>观测结果：</h5>
                <ul>
                  <li>费米弧的出现</li>
                  <li>赝能隙现象</li>
                  <li>d波超导能隙</li>
                </ul>
                
                <h5>理论预言：</h5>
                <katex-element expression="A(\vec{k}, \omega) = \frac{Z_{\vec{k}}}{\omega - \xi_{\vec{k}} - \Sigma(\vec{k}, \omega)}"></katex-element>
                <p>束缚子理论的谱函数</p>
              </div>
            </div>
          </div>

          <div class="experiment-card">
            <h4>🌡️ 输运性质</h4>
            <div class="experiment-content">
              <div class="mathematical-content">
                <h5>电阻率行为：</h5>
                <ul>
                  <li>线性温度依赖</li>
                  <li>奇异金属行为</li>
                  <li>霍尔系数异常</li>
                </ul>
                
                <h5>理论解释：</h5>
                <katex-element expression="\rho(T) \propto T"></katex-element>
                <p>边缘费米液体行为</p>
              </div>
            </div>
          </div>

          <div class="experiment-card">
            <h4>🧲 磁性质</h4>
            <div class="experiment-content">
              <div class="mathematical-content">
                <h5>磁化率：</h5>
                <ul>
                  <li>反铁磁涨落增强</li>
                  <li>自旋能隙的打开</li>
                  <li>Knight位移异常</li>
                </ul>
                
                <h5>理论预期：</h5>
                <katex-element expression="\chi(\vec{q}) = \frac{\chi_0}{1 + \xi^2(\vec{q} - \vec{Q})^2}"></katex-element>
                <p>反铁磁涨落的增强</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚠️ 理论的局限性与挑战</h2>
      
      <div class="limitations-grid">
        <div class="limitation-card">
          <h3>🎭 平均场近似的问题</h3>
          <div class="limitation-content">
            <div class="problem-analysis">
              <h4>主要问题：</h4>
              <ul>
                <li>忽略量子涨落</li>
                <li>过高的相变温度</li>
                <li>某些实验现象无法解释</li>
              </ul>
              
              <h4>改进方向：</h4>
              <ul>
                <li>包含涨落修正</li>
                <li>重整化群方法</li>
                <li>量子蒙特卡罗</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="limitation-card">
          <h3>🌊 强关联效应</h3>
          <div class="limitation-content">
            <div class="problem-analysis">
              <h4>挑战：</h4>
              <ul>
                <li>非费米液体行为</li>
                <li>奇异金属相</li>
                <li>赝能隙现象</li>
              </ul>
              
              <h4>新理论需求：</h4>
              <ul>
                <li>全息对偶理论</li>
                <li>边缘费米液体</li>
                <li>分数化费米子</li>
              </ul>
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
              <h4>理论推导</h4>
              <p>从Hubbard模型通过强关联极限推导出t-J模型</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>束缚子表示</h4>
              <p>电子分解为费米子和玻色子，引入约束条件</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>平均场理论</h4>
              <p>通过平均场近似得到有效费米子理论</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>丰富相图</h4>
              <p>预言反铁磁、超导、自旋液体等多种量子相</p>
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
  name: 'Chapter16_3_1',
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

.derivation-container {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ff9800;
}

.derivation-container h3 {
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

.parameter-explanation {
  margin-top: 1.5rem;
}

.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.parameter-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.parameter-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.parameter-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.perturbation-analysis {
  margin-top: 1.5rem;
}

.order-analysis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.order-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.order-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.tj-derivation {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #4caf50;
}

.tj-derivation h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.virtual-process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.process-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.process-card h5 {
  color: #388e3c;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 6px;
}

.step-number {
  background: #4caf50;
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

.step p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.2rem 0;
}

.term-explanation {
  margin-top: 1.5rem;
}

.term-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.term-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.term-item h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.term-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.slave-representation {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #9c27b0;
}

.slave-representation h3 {
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.decomposition-explanation {
  margin-top: 1.5rem;
}

.physics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.physics-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.physics-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.physics-item h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.physics-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.constraint-methods {
  margin-top: 1.5rem;
}

.method-comparison {
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

.method-card h5 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.method-content {
  margin-top: 1rem;
}

.method-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.pros, .cons {
  padding: 1rem;
  border-radius: 6px;
}

.pros {
  background: #e8f5e8;
  border-left: 3px solid #4caf50;
}

.cons {
  background: #ffebee;
  border-left: 3px solid #f44336;
}

.pros h6 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.cons h6 {
  color: #c62828;
  margin-bottom: 0.5rem;
}

.pros ul, .cons ul {
  list-style: none;
  padding: 0;
}

.pros li, .cons li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.pros li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4caf50;
}

.cons li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #f44336;
}

.slave-tj-model {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #009688;
}

.slave-tj-model h3 {
  color: #00695c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.kinetic-analysis {
  margin-top: 1.5rem;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.interpretation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.interpretation-item h5 {
  color: #00796b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.interpretation-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.exchange-components {
  margin-top: 1.5rem;
}

.component-analysis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.component-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.component-item h5 {
  color: #00796b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.component-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.mean-field-theory {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #2196f3;
}

.mean-field-theory h3 {
  color: #0d47a1;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.mean-field-assumptions {
  margin-top: 1.5rem;
}

.assumption-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.assumption-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.assumption-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.assumption-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.effective-parameters {
  margin-top: 1.5rem;
}

.parameter-definitions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.param-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.param-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.param-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.phase-diagram {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
}

.phase-diagram h3 {
  color: #f57f17;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.phase-analysis {
  margin-top: 1rem;
}

.phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.phase-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.phase-card h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.phase-content h5 {
  color: #f57f17;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.phase-content ul {
  list-style: none;
  padding: 0;
}

.phase-content li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.phase-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ffc107;
}

.energy-competition {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.energy-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.energy-item h5 {
  color: #f57f17;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.energy-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.experimental-comparison {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #8bc34a;
}

.experimental-comparison h3 {
  color: #33691e;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.experiment-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.experiment-card h4 {
  color: #689f38;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.experiment-content h5 {
  color: #558b2f;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.experiment-content ul {
  list-style: none;
  padding: 0;
}

.experiment-content li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.experiment-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #8bc34a;
}

.experiment-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.limitations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.limitation-card {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #f44336;
}

.limitation-card h3 {
  color: #c62828;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.limitation-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.problem-analysis h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.problem-analysis ul {
  list-style: none;
  padding: 0;
}

.problem-analysis li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.problem-analysis li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #f44336;
}

.summary-container {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #607d8b;
}

.summary-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: #607d8b;
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
  color: #37474f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  color: #546e7a;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 0 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .virtual-process-grid,
  .method-comparison,
  .experiment-grid,
  .limitations-grid {
    grid-template-columns: 1fr;
  }
  
  .parameter-grid,
  .term-grid,
  .physics-grid,
  .interpretation-grid,
  .assumption-grid,
  .phase-grid,
  .summary-points {
    grid-template-columns: 1fr;
  }
  
  .method-pros-cons {
    grid-template-columns: 1fr;
  }
  
  .order-analysis,
  .parameter-definitions,
  .component-analysis,
  .energy-competition {
    gap: 0.5rem;
  }
}
</style>