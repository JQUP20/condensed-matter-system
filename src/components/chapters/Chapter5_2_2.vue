<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.2 临界指数与标度律</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">临界现象</span>
        <span class="reading-time">阅读时间：30分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        临界指数是描述相变临界行为的核心概念，它们揭示了不同物理量在临界点附近的奇异性。
        标度律则建立了这些指数之间的深刻联系，体现了相变现象的普适性和内在对称性。
        这些概念不仅是理论物理的瑰宝，也是实验验证理论预测的重要工具。
      </p>
    </div>

    <div class="content-section">
      <h2>临界指数的定义</h2>
      
      <div class="critical-exponents-framework">
        <div class="exponent-definitions">
          <h3>📊 标准临界指数</h3>
          <div class="exponents-grid">
            <div class="exponent-card alpha">
              <div class="exponent-header">
                <h4>α - 比热指数</h4>
                <div class="exponent-symbol">α</div>
              </div>
              <div class="exponent-content">
                <p><strong>定义：</strong></p>
                <div class="formula-block">
                  <katex-element expression="C \sim |T-T_c|^{-\alpha}" :inline="false" />
                </div>
                
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li>描述比热在临界点的发散程度</li>
                  <li>反映系统热容量的奇异性</li>
                  <li>与能量涨落直接相关</li>
                </ul>
                
                <p><strong>理论预测：</strong></p>
                <div class="theory-predictions">
                  <div class="prediction-item">
                    <span>Landau:</span>
                    <span>α = 0</span>
                  </div>
                  <div class="prediction-item">
                    <span>3D Ising:</span>
                    <span>α ≈ 0.110</span>
                  </div>
                  <div class="prediction-item">
                    <span>实验:</span>
                    <span>α ≈ 0.1-0.15</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="exponent-card beta">
              <div class="exponent-header">
                <h4>β - 序参量指数</h4>
                <div class="exponent-symbol">β</div>
              </div>
              <div class="exponent-content">
                <p><strong>定义：</strong></p>
                <div class="formula-block">
                  <katex-element expression="M \sim |T-T_c|^\beta \quad (T < T_c, H = 0)" :inline="false" />
                </div>
                
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li>描述序参量的增长速度</li>
                  <li>反映对称性破缺的程度</li>
                  <li>决定相变的"锐利程度"</li>
                </ul>
                
                <p><strong>理论预测：</strong></p>
                <div class="theory-predictions">
                  <div class="prediction-item">
                    <span>Landau:</span>
                    <span>β = 1/2</span>
                  </div>
                  <div class="prediction-item">
                    <span>3D Ising:</span>
                    <span>β ≈ 0.326</span>
                  </div>
                  <div class="prediction-item">
                    <span>实验:</span>
                    <span>β ≈ 0.32-0.35</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="exponent-card gamma">
              <div class="exponent-header">
                <h4>γ - 磁化率指数</h4>
                <div class="exponent-symbol">γ</div>
              </div>
              <div class="exponent-content">
                <p><strong>定义：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\chi \sim |T-T_c|^{-\gamma} \quad (H = 0)" :inline="false" />
                </div>
                
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li>描述响应函数的发散</li>
                  <li>反映系统的敏感性</li>
                  <li>与涨落强度相关</li>
                </ul>
                
                <p><strong>理论预测：</strong></p>
                <div class="theory-predictions">
                  <div class="prediction-item">
                    <span>Landau:</span>
                    <span>γ = 1</span>
                  </div>
                  <div class="prediction-item">
                    <span>3D Ising:</span>
                    <span>γ ≈ 1.237</span>
                  </div>
                  <div class="prediction-item">
                    <span>实验:</span>
                    <span>γ ≈ 1.2-1.3</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="exponent-card delta">
              <div class="exponent-header">
                <h4>δ - 临界等温线指数</h4>
                <div class="exponent-symbol">δ</div>
              </div>
              <div class="exponent-content">
                <p><strong>定义：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H \sim M^\delta \quad (T = T_c)" :inline="false" />
                </div>
                
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li>描述临界点的非线性响应</li>
                  <li>反映临界等温线的形状</li>
                  <li>与临界涨落相关</li>
                </ul>
                
                <p><strong>理论预测：</strong></p>
                <div class="theory-predictions">
                  <div class="prediction-item">
                    <span>Landau:</span>
                    <span>δ = 3</span>
                  </div>
                  <div class="prediction-item">
                    <span>3D Ising:</span>
                    <span>δ ≈ 4.789</span>
                  </div>
                  <div class="prediction-item">
                    <span>实验:</span>
                    <span>δ ≈ 4.7-5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="additional-exponents">
          <h3>🔍 附加临界指数</h3>
          <div class="additional-grid">
            <div class="additional-card">
              <h4>ν - 关联长度指数</h4>
              <div class="additional-content">
                <div class="formula-block">
                  <katex-element expression="\xi \sim |T-T_c|^{-\nu}" :inline="false" />
                </div>
                <p><strong>物理意义：</strong>描述空间关联的发散</p>
                <p><strong>Landau预测：</strong>ν = 1/2</p>
                <p><strong>3D Ising：</strong>ν ≈ 0.630</p>
              </div>
            </div>
            
            <div class="additional-card">
              <h4>η - 异常维度</h4>
              <div class="additional-content">
                <div class="formula-block">
                  <katex-element expression="G(r) \sim r^{-(d-2+\eta)} \quad (T = T_c)" :inline="false" />
                </div>
                <p><strong>物理意义：</strong>修正关联函数的幂律行为</p>
                <p><strong>Landau预测：</strong>η = 0</p>
                <p><strong>3D Ising：</strong>η ≈ 0.036</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>标度律与标度关系</h2>
      
      <div class="scaling-laws-framework">
        <div class="fundamental-scaling">
          <h3>⚖️ 基本标度律</h3>
          <div class="scaling-content">
            <p class="scaling-intro">
              标度律反映了临界点附近物理量的标度不变性，
              它们是重整化群理论的直接结果，体现了相变的普适性。
            </p>
            
            <div class="scaling-relations">
              <div class="relation-card rushbrooke">
                <h4>Rushbrooke 关系</h4>
                <div class="relation-content">
                  <div class="formula-block">
                    <katex-element expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
                  </div>
                  
                  <p><strong>推导思路：</strong></p>
                  <ol>
                    <li>从热力学恒等式出发</li>
                    <li>利用Maxwell关系</li>
                    <li>应用标度假设</li>
                  </ol>
                  
                  <p><strong>验证：</strong></p>
                  <div class="verification">
                    <div class="verification-item">
                      <span>Landau:</span>
                      <span>0 + 2(1/2) + 1 = 2 ✓</span>
                    </div>
                    <div class="verification-item">
                      <span>3D Ising:</span>
                      <span>0.110 + 2(0.326) + 1.237 ≈ 2.0 ✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="relation-card widom">
                <h4>Widom 关系</h4>
                <div class="relation-content">
                  <div class="formula-block">
                    <katex-element expression="\gamma = \beta(\delta - 1)" :inline="false" />
                  </div>
                  
                  <p><strong>物理意义：</strong></p>
                  <ul>
                    <li>连接线性和非线性响应</li>
                    <li>反映涨落-响应关系</li>
                    <li>体现临界点的标度不变性</li>
                  </ul>
                  
                  <p><strong>验证：</strong></p>
                  <div class="verification">
                    <div class="verification-item">
                      <span>Landau:</span>
                      <span>1 = (1/2)(3-1) = 1 ✓</span>
                    </div>
                    <div class="verification-item">
                      <span>3D Ising:</span>
                      <span>1.237 ≈ 0.326(4.789-1) ≈ 1.235 ✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="relation-card fisher">
                <h4>Fisher 关系</h4>
                <div class="relation-content">
                  <div class="formula-block">
                    <katex-element expression="\gamma = \nu(2-\eta)" :inline="false" />
                  </div>
                  
                  <p><strong>重整化群起源：</strong></p>
                  <ul>
                    <li>关联长度的标度行为</li>
                    <li>关联函数的临界指数</li>
                    <li>涨落-耗散定理</li>
                  </ul>
                  
                  <p><strong>验证：</strong></p>
                  <div class="verification">
                    <div class="verification-item">
                      <span>Landau:</span>
                      <span>1 = (1/2)(2-0) = 1 ✓</span>
                    </div>
                    <div class="verification-item">
                      <span>3D Ising:</span>
                      <span>1.237 ≈ 0.630(2-0.036) ≈ 1.238 ✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="relation-card josephson">
                <h4>Josephson 关系</h4>
                <div class="relation-content">
                  <div class="formula-block">
                    <katex-element expression="\nu d = 2 - \alpha" :inline="false" />
                  </div>
                  
                  <p><strong>超标度关系：</strong></p>
                  <ul>
                    <li>连接空间和热力学标度</li>
                    <li>反映维度的重要性</li>
                    <li>上临界维度的确定</li>
                  </ul>
                  
                  <p><strong>验证：</strong></p>
                  <div class="verification">
                    <div class="verification-item">
                      <span>Landau (d=4):</span>
                      <span>(1/2)×4 = 2-0 = 2 ✓</span>
                    </div>
                    <div class="verification-item">
                      <span>3D Ising:</span>
                      <span>0.630×3 ≈ 2-0.110 = 1.89 ✓</span>
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
      <h2>标度函数理论</h2>
      
      <div class="scaling-function-theory">
        <div class="theory-framework">
          <h3>🎯 标度假设</h3>
          <div class="hypothesis-content">
            <p class="hypothesis-intro">
              Widom的标度假设是现代临界现象理论的基石，
              它假设奇异部分的自由能具有齐次函数的形式。
            </p>
            
            <div class="scaling-hypothesis">
              <div class="hypothesis-card">
                <h4>自由能的标度形式</h4>
                <div class="hypothesis-details">
                  <p><strong>标度假设：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="f_{sing}(t,h) = b^{-d} f_{sing}(b^{y_t}t, b^{y_h}h)" :inline="false" />
                  </div>
                  
                  <p><strong>参数定义：</strong></p>
                  <ul>
                    <li><katex-element expression="t = (T-T_c)/T_c" :inline="true" /> - 约化温度</li>
                    <li><katex-element expression="h" :inline="true" /> - 外场</li>
                    <li><katex-element expression="b" :inline="true" /> - 标度因子</li>
                    <li><katex-element expression="y_t, y_h" :inline="true" /> - 标度维度</li>
                  </ul>
                  
                  <p><strong>标度维度关系：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="y_t = \frac{1}{\nu}, \quad y_h = \frac{d+2-\eta}{2}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="hypothesis-card">
                <h4>标度函数的构造</h4>
                <div class="hypothesis-details">
                  <p><strong>选择标度因子：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="b = |t|^{-1/y_t} = |t|^{-\nu}" :inline="false" />
                  </div>
                  
                  <p><strong>标度函数形式：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="f_{sing}(t,h) = |t|^{2-\alpha} \mathcal{F}_\pm\left(\frac{h}{|t|^{\beta\delta}}\right)" :inline="false" />
                  </div>
                  
                  <p><strong>渐近行为：</strong></p>
                  <ul>
                    <li><katex-element expression="h \to 0" :inline="true" />：<katex-element expression="\mathcal{F}_\pm(x) \sim \text{const}" :inline="true" /></li>
                    <li><katex-element expression="h \to \infty" :inline="true" />：<katex-element expression="\mathcal{F}_\pm(x) \sim x^{1/\delta}" :inline="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scaling-applications">
          <h3>🔧 标度函数的应用</h3>
          <div class="applications-content">
            <div class="application-examples">
              <div class="example-card magnetization">
                <h4>磁化强度的标度</h4>
                <div class="example-content">
                  <p><strong>标度形式：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="M(t,h) = |t|^\beta \mathcal{M}_\pm\left(\frac{h}{|t|^{\beta\delta}}\right)" :inline="false" />
                  </div>
                  
                  <p><strong>极限行为：</strong></p>
                  <div class="limit-behavior">
                    <div class="limit-case">
                      <h5>h = 0, t < 0</h5>
                      <div class="formula-block">
                        <katex-element expression="M = |t|^\beta \mathcal{M}_-(0) = M_0 |t|^\beta" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="limit-case">
                      <h5>t = 0, h > 0</h5>
                      <div class="formula-block">
                        <katex-element expression="M = h^{1/\delta} \mathcal{M_+}(\infty) = A h^{1/\delta}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="example-card susceptibility">
                <h4>磁化率的标度</h4>
                <div class="example-content">
                  <p><strong>标度形式：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\chi(t,h) = |t|^{-\gamma} \mathcal{X}_\pm\left(\frac{h}{|t|^{\beta\delta}}\right)" :inline="false" />
                  </div>
                  
                  <p><strong>零场磁化率：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\chi(t,0) = \begin{cases}
                    C_+ |t|^{-\gamma} & t > 0 \\
                    C_- |t|^{-\gamma} & t < 0
                    \end{cases}" :inline="false" />
                  </div>
                  
                  <p><strong>振幅比：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{C_+}{C_-} = 2^{-\gamma}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验验证与精确结果</h2>
      
      <div class="experimental-verification">
        <div class="verification-framework">
          <div class="experimental-data">
            <h3>🔬 实验测量</h3>
            <div class="data-content">
              <div class="measurement-systems">
                <div class="system-card">
                  <h4>液-气相变</h4>
                  <div class="system-data">
                    <p><strong>系统：</strong>CO₂, Xe, SF₆等</p>
                    <p><strong>测量指数：</strong></p>
                    <div class="measured-exponents">
                      <div class="exponent-value">
                        <span>α:</span>
                        <span>0.11 ± 0.01</span>
                      </div>
                      <div class="exponent-value">
                        <span>β:</span>
                        <span>0.325 ± 0.002</span>
                      </div>
                      <div class="exponent-value">
                        <span>γ:</span>
                        <span>1.24 ± 0.01</span>
                      </div>
                      <div class="exponent-value">
                        <span>ν:</span>
                        <span>0.63 ± 0.01</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="system-card">
                  <h4>磁性材料</h4>
                  <div class="system-data">
                    <p><strong>系统：</strong>Fe, Ni, EuO等</p>
                    <p><strong>测量指数：</strong></p>
                    <div class="measured-exponents">
                      <div class="exponent-value">
                        <span>α:</span>
                        <span>0.1-0.15</span>
                      </div>
                      <div class="exponent-value">
                        <span>β:</span>
                        <span>0.32-0.35</span>
                      </div>
                      <div class="exponent-value">
                        <span>γ:</span>
                        <span>1.2-1.3</span>
                      </div>
                      <div class="exponent-value">
                        <span>δ:</span>
                        <span>4.7-5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theoretical-results">
            <h3>🎯 精确理论结果</h3>
            <div class="theory-content">
              <div class="exact-solutions">
                <div class="solution-card">
                  <h4>2D Ising模型</h4>
                  <div class="solution-data">
                    <p><strong>Onsager精确解：</strong></p>
                    <div class="exact-exponents">
                      <div class="exponent-exact">
                        <span>α:</span>
                        <span>0 (对数)</span>
                      </div>
                      <div class="exponent-exact">
                        <span>β:</span>
                        <span>1/8</span>
                      </div>
                      <div class="exponent-exact">
                        <span>γ:</span>
                        <span>7/4</span>
                      </div>
                      <div class="exponent-exact">
                        <span>ν:</span>
                        <span>1</span>
                      </div>
                      <div class="exponent-exact">
                        <span>η:</span>
                        <span>1/4</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="solution-card">
                  <h4>3D Ising模型</h4>
                  <div class="solution-data">
                    <p><strong>高精度数值结果：</strong></p>
                    <div class="numerical-exponents">
                      <div class="exponent-numerical">
                        <span>α:</span>
                        <span>0.1096(5)</span>
                      </div>
                      <div class="exponent-numerical">
                        <span>β:</span>
                        <span>0.3258(14)</span>
                      </div>
                      <div class="exponent-numerical">
                        <span>γ:</span>
                        <span>1.2372(5)</span>
                      </div>
                      <div class="exponent-numerical">
                        <span>ν:</span>
                        <span>0.6301(4)</span>
                      </div>
                      <div class="exponent-numerical">
                        <span>η:</span>
                        <span>0.0364(5)</span>
                      </div>
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
      <h2>普适性与普适类</h2>
      
      <div class="universality-framework">
        <div class="universality-concept">
          <h3>🌐 普适性原理</h3>
          <div class="concept-content">
            <p class="universality-intro">
              普适性是临界现象最深刻的特征之一，它表明具有相同对称性和维度的系统
              在临界点附近表现出相同的临界指数，与微观细节无关。
            </p>
            
            <div class="universality-classes">
              <div class="class-card ising">
                <h4>Ising普适类</h4>
                <div class="class-content">
                  <p><strong>特征：</strong></p>
                  <ul>
                    <li>Z₂对称性（上下自旋对称）</li>
                    <li>短程相互作用</li>
                    <li>标量序参量</li>
                  </ul>
                  
                  <p><strong>包含系统：</strong></p>
                  <div class="system-examples">
                    <div class="example-item">液-气相变</div>
                    <div class="example-item">二元合金有序-无序转变</div>
                    <div class="example-item">铁磁-顺磁转变</div>
                    <div class="example-item">超导转变</div>
                  </div>
                </div>
              </div>
              
              <div class="class-card xy">
                <h4>XY普适类</h4>
                <div class="class-content">
                  <p><strong>特征：</strong></p>
                  <ul>
                    <li>O(2)对称性（连续旋转对称）</li>
                    <li>二分量序参量</li>
                    <li>涡旋激发</li>
                  </ul>
                  
                  <p><strong>包含系统：</strong></p>
                  <div class="system-examples">
                    <div class="example-item">超流转变</div>
                    <div class="example-item">约瑟夫森结阵列</div>
                    <div class="example-item">平面磁体</div>
                  </div>
                  
                  <p><strong>特殊性质：</strong></p>
                  <div class="special-properties">
                    <div class="property-item">
                      <strong>2D：</strong>BKT转变，指数跳跃
                    </div>
                    <div class="property-item">
                      <strong>3D：</strong>连续相变，标准临界行为
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="class-card heisenberg">
                <h4>Heisenberg普适类</h4>
                <div class="class-content">
                  <p><strong>特征：</strong></p>
                  <ul>
                    <li>O(3)对称性（三维旋转对称）</li>
                    <li>三分量序参量</li>
                    <li>自旋波激发</li>
                  </ul>
                  
                  <p><strong>包含系统：</strong></p>
                  <div class="system-examples">
                    <div class="example-item">各向同性铁磁体</div>
                    <div class="example-item">反铁磁体</div>
                    <div class="example-item">³He超流</div>
                  </div>
                  
                  <p><strong>临界指数：</strong></p>
                  <div class="heisenberg-exponents">
                    <div class="exponent-h">α ≈ -0.115</div>
                    <div class="exponent-h">β ≈ 0.367</div>
                    <div class="exponent-h">γ ≈ 1.386</div>
                    <div class="exponent-h">ν ≈ 0.705</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="crossover-phenomena">
          <h3>🔄 交叉现象</h3>
          <div class="crossover-content">
            <p><strong>交叉的起源：</strong></p>
            <ul>
              <li>对称性的微小破缺</li>
              <li>各向异性的引入</li>
              <li>长程相互作用</li>
              <li>有限尺寸效应</li>
            </ul>
            
            <div class="crossover-examples">
              <div class="crossover-card">
                <h4>Ising → XY 交叉</h4>
                <div class="crossover-details">
                  <p><strong>哈密顿量：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="H = -J\sum_{\langle i,j \rangle} (S_i^x S_j^x + S_i^y S_j^y + \Delta S_i^z S_j^z)" :inline="false" />
                  </div>
                  
                  <p><strong>交叉行为：</strong></p>
                  <ul>
                    <li>Δ = 1: Heisenberg</li>
                    <li>Δ = 0: XY</li>
                    <li>Δ → ∞: Ising</li>
                  </ul>
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
}

