<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.4.2 一般情况的对应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子-经典对应</span>
        <span class="chapter-tag">统计力学</span>
        <span class="reading-time">⏱ 30分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        量子统计力学与经典统计力学之间存在深刻的对应关系。在适当的极限条件下，量子系统的行为会过渡到经典系统。
        本节将系统地探讨这种对应关系的一般性质，包括高温极限、经典极限以及半经典近似等重要概念。
      </p>
    </div>

    <section class="content-section">
      <h2>量子-经典对应的基本原理</h2>
      
      <div class="correspondence-principles">
        <div class="principle-card bohr">
          <h3>玻尔对应原理</h3>
          <div class="principle-content">
            <p><strong>基本思想：</strong>在量子数很大的极限下，量子力学的结果应该与经典力学一致。</p>
            <div class="formula-block">
              <katex-element expression="\lim_{n \to \infty} \frac{\omega_{n+1,n}}{n} = \omega_{\text{classical}}" :inline="false" />
            </div>
            <p>其中 $\omega_{n+1,n}$ 是量子跃迁频率，$\omega_{\text{classical}}$是经典轨道频率。</p>
            
            <div class="example-box">
              <h4>谐振子的例子</h4><p>量子谐振子的能级：$E_n = \hbar\omega(n + 1/2)$</p><p>跃迁频率：$\omega_{n+1,n} = \omega$（与n无关）</p><p>经典频率：$\omega_{\text{classical}} = \omega$</p>
              <p>完美对应！</p>
            </div>
          </div>
        </div>

        <div class="principle-card wkb">
          <h3>WKB近似与半经典极限</h3>
          <div class="principle-content"><p><strong>适用条件：</strong>$\hbar \to 0$ 或作用量 $S \gg \hbar$</p>
            <div class="formula-block">
              <katex-element expression="\psi(x) \approx \frac{1}{\sqrt{p(x)}} \exp\left(\frac{i}{\hbar} \int^x p(x') dx'\right)" :inline="false" />
            </div><p>其中$p(x) = \sqrt{2m[E - V(x)]}$是经典动量。</p>
            
            <div class="quantization-condition">
              <h4>Bohr-Sommerfeld量子化条件</h4>
              <div class="formula-block">
                <katex-element expression="\oint p \, dq = 2\pi\hbar \left(n + \frac{1}{2}\right)" :inline="false" />
              </div>
              <p>这直接连接了量子化条件与经典相空间积分。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>统计力学中的对应关系</h2>
      
      <div class="statistical-correspondence">
        <div class="correspondence-type">
          <h3>高温极限 (Classical Limit)</h3>
          <div class="correspondence-content"><p><strong>条件：</strong>$k_B T \gg \hbar\omega$（热能远大于量子能级间距）</p>
            
            <div class="limit-analysis">
              <h4>配分函数的对应</h4>
              <p><strong>量子配分函数：</strong></p>
              <div class="formula-block">
                <katex-element expression="Z_{\text{quantum}} = \sum_n e^{-\beta E_n}" :inline="false" />
              </div>
              
              <p><strong>经典配分函数：</strong></p>
              <div class="formula-block">
                <katex-element expression="Z_{\text{classical}} = \frac{1}{h^{3N}} \int e^{-\beta H(p,q)} d^{3N}p \, d^{3N}q" :inline="false" />
              </div>
              
              <p><strong>对应关系：</strong></p>
              <div class="formula-block">
                <katex-element expression="\lim_{T \to \infty} Z_{\text{quantum}} = Z_{\text{classical}}" :inline="false" />
              </div>
            </div>

            <div class="example-detailed">
              <h4>详细例子：一维谐振子</h4>
              <div class="quantum-classical-comparison">
                <div class="quantum-side">
                  <h5>量子情况</h5>
                  <div class="formula-block">
                    <katex-element expression="Z_q = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega(n+1/2)} = \frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}}" :inline="false" />
                  </div>
                  <p>高温展开：</p>
                  <div class="formula-block">
                    <katex-element expression="Z_q \approx \frac{k_B T}{\hbar\omega} \quad (\beta\hbar\omega \ll 1)" :inline="false" />
                  </div>
                </div>
                
                <div class="classical-side">
                  <h5>经典情况</h5>
                  <div class="formula-block">
                    <katex-element expression="Z_c = \frac{1}{h} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-\beta(p^2/2m + m\omega^2x^2/2)} dp \, dx" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="Z_c = \frac{1}{h} \cdot \sqrt{\frac{2\pi m}{k_B T}} \cdot \sqrt{\frac{2\pi k_B T}{m\omega^2}} = \frac{k_B T}{\hbar\omega}" :inline="false" />
                  </div>
                </div>
              </div>
              <p class="correspondence-note">在高温极限下，两者完全一致！</p>
            </div>
          </div>
        </div>

        <div class="correspondence-type">
          <h3>大量子数极限</h3>
          <div class="correspondence-content"><p><strong>条件：</strong>主量子数$n \gg 1$</p>
            
            <div class="large-n-analysis">
              <h4>能级密度的对应</h4>
              <p>量子能级密度：</p>
              <div class="formula-block">
                <katex-element expression="\rho(E) = \sum_n \delta(E - E_n)" :inline="false" />
              </div>
              
              <p>经典相空间密度：</p>
              <div class="formula-block">
                <katex-element expression="\rho_{\text{classical}}(E) = \frac{1}{h^f} \int \delta(E - H(p,q)) d^f p \, d^f q" :inline="false" />
              </div><p>其中$f$是自由度数。</p>
              
              <div class="thomas-fermi-example">
                <h4>Thomas-Fermi近似</h4>
                <p>对于原子系统，电子密度：</p>
                <div class="formula-block">
                  <katex-element expression="n(r) = \frac{1}{3\pi^2} [2m(\mu - V(r))]^{3/2}" :inline="false" />
                </div>
                <p>这是量子费米气体在局域密度近似下的经典极限。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>路径积分表述中的对应关系</h2>
      
      <div class="path-integral-correspondence">
        <div class="formulation-card">
          <h3>Feynman路径积分</h3>
          <div class="formulation-content">
            <p><strong>量子传播子：</strong></p>
            <div class="formula-block">
              <katex-element expression="K(x_f, t_f; x_i, t_i) = \int \mathcal{D}x(t) \exp\left(\frac{i}{\hbar} S[x(t)]\right)" :inline="false" />
            </div><p><strong>经典极限：</strong>$\hbar \to 0$</p>
            <div class="formula-block">
              <katex-element expression="K \approx \sqrt{\frac{1}{2\pi i \hbar} \frac{\partial^2 S_{\text{cl}}}{\partial x_i \partial x_f}} \exp\left(\frac{i}{\hbar} S_{\text{cl}}\right)" :inline="false" />
            </div><p>其中$S_{\text{cl}}$是经典作用量。</p>
          </div>
        </div>

        <div class="formulation-card">
          <h3>虚时路径积分与统计力学</h3>
          <div class="formulation-content">
            <p><strong>量子统计：</strong></p>
            <div class="formula-block">
              <katex-element expression="Z = \text{Tr}[e^{-\beta H}] = \int \mathcal{D}x(\tau) \exp\left(-\frac{1}{\hbar} S_E[x(\tau)]\right)" :inline="false" />
            </div>
            
            <p><strong>经典极限：</strong></p>
            <div class="formula-block">
              <katex-element expression="Z \approx \int e^{-\beta H_{\text{classical}}(p,q)} \frac{dp \, dq}{h^f}" :inline="false" />
            </div>
            
            <div class="saddle-point-method">
              <h4>鞍点方法 (Saddle Point Method)</h4>
              <p>在经典极限下，路径积分由经典轨道主导：</p>
              <div class="formula-block">
                <katex-element expression="\frac{\delta S_E}{\delta x(\tau)} = 0 \Rightarrow \text{经典运动方程}" :inline="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>具体系统的对应关系</h2>
      
      <div class="system-examples">
        <div class="system-card">
          <h3>理想气体</h3>
          <div class="system-content">
            <div class="quantum-classical-table">
              <table>
                <thead>
                  <tr>
                    <th>物理量</th>
                    <th>量子表达式</th>
                    <th>经典极限</th>
                    <th>对应条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>配分函数</td><td>$Z = \sum_{\{n_k\}} \prod_k \frac{1}{n_k!} \left(\frac{V}{h^3}\right)^{n_k}$</td><td>$Z = \frac{1}{N!}\left(\frac{V}{\lambda_T^3}\right)^N$</td><td>$n \lambda_T^3 \ll V$</td>
                  </tr>
                  <tr>
                    <td>内能</td><td>$U = \sum_k \varepsilon_k \langle n_k \rangle$</td><td>$U = \frac{3}{2} N k_B T$</td>
                    <td>高温</td>
                  </tr>
                  <tr>
                    <td>压强</td><td>$P = \frac{1}{\beta} \frac{\partial \ln Z}{\partial V}$</td><td>$P = \frac{N k_B T}{V}$</td>
                    <td>非简并</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="degeneracy-parameter">
              <h4>简并参数</h4>
              <div class="formula-block">
                <katex-element expression="\text{简并参数} = n \lambda_T^3 = \frac{N}{V} \left(\frac{h^2}{2\pi m k_B T}\right)^{3/2}" :inline="false" />
              </div><p>当简并参数$\ll 1$时，系统表现为经典行为。</p>
            </div>
          </div>
        </div>

        <div class="system-card">
          <h3>谐振子系统</h3>
          <div class="system-content">
            <div class="oscillator-comparison">
              <div class="quantum-oscillator">
                <h4>量子谐振子</h4>
                <div class="formula-block">
                  <katex-element expression="E_n = \hbar\omega\left(n + \frac{1}{2}\right)" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\langle E \rangle = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}" :inline="false" />
                </div>
              </div>
              
              <div class="classical-oscillator">
                <h4>经典谐振子</h4>
                <div class="formula-block">
                  <katex-element expression="H = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\langle E \rangle_{\text{classical}} = k_B T" :inline="false" />
                </div>
              </div>
            </div>
            
            <div class="temperature-regimes">
              <h4>不同温度区间</h4>
              <ul><li><strong>高温：</strong>$k_B T \gg \hbar\omega$ → $\langle E \rangle \approx k_B T$（经典）</li><li><strong>低温：</strong>$k_B T \ll \hbar\omega$ → $\langle E \rangle \approx \hbar\omega/2$（量子零点能）</li>
                <li><strong>中等温度：</strong>需要完整的量子表达式</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="system-card">
          <h3>自旋系统</h3>
          <div class="system-content">
            <div class="spin-correspondence">
              <h4>大自旋极限</h4><p>对于自旋$S$ 的系统，当 $S \gg 1$时：</p>
              <div class="formula-block">
                <katex-element expression="\vec{S} \to S \hat{n}(\theta, \phi)" :inline="false" />
              </div><p>其中$\hat{n}$是经典单位矢量。</p>
              
              <div class="classical-spin-model">
                <h4>经典自旋模型</h4>
                <p><strong>Ising模型：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H = -J \sum_{\langle i,j \rangle} S_i S_j \quad (S_i = \pm 1)" :inline="false" />
                </div>
                
                <p><strong>Heisenberg模型的经典极限：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H = -J \sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j \to -J S^2 \sum_{\langle i,j \rangle} \hat{n}_i \cdot \hat{n}_j" :inline="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>量子修正与经典极限的偏离</h2>
      
      <div class="quantum-corrections">
        <div class="correction-type"><h3>$\hbar$展开</h3>
          <div class="correction-content"><p>物理量可以按$\hbar$的幂次展开：</p>
            <div class="formula-block">
              <katex-element expression="\langle A \rangle = \langle A \rangle_0 + \hbar \langle A \rangle_1 + \hbar^2 \langle A \rangle_2 + \cdots" :inline="false" />
            </div>
            
            <div class="correction-examples">
              <h4>具体例子</h4>
              <div class="example-item">
                <h5>谐振子的位置涨落</h5>
                <div class="formula-block">
                  <katex-element expression="\langle x^2 \rangle = \langle x^2 \rangle_{\text{classical}} + \frac{\hbar^2}{4m^2\omega^2 \langle p^2 \rangle_{\text{classical}}}" :inline="false" />
                </div>
                <p>第二项是量子修正，来源于不确定性原理。</p>
              </div>
              
              <div class="example-item">
                <h5>理想气体的状态方程</h5>
                <div class="formula-block">
                  <katex-element expression="PV = Nk_B T \left(1 + \frac{n\lambda_T^3}{8} + \cdots\right)" :inline="false" />
                </div>
                <p>量子修正项与德布罗意波长相关。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="correction-type">
          <h3>温度修正</h3>
          <div class="correction-content">
            <p>在有限温度下，量子效应的重要性由无量纲参数决定：</p>
            <div class="formula-block">
              <katex-element expression="\xi = \frac{\hbar\omega}{k_B T}, \quad \eta = \frac{n\lambda_T^3}{1}" :inline="false" />
            </div>
            
            <div class="parameter-regimes">
              <h4>不同参数区间</h4>
              <div class="regime-table">
                <table>
                  <thead>
                    <tr>
                      <th>参数范围</th>
                      <th>物理描述</th>
                      <th>主要特征</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>$\xi \ll 1, \eta \ll 1$</td>
                      <td>经典极限</td>
                      <td>经典统计力学适用</td>
                    </tr>
                    <tr><td>$\xi \gg 1, \eta \ll 1$</td>
                      <td>量子谐振子，经典气体</td>
                      <td>零点振动重要</td>
                    </tr>
                    <tr><td>$\xi \ll 1, \eta \gg 1$</td>
                      <td>经典振动，量子简并</td>
                      <td>费米/玻色统计重要</td>
                    </tr>
                    <tr><td>$\xi \gg 1, \eta \gg 1$</td>
                      <td>完全量子区间</td>
                      <td>需要完整量子处理</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验验证与应用</h2>
      
      <div class="experimental-verification">
        <div class="experiment-card">
          <h3>比热测量</h3>
          <div class="experiment-content">
            <p><strong>固体比热：</strong>从Dubye模型到经典值</p>
            <div class="formula-block">
              <katex-element expression="C_V = 3Nk_B \times \begin{cases} 
              \left(\frac{T}{\Theta_D}\right)^3 & T \ll \Theta_D \\
              1 & T \gg \Theta_D
              \end{cases}" :inline="false" />
            </div><p>其中$\Theta_D$是德拜温度。</p>
            
            <div class="experimental-data">
              <h4>典型实验结果</h4>
              <ul><li>低温：$C_V \propto T^3$（量子效应主导）</li><li>高温：$C_V \to 3Nk_B$（经典极限）</li><li>转变温度：$T \sim \Theta_D$</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="experiment-card">
          <h3>磁化率测量</h3>
          <div class="experiment-content">
            <p><strong>顺磁性：</strong>从量子到经典</p>
            <div class="formula-block">
              <katex-element expression="\chi = \frac{\mu_0 \mu_B^2 g^2}{3k_B T} \times \begin{cases}
              J(J+1) & \text{量子} \\
              S(S+1) & \text{经典}
              \end{cases}" :inline="false" />
            </div>
            
            <div class="curie-weiss-law">
              <h4>Curie-Weiss定律</h4>
              <p>在高温极限下，量子和经典结果都给出：</p>
              <div class="formula-block">
                <katex-element expression="\chi = \frac{C}{T - \Theta_W}" :inline="false" />
              </div><p>但Curie常数$C$的具体值依赖于量子数。</p>
            </div>
          </div>
        </div>

        <div class="experiment-card">
          <h3>输运性质</h3>
          <div class="experiment-content">
            <p><strong>电导率：</strong>从量子到经典输运</p>
            
            <div class="transport-regimes">
              <h4>不同输运区间</h4>
              <div class="regime-comparison">
                <div class="quantum-transport">
                  <h5>量子输运</h5>
                  <ul><li>弹道输运：$G = \frac{2e^2}{h} \times \text{透射概率}$</li>
                    <li>局域化效应</li>
                    <li>量子霍尔效应</li>
                  </ul>
                </div>
                
                <div class="classical-transport">
                  <h5>经典输运</h5>
                  <ul><li>欧姆定律：$\sigma = \frac{ne^2\tau}{m}$</li>
                    <li>德鲁德模型</li>
                    <li>玻尔兹曼输运方程</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>小结与展望</h2>
      
      <div class="summary-content">
        <div class="key-insights">
          <h3>核心洞察</h3>
          <ul>
            <li>量子-经典对应不是简单的极限过程，而是涉及多个参数的复杂转变</li>
            <li>不同物理量可能在不同条件下达到经典极限</li>
            <li>量子修正往往以系统性的方式出现，可以通过微扰理论处理</li>
            <li>实验验证为理论提供了重要的检验标准</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>未来发展方向</h3>
          <ul>
            <li>非平衡系统的量子-经典对应</li>
            <li>强关联系统中的对应关系</li>
            <li>拓扑相变中的经典极限</li>
            <li>机器学习辅助的对应关系研究</li>
          </ul>
        </div>
        
        <div class="practical-applications">
          <h3>实际应用</h3>
          <ul>
            <li>材料设计中的量子效应预测</li>
            <li>量子器件的经典模拟</li>
            <li>相变临界现象的理论描述</li>
            <li>计算物理中的近似方法选择</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import KatexElement from '../KatexElement.vue'
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.reading-time {
  background: rgba(255,255,255,0.15);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border-left: 5px solid #667eea;
}

