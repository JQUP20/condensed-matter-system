<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.4.3 一维Ising模型的转移距阵解与对应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">Ising模型</span>
        <span class="chapter-tag">转移矩阵</span>
        <span class="chapter-tag">精确解</span>
        <span class="reading-time">⏱ 35分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维Ising模型是统计力学中最重要的可精确求解模型之一。通过转移矩阵方法，我们不仅能够得到系统的精确解，
        还能深入理解量子统计与经典统计之间的对应关系。本节将详细介绍转移矩阵方法及其在量子-经典对应中的应用。
      </p>
    </div>

    <section class="content-section">
      <h2>一维Ising模型的基本设定</h2>
      
      <div class="model-setup">
        <div class="hamiltonian-card">
          <h3>哈密顿量</h3>
          <div class="hamiltonian-content">
            <p><strong>经典一维Ising模型：</strong></p>
            <div class="formula-block">
              <katex-element expression="H = -J \sum_{i=1}^{N} \sigma_i \sigma_{i+1} - h \sum_{i=1}^{N} \sigma_i" :inline="false" />
            </div>
            <p>其中：</p>
            <ul>
              <li>$\sigma_i = \pm 1$是第i个格点的自旋</li><li>$J$是最近邻相互作用强度</li><li>$h$是外磁场</li><li>采用周期边界条件：$\sigma_{N+1} = \sigma_1$</li>
            </ul>
            
            <div class="boundary-conditions">
              <h4>边界条件的选择</h4>
              <div class="boundary-types">
                <div class="boundary-type">
                  <h5>周期边界条件 (PBC)</h5>
                  <div class="formula-block">
                    <katex-element expression="\sigma_{N+1} = \sigma_1" :inline="false" />
                  </div>
                  <p>适用于热力学极限的计算</p>
                </div>
                
                <div class="boundary-type">
                  <h5>开放边界条件 (OBC)</h5>
                  <div class="formula-block">
                    <katex-element expression="\text{无约束：} \sigma_1, \sigma_N \text{ 自由}" :inline="false" />
                  </div>
                  <p>适用于有限尺寸效应的研究</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-picture">
          <h3>物理图像</h3>
          <div class="picture-content">
            <div class="spin-chain-diagram">
              <h4>自旋链示意图</h4>
              <div class="chain-visualization">
                <div class="spin-sites">
                  <div class="site">↑</div>
                  <div class="coupling">—J—</div>
                  <div class="site">↓</div>
                  <div class="coupling">—J—</div>
                  <div class="site">↑</div>
                  <div class="coupling">—J—</div>
                  <div class="site">↑</div>
                  <div class="coupling">—J—</div>
                  <div class="site">...</div>
                </div>
                <div class="field-arrows">
                  <div class="field-arrow">h↑</div>
                  <div class="field-arrow">h↑</div>
                  <div class="field-arrow">h↑</div>
                  <div class="field-arrow">h↑</div>
                  <div class="field-arrow">...</div>
                </div>
              </div>
            </div>
            
            <div class="energy-contributions">
              <h4>能量贡献</h4>
              <ul><li><strong>交换能：</strong>$-J\sigma_i\sigma_{i+1}$（相邻自旋相互作用）</li><li><strong>塞曼能：</strong>$-h\sigma_i$（外磁场作用）</li>
                <li><strong>总能量：</strong>所有贡献的求和</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>转移矩阵方法</h2>
      
      <div class="transfer-matrix-method">
        <div class="method-introduction">
          <h3>基本思想</h3>
          <div class="method-content">
            <p>将配分函数表示为转移矩阵的迹：</p>
            <div class="formula-block">
              <katex-element expression="Z = \text{Tr}[T^N]" :inline="false" />
            </div><p>其中$T$ 是 $2 \times 2$ 转移矩阵，$N$是格点数。</p>
            
            <div class="matrix-construction">
              <h4>转移矩阵的构造</h4><p>考虑相邻两个自旋$\sigma_i$ 和 $\sigma_{i+1}$的玻尔兹曼权重：</p>
              <div class="formula-block">
                <katex-element expression="w(\sigma_i, \sigma_{i+1}) = \exp[\beta J \sigma_i \sigma_{i+1} + \frac{\beta h}{2}(\sigma_i + \sigma_{i+1})]" :inline="false" />
              </div>
              
              <p>转移矩阵元素：</p>
              <div class="formula-block">
                <katex-element expression="T_{\sigma_i, \sigma_{i+1}} = w(\sigma_i, \sigma_{i+1})" :inline="false" />
              </div>
            </div>
          </div>
        </div>

        <div class="explicit-matrix">
          <h3>显式矩阵形式</h3>
          <div class="matrix-content">
            <p><strong>无磁场情况 (h = 0)：</strong></p>
            <div class="formula-block">
              <katex-element expression="T = \begin{pmatrix} e^{\beta J} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J} \end{pmatrix}" :inline="false" />
            </div>
            
            <p><strong>有磁场情况：</strong></p>
            <div class="formula-block">
              <katex-element expression="T = \begin{pmatrix} e^{\beta J + \beta h} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J - \beta h} \end{pmatrix}" :inline="false" />
            </div>
            
            <div class="eigenvalue-analysis">
              <h4>本征值分析</h4>
              <p>对于无磁场情况，本征值为：</p>
              <div class="formula-block">
                <katex-element expression="\lambda_{\pm} = e^{\beta J} \pm e^{-\beta J}" :inline="false" />
              </div>
              
              <p>最大本征值：</p>
              <div class="formula-block">
                <katex-element expression="\lambda_+ = e^{\beta J} + e^{-\beta J} = 2\cosh(\beta J)" :inline="false" />
              </div>
              
              <p>次大本征值：</p>
              <div class="formula-block">
                <katex-element expression="\lambda_- = e^{\beta J} - e^{-\beta J} = 2\sinh(\beta J)" :inline="false" />
              </div>
            </div>
          </div>
        </div>

        <div class="thermodynamic-quantities">
          <h3>热力学量的计算</h3>
          <div class="quantities-content">
            <div class="free-energy">
              <h4>自由能</h4><p>在热力学极限$N \to \infty$下：</p>
              <div class="formula-block">
                <katex-element expression="f = -\frac{1}{\beta} \lim_{N \to \infty} \frac{1}{N} \ln Z = -\frac{1}{\beta} \ln \lambda_+" :inline="false" />
              </div>
              <div class="formula-block">
                <katex-element expression="f = -\frac{1}{\beta} \ln[2\cosh(\beta J)]" :inline="false" />
              </div>
            </div>

            <div class="internal-energy">
              <h4>内能</h4>
              <div class="formula-block">
                <katex-element expression="u = -\frac{\partial}{\partial \beta} f = -J \tanh(\beta J)" :inline="false" />
              </div>
            </div>

            <div class="specific-heat">
              <h4>比热</h4>
              <div class="formula-block">
                <katex-element expression="c = \frac{\partial u}{\partial T} = \frac{(\beta J)^2}{\cosh^2(\beta J)}" :inline="false" />
              </div>
            </div>

            <div class="correlation-length">
              <h4>关联长度</h4>
              <div class="formula-block">
                <katex-element expression="\xi = \frac{1}{\ln(\lambda_+/|\lambda_-|)} = \frac{1}{\ln[\coth(\beta J)]}" :inline="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>量子对应：横场Ising模型</h2>
      
      <div class="quantum-correspondence">
        <div class="quantum-model">
          <h3>横场Ising模型</h3>
          <div class="quantum-content">
            <p><strong>量子哈密顿量：</strong></p>
            <div class="formula-block">
              <katex-element expression="H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x" :inline="false" />
            </div><p>其中$\sigma^{x,z}$是Pauli矩阵。</p>
            
            <div class="quantum-classical-mapping">
              <h4>量子-经典映射</h4>
              <div class="mapping-table">
                <table>
                  <thead>
                    <tr>
                      <th>量子横场Ising模型</th>
                      <th>经典Ising模型</th>
                      <th>对应关系</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>空间维度 d</td>
                      <td>空间维度 d</td>
                      <td>直接对应</td>
                    </tr>
                    <tr>
                      <td>量子涨落</td>
                      <td>热涨落</td><td>$\Gamma \leftrightarrow k_B T$</td>
                    </tr>
                    <tr><td>横场强度$\Gamma$</td><td>温度$T$</td>
                      <td>调控参数</td>
                    </tr>
                    <tr>
                      <td>量子相变</td>
                      <td>热相变</td>
                      <td>临界现象</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="suzuki-trotter-decomposition">
          <h3>Suzuki-Trotter分解</h3>
          <div class="decomposition-content">
            <p>将量子配分函数映射到经典配分函数：</p>
            <div class="formula-block">
              <katex-element expression="Z_{\text{quantum}} = \text{Tr}[e^{-\beta H}]" :inline="false" />
            </div>
            
            <p>使用Trotter分解：</p>
            <div class="formula-block">
              <katex-element expression="e^{-\beta H} = \lim_{M \to \infty} \left(e^{-\Delta\tau H_z} e^{-\Delta\tau H_x}\right)^M" :inline="false" />
            </div><p>其中$\Delta\tau = \beta/M$。</p>
            
            <div class="classical-representation">
              <h4>经典表示</h4><p>得到$(d+1)$维经典Ising模型：</p>
              <div class="formula-block">
                <katex-element expression="H_{\text{classical}} = -J \sum_{i,\tau} \sigma_{i,\tau} \sigma_{i+1,\tau} - K \sum_{i,\tau} \sigma_{i,\tau} \sigma_{i,\tau+1}" :inline="false" />
              </div>
              <p>其中耦合常数：</p>
              <div class="formula-block">
                <katex-element expression="K = \frac{1}{2} \ln[\coth(\Delta\tau h)]" :inline="false" />
              </div>
            </div>
          </div>
        </div>

        <div class="phase-diagram">
          <h3>相图对应</h3>
          <div class="phase-content">
            <div class="quantum-phase-diagram">
              <h4>量子相图</h4>
              <div class="phase-regions">
                <div class="phase-region ordered"><h5>有序相 ($\Gamma &lt; \Gamma_c$)</h5>
                  <ul><li>自发磁化$\langle \sigma^z \rangle \neq 0$</li>
                    <li>长程序</li><li>能隙$\Delta &gt; 0$</li>
                  </ul>
                </div>
                
                <div class="phase-region disordered"><h5>无序相 ($\Gamma &gt; \Gamma_c$)</h5>
                  <ul><li>无自发磁化$\langle \sigma^z \rangle = 0$</li>
                    <li>短程序</li><li>无能隙$\Delta = 0$</li>
                  </ul>
                </div>
              </div>
              
              <div class="critical-point"><h5>量子临界点 ($\Gamma = \Gamma_c$)</h5>
                <div class="formula-block">
                  <katex-element expression="\Gamma_c = J \quad \text{(一维情况)}" :inline="false" />
                </div>
                <p>临界指数与经典2D Ising模型相同。</p>
              </div>
            </div>
            
            <div class="correspondence-details">
              <h4>对应关系的细节</h4>
              <div class="correspondence-list">
                <div class="correspondence-item">
                  <h5>关联长度</h5>
                  <div class="formula-block">
                    <katex-element expression="\xi_{\text{quantum}} \sim |\Gamma - \Gamma_c|^{-\nu}" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="\xi_{\text{classical}} \sim |T - T_c|^{-\nu}" :inline="false" />
                  </div><p>临界指数$\nu$相同。</p>
                </div>
                
                <div class="correspondence-item">
                  <h5>序参量</h5>
                  <div class="formula-block">
                    <katex-element expression="m_{\text{quantum}} = \langle \sigma^z \rangle \sim |\Gamma - \Gamma_c|^{\beta}" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="m_{\text{classical}} = \langle \sigma \rangle \sim |T - T_c|^{\beta}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>精确解的详细推导</h2>
      
      <div class="exact-solution">
        <div class="diagonalization">
          <h3>转移矩阵的对角化</h3>
          <div class="diagonalization-content">
            <p><strong>步骤1：特征方程</strong></p>
            <div class="formula-block">
              <katex-element expression="\det(T - \lambda I) = 0" :inline="false" />
            </div>
            
            <p>对于无磁场情况：</p>
            <div class="formula-block">
              <katex-element expression="\det\begin{pmatrix} e^{\beta J} - \lambda & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J} - \lambda \end{pmatrix} = 0" :inline="false" />
            </div>
            
            <p><strong>步骤2：本征值</strong></p>
            <div class="formula-block">
              <katex-element expression="\lambda^2 - 2e^{\beta J}\lambda + (e^{2\beta J} - e^{-2\beta J}) = 0" :inline="false" />
            </div>
            
            <p><strong>步骤3：解得</strong></p>
            <div class="formula-block">
              <katex-element expression="\lambda_{\pm} = e^{\beta J} \pm e^{-\beta J}" :inline="false" />
            </div>
          </div>
        </div>

        <div class="thermodynamic-limit">
          <h3>热力学极限</h3>
          <div class="limit-content">
            <p>配分函数：</p>
            <div class="formula-block">
              <katex-element expression="Z = \lambda_+^N + \lambda_-^N" :inline="false" />
            </div><p>当$N \to \infty$ 时，由于 $\lambda_+ &gt; |\lambda_-|$：</p>
            <div class="formula-block">
              <katex-element expression="Z \approx \lambda_+^N = [2\cosh(\beta J)]^N" :inline="false" />
            </div>
            
            <div class="finite-size-corrections">
              <h4>有限尺寸修正</h4>
              <p>保留次主导项：</p>
              <div class="formula-block">
                <katex-element expression="Z = \lambda_+^N \left[1 + \left(\frac{\lambda_-}{\lambda_+}\right)^N\right]" :inline="false" />
              </div>
              
              <p>修正项的衰减长度：</p>
              <div class="formula-block">
                <katex-element expression="\xi = \frac{1}{\ln(\lambda_+/|\lambda_-|)}" :inline="false" />
              </div>
            </div>
          </div>
        </div>

        <div class="correlation-functions">
          <h3>关联函数</h3>
          <div class="correlation-content">
            <p><strong>自旋-自旋关联函数：</strong></p>
            <div class="formula-block">
              <katex-element expression="G(r) = \langle \sigma_0 \sigma_r \rangle - \langle \sigma_0 \rangle \langle \sigma_r \rangle" :inline="false" />
            </div>
            
            <p>在热力学极限下：</p>
            <div class="formula-block">
              <katex-element expression="G(r) = A \left(\frac{\lambda_-}{\lambda_+}\right)^r = A e^{-r/\xi}" :inline="false" />
            </div>
            
            <div class="correlation-analysis">
              <h4>不同温度区间的行为</h4>
              <div class="temperature-regimes">
                <div class="regime high-temp"><h5>高温 ($\beta J \ll 1$)</h5>
                  <div class="formula-block">
                    <katex-element expression="\xi \approx \frac{1}{2\beta J} \quad (\text{短程关联})" :inline="false" />
                  </div>
                </div>
                
                <div class="regime low-temp"><h5>低温 ($\beta J \gg 1$)</h5>
                  <div class="formula-block">
                    <katex-element expression="\xi \approx \frac{1}{2}e^{2\beta J} \quad (\text{长程关联})" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>数值方法与计算技巧</h2>
      
      <div class="numerical-methods">
        <div class="matrix-methods">
          <h3>矩阵计算方法</h3>
          <div class="methods-content">
            <div class="eigenvalue-methods">
              <h4>本征值计算</h4>
              <div class="method-comparison">
                <div class="method-item">
                  <h5>直接对角化</h5>
                  <ul><li><strong>适用：</strong>小系统 ($N \leq 20$)</li>
                    <li><strong>优点：</strong>精确结果</li>
                    <li><strong>缺点：</strong>指数标度</li>
                  </ul>
                </div>
                
                <div class="method-item">
                  <h5>幂方法 (Power Method)</h5>
                  <ul>
                    <li><strong>适用：</strong>大系统，只需最大本征值</li>
                    <li><strong>优点：</strong>线性标度</li>
                    <li><strong>缺点：</strong>收敛可能较慢</li>
                  </ul>
                </div>
                
                <div class="method-item">
                  <h5>Lanczos方法</h5>
                  <ul>
                    <li><strong>适用：</strong>稀疏矩阵</li>
                    <li><strong>优点：</strong>快速收敛</li>
                    <li><strong>缺点：</strong>数值稳定性问题</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="implementation-details">
              <h4>实现细节</h4>
              <div class="code-example">
                <h5>Python实现示例</h5>
                <div class="code-block">
                  <pre><code>import numpy as np