.chapter-tag {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

.exponents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.exponent-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.exponent-card.alpha {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.exponent-card.beta {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.exponent-card.gamma {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.exponent-card.delta {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
}

.exponent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.exponent-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: inherit;
}

.exponent-symbol {
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.7;
}

.formula-block {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid rgba(255, 255, 255, 0.3);
}

.theory-predictions {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.prediction-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.additional-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.additional-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scaling-relations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.relation-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.relation-card.rushbrooke {
  border-left: 5px solid #667eea;
}

.relation-card.widom {
  border-left: 5px solid #f093fb;
}

.relation-card.fisher {
  border-left: 5px solid #4facfe;
}

.relation-card.josephson {
  border-left: 5px solid #43e97b;
}

.relation-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.verification {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.verification-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.hypothesis-card, .example-card, .system-card, .solution-card, .class-card, .crossover-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}

.hypothesis-card h4, .example-card h4, .system-card h4, .solution-card h4, .class-card h4, .crossover-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.limit-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.limit-case {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.limit-case h5 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.measured-exponents, .exact-exponents, .numerical-exponents {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.exponent-value, .exponent-exact, .exponent-numerical {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  background: #f7fafc;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

.universality-classes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.class-card.ising {
  border-left: 5px solid #667eea;
}

.class-card.xy {
  border-left: 5px solid #f093fb;
}

.class-card.heisenberg {
  border-left: 5px solid #43e97b;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .exponents-grid, .additional-grid, .scaling-relations, .universality-classes {
    grid-template-columns: 1fr;
  }
  
  .limit-behavior, .measured-exponents, .exact-exponents, .numerical-exponents {
    grid-template-columns: 1fr;
  }
}
</style>