<template>
  <div class="chapter-content">
    <h1>10.2.2 Landau量子化</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>Landau量子化描述了带电粒子在均匀磁场中的量子力学行为。这一理论由Lev Landau在1930年提出，是理解磁场中电子行为的基础，也是量子霍尔效应理论的核心组成部分。</p>
      
      <div class="highlight-box">
        <h3>物理背景</h3>
        <ul>
          <li>均匀磁场中的带电粒子运动</li>
          <li>回旋运动的量子化</li>
          <li>磁场对电子能谱的影响</li>
          <li>二维电子系统的基础理论</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. 经典回旋运动</h2>
      <p>在开始量子力学处理之前，我们先回顾经典情况：</p>
      
      <div class="classical-motion">
        <h3>洛伦兹力</h3>
        <div class="formula-block">
          F = q(v × B) = qvB
        </div>
        
        <div class="motion-parameters">
          <div class="param-card">
            <h4>回旋频率</h4>
            <div class="formula-block">
              ω<sub>c</sub> = eB/m
            </div>
            <p>电子的回旋频率</p>
          </div>
          
          <div class="param-card">
            <h4>回旋半径</h4>
            <div class="formula-block">
              r<sub>c</sub> = mv/eB = √(2mE)/eB
            </div>
            <p>经典轨道半径</p>
          </div>
          
          <div class="param-card">
            <h4>磁长度</h4>
            <div class="formula-block">
              l<sub>B</sub> = √(ℏ/eB)
            </div>
            <p>量子力学特征长度</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 量子力学处理</h2>
      
      <div class="quantum-treatment">
        <h3>哈密顿量</h3>
        <p>磁场中带电粒子的哈密顿量：</p>
        
        <div class="formula-block">
          H = (1/2m)(p - eA)²
        </div>
        
        <div class="gauge-choice">
          <h4>规范选择</h4>
          <p>对于均匀磁场 B = Bẑ，常用的规范选择：</p>
          
          <div class="gauge-options">
            <div class="gauge-card">
              <h5>对称规范</h5>
              <div class="formula-block">
                A = (1/2)B(-y, x, 0)
              </div>
              <p>旋转对称性</p>
            </div>
            
            <div class="gauge-card">
              <h5>Landau规范</h5>
              <div class="formula-block">
                A = B(-y, 0, 0)
              </div>
              <p>平移对称性</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. Landau规范中的求解</h2>
      
      <div class="landau-gauge-solution">
        <h3>薛定谔方程</h3>
        <p>在Landau规范 A = B(-y, 0, 0) 中：</p>
        
        <div class="formula-block">
          [-ℏ²/2m ∇² + (1/2)mω<sub>c</sub>²(y + l<sub>B</sub>²k<sub>x</sub>)²]ψ = Eψ
        </div>
        
        <div class="separation-variables">
          <h4>变量分离</h4>
          <p>由于x方向的平移不变性，可以写成：</p>
          
          <div class="formula-block">
            ψ(x,y) = e<sup>ik<sub>x</sub>x</sup> φ<sub>n</sub>(y - y<sub>0</sub>)
          </div>
          
          <div class="center-coordinate">
            <h5>回旋中心坐标</h5>
            <div class="formula-block">
              y<sub>0</sub> = -l<sub>B</sub>²k<sub>x</sub>
            </div>
            <p>回旋轨道的中心位置</p>
          </div>
        </div>
        
        <div class="harmonic-oscillator">
          <h3>谐振子问题</h3>
          <p>y方向的运动等价于谐振子：</p>
          
          <div class="formula-block">
            [-ℏ²/2m d²/dy² + (1/2)mω<sub>c</sub>²y²]φ<sub>n</sub>(y) = E<sub>n</sub>φ<sub>n</sub>(y)
          </div>
          
          <div class="energy-levels">
            <h4>Landau能级</h4>
            <div class="formula-block">
              E<sub>n</sub> = ℏω<sub>c</sub>(n + 1/2), n = 0, 1, 2, ...
            </div>
            
            <div class="level-properties">
              <div class="prop-card">
                <h5>能级间距</h5>
                <div class="formula-block">
                  ΔE = ℏω<sub>c</sub> = ℏeB/m
                </div>
                <p>与磁场强度成正比</p>
              </div>
              
              <div class="prop-card">
                <h5>基态能量</h5>
                <div class="formula-block">
                  E<sub>0</sub> = (1/2)ℏω<sub>c</sub>
                </div>
                <p>零点能</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. Landau能级的简并度</h2>
      
      <div class="degeneracy-analysis">
        <h3>简并度计算</h3>
        <p>每个Landau能级的简并度：</p>
        
        <div class="formula-block">
          N<sub>L</sub> = eB/h = Φ/Φ<sub>0</sub>
        </div>
        
        <div class="degeneracy-explanation">
          <div class="deg-card">
            <h4>磁通量子</h4>
            <div class="formula-block">
              Φ<sub>0</sub> = h/e
            </div>
            <p>基本磁通量子</p>
          </div>
          
          <div class="deg-card">
            <h4>总磁通</h4>
            <div class="formula-block">
              Φ = BA
            </div>
            <p>穿过样品的总磁通</p>
          </div>
          
          <div class="deg-card">
            <h4>物理意义</h4>
            <p>简并度等于磁通量子的个数</p>
            <ul>
              <li>每个磁通量子对应一个轨道态</li>
              <li>回旋中心的可能位置数</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 波函数的性质</h2>
      
      <div class="wavefunction-properties">
        <h3>Landau轨道波函数</h3>
        <p>第n个Landau能级的波函数：</p>
        
        <div class="formula-block">
          ψ<sub>n,k</sub>(x,y) = (1/√L<sub>x</sub>) e<sup>ik<sub>x</sub>x</sup> φ<sub>n</sub>(y + l<sub>B</sub>²k<sub>x</sub>)
        </div>
        
        <div class="wavefunction-details">
          <div class="detail-card">
            <h4>谐振子波函数</h4>
            <div class="formula-block">
              φ<sub>n</sub>(y) = (1/√(2<sup>n</sup>n!)) (1/πl<sub>B</sub>²)<sup>1/4</sup> H<sub>n</sub>(y/l<sub>B</sub>) e<sup>-y²/2l<sub>B</sub>²</sup>
            </div>
            <p>Hermite多项式形式</p>
          </div>
          
          <div class="detail-card">
            <h4>空间局域化</h4>
            <div class="formula-block">
              ⟨y²⟩ - ⟨y⟩² = l<sub>B</sub>²(n + 1/2)
            </div>
            <p>波函数在y方向的展宽</p>
          </div>
        </div>
        
        <div class="orbital-properties">
          <h3>轨道性质</h3>
          
          <div class="orbital-grid">
            <div class="orbital-card">
              <h4>最低Landau能级 (n=0)</h4>
              <div class="formula-block">
                φ<sub>0</sub>(y) = (1/πl<sub>B</sub>²)<sup>1/4</sup> e<sup>-y²/2l<sub>B</sub>²</sup>
              </div>
              <p>高斯波包，最小不确定性</p>
            </div>
            
            <div class="orbital-card">
              <h4>激发态 (n≥1)</h4>
              <p>具有n个节点的波函数</p>
              <ul>
                <li>更大的空间展宽</li>
                <li>更复杂的空间结构</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 填充因子和态密度</h2>
      
      <div class="filling-factor">
        <h3>填充因子定义</h3>
        <p>描述Landau能级填充程度的参数：</p>
        
        <div class="formula-block">
          ν = n<sub>e</sub>/n<sub>B</sub> = n<sub>e</sub>h/eB
        </div>
        
        <div class="filling-explanation">
          <div class="fill-card">
            <h4>电子密度</h4>
            <div class="formula-block">
              n<sub>e</sub> = N<sub>e</sub>/A
            </div>
            <p>单位面积的电子数</p>
          </div>
          
          <div class="fill-card">
            <h4>磁通密度</h4>
            <div class="formula-block">
              n<sub>B</sub> = eB/h
            </div>
            <p>单位面积的磁通量子数</p>
          </div>
        </div>
        
        <div class="density-of-states">
          <h3>态密度</h3>
          <p>Landau量子化导致的态密度：</p>
          
          <div class="formula-block">
            ρ(E) = (eB/h) ∑<sub>n</sub> δ(E - E<sub>n</sub>)
          </div>
          
          <div class="dos-features">
            <div class="feature-card">
              <h4>δ函数峰</h4>
              <p>能量在Landau能级处的尖锐峰</p>
            </div>
            
            <div class="feature-card">
              <h4>能隙</h4>
              <p>Landau能级之间的能隙</p>
              <div class="formula-block">
                Δ = ℏω<sub>c</sub>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 无序效应和能级展宽</h2>
      
      <div class="disorder-effects">
        <h3>实际系统中的修正</h3>
        <p>真实材料中的无序导致Landau能级展宽：</p>
        
        <div class="disorder-sources">
          <div class="source-card">
            <h4>杂质散射</h4>
            <ul>
              <li>电离杂质</li>
              <li>中性杂质</li>
              <li>合金无序</li>
            </ul>
          </div>
          
          <div class="source-card">
            <h4>界面粗糙度</h4>
            <ul>
              <li>量子阱界面起伏</li>
              <li>表面粗糙度</li>
              <li>厚度涨落</li>
            </ul>
          </div>
        </div>
        
        <div class="broadening-model">
          <h3>能级展宽模型</h3>
          <p>考虑无序后的态密度：</p>
          
          <div class="formula-block">
            ρ(E) = (eB/h) ∑<sub>n</sub> (Γ/π)/[(E - E<sub>n</sub>)² + Γ²]
          </div>
          
          <div class="broadening-parameters">
            <div class="param-item">
              <h4>展宽参数</h4>
              <div class="formula-block">
                Γ ∼ √(n<sub>imp</sub>) × (e²/4πεl<sub>B</sub>)
              </div>
              <p>与杂质密度的平方根成正比</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 磁振荡现象</h2>
      
      <div class="magnetic-oscillations">
        <h3>de Haas-van Alphen效应</h3>
        <p>磁化率的振荡行为：</p>
        
        <div class="formula-block">
          χ ∝ cos(2πF/B + φ)
        </div>
        
        <div class="oscillation-parameters">
          <div class="osc-card">
            <h4>振荡频率</h4>
            <div class="formula-block">
              F = (ℏ/2πe)A<sub>F</sub>
            </div>
            <p>与费米面面积相关</p>
          </div>
          
          <div class="osc-card">
            <h4>Shubnikov-de Haas效应</h4>
            <p>电阻率的磁振荡</p>
            <div class="formula-block">
              ρ<sub>xx</sub> ∝ cos(2πF/B + φ)
            </div>
          </div>
        </div>
        
        <div class="temperature-dependence">
          <h3>温度依赖性</h3>
          <p>热展宽对振荡的影响：</p>
          
          <div class="formula-block">
            振荡幅度 ∝ (2π²k<sub>B</sub>T/ℏω<sub>c</sub>)/sinh(2π²k<sub>B</sub>T/ℏω<sub>c</sub>)
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 实验观测</h2>
      
      <div class="experimental-observations">
        <h3>关键实验结果</h3>
        
        <div class="experiment-grid">
          <div class="exp-card">
            <h4>磁阻振荡</h4>
            <p>Shubnikov-de Haas振荡的观测</p>
            <ul>
              <li>周期性磁阻变化</li>
              <li>费米面信息提取</li>
              <li>载流子有效质量测定</li>
            </ul>
          </div>
          
          <div class="exp-card">
            <h4>回旋共振</h4>
            <p>直接测量回旋频率</p>
            <div class="formula-block">
              ℏω = ℏeB/m*
            </div>
            <p>确定有效质量</p>
          </div>
          
          <div class="exp-card">
            <h4>量子霍尔效应</h4>
            <p>整数填充因子处的平台</p>
            <ul>
              <li>霍尔电阻量子化</li>
              <li>纵向电阻为零</li>
              <li>拓扑保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>11. 理论推广</h2>
      
      <div class="theoretical-extensions">
        <h3>推广和应用</h3>
        
        <div class="extension-grid">
          <div class="ext-card">
            <h4>非均匀磁场</h4>
            <p>磁场梯度的影响</p>
            <ul>
              <li>磁聚焦效应</li>
              <li>蛇形轨道</li>
              <li>磁量子点</li>
            </ul>
          </div>
          
          <div class="ext-card">
            <h4>相对论效应</h4>
            <p>Dirac费米子的Landau量子化</p>
            <div class="formula-block">
              E<sub>n</sub> = ±v<sub>F</sub>√(2eℏBn)
            </div>
            <p>石墨烯中的应用</p>
          </div>
          
          <div class="ext-card">
            <h4>多能带系统</h4>
            <p>复杂能带结构的处理</p>
            <ul>
              <li>能带间耦合</li>
              <li>磁击穿</li>
              <li>轨道磁化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>12. 现代发展</h2>
      
      <div class="modern-developments">
        <h3>新兴研究方向</h3>
        
        <div class="development-grid">
          <div class="dev-card">
            <h4>拓扑材料</h4>
            <p>拓扑绝缘体和半金属中的Landau量子化</p>
            <ul>
              <li>表面态的量子化</li>
              <li>Weyl费米子</li>
              <li>拓扑相变</li>
            </ul>
          </div>
          
          <div class="dev-card">
            <h4>二维材料</h4>
            <p>新型二维系统的磁量子化</p>
            <ul>
              <li>过渡金属硫化物</li>
              <li>黑磷</li>
              <li>魔角石墨烯</li>
            </ul>
          </div>
          
          <div class="dev-card">
            <h4>量子器件</h4>
            <p>基于Landau量子化的器件应用</p>
            <ul>
              <li>量子霍尔电阻标准</li>
              <li>单电子晶体管</li>
              <li>量子点阵列</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>Landau量子化描述了磁场中电子的量子化轨道运动</li>
        <li>能谱形成等间距的Landau能级，间距为ℏω<sub>c</sub></li>
        <li>每个能级的简并度等于磁通量子数eB/h</li>
        <li>填充因子ν描述了Landau能级的填充程度</li>
        <li>无序效应导致能级展宽，影响输运性质</li>
        <li>磁振荡现象提供了费米面信息</li>
        <li>理论在现代拓扑材料和量子器件中有重要应用</li>
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

.classical-motion, .quantum-treatment, .landau-gauge-solution, .degeneracy-analysis, .wavefunction-properties, .filling-factor, .disorder-effects, .magnetic-oscillations, .experimental-observations, .theoretical-extensions, .modern-developments {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.motion-parameters, .gauge-options, .level-properties, .degeneracy-explanation, .wavefunction-details, .orbital-grid, .filling-explanation, .dos-features, .disorder-sources, .broadening-parameters, .oscillation-parameters, .experiment-grid, .extension-grid, .development-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.param-card, .gauge-card, .prop-card, .deg-card, .detail-card, .orbital-card, .fill-card, .feature-card, .source-card, .param-item, .osc-card, .exp-card, .ext-card, .dev-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.separation-variables, .center-coordinate, .harmonic-oscillator, .energy-levels, .density-of-states, .broadening-model, .temperature-dependence {
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
  
  .motion-parameters, .gauge-options, .level-properties, .degeneracy-explanation, .wavefunction-details, .orbital-grid, .filling-explanation, .dos-features, .disorder-sources, .broadening-parameters, .oscillation-parameters, .experiment-grid, .extension-grid, .development-grid {
    grid-template-columns: 1fr;
  }
}
</style>