<template>
  <div class="chapter-content">
    <h1>10.3.1 Peierls代换</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>Peierls代换是在量子力学中处理带电粒子在电磁场中运动的一种重要方法。它通过将动量算符替换为包含矢量势的协变导数，将无磁场的哈密顿量推广到有磁场的情况。这种方法在凝聚态物理中具有广泛应用，特别是在研究磁场中的电子系统、拓扑相变和人工规范场等领域。</p>
      
      <div class="highlight-box">
        <h3>Peierls代换的核心思想</h3>
        <ul>
          <li><strong>最小耦合原理</strong>：电磁场与物质的基本相互作用</li>
          <li><strong>规范不变性</strong>：物理量不依赖于规范选择</li>
          <li><strong>相位因子</strong>：磁场通过相位调制影响电子</li>
          <li><strong>拓扑效应</strong>：几何相位和拓扑性质</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 理论基础</h2>
      
      <div class="theoretical-foundation">
        <h3>经典电动力学</h3>
        <p>带电粒子在电磁场中的经典运动：</p>
        
        <div class="classical-dynamics">
          <div class="classical-equations">
            <div class="eq-card">
              <h4>洛伦兹力</h4>
              <div class="formula-block">
                F = q(E + v × B)
              </div>
              <p>电磁场对带电粒子的作用力</p>
            </div>
            
            <div class="eq-card">
              <h4>拉格朗日量</h4>
              <div class="formula-block">
                L = (1/2)mv² - qφ + qv·A
              </div>
              <p>包含电磁势的拉格朗日量</p>
            </div>
            
            <div class="eq-card">
              <h4>正则动量</h4>
              <div class="formula-block">
                p = mv + qA
              </div>
              <p>包含矢量势的广义动量</p>
            </div>
          </div>
        </div>
        
        <div class="quantum-mechanics">
          <h3>量子力学推广</h3>
          <p>从经典力学到量子力学的过渡：</p>
          
          <div class="quantum-transition">
            <div class="transition-steps">
              <div class="step-card">
                <h4>正则量子化</h4>
                <div class="formula-block">
                  [x̂<sub>i</sub>, p̂<sub>j</sub>] = iℏδ<sub>ij</sub>
                </div>
                <p>位置和动量的对易关系</p>
              </div>
              
              <div class="step-card">
                <h4>动量算符</h4>
                <div class="formula-block">
                  p̂ = -iℏ∇
                </div>
                <p>无电磁场时的动量算符</p>
              </div>
              
              <div class="step-card">
                <h4>协变导数</h4>
                <div class="formula-block">
                  D̂ = ∇ - (iq/ℏ)A
                </div>
                <p>包含矢量势的协变导数</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="gauge-theory">
          <h3>规范理论基础</h3>
          <p>电磁场的规范描述：</p>
          
          <div class="gauge-formalism">
            <div class="gauge-concepts">
              <div class="gauge-card">
                <h4>规范势</h4>
                <div class="formula-block">
                  A<sub>μ</sub> = (φ/c, A)
                </div>
                <p>四维矢量势</p>
              </div>
              
              <div class="gauge-card">
                <h4>场强张量</h4>
                <div class="formula-block">
                  F<sub>μν</sub> = ∂<sub>μ</sub>A<sub>ν</sub> - ∂<sub>ν</sub>A<sub>μ</sub>
                </div>
                <p>规范不变的物理量</p>
              </div>
              
              <div class="gauge-card">
                <h4>规范变换</h4>
                <div class="formula-block">
                  A'<sub>μ</sub> = A<sub>μ</sub> + ∂<sub>μ</sub>χ
                </div>
                <p>规范函数χ的任意性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. Peierls代换的数学表述</h2>
      
      <div class="mathematical-formulation">
        <h3>基本代换规则</h3>
        <p>Peierls代换的核心公式：</p>
        
        <div class="substitution-rules">
          <div class="rule-grid">
            <div class="rule-card">
              <h4>动量代换</h4>
              <div class="formula-block">
                p̂ → p̂ - qA = -iℏ∇ - qA
              </div>
              <p>最小耦合原理</p>
            </div>
            
            <div class="rule-card">
              <h4>哈密顿量</h4>
              <div class="formula-block">
                Ĥ = (1/2m)(p̂ - qA)² + qφ
              </div>
              <p>包含电磁场的哈密顿量</p>
            </div>
            
            <div class="rule-card">
              <h4>薛定谔方程</h4>
              <div class="formula-block">
                iℏ∂<sub>t</sub>ψ = Ĥψ
              </div>
              <p>电磁场中的薛定谔方程</p>
            </div>
          </div>
        </div>
        
        <div class="coordinate-representation">
          <h3>坐标表示</h3>
          <p>在位置表象中的具体形式：</p>
          
          <div class="position-representation">
            <div class="pos-forms">
              <div class="pos-card">
                <h4>一维情况</h4>
                <div class="formula-block">
                  Ĥ = (1/2m)(-iℏ∂<sub>x</sub> - qA<sub>x</sub>)² + qφ
                </div>
                <p>一维电磁场中的哈密顿量</p>
              </div>
              
              <div class="pos-card">
                <h4>二维情况</h4>
                <div class="formula-block">
                  Ĥ = (1/2m)[(-iℏ∂<sub>x</sub> - qA<sub>x</sub>)² + (-iℏ∂<sub>y</sub> - qA<sub>y</sub>)²] + qφ
                </div>
                <p>二维电磁场中的哈密顿量</p>
              </div>
              
              <div class="pos-card">
                <h4>三维情况</h4>
                <div class="formula-block">
                  Ĥ = (1/2m)|(-iℏ∇ - qA)|² + qφ
                </div>
                <p>三维电磁场中的哈密顿量</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="gauge-invariance">
          <h3>规范不变性</h3>
          <p>Peierls代换保持规范不变性：</p>
          
          <div class="invariance-proof">
            <div class="invariance-steps">
              <div class="inv-card">
                <h4>规范变换</h4>
                <div class="formula-block">
                  A' = A + ∇χ, φ' = φ - ∂<sub>t</sub>χ
                </div>
                <p>矢量势和标量势的变换</p>
              </div>
              
              <div class="inv-card">
                <h4>波函数变换</h4>
                <div class="formula-block">
                  ψ' = e<sup>iqχ/ℏ</sup>ψ
                </div>
                <p>波函数的相位变换</p>
              </div>
              
              <div class="inv-card">
                <h4>不变性证明</h4>
                <div class="formula-block">
                  Ĥ'ψ' = Ĥψ
                </div>
                <p>哈密顿量的规范不变性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 紧束缚模型中的应用</h2>
      
      <div class="tight-binding-application">
        <h3>离散格点系统</h3>
        <p>Peierls代换在紧束缚模型中的实现：</p>
        
        <div class="discrete-lattice">
          <div class="lattice-hamiltonian">
            <div class="ham-card">
              <h4>无磁场哈密顿量</h4>
              <div class="formula-block">
                Ĥ<sub>0</sub> = -t ∑<sub>⟨i,j⟩</sub> (c<sup>†</sup><sub>i</sub>c<sub>j</sub> + h.c.)
              </div>
              <p>最近邻跳跃哈密顿量</p>
            </div>
            
            <div class="ham-card">
              <h4>Peierls相位</h4>
              <div class="formula-block">
                φ<sub>ij</sub> = (q/ℏ) ∫<sub>R<sub>i</sub></sub><sup>R<sub>j</sub></sup> A·dl
              </div>
              <p>路径积分的相位因子</p>
            </div>
            
            <div class="ham-card">
              <h4>磁场中哈密顿量</h4>
              <div class="formula-block">
                Ĥ = -t ∑<sub>⟨i,j⟩</sub> e<sup>iφ<sub>ij</sub></sup> c<sup>†</sup><sub>i</sub>c<sub>j</sub> + h.c.
              </div>
              <p>包含Peierls相位的哈密顿量</p>
            </div>
          </div>
        </div>
        
        <div class="phase-calculation">
          <h3>相位计算</h3>
          <p>不同规范下的Peierls相位：</p>
          
          <div class="gauge-choices">
            <div class="gauge-grid">
              <div class="gauge-option">
                <h4>Landau规范</h4>
                <div class="formula-block">
                  A = (0, Bx, 0)
                </div>
                <p>x方向跳跃：φ = 0</p>
                <p>y方向跳跃：φ = qBxa/ℏ</p>
              </div>
              
              <div class="gauge-option">
                <h4>对称规范</h4>
                <div class="formula-block">
                  A = (1/2)B(-y, x, 0)
                </div>
                <p>各方向跳跃都有相位</p>
                <p>旋转对称性</p>
              </div>
              
              <div class="gauge-option">
                <h4>轴规范</h4>
                <div class="formula-block">
                  A = (Bx, 0, 0)
                </div>
                <p>y方向跳跃：φ = 0</p>
                <p>x方向跳跃：φ = qBya/ℏ</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lattice-examples">
          <h3>具体格子例子</h3>
          <p>不同晶格结构中的Peierls代换：</p>
          
          <div class="lattice-types">
            <div class="lattice-grid">
              <div class="lattice-card">
                <h4>正方格子</h4>
                <p>最简单的二维格子</p>
                <ul>
                  <li>四个最近邻</li>
                  <li>简单的相位结构</li>
                  <li>Hofstadter模型</li>
                </ul>
              </div>
              
              <div class="lattice-card">
                <h4>三角格子</h4>
                <p>六重对称性</p>
                <ul>
                  <li>六个最近邻</li>
                  <li>复杂相位结构</li>
                  <li>阻挫效应</li>
                </ul>
              </div>
              
              <div class="lattice-card">
                <h4>蜂窝格子</h4>
                <p>石墨烯结构</p>
                <ul>
                  <li>双原子基</li>
                  <li>Dirac点</li>
                  <li>拓扑性质</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 磁通量量子化</h2>
      
      <div class="flux-quantization">
        <h3>Aharonov-Bohm效应</h3>
        <p>磁通量的量子化现象：</p>
        
        <div class="ab-effect">
          <div class="ab-setup">
            <div class="setup-card">
              <h4>实验装置</h4>
              <p>电子绕磁通管的干涉</p>
              <ul>
                <li>磁通管（螺线管）</li>
                <li>电子双缝</li>
                <li>干涉图样</li>
              </ul>
            </div>
            
            <div class="setup-card">
              <h4>相位差</h4>
              <div class="formula-block">
                Δφ = (q/ℏ) ∮ A·dl = qΦ/ℏ
              </div>
              <p>闭合路径的相位积累</p>
            </div>
            
            <div class="setup-card">
              <h4>量子化条件</h4>
              <div class="formula-block">
                Φ = nΦ<sub>0</sub>, Φ<sub>0</sub> = h/q
              </div>
              <p>磁通量子Φ₀</p>
            </div>
          </div>
        </div>
        
        <div class="periodic-boundary">
          <h3>周期性边界条件</h3>
          <p>环形几何中的量子化：</p>
          
          <div class="periodic-conditions">
            <div class="period-grid">
              <div class="period-card">
                <h4>单值性条件</h4>
                <div class="formula-block">
                  ψ(r + L) = ψ(r)
                </div>
                <p>波函数的周期性</p>
              </div>
              
              <div class="period-card">
                <h4>相位约束</h4>
                <div class="formula-block">
                  e<sup>i(q/ℏ)∮A·dl</sup> = 1
                </div>
                <p>相位的周期性</p>
              </div>
              
              <div class="period-card">
                <h4>磁通量子化</h4>
                <div class="formula-block">
                  ∮ A·dl = nΦ<sub>0</sub>/q
                </div>
                <p>整数倍磁通量子</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flux-applications">
          <h3>磁通量子化的应用</h3>
          <p>量子化磁通的物理应用：</p>
          
          <div class="flux-uses">
            <div class="use-grid">
              <div class="use-card">
                <h4>SQUID器件</h4>
                <p>超导量子干涉器件</p>
                <ul>
                  <li>磁通量测量</li>
                  <li>极高灵敏度</li>
                  <li>量子比特</li>
                </ul>
              </div>
              
              <div class="use-card">
                <h4>量子霍尔效应</h4>
                <p>Landau能级的形成</p>
                <ul>
                  <li>磁通密度</li>
                  <li>填充因子</li>
                  <li>拓扑相</li>
                </ul>
              </div>
              
              <div class="use-card">
                <h4>拓扑超导体</h4>
                <p>Majorana费米子</p>
                <ul>
                  <li>拓扑保护</li>
                  <li>量子计算</li>
                  <li>非阿贝尔统计</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. Berry相位和几何相位</h2>
      
      <div class="berry-phase">
        <h3>Berry相位理论</h3>
        <p>绝热演化中的几何相位：</p>
        
        <div class="berry-theory">
          <div class="berry-formulation">
            <div class="berry-card">
              <h4>绝热定理</h4>
              <p>缓慢变化的哈密顿量</p>
              <div class="formula-block">
                Ĥ(R(t))|n(R)⟩ = E<sub>n</sub>(R)|n(R)⟩
              </div>
            </div>
            
            <div class="berry-card">
              <h4>Berry连接</h4>
              <div class="formula-block">
                A<sub>n</sub>(R) = i⟨n(R)|∇<sub>R</sub>|n(R)⟩
              </div>
              <p>参数空间中的"矢量势"</p>
            </div>
            
            <div class="berry-card">
              <h4>Berry相位</h4>
              <div class="formula-block">
                γ<sub>n</sub> = ∮ A<sub>n</sub>(R)·dR
              </div>
              <p>闭合路径的几何相位</p>
            </div>
          </div>
        </div>
        
        <div class="berry-curvature">
          <h3>Berry曲率</h3>
          <p>参数空间中的"磁场"：</p>
          
          <div class="curvature-properties">
            <div class="curv-grid">
              <div class="curv-card">
                <h4>Berry曲率定义</h4>
                <div class="formula-block">
                  Ω<sub>n</sub>(R) = ∇<sub>R</sub> × A<sub>n</sub>(R)
                </div>
                <p>Berry连接的旋度</p>
              </div>
              
              <div class="curv-card">
                <h4>Chern数</h4>
                <div class="formula-block">
                  C<sub>n</sub> = (1/2π) ∫ Ω<sub>n</sub>·dS
              </div>
                <p>拓扑不变量</p>
              </div>
              
              <div class="curv-card">
                <h4>霍尔电导</h4>
                <div class="formula-block">
                  σ<sub>xy</sub> = (e²/h) ∑<sub>n</sub> C<sub>n</sub>
                </div>
                <p>拓扑响应</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="geometric-examples">
          <h3>几何相位的例子</h3>
          <p>物理系统中的Berry相位：</p>
          
          <div class="example-systems">
            <div class="example-grid">
              <div class="example-card">
                <h4>自旋1/2粒子</h4>
                <p>磁场中的自旋进动</p>
                <ul>
                  <li>Bloch球面</li>
                  <li>立体角</li>
                  <li>几何相位π(1-cosθ)</li>
                </ul>
              </div>
              
              <div class="example-card">
                <h4>分子系统</h4>
                <p>Born-Oppenheimer近似</p>
                <ul>
                  <li>核坐标参数</li>
                  <li>电子态演化</li>
                  <li>几何相位效应</li>
                </ul>
              </div>
              
              <div class="example-card">
                <h4>光学系统</h4>
                <p>偏振态的演化</p>
                <ul>
                  <li>Poincaré球</li>
                  <li>偏振旋转</li>
                  <li>Pancharatnam相位</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 人工规范场</h2>
      
      <div class="artificial-gauge-fields">
        <h3>冷原子系统</h3>
        <p>人工创造的有效磁场：</p>
        
        <div class="cold-atoms">
          <div class="atom-techniques">
            <div class="tech-grid">
              <div class="tech-card">
                <h4>旋转气体</h4>
                <p>离心力模拟磁场</p>
                <ul>
                  <li>角速度Ω</li>
                  <li>有效磁场2mΩ</li>
                  <li>量子霍尔态</li>
                </ul>
              </div>
              
              <div class="tech-card">
                <h4>激光辅助隧穿</h4>
                <p>光诱导的相位</p>
                <ul>
                  <li>时间调制</li>
                  <li>Floquet工程</li>
                  <li>有效磁通</li>
                </ul>
              </div>
              
              <div class="tech-card">
                <h4>拉曼耦合</h4>
                <p>自旋轨道耦合</p>
                <ul>
                  <li>人工自旋轨道耦合</li>
                  <li>非阿贝尔规范场</li>
                  <li>拓扑绝缘体</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="photonic-systems">
          <h3>光子系统</h3>
          <p>光学系统中的人工规范场：</p>
          
          <div class="photonic-implementations">
            <div class="photonic-grid">
              <div class="photonic-card">
                <h4>波导阵列</h4>
                <p>光波导中的有效磁场</p>
                <ul>
                  <li>弯曲波导</li>
                  <li>相位梯度</li>
                  <li>光子霍尔效应</li>
                </ul>
              </div>
              
              <div class="photonic-card">
                <h4>谐振器网络</h4>
                <p>耦合谐振器系统</p>
                <ul>
                  <li>环形谐振器</li>
                  <li>相位调制</li>
                  <li>拓扑光子学</li>
                </ul>
              </div>
              
              <div class="photonic-card">
                <h4>超材料</h4>
                <p>人工结构材料</p>
                <ul>
                  <li>负折射率</li>
                  <li>手性材料</li>
                  <li>拓扑保护</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="electronic-systems">
          <h3>电子系统</h3>
          <p>固体中的人工规范场：</p>
          
          <div class="electronic-implementations">
            <div class="elec-grid">
              <div class="elec-card">
                <h4>石墨烯</h4>
                <p>应变诱导的规范场</p>
                <ul>
                  <li>赝磁场</li>
                  <li>应变工程</li>
                  <li>Landau能级</li>
                </ul>
              </div>
              
              <div class="elec-card">
                <h4>拓扑绝缘体</h4>
                <p>自旋轨道耦合</p>
                <ul>
                  <li>表面态</li>
                  <li>Dirac锥</li>
                  <li>量子自旋霍尔效应</li>
                </ul>
              </div>
              
              <div class="elec-card">
                <h4>超导体</h4>
                <p>磁通涡旋</p>
                <ul>
                  <li>Abrikosov涡旋</li>
                  <li>混合态</li>
                  <li>拓扑超导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 数值计算方法</h2>
      
      <div class="numerical-methods">
        <h3>紧束缚计算</h3>
        <p>Peierls代换的数值实现：</p>
        
        <div class="tight-binding-numerics">
          <div class="numerical-approaches">
            <div class="num-card">
              <h4>矩阵对角化</h4>
              <p>哈密顿矩阵的本征值问题</p>
              <ul>
                <li>稀疏矩阵技术</li>
                <li>Lanczos算法</li>
                <li>并行计算</li>
              </ul>
            </div>
            
            <div class="num-card">
              <h4>格林函数方法</h4>
              <p>输运性质计算</p>
              <ul>
                <li>递归格林函数</li>
                <li>Landauer公式</li>
                <li>电导计算</li>
              </ul>
            </div>
            
            <div class="num-card">
              <h4>实空间方法</h4>
              <p>大系统的处理</p>
              <ul>
                <li>核多项式方法</li>
                <li>线性标度算法</li>
                <li>无序系统</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="computational-tools">
          <h3>计算工具</h3>
          <p>常用的数值计算软件：</p>
          
          <div class="software-tools">
            <div class="tool-grid">
              <div class="tool-card">
                <h4>专用软件包</h4>
                <ul>
                  <li>Kwant (Python)</li>
                  <li>TBmodels (Python)</li>
                  <li>Wannier90</li>
                  <li>VASP + Wannier</li>
                </ul>
              </div>
              
              <div class="tool-card">
                <h4>通用数值库</h4>
                <ul>
                  <li>LAPACK/BLAS</li>
                  <li>ARPACK</li>
                  <li>PETSc</li>
                  <li>SLEPc</li>
                </ul>
              </div>
              
              <div class="tool-card">
                <h4>可视化工具</h4>
                <ul>
                  <li>Matplotlib</li>
                  <li>Mayavi</li>
                  <li>ParaView</li>
                  <li>VESTA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 实验验证</h2>
      
      <div class="experimental-verification">
        <h3>经典验证实验</h3>
        <p>Peierls代换的实验证实：</p>
        
        <div class="classic-experiments">
          <div class="exp-grid">
            <div class="exp-card">
              <h4>Aharonov-Bohm实验</h4>
              <p>1959年理论预言，1986年实验证实</p>
              <ul>
                <li>电子干涉</li>
                <li>磁通管</li>
                <li>相位调制</li>
              </ul>
            </div>
            
            <div class="exp-card">
              <h4>量子霍尔效应</h4>
              <p>1980年发现，诺贝尔物理学奖</p>
              <ul>
                <li>二维电子气</li>
                <li>强磁场</li>
                <li>量子化电导</li>
              </ul>
            </div>
            
            <div class="exp-card">
              <h4>de Haas-van Alphen效应</h4>
              <p>磁化率的量子振荡</p>
              <ul>
                <li>费米面测量</li>
                <li>Landau量子化</li>
                <li>轨道磁矩</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="modern-experiments">
          <h3>现代实验技术</h3>
          <p>新兴的实验方法：</p>
          
          <div class="modern-techniques">
            <div class="modern-grid">
              <div class="modern-card">
                <h4>扫描隧道显微镜</h4>
                <p>原子尺度的电子态成像</p>
                <ul>
                  <li>Landau能级观测</li>
                  <li>涡旋态成像</li>
                  <li>边缘态测量</li>
                </ul>
              </div>
              
              <div class="modern-card">
                <h4>角分辨光电子谱</h4>
                <p>能带结构的直接测量</p>
                <ul>
                  <li>Dirac锥观测</li>
                  <li>拓扑表面态</li>
                  <li>Berry曲率效应</li>
                </ul>
              </div>
              
              <div class="modern-card">
                <h4>量子输运测量</h4>
                <p>介观系统的输运性质</p>
                <ul>
                  <li>量子点接触</li>
                  <li>边缘态输运</li>
                  <li>拓扑保护验证</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 应用和前景</h2>
      
      <div class="applications-prospects">
        <h3>技术应用</h3>
        <p>Peierls代换在技术中的应用：</p>
        
        <div class="technological-applications">
          <div class="tech-apps">
            <div class="app-grid">
              <div class="app-card">
                <h4>量子计算</h4>
                <p>拓扑量子比特</p>
                <ul>
                  <li>拓扑保护</li>
                  <li>容错量子计算</li>
                  <li>Majorana费米子</li>
                </ul>
              </div>
              
              <div class="app-card">
                <h4>精密测量</h4>
                <p>量子传感器</p>
                <ul>
                  <li>SQUID磁力计</li>
                  <li>原子干涉仪</li>
                  <li>量子霍尔电阻标准</li>
                </ul>
              </div>
              
              <div class="app-card">
                <h4>新型电子器件</h4>
                <p>拓扑电子学</p>
                <ul>
                  <li>自旋电子学</li>
                  <li>谷电子学</li>
                  <li>拓扑晶体管</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="future-directions">
          <h3>未来发展方向</h3>
          <p>Peierls代换研究的前沿：</p>
          
          <div class="research-frontiers">
            <div class="frontier-grid">
              <div class="frontier-card">
                <h4>高阶拓扑相</h4>
                <p>超越传统分类的新相</p>
                <ul>
                  <li>多极矩拓扑</li>
                  <li>铰链态和角态</li>
                  <li>分数阶拓扑</li>
                </ul>
              </div>
              
              <div class="frontier-card">
                <h4>非阿贝尔规范场</h4>
                <p>更复杂的规范结构</p>
                <ul>
                  <li>Yang-Mills理论</li>
                  <li>非阿贝尔Berry相位</li>
                  <li>拓扑量子计算</li>
                </ul>
              </div>
              
              <div class="frontier-card">
                <h4>机器学习应用</h4>
                <p>AI辅助的物理研究</p>
                <ul>
                  <li>拓扑相识别</li>
                  <li>材料设计</li>
                  <li>实验优化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="interdisciplinary-connections">
          <h3>跨学科联系</h3>
          <p>Peierls代换的跨领域影响：</p>
          
          <div class="interdisciplinary-areas">
            <div class="inter-grid">
              <div class="inter-card">
                <h4>数学物理</h4>
                <p>几何和拓扑</p>
                <ul>
                  <li>微分几何</li>
                  <li>代数拓扑</li>
                  <li>K理论</li>
                </ul>
              </div>
              
              <div class="inter-card">
                <h4>量子信息</h4>
                <p>量子计算和通信</p>
                <ul>
                  <li>量子纠缠</li>
                  <li>量子纠错</li>
                  <li>量子模拟</li>
                </ul>
              </div>
              
              <div class="inter-card">
                <h4>材料科学</h4>
                <p>新材料设计</p>
                <ul>
                  <li>拓扑材料</li>
                  <li>二维材料</li>
                  <li>人工超晶格</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>Peierls代换是处理电磁场中带电粒子的基本方法</li>
        <li>通过最小耦合原理将动量算符替换为协变导数</li>
        <li>保持规范不变性是Peierls代换的重要特征</li>
        <li>在紧束缚模型中通过Peierls相位实现磁场效应</li>
        <li>磁通量量子化是Peierls代换的重要结果</li>
        <li>Berry相位提供了几何相位的深刻理解</li>
        <li>人工规范场扩展了Peierls代换的应用范围</li>
        <li>数值计算方法使复杂系统的研究成为可能</li>
        <li>实验验证了Peierls代换的理论预测</li>
        <li>在量子计算、精密测量等领域有重要应用前景</li>
      </ul>
    </div>
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

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
}

