<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.2.2 费米场</h1>
      <p class="chapter-subtitle">Fermionic Fields</p>
    </div>

    <div class="content-section">
      <h2>基本概念</h2>
      <p>费米场描述费米子系统，遵循费米-狄拉克统计。费米场的反对易性质导致了泡利不相容原理，这是理解电子系统和固体物理的基础。</p>
      
      <div class="concept-box">
        <h3>费米场的特性</h3>
        <ul>
          <li><strong>反对易关系</strong>：费米场算符满足反对易关系</li>
          <li><strong>泡利不相容原理</strong>：同一量子态最多只能被一个费米子占据</li>
          <li><strong>费米海</strong>：基态形成填满的费米海</li>
          <li><strong>Grassmann变量</strong>：路径积分中使用反对易的Grassmann变量</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>场算符与反对易关系</h2>
      
      <div class="formula-section">
        <h3>费米场算符</h3>
        <p>费米场算符 $\hat{\psi}(x)$ 和其厄米共轭 $\hat{\psi}^\dagger(x)$满足反对易关系：</p>
        <div class="formula-block">$$\{\hat{\psi}(x), \hat{\psi}^\dagger(y)\} = \delta^3(x - y)$$</div> <div class="formula-block">$$\{\hat{\psi}(x), \hat{\psi}(y)\} = \{\hat{\psi}^\dagger(x), \hat{\psi}^\dagger(y)\} = 0$$</div>
      </div>

      <div class="formula-section">
        <h3>产生湮灭算符表示</h3>
        <p>在动量表示中，费米场算符展开为：</p> <div class="formula-block">$$\hat{\psi}(x) = \sum_k u_k(x) \hat{c}_k + v_k(x) \hat{d}_k^\dagger$$</div>
        <p>其中产生湮灭算符满足：</p> <div class="formula-block">$$\{\hat{c}_k, \hat{c}_{k'}^\dagger\} = \delta_{k,k'}, \quad \{\hat{c}_k, \hat{c}_{k'}\} = 0$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>Grassmann路径积分</h2>
      
      <div class="grassmann-section">
        <h3>Grassmann变量</h3><p>费米场的路径积分使用反对易的Grassmann变量$\psi, \bar{\psi}$：</p>
        <div class="formula-block">$$\psi_i \psi_j = -\psi_j \psi_i, \quad \psi_i^2 = 0$$</div>
        
        <p>Grassmann积分的性质：</p> <div class="formula-block">$$\int d\psi = 0, \quad \int d\psi \psi = 1$$</div>
      </div>

      <div class="grassmann-section">
        <h3>费米场路径积分</h3>
        <p>配分函数的路径积分表示：</p> <div class="formula-block">$$Z = \int \mathcal{D}\bar{\psi} \mathcal{D}\psi \exp\left(-\frac{1}{\hbar} S_E[\bar{\psi}, \psi]\right)$$</div>
        
        <p>欧几里得作用量：</p> <div class="formula-block">$$S_E = \int_0^\beta d\tau \int d^3x \left[ \bar{\psi} \frac{\partial \psi}{\partial \tau} + H[\bar{\psi}, \psi] \right]$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>自由费米场</h2>
      
      <div class="free-fermion-section">
        <h3>自由费米子哈密顿量</h3>
        <p>自由费米子的哈密顿量：</p> <div class="formula-block">$$H = \int d^3x \bar{\psi}(x) \left( -i\gamma^\mu \partial_\mu + m \right) \psi(x)$$</div>
        
        <p>在非相对论极限下：</p> <div class="formula-block">$$H = \int d^3x \psi^\dagger(x) \left( \frac{-\nabla^2}{2m} - \mu \right) \psi(x)$$</div>
      </div>

      <div class="free-fermion-section">
        <h3>费米海与激发</h3><p>基态费米海：所有$k < k_F$的态被占据</p>
        <div class="formula-block">$$k_F = (3\pi^2 n)^{1/3}$$</div>
        
        <p>准粒子激发：</p> <div class="formula-block">$$E_k = \frac{k^2}{2m} - \mu \approx v_F(|k| - k_F)$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>相互作用费米系统</h2>
      
      <div class="interaction-grid">
        <div class="interaction-card">
          <h3>Hubbard模型</h3>
          <p>格点上的费米子相互作用：</p> <div class="formula-block">$$H = -t \sum_{\langle i,j \rangle, \sigma} (\hat{c}_{i\sigma}^\dagger \hat{c}_{j\sigma} + \text{h.c.}) + U \sum_i \hat{n}_{i\uparrow} \hat{n}_{i\downarrow}$$</div>
          <p>描述强关联电子系统。</p>
        </div>

        <div class="interaction-card">
          <h3>Jellium模型</h3>
          <p>均匀背景中的电子气：</p> <div class="formula-block">$$H = \sum_k \epsilon_k \hat{c}_k^\dagger \hat{c}_k + \frac{1}{2V} \sum_{k,k',q} V_q \hat{c}_{k+q}^\dagger \hat{c}_{k'-q}^\dagger \hat{c}_{k'} \hat{c}_k$$</div><p>其中$V_q = \frac{4\pi e^2}{q^2}$是库仑相互作用。</p>
        </div>

        <div class="interaction-card">
          <h3>BCS模型</h3>
          <p>超导配对相互作用：</p>
          <div class="formula-block">$$H = \sum_{k,\sigma} \epsilon_k \hat{c}_{k\sigma}^\dagger \hat{c}_{k\sigma} + \sum_{k,k'} V_{kk'} \hat{c}_{k\uparrow}^\dagger \hat{c}_{-k\downarrow}^\dagger \hat{c}_{-k'\downarrow} \hat{c}_{k'\uparrow}$$</div>
          <p>描述Cooper对形成。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>费米液体理论</h2>
      
      <div class="fermi-liquid-section">
        <h3>Landau费米液体理论</h3>
        <p>准粒子概念：相互作用费米子系统可以用准粒子描述</p>
        
        <div class="quasiparticle-properties">
          <h4>准粒子性质</h4>
          <ul><li>准粒子寿命：$\tau \propto 1/(\epsilon - \epsilon_F)^2$</li><li>有效质量：$m^* = k_F / v_F^*$</li><li>费米液体参数：$F_l^s, F_l^a$</li>
          </ul>
        </div>

        <div class="formula-block">$$\epsilon_{k\sigma} = \epsilon_k^0 + \sum_{k'\sigma'} f_{k\sigma,k'\sigma'} \delta n_{k'\sigma'}$$</div>
      </div>

      <div class="fermi-liquid-section">
        <h3>输运性质</h3>
        <p>费米液体的输运性质：</p>
        
        <div class="transport-grid">
          <div class="transport-item">
            <h4>电阻率</h4> <div class="formula-block">$$\rho(T) = \rho_0 + AT^2$$</div>
          </div>
          
          <div class="transport-item">
            <h4>比热</h4> <div class="formula-block">$$C_V = \gamma T = \frac{\pi^2}{3} k_B^2 N(0) T$$</div>
          </div>
          
          <div class="transport-item">
            <h4>磁化率</h4> <div class="formula-block">$$\chi = \frac{N(0) \mu_B^2}{1 + F_0^a}$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>计算方法</h2>
      
      <div class="methods-section">
        <div class="method-item">
          <h3>Wick定理</h3>
          <p>费米场的Wick定理用于计算关联函数：</p> <div class="formula-block">$$\langle T \psi(x_1) \psi(x_2) \cdots \rangle = \sum_{\text{pairings}} (\pm) \prod \langle T \psi(x_i) \psi(x_j) \rangle$$</div>
          <p>符号由费米子交换次数决定。</p>
        </div>

        <div class="method-item">
          <h3>费曼图技术</h3>
          <p>图形化表示微扰展开：</p>
          <ul>
            <li>实线：费米子传播子</li>
            <li>波浪线：相互作用线</li>
            <li>顶点：相互作用顶点</li>
            <li>闭合费米子环：额外(-1)因子</li>
          </ul>
        </div>

        <div class="method-item">
          <h3>格林函数方法</h3>
          <p>单粒子格林函数：</p> <div class="formula-block">$$G(k,\omega) = \frac{1}{\omega - \epsilon_k - \Sigma(k,\omega)}$$</div><p>其中$\Sigma(k,\omega)$是自能。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子相变</h2>
      
      <div class="phase-transition-section">
        <h3>Mott金属-绝缘体相变</h3>
        <p>强关联导致的相变：</p>
        
        <div class="mott-transition">
          <div class="phase-description">
            <h4>金属相</h4><p>$U/t$较小时，电子可以自由跃迁</p>
            <ul>
              <li>有限态密度在费米面</li>
              <li>金属导电性</li>
              <li>费米液体行为</li>
            </ul>
          </div>
          
          <div class="phase-description">
            <h4>Mott绝缘体相</h4><p>$U/t$较大时，电子被局域化</p>
            <ul>
              <li>费米面处有能隙</li>
              <li>绝缘体行为</li>
              <li>局域磁矩</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="phase-transition-section">
        <h3>超导相变</h3>
        <p>BCS理论描述的相变：</p>
        <div class="formula-block">$$\Delta = \Delta_0 \tanh\left(\frac{1.74\sqrt{T_c - T}}{T_c}\right)$$</div>
        
        <div class="superconductor-properties">
          <h4>超导态性质</h4>
          <ul><li>能隙：$2\Delta$</li><li>相干长度：$\xi = \hbar v_F / \pi \Delta$</li><li>穿透深度：$\lambda$</li>
            <li>Meissner效应</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测</h2>
      
      <div class="experimental-section">
        <div class="experiment-grid">
          <div class="experiment-card">
            <h3>角分辨光电子谱(ARPES)</h3>
            <p>直接测量费米面和能带结构：</p>
            <ul>
              <li>费米面形状</li>
              <li>准粒子色散</li>
              <li>能隙结构</li>
              <li>自能效应</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h3>量子振荡</h3>
            <p>磁场中的de Haas-van Alphen效应：</p>
            <ul>
              <li>费米面面积</li>
              <li>有效质量</li>
              <li>散射时间</li>
              <li>g因子</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h3>输运测量</h3>
            <p>电阻率和霍尔效应：</p>
            <ul>
              <li>载流子密度</li>
              <li>迁移率</li>
              <li>散射机制</li>
              <li>相变信号</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>高级主题</h2>
      
      <div class="advanced-topics">
        <div class="topic-card">
          <h3>非费米液体</h3>
          <p>偏离费米液体行为的系统：</p>
          <ul>
            <li>边际费米液体</li>
            <li>Luttinger液体</li>
            <li>奇异金属</li>
            <li>量子临界点</li>
          </ul>
        </div>

        <div class="topic-card">
          <h3>拓扑费米子</h3>
          <p>具有拓扑性质的费米系统：</p>
          <ul>
            <li>Weyl费米子</li>
            <li>Dirac费米子</li>
            <li>Majorana费米子</li>
            <li>拓扑超导体</li>
          </ul>
        </div>

        <div class="topic-card">
          <h3>强关联系统</h3>
          <p>超越微扰论的方法：</p>
          <ul>
            <li>动力学平均场理论</li>
            <li>量子蒙特卡罗</li>
            <li>密度矩阵重整化群</li>
            <li>张量网络方法</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论基础</h3>
          <ul>
            <li>费米场反对易关系</li>
            <li>Grassmann路径积分</li>
            <li>泡利不相容原理</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>费米海形成</li>
            <li>准粒子激发</li>
            <li>量子相变</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>理论方法</h3>
          <ul>
            <li>费米液体理论</li>
            <li>费曼图技术</li>
            <li>格林函数方法</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>实验技术</h3>
          <ul>
            <li>ARPES测量</li>
            <li>量子振荡</li>
            <li>输运性质</li>
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

.formula-section, .grassmann-section, .free-fermion-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3, .grassmann-section h3, .free-fermion-section h3 {
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

.interaction-grid, .experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.interaction-card, .experiment-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.interaction-card:hover, .experiment-card:hover {
  transform: translateY(-5px);
}

.interaction-card h3, .experiment-card h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.fermi-liquid-section {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;
}

.quasiparticle-properties, .superconductor-properties {
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.quasiparticle-properties h4, .superconductor-properties h4 {
  color: #d68910;
  margin-bottom: 10px;
}

.quasiparticle-properties ul, .superconductor-properties ul {
  padding-left: 20px;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.transport-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.transport-item h4 {
  color: #d68910;
  margin-bottom: 8px;
}

.methods-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.method-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
}

.method-item h3 {
  color: #27ae60;
  margin-bottom: 15px;
}

.method-item ul {
  padding-left: 20px;
}

.method-item li {
  margin: 8px 0;
}

.phase-transition-section {
  background: #f0f8ff;
  border: 1px solid #b3d9ff;
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;
}

.mott-transition {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.phase-description {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.phase-description h4 {
  color: #2980b9;
  margin-bottom: 10px;
}

.phase-description ul {
  padding-left: 20px;
}

.experimental-section {
  margin: 25px 0;
}

.advanced-topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.topic-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #9b59b6;
  transition: transform 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
}

.topic-card h3 {
  color: #9b59b6;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.topic-card ul {
  padding-left: 20px;
}

.topic-card li {
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
  
  .interaction-grid, .experiment-grid {
    grid-template-columns: 1fr;
  }
  
  .methods-section {
    grid-template-columns: 1fr;
  }
  
  .advanced-topics {
    grid-template-columns: 1fr;
  }
  
  .transport-grid {
    grid-template-columns: 1fr;
  }
  
  .mott-transition {
    grid-template-columns: 1fr;
  }
}
</style>