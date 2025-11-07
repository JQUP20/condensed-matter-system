<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.5 Lindhard介电函数(无物理近似/RPA)</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">线性响应理论</span>
        <span class="reading-time">阅读时间: 45分钟</span>
      </div>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <p class="lead-text">
        Lindhard介电函数是描述电子气对外加电磁场响应的精确理论框架，
        它基于随机相位近似(RPA)，不引入任何物理近似，完全从量子力学第一性原理出发。
        这一理论不仅为理解金属的屏蔽性质提供了坚实基础，
        更是现代多体理论和电子结构计算的重要基石，
        在等离激元物理、输运理论和光学性质计算中发挥着核心作用。
      </p>
    </div>

    <!-- 理论基础与RPA框架 -->
    <div class="content-section">
      <h2>🎯 理论基础与RPA框架</h2>
      
      <div class="theoretical-foundation">
        <div class="foundation-grid">
          <div class="foundation-card linear-response">
            <div class="foundation-icon">📊</div>
            <h3>线性响应理论</h3>
            <div class="foundation-content">
              <p><strong>基本假设：</strong>系统对弱外场的响应是线性的</p>
              
              <div class="response-equation">
                <div class="math-display">
                  $$\delta n(\mathbf{r},t) = \int d\mathbf{r}' dt' \chi(\mathbf{r},t;\mathbf{r}',t') V_{ext}(\mathbf{r}',t')$$
                </div>
                <p class="equation-note">
                  χ(r,t;r',t')是密度-密度响应函数
                </p>
              </div>

              <div class="fourier-transform">
                <h4>傅里叶变换形式：</h4>
                <div class="math-display">
                  $$\delta n(\mathbf{q},\omega) = \chi(\mathbf{q},\omega) V_{ext}(\mathbf{q},\omega)$$
                </div>
                <p>在动量-频率空间中的简化形式</p>
              </div>
            </div>
          </div>

          <div class="foundation-card rpa-approximation">
            <div class="foundation-icon">🎯</div>
            <h3>随机相位近似(RPA)</h3>
            <div class="foundation-content">
              <p><strong>物理图像：</strong>忽略电子间的交换-关联效应</p>
              
              <div class="rpa-assumptions">
                <h4>基本假设：</h4>
                <ul>
                  <li>电子间只有直接Coulomb相互作用</li>
                  <li>忽略交换项和关联效应</li>
                  <li>保持所有阶的环形图</li>
                </ul>
              </div>

              <div class="rpa-validity">
                <h4>适用条件：</h4>
                <div class="math-display">
                  $$r_s = \frac{1}{(4\pi n/3)^{1/3} a_0} \ll 1$$
                </div>
                <p>高密度电子气极限</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lindhard函数的精确表达式 -->
    <div class="content-section">
      <h2>📐 Lindhard函数的精确表达式</h2>
      
      <div class="lindhard-derivation">
        <div class="derivation-overview">
          <h3>🔬 推导过程</h3>
          <div class="derivation-content">
            <p>
              Lindhard函数的推导基于自由电子气模型，通过计算电子-空穴对的极化贡献，
              得到了电子气对外加势场响应的精确表达式。
            </p>

            <div class="derivation-steps">
              <div class="step-card step-1">
                <h4>步骤1：极化函数定义</h4>
                <div class="step-content">
                  <div class="math-display">
                    $$\Pi_0(\mathbf{q},\omega) = -\sum_{\mathbf{k}} \frac{f(\varepsilon_{\mathbf{k}}) - f(\varepsilon_{\mathbf{k}+\mathbf{q}})}{\varepsilon_{\mathbf{k}} - \varepsilon_{\mathbf{k}+\mathbf{q}} + \omega + i\delta}$$
                  </div>
                  <p class="step-note">
                    基于费米-狄拉克分布和能量守恒的基本表达式
                  </p>
                </div>
              </div>

              <div class="step-card step-2">
                <h4>步骤2：零温极限</h4>
                <div class="step-content">
                  <div class="math-display">
                    $$f(\varepsilon) = \theta(E_F - \varepsilon)$$
                  </div>
                  <p class="step-note">
                    在T=0时，费米分布简化为阶跃函数
                  </p>
                </div>
              </div>

              <div class="step-card step-3">
                <h4>步骤3：积分变换</h4>
                <div class="step-content">
                  <div class="math-display">
                    $$\Pi_0(\mathbf{q},\omega) = -\frac{V}{(2\pi)^3} \int d\mathbf{k} \frac{\theta(k_F - k) - \theta(k_F - |\mathbf{k}+\mathbf{q}|)}{\frac{\hbar^2}{2m}(k^2 - |\mathbf{k}+\mathbf{q}|^2) + \omega + i\delta}$$
                  </div>
                  <p class="step-note">
                    将求和转换为积分，引入费米波矢k_F
                  </p>
                </div>
              </div>

              <div class="step-card step-4">
                <h4>步骤4：球坐标积分</h4>
                <div class="step-content">
                  <div class="math-display">
                    $$\Pi_0(q,\omega) = -\frac{m}{2\pi^2} \int_0^{k_F} dk \, k^2 \int_{-1}^{1} d\cos\theta \frac{1}{\omega - v_F q \cos\theta + i\delta}$$
                  </div>
                  <p class="step-note">
                    利用球对称性，将三维积分简化为一维
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="exact-expression">
          <h3>📊 精确表达式</h3>
          <div class="expression-content">
            <div class="lindhard-formula">
              <h4>完整的Lindhard函数：</h4>
              <div class="formula-box">
                <div class="math-display">
                  $$\Pi_0(q,\omega) = -\frac{m k_F}{\pi^2} \left[ \frac{1}{2} + \frac{1}{4x} \left( 1 - x^2 \right) \ln \left| \frac{1+x}{1-x} \right| - \frac{i\pi}{4x} \left( 1 - x^2 \right) \theta(1-x^2) \right]$$
                </div>
                <p class="formula-note">
                  其中 x = (ω + iδ)/(v_F q)，v_F = ℏk_F/m 是费米速度
                </p>
              </div>
            </div>

            <div class="static-limit">
              <h4>静态极限 (ω → 0)：</h4>
              <div class="static-formula">
                <div class="math-display">
                  $$\Pi_0(q,0) = -\frac{m k_F}{\pi^2} \left[ \frac{1}{2} + \frac{1}{4y} \left( 1 - y^2 \right) \ln \left| \frac{1+y}{1-y} \right| \right]$$
                </div>
                <p class="formula-note">
                  其中 y = q/(2k_F)，这是最常用的形式
                </p>
              </div>
            </div>

            <div class="asymptotic-behavior">
              <h4>渐近行为分析：</h4>
              <div class="behavior-grid">
                <div class="behavior-card long-wavelength">
                  <h5>长波长极限 (q ≪ k_F)</h5>
                  <div class="math-display">
                    $$\Pi_0(q,0) \approx -\frac{m k_F}{\pi^2} \left[ 1 - \frac{q^2}{12 k_F^2} + O(q^4) \right]$$
                  </div>
                  <p>Thomas-Fermi极限，屏蔽效应最强</p>
                </div>

                <div class="behavior-card short-wavelength">
                  <h5>短波长极限 (q ≫ k_F)</h5>
                  <div class="math-display">
                    $$\Pi_0(q,0) \approx -\frac{m^2 v_F^2}{2\pi^2 q^2} \left[ 1 + \frac{k_F^2}{3q^2} + O(k_F^4/q^4) \right]$$
                  </div>
                  <p>自由粒子行为，屏蔽效应减弱</p>
                </div>

                <div class="behavior-card critical-point">
                  <h5>临界点 (q = 2k_F)</h5>
                  <div class="math-display">
                    $$\Pi_0(2k_F,0) = -\frac{m k_F}{2\pi^2}$$
                  </div>
                  <p>费米面嵌套效应，Friedel振荡的起源</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 动态性质与Landau阻尼 -->
    <div class="content-section">
      <h2>🌊 动态性质与Landau阻尼</h2>
      
      <div class="dynamic-properties">
        <div class="landau-damping">
          <h3>🎭 Landau阻尼机制</h3>
          <div class="damping-content">
            <div class="damping-explanation">
              <p>
                Landau阻尼是等离激元在无碰撞等离子体中的衰减机制，
                它源于等离激元与单个电子的共振相互作用。
                这一现象完全是量子效应的结果，在经典物理中没有对应。
              </p>
            </div>

            <div class="damping-condition">
              <h4>阻尼条件：</h4>
              <div class="condition-analysis">
                <div class="math-display">
                  $$\omega = v_F q \cos\theta$$
                </div>
                <p class="formula-note">
                  当等离激元频率与电子运动频率匹配时发生共振吸收
                </p>
              </div>

              <div class="phase-space">
                <h4>相空间分析：</h4>
                <div class="phase-diagram">
                  <div class="region-description">
                    <div class="region-item undamped">
                      <strong>无阻尼区域：</strong>ω > v_F q
                      <p>等离激元频率高于所有电子的运动频率</p>
                    </div>
                    <div class="region-item damped">
                      <strong>阻尼区域：</strong>ω < v_F q
                      <p>存在与等离激元共振的电子，导致能量耗散</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="damping-rate">
              <h4>阻尼率计算：</h4>
              <div class="rate-formula">
                <div class="math-display">
                  $$\gamma = -\frac{\text{Im}[\Pi_0(q,\omega)]}{\text{Re}[\Pi_0(q,\omega)]} \cdot \omega$$
                </div>
                <p class="formula-note">
                  阻尼率与极化函数的虚部成正比
                </p>
              </div>

              <div class="weak-damping">
                <h5>弱阻尼近似：</h5>
                <div class="math-display">
                  $$\gamma \approx \frac{\pi \omega^3}{8 \omega_p^2 v_F q} \quad \text{for } \omega \ll \omega_p$$
                </div>
                <p>在等离激元频率附近的阻尼率</p>
              </div>
            </div>
          </div>
        </div>

        <div class="plasmon-dispersion">
          <h3>📈 等离激元色散关系</h3>
          <div class="dispersion-content">
            <div class="dispersion-equation">
              <h4>色散方程：</h4>
              <div class="math-display">
                $$\varepsilon(q,\omega) = 1 - \frac{4\pi e^2}{q^2} \Pi_0(q,\omega) = 0$$
              </div>
              <p class="formula-note">
                等离激元对应于介电函数的零点
              </p>
            </div>

            <div class="long-wavelength-dispersion">
              <h4>长波长色散：</h4>
              <div class="dispersion-analysis">
                <div class="math-display">
                  $$\omega^2 = \omega_p^2 + \frac{3}{5} v_F^2 q^2 - i \gamma \omega$$
                </div>
                <p class="formula-note">
                  包含量子压强修正和Landau阻尼的完整色散关系
                </p>
              </div>

              <div class="dispersion-features">
                <h5>色散特征：</h5>
                <div class="feature-list">
                  <div class="feature-item">
                    <strong>等离激元频率：</strong>ω_p = √(4πne²/m)
                  </div>
                  <div class="feature-item">
                    <strong>量子修正：</strong>(3/5)v_F²q² 项来自费米压强
                  </div>
                  <div class="feature-item">
                    <strong>阻尼效应：</strong>虚部导致等离激元寿命有限
                  </div>
                </div>
              </div>
            </div>

            <div class="finite-q-effects">
              <h4>有限q效应：</h4>
              <div class="finite-q-analysis">
                <div class="cutoff-frequency">
                  <h5>截止频率：</h5>
                  <div class="math-display">
                    $$\omega_c(q) = v_F q$$
                  </div>
                  <p>当ω < ω_c时，等离激元进入强阻尼区域</p>
                </div>

                <div class="mode-mixing">
                  <h5>模式混合：</h5>
                  <p>
                    在q ≈ k_F附近，等离激元与单粒子激发强烈混合，
                    导致复杂的谱结构和模式杂化现象。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 静态和动态极限 -->
    <div class="content-section">
      <h2>⚡ 静态和动态极限分析</h2>
      
      <div class="limits-analysis">
        <div class="static-limit">
          <h3>🔄 静态极限 (ω → 0)</h3>
          <div class="static-content">
            <div class="static-formula">
              <div class="math-display">
                $$\chi_0(q,0) = -\frac{m k_F}{\pi^2}\left[1 - \frac{1}{2x}\left(1-x^2\right)\ln\left|\frac{1+x}{1-x}\right|\right]$$
              </div>
              <p class="formula-note">其中 x = q/(2k_F)</p>
            </div>

            <div class="static-regimes">
              <h4>不同波矢区域：</h4>
              <div class="regime-analysis">
                <div class="regime-card long-wavelength">
                  <h5>长波长极限 (q ≪ k_F)</h5>
                  <div class="regime-content">
                    <div class="math-display">
                      $$\chi_0(q,0) \approx -\frac{m k_F}{\pi^2}\left[1 - \frac{q^2}{12k_F^2} + O(q^4)\right]$$
                    </div>
                    <div class="physical-meaning">
                      <p><strong>物理意义：</strong></p>
                      <ul>
                        <li>Thomas-Fermi屏蔽长度：λ_TF = (6π²n)^(-1/6)</li>
                        <li>静态介电常数：ε(0) = 1 + q_TF²/q²</li>
                        <li>完全屏蔽长程Coulomb相互作用</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="regime-card short-wavelength">
                  <h5>短波长极限 (q ≫ k_F)</h5>
                  <div class="regime-content">
                    <div class="math-display">
                      $$\chi_0(q,0) \approx -\frac{m^2 v_F^2}{2\pi^2 q^2}$$
                    </div>
                    <div class="physical-meaning">
                      <p><strong>物理意义：</strong></p>
                      <ul>
                        <li>Friedel振荡的起源</li>
                        <li>q^(-2)的幂律衰减</li>
                        <li>费米面尖锐性的体现</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dynamic-limit">
          <h3>🌊 动态响应 (ω ≠ 0)</h3>
          <div class="dynamic-content">
            <div class="landau-damping">
              <h4>Landau阻尼</h4>
              <div class="damping-analysis">
                <p><strong>阻尼条件：</strong>当 |ω| < v_F q 时，出现Landau阻尼</p>
                
                <div class="damping-formula">
                  <div class="math-display">
                    $$\text{Im}\chi_0(q,\omega) = -\frac{m k_F}{2\pi q}\left[1 - \left(\frac{\omega}{v_F q}\right)^2\right]$$
                  </div>
                  <p class="formula-note">
                    当 |ω/v_F q| < 1 时的虚部
                  </p>
                </div>

                <div class="damping-mechanism">
                  <h5>阻尼机制：</h5>
                  <ul>
                    <li>集体激发与单粒子激发的耦合</li>
                    <li>等离激元的有限寿命</li>
                    <li>能量耗散到电子-空穴对</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="plasmon-dispersion">
              <h4>等离激元色散关系</h4>
              <div class="dispersion-analysis">
                <p><strong>色散方程：</strong>ε(q,ω) = 0 的解</p>
                
                <div class="dispersion-formula">
                  <div class="math-display">
                    $$\omega_p^2(q) = \omega_p^2 + \frac{3}{5}v_F^2 q^2 + O(q^4)$$
                  </div>
                  <p class="formula-note">
                    长波长极限下的等离激元频率
                  </p>
                </div>

                <div class="dispersion-features">
                  <h5>色散特征：</h5>
                  <ul>
                    <li>ω_p = √(4πne²/m) 是等离激元频率</li>
                    <li>正色散：频率随波矢增加</li>
                    <li>量子修正：3v_F²q²/5 项</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 介电函数与屏蔽效应 -->
    <div class="content-section">
      <h2>🛡️ 介电函数与屏蔽效应</h2>
      
      <div class="dielectric-analysis">
        <div class="dielectric-function">
          <h3>📊 RPA介电函数</h3>
          <div class="dielectric-content">
            <div class="dielectric-formula">
              <div class="math-display">
                $$\varepsilon(q,\omega) = 1 - V(q)\chi_0(q,\omega) = 1 - \frac{4\pi e^2}{q^2}\chi_0(q,\omega)$$
              </div>
              <p class="formula-note">
                连接微观响应与宏观介电性质
              </p>
            </div>

            <div class="dielectric-properties">
              <h4>介电函数的性质：</h4>
              <div class="property-grid">
                <div class="property-card causality">
                  <h5>因果性</h5>
                  <div class="math-display">
                    $$\varepsilon^*(-q,-\omega) = \varepsilon(q,\omega)$$
                  </div>
                  <p>时间反演对称性</p>
                </div>

                <div class="property-card kramers-kronig">
                  <h5>Kramers-Kronig关系</h5>
                  <div class="math-display">
                    $$\text{Re}\varepsilon(q,\omega) = 1 + \frac{2}{\pi}\mathcal{P}\int_0^{\infty} \frac{\omega' \text{Im}\varepsilon(q,\omega')}{\omega'^2 - \omega^2}d\omega'$$
                  </div>
                  <p>实部与虚部的关联</p>
                </div>

                <div class="property-card sum-rule">
                  <h5>求和定则</h5>
                  <div class="math-display">
                    $$\int_0^{\infty} \omega \text{Im}\varepsilon(q,\omega) d\omega = \frac{\pi \omega_p^2}{2}$$
                  </div>
                  <p>频率积分的约束</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="screening-mechanisms">
          <h3>🔄 屏蔽机制详解</h3>
          <div class="screening-content">
            <div class="effective-interaction">
              <h4>有效相互作用</h4>
              <div class="interaction-formula">
                <div class="math-display">
                  $$V^{eff}(q,\omega) = \frac{V(q)}{\varepsilon(q,\omega)} = \frac{4\pi e^2}{q^2 \varepsilon(q,\omega)}$$
                </div>
                <p class="formula-note">
                  屏蔽后的有效Coulomb相互作用
                </p>
              </div>

              <div class="screening-regimes">
                <h5>不同屏蔽区域：</h5>
                <div class="screening-comparison">
                  <table class="screening-table">
                    <thead>
                      <tr>
                        <th>频率区域</th>
                        <th>屏蔽特征</th>
                        <th>物理机制</th>
                        <th>典型应用</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>ω = 0</strong></td>
                        <td>静态屏蔽</td>
                        <td>Thomas-Fermi</td>
                        <td>杂质散射</td>
                      </tr>
                      <tr>
                        <td><strong>ω ≪ ω_p</strong></td>
                        <td>准静态屏蔽</td>
                        <td>电子重排</td>
                        <td>声子相互作用</td>
                      </tr>
                      <tr>
                        <td><strong>ω ≈ ω_p</strong></td>
                        <td>等离激元共振</td>
                        <td>集体激发</td>
                        <td>光学性质</td>
                      </tr>
                      <tr>
                        <td><strong>ω ≫ ω_p</strong></td>
                        <td>弱屏蔽</td>
                        <td>高频透明</td>
                        <td>X射线散射</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 物理应用与实验验证 -->
    <div class="content-section">
      <h2>🌟 物理应用与实验验证</h2>
      
      <div class="applications">
        <div class="application-grid">
          <div class="application-card electron-scattering">
            <div class="app-icon">🎯</div>
            <h3>电子散射实验</h3>
            <div class="app-content">
              <p><strong>实验原理：</strong>高能电子束探测金属的电子结构</p>
              
              <div class="scattering-cross-section">
                <h4>散射截面：</h4>
                <div class="math-display">
                  $$\frac{d^2\sigma}{d\Omega dE} \propto \left|\frac{1}{\varepsilon(q,\omega)}\right|^2 S(q,\omega)$$
                </div>
                <p class="formula-note">
                  动态结构因子与介电函数的关系
                </p>
              </div>

              <div class="experimental-signatures">
                <h4>实验特征：</h4>
                <ul>
                  <li>等离激元峰的观测</li>
                  <li>Landau阻尼的测量</li>
                  <li>色散关系的验证</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="application-card optical-properties">
            <div class="app-icon">🌈</div>
            <h3>光学性质计算</h3>
            <div class="app-content">
              <p><strong>理论框架：</strong>通过介电函数计算光学常数</p>
              
              <div class="optical-constants">
                <h4>光学常数：</h4>
                <div class="constants-grid">
                  <div class="constant-item">
                    <strong>折射率：</strong>
                    <div class="math-display">$$n = \sqrt{\frac{|\varepsilon| + \text{Re}\varepsilon}{2}}$$</div>
                  </div>
                  <div class="constant-item">
                    <strong>消光系数：</strong>
                    <div class="math-display">$$\kappa = \sqrt{\frac{|\varepsilon| - \text{Re}\varepsilon}{2}}$$</div>
                  </div>
                </div>
              </div>

              <div class="optical-phenomena">
                <h4>光学现象：</h4>
                <ul>
                  <li>等离激元共振吸收</li>
                  <li>金属的反射特性</li>
                  <li>表面等离激元激发</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="application-card transport-properties">
            <div class="app-icon">⚡</div>
            <h3>输运性质</h3>
            <div class="app-content">
              <p><strong>理论联系：</strong>屏蔽效应对输运的影响</p>
              
              <div class="transport-formula">
                <h4>电导率：</h4>
                <div class="math-display">
                  $$\sigma(\omega) = \frac{ne^2\tau}{m} \frac{1}{1 - i\omega\tau}$$
                </div>
                <p class="formula-note">
                  其中τ受屏蔽效应调制
                </p>
              </div>

              <div class="transport-effects">
                <h4>输运效应：</h4>
                <ul>
                  <li>杂质散射的屏蔽</li>
                  <li>电子-声子相互作用</li>
                  <li>霍尔效应的修正</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="application-card many-body-corrections">
            <div class="app-icon">🔗</div>
            <h3>多体修正</h3>
            <div class="app-content">
              <p><strong>超越RPA：</strong>包含交换-关联效应</p>
              
              <div class="corrections-formula">
                <h4>局域场修正：</h4>
                <div class="math-display">
                  $$\varepsilon(q,\omega) = 1 - \frac{V(q)\chi_0(q,\omega)}{1 + V(q)G(q)\chi_0(q,\omega)}$$
                </div>
                <p class="formula-note">
                  G(q)是局域场因子
                </p>
              </div>

              <div class="correction-effects">
                <h4>修正效应：</h4>
                <ul>
                  <li>交换-关联空穴</li>
                  <li>准粒子重整化</li>
                  <li>自能修正</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 计算方法与数值技术 -->
    <div class="content-section">
      <h2>🔧 计算方法与数值技术</h2>
      
      <div class="computational-methods">
        <div class="method-categories">
          <div class="method-card analytical-methods">
            <h3>📐 解析方法</h3>
            <div class="method-content">
              <div class="analytical-techniques">
                <h4>主要技术：</h4>
                <ul>
                  <li><strong>复分析：</strong>处理极点和分支切割</li>
                  <li><strong>渐近展开：</strong>不同极限下的近似</li>
                  <li><strong>积分变换：</strong>傅里叶和拉普拉斯变换</li>
                </ul>
              </div>

              <div class="analytical-challenges">
                <h4>计算挑战：</h4>
                <ul>
                  <li>复杂的积分计算</li>
                  <li>奇点的处理</li>
                  <li>多重积分的求值</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="method-card numerical-methods">
            <h3>💻 数值方法</h3>
            <div class="method-content">
              <div class="numerical-techniques">
                <h4>主要算法：</h4>
                <ul>
                  <li><strong>自适应积分：</strong>处理奇异积分</li>
                  <li><strong>复平面积分：</strong>围道积分方法</li>
                  <li><strong>并行计算：</strong>大规模k点求和</li>
                </ul>
              </div>

              <div class="numerical-considerations">
                <h4>数值考虑：</h4>
                <ul>
                  <li>收敛性检查</li>
                  <li>精度控制</li>
                  <li>计算效率优化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="implementation-details">
          <h3>🛠️ 实现细节</h3>
          <div class="implementation-content">
            <div class="code-structure">
              <h4>程序结构：</h4>
              <div class="structure-flow">
                <div class="flow-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h5>参数初始化</h5>
                    <p>设置k_F, ω_p, 温度等物理参数</p>
                  </div>
                </div>

                <div class="flow-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h5>网格生成</h5>
                    <p>构建q和ω的计算网格</p>
                  </div>
                </div>

                <div class="flow-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h5>积分计算</h5>
                    <p>数值计算Lindhard函数</p>
                  </div>
                </div>

                <div class="flow-step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h5>结果分析</h5>
                    <p>提取物理量和绘制图形</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary">
      <h2>本节总结</h2>
      <div class="key-points">
        <div class="point-item">
          <div class="point-number">1</div>
          <div class="point-content">
            <strong>理论基础：</strong>Lindhard函数在RPA框架下给出了电子气线性响应的精确描述
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">2</div>
          <div class="point-content">
            <strong>解析表达式：</strong>完整的Lindhard函数包含了所有的Landau阻尼和等离激元效应
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">3</div>
          <div class="point-content">
            <strong>极限行为：</strong>静态和动态极限揭示了不同的物理机制和屏蔽效应
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">4</div>
          <div class="point-content">
            <strong>介电函数：</strong>通过RPA介电函数连接微观响应与宏观电磁性质
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">5</div>
          <div class="point-content">
            <strong>广泛应用：</strong>从电子散射到光学性质，Lindhard理论是现代固体物理的基石
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_5',
  mounted() {
    // 添加数学公式渲染
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

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
  padding: 30px 0;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 15px;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.chapter-tag, .reading-time {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.introduction {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 5px solid #4facfe;
}

.lead-text {
  font-size: 1.2em;
  color: #2c3e50;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 3px solid #4facfe;
}

/* 理论基础样式 */
.foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.foundation-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2rem;
  border-left: 5px solid;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.foundation-card.linear-response {
  border-left-color: #28a745;
}

.foundation-card.rpa-approximation {
  border-left-color: #007bff;
}

.foundation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.foundation-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.foundation-content h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.response-equation, .fourier-transform {
  margin: 1.5rem 0;
}

.rpa-assumptions, .rpa-validity {
  margin-top: 1.5rem;
}

.rpa-assumptions h4, .rpa-validity h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

/* Lindhard表达式样式 */
.exact-formula {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.formula-block {
  margin: 1.5rem 0;
}

.main-formula {
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.math-display {
  text-align: center;
  font-size: 1.1em;
  margin: 1rem 0;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
}

.formula-note {
  font-style: italic;
  color: #4a5568;
  margin-top: 0.5rem;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.component-item {
  background: rgba(255,255,255,0.6);
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9em;
}

/* 解析计算样式 */
.evaluation-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.step-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #4caf50;
}

.step-card h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.step-content p {
  margin-bottom: 0.5rem;
}

/* 极限分析样式 */
.limits-analysis {
  margin: 2rem 0;
}

.static-limit, .dynamic-limit {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.static-formula, .damping-formula, .dispersion-formula {
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
}

.regime-analysis {
  margin: 2rem 0;
}

.regime-card {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
}

.regime-card h5 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.physical-meaning {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.physical-meaning h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

/* 介电函数样式 */
.dielectric-content {
  margin: 2rem 0;
}

.dielectric-formula {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 1.5rem 0;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.property-card {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.property-card h5 {
  color: #2d3748;
  margin-bottom: 1rem;
}

/* 屏蔽机制样式 */
.screening-content {
  margin: 2rem 0;
}

.effective-interaction {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 1.5rem 0;
}

.interaction-formula {
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
}

.screening-comparison {
  overflow-x: auto;
  margin: 2rem 0;
}

.screening-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.screening-table th {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.screening-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

.screening-table tr:hover {
  background-color: #f8f9fa;
}

/* 应用样式 */
.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-card {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 15px;
  padding: 2rem;
  border-left: 5px solid;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.application-card.electron-scattering {
  border-left-color: #e53e3e;
}

.application-card.optical-properties {
  border-left-color: #dd6b20;
}

.application-card.transport-properties {
  border-left-color: #3182ce;
}

.application-card.many-body-corrections {
  border-left-color: #805ad5;
}

.application-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.app-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.app-content h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.scattering-cross-section, .optical-constants, .transport-formula, .corrections-formula {
  margin: 1.5rem 0;
}

.constants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.constant-item {
  background: rgba(255,255,255,0.8);
  padding: 1rem;
  border-radius: 8px;
}

.experimental-signatures, .optical-phenomena, .transport-effects, .correction-effects {
  margin-top: 1.5rem;
}

.experimental-signatures h4, .optical-phenomena h4, .transport-effects h4, .correction-effects h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

/* 计算方法样式 */
.method-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.method-card {
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
  border-radius: 15px;
  padding: 2rem;
  border-left: 5px solid #e53e3e;
}

.method-card.numerical-methods {
  background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
  border-left-color: #38a169;
}

.method-content h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.analytical-techniques, .numerical-techniques {
  margin-bottom: 1.5rem;
}

.analytical-challenges, .numerical-considerations {
  margin-top: 1.5rem;
}

/* 实现细节样式 */
.implementation-details {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.structure-flow {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.flow-step {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 10px;
  gap: 1.5rem;
}

.step-number {
  background: #4facfe;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h5 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

/* 总结样式 */
.summary {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 50px;
}

.summary h2 {
  color: white;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.point-number {
  background: rgba(255,255,255,0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
}

.point-content {
  flex: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .foundation-grid {
    grid-template-columns: 1fr;
  }
  
  .property-grid {
    grid-template-columns: 1fr;
  }
  
  .application-grid {
    grid-template-columns: 1fr;
  }
  
  .method-categories {
    grid-template-columns: 1fr;
  }
  
  .constants-grid {
    grid-template-columns: 1fr;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
  
  .point-number {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .flow-step {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .chapter-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .foundation-card, .application-card, .method-card {
    padding: 1.5rem;
  }
  
  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>