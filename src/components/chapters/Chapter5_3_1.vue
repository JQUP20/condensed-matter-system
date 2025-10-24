<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.3.1 O(2)模型中的相位模式</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">XY模型</span>
        <span class="chapter-tag">拓扑相变</span>
        <span class="reading-time">阅读时间：40分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        O(2)模型，也称为XY模型，是研究连续对称性破缺和拓扑相变的经典模型。
        在这个模型中，序参量是一个二维向量，具有U(1)对称性。
        当对称性自发破缺时，会出现一个无能隙的相位模式（Goldstone模式），
        以及具有拓扑性质的涡旋激发，导致著名的Kosterlitz-Thouless相变。
      </p>
    </div>

    <div class="content-section">
      <h2>XY模型的基本理论</h2>
      
      <div class="xy-model-theory">
        <div class="xy-framework">
          <div class="xy-card basic">
            <h3>🎯 模型定义</h3>
            <div class="xy-content">
              <div class="model-definition">
                <div class="def-item">
                  <h4>哈密顿量</h4>
                  <div class="def-content">
                    <p><strong>经典XY模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)" :inline="false" />
                    </div>
                    
                    <p><strong>连续极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \frac{J}{2} \int d^2 r \, (\nabla\theta)^2" :inline="false" />
                    </div>
                    
                    <p><strong>复数表示：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(\vec{r}) = |\psi| e^{i\theta(\vec{r})}" :inline="false" />
                    </div>
                    
                    <p><strong>U(1)对称性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi \to e^{i\alpha} \psi, \quad \alpha \in [0, 2\pi)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="def-item">
                  <h4>Landau泛函</h4>
                  <div class="def-content">
                    <p><strong>一般形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\psi] = \int d^2 r \left[ \frac{1}{2}r|\psi|^2 + \frac{1}{2}K|\nabla\psi|^2 + \frac{u}{4}|\psi|^4 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>极坐标形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\rho,\theta] = \int d^2 r \left[ \frac{1}{2}r\rho^2 + \frac{u}{4}\rho^4 + \frac{K}{2}(\nabla\rho)^2 + \frac{K\rho^2}{2}(\nabla\theta)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>有序相中的近似：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\theta] \approx \frac{K\rho_0^2}{2} \int d^2 r \, (\nabla\theta)^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="def-item">
                  <h4>相位涨落</h4>
                  <div class="def-content">
                    <p><strong>Goldstone模式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega(\vec{k}) = v_s |\vec{k}|" :inline="false" />
                    </div>
                    
                    <p><strong>声速：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="v_s = \sqrt{\frac{K\rho_0^2}{m^*}}" :inline="false" />
                    </div>
                    
                    <p><strong>相位涨落强度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle(\theta(\vec{r}) - \theta(0))^2\rangle = \frac{k_B T}{2\pi K\rho_0^2} \ln(r/a)" :inline="false" />
                    </div>
                    
                    <p><strong>准长程序：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\psi^*(\vec{r})\psi(0)\rangle \sim r^{-\eta}, \quad \eta = \frac{k_B T}{2\pi K\rho_0^2}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="xy-card mermin-wagner">
            <h3>🚫 Mermin-Wagner定理</h3>
            <div class="xy-content">
              <div class="mermin-wagner-theorem">
                <div class="mw-item">
                  <h4>定理陈述</h4>
                  <div class="mw-content">
                    <p><strong>基本结论：</strong></p>
                    <div class="theorem-box">
                      <p>在二维系统中，连续对称性不能在有限温度下自发破缺。</p>
                    </div>
                    
                    <p><strong>数学表述：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle|\psi(\vec{r})|^2\rangle = 0 \quad \text{对所有} \, T > 0" :inline="false" />
                    </div>
                    
                    <p><strong>物理原因：</strong></p>
                    <ul>
                      <li>长波长涨落的发散</li>
                      <li>红外发散问题</li>
                      <li>维度效应</li>
                    </ul>
                  </div>
                </div>
                
                <div class="mw-item">
                  <h4>证明要点</h4>
                  <div class="mw-content">
                    <p><strong>涨落积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle(\delta\theta)^2\rangle = \int \frac{d^2 k}{(2\pi)^2} \frac{k_B T}{K\rho_0^2 k^2}" :inline="false" />
                    </div>
                    
                    <p><strong>红外发散：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\int_0^{k_{\text{max}}} k dk \frac{1}{k^2} = \int_0^{k_{\text{max}}} \frac{dk}{k} = \ln(k_{\text{max}}/k_{\text{min}}) \to \infty" :inline="false" />
                    </div>
                    
                    <p><strong>序参量消失：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\psi\rangle = \langle|\psi|e^{i\theta}\rangle = |\psi|\langle e^{i\theta}\rangle = 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mw-item">
                  <h4>物理后果</h4>
                  <div class="mw-content">
                    <p><strong>无长程序：</strong></p>
                    <ul>
                      <li>序参量期望值为零</li>
                      <li>但局域序仍然存在</li>
                      <li>关联函数幂律衰减</li>
                    </ul>
                    
                    <p><strong>准长程序：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(\vec{r}) = \langle\psi^*(\vec{r})\psi(0)\rangle \sim r^{-\eta}" :inline="false" />
                    </div>
                    
                    <p><strong>相变的可能性：</strong></p>
                    <ul>
                      <li>拓扑相变</li>
                      <li>Kosterlitz-Thouless机制</li>
                      <li>涡旋-反涡旋解绑</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>涡旋激发与拓扑性质</h2>
      
      <div class="vortex-theory">
        <div class="vortex-framework">
          <div class="vortex-card structure">
            <h3>🌀 涡旋结构</h3>
            <div class="vortex-content">
              <div class="vortex-structure">
                <div class="struct-item">
                  <h4>涡旋解</h4>
                  <div class="struct-content">
                    <p><strong>单涡旋解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(\vec{r}) = f(r) e^{in\phi}" :inline="false" />
                    </div>
                    
                    <p><strong>径向方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{d^2f}{dr^2} + \frac{1}{r}\frac{df}{dr} - \frac{n^2}{r^2}f + rf - f^3 = 0" :inline="false" />
                    </div>
                    
                    <p><strong>边界条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f(0) = 0, \quad f(\infty) = 1" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑荷：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="n = \frac{1}{2\pi} \oint d\phi \, \frac{\partial\theta}{\partial\phi} \in \mathbb{Z}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="struct-item">
                  <h4>涡旋能量</h4>
                  <div class="struct-content">
                    <p><strong>对数发散：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{vortex}} = \pi K \rho_0^2 n^2 \ln(L/\xi)" :inline="false" />
                    </div>
                    
                    <p><strong>核心能量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{core}} = \pi K \rho_0^2 n^2 \ln(\xi/a)" :inline="false" />
                    </div>
                    
                    <p><strong>总能量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{total}} = \pi K \rho_0^2 n^2 \ln(L/a)" :inline="false" />
                    </div>
                    
                    <p><strong>能量尺度：</strong></p>
                    <ul>
                      <li>ξ: 相干长度</li>
                      <li>a: 晶格常数</li>
                      <li>L: 系统尺寸</li>
                    </ul>
                  </div>
                </div>
                
                <div class="struct-item">
                  <h4>涡旋相互作用</h4>
                  <div class="struct-content">
                    <p><strong>两涡旋相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(r_{12}) = 2\pi K \rho_0^2 n_1 n_2 \ln(r_{12}/a)" :inline="false" />
                    </div>
                    
                    <p><strong>相互作用性质：</strong></p>
                    <ul>
                      <li>同号涡旋：排斥</li>
                      <li>异号涡旋：吸引</li>
                      <li>对数型长程相互作用</li>
                    </ul>
                    
                    <p><strong>涡旋对：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{pair}} = 2\pi K \rho_0^2 \ln(r/a)" :inline="false" />
                    </div>
                    
                    <p><strong>束缚条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{pair}} > k_B T \Rightarrow r < a e^{2\pi K \rho_0^2/k_B T}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="vortex-card dynamics">
            <h3>⚡ 涡旋动力学</h3>
            <div class="vortex-content">
              <div class="vortex-dynamics">
                <div class="dyn-item">
                  <h4>运动方程</h4>
                  <div class="dyn-content">
                    <p><strong>过阻尼动力学：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta \frac{d\vec{r}_i}{dt} = -\frac{\partial H}{\partial \vec{r}_i}" :inline="false" />
                    </div>
                    
                    <p><strong>涡旋哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \sum_{i<j} 2\pi K \rho_0^2 n_i n_j \ln(r_{ij}/a)" :inline="false" />
                    </div>
                    
                    <p><strong>力的计算：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{F}_i = -2\pi K \rho_0^2 n_i \sum_{j \neq i} \frac{n_j}{r_{ij}^2} \vec{r}_{ij}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="dyn-item">
                  <h4>涡旋对动力学</h4>
                  <div class="dyn-content">
                    <p><strong>相对运动：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta \frac{dr}{dt} = -\frac{2\pi K \rho_0^2}{r}" :inline="false" />
                    </div>
                    
                    <p><strong>湮灭时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="t_{\text{annihilation}} = \frac{\eta r_0^2}{4\pi K \rho_0^2}" :inline="false" />
                    </div>
                    
                    <p><strong>临界分离：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="r_c \sim a \exp\left(\frac{2\pi K \rho_0^2}{k_B T}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="dyn-item">
                  <h4>集体激发</h4>
                  <div class="dyn-content">
                    <p><strong>涡旋等离子体：</strong></p>
                    <ul>
                      <li>高温相：自由涡旋气体</li>
                      <li>低温相：束缚涡旋对</li>
                      <li>相变：解绑转变</li>
                    </ul>
                    
                    <p><strong>等离子体频率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega_p^2 = \frac{4\pi^2 K \rho_0^2 n_v}{m^*}" :inline="false" />
                    </div>
                    
                    <p><strong>屏蔽长度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda_D = \sqrt{\frac{k_B T}{4\pi^2 K \rho_0^2 n_v}}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Kosterlitz-Thouless相变</h2>
      
      <div class="kt-transition">
        <div class="kt-framework">
          <div class="kt-card mechanism">
            <h3>🔄 相变机制</h3>
            <div class="kt-content">
              <div class="kt-mechanism">
                <div class="mech-item">
                  <h4>基本思想</h4>
                  <div class="mech-content">
                    <p><strong>拓扑相变：</strong></p>
                    <div class="concept-box">
                      <p>相变由拓扑激发（涡旋）的解绑驱动，而非序参量的变化</p>
                    </div>
                    
                    <p><strong>两个相：</strong></p>
                    <ul>
                      <li><strong>低温相：</strong>涡旋-反涡旋束缚对</li>
                      <li><strong>高温相：</strong>自由涡旋气体</li>
                    </ul>
                    
                    <p><strong>相变条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="k_B T_c = \frac{\pi K \rho_0^2}{2}" :inline="false" />
                    </div>
                    
                    <p><strong>普适跳跃：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{K(T_c^-)}{k_B T_c} = \frac{2}{\pi}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mech-item">
                  <h4>重整化群分析</h4>
                  <div class="mech-content">
                    <p><strong>有效理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{\text{eff}} = \sum_{i<j} V(r_{ij}) - \mu \sum_i n_i" :inline="false" />
                    </div>
                    
                    <p><strong>逸度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="y = e^{-\beta E_{\text{core}}} = \left(\frac{a}{\xi}\right)^{2\pi K/k_B T}" :inline="false" />
                    </div>
                    
                    <p><strong>RG方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dK}{dl} = -\frac{\pi}{2} y^2" :inline="false" />
                    </div>
                    
                    <div class="formula-block">
                      <katex-element expression="\frac{dy}{dl} = (2 - \pi K) y" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mech-item">
                  <h4>相图与不动点</h4>
                  <div class="mech-content">
                    <p><strong>不动点：</strong></p>
                    <ul>
                      <li><strong>高温不动点：</strong>K = 0, y = ∞</li>
                      <li><strong>低温不动点：</strong>K = ∞, y = 0</li>
                      <li><strong>临界不动点：</strong>K = 2/π, y = 0</li>
                    </ul>
                    
                    <p><strong>流线分析：</strong></p>
                    <div class="phase-diagram">
                      <div class="phase-region low-temp">
                        <h5>低温相 (K > 2/π)</h5>
                        <ul>
                          <li>y → 0 (涡旋被抑制)</li>
                          <li>准长程序</li>
                          <li>幂律关联</li>
                        </ul>
                      </div>
                      
                      <div class="phase-region high-temp">
                        <h5>高温相 (K < 2/π)</h5>
                        <ul>
                          <li>y → ∞ (自由涡旋)</li>
                          <li>指数衰减关联</li>
                          <li>有限关联长度</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="kt-card properties">
            <h3>📊 相变性质</h3>
            <div class="kt-content">
              <div class="kt-properties">
                <div class="prop-item">
                  <h4>临界指数</h4>
                  <div class="prop-content">
                    <p><strong>关联长度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi(T) \sim \exp\left(\frac{b}{\sqrt{T - T_c}}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>比热：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(T) \sim \frac{1}{(\ln\xi)^2}" :inline="false" />
                    </div>
                    
                    <p><strong>磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(T) \sim \xi^{2-\eta}" :inline="false" />
                    </div>
                    
                    <p><strong>特殊性质：</strong></p>
                    <ul>
                      <li>本质奇点行为</li>
                      <li>无幂律临界指数</li>
                      <li>普适跳跃关系</li>
                    </ul>
                  </div>
                </div>
                
                <div class="prop-item">
                  <h4>标度律</h4>
                  <div class="prop-content">
                    <p><strong>关联函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r,T) = r^{-\eta(T)} f(r/\xi(T))" :inline="false" />
                    </div>
                    
                    <p><strong>温度依赖的指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta(T) = \frac{k_B T}{2\pi K(T)}" :inline="false" />
                    </div>
                    
                    <p><strong>临界点处：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta(T_c) = \frac{1}{4}" :inline="false" />
                    </div>
                    
                    <p><strong>普适性：</strong></p>
                    <ul>
                      <li>所有O(2)系统</li>
                      <li>与微观细节无关</li>
                      <li>拓扑性质决定</li>
                    </ul>
                  </div>
                </div>
                
                <div class="prop-item">
                  <h4>有限尺寸效应</h4>
                  <div class="prop-content">
                    <p><strong>尺寸标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_c(L) - T_c(\infty) \sim \frac{1}{(\ln L)^2}" :inline="false" />
                    </div>
                    
                    <p><strong>关联长度截断：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi_{\text{eff}} = \min(\xi(T), L)" :inline="false" />
                    </div>
                    
                    <p><strong>数值模拟：</strong></p>
                    <ul>
                      <li>Monte Carlo方法</li>
                      <li>有限尺寸标度分析</li>
                      <li>拓扑荷测量</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测与应用</h2>
      
      <div class="experimental-applications">
        <div class="exp-framework">
          <div class="exp-card systems">
            <h3>🧪 实验系统</h3>
            <div class="exp-content">
              <div class="experimental-systems">
                <div class="sys-item">
                  <h4>超流氦薄膜</h4>
                  <div class="sys-content">
                    <p><strong>系统描述：</strong></p>
                    <ul>
                      <li>⁴He薄膜在基底上</li>
                      <li>二维超流相变</li>
                      <li>U(1)对称性破缺</li>
                    </ul>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi = \sqrt{\rho_s} e^{i\phi}" :inline="false" />
                    </div>
                    
                    <p><strong>观测量：</strong></p>
                    <ul>
                      <li>超流密度 ρₛ</li>
                      <li>比热跳跃</li>
                      <li>涡旋激发</li>
                    </ul>
                    
                    <p><strong>实验结果：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\rho_s(T_c^-)}{k_B T_c} = \frac{2}{\pi}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sys-item">
                  <h4>约瑟夫森结阵列</h4>
                  <div class="sys-content">
                    <p><strong>模型哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -E_J \sum_{\langle i,j \rangle} \cos(\phi_i - \phi_j) + \frac{E_C}{2} \sum_i n_i^2" :inline="false" />
                    </div>
                    
                    <p><strong>经典极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_C \ll E_J \Rightarrow \text{XY模型}" :inline="false" />
                    </div>
                    
                    <p><strong>实验测量：</strong></p>
                    <ul>
                      <li>电阻跳跃</li>
                      <li>I-V特性</li>
                      <li>涡旋运动</li>
                    </ul>
                    
                    <p><strong>KT相变特征：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="R(T) \sim \exp\left(-\frac{b}{\sqrt{T-T_c}}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sys-item">
                  <h4>二维磁体</h4>
                  <div class="sys-content">
                    <p><strong>平面磁体：</strong></p>
                    <ul>
                      <li>BKT (Ba₂CoGe₂O₇)</li>
                      <li>K₂CuF₄</li>
                      <li>单层磁性材料</li>
                    </ul>
                    
                    <p><strong>测量技术：</strong></p>
                    <ul>
                      <li>中子散射</li>
                      <li>磁化率测量</li>
                      <li>比热测量</li>
                    </ul>
                    
                    <p><strong>观测现象：</strong></p>
                    <ul>
                      <li>准长程序</li>
                      <li>幂律关联</li>
                      <li>拓扑激发</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exp-card techniques">
            <h3>🔬 实验技术</h3>
            <div class="exp-content">
              <div class="experimental-techniques">
                <div class="tech-item">
                  <h4>散射实验</h4>
                  <div class="tech-content">
                    <p><strong>中子散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{q},\omega) = \int dt \, e^{i\omega t} \langle\psi^*(\vec{q},t)\psi(\vec{q},0)\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>关联函数测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r) \sim r^{-\eta}" :inline="false" />
                    </div>
                    
                    <p><strong>临界散射：</strong></p>
                    <ul>
                      <li>准弹性峰</li>
                      <li>幂律线型</li>
                      <li>温度依赖</li>
                    </ul>
                  </div>
                </div>
                
                <div class="tech-item">
                  <h4>输运测量</h4>
                  <div class="tech-content">
                    <p><strong>电阻测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="R(T) = R_0 \exp\left(\frac{\Delta}{k_B T}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>超流密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\rho_s(T) = \frac{m}{4\pi\hbar^2} \frac{\partial^2 F}{\partial(\nabla\phi)^2}" :inline="false" />
                    </div>
                    
                    <p><strong>临界行为：</strong></p>
                    <ul>
                      <li>普适跳跃</li>
                      <li>本质奇点</li>
                      <li>标度律验证</li>
                    </ul>
                  </div>
                </div>
                
                <div class="tech-item">
                  <h4>涡旋成像</h4>
                  <div class="tech-content">
                    <p><strong>直接观测：</strong></p>
                    <ul>
                      <li>扫描隧道显微镜</li>
                      <li>磁力显微镜</li>
                      <li>洛伦兹电子显微镜</li>
                    </ul>
                    
                    <p><strong>涡旋识别：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="n = \frac{1}{2\pi} \oint \nabla\phi \cdot d\vec{l}" :inline="false" />
                    </div>
                    
                    <p><strong>统计分析：</strong></p>
                    <ul>
                      <li>涡旋密度</li>
                      <li>对关联函数</li>
                      <li>解绑转变</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与展望</h2>
      
      <div class="modern-developments">
        <div class="dev-framework">
          <div class="dev-card quantum">
            <h3>⚛️ 量子KT相变</h3>
            <div class="dev-content">
              <div class="quantum-kt">
                <div class="qkt-item">
                  <h4>量子相变</h4>
                  <div class="qkt-content">
                    <p><strong>量子XY模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -t \sum_{\langle i,j \rangle} (a_i^\dagger a_j + h.c.) + \frac{U}{2} \sum_i n_i(n_i-1)" :inline="false" />
                    </div>
                    
                    <p><strong>相图：</strong></p>
                    <ul>
                      <li>超流相 (t/U 大)</li>
                      <li>Mott绝缘相 (t/U 小)</li>
                      <li>量子临界点</li>
                    </ul>
                    
                    <p><strong>动力学指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="z = 1 \quad \text{(相对论性)}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="qkt-item">
                  <h4>冷原子实现</h4>
                  <div class="qkt-content">
                    <p><strong>光晶格系统：</strong></p>
                    <ul>
                      <li>玻色-哈伯德模型</li>
                      <li>可调参数</li>
                      <li>量子气体显微镜</li>
                    </ul>
                    
                    <p><strong>实验观测：</strong></p>
                    <ul>
                      <li>相干性测量</li>
                      <li>涡旋激发</li>
                      <li>量子相变</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dev-card applications">
            <h3>🚀 新兴应用</h3>
            <div class="dev-content">
              <div class="new-applications">
                <div class="app-item">
                  <h4>拓扑超导</h4>
                  <div class="app-content">
                    <p><strong>p波超导体：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta(\vec{k}) = \Delta_0 (k_x + ik_y)" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑性质：</strong></p>
                    <ul>
                      <li>手征边缘态</li>
                      <li>Majorana费米子</li>
                      <li>拓扑量子计算</li>
                    </ul>
                  </div>
                </div>
                
                <div class="app-item">
                  <h4>二维材料</h4>
                  <div class="app-content">
                    <p><strong>范德瓦尔斯材料：</strong></p>
                    <ul>
                      <li>单层超导体</li>
                      <li>磁性二维材料</li>
                      <li>莫尔超晶格</li>
                    </ul>
                    
                    <p><strong>新现象：</strong></p>
                    <ul>
                      <li>增强的量子涨落</li>
                      <li>层间耦合效应</li>
                      <li>电场调控</li>
                    </ul>
                  </div>
                </div>
                
                <div class="app-item">
                  <h4>量子模拟</h4>
                  <div class="app-content">
                    <p><strong>平台：</strong></p>
                    <ul>
                      <li>超导量子比特</li>
                      <li>离子阱系统</li>
                      <li>里德堡原子</li>
                    </ul>
                    
                    <p><strong>应用：</strong></p>
                    <ul>
                      <li>多体局域化</li>
                      <li>时间晶体</li>
                      <li>量子退火</li>
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
  flex-wrap: wrap;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.xy-framework, .vortex-framework, .kt-framework, .exp-framework, .dev-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.xy-card, .vortex-card, .kt-card, .exp-card, .dev-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.xy-card.basic {
  border-left: 5px solid #10b981;
}

