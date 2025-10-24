<template>
  <div class="chapter-content">
    <h1>10.2.1 Laughlin的规范理论</h1>
    
    <div class="section">
      <h2>1. 引言</h2>
      <p>Laughlin的规范理论是理解分数量子霍尔效应的核心理论框架。Robert Laughlin在1983年提出了这一理论，成功解释了ν = 1/3填充因子下的量子霍尔态，为此获得了1998年诺贝尔物理学奖。</p>
      
      <div class="highlight-box">
        <h3>理论背景</h3>
        <ul>
          <li>强磁场下的二维电子系统</li>
          <li>电子-电子相互作用的重要性</li>
          <li>不可压缩量子流体的概念</li>
          <li>拓扑量子态的早期例子</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>2. Laughlin波函数</h2>
      <p>Laughlin提出了描述分数量子霍尔态的精确多体波函数：</p>
      
      <div class="formula-block">
        Ψ<sub>m</sub>(z<sub>1</sub>, z<sub>2</sub>, ..., z<sub>N</sub>) = ∏<sub>i&lt;j</sub> (z<sub>i</sub> - z<sub>j</sub>)<sup>m</sup> e<sup>-∑<sub>k</sub>|z<sub>k</sub>|²/4l<sub>B</sub>²</sup>
      </div>
      
      <div class="parameter-grid">
        <div class="parameter-card">
          <h4>复坐标表示</h4>
          <div class="formula-block">
            z<sub>i</sub> = x<sub>i</sub> + iy<sub>i</sub>
          </div>
          <p>电子位置的复数表示</p>
        </div>
        
        <div class="parameter-card">
          <h4>磁长度</h4>
          <div class="formula-block">
            l<sub>B</sub> = √(ℏ/eB)
          </div>
          <p>磁场中的特征长度尺度</p>
        </div>
        
        <div class="parameter-card">
          <h4>奇数参数</h4>
          <div class="formula-block">
            m = 1, 3, 5, ...
          </div>
          <p>决定填充因子：ν = 1/m</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>3. 波函数的物理性质</h2>
      
      <div class="property-grid">
        <div class="property-card">
          <h4>反对称性</h4>
          <p>当两个电子交换位置时：</p>
          <div class="formula-block">
            Ψ(..., z<sub>i</sub>, ..., z<sub>j</sub>, ...) = -Ψ(..., z<sub>j</sub>, ..., z<sub>i</sub>, ...)
          </div>
          <p>满足费米子的反对称要求</p>
        </div>
        
        <div class="property-card">
          <h4>零点结构</h4>
          <p>当两个电子重合时波函数为零：</p>
          <div class="formula-block">
            Ψ → 0 当 z<sub>i</sub> → z<sub>j</sub>
          </div>
          <p>零点的阶数为m，体现强关联效应</p>
        </div>
        
        <div class="property-card">
          <h4>解析性质</h4>
          <p>波函数是复坐标的解析函数</p>
          <div class="formula-block">
            ∂Ψ/∂z̄<sub>i</sub> = 0
          </div>
          <p>对应最低Landau能级的约束</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>4. 能隙和激发</h2>
      
      <div class="excitation-analysis">
        <h3>准粒子激发</h3>
        <p>Laughlin态具有有限的能隙，激发包括：</p>
        
        <div class="excitation-types">
          <div class="excitation-card">
            <h4>准电子</h4>
            <div class="formula-block">
              Ψ<sub>qe</sub> ∝ ∏<sub>i</sub>(z<sub>i</sub> - η) Ψ<sub>m</sub>
            </div>
            <ul>
              <li>电荷：+e/m</li>
              <li>统计：阿贝尔任意子</li>
              <li>能隙：Δ<sub>qe</sub> ∝ e²/4πεl<sub>B</sub></li>
            </ul>
          </div>
          
          <div class="excitation-card">
            <h4>准空穴</h4>
            <div class="formula-block">
              Ψ<sub>qh</sub> ∝ ∏<sub>i</sub>∂/∂z<sub>i</sub> Ψ<sub>m</sub>
            </div>
            <ul>
              <li>电荷：-e/m</li>
              <li>统计：阿贝尔任意子</li>
              <li>能隙：Δ<sub>qh</sub> ∝ e²/4πεl<sub>B</sub></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>5. 等离子体类比</h2>
      
      <div class="plasma-analogy">
        <h3>二维一元等离子体</h3>
        <p>Laughlin波函数可以理解为二维一元等离子体的配分函数：</p>
        
        <div class="formula-block">
          |Ψ<sub>m</sub>|² ∝ e<sup>-βH<sub>eff</sub></sup>
        </div>
        
        <div class="effective-hamiltonian">
          <h4>有效哈密顿量</h4>
          <div class="formula-block">
            H<sub>eff</sub> = -2m ∑<sub>i&lt;j</sub> ln|z<sub>i</sub> - z<sub>j</sub>| + ∑<sub>i</sub>|z<sub>i</sub>|²/2l<sub>B</sub>²
          </div>
          
          <div class="terms-explanation">
            <div class="term-card">
              <h5>对数相互作用</h5>
              <p>电子间的有效排斥相互作用</p>
            </div>
            <div class="term-card">
              <h5>约束势</h5>
              <p>磁场产生的谐振子势</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>6. 关联函数和结构因子</h2>
      
      <div class="correlation-analysis">
        <h3>径向分布函数</h3>
        <p>描述电子间的空间关联：</p>
        
        <div class="formula-block">
          g(r) = ⟨∑<sub>i≠j</sub> δ(r - |r<sub>i</sub> - r<sub>j</sub>|)⟩ / ρ²
        </div>
        
        <div class="correlation-properties">
          <div class="property-item">
            <h4>短程行为</h4>
            <div class="formula-block">
              g(r) ∝ r<sup>2m</sup> (r → 0)
            </div>
            <p>体现强关联的排斥效应</p>
          </div>
          
          <div class="property-item">
            <h4>长程行为</h4>
            <div class="formula-block">
              g(r) → 1 (r → ∞)
            </div>
            <p>远距离趋向均匀分布</p>
          </div>
        </div>
        
        <h3>静态结构因子</h3>
        <div class="formula-block">
          S(q) = 1 + ρ ∫ d²r e<sup>iq·r</sup>[g(r) - 1]
        </div>
      </div>
    </div>

    <div class="section">
      <h2>7. 拓扑性质</h2>
      
      <div class="topology-analysis">
        <h3>Chern数</h3>
        <p>Laughlin态的拓扑不变量：</p>
        
        <div class="formula-block">
          C = m
        </div>
        
        <div class="topological-properties">
          <div class="topo-card">
            <h4>霍尔电导</h4>
            <div class="formula-block">
              σ<sub>xy</sub> = C × e²/h = m × e²/h
            </div>
            <p>量子化的横向电导</p>
          </div>
          
          <div class="topo-card">
            <h4>边缘态</h4>
            <p>拓扑保护的手征边缘模式</p>
            <ul>
              <li>无能隙的边缘激发</li>
              <li>单向传播</li>
              <li>拓扑保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>8. 数值验证</h2>
      
      <div class="numerical-results">
        <h3>精确对角化</h3>
        <p>小系统的数值计算证实了Laughlin态的性质：</p>
        
        <div class="results-grid">
          <div class="result-card">
            <h4>基态重叠</h4>
            <div class="formula-block">
              |⟨Ψ<sub>exact</sub>|Ψ<sub>Laughlin</sub>⟩|² &gt; 0.99
            </div>
            <p>与精确基态的高重叠度</p>
          </div>
          
          <div class="result-card">
            <h4>能隙估计</h4>
            <div class="formula-block">
              Δ ≈ 0.1 × e²/4πεl<sub>B</sub>
            </div>
            <p>有限的激发能隙</p>
          </div>
          
          <div class="result-card">
            <h4>准粒子性质</h4>
            <p>数值计算确认了：</p>
            <ul>
              <li>分数电荷</li>
              <li>任意子统计</li>
              <li>有限寿命</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>9. 实验观测</h2>
      
      <div class="experimental-evidence">
        <h3>关键实验结果</h3>
        
        <div class="experiment-grid">
          <div class="exp-card">
            <h4>霍尔电阻平台</h4>
            <div class="formula-block">
              ρ<sub>xy</sub> = h/νe² = 3h/e²
            </div>
            <p>ν = 1/3处的精确量子化</p>
          </div>
          
          <div class="exp-card">
            <h4>纵向电阻</h4>
            <div class="formula-block">
              ρ<sub>xx</sub> → 0
            </div>
            <p>不可压缩流体的证据</p>
          </div>
          
          <div class="exp-card">
            <h4>激活能隙</h4>
            <div class="formula-block">
              ρ<sub>xx</sub> ∝ e<sup>-Δ/2k<sub>B</sub>T</sup>
            </div>
            <p>温度依赖的激活行为</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>10. 理论意义和影响</h2>
      
      <div class="significance-analysis">
        <h3>理论贡献</h3>
        
        <div class="contribution-grid">
          <div class="contrib-card">
            <h4>强关联物理</h4>
            <ul>
              <li>精确可解的强关联系统</li>
              <li>多体波函数的构造方法</li>
              <li>关联液体的概念</li>
            </ul>
          </div>
          
          <div class="contrib-card">
            <h4>拓扑量子态</h4>
            <ul>
              <li>拓扑序的早期例子</li>
              <li>任意子统计的实现</li>
              <li>拓扑量子计算的基础</li>
            </ul>
          </div>
          
          <div class="contrib-card">
            <h4>场论方法</h4>
            <ul>
              <li>Chern-Simons理论</li>
              <li>复合费米子图像</li>
              <li>边缘态的共形场论</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>11. 推广和发展</h2>
      
      <div class="extensions">
        <h3>理论推广</h3>
        
        <div class="extension-grid">
          <div class="ext-card">
            <h4>层次态</h4>
            <p>更复杂填充因子的分数量子霍尔态</p>
            <div class="formula-block">
              ν = p/(2ps + 1)
            </div>
          </div>
          
          <div class="ext-card">
            <h4>非阿贝尔态</h4>
            <p>Moore-Read态和其他非阿贝尔态</p>
            <ul>
              <li>ν = 5/2态</li>
              <li>拓扑量子计算</li>
            </ul>
          </div>
          
          <div class="ext-card">
            <h4>多层系统</h4>
            <p>双层和多层量子霍尔系统</p>
            <ul>
              <li>层间相干</li>
              <li>激子凝聚</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-box">
      <h3>本节要点</h3>
      <ul>
        <li>Laughlin波函数是分数量子霍尔态的精确描述</li>
        <li>波函数体现了强电子关联和拓扑性质</li>
        <li>等离子体类比提供了物理直观</li>
        <li>理论预言得到了精确的实验验证</li>
        <li>为拓扑量子态理论奠定了基础</li>
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

.parameter-grid, .property-grid, .excitation-types, .results-grid, .experiment-grid, .contribution-grid, .extension-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.parameter-card, .property-card, .excitation-card, .result-card, .exp-card, .contrib-card, .ext-card, .topo-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.excitation-analysis, .plasma-analogy, .correlation-analysis, .topology-analysis, .numerical-results, .experimental-evidence, .significance-analysis, .extensions {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.effective-hamiltonian {
  background: #f1f2f6;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.terms-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.term-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #e74c3c;
}

.correlation-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #27ae60;
}

.topological-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
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
  
  .parameter-grid, .property-grid, .excitation-types, .results-grid, .experiment-grid, .contribution-grid, .extension-grid {
    grid-template-columns: 1fr;
  }
  
  .correlation-properties, .topological-properties {
    grid-template-columns: 1fr;
  }
  
  .terms-explanation {
    grid-template-columns: 1fr;
  }
}
</style>