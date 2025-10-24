<template>
  <div class="chapter-content">
    <h1>10.2.4 量子霍尔导电的计算</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>量子霍尔导电的精确计算是理解量子霍尔效应的核心问题。这涉及到在强磁场和低温条件下，二维电子系统的输运性质计算。本节将详细介绍各种理论方法和计算技巧。</p>
      
      <div class="highlight-box">
        <h3>主要计算方法</h3>
        <ul>
          <li><strong>Kubo公式</strong>：线性响应理论框架</li>
          <li><strong>Laughlin波函数方法</strong>：多体波函数计算</li>
          <li><strong>边缘态理论</strong>：手性边缘流计算</li>
          <li><strong>复合费米子理论</strong>：分数量子霍尔态</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. Kubo公式方法</h2>
      
      <div class="kubo-formalism">
        <h3>线性响应理论</h3>
        <p>电导张量的Kubo公式表达：</p>
        
        <div class="formula-block">
          σ<sub>μν</sub>(ω) = (ie²/ℏΩ) ∑<sub>n,m</sub> (f<sub>n</sub> - f<sub>m</sub>)/(E<sub>n</sub> - E<sub>m</sub>) × ⟨n|v<sub>μ</sub>|m⟩⟨m|v<sub>ν</sub>|n⟩/(ω + iδ - (E<sub>m</sub> - E<sub>n</sub>)/ℏ)
        </div>
        
        <div class="kubo-components">
          <div class="comp-grid">
            <div class="comp-card">
              <h4>速度算符</h4>
              <div class="formula-block">
                v<sub>μ</sub> = (1/iℏ)[H, r<sub>μ</sub>]
              </div>
              <p>位置算符的时间导数</p>
            </div>
            
            <div class="comp-card">
              <h4>费米分布</h4>
              <div class="formula-block">
                f<sub>n</sub> = 1/(e<sup>(E<sub>n</sub>-μ)/k<sub>B</sub>T</sup> + 1)
              </div>
              <p>热平衡分布函数</p>
            </div>
            
            <div class="comp-card">
              <h4>矩阵元</h4>
              <div class="formula-block">
                ⟨n|v<sub>μ</sub>|m⟩ = (i/ℏ)(E<sub>m</sub> - E<sub>n</sub>)⟨n|r<sub>μ</sub>|m⟩
              </div>
              <p>跃迁矩阵元</p>
            </div>
          </div>
        </div>
        
        <div class="dc-limit">
          <h3>直流极限 (ω → 0)</h3>
          <p>零频率下的电导张量：</p>
          
          <div class="formula-block">
            σ<sub>μν</sub> = (ie²/ℏΩ) ∑<sub>n,m</sub> (f<sub>n</sub> - f<sub>m</sub>)/(E<sub>n</sub> - E<sub>m</sub>) ⟨n|v<sub>μ</sub>|m⟩⟨m|v<sub>ν</sub>|n⟩
          </div>
          
          <div class="conductivity-components">
            <div class="cond-card">
              <h4>纵向电导</h4>
              <div class="formula-block">
                σ<sub>xx</sub> = σ<sub>yy</sub>
              </div>
              <p>对角元，耗散输运</p>
            </div>
            
            <div class="cond-card">
              <h4>霍尔电导</h4>
              <div class="formula-block">
                σ<sub>xy</sub> = -σ<sub>yx</sub>
              </div>
              <p>反对角元，非耗散输运</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 整数量子霍尔态的计算</h2>
      
      <div class="integer-qhe">
        <h3>Landau能级填充</h3>
        <p>整数填充因子ν = n时的电导计算：</p>
        
        <div class="formula-block">
          ν = n<sub>e</sub>h/eB = n (整数)
        </div>
        
        <div class="landau-level-filling">
          <div class="filling-scenarios">
            <div class="scenario-card">
              <h4>完全填充能级</h4>
              <p>前n个Landau能级完全填充</p>
              <div class="formula-block">
                σ<sub>xy</sub> = nе²/h
              </div>
              <p>精确量子化值</p>
            </div>
            
            <div class="scenario-card">
              <h4>部分填充能级</h4>
              <p>最高占据能级部分填充</p>
              <div class="formula-block">
                σ<sub>xx</sub> ≠ 0, σ<sub>xy</sub> ≠ ne²/h
              </div>
              <p>非量子化区域</p>
            </div>
          </div>
        </div>
        
        <div class="thouless-formula">
          <h3>Thouless公式</h3>
          <p>考虑无序效应的霍尔电导：</p>
          
          <div class="formula-block">
            σ<sub>xy</sub> = (e²/h) ∑<sub>n</sub> ∫ dE ρ<sub>n</sub>(E) f(E) C<sub>n</sub>(E)
          </div>
          
          <div class="thouless-components">
            <div class="thou-card">
              <h4>态密度</h4>
              <div class="formula-block">
                ρ<sub>n</sub>(E) = (eB/h) g<sub>n</sub>(E)
              </div>
              <p>第n个Landau能级的态密度</p>
            </div>
            
            <div class="thou-card">
              <h4>Chern数</h4>
              <div class="formula-block">
                C<sub>n</sub>(E) = (1/2π) ∫ d²k Ω<sub>n</sub>(k)
              </div>
              <p>Berry曲率的积分</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 无序效应的处理</h2>
      
      <div class="disorder-effects">
        <h3>随机势模型</h3>
        <p>杂质势对Landau能级的影响：</p>
        
        <div class="formula-block">
          H = H<sub>0</sub> + V<sub>imp</sub>(r)
        </div>
        
        <div class="disorder-models">
          <div class="model-grid">
            <div class="model-card">
              <h4>白噪声无序</h4>
              <div class="formula-block">
                ⟨V<sub>imp</sub>(r)V<sub>imp</sub>(r')⟩ = W²δ(r - r')
              </div>
              <p>短程关联无序</p>
            </div>
            
            <div class="model-card">
              <h4>库仑无序</h4>
              <div class="formula-block">
                V<sub>imp</sub>(r) = ∑<sub>i</sub> e²/4πε|r - R<sub>i</sub>|
              </div>
              <p>长程库仑势</p>
            </div>
            
            <div class="model-card">
              <h4>界面粗糙度</h4>
              <div class="formula-block">
                V<sub>rough</sub>(r) = V<sub>0</sub>ξ(r)
              </div>
              <p>界面起伏导致的势</p>
            </div>
          </div>
        </div>
        
        <div class="self-consistent-born">
          <h3>自洽Born近似</h3>
          <p>无序平均的Green函数：</p>
          
          <div class="formula-block">
            G(E) = [E - H<sub>0</sub> - Σ(E)]<sup>-1</sup>
          </div>
          
          <div class="born-approximation">
            <div class="born-steps">
              <div class="step-card">
                <h4>1. 自能计算</h4>
                <div class="formula-block">
                  Σ(E) = ∫ d²r' |V<sub>imp</sub>(r - r')|² G(r', r'; E)
                </div>
                <p>散射自能的自洽方程</p>
              </div>
              
              <div class="step-card">
                <h4>2. 能级展宽</h4>
                <div class="formula-block">
                  Γ<sub>n</sub> = -Im[Σ<sub>n</sub>(E<sub>n</sub>)]
                </div>
                <p>Landau能级的展宽</p>
              </div>
              
              <div class="step-card">
                <h4>3. 态密度重整化</h4>
                <div class="formula-block">
                  ρ<sub>n</sub>(E) = (1/π) Γ<sub>n</sub>/[(E - E<sub>n</sub>)² + Γ<sub>n</sub>²]
                </div>
                <p>Lorentz展宽形式</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 分数量子霍尔态的计算</h2>
      
      <div class="fractional-qhe">
        <h3>Laughlin波函数</h3>
        <p>ν = 1/m填充的多体基态波函数：</p>
        
        <div class="formula-block">
          Ψ<sub>m</sub>(z<sub>1</sub>, ..., z<sub>N</sub>) = ∏<sub>i&lt;j</sub> (z<sub>i</sub> - z<sub>j</sub>)<sup>m</sup> e<sup>-∑<sub>i</sub>|z<sub>i</sub>|²/4l<sub>B</sub>²</sup>
        </div>
        
        <div class="laughlin-properties">
          <div class="prop-grid">
            <div class="prop-card">
              <h4>复坐标</h4>
              <div class="formula-block">
                z<sub>i</sub> = x<sub>i</sub> + iy<sub>i</sub>
              </div>
              <p>电子位置的复表示</p>
            </div>
            
            <div class="prop-card">
              <h4>奇数m</h4>
              <p>m = 1, 3, 5, ... 对应费米子</p>
              <div class="formula-block">
                ν = 1/m
              </div>
            </div>
            
            <div class="prop-card">
              <h4>不可压缩性</h4>
              <p>存在能隙的基态</p>
              <div class="formula-block">
                Δ ∝ e²/4πεl<sub>B</sub>
              </div>
            </div>
          </div>
        </div>
        
        <div class="plasma-analogy">
          <h3>等离子体类比</h3>
          <p>Laughlin波函数的经典类比：</p>
          
          <div class="formula-block">
            |Ψ<sub>m</sub>|² ∝ ∏<sub>i&lt;j</sub> |z<sub>i</sub> - z<sub>j</sub>|<sup>2m</sup> e<sup>-∑<sub>i</sub>|z<sub>i</sub>|²/2l<sub>B</sub>²</sup>
          </div>
          
          <div class="plasma-interpretation">
            <div class="plasma-card">
              <h4>二维一元等离子体</h4>
              <p>电荷为m的粒子在均匀背景中</p>
              <ul>
                <li>库仑排斥相互作用</li>
                <li>谐振子约束势</li>
                <li>温度T = 1/2m</li>
              </ul>
            </div>
            
            <div class="plasma-card">
              <h4>关联函数</h4>
              <div class="formula-block">
                g(r) = ⟨ρ(0)ρ(r)⟩/⟨ρ⟩²
              </div>
              <p>径向分布函数</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 复合费米子理论</h2>
      
      <div class="composite-fermion">
        <h3>Chern-Simons变换</h3>
        <p>将相互作用费米子映射为自由复合费米子：</p>
        
        <div class="formula-block">
          ψ<sub>CF</sub> = ψ<sub>e</sub> ∏<sub>j≠i</sub> (z<sub>i</sub> - z<sub>j</sub>)/(|z<sub>i</sub> - z<sub>j</sub>|) × e<sup>iθ<sub>ij</sub>/2</sup>
        </div>
        
        <div class="chern-simons-field">
          <div class="cs-components">
            <div class="cs-card">
              <h4>统计磁场</h4>
              <div class="formula-block">
                B<sub>CS</sub> = 2πρ<sub>e</sub>Φ<sub>0</sub>
              </div>
              <p>每个电子附加2个磁通量子</p>
            </div>
            
            <div class="cs-card">
              <h4>有效磁场</h4>
              <div class="formula-block">
                B<sub>eff</sub> = B - B<sub>CS</sub> = B - 2πρ<sub>e</sub>Φ<sub>0</sub>
              </div>
              <p>复合费米子感受的磁场</p>
            </div>
          </div>
        </div>
        
        <div class="cf-landau-levels">
          <h3>复合费米子Landau能级</h3>
          <p>在有效磁场中的能级结构：</p>
          
          <div class="cf-filling-scenarios">
            <div class="cf-scenario-card">
              <h4>ν = 1/2</h4>
              <p>B<sub>eff</sub> = 0，费米海</p>
              <div class="formula-block">
                σ<sub>xy</sub> = e²/2h
              </div>
            </div>
            
            <div class="cf-scenario-card">
              <h4>ν = p/(2p+1)</h4>
              <p>p个CF Landau能级填充</p>
              <div class="formula-block">
                σ<sub>xy</sub> = pe²/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 边缘态理论</h2>
      
      <div class="edge-state-theory">
        <h3>手性边缘模式</h3>
        <p>量子霍尔态边缘的一维导电通道：</p>
        
        <div class="formula-block">
          H<sub>edge</sub> = ∑<sub>n</sub> v<sub>n</sub> ∫ dx ψ<sub>n</sub><sup>†</sup>(x) (-i∂<sub>x</sub>) ψ<sub>n</sub>(x)
        </div>
        
        <div class="edge-properties">
          <div class="edge-grid">
            <div class="edge-card">
              <h4>手性速度</h4>
              <div class="formula-block">
                v<sub>n</sub> = sign(n) × v<sub>F</sub>
              </div>
              <p>单向传播</p>
            </div>
            
            <div class="edge-card">
              <h4>边缘电导</h4>
              <div class="formula-block">
                G<sub>edge</sub> = ν × e²/h
              </div>
              <p>量子化电导</p>
            </div>
          </div>
        </div>
        
        <div class="edge-current-calculation">
          <h3>边缘电流计算</h3>
          <p>沿边缘的电流密度：</p>
          
          <div class="formula-block">
            j<sub>edge</sub>(x) = ∑<sub>n</sub> ev<sub>n</sub> ψ<sub>n</sub><sup>†</sup>(x) ψ<sub>n</sub>(x)
          </div>
          
          <div class="current-components">
            <div class="current-card">
              <h4>平衡态电流</h4>
              <p>化学势差驱动的电流</p>
              <div class="formula-block">
                I = (e²/h) ν (μ<sub>L</sub> - μ<sub>R</sub>)/e
              </div>
            </div>
            
            <div class="current-card">
              <h4>非平衡输运</h4>
              <p>Landauer-Büttiker公式</p>
              <div class="formula-block">
                I<sub>α</sub> = (e²/h) ∑<sub>β</sub> T<sub>αβ</sub> (μ<sub>α</sub> - μ<sub>β</sub>)/e
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 数值计算方法</h2>
      
      <div class="numerical-methods">
        <h3>精确对角化</h3>
        <p>小系统的精确多体计算：</p>
        
        <div class="exact-diagonalization">
          <div class="ed-steps">
            <div class="ed-step">
              <h4>1. 基态构造</h4>
              <p>在有限系统中构造多体基</p>
              <div class="formula-block">
                |n<sub>1</sub>, n<sub>2</sub>, ...⟩
              </div>
              <p>Fock态表示</p>
            </div>
            
            <div class="ed-step">
              <h4>2. 哈密顿矩阵</h4>
              <p>构造相互作用哈密顿量矩阵</p>
              <div class="formula-block">
                H<sub>ij</sub> = ⟨i|H|j⟩
              </div>
            </div>
            
            <div class="ed-step">
              <h4>3. 本征值求解</h4>
              <p>数值对角化获得能谱</p>
              <ul>
                <li>基态能量</li>
                <li>激发能隙</li>
                <li>波函数重叠</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="monte-carlo-methods">
          <h3>量子蒙特卡罗</h3>
          <p>大系统的统计采样方法：</p>
          
          <div class="qmc-approaches">
            <div class="qmc-card">
              <h4>变分蒙特卡罗</h4>
              <p>试探波函数的能量优化</p>
              <div class="formula-block">
                E[Ψ] = ⟨Ψ|H|Ψ⟩/⟨Ψ|Ψ⟩
              </div>
            </div>
            
            <div class="qmc-card">
              <h4>扩散蒙特卡罗</h4>
              <p>虚时演化求基态</p>
              <div class="formula-block">
                |Ψ(τ)⟩ = e<sup>-Hτ</sup>|Ψ(0)⟩
              </div>
            </div>
          </div>
        </div>
        
        <div class="density-matrix-renormalization">
          <h3>密度矩阵重整化群</h3>
          <p>一维边缘态的精确处理：</p>
          
          <div class="dmrg-procedure">
            <div class="dmrg-step">
              <h4>系统-环境分解</h4>
              <p>将系统分为活跃区和环境</p>
            </div>
            
            <div class="dmrg-step">
              <h4>密度矩阵对角化</h4>
              <p>保留最重要的本征态</p>
            </div>
            
            <div class="dmrg-step">
              <h4>迭代收敛</h4>
              <p>逐步增大系统尺寸</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 拓扑不变量的计算</h2>
      
      <div class="topological-invariants">
        <h3>Chern数计算</h3>
        <p>量子霍尔态的拓扑特征：</p>
        
        <div class="formula-block">
          C = (1/2π) ∫<sub>BZ</sub> d²k Ω(k)
        </div>
        
        <div class="chern-calculation">
          <div class="chern-methods">
            <div class="chern-card">
              <h4>Berry曲率积分</h4>
              <div class="formula-block">
                Ω(k) = i⟨∂<sub>k<sub>x</sub></sub>u|∂<sub>k<sub>y</sub></sub>u⟩ - i⟨∂<sub>k<sub>y</sub></sub>u|∂<sub>k<sub>x</sub></sub>u⟩
              </div>
              <p>Bloch态的Berry曲率</p>
            </div>
            
            <div class="chern-card">
              <h4>Wilson环方法</h4>
              <div class="formula-block">
                W = Tr[P exp(i∮ A·dk)]
              </div>
              <p>非阿贝尔Berry联络</p>
            </div>
          </div>
        </div>
        
        <div class="tknn-formula">
          <h3>TKNN公式</h3>
          <p>霍尔电导与Chern数的关系：</p>
          
          <div class="formula-block">
            σ<sub>xy</sub> = (e²/h) ∑<sub>n</sub> C<sub>n</sub>
          </div>
          
          <div class="tknn-interpretation">
            <div class="tknn-card">
              <h4>拓扑保护</h4>
              <p>Chern数的量子化保证电导量子化</p>
            </div>
            
            <div class="tknn-card">
              <h4>能隙要求</h4>
              <p>拓扑不变量要求体能隙存在</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 实验对比与验证</h2>
      
      <div class="experimental-comparison">
        <h3>理论预测与实验结果</h3>
        
        <div class="comparison-grid">
          <div class="comp-card">
            <h4>电导量子化</h4>
            <p>理论预测的精确验证</p>
            <div class="formula-block">
              σ<sub>xy</sub> = ν × e²/h
            </div>
            <p>精度达到10<sup>-9</sup></p>
          </div>
          
          <div class="comp-card">
            <h4>激发能隙</h4>
            <p>分数态能隙的测量</p>
            <ul>
              <li>激活输运测量</li>
              <li>比热测量</li>
              <li>光谱学研究</li>
            </ul>
          </div>
          
          <div class="comp-card">
            <h4>边缘态性质</h4>
            <p>手性边缘流的观测</p>
            <ul>
              <li>扫描隧道显微镜</li>
              <li>量子点接触</li>
              <li>噪声测量</li>
            </ul>
          </div>
        </div>
        
        <div class="discrepancies-analysis">
          <h3>理论与实验的差异</h3>
          
          <div class="discrepancy-factors">
            <div class="factor-card">
              <h4>有限尺寸效应</h4>
              <p>实际样品的边界效应</p>
              <ul>
                <li>边缘重构</li>
                <li>电容耦合</li>
                <li>接触电阻</li>
              </ul>
            </div>
            
            <div class="factor-card">
              <h4>无序效应</h4>
              <p>理想模型的修正</p>
              <ul>
                <li>杂质散射</li>
                <li>界面粗糙度</li>
                <li>合金无序</li>
              </ul>
            </div>
            
            <div class="factor-card">
              <h4>温度效应</h4>
              <p>有限温度的修正</p>
              <ul>
                <li>热激发</li>
                <li>声子散射</li>
                <li>电子-电子散射</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>11. 计算软件和工具</h2>
      
      <div class="computational-tools">
        <h3>专用软件包</h3>
        
        <div class="software-grid">
          <div class="software-card">
            <h4>QuTiP</h4>
            <p>量子工具箱</p>
            <ul>
              <li>量子系统模拟</li>
              <li>Lindblad方程求解</li>
              <li>量子态演化</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h4>Kwant</h4>
            <p>量子输运计算</p>
            <ul>
              <li>紧束缚模型</li>
              <li>散射矩阵计算</li>
              <li>拓扑不变量</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h4>PythTB</h4>
            <p>紧束缚模型工具</p>
            <ul>
              <li>能带计算</li>
              <li>Berry相位</li>
              <li>Wannier函数</li>
            </ul>
          </div>
        </div>
        
        <div class="computational-challenges">
          <h3>计算挑战</h3>
          
          <div class="challenge-grid">
            <div class="challenge-card">
              <h4>多体问题</h4>
              <p>指数增长的希尔伯特空间</p>
              <ul>
                <li>维数灾难</li>
                <li>符号问题</li>
                <li>量子纠缠</li>
              </ul>
            </div>
            
            <div class="challenge-card">
              <h4>长程相互作用</h4>
              <p>库仑相互作用的处理</p>
              <ul>
                <li>Ewald求和</li>
                <li>快速多极方法</li>
                <li>平面波展开</li>
              </ul>
            </div>
            
            <div class="challenge-card">
              <h4>拓扑性质</h4>
              <p>拓扑不变量的数值计算</p>
              <ul>
                <li>Berry相位积分</li>
                <li>边界条件</li>
                <li>数值精度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>12. 未来发展方向</h2>
      
      <div class="future-directions">
        <h3>新兴计算方法</h3>
        
        <div class="future-grid">
          <div class="future-card">
            <h4>机器学习方法</h4>
            <p>AI辅助的量子多体计算</p>
            <ul>
              <li>神经网络波函数</li>
              <li>变分自编码器</li>
              <li>强化学习优化</li>
            </ul>
          </div>
          
          <div class="future-card">
            <h4>量子计算</h4>
            <p>量子算法的应用</p>
            <ul>
              <li>变分量子本征求解器</li>
              <li>量子近似优化算法</li>
              <li>量子模拟</li>
            </ul>
          </div>
          
          <div class="future-card">
            <h4>张量网络方法</h4>
            <p>高效的多体态表示</p>
            <ul>
              <li>矩阵乘积态</li>
              <li>投影纠缠对态</li>
              <li>多尺度纠缠重整化</li>
            </ul>
          </div>
        </div>
        
        <div class="emerging-applications">
          <h3>新兴应用领域</h3>
          
          <div class="application-areas">
            <div class="area-card">
              <h4>拓扑量子计算</h4>
              <p>基于任意子的量子计算</p>
              <ul>
                <li>拓扑量子比特</li>
                <li>编织操作</li>
                <li>容错量子计算</li>
              </ul>
            </div>
            
            <div class="area-card">
              <h4>分数Chern绝缘体</h4>
              <p>无磁场的分数量子霍尔态</p>
              <ul>
                <li>平带物理</li>
                <li>几何相位</li>
                <li>魔角石墨烯</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>Kubo公式提供了计算量子霍尔电导的理论框架</li>
        <li>整数量子霍尔态通过Landau能级填充理解</li>
        <li>无序效应导致能级展宽，但不破坏拓扑保护</li>
        <li>分数量子霍尔态需要考虑电子-电子相互作用</li>
        <li>Laughlin波函数和复合费米子理论是重要的理论工具</li>
        <li>边缘态理论解释了量子化电导的微观机制</li>
        <li>数值方法包括精确对角化、蒙特卡罗和DMRG</li>
        <li>拓扑不变量的计算验证了量子霍尔效应的拓扑本质</li>
        <li>理论计算与实验结果的对比验证了理论的正确性</li>
        <li>新兴的计算方法为未来研究提供了新的工具</li>
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

