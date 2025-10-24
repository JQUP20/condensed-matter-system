<template>
  <div class="chapter-content">
    <h1>10.3.2 金属环中的持续电流</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>金属环中的持续电流是介观物理学中的一个重要现象，它描述了在没有外加电压的情况下，由于量子相干效应而在金属环中流动的电流。这种现象最初由Büttiker等人在1983年理论预测，后来在实验中得到证实。持续电流的存在揭示了量子力学在介观尺度上的奇妙表现，并且与Aharonov-Bohm效应密切相关。</p>
      
      <div class="highlight-box">
        <h3>持续电流的特征</h3>
        <ul>
          <li><strong>量子相干性</strong>：电子波函数的相位相干</li>
          <li><strong>磁通敏感性</strong>：电流随磁通量周期性变化</li>
          <li><strong>介观尺度</strong>：环的周长与相干长度可比</li>
          <li><strong>平衡态现象</strong>：无需外加电压驱动</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 理论基础</h2>
      
      <div class="theoretical-foundation">
        <h3>量子力学描述</h3>
        <p>金属环中电子的量子力学处理：</p>
        
        <div class="quantum-description">
          <div class="quantum-equations">
            <div class="eq-card">
              <h4>薛定谔方程</h4>
              <div class="formula-block">
                [-ℏ²/(2m)∇² + V(r)]ψ = Eψ
              </div>
              <p>无磁场时的电子运动</p>
            </div>
            
            <div class="eq-card">
              <h4>Peierls代换</h4>
              <div class="formula-block">
                p → p - eA
              </div>
              <p>磁场中的最小耦合</p>
            </div>
            
            <div class="eq-card">
              <h4>磁场中薛定谔方程</h4>
              <div class="formula-block">
                [1/(2m)(p - eA)² + V(r)]ψ = Eψ
              </div>
              <p>包含矢量势的哈密顿量</p>
            </div>
          </div>
        </div>
        
        <div class="ring-geometry">
          <h3>环形几何</h3>
          <p>一维环形系统的特殊性质：</p>
          
          <div class="geometry-properties">
            <div class="geometry-grid">
              <div class="geo-card">
                <h4>周期性边界条件</h4>
                <div class="formula-block">
                  ψ(x + L) = ψ(x)
                </div>
                <p>波函数的周期性</p>
              </div>
              
              <div class="geo-card">
                <h4>磁通量</h4>
                <div class="formula-block">
                  Φ = ∮ A·dl = BA
                </div>
                <p>穿过环面的磁通</p>
              </div>
              
              <div class="geo-card">
                <h4>Aharonov-Bohm相位</h4>
                <div class="formula-block">
                  φ<sub>AB</sub> = eΦ/ℏ = 2πΦ/Φ<sub>0</sub>
                </div>
                <p>磁通引起的相位</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="energy-levels">
          <h3>能级结构</h3>
          <p>磁场中环形系统的能谱：</p>
          
          <div class="energy-spectrum">
            <div class="spectrum-analysis">
              <div class="spec-card">
                <h4>无磁场能级</h4>
                <div class="formula-block">
                  E<sub>n</sub> = ℏ²k<sub>n</sub>²/(2m), k<sub>n</sub> = 2πn/L
                </div>
                <p>自由电子的量子化动量</p>
              </div>
              
              <div class="spec-card">
                <h4>磁场中能级</h4>
                <div class="formula-block">
                  E<sub>n</sub>(Φ) = ℏ²/(2mL²)(2πn - eΦ/ℏ)²
                </div>
                <p>磁通调制的能级</p>
              </div>
              
              <div class="spec-card">
                <h4>能级周期性</h4>
                <div class="formula-block">
                  E<sub>n</sub>(Φ + Φ<sub>0</sub>) = E<sub>n+1</sub>(Φ)
                </div>
                <p>磁通量子的周期性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 持续电流的计算</h2>
      
      <div class="current-calculation">
        <h3>热力学方法</h3>
        <p>基于自由能的电流计算：</p>
        
        <div class="thermodynamic-approach">
          <div class="thermo-steps">
            <div class="thermo-card">
              <h4>巨正则势</h4>
              <div class="formula-block">
                Ω = -k<sub>B</sub>T ∑<sub>n</sub> ln(1 + e<sup>-(E<sub>n</sub>-μ)/(k<sub>B</sub>T)</sup>)
              </div>
              <p>费米-狄拉克统计</p>
            </div>
            
            <div class="thermo-card">
              <h4>持续电流</h4>
              <div class="formula-block">
                I = -∂Ω/∂Φ
              </div>
              <p>电流与磁通的关系</p>
            </div>
            
            <div class="thermo-card">
              <h4>零温极限</h4>
              <div class="formula-block">
                I = -(e/ℏ) ∑<sub>E<sub>n</sub>&lt;μ</sub> ∂E<sub>n</sub>/∂Φ
              </div>
              <p>费米海的贡献</p>
            </div>
          </div>
        </div>
        
        <div class="quantum-mechanical-approach">
          <h3>量子力学方法</h3>
          <p>基于波函数的电流计算：</p>
          
          <div class="quantum-current">
            <div class="qm-formulas">
              <div class="qm-card">
                <h4>电流密度算符</h4>
                <div class="formula-block">
                  ĵ = (e/2mi)[ψ<sup>*</sup>(∇ψ) - (∇ψ<sup>*</sup>)ψ] - (e²/m)A|ψ|²
                </div>
                <p>概率流密度</p>
              </div>
              
              <div class="qm-card">
                <h4>环形电流</h4>
                <div class="formula-block">
                  I = ∮ j·dl = (e/m) ∑<sub>n</sub> f<sub>n</sub> ⟨ψ<sub>n</sub>|p̂|ψ<sub>n</sub>⟩
                </div>
                <p>占据态的动量期望值</p>
              </div>
              
              <div class="qm-card">
                <h4>简化表达式</h4>
                <div class="formula-block">
                  I = (e/mL) ∑<sub>n</sub> f<sub>n</sub> (ℏk<sub>n</sub> - eA)
                </div>
                <p>一维环的电流公式</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="analytical-results">
          <h3>解析结果</h3>
          <p>特殊情况下的解析解：</p>
          
          <div class="analytical-solutions">
            <div class="solution-grid">
              <div class="sol-card">
                <h4>单电子情况</h4>
                <div class="formula-block">
                  I = (eℏ/mL²) sin(2πΦ/Φ<sub>0</sub>)
                </div>
                <p>最简单的量子干涉</p>
              </div>
              
              <div class="sol-card">
                <h4>多电子系统</h4>
                <div class="formula-block">
                  I = ∑<sub>n</sub> I<sub>n</sub> f(E<sub>n</sub>)
                </div>
                <p>费米分布的影响</p>
              </div>
              
              <div class="sol-card">
                <h4>高温极限</h4>
                <div class="formula-block">
                  I ∝ e<sup>-L/L<sub>T</sub></sup>
                </div>
                <p>热长度L<sub>T</sub> = √(ℏ²/(mk<sub>B</sub>T))</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 无序效应</h2>
      
      <div class="disorder-effects">
        <h3>杂质散射</h3>
        <p>无序对持续电流的影响：</p>
        
        <div class="impurity-scattering">
          <div class="scattering-mechanisms">
            <div class="scatter-card">
              <h4>弹性散射</h4>
              <p>杂质原子的散射</p>
              <ul>
                <li>相位相干时间τ<sub>φ</sub></li>
                <li>平均自由程l</li>
                <li>相干长度L<sub>φ</sub></li>
              </ul>
            </div>
            
            <div class="scatter-card">
              <h4>非弹性散射</h4>
              <p>电子-声子相互作用</p>
              <ul>
                <li>温度依赖性</li>
                <li>相位破坏</li>
                <li>退相干效应</li>
              </ul>
            </div>
            
            <div class="scatter-card">
              <h4>磁性杂质</h4>
              <p>自旋翻转散射</p>
              <ul>
                <li>Kondo效应</li>
                <li>自旋退相干</li>
                <li>时间反演对称破缺</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="disorder-regimes">
          <h3>不同无序区间</h3>
          <p>根据散射强度的分类：</p>
          
          <div class="regime-classification">
            <div class="regime-grid">
              <div class="regime-card">
                <h4>弱无序区间</h4>
                <div class="formula-block">
                  l ≫ L, k<sub>F</sub>l ≫ 1
                </div>
                <p>扩散输运，相干效应显著</p>
                <ul>
                  <li>弱局域化修正</li>
                  <li>通用电导涨落</li>
                  <li>持续电流可观测</li>
                </ul>
              </div>
              
              <div class="regime-card">
                <h4>强无序区间</h4>
                <div class="formula-block">
                  l ≪ L, k<sub>F</sub>l ≲ 1
                </div>
                <p>局域化效应主导</p>
                <ul>
                  <li>Anderson局域化</li>
                  <li>指数衰减</li>
                  <li>持续电流抑制</li>
                </ul>
              </div>
              
              <div class="regime-card">
                <h4>中等无序区间</h4>
                <div class="formula-block">
                  l ~ L
                </div>
                <p>过渡区间</p>
                <ul>
                  <li>复杂的相干效应</li>
                  <li>样品依赖性</li>
                  <li>统计涨落</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="ensemble-averaging">
          <h3>系综平均</h3>
          <p>无序系综的统计性质：</p>
          
          <div class="statistical-properties">
            <div class="stat-analysis">
              <div class="stat-card">
                <h4>平均电流</h4>
                <div class="formula-block">
                  ⟨I⟩ = 0
                </div>
                <p>无序平均后电流为零</p>
              </div>
              
              <div class="stat-card">
                <h4>电流涨落</h4>
                <div class="formula-block">
                  ⟨I²⟩ ∝ (E<sub>c</sub>/Δ)²
                </div>
                <p>充电能与能级间距的比值</p>
              </div>
              
              <div class="stat-card">
                <h4>典型电流</h4>
                <div class="formula-block">
                  I<sub>typ</sub> ~ √⟨I²⟩
                </div>
                <p>几何平均值</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 温度效应</h2>
      
      <div class="temperature-effects">
        <h3>热涨落的影响</h3>
        <p>温度对持续电流的调制：</p>
        
        <div class="thermal-effects">
          <div class="temperature-regimes">
            <div class="temp-card">
              <h4>低温区间</h4>
              <div class="formula-block">
                k<sub>B</sub>T ≪ Δ
              </div>
              <p>量子相干占主导</p>
              <ul>
                <li>费米分布尖锐</li>
                <li>能级分辨</li>
                <li>最大持续电流</li>
              </ul>
            </div>
            
            <div class="temp-card">
              <h4>中温区间</h4>
              <div class="formula-block">
                k<sub>B</sub>T ~ Δ
              </div>
              <p>热涨落与量子效应竞争</p>
              <ul>
                <li>费米分布展宽</li>
                <li>能级模糊</li>
                <li>电流减小</li>
              </ul>
            </div>
            
            <div class="temp-card">
              <h4>高温区间</h4>
              <div class="formula-block">
                k<sub>B</sub>T ≫ Δ
              </div>
              <p>经典行为</p>
              <ul>
                <li>热激发占主导</li>
                <li>相干性破坏</li>
                <li>电流指数衰减</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="thermal-averaging">
          <h3>热平均</h3>
          <p>有限温度下的电流计算：</p>
          
          <div class="thermal-calculation">
            <div class="thermal-formulas">
              <div class="thermal-formula-card">
                <h4>费米分布函数</h4>
                <div class="formula-block">
                  f(E) = 1/(e<sup>(E-μ)/(k<sub>B</sub>T)</sup> + 1)
                </div>
                <p>热平衡分布</p>
              </div>
              
              <div class="thermal-formula-card">
                <h4>温度修正的电流</h4>
                <div class="formula-block">
                  I(T) = ∑<sub>n</sub> I<sub>n</sub> f(E<sub>n</sub>)
                </div>
                <p>热权重的求和</p>
              </div>
              
              <div class="thermal-formula-card">
                <h4>高温展开</h4>
                <div class="formula-block">
                  I(T) ≈ I(0) exp(-πk<sub>B</sub>T/Δ)
                </div>
                <p>指数衰减行为</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="decoherence-mechanisms">
          <h3>退相干机制</h3>
          <p>温度引起的相位破坏：</p>
          
          <div class="decoherence-sources">
            <div class="deco-grid">
              <div class="deco-card">
                <h4>电子-声子散射</h4>
                <p>晶格振动的影响</p>
                <ul>
                  <li>非弹性散射</li>
                  <li>能量交换</li>
                  <li>相位随机化</li>
                </ul>
              </div>
              
              <div class="deco-card">
                <h4>电子-电子相互作用</h4>
                <p>库仑相互作用</p>
                <ul>
                  <li>Nyquist噪声</li>
                  <li>涨落-耗散定理</li>
                  <li>相位扩散</li>
                </ul>
              </div>
              
              <div class="deco-card">
                <h4>外部噪声</h4>
                <p>环境涨落</p>
                <ul>
                  <li>电磁噪声</li>
                  <li>电荷涨落</li>
                  <li>磁场涨落</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 相互作用效应</h2>
      
      <div class="interaction-effects">
        <h3>库仑相互作用</h3>
        <p>电子间相互作用对持续电流的影响：</p>
        
        <div class="coulomb-interactions">
          <div class="interaction-regimes">
            <div class="int-card">
              <h4>弱相互作用</h4>
              <div class="formula-block">
                E<sub>c</sub> ≪ Δ
              </div>
              <p>充电能小于能级间距</p>
              <ul>
                <li>费米液体行为</li>
                <li>微扰处理</li>
                <li>Hartree-Fock近似</li>
              </ul>
            </div>
            
            <div class="int-card">
              <h4>强相互作用</h4>
              <div class="formula-block">
                E<sub>c</sub> ≫ Δ
              </div>
              <p>库仑阻塞效应</p>
              <ul>
                <li>Wigner晶体</li>
                <li>Luttinger液体</li>
                <li>非费米液体行为</li>
              </ul>
            </div>
            
            <div class="int-card">
              <h4>中等相互作用</h4>
              <div class="formula-block">
                E<sub>c</sub> ~ Δ
              </div>
              <p>复杂的多体效应</p>
              <ul>
                <li>相关效应</li>
                <li>准粒子重整化</li>
                <li>非线性响应</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="many-body-methods">
          <h3>多体理论方法</h3>
          <p>处理相互作用的理论工具：</p>
          
          <div class="theoretical-methods">
            <div class="method-grid">
              <div class="method-card">
                <h4>Hartree-Fock方法</h4>
                <p>平均场近似</p>
                <ul>
                  <li>自洽场方程</li>
                  <li>交换相互作用</li>
                  <li>弱耦合有效</li>
                </ul>
              </div>
              
              <div class="method-card">
                <h4>随机相位近似</h4>
                <p>集体激发</p>
                <ul>
                  <li>密度涨落</li>
                  <li>等离激元</li>
                  <li>屏蔽效应</li>
                </ul>
              </div>
              
              <div class="method-card">
                <h4>Luttinger液体理论</h4>
                <p>一维强关联系统</p>
                <ul>
                  <li>玻色化</li>
                  <li>共形场论</li>
                  <li>幂律行为</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="correlation-effects">
          <h3>关联效应</h3>
          <p>电子关联对持续电流的修正：</p>
          
          <div class="correlation-corrections">
            <div class="corr-effects">
              <div class="corr-card">
                <h4>交换增强</h4>
                <div class="formula-block">
                  I<sub>corr</sub> = I<sub>0</sub>(1 + α r<sub>s</sub>)
                </div>
                <p>Wigner-Seitz参数r<sub>s</sub></p>
              </div>
              
              <div class="corr-card">
                <h4>自旋涨落</h4>
                <div class="formula-block">
                  δI ∝ (g μ<sub>B</sub>B)²
                </div>
                <p>磁场诱导的自旋效应</p>
              </div>
              
              <div class="corr-card">
                <h4>超导关联</h4>
                <div class="formula-block">
                  I<sub>s</sub> ∝ sin(2πΦ/Φ<sub>0</sub>)
                </div>
                <p>Cooper对的贡献</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 实验观测</h2>
      
      <div class="experimental-observations">
        <h3>早期实验</h3>
        <p>持续电流的首次观测：</p>
        
        <div class="early-experiments">
          <div class="experiment-timeline">
            <div class="exp-card">
              <h4>Lévy等人 (1990)</h4>
              <p>首次观测到持续电流</p>
              <ul>
                <li>金属环样品</li>
                <li>SQUID磁力计</li>
                <li>磁通周期性</li>
              </ul>
            </div>
            
            <div class="exp-card">
              <h4>Chandrasekhar等人 (1991)</h4>
              <p>单个环的测量</p>
              <ul>
                <li>微米尺度环</li>
                <li>低温测量</li>
                <li>理论符合</li>
              </ul>
            </div>
            
            <div class="exp-card">
              <h4>Mailly等人 (1993)</h4>
              <p>系统性研究</p>
              <ul>
                <li>不同尺寸环</li>
                <li>温度依赖性</li>
                <li>无序效应</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="measurement-techniques">
          <h3>测量技术</h3>
          <p>持续电流的实验方法：</p>
          
          <div class="measurement-methods">
            <div class="method-grid">
              <div class="meas-card">
                <h4>SQUID磁力计</h4>
                <p>超导量子干涉器件</p>
                <ul>
                  <li>极高磁场灵敏度</li>
                  <li>磁偶极矩测量</li>
                  <li>非侵入性检测</li>
                </ul>
              </div>
              
              <div class="meas-card">
                <h4>扭矩磁力计</h4>
                <p>机械扭矩测量</p>
                <ul>
                  <li>磁矩与磁场相互作用</li>
                  <li>高精度扭矩传感器</li>
                  <li>温度扫描</li>
                </ul>
              </div>
              
              <div class="meas-card">
                <h4>霍尔探针</h4>
                <p>局域磁场测量</p>
                <ul>
                  <li>空间分辨</li>
                  <li>磁场分布</li>
                  <li>电流密度重构</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experimental-challenges">
          <h3>实验挑战</h3>
          <p>持续电流测量的技术难点：</p>
          
          <div class="technical-challenges">
            <div class="challenge-grid">
              <div class="challenge-card">
                <h4>信号微弱</h4>
                <p>电流幅度很小</p>
                <ul>
                  <li>纳安培量级</li>
                  <li>噪声抑制</li>
                  <li>信号放大</li>
                </ul>
              </div>
              
              <div class="challenge-card">
                <h4>样品制备</h4>
                <p>高质量环形结构</p>
                <ul>
                  <li>电子束光刻</li>
                  <li>表面清洁</li>
                  <li>接触电阻</li>
                </ul>
              </div>
              
              <div class="challenge-card">
                <h4>环境控制</h4>
                <p>外界干扰最小化</p>
                <ul>
                  <li>磁屏蔽</li>
                  <li>振动隔离</li>
                  <li>温度稳定</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 现代发展</h2>
      
      <div class="modern-developments">
        <h3>新材料系统</h3>
        <p>持续电流在新型材料中的研究：</p>
        
        <div class="new-materials">
          <div class="material-systems">
            <div class="mat-card">
              <h4>石墨烯环</h4>
              <p>二维Dirac材料</p>
              <ul>
                <li>相对论性电子</li>
                <li>Klein隧穿</li>
                <li>赝自旋效应</li>
              </ul>
            </div>
            
            <div class="mat-card">
              <h4>拓扑绝缘体环</h4>
              <p>表面态的持续电流</p>
              <ul>
                <li>自旋-动量锁定</li>
                <li>拓扑保护</li>
                <li>背散射抑制</li>
              </ul>
            </div>
            
            <div class="mat-card">
              <h4>超导环</h4>
              <p>Cooper对的量子干涉</p>
              <ul>
                <li>Josephson效应</li>
                <li>磁通量子化</li>
                <li>相位相干长度</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="quantum-devices">
          <h3>量子器件应用</h3>
          <p>持续电流在量子技术中的应用：</p>
          
          <div class="device-applications">
            <div class="device-grid">
              <div class="device-card">
                <h4>量子比特</h4>
                <p>基于持续电流的量子比特</p>
                <ul>
                  <li>磁通量子比特</li>
                  <li>相位量子比特</li>
                  <li>量子相干操控</li>
                </ul>
              </div>
              
              <div class="device-card">
                <h4>量子传感器</h4>
                <p>磁场的量子检测</p>
                <ul>
                  <li>SQUID器件</li>
                  <li>磁力计</li>
                  <li>梯度计</li>
                </ul>
              </div>
              
              <div class="device-card">
                <h4>量子存储器</h4>
                <p>量子信息存储</p>
                <ul>
                  <li>磁通存储</li>
                  <li>相位记忆</li>
                  <li>量子纠错</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="theoretical-advances">
          <h3>理论进展</h3>
          <p>持续电流理论的新发展：</p>
          
          <div class="theory-progress">
            <div class="theory-grid">
              <div class="theory-card">
                <h4>非平衡态理论</h4>
                <p>动态持续电流</p>
                <ul>
                  <li>Floquet理论</li>
                  <li>时间周期驱动</li>
                  <li>非绝热效应</li>
                </ul>
              </div>
              
              <div class="theory-card">
                <h4>拓扑相变</h4>
                <p>拓扑性质的变化</p>
                <ul>
                  <li>拓扑不变量</li>
                  <li>边界态</li>
                  <li>相变临界点</li>
                </ul>
              </div>
              
              <div class="theory-card">
                <h4>机器学习方法</h4>
                <p>AI辅助的理论研究</p>
                <ul>
                  <li>神经网络</li>
                  <li>模式识别</li>
                  <li>参数优化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 数值模拟</h2>
      
      <div class="numerical-simulations">
        <h3>计算方法</h3>
        <p>持续电流的数值计算技术：</p>
        
        <div class="computational-approaches">
          <div class="comp-methods">
            <div class="comp-card">
              <h4>紧束缚模型</h4>
              <p>离散格点近似</p>
              <ul>
                <li>哈密顿矩阵对角化</li>
                <li>Peierls相位</li>
                <li>有限尺寸效应</li>
              </ul>
            </div>
            
            <div class="comp-card">
              <h4>连续模型</h4>
              <p>偏微分方程求解</p>
              <ul>
                <li>有限元方法</li>
                <li>有限差分</li>
                <li>谱方法</li>
              </ul>
            </div>
            
            <div class="comp-card">
              <h4>量子蒙特卡罗</h4>
              <p>多体系统模拟</p>
              <ul>
                <li>路径积分</li>
                <li>辅助场方法</li>
                <li>符号问题</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="simulation-tools">
          <h3>模拟软件</h3>
          <p>常用的数值模拟工具：</p>
          
          <div class="software-packages">
            <div class="software-grid">
              <div class="soft-card">
                <h4>专用软件</h4>
                <ul>
                  <li>Kwant (Python)</li>
                  <li>NEGF (非平衡格林函数)</li>
                  <li>TBStudio</li>
                </ul>
              </div>
              
              <div class="soft-card">
                <h4>通用数值库</h4>
                <ul>
                  <li>NumPy/SciPy</li>
                  <li>MATLAB</li>
                  <li>Mathematica</li>
                </ul>
              </div>
              
              <div class="soft-card">
                <h4>高性能计算</h4>
                <ul>
                  <li>MPI并行</li>
                  <li>GPU加速</li>
                  <li>集群计算</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 应用前景</h2>
      
      <div class="future-applications">
        <h3>技术应用</h3>
        <p>持续电流的潜在应用：</p>
        
        <div class="technological-prospects">
          <div class="tech-prospects">
            <div class="prospect-card">
              <h4>量子计算</h4>
              <p>量子信息处理</p>
              <ul>
                <li>拓扑量子比特</li>
                <li>量子门操作</li>
                <li>量子纠错码</li>
              </ul>
            </div>
            
            <div class="prospect-card">
              <h4>精密测量</h4>
              <p>超高精度传感</p>
              <ul>
                <li>磁场测量</li>
                <li>重力测量</li>
                <li>基本常数测定</li>
              </ul>
            </div>
            
            <div class="prospect-card">
              <h4>能源技术</h4>
              <p>新型能源器件</p>
              <ul>
                <li>超导储能</li>
                <li>量子电池</li>
                <li>能量收集</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="research-directions">
          <h3>研究方向</h3>
          <p>未来的研究重点：</p>
          
          <div class="future-research">
            <div class="research-grid">
              <div class="research-card">
                <h4>新物理现象</h4>
                <p>探索新的量子效应</p>
                <ul>
                  <li>非阿贝尔统计</li>
                  <li>分数化激发</li>
                  <li>量子临界现象</li>
                </ul>
              </div>
              
              <div class="research-card">
                <h4>材料工程</h4>
                <p>设计新型量子材料</p>
                <ul>
                  <li>人工超晶格</li>
                  <li>异质结构</li>
                  <li>拓扑材料</li>
                </ul>
              </div>
              
              <div class="research-card">
                <h4>器件集成</h4>
                <p>量子器件的集成化</p>
                <ul>
                  <li>片上量子系统</li>
                  <li>混合器件</li>
                  <li>可扩展架构</li>
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
        <li>持续电流是介观金属环中的量子相干现象</li>
        <li>基于Aharonov-Bohm效应和磁通量子化</li>
        <li>电流幅度与磁通量呈周期性关系</li>
        <li>无序和温度会抑制持续电流</li>
        <li>电子相互作用产生复杂的多体效应</li>
        <li>实验观测需要极高的测量精度</li>
        <li>在新材料系统中展现新的物理性质</li>
        <li>在量子技术中有重要应用前景</li>
        <li>数值模拟是理论研究的重要工具</li>
        <li>持续电流研究推动了介观物理学的发展</li>
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

