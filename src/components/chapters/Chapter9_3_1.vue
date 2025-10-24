<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.3.1 自由费米子</h1>
      <p class="chapter-subtitle">Free Fermions</p>
    </div>

    <div class="content-section">
      <h2>基本理论</h2>
      <p>自由费米子系统是理解更复杂多体系统的基础。它们遵循费米-狄拉克统计，形成费米海结构，并展现出丰富的量子多体现象。</p>
      
      <div class="concept-box">
        <h3>自由费米子的关键特征</h3>
        <ul>
          <li><strong>费米海</strong>：基态中所有能量低于费米能的态被占据</li>
          <li><strong>费米面</strong>：动量空间中费米海的边界</li>
          <li><strong>准粒子激发</strong>：费米面附近的低能激发</li>
          <li><strong>Pauli阻塞</strong>：费米统计导致的相互作用抑制</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>哈密顿量与能谱</h2>
      
      <div class="formula-section">
        <h3>自由费米子哈密顿量</h3>
        <p>$d$维自由费米子系统的哈密顿量：</p>
        <div class="formula-block">$$H = \sum_{k,\sigma} \epsilon_k \hat{c}_{k\sigma}^\dagger \hat{c}_{k\sigma}$$</div>
        <p>其中单粒子能谱为：</p> <div class="formula-block">$$\epsilon_k = \frac{\hbar^2 k^2}{2m} - \mu$$</div>
      </div>

      <div class="formula-section">
        <h3>费米面与费米速度</h3>
        <p>费米动量和费米能：</p> <div class="formula-block">$$k_F = (d \Omega_d n / 2)^{1/d}, \quad \epsilon_F = \frac{\hbar^2 k_F^2}{2m}$$</div>
        <p>费米速度：</p> <div class="formula-block">$$v_F = \frac{\hbar k_F}{m} = \sqrt{\frac{2\epsilon_F}{m}}$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>热力学性质</h2>
      
      <div class="thermodynamics-grid">
        <div class="thermo-card">
          <h3>粒子数密度</h3>
          <p>有限温度下的粒子数密度：</p> <div class="formula-block">$$n = \int \frac{d^d k}{(2\pi)^d} \frac{2}{e^{(\epsilon_k - \mu)/k_B T} + 1}$$</div>
          <p>低温展开：</p> <div class="formula-block">$$n = n_0 \left[1 - \frac{\pi^2}{12}\left(\frac{k_B T}{\epsilon_F}\right)^2 + O(T^4)\right]$$</div>
        </div>

        <div class="thermo-card">
          <h3>比热</h3>
          <p>电子比热的线性温度依赖：</p> <div class="formula-block">$$C_V = \frac{\pi^2}{3} k_B^2 N(0) T = \gamma T$$</div>
          <p>其中态密度：</p> <div class="formula-block">$$N(0) = \frac{d \Omega_d k_F^{d-1}}{(2\pi)^d} \frac{m}{\hbar^2 k_F}$$</div>
        </div>

        <div class="thermo-card">
          <h3>磁化率</h3>
          <p>Pauli顺磁磁化率：</p> <div class="formula-block">$$\chi_{\text{Pauli}} = \mu_B^2 N(0)$$</div>
          <p>反磁性贡献（Landau抗磁性）：</p> <div class="formula-block">$$\chi_{\text{Landau}} = -\frac{1}{3}\chi_{\text{Pauli}}$$</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>关联函数</h2>
      
      <div class="correlation-section">
        <h3>单粒子格林函数</h3>
        <p>零温下的单粒子格林函数：</p> <div class="formula-block">$$G_0(k,\omega) = \frac{1}{\omega - \epsilon_k + i\delta \text{sgn}(\epsilon_k)}$$</div>
        
        <p>有限温度下：</p> <div class="formula-block">$$G_0(k,i\omega_n) = \frac{1}{i\omega_n - \epsilon_k}$$</div><p>其中$\omega_n = (2n+1)\pi k_B T$是费米子Matsubara频率。</p>
      </div>

      <div class="correlation-section">
        <h3>密度-密度关联函数</h3>
        <p>Lindhard函数描述密度响应：</p>
        <div class="formula-block">$$\Pi_0(q,\omega) = \sum_k \frac{f(\epsilon_k) - f(\epsilon_{k+q})}{\omega - \epsilon_{k+q} + \epsilon_k + i\delta}$$</div>
        
        <div class="lindhard-properties">
          <h4>Lindhard函数的性质</h4>
          <ul>
            <li>描述电子-空穴对激发</li><li>在$q = 2k_F$处有奇点（Kohn异常）</li>
            <li>决定屏蔽效应</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>不同维度的特性</h2>
      
      <div class="dimension-analysis">
        <div class="dimension-card">
          <h3>一维系统</h3>
          <div class="formula-block">$$N(0) = \frac{m}{\pi \hbar^2}, \quad C_V = \frac{\pi k_B^2 T}{3} \frac{m}{\hbar^2}$$</div>
          <p>特殊性质：</p>
          <ul>
            <li>费米面退化为两个点</li>
            <li>嵌套费米面</li>
            <li>Luttinger液体行为</li>
          </ul>
        </div>

        <div class="dimension-card">
          <h3>二维系统</h3> <div class="formula-block">$$N(0) = \frac{m}{2\pi \hbar^2}, \quad C_V = \frac{\pi k_B^2 T}{6} \frac{m}{\hbar^2}$$</div>
          <p>特殊性质：</p>
          <ul>
            <li>圆形费米面</li>
            <li>对数发散</li>
            <li>van Hove奇点</li>
          </ul>
        </div>

        <div class="dimension-card">
          <h3>三维系统</h3> <div class="formula-block">$$N(0) = \frac{mk_F}{2\pi^2 \hbar^2}, \quad C_V = \frac{\pi^2 k_B^2 T}{3} \frac{mk_F}{2\pi^2 \hbar^2}$$</div>
          <p>特殊性质：</p>
          <ul>
            <li>球形费米面</li>
            <li>体积效应主导</li>
            <li>经典费米液体</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>输运性质</h2>
      
      <div class="transport-section">
        <h3>电导率</h3>
        <p>Drude模型中的直流电导率：</p> <div class="formula-block">$$\sigma = \frac{ne^2\tau}{m} = \frac{e^2 N(0) v_F^2 \tau}{d}$$</div>
        
        <div class="scattering-mechanisms">
          <h4>散射机制</h4>
          <div class="scattering-grid">
            <div class="scattering-item">
              <h5>杂质散射</h5><p>$\tau^{-1} \propto n_{\text{imp}}$</p>
              <p>温度无关</p>
            </div>
            <div class="scattering-item">
              <h5>声子散射</h5><p>$\tau^{-1} \propto T$(高温)</p><p>$\tau^{-1} \propto T^5$(低温)</p>
            </div>
            <div class="scattering-item">
              <h5>电子-电子散射</h5><p>$\tau^{-1} \propto T^2$</p>
              <p>费米液体行为</p>
            </div>
          </div>
        </div>
      </div>

      <div class="transport-section">
        <h3>霍尔效应</h3>
        <p>霍尔系数：</p>
        <div class="formula-block">$$R_H = \frac{1}{ne} \langle \tau^2 \rangle / \langle \tau \rangle^2$$</div><p>对于单一散射时间：$R_H = 1/(ne)$</p>
      </div>
    </div>

    <div class="content-section">
      <h2>量子振荡</h2>
      
      <div class="quantum-oscillation-section">
        <h3>de Haas-van Alphen效应</h3>
        <p>磁场中的量子振荡：</p>
        <div class="formula-block">$$M = M_0 \cos\left(\frac{2\pi F}{B} + \phi\right) e^{-\pi/\omega_c \tau} e^{-2\pi^2 k_B T/\hbar \omega_c}$$</div>
        
        <div class="oscillation-parameters">
          <h4>振荡参数</h4>
          <ul><li>频率：$F = \hbar A_{\text{ext}} / 2\pi e$</li>
            <li>有效质量：从温度阻尼确定</li>
            <li>散射时间：从无序阻尼确定</li>
            <li>g因子：从自旋分裂确定</li>
          </ul>
        </div>
      </div>

      <div class="quantum-oscillation-section">
        <h3>Shubnikov-de Haas效应</h3>
        <p>电阻率的量子振荡：</p>
        <div class="formula-block">$$\Delta \rho = \rho_0 \cos\left(\frac{2\pi F}{B} + \phi\right) e^{-\pi/\omega_c \tau} e^{-2\pi^2 k_B T/\hbar \omega_c}$$
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验技术</h2>
      
      <div class="experimental-techniques">
        <div class="technique-grid">
          <div class="technique-card">
            <h3>ARPES</h3>
            <p>角分辨光电子谱直接测量：</p>
            <ul>
              <li>费米面形状</li>
              <li>能带色散</li>
              <li>准粒子寿命</li>
              <li>自能效应</li>
            </ul>
          </div>

          <div class="technique-card">
            <h3>量子振荡测量</h3>
            <p>磁场依赖的物理量：</p>
            <ul>
              <li>磁化强度</li>
              <li>电阻率</li>
              <li>比热</li>
              <li>热电效应</li>
            </ul>
          </div>

          <div class="technique-card">
            <h3>比热测量</h3>
            <p>低温比热分析：</p>
            <ul>
              <li>电子比热系数</li>
              <li>有效质量</li>
              <li>态密度</li>
              <li>相变信号</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与扩展</h2>
      
      <div class="applications-section">
        <div class="application-card">
          <h3>金属物理</h3>
          <p>自由电子模型的应用：</p>
          <ul>
            <li>简单金属的性质</li>
            <li>合金系统</li>
            <li>输运现象</li>
            <li>光学性质</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>半导体物理</h3>
          <p>载流子统计：</p>
          <ul>
            <li>电子和空穴</li>
            <li>掺杂效应</li>
            <li>pn结</li>
            <li>量子阱</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>冷原子系统</h3>
          <p>人工费米气体：</p>
          <ul>
            <li>光晶格中的费米子</li>
            <li>可调相互作用</li>
            <li>BEC-BCS渡越</li>
            <li>拓扑相</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>基本概念</h3>
          <ul>
            <li>费米海与费米面</li>
            <li>准粒子激发</li>
            <li>Pauli不相容原理</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>热力学性质</h3>
          <ul>
            <li>线性比热</li>
            <li>Pauli磁化率</li>
            <li>化学势</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>输运现象</h3>
          <ul>
            <li>电导率</li>
            <li>霍尔效应</li>
            <li>量子振荡</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>实验方法</h3>
          <ul>
            <li>ARPES测量</li>
            <li>磁场效应</li>
            <li>热力学测量</li>
          </ul>
        </div>
      </div>
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

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section, .correlation-section, .transport-section, .quantum-oscillation-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3, .correlation-section h3, .transport-section h3, .quantum-oscillation-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