h2 {
  color: #34495e;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #34495e;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.highlight-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.highlight-box h3 {
  color: white;
  margin-top: 0;
}

.formula-block {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  margin: 15px 0;
  text-align: center;
  overflow-x: auto;
}

.theoretical-foundation, .mathematical-formulation, .tight-binding-application, .flux-quantization, .berry-phase, .artificial-gauge-fields, .numerical-methods, .experimental-verification, .applications-prospects {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.classical-equations, .transition-steps, .gauge-concepts, .rule-grid, .pos-forms, .invariance-steps, .lattice-hamiltonian, .gauge-grid, .lattice-grid, .ab-setup, .period-grid, .use-grid, .berry-formulation, .curv-grid, .example-grid, .tech-grid, .photonic-grid, .elec-grid, .numerical-approaches, .tool-grid, .exp-grid, .modern-grid, .app-grid, .frontier-grid, .inter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.eq-card, .step-card, .gauge-card, .rule-card, .pos-card, .inv-card, .ham-card, .gauge-option, .lattice-card, .setup-card, .period-card, .use-card, .berry-card, .curv-card, .example-card, .tech-card, .photonic-card, .elec-card, .num-card, .tool-card, .exp-card, .modern-card, .app-card, .frontier-card, .inter-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.classical-dynamics, .quantum-mechanics, .gauge-theory, .substitution-rules, .coordinate-representation, .gauge-invariance, .discrete-lattice, .phase-calculation, .lattice-examples, .ab-effect, .periodic-boundary, .flux-applications, .berry-theory, .berry-curvature, .geometric-examples, .cold-atoms, .photonic-systems, .electronic-systems, .tight-binding-numerics, .computational-tools, .classic-experiments, .modern-experiments, .technological-applications, .future-directions, .interdisciplinary-connections {
  background: #f1f2f6;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin-top: 40px;
}

.summary-box h3 {
  color: white;
  margin-top: 0;
}

.summary-box ul {
  margin: 15px 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

p {
  margin-bottom: 15px;
  text-align: justify;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  .classical-equations, .transition-steps, .gauge-concepts, .rule-grid, .pos-forms, .invariance-steps, .lattice-hamiltonian, .gauge-grid, .lattice-grid, .ab-setup, .period-grid, .use-grid, .berry-formulation, .curv-grid, .example-grid, .tech-grid, .photonic-grid, .elec-grid, .numerical-approaches, .tool-grid, .exp-grid, .modern-grid, .app-grid, .frontier-grid, .inter-grid {
    grid-template-columns: 1fr;
  }
}
</style>