.theoretical-foundation, .current-calculation, .disorder-effects, .temperature-effects, .interaction-effects, .experimental-observations, .modern-developments, .numerical-simulations, .future-applications {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.quantum-equations, .geometry-grid, .spectrum-analysis, .thermo-steps, .qm-formulas, .solution-grid, .scattering-mechanisms, .regime-grid, .stat-analysis, .temperature-regimes, .thermal-formulas, .deco-grid, .interaction-regimes, .method-grid, .corr-effects, .experiment-timeline, .meas-card, .challenge-grid, .material-systems, .device-grid, .theory-grid, .comp-methods, .software-grid, .tech-prospects, .research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.eq-card, .geo-card, .spec-card, .thermo-card, .qm-card, .sol-card, .scatter-card, .regime-card, .stat-card, .temp-card, .thermal-formula-card, .deco-card, .int-card, .method-card, .corr-card, .exp-card, .meas-card, .challenge-card, .mat-card, .device-card, .theory-card, .comp-card, .soft-card, .prospect-card, .research-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.quantum-description, .ring-geometry, .energy-levels, .thermodynamic-approach, .quantum-mechanical-approach, .analytical-results, .impurity-scattering, .disorder-regimes, .ensemble-averaging, .thermal-effects, .thermal-averaging, .decoherence-mechanisms, .coulomb-interactions, .many-body-methods, .correlation-effects, .early-experiments, .measurement-techniques, .experimental-challenges, .new-materials, .quantum-devices, .theoretical-advances, .computational-approaches, .simulation-tools, .technological-prospects, .research-directions {
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
  
  .quantum-equations, .geometry-grid, .spectrum-analysis, .thermo-steps, .qm-formulas, .solution-grid, .scattering-mechanisms, .regime-grid, .stat-analysis, .temperature-regimes, .thermal-formulas, .deco-grid, .interaction-regimes, .method-grid, .corr-effects, .experiment-timeline, .meas-card, .challenge-grid, .material-systems, .device-grid, .theory-grid, .comp-methods, .software-grid, .tech-prospects, .research-grid {
    grid-template-columns: 1fr;
  }
}
</style>