.thermodynamics-grid, .technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.thermo-card, .technique-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.thermo-card:hover, .technique-card:hover {
  transform: translateY(-5px);
}

.thermo-card h3, .technique-card h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.lindhard-properties, .oscillation-parameters {
  margin: 20px 0;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.lindhard-properties h4, .oscillation-parameters h4 {
  color: #2980b9;
  margin-bottom: 10px;
}

.lindhard-properties ul, .oscillation-parameters ul {
  padding-left: 20px;
}

.dimension-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.dimension-card {
  background: #fff3cd;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #ffeaa7;
}

.dimension-card h3 {
  color: #d68910;
  margin-bottom: 15px;
}

.dimension-card ul {
  padding-left: 20px;
  margin-top: 15px;
}

.scattering-mechanisms {
  margin: 20px 0;
}

.scattering-mechanisms h4 {
  color: #8e44ad;
  margin-bottom: 15px;
}

.scattering-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.scattering-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #9b59b6;
}

.scattering-item h5 {
  color: #8e44ad;
  margin-bottom: 8px;
}

.experimental-techniques {
  margin: 25px 0;
}

.applications-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.application-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #27ae60;
  transition: transform 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
}

.application-card h3 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.application-card ul {
  padding-left: 20px;
}

.application-card li {
  margin: 8px 0;
}

.summary-section {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .thermodynamics-grid, .technique-grid {
    grid-template-columns: 1fr;
  }
  
  .dimension-analysis {
    grid-template-columns: 1fr;
  }
  
  .applications-section {
    grid-template-columns: 1fr;
  }
  
  .scattering-grid {
    grid-template-columns: 1fr;
  }
}
</style>