.introduction h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.correspondence-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.principle-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.principle-card.bohr {
  border-left: 5px solid #10b981;
}

.principle-card.wkb {
  border-left: 5px solid #3b82f6;
}

.principle-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.example-box {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.example-box h4 {
  color: #2f855a;
  margin-bottom: 1rem;
}

.quantization-condition {
  background: #fef5e7;
  border: 1px solid #f6e05e;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.quantization-condition h4 {
  color: #d69e2e;
  margin-bottom: 1rem;
}

.statistical-correspondence {
  margin-top: 1.5rem;
}

.correspondence-type {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.correspondence-type h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.example-detailed {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.quantum-classical-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.quantum-side, .classical-side {
  padding: 1rem;
  border-radius: 8px;
}

.quantum-side {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.classical-side {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.correspondence-note {
  text-align: center;
  font-weight: bold;
  color: #2d3748;
  margin-top: 1rem;
  padding: 1rem;
  background: #e6fffa;
  border-radius: 8px;
}

.path-integral-correspondence {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.formulation-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.formulation-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.saddle-point-method {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.system-examples {
  margin-top: 1.5rem;
}

.system-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.system-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.quantum-classical-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.quantum-classical-table th,
.quantum-classical-table td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

.quantum-classical-table th {
  background: #f7fafc;
  font-weight: 600;
}

.degeneracy-parameter {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.oscillator-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.quantum-oscillator, .classical-oscillator {
  padding: 1rem;
  border-radius: 8px;
}

.quantum-oscillator {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.classical-oscillator {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.temperature-regimes {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.spin-correspondence {
  margin-top: 1rem;
}

.classical-spin-model {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.quantum-corrections {
  margin-top: 1.5rem;
}

.correction-type {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.correction-type h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.correction-examples {
  margin-top: 1rem;
}

.example-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.example-item h5 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.parameter-regimes {
  margin-top: 1rem;
}

.regime-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.regime-table th,
.regime-table td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

.regime-table th {
  background: #f7fafc;
  font-weight: 600;
}

.experimental-verification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.experiment-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.experiment-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.experimental-data {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.curie-weiss-law {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.transport-regimes {
  margin-top: 1rem;
}

.regime-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.quantum-transport, .classical-transport {
  padding: 1rem;
  border-radius: 8px;
}

.quantum-transport {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.classical-transport {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.summary-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.key-insights, .future-directions, .practical-applications {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.key-insights h3, .future-directions h3, .practical-applications h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.key-insights {
  border-left: 5px solid #10b981;
}

.future-directions {
  border-left: 5px solid #3b82f6;
}

.practical-applications {
  border-left: 5px solid #f59e0b;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .correspondence-principles,
  .path-integral-correspondence,
  .experimental-verification,
  .summary-content {
    grid-template-columns: 1fr;
  }
  
  .quantum-classical-comparison,
  .oscillator-comparison,
  .regime-comparison {
    grid-template-columns: 1fr;
  }
}
</style>