<template>
  <div class="chapter-content">
    <h1>10.2.3 量子振荡</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>量子振荡是强磁场中电子系统的一个重要现象，表现为各种物理量（如磁化率、电阻率、比热等）随磁场的周期性变化。这些振荡现象直接反映了费米面的几何结构和电子的量子化轨道运动。</p>
      
      <div class="highlight-box">
        <h3>主要量子振荡效应</h3>
        <ul>
          <li><strong>de Haas-van Alphen效应</strong>：磁化率的振荡</li>
          <li><strong>Shubnikov-de Haas效应</strong>：电阻率的振荡</li>
          <li><strong>磁声振荡</strong>：声速的磁场依赖</li>
          <li><strong>磁热振荡</strong>：比热的周期性变化</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 物理起源</h2>
      
      <div class="physical-origin">
        <h3>Landau量子化的后果</h3>
        <p>量子振荡的根本原因是磁场中电子轨道的量子化：</p>
        
        <div class="formula-block">
          E<sub>n</sub> = ℏω<sub>c</sub>(n + 1/2), n = 0, 1, 2, ...
        </div>
        
        <div class="origin-explanation">
          <div class="origin-card">
            <h4>费米面截面</h4>
            <p>磁场垂直于费米面时，轨道面积量子化：</p>
            <div class="formula-block">
              A<sub>n</sub> = 2πeB(n + γ)/ℏ
            </div>
            <p>γ为相位因子</p>
          </div>
          
          <div class="origin-card">
            <h4>振荡条件</h4>
            <p>当费米面恰好通过Landau能级时：</p>
            <div class="formula-block">
              A<sub>F</sub> = 2πeB(n + γ)/ℏ
            </div>
            <p>导致物理量的极值</p>
          </div>
        </div>
        
        <div class="semiclassical-picture">
          <h3>半经典图像</h3>
          <p>从半经典角度理解振荡：</p>
          
          <div class="semiclassical-grid">
            <div class="semi-card">
              <h4>Bohr-Sommerfeld量子化</h4>
              <div class="formula-block">
                ∮ p·dr = 2πℏ(n + γ)
              </div>
              <p>闭合轨道的作用量量子化</p>
            </div>
            
            <div class="semi-card">
              <h4>轨道面积</h4>
              <div class="formula-block">
                A = ∮ p·dr / eB
              </div>
              <p>k空间中的轨道面积</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. de Haas-van Alphen效应</h2>
      
      <div class="dhva-effect">
        <h3>磁化率振荡</h3>
        <p>磁化率M随磁场B的周期性变化：</p>
        
        <div class="formula-block">
          M = M<sub>0</sub> + ∑<sub>p</sub> A<sub>p</sub> cos(2πpF/B + φ<sub>p</sub>) R<sub>T</sub> R<sub>D</sub> R<sub>S</sub>
        </div>
        
        <div class="dhva-parameters">
          <div class="param-grid">
            <div class="param-card">
              <h4>基频</h4>
              <div class="formula-block">
                F = (ℏ/2πe)A<sub>F</sub>
              </div>
              <p>与费米面面积成正比</p>
            </div>
            
            <div class="param-card">
              <h4>振荡幅度</h4>
              <div class="formula-block">
                A<sub>p</sub> ∝ (m*/m)<sup>3/2</sup> / B<sup>1/2</sup>
              </div>
              <p>依赖于有效质量</p>
            </div>
            
            <div class="param-card">
              <h4>相位</h4>
              <div class="formula-block">
                φ<sub>p</sub> = 2πpγ - π/4
              </div>
              <p>包含拓扑相位信息</p>
            </div>
          </div>
        </div>
        
        <div class="damping-factors">
          <h3>阻尼因子</h3>
          
          <div class="damping-grid">
            <div class="damping-card">
              <h4>温度阻尼 R<sub>T</sub></h4>
              <div class="formula-block">
                R<sub>T</sub> = (2π²pk<sub>B</sub>T/ℏω<sub>c</sub>) / sinh(2π²pk<sub>B</sub>T/ℏω<sub>c</sub>)
              </div>
              <p>热展宽效应</p>
            </div>
            
            <div class="damping-card">
              <h4>无序阻尼 R<sub>D</sub></h4>
              <div class="formula-block">
                R<sub>D</sub> = exp(-2π²pk<sub>B</sub>T<sub>D</sub>/ℏω<sub>c</sub>)
              </div>
              <p>杂质散射效应，T<sub>D</sub>为Dingle温度</p>
            </div>
            
            <div class="damping-card">
              <h4>自旋阻尼 R<sub>S</sub></h4>
              <div class="formula-block">
                R<sub>S</sub> = cos(πpg*m*/2m)
              </div>
              <p>自旋分裂效应，g*为有效g因子</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. Shubnikov-de Haas效应</h2>
      
      <div class="sdh-effect">
        <h3>电阻率振荡</h3>
        <p>纵向电阻率ρ<sub>xx</sub>的磁振荡：</p>
        
        <div class="formula-block">
          ρ<sub>xx</sub> = ρ<sub>0</sub>[1 + ∑<sub>p</sub> A<sub>p</sub> cos(2πpF/B + φ<sub>p</sub>) R<sub>T</sub> R<sub>D</sub>]
        </div>
        
        <div class="sdh-characteristics">
          <div class="char-grid">
            <div class="char-card">
              <h4>振荡周期</h4>
              <p>与dHvA效应相同的基频F</p>
              <div class="formula-block">
                Δ(1/B) = e/ℏA<sub>F</sub>
              </div>
            </div>
            
            <div class="char-card">
              <h4>相位差</h4>
              <p>相对于磁化率振荡有π/2相位差</p>
              <div class="formula-block">
                φ<sub>SdH</sub> = φ<sub>dHvA</sub> + π/2
              </div>
            </div>
            
            <div class="char-card">
              <h4>温度依赖</h4>
              <p>相同的温度阻尼因子R<sub>T</sub></p>
              <ul>
                <li>低温下振荡明显</li>
                <li>高温下被热展宽抑制</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="transport-mechanism">
          <h3>输运机制</h3>
          <p>SdH振荡的微观起源：</p>
          
          <div class="mechanism-explanation">
            <div class="mech-card">
              <h4>态密度调制</h4>
              <p>费米面附近态密度的周期性变化</p>
              <div class="formula-block">
                ρ(E<sub>F</sub>) ∝ ∑<sub>n</sub> δ(E<sub>F</sub> - E<sub>n</sub>)
              </div>
            </div>
            
            <div class="mech-card">
              <h4>散射率调制</h4>
              <p>不同Landau能级的散射率不同</p>
              <ul>
                <li>能级中心：散射率最小</li>
                <li>能级间隙：散射率最大</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 频率分析和费米面重构</h2>
      
      <div class="frequency-analysis">
        <h3>多频振荡</h3>
        <p>复杂费米面产生多个振荡频率：</p>
        
        <div class="formula-block">
          M(B) = ∑<sub>i</sub> A<sub>i</sub> cos(2πF<sub>i</sub>/B + φ<sub>i</sub>)
        </div>
        
        <div class="frequency-components">
          <div class="freq-grid">
            <div class="freq-card">
              <h4>基频</h4>
              <p>对应不同费米面片段</p>
              <div class="formula-block">
                F<sub>α</sub> = (ℏ/2πe)A<sub>α</sub>
              </div>
              <p>α标记不同轨道</p>
            </div>
            
            <div class="freq-card">
              <h4>谐频</h4>
              <p>非线性效应产生的高次谐波</p>
              <div class="formula-block">
                F<sub>harm</sub> = pF<sub>α</sub>
              </div>
              <p>p = 2, 3, 4, ...</p>
            </div>
            
            <div class="freq-card">
              <h4>拍频</h4>
              <p>相近频率的干涉</p>
              <div class="formula-block">
                F<sub>beat</sub> = |F<sub>1</sub> - F<sub>2</sub>|
              </div>
              <p>调制包络</p>
            </div>
          </div>
        </div>
        
        <div class="fft-analysis">
          <h3>傅里叶变换分析</h3>
          <p>从振荡数据提取频率信息：</p>
          
          <div class="analysis-steps">
            <div class="step-card">
              <h4>数据预处理</h4>
              <ul>
                <li>去除单调背景</li>
                <li>选择合适的磁场范围</li>
                <li>数据平滑和插值</li>
              </ul>
            </div>
            
            <div class="step-card">
              <h4>FFT变换</h4>
              <div class="formula-block">
                S(F) = ∫ M(1/B) e<sup>2πiF/B</sup> d(1/B)
              </div>
              <p>获得频率谱</p>
            </div>
            
            <div class="step-card">
              <h4>峰值识别</h4>
              <ul>
                <li>确定基频和谐频</li>
                <li>计算费米面面积</li>
                <li>分析相位信息</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 有效质量测定</h2>
      
      <div class="effective-mass">
        <h3>温度依赖分析</h3>
        <p>通过振荡幅度的温度依赖确定有效质量：</p>
        
        <div class="formula-block">
          A(T) = A<sub>0</sub> × (2π²pk<sub>B</sub>T/ℏω<sub>c</sub>) / sinh(2π²pk<sub>B</sub>T/ℏω<sub>c</sub>)
        </div>
        
        <div class="mass-determination">
          <div class="method-grid">
            <div class="method-card">
              <h4>高温近似</h4>
              <p>当k<sub>B</sub>T >> ℏω<sub>c</sub>时：</p>
              <div class="formula-block">
                A(T) ∝ T × exp(-2π²pk<sub>B</sub>T/ℏω<sub>c</sub>)
              </div>
              <p>指数衰减行为</p>
            </div>
            
            <div class="method-card">
              <h4>低温近似</h4>
              <p>当k<sub>B</sub>T &lt;&lt; ℏω<sub>c</sub>时：</p>
              <div class="formula-block">
                A(T) ≈ A<sub>0</sub>[1 - (π²/3)(k<sub>B</sub>T/ℏω<sub>c</sub>)²]
              </div>
              <p>二次修正</p>
            </div>
          </div>
        </div>
        
        <div class="mass-extraction">
          <h3>数据拟合</h3>
          
          <div class="fitting-procedure">
            <div class="fit-step">
              <h4>1. 振荡幅度提取</h4>
              <p>在不同温度下测量振荡幅度A(T)</p>
            </div>
            
            <div class="fit-step">
              <h4>2. 理论公式拟合</h4>
              <p>使用完整的温度阻尼公式拟合数据</p>
              <div class="formula-block">
                m* = ℏeB/2π²pk<sub>B</sub>T<sub>fit</sub>
              </div>
            </div>
            
            <div class="fit-step">
              <h4>3. 结果验证</h4>
              <p>与其他实验方法对比验证</p>
              <ul>
                <li>回旋共振</li>
                <li>比热测量</li>
                <li>光学测量</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 散射时间和迁移率</h2>
      
      <div class="scattering-analysis">
        <h3>Dingle温度</h3>
        <p>从振荡幅度的磁场依赖提取散射信息：</p>
        
        <div class="formula-block">
          R<sub>D</sub> = exp(-π/ω<sub>c</sub>τ) = exp(-2π²pk<sub>B</sub>T<sub>D</sub>/ℏω<sub>c</sub>)
        </div>
        
        <div class="dingle-analysis">
          <div class="dingle-grid">
            <div class="dingle-card">
              <h4>Dingle温度定义</h4>
              <div class="formula-block">
                T<sub>D</sub> = ℏ/2π²k<sub>B</sub>τ
              </div>
              <p>表征散射强度</p>
            </div>
            
            <div class="dingle-card">
              <h4>散射时间</h4>
              <div class="formula-block">
                τ = ℏ/2π²k<sub>B</sub>T<sub>D</sub>
              </div>
              <p>量子散射时间</p>
            </div>
            
            <div class="dingle-card">
              <h4>量子迁移率</h4>
              <div class="formula-block">
                μ<sub>q</sub> = eτ/m*
              </div>
              <p>与输运迁移率不同</p>
            </div>
          </div>
        </div>
        
        <div class="mobility-comparison">
          <h3>迁移率比较</h3>
          
          <div class="mobility-types">
            <div class="mob-card">
              <h4>输运迁移率</h4>
              <div class="formula-block">
                μ<sub>tr</sub> = eτ<sub>tr</sub>/m*
              </div>
              <p>从电导率测量</p>
              <ul>
                <li>大角散射权重大</li>
                <li>与宏观输运相关</li>
              </ul>
            </div>
            
            <div class="mob-card">
              <h4>量子迁移率</h4>
              <div class="formula-block">
                μ<sub>q</sub> = eτ<sub>q</sub>/m*
              </div>
              <p>从量子振荡测量</p>
              <ul>
                <li>所有散射角等权重</li>
                <li>与量子相干相关</li>
              </ul>
            </div>
          </div>
          
          <div class="ratio-significance">
            <h4>迁移率比值</h4>
            <div class="formula-block">
              μ<sub>q</sub>/μ<sub>tr</sub> = τ<sub>q</sub>/τ<sub>tr</sub>
            </div>
            <p>反映散射机制信息：</p>
            <ul>
              <li>μ<sub>q</sub> ≈ μ<sub>tr</sub>：短程散射主导</li>
              <li>μ<sub>q</sub> >> μ<sub>tr</sub>：长程散射主导</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 自旋效应</h2>
      
      <div class="spin-effects">
        <h3>Zeeman分裂</h3>
        <p>磁场导致的自旋能级分裂：</p>
        
        <div class="formula-block">
          E<sub>n,s</sub> = ℏω<sub>c</sub>(n + 1/2) + (1/2)g*μ<sub>B</sub>Bs
        </div>
        
        <div class="spin-parameters">
          <div class="spin-grid">
            <div class="spin-card">
              <h4>有效g因子</h4>
              <div class="formula-block">
                g* = g<sub>0</sub> + Δg
              </div>
              <p>包含轨道贡献的修正</p>
            </div>
            
            <div class="spin-card">
              <h4>自旋分裂能</h4>
              <div class="formula-block">
                ΔE<sub>s</sub> = g*μ<sub>B</sub>B
              </div>
              <p>与轨道量子化竞争</p>
            </div>
          </div>
        </div>
        
        <div class="spin-oscillations">
          <h3>自旋相关振荡</h3>
          
          <div class="spin-modulation">
            <div class="mod-card">
              <h4>振荡幅度调制</h4>
              <div class="formula-block">
                R<sub>S</sub> = cos(πpg*m*/2m)
              </div>
              <p>自旋阻尼因子</p>
            </div>
            
            <div class="mod-card">
              <h4>拍频现象</h4>
              <p>自旋上下态的干涉</p>
              <div class="formula-block">
                F<sub>beat</sub> = (g*m*/2m) × F<sub>orb</sub>
              </div>
            </div>
          </div>
          
          <div class="g-factor-determination">
            <h4>g因子测定</h4>
            <p>通过拍频分析确定有效g因子：</p>
            
            <div class="determination-steps">
              <div class="det-step">
                <h5>1. 拍频识别</h5>
                <p>观察振荡包络的周期性变化</p>
              </div>
              
              <div class="det-step">
                <h5>2. 频率比计算</h5>
                <div class="formula-block">
                  g* = 2m(F<sub>beat</sub>/F<sub>orb</sub>)/m*
                </div>
              </div>
              
              <div class="det-step">
                <h5>3. 角度依赖</h5>
                <p>磁场方向对g因子的影响</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 实验技术</h2>
      
      <div class="experimental-techniques">
        <h3>测量方法</h3>
        
        <div class="technique-grid">
          <div class="tech-card">
            <h4>磁化率测量</h4>
            <p>dHvA效应的直接测量</p>
            <ul>
              <li>SQUID磁强计</li>
              <li>振动样品磁强计</li>
              <li>扭摆磁强计</li>
            </ul>
            
            <div class="advantages">
              <h5>优点</h5>
              <ul>
                <li>直接测量磁化率</li>
                <li>高精度</li>
                <li>适用于小样品</li>
              </ul>
            </div>
          </div>
          
          <div class="tech-card">
            <h4>电阻测量</h4>
            <p>SdH效应的观测</p>
            <ul>
              <li>四端法</li>
              <li>霍尔条几何</li>
              <li>范德堡方法</li>
            </ul>
            
            <div class="advantages">
              <h5>优点</h5>
              <ul>
                <li>实验简单</li>
                <li>信号强</li>
                <li>适用于薄膜</li>
              </ul>
            </div>
          </div>
          
          <div class="tech-card">
            <h4>比热测量</h4>
            <p>热力学量的振荡</p>
            <ul>
              <li>绝热去磁</li>
              <li>弛豫法</li>
              <li>交流量热法</li>
            </ul>
            
            <div class="advantages">
              <h5>优点</h5>
              <ul>
                <li>热力学信息</li>
                <li>相变研究</li>
                <li>电子-声子耦合</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="experimental-conditions">
          <h3>实验条件</h3>
          
          <div class="condition-requirements">
            <div class="req-card">
              <h4>低温要求</h4>
              <div class="formula-block">
                k<sub>B</sub>T &lt; ℏω<sub>c</sub>
              </div>
              <p>通常需要T &lt; 4.2K</p>
            </div>
            
            <div class="req-card">
              <h4>强磁场</h4>
              <div class="formula-block">
                ω<sub>c</sub>τ > 1
              </div>
              <p>量子极限条件</p>
            </div>
            
            <div class="req-card">
              <h4>高质量样品</h4>
              <p>低无序度要求</p>
              <ul>
                <li>高迁移率</li>
                <li>低杂质密度</li>
                <li>平滑界面</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 应用实例</h2>
      
      <div class="applications">
        <h3>材料表征</h3>
        
        <div class="application-grid">
          <div class="app-card">
            <h4>金属和合金</h4>
            <p>费米面重构研究</p>
            <ul>
              <li>铜基超导体</li>
              <li>重费米子化合物</li>
              <li>拓扑半金属</li>
            </ul>
            
            <div class="case-study">
              <h5>案例：铜氧化物超导体</h5>
              <p>通过量子振荡发现费米面重构</p>
              <ul>
                <li>赝能隙态的费米面</li>
                <li>电荷密度波的影响</li>
                <li>超导态的竞争</li>
              </ul>
            </div>
          </div>
          
          <div class="app-card">
            <h4>二维电子系统</h4>
            <p>量子阱和异质结构</p>
            <ul>
              <li>GaAs/AlGaAs量子阱</li>
              <li>硅MOSFET</li>
              <li>石墨烯</li>
            </ul>
            
            <div class="case-study">
              <h5>案例：石墨烯</h5>
              <p>相对论性费米子的量子振荡</p>
              <ul>
                <li>线性色散关系</li>
                <li>Berry相位π</li>
                <li>谷简并度</li>
              </ul>
            </div>
          </div>
          
          <div class="app-card">
            <h4>拓扑材料</h4>
            <p>拓扑表面态研究</p>
            <ul>
              <li>拓扑绝缘体</li>
              <li>Weyl半金属</li>
              <li>Dirac半金属</li>
            </ul>
            
            <div class="case-study">
              <h5>案例：Bi<sub>2</sub>Se<sub>3</sub></h5>
              <p>拓扑表面态的量子振荡</p>
              <ul>
                <li>表面态费米面</li>
                <li>体态的贡献</li>
                <li>拓扑相变</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>11. 理论发展</h2>
      
      <div class="theoretical-developments">
        <h3>现代理论框架</h3>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>多体效应</h4>
            <p>电子-电子相互作用的影响</p>
            <ul>
              <li>费米液体理论修正</li>
              <li>量子振荡的重整化</li>
              <li>相互作用增强</li>
            </ul>
          </div>
          
          <div class="theory-card">
            <h4>无序理论</h4>
            <p>随机势的量子干涉效应</p>
            <ul>
              <li>Anderson局域化</li>
              <li>弱局域化修正</li>
              <li>相干长度</li>
            </ul>
          </div>
          
          <div class="theory-card">
            <h4>拓扑效应</h4>
            <p>Berry相位和拓扑不变量</p>
            <ul>
              <li>几何相位</li>
              <li>拓扑频率</li>
              <li>手性异常</li>
            </ul>
          </div>
        </div>
        
        <div class="advanced-topics">
          <h3>前沿研究方向</h3>
          
          <div class="frontier-topics">
            <div class="topic-card">
              <h4>量子振荡的机器学习分析</h4>
              <p>利用AI技术分析复杂振荡数据</p>
              <ul>
                <li>自动频率识别</li>
                <li>相位提取</li>
                <li>噪声去除</li>
              </ul>
            </div>
            
            <div class="topic-card">
              <h4>非线性量子振荡</h4>
              <p>强相互作用系统的振荡行为</p>
              <ul>
                <li>分数量子霍尔态</li>
                <li>Wigner晶体</li>
                <li>复合费米子</li>
              </ul>
            </div>
            
            <div class="topic-card">
              <h4>时间分辨量子振荡</h4>
              <p>超快动力学过程的研究</p>
              <ul>
                <li>泵浦-探测技术</li>
                <li>瞬态输运</li>
                <li>相干控制</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>量子振荡源于磁场中电子轨道的Landau量子化</li>
        <li>dHvA效应测量磁化率振荡，SdH效应测量电阻率振荡</li>
        <li>振荡频率直接反映费米面的几何结构</li>
        <li>温度和无序效应导致振荡幅度的阻尼</li>
        <li>通过振荡分析可以确定有效质量、散射时间和g因子</li>
        <li>实验技术包括磁化率、电阻率和比热测量</li>
        <li>在材料表征和拓扑物态研究中有重要应用</li>
        <li>现代发展包括多体效应、拓扑相位和机器学习分析</li>
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

