<template>
  <div class="chapter-content">
    <h1>10.2.6 边缘态</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>边缘态是量子霍尔效应中的核心概念，它们是存在于样品边界处的一维电子态。这些态具有手性传播特性，即只能沿一个方向传播，这是量子霍尔效应中精确量子化电导的微观起源。边缘态理论不仅解释了整数量子霍尔效应，也为分数量子霍尔效应提供了深刻的物理图像。</p>
      
      <div class="highlight-box">
        <h3>边缘态的重要性</h3>
        <ul>
          <li><strong>输运性质</strong>：决定霍尔电导的量子化</li>
          <li><strong>拓扑保护</strong>：免受局域扰动影响</li>
          <li><strong>手性传播</strong>：无背散射的完美传输</li>
          <li><strong>低维物理</strong>：一维电子系统的实现</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 边缘态的物理起源</h2>
      
      <div class="physical-origin">
        <h3>能带弯曲机制</h3>
        <p>边缘态的形成源于样品边界处的能带弯曲：</p>
        
        <div class="band-bending">
          <div class="bending-mechanism">
            <div class="mech-card">
              <h4>静电势变化</h4>
              <div class="formula-block">
                V(x) = V<sub>0</sub> + eE<sub>x</sub>x
              </div>
              <p>边界处的电场导致势能倾斜</p>
            </div>
            
            <div class="mech-card">
              <h4>Landau能级倾斜</h4>
              <div class="formula-block">
                E<sub>n</sub>(x) = ℏω<sub>c</sub>(n + 1/2) + eE<sub>x</sub>x
              </div>
              <p>能级随位置线性变化</p>
            </div>
            
            <div class="mech-card">
              <h4>能级交叉</h4>
              <p>不同Landau能级在边界处相交</p>
              <div class="formula-block">
                x<sub>cross</sub> = ℏω<sub>c</sub>/eE<sub>x</sub>
              </div>
            </div>
          </div>
        </div>
        
        <div class="edge-localization">
          <h3>边缘局域化</h3>
          <p>电子在边界附近的局域化：</p>
          
          <div class="localization-length">
            <div class="loc-card">
              <h4>磁长度尺度</h4>
              <div class="formula-block">
                l<sub>B</sub> = √(ℏ/eB)
              </div>
              <p>边缘态的特征长度</p>
            </div>
            
            <div class="loc-card">
              <h4>波函数衰减</h4>
              <div class="formula-block">
                ψ(x) ∝ exp(-x²/2l<sub>B</sub>²)
              </div>
              <p>高斯型衰减</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 整数量子霍尔效应中的边缘态</h2>
      
      <div class="integer-edge-states">
        <h3>单粒子图像</h3>
        <p>整数量子霍尔态的边缘态描述：</p>
        
        <div class="single-particle-edge">
          <div class="sp-properties">
            <div class="sp-card">
              <h4>色散关系</h4>
              <div class="formula-block">
                E(k<sub>y</sub>) = ℏv<sub>F</sub>k<sub>y</sub>
              </div>
              <p>线性色散，类似相对论粒子</p>
            </div>
            
            <div class="sp-card">
              <h4>群速度</h4>
              <div class="formula-block">
                v<sub>g</sub> = ∂E/∂k<sub>y</sub> = ℏv<sub>F</sub>
              </div>
              <p>恒定的传播速度</p>
            </div>
            
            <div class="sp-card">
              <h4>手性性质</h4>
              <p>传播方向由磁场方向决定</p>
              <div class="formula-block">
                v<sub>g</sub> = sign(B) × |v<sub>F</sub>|
              </div>
            </div>
          </div>
        </div>
        
        <div class="edge-current-integer">
          <h3>边缘电流</h3>
          <p>边缘态携带的电流：</p>
          
          <div class="current-calculation">
            <div class="current-components">
              <div class="curr-card">
                <h4>单个边缘态</h4>
                <div class="formula-block">
                  I<sub>edge</sub> = (e/h) × V
                </div>
                <p>量子化电导 e²/h</p>
              </div>
              
              <div class="curr-card">
                <h4>多个填充能级</h4>
                <div class="formula-block">
                  I<sub>total</sub> = ν × (e²/h) × V
                </div>
                <p>填充因子ν决定总电导</p>
              </div>
              
              <div class="curr-card">
                <h4>霍尔电导</h4>
                <div class="formula-block">
                  σ<sub>xy</sub> = ν × e²/h
                </div>
                <p>精确量子化值</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scattering-properties">
          <h3>散射性质</h3>
          <p>边缘态的散射特性：</p>
          
          <div class="scattering-mechanisms">
            <div class="scat-grid">
              <div class="scat-card">
                <h4>无背散射</h4>
                <p>手性性质禁止背散射</p>
                <ul>
                  <li>时间反演对称性破缺</li>
                  <li>拓扑保护</li>
                  <li>完美传输</li>
                </ul>
              </div>
              
              <div class="scat-card">
                <h4>前向散射</h4>
                <p>允许的散射过程</p>
                <ul>
                  <li>杂质散射</li>
                  <li>声子散射</li>
                  <li>电子-电子相互作用</li>
                </ul>
              </div>
              
              <div class="scat-card">
                <h4>边缘间散射</h4>
                <p>不同边缘态间的隧穿</p>
                <ul>
                  <li>量子点接触</li>
                  <li>窄颈结构</li>
                  <li>边缘重构</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 分数量子霍尔效应中的边缘态</h2>
      
      <div class="fractional-edge-states">
        <h3>多体边缘态</h3>
        <p>分数量子霍尔态的边缘态理论：</p>
        
        <div class="many-body-edge">
          <div class="mb-description">
            <div class="mb-card">
              <h4>Laughlin边缘态</h4>
              <p>ν = 1/m态的边缘理论</p>
              <div class="formula-block">
                H<sub>edge</sub> = (v/4πm) ∫ dx [∂<sub>x</sub>φ(x)]²
              </div>
            </div>
            
            <div class="mb-card">
              <h4>手性Luttinger液体</h4>
              <p>一维强关联电子系统</p>
              <div class="formula-block">
                ρ(x) = (1/2π) ∂<sub>x</sub>φ(x)
              </div>
            </div>
            
            <div class="mb-card">
              <h4>玻色化表示</h4>
              <p>费米子的玻色化描述</p>
              <div class="formula-block">
                ψ(x) ∝ e<sup>iφ(x)</sup>
              </div>
            </div>
          </div>
        </div>
        
        <div class="edge-excitations">
          <h3>边缘激发</h3>
          <p>边缘态的低能激发：</p>
          
          <div class="excitation-spectrum">
            <div class="exc-types">
              <div class="exc-card">
                <h4>密度波激发</h4>
                <div class="formula-block">
                  ω(k) = v|k|
                </div>
                <p>线性色散关系</p>
              </div>
              
              <div class="exc-card">
                <h4>准粒子激发</h4>
                <p>边缘处的准粒子创建</p>
                <div class="formula-block">
                  Ψ<sub>qp</sub> = e<sup>iφ(x<sub>0</sub>)/m</sup>|GS⟩
                </div>
              </div>
              
              <div class="exc-card">
                <h4>准空穴激发</h4>
                <p>边缘处的准空穴创建</p>
                <div class="formula-block">
                  Ψ<sub>qh</sub> = e<sup>-iφ(x<sub>0</sub>)/m</sup>|GS⟩
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="correlation-functions">
          <h3>关联函数</h3>
          <p>边缘态的关联性质：</p>
          
          <div class="correlations">
            <div class="corr-grid">
              <div class="corr-card">
                <h4>密度关联</h4>
                <div class="formula-block">
                  ⟨ρ(x)ρ(0)⟩ ∝ 1/x²
                </div>
                <p>幂律衰减</p>
              </div>
              
              <div class="corr-card">
                <h4>电子格林函数</h4>
                <div class="formula-block">
                  G(x,t) ∝ (x - vt)<sup>-1/m</sup>
                </div>
                <p>非费米液体行为</p>
              </div>
              
              <div class="corr-card">
                <h4>隧穿谱</h4>
                <div class="formula-block">
                  I(V) ∝ V<sup>1/m-1</sup>
                </div>
                <p>幂律I-V特性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 边缘重构</h2>
      
      <div class="edge-reconstruction">
        <h3>静电重构</h3>
        <p>边缘处的电荷重新分布：</p>
        
        <div class="electrostatic-reconstruction">
          <div class="recon-mechanism">
            <div class="recon-card">
              <h4>边缘软化</h4>
              <p>硬壁边界的软化</p>
              <div class="formula-block">
                V(x) = V<sub>0</sub> tanh(x/λ)
              </div>
              <p>特征长度λ</p>
            </div>
            
            <div class="recon-card">
              <h4>电荷积累</h4>
              <p>边缘处的电荷堆积</p>
              <div class="formula-block">
                ρ<sub>edge</sub> = ρ<sub>bulk</sub> + Δρ
              </div>
            </div>
            
            <div class="recon-card">
              <h4>多条边缘态</h4>
              <p>重构导致的多条边缘通道</p>
              <ul>
                <li>内边缘态</li>
                <li>外边缘态</li>
                <li>不同填充因子</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="reconstruction-effects">
          <h3>重构效应</h3>
          <p>边缘重构对输运性质的影响：</p>
          
          <div class="recon-effects">
            <div class="effect-grid">
              <div class="effect-card">
                <h4>电导修正</h4>
                <p>偏离理想量子化值</p>
                <div class="formula-block">
                  σ<sub>xy</sub> = ν<sub>eff</sub> × e²/h
                </div>
              </div>
              
              <div class="effect-card">
                <h4>边缘间耦合</h4>
                <p>不同边缘态的相互作用</p>
                <ul>
                  <li>隧穿耦合</li>
                  <li>库仑相互作用</li>
                  <li>平衡化过程</li>
                </ul>
              </div>
              
              <div class="effect-card">
                <h4>温度依赖</h4>
                <p>有限温度下的行为</p>
                <ul>
                  <li>热激发</li>
                  <li>边缘态混合</li>
                  <li>电导涨落</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 边缘态的实验观测</h2>
      
      <div class="experimental-observations">
        <h3>输运测量</h3>
        <p>边缘态的电学测量：</p>
        
        <div class="transport-measurements">
          <div class="transport-techniques">
            <div class="tech-grid">
              <div class="tech-card">
                <h4>四端测量</h4>
                <p>霍尔电阻的精确测量</p>
                <ul>
                  <li>电流注入端</li>
                  <li>电压测量端</li>
                  <li>消除接触电阻</li>
                </ul>
              </div>
              
              <div class="tech-card">
                <h4>局域测量</h4>
                <p>边缘态的空间分辨</p>
                <ul>
                  <li>扫描探针技术</li>
                  <li>量子点接触</li>
                  <li>边缘态成像</li>
                </ul>
              </div>
              
              <div class="tech-card">
                <h4>时间分辨</h4>
                <p>边缘态动力学</p>
                <ul>
                  <li>脉冲响应</li>
                  <li>相干传播</li>
                  <li>弛豫时间</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="spectroscopic-probes">
          <h3>谱学探测</h3>
          <p>边缘态的能谱测量：</p>
          
          <div class="spectroscopy-methods">
            <div class="spec-grid">
              <div class="spec-card">
                <h4>隧穿谱学</h4>
                <p>边缘态的态密度</p>
                <div class="formula-block">
                  dI/dV ∝ ρ<sub>edge</sub>(eV)
                </div>
              </div>
              
              <div class="spec-card">
                <h4>光谱学</h4>
                <p>光学跃迁测量</p>
                <ul>
                  <li>磁等离子体激发</li>
                  <li>回旋共振</li>
                  <li>边缘磁等离子体</li>
                </ul>
              </div>
              
              <div class="spec-card">
                <h4>噪声谱学</h4>
                <p>散粒噪声分析</p>
                <ul>
                  <li>电流涨落</li>
                  <li>分数电荷</li>
                  <li>统计性质</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="imaging-techniques">
          <h3>成像技术</h3>
          <p>边缘态的直接观测：</p>
          
          <div class="imaging-methods">
            <div class="img-grid">
              <div class="img-card">
                <h4>扫描门显微镜</h4>
                <p>静电势的空间分布</p>
                <ul>
                  <li>亚微米分辨率</li>
                  <li>边缘态轮廓</li>
                  <li>不可压缩条带</li>
                </ul>
              </div>
              
              <div class="img-card">
                <h4>磁力显微镜</h4>
                <p>磁场分布成像</p>
                <ul>
                  <li>边缘电流分布</li>
                  <li>磁场重构</li>
                  <li>涡旋结构</li>
                </ul>
              </div>
              
              <div class="img-card">
                <h4>量子霍尔显微镜</h4>
                <p>利用边缘态的成像</p>
                <ul>
                  <li>高灵敏度</li>
                  <li>非侵入性</li>
                  <li>量子化电导探针</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 边缘态的理论方法</h2>
      
      <div class="theoretical-methods">
        <h3>有效理论</h3>
        <p>边缘态的低能有效描述：</p>
        
        <div class="effective-theories">
          <div class="theory-approaches">
            <div class="theory-card">
              <h4>手性玻色子理论</h4>
              <p>边缘态的玻色化描述</p>
              <div class="formula-block">
                H = (v/4π) ∫ dx [∂<sub>x</sub>φ]²
              </div>
            </div>
            
            <div class="theory-card">
              <h4>共形场论</h4>
              <p>临界现象的描述</p>
              <div class="formula-block">
                T(z) = -1/2 : [∂φ(z)]² :
              </div>
            </div>
            
            <div class="theory-card">
              <h4>Kac-Moody代数</h4>
              <p>对称性的代数结构</p>
              <div class="formula-block">
                [J<sub>n</sub>, J<sub>m</sub>] = nδ<sub>n+m,0</sub>
              </div>
            </div>
          </div>
        </div>
        
        <div class="numerical-approaches">
          <h3>数值方法</h3>
          <p>边缘态的数值计算：</p>
          
          <div class="numerical-techniques">
            <div class="num-grid">
              <div class="num-card">
                <h4>精确对角化</h4>
                <p>小系统的精确计算</p>
                <ul>
                  <li>有限尺寸系统</li>
                  <li>边界条件处理</li>
                  <li>边缘态识别</li>
                </ul>
              </div>
              
              <div class="num-card">
                <h4>密度矩阵重整化群</h4>
                <p>一维系统的高效算法</p>
                <ul>
                  <li>边缘态的精确处理</li>
                  <li>纠缠谱计算</li>
                  <li>相关长度</li>
                </ul>
              </div>
              
              <div class="num-card">
                <h4>量子蒙特卡罗</h4>
                <p>有限温度性质</p>
                <ul>
                  <li>热力学性质</li>
                  <li>动力学关联</li>
                  <li>边缘态贡献</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 边缘态的拓扑性质</h2>
      
      <div class="topological-properties">
        <h3>拓扑不变量</h3>
        <p>边缘态与拓扑性质的关系：</p>
        
        <div class="topological-invariants">
          <div class="invariant-types">
            <div class="inv-card">
              <h4>Chern数</h4>
              <p>体态的拓扑不变量</p>
              <div class="formula-block">
                C = (1/2π) ∫ Ω<sub>xy</sub>(k) d²k
              </div>
            </div>
            
            <div class="inv-card">
              <h4>边缘态计数</h4>
              <p>体边对应关系</p>
              <div class="formula-block">
                N<sub>edge</sub> = |C|
              </div>
            </div>
            
            <div class="inv-card">
              <h4>霍尔电导</h4>
              <p>拓扑响应</p>
              <div class="formula-block">
                σ<sub>xy</sub> = C × e²/h
              </div>
            </div>
          </div>
        </div>
        
        <div class="bulk-edge-correspondence">
          <h3>体边对应</h3>
          <p>体态拓扑与边缘态的关系：</p>
          
          <div class="correspondence-principle">
            <div class="corr-aspects">
              <div class="corr-card">
                <h4>拓扑保护</h4>
                <p>边缘态的稳定性</p>
                <ul>
                  <li>能隙保护</li>
                  <li>对称性要求</li>
                  <li>局域扰动免疫</li>
                </ul>
              </div>
              
              <div class="corr-card">
                <h4>手性异常</h4>
                <p>边缘态的量子异常</p>
                <ul>
                  <li>规范不变性破缺</li>
                  <li>异常流入</li>
                  <li>拓扑响应</li>
                </ul>
              </div>
              
              <div class="corr-card">
                <h4>指标定理</h4>
                <p>数学结构</p>
                <ul>
                  <li>Atiyah-Singer定理</li>
                  <li>零模计数</li>
                  <li>拓扑指标</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 边缘态的应用</h2>
      
      <div class="applications">
        <h3>量子器件</h3>
        <p>基于边缘态的量子器件：</p>
        
        <div class="quantum-devices">
          <div class="device-types">
            <div class="device-grid">
              <div class="device-card">
                <h4>量子点接触</h4>
                <p>边缘态的可控耦合</p>
                <ul>
                  <li>透射系数调节</li>
                  <li>分束器功能</li>
                  <li>量子干涉</li>
                </ul>
              </div>
              
              <div class="device-card">
                <h4>边缘态干涉仪</h4>
                <p>量子相干性测量</p>
                <ul>
                  <li>Mach-Zehnder干涉仪</li>
                  <li>Fabry-Pérot干涉仪</li>
                  <li>相位测量</li>
                </ul>
              </div>
              
              <div class="device-card">
                <h4>单电子源</h4>
                <p>按需单电子发射</p>
                <ul>
                  <li>量子化电荷泵</li>
                  <li>时间分辨测量</li>
                  <li>量子计量学</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="metrology-applications">
          <h3>精密测量</h3>
          <p>边缘态在计量学中的应用：</p>
          
          <div class="metrology-uses">
            <div class="metro-grid">
              <div class="metro-card">
                <h4>电阻标准</h4>
                <p>量子霍尔电阻标准</p>
                <div class="formula-block">
                  R<sub>K</sub> = h/e² ≈ 25812.807 Ω
                </div>
              </div>
              
              <div class="metro-card">
                <h4>电流标准</h4>
                <p>基于边缘态的电流标准</p>
                <div class="formula-block">
                  I = ef
                </div>
                <p>频率f的单电子泵</p>
              </div>
              
              <div class="metro-card">
                <h4>基本常数测定</h4>
                <p>精细结构常数等</p>
                <ul>
                  <li>von Klitzing常数</li>
                  <li>精细结构常数</li>
                  <li>基本电荷</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="quantum-computing">
          <h3>拓扑量子计算</h3>
          <p>边缘态在量子计算中的潜力：</p>
          
          <div class="qc-applications">
            <div class="qc-grid">
              <div class="qc-card">
                <h4>拓扑量子比特</h4>
                <p>基于非阿贝尔任意子</p>
                <ul>
                  <li>拓扑保护</li>
                  <li>长相干时间</li>
                  <li>容错性</li>
                </ul>
              </div>
              
              <div class="qc-card">
                <h4>编织操作</h4>
                <p>量子门的实现</p>
                <ul>
                  <li>几何相位</li>
                  <li>绝热操作</li>
                  <li>通用量子计算</li>
                </ul>
              </div>
              
              <div class="qc-card">
                <h4>量子纠错</h4>
                <p>拓扑量子纠错码</p>
                <ul>
                  <li>表面码</li>
                  <li>拓扑码</li>
                  <li>阈值定理</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 前沿发展</h2>
      
      <div class="frontier-developments">
        <h3>新型边缘态</h3>
        <p>边缘态研究的新方向：</p>
        
        <div class="new-edge-states">
          <div class="new-types">
            <div class="new-grid">
              <div class="new-card">
                <h4>螺旋边缘态</h4>
                <p>量子自旋霍尔效应</p>
                <ul>
                  <li>自旋轨道耦合</li>
                  <li>时间反演对称性</li>
                  <li>Z₂拓扑绝缘体</li>
                </ul>
              </div>
              
              <div class="new-card">
                <h4>铰链态</h4>
                <p>高阶拓扑绝缘体</p>
                <ul>
                  <li>二阶拓扑相</li>
                  <li>角态和铰链态</li>
                  <li>多极矩拓扑</li>
                </ul>
              </div>
              
              <div class="new-card">
                <h4>分数边缘态</h4>
                <p>分数Chern绝缘体</p>
                <ul>
                  <li>无Landau能级</li>
                  <li>平带物理</li>
                  <li>魔角石墨烯</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="emerging-platforms">
          <h3>新兴平台</h3>
          <p>实现边缘态的新材料体系：</p>
          
          <div class="platform-types">
            <div class="platform-grid">
              <div class="platform-card">
                <h4>二维材料</h4>
                <p>石墨烯及其衍生物</p>
                <ul>
                  <li>可调能带结构</li>
                  <li>强关联效应</li>
                  <li>摩尔超晶格</li>
                </ul>
              </div>
              
              <div class="platform-card">
                <h4>拓扑绝缘体</h4>
                <p>三维拓扑绝缘体薄膜</p>
                <ul>
                  <li>表面态</li>
                  <li>磁性掺杂</li>
                  <li>量子反常霍尔效应</li>
                </ul>
              </div>
              
              <div class="platform-card">
                <h4>冷原子系统</h4>
                <p>人工规范场</p>
                <ul>
                  <li>可控参数</li>
                  <li>清洁环境</li>
                  <li>实时观测</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="future-directions">
          <h3>未来方向</h3>
          <p>边缘态研究的发展趋势：</p>
          
          <div class="future-trends">
            <div class="trend-grid">
              <div class="trend-card">
                <h4>机器学习应用</h4>
                <p>AI辅助的边缘态研究</p>
                <ul>
                  <li>相图识别</li>
                  <li>拓扑分类</li>
                  <li>实验优化</li>
                </ul>
              </div>
              
              <div class="trend-card">
                <h4>非平衡态</h4>
                <p>驱动系统中的边缘态</p>
                <ul>
                  <li>Floquet工程</li>
                  <li>非平衡拓扑相</li>
                  <li>动力学相变</li>
                </ul>
              </div>
              
              <div class="trend-card">
                <h4>多体局域化</h4>
                <p>无序系统中的边缘态</p>
                <ul>
                  <li>MBL边缘态</li>
                  <li>热化破缺</li>
                  <li>量子疤痕</li>
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
        <li>边缘态是量子霍尔效应中的核心概念，具有手性传播特性</li>
        <li>边缘态的形成源于样品边界处的能带弯曲和电子局域化</li>
        <li>整数量子霍尔效应中的边缘态可用单粒子图像描述</li>
        <li>分数量子霍尔效应中的边缘态需要多体理论处理</li>
        <li>边缘重构会影响理想的输运性质</li>
        <li>多种实验技术可以观测和表征边缘态</li>
        <li>理论方法包括有效场论和数值计算</li>
        <li>边缘态体现了深刻的拓扑性质和体边对应关系</li>
        <li>边缘态在量子器件、精密测量和量子计算中有重要应用</li>
        <li>新型边缘态和新兴平台为未来研究提供了广阔前景</li>
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