.xy-card.mermin-wagner {
  border-left: 5px solid #f59e0b;
}

.vortex-card.structure {
  border-left: 5px solid #3b82f6;
}

.vortex-card.dynamics {
  border-left: 5px solid #8b5cf6;
}

.kt-card.mechanism {
  border-left: 5px solid #ef4444;
}

.kt-card.properties {
  border-left: 5px solid #06b6d4;
}

.exp-card.systems {
  border-left: 5px solid #ec4899;
}

.exp-card.techniques {
  border-left: 5px solid #84cc16;
}

.dev-card.quantum {
  border-left: 5px solid #6366f1;
}

.dev-card.applications {
  border-left: 5px solid #f97316;
}

.xy-card h3, .vortex-card h3, .kt-card h3, .exp-card h3, .dev-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.model-definition, .mermin-wagner-theorem, .vortex-structure, .vortex-dynamics, .kt-mechanism, .kt-properties, .experimental-systems, .experimental-techniques, .quantum-kt, .new-applications {
  display: grid;
  gap: 1.5rem;
}

.def-item, .mw-item, .struct-item, .dyn-item, .mech-item, .prop-item, .sys-item, .tech-item, .qkt-item, .app-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.def-item h4, .mw-item h4, .struct-item h4, .dyn-item h4, .mech-item h4, .prop-item h4, .sys-item h4, .tech-item h4, .qkt-item h4, .app-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.theorem-box, .concept-box {
  background: #fef7cd;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  font-style: italic;
  text-align: center;
}

.phase-diagram {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.phase-region {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.phase-region.low-temp {
  border-left: 4px solid #10b981;
}

.phase-region.high-temp {
  border-left: 4px solid #ef4444;
}

.phase-region h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .xy-framework, .vortex-framework, .kt-framework, .exp-framework, .dev-framework {
    grid-template-columns: 1fr;
  }
  
  .phase-diagram {
    grid-template-columns: 1fr;
  }
}
</style>