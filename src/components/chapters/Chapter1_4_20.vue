<template>
  <div class="chapter-content">
    <h2>1.4.20 BCS模型 (BCS Model)</h2>
    
    <div class="section">
      <h3>模型概述与历史背景</h3>
      <p>
        BCS理论由John Bardeen、Leon Cooper和Robert Schrieffer于1957年提出，是描述常规超导体的微观理论。
        该理论成功解释了Cooper对的形成机制和超导现象的微观起源，为超导理论奠定了坚实基础。
        BCS理论不仅解决了超导现象这一重大物理难题，也为后续发展的非常规超导理论、超流理论等提供了重要启发。
      </p>
      <p>
        BCS理论的核心思想是电子通过声子交换形成Cooper对，这些配对的电子在费米面附近形成相干的量子态，
        从而导致电阻为零和完全抗磁性等超导现象。该理论预言的各种物理性质与实验观测高度吻合，
        是凝聚态物理学中最成功的微观理论之一。
      </p>
      <p>
        从历史意义看，BCS理论标志着多体量子理论的重大突破，引入了对称性自发破缺、准粒子激发、
        相干态等重要概念，这些概念后来被广泛应用于粒子物理、核物理、原子物理等多个领域。
        三位创始人因此获得了1972年诺贝尔物理学奖。
      </p>
    </div>

    <div class="section">
      <h3>BCS哈密顿量与基本理论</h3>
      <div class="hamiltonian-section">
        <h4>完整BCS哈密顿量</h4>
        <p>BCS模型的哈密顿量包含动能项和配对相互作用项：</p>
        <KatexElement 
          formula="H = \sum_{k,\sigma} \epsilon_k c_{k\sigma}^\dagger c_{k\sigma} + \sum_{k,k'} V_{kk'} c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger c_{-k'\downarrow} c_{k'\uparrow}"
          display-mode
        />
        
        <h4>简化BCS哈密顿量</h4>
        <p>在常数配对相互作用近似下：</p>
        <KatexElement 
          formula="H = \sum_{k,\sigma} \epsilon_k c_{k\sigma}^\dagger c_{k\sigma} - g\sum_{k,k'} c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger c_{-k'\downarrow} c_{k'\uparrow}"
          display-mode
        />
        <p>其中：</p>
        <ul>
          <li>ε_k = ℏ²k²/2m - μ：单粒子能量（相对于化学势）</li>
          <li>g > 0：有效吸引相互作用强度</li>
          <li>配对发生在时间反演对称的k态之间</li>
        </ul>

        <h4>电声子相互作用的微观起源</h4>
        <div class="electron-phonon">
          <div class="interaction-mechanism">
            <h5>Fröhlich哈密顿量</h5>
            <p>电子与声子的相互作用：</p>
            <KatexElement formula="H_{e-ph} = \sum_{k,q} g_q c_{k+q,\sigma}^\dagger c_{k,\sigma} (a_q + a_{-q}^\dagger)" />
            <ul>
              <li>g_q：电声子耦合常数</li>
              <li>a_q, a_q†：声子产生湮灭算符</li>
              <li>声子介导的电子-电子相互作用</li>
            </ul>
          </div>

          <div class="interaction-mechanism">
            <h5>有效相互作用</h5>
            <p>通过积分声子自由度得到：</p>
            <KatexElement formula="V_{eff}(k,k',\omega) = -\frac{|g_q|^2 \omega_q}{(\omega + i\delta)^2 - \omega_q^2}" />
            <ul>
              <li>在|ε_k|, |ε_k'| < ℏω_D范围内为吸引相互作用</li>
              <li>ω_D：德拜截止频率</li>
              <li>形成Cooper对的能量窗口</li>
            </ul>
          </div>

          <div class="interaction-mechanism">
            <h5>Eliashberg理论</h5>
            <p>更精确的强耦合理论：</p>
            <ul>
              <li>考虑频率依赖的相互作用</li>
              <li>包含声子谱函数α²F(ω)</li>
              <li>库仑排斥的屏蔽效应</li>
              <li>适用于强耦合超导体</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>Cooper对形成与不稳定性</h3>
      <div class="cooper-section">
        <h4>Cooper问题</h4>
        <div class="cooper-problem">
          <p>考虑费米海上方两个电子的束缚态问题：</p>
          <KatexElement formula="H|\psi\rangle = E|\psi\rangle" />
          <p>其中波函数为：</p>
          <KatexElement formula="|\psi\rangle = \sum_{k>k_F} g_k c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger |FS\rangle" />
          
          <h5>薛定谔方程</h5>
          <KatexElement formula="E g_k = 2\epsilon_k g_k - g\sum_{k'>k_F} g_{k'}" />
          
          <h5>Cooper对束缚能</h5>
          <p>在弱耦合极限下：</p>
          <KatexElement formula="E_{Cooper} = -2\hbar\omega_D e^{-2/N(0)g}" />
          <ul>
            <li>N(0)：费米面态密度</li>
            <li>任意微弱吸引相互作用都导致束缚态</li>
            <li>Cooper对尺寸：ξ₀ = ℏv_F/πΔ₀</li>
          </ul>
        </div>

        <div class="cooper-properties">
          <h4>Cooper对的性质</h4>
          <div class="property-grid">
            <div class="property-card">
              <h5>量子数</h5>
              <ul>
                <li><strong>总动量：</strong>k + (-k) = 0</li>
                <li><strong>总自旋：</strong>↑ + ↓ = 0（单重态）</li>
                <li><strong>轨道角动量：</strong>L = 0（s波配对）</li>
                <li><strong>宇称：</strong>偶宇称</li>
              </ul>
            </div>

            <div class="property-card">
              <h5>空间结构</h5>
              <ul>
                <li><strong>相干长度：</strong>ξ₀ ~ 10³-10⁴ Å</li>
                <li><strong>包含电子数：</strong>~10⁶个电子</li>
                <li><strong>重叠程度：</strong>高度重叠</li>
                <li><strong>量子相干：</strong>宏观量子态</li>
              </ul>
            </div>

            <div class="property-card">
              <h5>对称性</h5>
              <ul>
                <li><strong>常规超导：</strong>s波，各向同性</li>
                <li><strong>非常规超导：</strong>d波，p波等</li>
                <li><strong>时间反演：</strong>保持或破缺</li>
                <li><strong>空间反演：</strong>通常保持</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>BCS基态与激发态</h3>
      <div class="bcs-states">
        <h4>BCS基态波函数</h4>
        <p>BCS基态是所有k态的相干叠加：</p>
        <KatexElement 
          formula="|BCS\rangle = \prod_k (u_k + v_k c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger)|0\rangle"
          display-mode
        />
        
        <h4>相干因子</h4>
        <p>Bogoliubov-de Gennes变换的系数：</p>
        <KatexElement 
          formula="u_k^2 = \frac{1}{2}\left(1 + \frac{\epsilon_k}{E_k}\right), \quad v_k^2 = \frac{1}{2}\left(1 - \frac{\epsilon_k}{E_k}\right)"
          display-mode
        />
        <KatexElement 
          formula="u_k^2 + v_k^2 = 1, \quad u_k v_k = \frac{\Delta}{2E_k}"
          display-mode
        />
        
        <h4>准粒子激发谱</h4>
        <p>Bogoliubov准粒子的色散关系：</p>
        <KatexElement 
          formula="E_k = \sqrt{\epsilon_k^2 + \Delta^2}"
          display-mode
        />
        <div class="excitation-properties">
          <ul>
            <li><strong>能隙：</strong>最小激发能为Δ</li>
            <li><strong>粒子-空穴混合：</strong>准粒子既有电子又有空穴成分</li>
            <li><strong>费米面重构：</strong>准粒子谱在费米面处有能隙</li>
            <li><strong>相干峰：</strong>态密度在Δ处发散</li>
          </ul>
        </div>

        <h4>Bogoliubov变换</h4>
        <div class="bogoliubov-transform">
          <p>对角化BCS哈密顿量的正则变换：</p>
          <KatexElement formula="\gamma_{k\uparrow} = u_k c_{k\uparrow} + v_k c_{-k\downarrow}^\dagger" />
          <KatexElement formula="\gamma_{k\downarrow} = u_k c_{-k\downarrow} - v_k c_{k\uparrow}^\dagger" />
          <p>对角化后的哈密顿量：</p>
          <KatexElement formula="H = \sum_k E_k (\gamma_{k\uparrow}^\dagger \gamma_{k\uparrow} + \gamma_{k\downarrow}^\dagger \gamma_{k\downarrow}) + \text{const}" />
        </div>
      </div>
    </div>

    <div class="section">
      <h3>能隙方程与自洽理论</h3>
      <div class="gap-equation-section">
        <h4>自洽能隙方程</h4>
        <p>超导能隙Δ由自洽方程确定：</p>
        <KatexElement 
          formula="\Delta = g\sum_k \frac{\Delta}{2E_k} \tanh\left(\frac{E_k}{2k_B T}\right)"
          display-mode
        />
        
        <h4>零温能隙</h4>
        <p>T = 0时的能隙方程：</p>
        <KatexElement 
          formula="1 = \frac{g}{2}\sum_k \frac{1}{E_k} = \frac{gN(0)}{2}\int_0^{\hbar\omega_D} \frac{d\epsilon}{\sqrt{\epsilon^2 + \Delta_0^2}}"
          display-mode
        />
        <p>弱耦合解：</p>
        <KatexElement 
          formula="\Delta_0 = 2\hbar\omega_D e^{-1/N(0)g}"
          display-mode
        />

        <h4>临界温度</h4>
        <p>Δ → 0时的线性化方程：</p>
        <KatexElement 
          formula="1 = \frac{gN(0)}{2}\int_0^{\hbar\omega_D} \frac{d\epsilon}{\epsilon} \tanh\left(\frac{\epsilon}{2k_B T_c}\right)"
          display-mode
        />
        <p>弱耦合结果：</p>
        <KatexElement 
          formula="k_B T_c = 1.14\hbar\omega_D e^{-1/N(0)g}"
          display-mode
        />

        <h4>温度依赖性</h4>
        <div class="temperature-dependence">
          <h5>能隙的温度演化</h5>
          <ul>
            <li><strong>低温：</strong>Δ(T) ≈ Δ₀[1 - √(2πk_BT/Δ₀)e^(-Δ₀/k_BT)]</li>
            <li><strong>临界温度附近：</strong>Δ(T) ≈ 1.74Δ₀√(1-T/T_c)</li>
            <li><strong>BCS比值：</strong>2Δ₀/k_BT_c = 3.53</li>
          </ul>

          <h5>普适关系</h5>
          <ul>
            <li>能隙与临界温度的关系</li>
            <li>比热跳跃：ΔC/γT_c = 1.43</li>
            <li>热力学临界场：H_c(0) = Δ₀/√2μ₀</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>热力学性质</h3>
      <div class="thermodynamics-section">
        <h4>态密度</h4>
        <p>准粒子态密度：</p>
        <KatexElement formula="N_s(E) = N(0) \frac{|E|}{\sqrt{E^2 - \Delta^2}} \Theta(|E| - \Delta)" />
        <div class="dos-features">
          <ul>
            <li><strong>能隙：</strong>|E| < Δ时态密度为零</li>
            <li><strong>相干峰：</strong>E = ±Δ处发散</li>
            <li><strong>高能行为：</strong>E ≫ Δ时趋于正常态</li>
          </ul>
        </div>

        <h4>比热</h4>
        <div class="specific-heat">
          <p>电子比热：</p>
          <KatexElement formula="C_s = \int_{-\infty}^{\infty} dE \, N_s(E) E^2 \frac{\partial f(E)}{\partial T}" />
          
          <h5>温度依赖行为</h5>
          <ul>
            <li><strong>低温：</strong>C ∝ e^(-Δ/k_BT)（指数激活）</li>
            <li><strong>T_c处跳跃：</strong>ΔC = 1.43γT_c</li>
            <li><strong>高温：</strong>趋于正常态线性行为</li>
          </ul>
        </div>

        <h4>磁性质</h4>
        <div class="magnetic-properties">
          <div class="magnetic-property">
            <h5>Pauli磁化率</h5>
            <p>自旋磁化率被强烈抑制：</p>
            <KatexElement formula="\chi_s = \chi_n \int_{-\infty}^{\infty} dE \, N_s(E) \left(-\frac{\partial f(E)}{\partial E}\right)" />
            <ul>
              <li>低温：χ_s ∝ e^(-Δ/k_BT)</li>
              <li>Knight位移的减小</li>
              <li>NMR弛豫时间的增长</li>
            </ul>
          </div>

          <div class="magnetic-property">
            <h5>轨道抗磁性</h5>
            <ul>
              <li>Meissner效应：完全抗磁性</li>
              <li>London穿透深度：λ_L</li>
              <li>临界磁场：H_c</li>
            </ul>
          </div>
        </div>

        <h4>同位素效应</h4>
        <div class="isotope-effect">
          <p>临界温度与同位素质量的关系：</p>
          <KatexElement formula="T_c \propto M^{-\alpha}, \quad \alpha = 0.5" />
          <ul>
            <li><strong>理论预言：</strong>α = 1/2</li>
            <li><strong>实验验证：</strong>大多数元素超导体符合</li>
            <li><strong>物理起源：</strong>声子频率ω_D ∝ M^(-1/2)</li>
            <li><strong>例外情况：</strong>强耦合超导体偏离</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>电磁响应与输运性质</h3>
      <div class="electromagnetic-response">
        <h4>London理论与Meissner效应</h4>
        <div class="london-theory">
          <h5>London方程</h5>
          <KatexElement formula="\frac{\partial \mathbf{j}_s}{\partial t} = \frac{n_s e^2}{m} \mathbf{E}" />
          <KatexElement formula="\nabla \times \mathbf{j}_s = -\frac{n_s e^2}{m c} \mathbf{B}" />
          
          <h5>穿透深度</h5>
          <KatexElement formula="\lambda_L = \sqrt{\frac{m c^2}{4\pi n_s e^2}}" />
          <ul>
            <li>磁场在超导体内指数衰减</li>
            <li>温度依赖：λ(T) = λ(0)/√(1-(T/T_c)⁴)</li>
            <li>典型值：λ ~ 50-500 nm</li>
          </ul>
        </div>

        <h4>Ginzburg-Landau理论</h4>
        <div class="gl-theory">
          <h5>GL自由能泛函</h5>
          <KatexElement formula="F = F_n + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}|(-i\hbar\nabla - e^*\mathbf{A})\psi|^2 + \frac{|\mathbf{B}|^2}{8\pi}" />
          
          <h5>GL参数</h5>
          <KatexElement formula="\kappa = \frac{\lambda}{\xi}" />
          <ul>
            <li><strong>第一类超导体：</strong>κ < 1/√2</li>
            <li><strong>第二类超导体：</strong>κ > 1/√2</li>
            <li><strong>相干长度：</strong>ξ = ℏ/√(2m*|α|)</li>
          </ul>
        </div>

        <h4>Josephson效应</h4>
        <div class="josephson-effect">
          <h5>直流Josephson效应</h5>
          <KatexElement formula="I = I_c \sin(\phi_2 - \phi_1)" />
          
          <h5>交流Josephson效应</h5>
          <KatexElement formula="\frac{d\phi}{dt} = \frac{2eV}{\hbar}" />
          
          <h5>应用</h5>
          <ul>
            <li><strong>SQUID：</strong>超导量子干涉器件</li>
            <li><strong>约瑟夫森结：</strong>量子器件</li>
            <li><strong>电压标准：</strong>基于约瑟夫森频率</li>
            <li><strong>量子计算：</strong>超导量子比特</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>实验验证与测量技术</h3>
      <div class="experimental-verification">
        <h4>关键实验验证</h4>
        <div class="key-experiments">
          <div class="experiment-card">
            <h5>能隙测量</h5>
            <ul>
              <li><strong>隧道谱：</strong>直接测量准粒子态密度</li>
              <li><strong>光谱学：</strong>红外、拉曼、ARPES</li>
              <li><strong>比热：</strong>指数激活行为</li>
              <li><strong>NMR：</strong>Knight位移和弛豫</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h5>同位素效应</h5>
            <ul>
              <li><strong>汞同位素：</strong>首次验证T_c ∝ M^(-1/2)</li>
              <li><strong>其他元素：</strong>广泛验证</li>
              <li><strong>强耦合偏离：</strong>Pb, Hg等</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h5>相干现象</h5>
            <ul>
              <li><strong>Josephson效应：</strong>宏观量子相干</li>
              <li><strong>磁通量子化：</strong>h/2e</li>
              <li><strong>Little-Parks效应：</strong>周期性振荡</li>
            </ul>
          </div>
        </div>

        <h4>现代测量技术</h4>
        <div class="measurement-techniques">
          <div class="technique-category">
            <h5>谱学技术</h5>
            <div class="technique-list">
              <div class="technique-item">
                <h6>角分辨光电子谱 (ARPES)</h6>
                <ul>
                  <li>直接观测费米面和能隙</li>
                  <li>k空间分辨的电子结构</li>
                  <li>超导能隙的各向异性</li>
                </ul>
              </div>

              <div class="technique-item">
                <h6>扫描隧道谱 (STS)</h6>
                <ul>
                  <li>局域态密度测量</li>
                  <li>空间分辨的能隙分布</li>
                  <li>涡旋态结构</li>
                </ul>
              </div>

              <div class="technique-item">
                <h6>点接触谱</h6>
                <ul>
                  <li>Andreev反射</li>
                  <li>自旋极化测量</li>
                  <li>非常规超导体研究</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="technique-category">
            <h5>输运测量</h5>
            <div class="technique-list">
              <div class="technique-item">
                <h6>电阻率</h6>
                <ul>
                  <li>超导转变温度</li>
                  <li>上临界磁场</li>
                  <li>涨落效应</li>
                </ul>
              </div>

              <div class="technique-item">
                <h6>霍尔效应</h6>
                <ul>
                  <li>载流子浓度</li>
                  <li>费米面重构</li>
                  <li>混合态性质</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="technique-category">
            <h5>磁性测量</h5>
            <div class="technique-list">
              <div class="technique-item">
                <h6>磁化率</h6>
                <ul>
                  <li>Meissner效应</li>
                  <li>临界磁场</li>
                  <li>磁通钉扎</li>
                </ul>
              </div>

              <div class="technique-item">
                <h6>μSR</h6>
                <ul>
                  <li>内部磁场分布</li>
                  <li>穿透深度</li>
                  <li>磁通格子</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>超导材料与应用</h3>
      <div class="materials-applications">
        <h4>超导材料分类</h4>
        <div class="material-categories">
          <div class="material-category">
            <h5>常规超导体</h5>
            <div class="material-examples">
              <div class="material-card">
                <h6>元素超导体</h6>
                <ul>
                  <li><strong>Al：</strong>T_c = 1.2 K，理想BCS行为</li>
                  <li><strong>Nb：</strong>T_c = 9.3 K，技术应用</li>
                  <li><strong>Pb：</strong>T_c = 7.2 K，强耦合</li>
                  <li><strong>Hg：</strong>T_c = 4.2 K，同位素效应</li>
                </ul>
              </div>

              <div class="material-card">
                <h6>合金超导体</h6>
                <ul>
                  <li><strong>NbTi：</strong>实用超导磁体</li>
                  <li><strong>Nb₃Sn：</strong>A15结构，高T_c</li>
                  <li><strong>Nb₃Ge：</strong>最高T_c常规超导体</li>
                </ul>
              </div>

              <div class="material-card">
                <h6>有机超导体</h6>
                <ul>
                  <li><strong>(TMTSF)₂X：</strong>准一维</li>
                  <li><strong>κ-(BEDT-TTF)₂X：</strong>准二维</li>
                  <li><strong>富勒烯：</strong>A₃C₆₀</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="material-category">
            <h5>非常规超导体</h5>
            <div class="material-examples">
              <div class="material-card">
                <h6>铜氧化物高温超导体</h6>
                <ul>
                  <li><strong>La₂₋ₓSrₓCuO₄：</strong>首个高T_c超导体</li>
                  <li><strong>YBa₂Cu₃O₇：</strong>液氮温度超导</li>
                  <li><strong>Bi₂Sr₂Ca₂Cu₃O₁₀：</strong>T_c = 110 K</li>
                  <li><strong>HgBa₂Ca₂Cu₃O₈：</strong>最高T_c = 134 K</li>
                </ul>
              </div>

              <div class="material-card">
                <h6>铁基超导体</h6>
                <ul>
                  <li><strong>LaFeAsO₁₋ₓFₓ：</strong>1111型</li>
                  <li><strong>Ba₁₋ₓKₓFe₂As₂：</strong>122型</li>
                  <li><strong>FeSe：</strong>11型，简单结构</li>
                </ul>
              </div>

              <div class="material-card">
                <h6>重费米子超导体</h6>
                <ul>
                  <li><strong>CeCu₂Si₂：</strong>首个重费米子超导体</li>
                  <li><strong>UPt₃：</strong>多重超导相</li>
                  <li><strong>URu₂Si₂：</strong>隐藏序与超导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h4>技术应用</h4>
        <div class="applications">
          <div class="application-category">
            <h5>电力应用</h5>
            <ul>
              <li><strong>超导电缆：</strong>无损耗输电</li>
              <li><strong>超导储能：</strong>SMES系统</li>
              <li><strong>超导变压器：</strong>高效率</li>
              <li><strong>超导电机：</strong>轻量化</li>
            </ul>
          </div>

          <div class="application-category">
            <h5>磁体技术</h5>
            <ul>
              <li><strong>MRI磁体：</strong>医学成像</li>
              <li><strong>NMR磁体：</strong>科学研究</li>
              <li><strong>粒子加速器：</strong>高能物理</li>
              <li><strong>磁悬浮：</strong>交通运输</li>
            </ul>
          </div>

          <div class="application-category">
            <h5>电子器件</h5>
            <ul>
              <li><strong>SQUID：</strong>超灵敏磁强计</li>
              <li><strong>约瑟夫森器件：</strong>快速开关</li>
              <li><strong>超导滤波器：</strong>通信系统</li>
              <li><strong>量子比特：</strong>量子计算</li>
            </ul>
          </div>

          <div class="application-category">
            <h5>新兴应用</h5>
            <ul>
              <li><strong>量子计算：</strong>超导量子处理器</li>
              <li><strong>量子传感：</strong>精密测量</li>
              <li><strong>太赫兹技术：</strong>约瑟夫森振荡器</li>
              <li><strong>超导电子学：</strong>低功耗器件</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展与扩展</h3>
      <div class="theoretical-developments">
        <h4>BCS理论的扩展</h4>
        <div class="theory-extensions">
          <div class="extension-topic">
            <h5>强耦合理论</h5>
            <ul>
              <li><strong>Eliashberg方程：</strong>频率依赖的能隙</li>
              <li><strong>McMillan公式：</strong>T_c的强耦合修正</li>
              <li><strong>库仑赝势：</strong>μ*参数</li>
              <li><strong>同位素效应偏离：</strong>强耦合材料</li>
            </ul>
          </div>

          <div class="extension-topic">
            <h5>非常规配对</h5>
            <ul>
              <li><strong>d波配对：</strong>铜氧化物超导体</li>
              <li><strong>p波配对：</strong>Sr₂RuO₄，³He</li>
              <li><strong>多带超导：</strong>MgB₂，铁基超导体</li>
              <li><strong>拓扑超导：</strong>Majorana费米子</li>
            </ul>
          </div>

          <div class="extension-topic">
            <h5>无序效应</h5>
            <ul>
              <li><strong>Anderson定理：</strong>s波超导的鲁棒性</li>
              <li><strong>配对破坏：</strong>磁性杂质</li>
              <li><strong>Abrikosov-Gor'kov理论：</strong>磁性杂质效应</li>
              <li><strong>局域化：</strong>强无序极限</li>
            </ul>
          </div>
        </div>

        <h4>现代理论发展</h4>
        <div class="modern-developments">
          <div class="development-topic">
            <h5>数值方法</h5>
            <ul>
              <li><strong>量子蒙特卡罗：</strong>Hubbard模型</li>
              <li><strong>密度泛函理论：</strong>第一性原理计算</li>
              <li><strong>动力学平均场：</strong>强关联系统</li>
              <li><strong>机器学习：</strong>材料设计</li>
            </ul>
          </div>

          <div class="development-topic">
            <h5>拓扑超导</h5>
            <ul>
              <li><strong>拓扑不变量：</strong>Z₂分类</li>
              <li><strong>Majorana费米子：</strong>非阿贝尔统计</li>
              <li><strong>拓扑量子计算：</strong>容错量子比特</li>
              <li><strong>实验实现：</strong>人工拓扑超导体</li>
            </ul>
          </div>

          <div class="development-topic">
            <h5>非平衡超导</h5>
            <ul>
              <li><strong>泵浦-探测：</strong>超快动力学</li>
              <li><strong>光诱导超导：</strong>瞬态超导态</li>
              <li><strong>驱动系统：</strong>Floquet工程</li>
              <li><strong>量子淬火：</strong>相变动力学</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <h5>1911年 - 超导现象发现</h5>
            <p>Onnes发现汞的零电阻现象</p>
          </div>
          <div class="timeline-item">
            <h5>1933年 - Meissner效应</h5>
            <p>发现完全抗磁性</p>
          </div>
          <div class="timeline-item">
            <h5>1935年 - London理论</h5>
            <p>电磁响应的唯象理论</p>
          </div>
          <div class="timeline-item">
            <h5>1950年 - Ginzburg-Landau理论</h5>
            <p>序参量的唯象理论</p>
          </div>
          <div class="timeline-item">
            <h5>1956年 - Cooper对</h5>
            <p>Cooper发现电子配对不稳定性</p>
          </div>
          <div class="timeline-item">
            <h5>1957年 - BCS理论</h5>
            <p>完整的微观理论建立</p>
          </div>
          <div class="timeline-item">
            <h5>1962年 - Josephson效应</h5>
            <p>预言和发现约瑟夫森隧穿</p>
          </div>
          <div class="timeline-item">
            <h5>1986年 - 高温超导</h5>
            <p>铜氧化物超导体发现</p>
          </div>
          <div class="timeline-item">
            <h5>2008年 - 铁基超导</h5>
            <p>新的高温超导家族</p>
          </div>
          <div class="timeline-item">
            <h5>2010年代至今 - 拓扑超导</h5>
            <p>拓扑超导态的理论和实验进展</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相关概念与扩展</h3>
      <div class="related-concepts">
        <div class="concept-grid">
          <div class="concept-card">
            <h4>基础概念</h4>
            <div class="concept-tags">
              <span class="tag">Cooper对</span>
              <span class="tag">能隙</span>
              <span class="tag">准粒子</span>
              <span class="tag">相干态</span>
              <span class="tag">对称性破缺</span>
            </div>
          </div>
          
          <div class="concept-card">
            <h4>相关理论</h4>
            <div class="concept-tags">
              <span class="tag">Ginzburg-Landau理论</span>
              <span class="tag">Eliashberg理论</span>
              <span class="tag">Bogoliubov理论</span>
              <span class="tag">London理论</span>
              <span class="tag">Josephson效应</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>实验技术</h4>
            <div class="concept-tags">
              <span class="tag">隧道谱</span>
              <span class="tag">ARPES</span>
              <span class="tag">比热测量</span>
              <span class="tag">磁化率</span>
              <span class="tag">NMR</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>应用领域</h4>
            <div class="concept-tags">
              <span class="tag">超导磁体</span>
              <span class="tag">SQUID</span>
              <span class="tag">量子计算</span>
              <span class="tag">电力应用</span>
              <span class="tag">医学成像</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>开放问题与未来方向</h3>
      <div class="future-directions">
        <h4>理论挑战</h4>
        <ul>
          <li><strong>高温超导机制：</strong>铜氧化物和铁基超导体的配对机制</li>
          <li><strong>非常规配对：</strong>d波、p波等配对对称性的微观起源</li>
          <li><strong>强关联效应：</strong>Mott物理与超导的关系</li>
          <li><strong>拓扑超导：</strong>内禀拓扑超导材料的设计</li>
        </ul>

        <h4>实验前沿</h4>
        <ul>
          <li><strong>室温超导：</strong>高压下的氢化物超导体</li>
          <li><strong>界面超导：</strong>人工异质结构</li>
          <li><strong>二维超导：</strong>单层和少层材料</li>
          <li><strong>超快动力学：</strong>非平衡超导态</li>
        </ul>

        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>容错超导量子处理器</li>
          <li><strong>能源技术：</strong>超导储能和输电</li>
          <li><strong>医疗技术：</strong>高分辨率MRI</li>
          <li><strong>交通运输：</strong>磁悬浮技术</li>
        </ul>

        <h4>跨学科发展</h4>
        <ul>
          <li><strong>材料科学：</strong>计算驱动的超导材料设计</li>
          <li><strong>量子信息：</strong>超导量子器件</li>
          <li><strong>天体物理：</strong>中子星的超导性</li>
          <li><strong>生物物理：</strong>生物系统中的量子相干</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_20',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.cooper-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.cooper-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  border-left: 4px solid #28a745;
}

.cooper-card h4 {
  color: #28a745;
  margin-bottom: 15px;
}

.gap-section {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.thermo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.thermo-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.thermo-card h4 {
  color: #6f42c1;
  margin-bottom: 10px;
}

.quasiparticle-section {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.quasiparticle-section h4 {
  color: #fd7e14;
  margin-bottom: 15px;
}

.spectrum-note {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #2196f3;
  margin-top: 15px;
}

.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.exp-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.exp-card.tunneling {
  border-left: 4px solid #e74c3c;
}

.exp-card.nmr {
  border-left: 4px solid #f39c12;
}

.exp-card.specific-heat {
  border-left: 4px solid #27ae60;
}

.exp-card.isotope {
  border-left: 4px solid #9b59b6;
}

.exp-card h4 {
  margin-bottom: 10px;
}

.tunneling h4 {
  color: #e74c3c;
}

.nmr h4 {
  color: #f39c12;
}

.specific-heat h4 {
  color: #27ae60;
}

.isotope h4 {
  color: #9b59b6;
}

.limitation-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.limit-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  border-left: 4px solid #dc3545;
}

.limit-item h4 {
  color: #dc3545;
  margin-bottom: 10px;
}

.concept-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  background: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>