.physical-origin, .dhva-effect, .sdh-effect, .frequency-analysis, .effective-mass, .scattering-analysis, .spin-effects, .experimental-techniques, .applications, .theoretical-developments {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.origin-explanation, .param-grid, .semiclassical-grid, .damping-grid, .char-grid, .freq-grid, .method-grid, .dingle-grid, .mobility-types, .spin-grid, .technique-grid, .condition-requirements, .application-grid, .theory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.origin-card, .param-card, .semi-card, .damping-card, .char-card, .freq-card, .method-card, .dingle-card, .mob-card, .spin-card, .tech-card, .req-card, .app-card, .theory-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.semiclassical-picture, .dhva-parameters, .sdh-characteristics, .transport-mechanism, .frequency-components, .fft-analysis, .mass-determination, .mass-extraction, .dingle-analysis, .mobility-comparison, .spin-parameters, .spin-oscillations, .experimental-conditions, .advanced-topics {
  background: #f1f2f6;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.mechanism-explanation, .analysis-steps, .fitting-procedure, .spin-modulation, .g-factor-determination, .determination-steps, .frontier-topics {
  margin: 15px 0;
}

.mech-card, .step-card, .fit-step, .mod-card, .det-step, .topic-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  border-left: 3px solid #e74c3c;
}

.case-study, .advantages {
  background: #e8f5e8;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
}

.ratio-significance {
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  border-left: 4px solid #ffc107;
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
  
  .origin-explanation, .param-grid, .semiclassical-grid, .damping-grid, .char-grid, .freq-grid, .method-grid, .dingle-grid, .mobility-types, .spin-grid, .technique-grid, .condition-requirements, .application-grid, .theory-grid {
    grid-template-columns: 1fr;
  }
}
</style>