def transfer_matrix_1d_ising(beta_J, h=0):
    """构造一维Ising模型的转移矩阵"""
    exp_J = np.exp(beta_J)
    exp_neg_J = np.exp(-beta_J)
    exp_h = np.exp(h)
    exp_neg_h = np.exp(-h)
    
    T = np.array([[exp_J * exp_h, exp_neg_J],
                  [exp_neg_J, exp_J * exp_neg_h]])
    return T

def thermodynamic_quantities(beta_J, h=0):
    """计算热力学量"""
    T = transfer_matrix_1d_ising(beta_J, h)
    eigenvals = np.linalg.eigvals(T)
    lambda_max = np.max(eigenvals)
    
    # 自由能密度
    f = -np.log(lambda_max) / beta_J
    
    # 内能密度
    u = -np.gradient(np.log(lambda_max), beta_J)
    
    return f, u</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="monte-carlo-methods">
          <h3>蒙特卡罗方法</h3>
          <div class="mc-content">
            <div class="classical-mc">
              <h4>经典蒙特卡罗</h4>
              <p><strong>Metropolis算法：</strong></p>
              <div class="algorithm-steps">
                <ol>
                  <li>随机选择一个自旋位点</li><li>计算翻转该自旋的能量变化$\Delta E$</li><li>以概率$\min(1, e^{-\beta \Delta E})$接受翻转</li>
                  <li>重复直到达到平衡</li>
                </ol>
              </div>
              
              <div class="mc-observables">
                <h5>可观测量的计算</h5>
                <div class="formula-block">
                  <katex-element expression="\langle A \rangle = \frac{1}{N_{\text{samples}}} \sum_{i=1}^{N_{\text{samples}}} A(\{\sigma_i\})" :inline="false" />
                </div>
              </div>
            </div>
            
            <div class="quantum-mc">
              <h4>量子蒙特卡罗</h4>
              <p><strong>世界线算法：</strong></p>
              <div class="worldline-description">
                <p>将量子系统映射到经典世界线配置：</p>
                <div class="formula-block">
                  <katex-element expression="Z = \sum_{\text{worldlines}} W[\text{worldline}]" :inline="false" />
                </div><p>其中权重$W$包含所有量子涨落的贡献。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>物理应用与推广</h2>
      
      <div class="applications">
        <div class="material-applications">
          <h3>材料科学应用</h3>
          <div class="materials-content">
            <div class="magnetic-materials">
              <h4>磁性材料</h4>
              <div class="material-examples">
                <div class="material-example">
                  <h5>一维磁性链</h5>
                  <ul>
                    <li>CuGeO₃（自旋-Peierls转变）</li>
                    <li>Sr₂CuO₃（反铁磁链）</li>
                    <li>KCuF₃（准一维海森堡链）</li>
                  </ul>
                </div>
                
                <div class="material-example">
                  <h5>量子自旋液体</h5>
                  <ul>
                    <li>三角格子上的阻挫系统</li>
                    <li>Kitaev模型材料</li>
                    <li>有机导体中的自旋液体相</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="phase-transitions">
              <h4>相变现象</h4>
              <div class="transition-types">
                <div class="transition-type">
                  <h5>量子相变</h5>
                  <p>在绝对零度下由量子涨落驱动的相变</p>
                  <div class="formula-block">
                    <katex-element expression="T = 0, \quad g = g_c \quad (\text{调控参数})" :inline="false" />
                  </div>
                </div>
                
                <div class="transition-type">
                  <h5>有限温度相变</h5>
                  <p>热涨落与量子涨落的竞争</p>
                  <div class="formula-block">
                    <katex-element expression="T \neq 0, \quad g \neq g_c" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="theoretical-extensions">
          <h3>理论推广</h3>
          <div class="extensions-content">
            <div class="higher-dimensions">
              <h4>高维推广</h4>
              <div class="dimension-effects">
                <div class="dimension-case">
                  <h5>二维Ising模型</h5>
                  <ul>
                    <li>Onsager精确解</li>
                    <li>有限温度相变</li><li>临界指数：$\beta = 1/8, \nu = 1, \gamma = 7/4$</li>
                  </ul>
                </div>
                
                <div class="dimension-case">
                  <h5>三维及以上</h5>
                  <ul>
                    <li>无精确解</li>
                    <li>数值方法和重整化群</li>
                    <li>平均场理论在高维的有效性</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="model-generalizations">
              <h4>模型推广</h4>
              <div class="generalization-types">
                <div class="generalization-item">
                  <h5>XY模型</h5>
                  <div class="formula-block">
                    <katex-element expression="H = -J \sum_{\langle i,j \rangle} (\sigma_i^x \sigma_j^x + \sigma_i^y \sigma_j^y)" :inline="false" />
                  </div>
                </div>
                
                <div class="generalization-item">
                  <h5>Heisenberg模型</h5>
                  <div class="formula-block">
                    <katex-element expression="H = -J \sum_{\langle i,j \rangle} \vec{\sigma}_i \cdot \vec{\sigma}_j" :inline="false" />
                  </div>
                </div>
                
                <div class="generalization-item">
                  <h5>Potts模型</h5>
                  <div class="formula-block">
                    <katex-element expression="H = -J \sum_{\langle i,j \rangle} \delta_{\sigma_i, \sigma_j}" :inline="false" />
                  </div><p>其中$\sigma_i = 1, 2, \ldots, q$</p>
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
        <div class="key-achievements">
          <h3>主要成就</h3>
          <ul>
            <li>转移矩阵方法提供了一维Ising模型的精确解</li>
            <li>建立了量子横场Ising模型与经典Ising模型的深刻对应关系</li>
            <li>揭示了量子相变与经典相变的统一描述</li>
            <li>为更复杂系统的研究提供了重要的理论基础</li>
          </ul>
        </div>
        
        <div class="theoretical-insights">
          <h3>理论洞察</h3>
          <ul>
            <li>维度在相变中的关键作用</li>
            <li>量子涨落与热涨落的等价性</li>
            <li>临界现象的普适性</li>
            <li>精确可解模型的重要价值</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>未来方向</h3>
          <ul>
            <li>非平衡量子系统的转移矩阵方法</li>
            <li>拓扑相变中的精确解</li>
            <li>机器学习与精确解的结合</li>
            <li>实验实现中的量子模拟</li>
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

