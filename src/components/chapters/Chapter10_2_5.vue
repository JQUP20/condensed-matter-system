<template>
  <div class="chapter-content">
    <h1>10.2.5 圆柱几何下的Laughlin规范理论</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>圆柱几何为研究量子霍尔效应提供了一个重要的理论框架。与平面几何相比，圆柱几何具有周期性边界条件，使得我们能够更好地理解边缘态、准粒子激发和拓扑性质。Laughlin在圆柱几何下的规范理论为分数量子霍尔态提供了深刻的物理洞察。</p>
      
      <div class="highlight-box">
        <h3>圆柱几何的优势</h3>
        <ul>
          <li><strong>周期性边界条件</strong>：消除边界效应</li>
          <li><strong>准粒子研究</strong>：清晰的激发谱</li>
          <li><strong>拓扑性质</strong>：Berry相位和统计性质</li>
          <li><strong>数值计算</strong>：有限尺寸系统的精确处理</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 圆柱几何的设置</h2>
      
      <div class="cylinder-geometry">
        <h3>坐标系统</h3>
        <p>圆柱面上的坐标表示：</p>
        
        <div class="coordinate-system">
          <div class="coord-grid">
            <div class="coord-card">
              <h4>圆柱坐标</h4>
              <div class="formula-block">
                x ∈ [0, L<sub>x</sub>], y ∈ [0, L<sub>y</sub>]
              </div>
              <p>x方向周期性：x ≡ x + L<sub>x</sub></p>
            </div>
            
            <div class="coord-card">
              <h4>复坐标</h4>
              <div class="formula-block">
                z = x + iy, z̄ = x - iy
              </div>
              <p>便于处理解析函数</p>
            </div>
            
            <div class="coord-card">
              <h4>磁长度单位</h4>
              <div class="formula-block">
                l<sub>B</sub> = √(ℏ/eB)
              </div>
              <p>自然长度尺度</p>
            </div>
          </div>
        </div>
        
        <div class="boundary-conditions">
          <h3>边界条件</h3>
          <p>圆柱几何的边界条件设置：</p>
          
          <div class="boundary-types">
            <div class="boundary-card">
              <h4>周期性边界条件</h4>
              <div class="formula-block">
                ψ(x + L<sub>x</sub>, y) = e<sup>iθ</sup>ψ(x, y)
              </div>
              <p>x方向的准周期性</p>
            </div>
            
            <div class="boundary-card">
              <h4>开放边界条件</h4>
              <div class="formula-block">
                ψ(x, 0) = ψ(x, L<sub>y</sub>) = 0
              </div>
              <p>y方向的硬壁边界</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 磁场配置</h2>
      
      <div class="magnetic-field-config">
        <h3>均匀磁场</h3>
        <p>垂直于圆柱面的均匀磁场：</p>
        
        <div class="formula-block">
          B = B<sub>0</sub> ẑ
        </div>
        
        <div class="flux-quantization">
          <div class="flux-grid">
            <div class="flux-card">
              <h4>磁通量</h4>
              <div class="formula-block">
                Φ = B<sub>0</sub> × L<sub>x</sub> × L<sub>y</sub>
              </div>
              <p>穿过圆柱面的总磁通</p>
            </div>
            
            <div class="flux-card">
              <h4>磁通量子数</h4>
              <div class="formula-block">
                N<sub>φ</sub> = Φ/Φ<sub>0</sub> = BL<sub>x</sub>L<sub>y</sub>/2πl<sub>B</sub>²
              </div>
              <p>量子化条件</p>
            </div>
            
            <div class="flux-card">
              <h4>填充因子</h4>
              <div class="formula-block">
                ν = N<sub>e</sub>/N<sub>φ</sub>
              </div>
              <p>电子数与磁通量子数之比</p>
            </div>
          </div>
        </div>
        
        <div class="gauge-choice">
          <h3>规范选择</h3>
          <p>圆柱几何下的规范选择：</p>
          
          <div class="gauge-options">
            <div class="gauge-card">
              <h4>Landau规范</h4>
              <div class="formula-block">
                A = (0, Bx, 0)
              </div>
              <p>x方向平移不变性</p>
            </div>
            
            <div class="gauge-card">
              <h4>对称规范</h4>
              <div class="formula-block">
                A = (1/2)B(-y, x, 0)
              </div>
              <p>旋转对称性（局部）</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 单粒子问题</h2>
      
      <div class="single-particle">
        <h3>Landau能级</h3>
        <p>圆柱几何下的单粒子薛定谔方程：</p>
        
        <div class="formula-block">
          [-ℏ²/2m ∇² + (1/2)mω<sub>c</sub>²(y - y<sub>0</sub>)²]ψ = Eψ
        </div>
        
        <div class="landau-levels-cylinder">
          <div class="ll-properties">
            <div class="ll-card">
              <h4>能级结构</h4>
              <div class="formula-block">
                E<sub>n</sub> = ℏω<sub>c</sub>(n + 1/2)
              </div>
              <p>与平面几何相同</p>
            </div>
            
            <div class="ll-card">
              <h4>回旋中心</h4>
              <div class="formula-block">
                y<sub>0</sub> = -l<sub>B</sub>²k<sub>x</sub>
              </div>
              <p>x方向动量决定</p>
            </div>
            
            <div class="ll-card">
              <h4>简并度</h4>
              <div class="formula-block">
                N<sub>L</sub> = L<sub>x</sub>/2πl<sub>B</sub>²
              </div>
              <p>圆柱周长决定</p>
            </div>
          </div>
        </div>
        
        <div class="wavefunction-cylinder">
          <h3>波函数形式</h3>
          <p>圆柱几何下的Landau轨道波函数：</p>
          
          <div class="formula-block">
            ψ<sub>n,m</sub>(x,y) = (1/√L<sub>x</sub>) e<sup>i2πmx/L<sub>x</sub></sup> φ<sub>n</sub>(y - y<sub>m</sub>)
          </div>
          
          <div class="wavefunction-components">
            <div class="wf-card">
              <h4>量子数m</h4>
              <div class="formula-block">
                m = 0, 1, 2, ..., N<sub>φ</sub> - 1
              </div>
              <p>x方向的量子化动量</p>
            </div>
            
            <div class="wf-card">
              <h4>回旋中心位置</h4>
              <div class="formula-block">
                y<sub>m</sub> = -2πl<sub>B</sub>²m/L<sub>x</sub>
              </div>
              <p>离散的回旋中心</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. Laughlin波函数</h2>
      
      <div class="laughlin-wavefunction">
        <h3>圆柱上的Laughlin态</h3>
        <p>ν = 1/m填充的多体基态波函数：</p>
        
        <div class="formula-block">
          Ψ<sub>m</sub> = ∏<sub>i&lt;j</sub> [sin(π(z<sub>i</sub> - z<sub>j</sub>)/L<sub>x</sub>)]<sup>m</sup> e<sup>-∑<sub>i</sub>|z<sub>i</sub>|²/4l<sub>B</sub>²</sup>
        </div>
        
        <div class="laughlin-properties-cylinder">
          <div class="prop-grid">
            <div class="prop-card">
              <h4>周期性</h4>
              <p>满足圆柱的周期性边界条件</p>
              <div class="formula-block">
                Ψ(z<sub>1</sub>+L<sub>x</sub>, ...) = Ψ(z<sub>1</sub>, ...)
              </div>
            </div>
            
            <div class="prop-card">
              <h4>零点结构</h4>
              <p>粒子重合时波函数为零</p>
              <div class="formula-block">
                Ψ → 0 当 z<sub>i</sub> → z<sub>j</sub>
              </div>
            </div>
            
            <div class="prop-card">
              <h4>不可压缩性</h4>
              <p>存在有限能隙</p>
              <div class="formula-block">
                Δ ∝ e²/4πεl<sub>B</sub>
              </div>
            </div>
          </div>
        </div>
        
        <div class="plasma-mapping">
          <h3>等离子体映射</h3>
          <p>圆柱上的二维一元等离子体：</p>
          
          <div class="formula-block">
            |Ψ<sub>m</sub>|² ∝ ∏<sub>i&lt;j</sub> |sin(π(z<sub>i</sub> - z<sub>j</sub>)/L<sub>x</sub>)|<sup>2m</sup> e<sup>-∑<sub>i</sub>|z<sub>i</sub>|²/2l<sub>B</sub>²</sup>
          </div>
          
          <div class="plasma-properties">
            <div class="plasma-card">
              <h4>相互作用势</h4>
              <div class="formula-block">
                V(r) = -2m ln|sin(πr/L<sub>x</sub>)|
              </div>
              <p>周期性库仑势</p>
            </div>
            
            <div class="plasma-card">
              <h4>约束势</h4>
              <div class="formula-block">
                U(r) = |r|²/2l<sub>B</sub>²
              </div>
              <p>谐振子约束</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 准粒子激发</h2>
      
      <div class="quasiparticle-excitations">
        <h3>准粒子和准空穴</h3>
        <p>Laughlin态的低能激发：</p>
        
        <div class="excitation-types">
          <div class="exc-grid">
            <div class="exc-card">
              <h4>准粒子激发</h4>
              <div class="formula-block">
                Ψ<sub>qp</sub> = ∏<sub>i</sub> (z<sub>i</sub> - η) Ψ<sub>m</sub>
              </div>
              <p>在位置η处创建准粒子</p>
            </div>
            
            <div class="exc-card">
              <h4>准空穴激发</h4>
              <div class="formula-block">
                Ψ<sub>qh</sub> = ∏<sub>i</sub> ∂<sub>z<sub>i</sub></sub> Ψ<sub>m</sub>
              </div>
              <p>通过微分算符创建</p>
            </div>
          </div>
        </div>
        
        <div class="quasiparticle-properties">
          <h3>准粒子性质</h3>
          
          <div class="qp-properties">
            <div class="qp-card">
              <h4>分数电荷</h4>
              <div class="formula-block">
                Q<sub>qp</sub> = ±e/m
              </div>
              <p>准粒子携带分数电荷</p>
            </div>
            
            <div class="qp-card">
              <h4>分数统计</h4>
              <div class="formula-block">
                θ = π/m
              </div>
              <p>任意子统计相位</p>
            </div>
            
            <div class="qp-card">
              <h4>能隙</h4>
              <div class="formula-block">
                Δ<sub>qp</sub> = C × e²/4πεl<sub>B</sub>
              </div>
              <p>准粒子创建能量</p>
            </div>
          </div>
        </div>
        
        <div class="braiding-properties">
          <h3>编织性质</h3>
          <p>准粒子的编织操作：</p>
          
          <div class="braiding-scenarios">
            <div class="braid-card">
              <h4>单次编织</h4>
              <p>两个准粒子交换一次</p>
              <div class="formula-block">
                |ψ⟩ → e<sup>iπ/m</sup>|ψ⟩
              </div>
            </div>
            
            <div class="braid-card">
              <h4>完整编织</h4>
              <p>一个准粒子绕另一个一圈</p>
              <div class="formula-block">
                |ψ⟩ → e<sup>i2π/m</sup>|ψ⟩
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 边缘态理论</h2>
      
      <div class="edge-state-theory">
        <h3>圆柱边缘的手性模式</h3>
        <p>圆柱两端的边缘态：</p>
        
        <div class="formula-block">
          H<sub>edge</sub> = (v/2π) ∫ dx [∂<sub>x</sub>φ(x)]²
        </div>
        
        <div class="edge-modes">
          <div class="edge-grid">
            <div class="edge-card">
              <h4>上边缘 (y = L<sub>y</sub>)</h4>
              <div class="formula-block">
                φ<sub>R</sub>(x,t) = φ<sub>R</sub>(x - vt)
              </div>
              <p>右移手性模式</p>
            </div>
            
            <div class="edge-card">
              <h4>下边缘 (y = 0)</h4>
              <div class="formula-block">
                φ<sub>L</sub>(x,t) = φ<sub>L</sub>(x + vt)
              </div>
              <p>左移手性模式</p>
            </div>
          </div>
        </div>
        
        <div class="edge-current">
          <h3>边缘电流</h3>
          <p>手性边缘态的电流密度：</p>
          
          <div class="formula-block">
            j<sub>edge</sub> = (e/2πm) ∂<sub>x</sub>φ
          </div>
          
          <div class="current-properties">
            <div class="current-card">
              <h4>量子化电导</h4>
              <div class="formula-block">
                G = (e²/h) × (1/m)
              </div>
              <p>分数量子化值</p>
            </div>
            
            <div class="current-card">
              <h4>无散射传输</h4>
              <p>手性性质保证无背散射</p>
              <ul>
                <li>拓扑保护</li>
                <li>完美传输</li>
                <li>量子化电阻</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 数值计算方法</h2>
      
      <div class="numerical-methods">
        <h3>精确对角化</h3>
        <p>圆柱几何下的多体计算：</p>
        
        <div class="exact-diagonalization">
          <div class="ed-advantages">
            <div class="adv-card">
              <h4>有限尺寸效应</h4>
              <p>周期性边界条件减少边界效应</p>
            </div>
            
            <div class="adv-card">
              <h4>动量量子化</h4>
              <p>x方向动量的离散化</p>
              <div class="formula-block">
                k<sub>x</sub> = 2πm/L<sub>x</sub>
              </div>
            </div>
            
            <div class="adv-card">
              <h4>对称性利用</h4>
              <p>平移对称性简化计算</p>
            </div>
          </div>
        </div>
        
        <div class="monte-carlo-cylinder">
          <h3>量子蒙特卡罗</h3>
          <p>圆柱几何的统计采样：</p>
          
          <div class="qmc-methods">
            <div class="qmc-card">
              <h4>变分蒙特卡罗</h4>
              <p>Laughlin波函数的能量计算</p>
              <div class="formula-block">
                E = ⟨Ψ<sub>trial</sub>|H|Ψ<sub>trial</sub>⟩/⟨Ψ<sub>trial</sub>|Ψ<sub>trial</sub>⟩
              </div>
            </div>
            
            <div class="qmc-card">
              <h4>扩散蒙特卡罗</h4>
              <p>基态的投影方法</p>
              <div class="formula-block">
                |Ψ<sub>0</sub>⟩ = lim<sub>τ→∞</sub> e<sup>-Hτ</sup>|Ψ<sub>trial</sub>⟩
              </div>
            </div>
          </div>
        </div>
        
        <div class="density-matrix-methods">
          <h3>密度矩阵方法</h3>
          <p>边缘态的精确处理：</p>
          
          <div class="dm-applications">
            <div class="dm-card">
              <h4>纠缠谱</h4>
              <p>边缘态的纠缠性质</p>
              <div class="formula-block">
                S = -Tr[ρ<sub>A</sub> ln ρ<sub>A</sub>]
              </div>
            </div>
            
            <div class="dm-card">
              <h4>拓扑纠缠熵</h4>
              <p>拓扑序的特征</p>
              <div class="formula-block">
                S<sub>topo</sub> = γ ln D
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 拓扑性质</h2>
      
      <div class="topological-properties">
        <h3>Berry相位</h3>
        <p>准粒子绕行的几何相位：</p>
        
        <div class="formula-block">
          γ = i ∮ ⟨ψ(R)|∇<sub>R</sub>|ψ(R)⟩ · dR
        </div>
        
        <div class="berry-phase-calculation">
          <div class="berry-components">
            <div class="berry-card">
              <h4>绝热演化</h4>
              <p>准粒子位置的缓慢变化</p>
              <div class="formula-block">
                R(t) = R<sub>0</sub> + r(ωt)
              </div>
              <p>ω → 0 绝热极限</p>
            </div>
            
            <div class="berry-card">
              <h4>几何相位</h4>
              <p>与动力学相位分离</p>
              <div class="formula-block">
                |ψ(t)⟩ = e<sup>iγ(t)</sup>e<sup>-i∫E dt/ℏ</sup>|ψ(0)⟩
              </div>
            </div>
          </div>
        </div>
        
        <div class="anyonic-statistics">
          <h3>任意子统计</h3>
          <p>分数统计的微观起源：</p>
          
          <div class="statistics-derivation">
            <div class="stat-card">
              <h4>多值波函数</h4>
              <p>准粒子交换的相位</p>
              <div class="formula-block">
                Ψ(r<sub>1</sub>, r<sub>2</sub>) = e<sup>iθ</sup>Ψ(r<sub>2</sub>, r<sub>1</sub>)
              </div>
            </div>
            
            <div class="stat-card">
              <h4>统计相位</h4>
              <p>Laughlin态的统计角</p>
              <div class="formula-block">
                θ = π/m
              </div>
              <p>m为奇数时为阿贝尔任意子</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 实验观测</h2>
      
      <div class="experimental-observations">
        <h3>圆柱几何的实现</h3>
        <p>实验中的圆柱几何近似：</p>
        
        <div class="experimental-setups">
          <div class="setup-grid">
            <div class="setup-card">
              <h4>环形几何</h4>
              <p>Corbino盘几何</p>
              <ul>
                <li>径向电流</li>
                <li>角向磁场</li>
                <li>边缘态观测</li>
              </ul>
            </div>
            
            <div class="setup-card">
              <h4>条带几何</h4>
              <p>长条形霍尔条</p>
              <ul>
                <li>周期性边界近似</li>
                <li>有限宽度效应</li>
                <li>边缘态输运</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="measurement-techniques">
          <h3>测量技术</h3>
          
          <div class="technique-grid">
            <div class="tech-card">
              <h4>边缘态谱学</h4>
              <p>隧道谱测量</p>
              <ul>
                <li>能隙测定</li>
                <li>准粒子激发</li>
                <li>边缘态色散</li>
              </ul>
            </div>
            
            <div class="tech-card">
              <h4>干涉测量</h4>
              <p>边缘态干涉</p>
              <ul>
                <li>Fabry-Pérot干涉仪</li>
                <li>Mach-Zehnder干涉仪</li>
                <li>任意子统计验证</li>
              </ul>
            </div>
            
            <div class="tech-card">
              <h4>噪声测量</h4>
              <p>散粒噪声分析</p>
              <ul>
                <li>分数电荷确认</li>
                <li>统计性质</li>
                <li>相干长度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>11. 理论推广</h2>
      
      <div class="theoretical-extensions">
        <h3>层次态理论</h3>
        <p>更复杂分数态的构造：</p>
        
        <div class="hierarchy-theory">
          <div class="hierarchy-construction">
            <div class="hier-card">
              <h4>主序列</h4>
              <div class="formula-block">
                ν = 1/(2p + 1), p = 1, 2, 3, ...
              </div>
              <p>Laughlin主态</p>
            </div>
            
            <div class="hier-card">
              <h4>子态构造</h4>
              <p>在准粒子液体中的凝聚</p>
              <div class="formula-block">
                ν = p/(2mp + 1)
              </div>
            </div>
          </div>
        </div>
        
        <div class="non-abelian-states">
          <h3>非阿贝尔态</h3>
          <p>更复杂的拓扑序：</p>
          
          <div class="non-abelian-examples">
            <div class="na-card">
              <h4>Moore-Read态</h4>
              <div class="formula-block">
                ν = 5/2
              </div>
              <p>p波配对态</p>
            </div>
            
            <div class="na-card">
              <h4>Read-Rezayi态</h4>
              <div class="formula-block">
                ν = k/(k+2)
              </div>
              <p>parafermion态</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>12. 应用前景</h2>
      
      <div class="applications">
        <h3>拓扑量子计算</h3>
        <p>基于任意子的量子计算：</p>
        
        <div class="quantum-computing">
          <div class="qc-components">
            <div class="qc-card">
              <h4>拓扑量子比特</h4>
              <p>非阿贝尔任意子编码</p>
              <ul>
                <li>拓扑保护</li>
                <li>相干时间长</li>
                <li>容错性强</li>
              </ul>
            </div>
            
            <div class="qc-card">
              <h4>编织操作</h4>
              <p>量子门的实现</p>
              <ul>
                <li>几何操作</li>
                <li>绝热演化</li>
                <li>通用量子计算</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="metrology-applications">
          <h3>精密测量</h3>
          <p>量子霍尔效应的计量应用：</p>
          
          <div class="metrology-uses">
            <div class="metro-card">
              <h4>电阻标准</h4>
              <div class="formula-block">
                R<sub>K</sub> = h/e² = 25812.807 Ω
              </div>
              <p>von Klitzing常数</p>
            </div>
            
            <div class="metro-card">
              <h4>精细结构常数</h4>
              <div class="formula-block">
                α = e²/4πε<sub>0</sub>ℏc
              </div>
              <p>基本物理常数测定</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>圆柱几何为量子霍尔效应研究提供了重要的理论框架</li>
        <li>周期性边界条件消除了边界效应，便于理论分析</li>
        <li>Laughlin波函数在圆柱几何下具有明确的解析形式</li>
        <li>准粒子激发展现分数电荷和分数统计性质</li>
        <li>边缘态理论解释了分数量子霍尔态的输运性质</li>
        <li>数值计算方法在圆柱几何下更加高效</li>
        <li>Berry相位和任意子统计体现了深刻的拓扑性质</li>
        <li>实验技术能够在近似圆柱几何下验证理论预测</li>
        <li>理论推广包括层次态和非阿贝尔态</li>
        <li>在拓扑量子计算和精密测量中有重要应用前景</li>
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