h5 {
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.1em;
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

.kubo-formalism, .integer-qhe, .disorder-effects, .fractional-qhe, .composite-fermion, .edge-state-theory, .numerical-methods, .topological-invariants, .experimental-comparison, .computational-tools, .future-directions {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.comp-grid, .conductivity-components, .filling-scenarios, .thouless-components, .model-grid, .born-steps, .prop-grid, .plasma-interpretation, .cs-components, .cf-filling-scenarios, .edge-grid, .current-components, .ed-steps, .qmc-approaches, .dmrg-procedure, .chern-methods, .tknn-interpretation, .comparison-grid, .discrepancy-factors, .software-grid, .challenge-grid, .future-grid, .application-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.comp-card, .cond-card, .scenario-card, .thou-card, .model-card, .step-card, .prop-card, .plasma-card, .cs-card, .cf-scenario-card, .edge-card, .current-card, .ed-step, .qmc-card, .dmrg-step, .chern-card, .tknn-card, .factor-card, .software-card, .challenge-card, .future-card, .area-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.kubo-components, .dc-limit, .landau-level-filling, .thouless-formula, .disorder-models, .self-consistent-born, .laughlin-properties, .plasma-analogy, .chern-simons-field, .cf-landau-levels, .edge-properties, .edge-current-calculation, .exact-diagonalization, .monte-carlo-methods, .density-matrix-renormalization, .chern-calculation, .tknn-formula, .discrepancies-analysis, .computational-challenges, .emerging-applications {
  background: #f1f2f6;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.born-approximation, .plasma-interpretation, .determination-steps {
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
  
  .comp-grid, .conductivity-components, .filling-scenarios, .thouless-components, .model-grid, .born-steps, .prop-grid, .plasma-interpretation, .cs-components, .cf-filling-scenarios, .edge-grid, .current-components, .ed-steps, .qmc-approaches, .dmrg-procedure, .chern-methods, .tknn-interpretation, .comparison-grid, .discrepancy-factors, .software-grid, .challenge-grid, .future-grid, .application-areas {
    grid-template-columns: 1fr;
  }
}
</style>