.model-setup {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.hamiltonian-card, .physical-picture {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.hamiltonian-card {
  border-left: 5px solid #10b981;
}

.physical-picture {
  border-left: 5px solid #3b82f6;
}

.hamiltonian-card h3, .physical-picture h3 {
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

.boundary-conditions {
  background: #f0fff4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.boundary-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.boundary-type {
  padding: 1rem;
  border-radius: 8px;
  background: #fafafa;
  border: 1px solid #e2e8f0;
}

.spin-chain-diagram {
  margin: 1rem 0;
}

.chain-visualization {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.spin-sites, .field-arrows {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.site {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.coupling {
  color: #e53e3e;
  font-weight: bold;
  font-size: 0.9rem;
}

.field-arrow {
  color: #38a169;
  font-weight: bold;
  font-size: 0.8rem;
}

.energy-contributions {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.transfer-matrix-method {
  margin-top: 1.5rem;
}

.method-introduction, .explicit-matrix, .thermodynamic-quantities {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.method-introduction h3, .explicit-matrix h3, .thermodynamic-quantities h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.matrix-construction {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.eigenvalue-analysis {
  background: #f0fff4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.quantities-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.free-energy, .internal-energy, .specific-heat, .correlation-length {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.quantum-correspondence {
  margin-top: 1.5rem;
}

.quantum-model, .suzuki-trotter-decomposition, .phase-diagram {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.quantum-model h3, .suzuki-trotter-decomposition h3, .phase-diagram h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.quantum-classical-mapping {
  margin-top: 1rem;
}

.mapping-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.mapping-table th,
.mapping-table td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

.mapping-table th {
  background: #f7fafc;
  font-weight: 600;
}

.classical-representation {
  background: #fef5e7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.phase-regions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.phase-region {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.phase-region.ordered {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.phase-region.disordered {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.critical-point {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.correspondence-details {
  margin-top: 1rem;
}

.correspondence-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.correspondence-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.exact-solution {
  margin-top: 1.5rem;
}

.diagonalization, .thermodynamic-limit, .correlation-functions {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.diagonalization h3, .thermodynamic-limit h3, .correlation-functions h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.finite-size-corrections {
  background: #f0fff4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.correlation-analysis {
  margin-top: 1rem;
}

.temperature-regimes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.regime {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.regime.high-temp {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.regime.low-temp {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.numerical-methods {
  margin-top: 1.5rem;
}

.matrix-methods, .monte-carlo-methods {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.matrix-methods h3, .monte-carlo-methods h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.method-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.method-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.implementation-details {
  margin-top: 1rem;
}

.code-block {
  background: #1a202c;
  color: #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.algorithm-steps {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.mc-observables {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.worldline-description {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.applications {
  margin-top: 1.5rem;
}

.material-applications, .theoretical-extensions {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.material-applications h3, .theoretical-extensions h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.material-examples, .transition-types, .dimension-effects, .generalization-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.material-example, .transition-type, .dimension-case, .generalization-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.summary-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.key-achievements, .theoretical-insights, .future-directions {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.key-achievements h3, .theoretical-insights h3, .future-directions h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.key-achievements {
  border-left: 5px solid #10b981;
}

.theoretical-insights {
  border-left: 5px solid #3b82f6;
}

.future-directions {
  border-left: 5px solid #f59e0b;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .model-setup,
  .quantities-content,
  .phase-regions,
  .correspondence-list,
  .temperature-regimes,
  .method-comparison,
  .material-examples,
  .transition-types,
  .dimension-effects,
  .generalization-types,
  .summary-content {
    grid-template-columns: 1fr;
  }
  
  .boundary-types {
    grid-template-columns: 1fr;
  }
}
</style>