.cylinder-geometry, .magnetic-field-config, .single-particle, .laughlin-wavefunction, .quasiparticle-excitations, .edge-state-theory, .numerical-methods, .topological-properties, .experimental-observations, .theoretical-extensions, .applications {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.coord-grid, .boundary-types, .flux-grid, .gauge-options, .ll-properties, .wavefunction-components, .prop-grid, .plasma-properties, .exc-grid, .qp-properties, .braiding-scenarios, .edge-grid, .current-properties, .ed-advantages, .qmc-methods, .dm-applications, .berry-components, .statistics-derivation, .setup-grid, .technique-grid, .hierarchy-construction, .non-abelian-examples, .qc-components, .metrology-uses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.coord-card, .boundary-card, .flux-card, .gauge-card, .ll-card, .wf-card, .prop-card, .plasma-card, .exc-card, .qp-card, .braid-card, .edge-card, .current-card, .adv-card, .qmc-card, .dm-card, .berry-card, .stat-card, .setup-card, .tech-card, .hier-card, .na-card, .qc-card, .metro-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.coordinate-system, .boundary-conditions, .flux-quantization, .gauge-choice, .landau-levels-cylinder, .wavefunction-cylinder, .laughlin-properties-cylinder, .plasma-mapping, .excitation-types, .quasiparticle-properties, .braiding-properties, .edge-modes, .edge-current, .exact-diagonalization, .monte-carlo-cylinder, .density-matrix-methods, .berry-phase-calculation, .anyonic-statistics, .experimental-setups, .measurement-techniques, .hierarchy-theory, .non-abelian-states, .quantum-computing, .metrology-applications {
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
  
  .coord-grid, .boundary-types, .flux-grid, .gauge-options, .ll-properties, .wavefunction-components, .prop-grid, .plasma-properties, .exc-grid, .qp-properties, .braiding-scenarios, .edge-grid, .current-properties, .ed-advantages, .qmc-methods, .dm-applications, .berry-components, .statistics-derivation, .setup-grid, .technique-grid, .hierarchy-construction, .non-abelian-examples, .qc-components, .metrology-uses {
    grid-template-columns: 1fr;
  }
}
</style>