.physical-origin, .integer-edge-states, .fractional-edge-states, .edge-reconstruction, .experimental-observations, .theoretical-methods, .topological-properties, .applications, .frontier-developments {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.bending-mechanism, .localization-length, .sp-properties, .current-components, .scat-grid, .mb-description, .exc-types, .corr-grid, .recon-mechanism, .recon-effects, .transport-techniques, .spectroscopy-methods, .imaging-methods, .theory-approaches, .numerical-techniques, .invariant-types, .corr-aspects, .device-types, .metrology-uses, .qc-applications, .new-types, .platform-types, .future-trends {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.mech-card, .loc-card, .sp-card, .curr-card, .scat-card, .mb-card, .exc-card, .corr-card, .recon-card, .effect-card, .tech-card, .spec-card, .img-card, .theory-card, .num-card, .inv-card, .corr-card, .device-card, .metro-card, .qc-card, .new-card, .platform-card, .trend-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.band-bending, .edge-localization, .single-particle-edge, .edge-current-integer, .scattering-properties, .many-body-edge, .edge-excitations, .correlation-functions, .electrostatic-reconstruction, .reconstruction-effects, .transport-measurements, .spectroscopic-probes, .imaging-techniques, .effective-theories, .numerical-approaches, .topological-invariants, .bulk-edge-correspondence, .quantum-devices, .metrology-applications, .quantum-computing, .new-edge-states, .emerging-platforms, .future-directions {
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
  
  .bending-mechanism, .localization-length, .sp-properties, .current-components, .scat-grid, .mb-description, .exc-types, .corr-grid, .recon-mechanism, .recon-effects, .transport-techniques, .spectroscopy-methods, .imaging-methods, .theory-approaches, .numerical-techniques, .invariant-types, .corr-aspects, .device-types, .metrology-uses, .qc-applications, .new-types, .platform-types, .future-trends {
    grid-template-columns: 1fr;
  }
}
</style>