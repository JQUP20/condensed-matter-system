<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.3.2 Coulomb电子气</h1>
      <p class="chapter-subtitle">Coulomb Electron Gas</p>
    </div>

    <div class="content-section">
      <h2>基本理论框架</h2>
      <p>Coulomb电子气是研究金属中电子相互作用的基本模型。它考虑了电子间的长程Coulomb相互作用，是理解金属性质的重要理论基础。</p>
      
      <div class="concept-box">
        <h3>Coulomb电子气的关键特征</h3>
        <ul>
          <li><strong>长程相互作用</strong>：$V(r) = e^2/(4\pi\epsilon r)$</li>
          <li><strong>电荷中性</strong>：正离子背景补偿电子电荷</li>
          <li><strong>等离子体振荡</strong>：集体激发模式</li>
          <li><strong>屏蔽效应</strong>：有效相互作用的修正</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>哈密顿量与基本参数</h2>
      
      <div class="formula-section">
        <h3>Coulomb电子气哈密顿量</h3>
        <p>完整的哈密顿量包括动能和相互作用项：</p>
        <div class="formula-block">$$H = \sum_{k,\sigma} \epsilon_k \hat{c}_{k\sigma}^\dagger \hat{c}_{k\sigma} + \frac{1}{2} \sum_{k,k',q \neq 0} V_q \hat{c}_{k+q,\sigma}^\dagger \hat{c}_{k'-q,\sigma'}^\dagger \hat{c}_{k',\sigma'} \hat{c}_{k,\sigma}$$</div>
        <p>其中Coulomb相互作用的Fourier变换：</p> <div class="formula-block">$$V_q = \frac{e^2}{4\pi\epsilon q^2}$$</div>
      </div>

      <div class="formula-section">
        <h3>无量纲参数</h3>
        <p>系统的重要无量纲参数：</p> <div class="formula-block">$$r_s = \frac{1}{(4\pi n/3)^{1/3} a_B}, \quad a_B = \frac{4\pi\epsilon\hbar^2}{me^2}$$</div><p>其中$r_s$是Wigner-Seitz半径与Bohr半径的比值，决定了相互作用强度。</p>
        
        <div class="parameter-regimes">
          <h4>不同参数区间</h4>
          <ul><li><strong>高密度极限</strong>：$r_s \ll 1$，动能主导</li><li><strong>中等密度</strong>：$r_s \sim 1$，相互作用重要</li><li><strong>低密度极限</strong>：$r_s \gg 1$，相互作用主导</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Hartree-Fock近似</h2>
      
      <div class="hartree-fock-section">
        <h3>平均场处理</h3>
        <p>Hartree-Fock近似将相互作用分解为直接项和交换项：</p>
        <div class="formula-block">$$E_{\text{HF}} = E_{\text{kinetic}} + E_{\text{Hartree}} + E_{\text{Fock}}$$</div>
        
        <div class="energy-terms">
          <div class="energy-card">
            <h4>Hartree能量（直接项）</h4> <div class="formula-block">$$E_{\text{Hartree}} = \frac{1}{2} \sum_{k,k'} V_{k-k'} n_k n_{k'}$$</div>
            <p>描述电子密度的自相互作用</p>
          </div>

          <div class="energy-card">
            <h4>Fock能量（交换项）</h4> <div class="formula-block">$$E_{\text{Fock}} = -\frac{1}{2} \sum_{k,k'} V_{k-k'} n_k n_{k'} \delta_{\sigma,\sigma'}$$</div>
            <p>来自Pauli不相容原理的交换效应</p>
          </div>
        </div>
      </div>

      <div class="hartree-fock-section">
        <h3>交换能计算</h3>
        <p>每个电子的交换能：</p> <div class="formula-block">$$\epsilon_x = -\frac{e^2}{4\pi\epsilon} \frac{3}{4\pi} k_F = -\frac{0.458}{r_s} \text{ Ry}$$</div>
        
        <p>总交换能密度：</p> <div class="formula-block">$$e_x = -\frac{3}{4} \frac{e^2 k_F}{\pi \epsilon} = -\frac{0.458}{r_s} \text{ Ry/electron}$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>关联效应与多体微扰论</h2>
      
      <div class="correlation-section">
        <h3>RPA近似</h3>
        <p>随机相位近似（RPA）考虑了环图贡献：</p> <div class="formula-block">$$\Pi_{\text{RPA}}(q,\omega) = \frac{\Pi_0(q,\omega)}{1 - V_q \Pi_0(q,\omega)}$$</div>
        
        <div class="rpa-properties">
          <h4>RPA的物理意义</h4>
          <ul>
            <li>包含了所有阶的环图</li>
            <li>描述集体激发（等离子体子）</li>
            <li>满足连续性方程</li>
            <li>给出正确的长波长行为</li>
          </ul>
        </div>
      </div>

      <div class="correlation-section">
        <h3>关联能</h3>
        <p>超越Hartree-Fock的关联能修正：</p> <div class="formula-block">$$e_c = A \ln r_s + B + C r_s \ln r_s + D r_s + O(r_s^{3/2})$$</div>
        
        <div class="correlation-coefficients">
          <h4>高密度展开系数</h4>
          <ul><li>$A = 0.031$Ry</li><li>$B = -0.048$Ry</li><li>$C = 0.0020$Ry</li><li>$D = -0.0116$Ry</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>等离子体振荡</h2>
      
      <div class="plasmon-section">
        <h3>经典等离子体频率</h3>
        <p>电子气的集体振荡频率：</p>
        <div class="formula-block">$$\omega_p = \sqrt{\frac{4\pi n e^2}{m\epsilon}} = \sqrt{\frac{4\pi e^2}{m\epsilon}} \left(\frac{3n}{4\pi}\right)^{1/6} k_F^{1/2}$$</div>
        
        <div class="plasmon-properties">
          <h4>等离子体子的性质</h4>
          <ul><li>长波长极限：$\omega \approx \omega_p$</li><li>有限波矢修正：$\omega^2 = \omega_p^2 + \frac{3}{5}v_F^2 q^2$</li><li>Landau阻尼：$q > 2k_F$时出现</li>
            <li>声学等离子体子：低频分支</li>
          </ul>
        </div>
      </div>

      <div class="plasmon-section">
        <h3>介电函数</h3>
        <p>RPA介电函数：</p>
        <div class="formula-block">$$\epsilon(q,\omega) = 1 - V_q \Pi_0(q,\omega)$$</div>
        
        <p>长波长极限：</p> <div class="formula-block">$$\epsilon(q \to 0, \omega) = 1 - \frac{\omega_p^2}{\omega^2}$$</div>
        
        <div class="dielectric-features">
          <h4>介电函数的特征</h4>
          <ul>
            <li>零点对应等离子体子模式</li>
            <li>极点对应屏蔽长度</li>
            <li>虚部描述Landau阻尼</li>
            <li>静态极限给出Thomas-Fermi屏蔽</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>屏蔽效应</h2>
      
      <div class="screening-section">
        <h3>Thomas-Fermi屏蔽</h3>
        <p>静态屏蔽势：</p> <div class="formula-block">$$V_{\text{eff}}(r) = \frac{e^2}{4\pi\epsilon r} e^{-q_{\text{TF}} r}$$</div>
        
        <p>Thomas-Fermi波矢：</p> <div class="formula-block">$$q_{\text{TF}}^2 = \frac{4\pi e^2}{\epsilon} N(0) = \frac{6\pi n e^2}{\epsilon \epsilon_F}$$</div>
      </div>

      <div class="screening-section">
        <h3>动态屏蔽</h3>
        <p>频率依赖的屏蔽势：</p> <div class="formula-block">$$V_{\text{eff}}(q,\omega) = \frac{V_q}{\epsilon(q,\omega)}$$</div>
        
        <div class="screening-regimes">
          <h4>不同屏蔽区间</h4>
          <div class="regime-grid">
            <div class="regime-card">
              <h5>静态屏蔽</h5><p>$\omega \ll v_F q$</p>
              <p>Thomas-Fermi行为</p>
            </div>
            <div class="regime-card">
              <h5>动态屏蔽</h5><p>$\omega \sim v_F q$</p>
              <p>Lindhard函数</p>
            </div>
            <div class="regime-card">
              <h5>等离子体区间</h5><p>$\omega \sim \omega_p$</p>
              <p>集体激发主导</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>费米液体理论</h2>
      
      <div class="fermi-liquid-section">
        <h3>Landau费米液体参数</h3>
        <p>准粒子相互作用参数：</p>
        <div class="formula-block">$$f_l = \frac{1}{N(0)} \sum_m Y_l^m(\hat{k}) f(\hat{k},\hat{k}') Y_l^{m*}(\hat{k}')$$</div>
        
        <div class="landau-parameters">
          <h4>重要的Landau参数</h4>
          <ul><li>$F_0^s$：压缩性相关</li><li>$F_0^a$：磁化率相关</li><li>$F_1^s$：有效质量相关</li><li>$F_1^a$：g因子相关</li>
          </ul>
        </div>
      </div>

      <div class="fermi-liquid-section">
        <h3>物理量的重整化</h3>
        
        <div class="renormalization-grid">
          <div class="renorm-card">
            <h4>有效质量</h4>
            <div class="formula-block">$$\frac{m^*}{m} = 1 + \frac{F_1^s}{3}$$</div>
          </div>

          <div class="renorm-card">
            <h4>压缩性</h4> <div class="formula-block">$$\frac{\kappa}{\kappa_0} = \frac{1}{1 + F_0^s}$$</div>
          </div>

          <div class="renorm-card">
            <h4>磁化率</h4> <div class="formula-block">$$\frac{\chi}{\chi_0} = \frac{1 + F_0^a/3}{1 + F_0^a}$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子蒙特卡罗结果</h2>
      
      <div class="qmc-section">
        <h3>基态能量</h3>
        <p>精确的量子蒙特卡罗计算给出：</p> <div class="formula-block">$$e(r_s) = e_{\text{kinetic}} + e_{\text{exchange}} + e_{\text{correlation}}$$</div>
        
        <div class="qmc-results">
          <h4>不同密度区间的结果</h4>
          <div class="density-regimes">
            <div class="regime-item"><h5>高密度 ($r_s < 1$)</h5>
              <p>微扰论有效</p><p>$e_c \propto r_s \ln r_s$</p>
            </div>
            <div class="regime-item"><h5>中等密度 ($1 < r_s < 5$)</h5>
              <p>液体相稳定</p>
              <p>强关联效应</p>
            </div>
            <div class="regime-item"><h5>低密度 ($r_s > 5$)</h5>
              <p>Wigner晶体相</p>
              <p>相互作用主导</p>
            </div>
          </div>
        </div>
      </div>

      <div class="qmc-section">
        <h3>相变与临界点</h3>
        <p>液体-固体相变的临界密度：</p>
        <div class="formula-block">$$r_s^c \approx 5.3 \pm 0.1$$</div>
        
        <div class="phase-diagram">
          <h4>相图特征</h4>
          <ul>
            <li>一级相变</li>
            <li>密度不连续跳跃</li>
            <li>晶格结构：体心立方</li>
            <li>量子涨落效应</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测</h2>
      
      <div class="experimental-section">
        <h3>金属中的验证</h3>
        
        <div class="experiment-grid">
          <div class="experiment-card">
            <h3>比热测量</h3>
            <p>电子比热系数：</p> <div class="formula-block">$$\gamma = \frac{\pi^2}{3} k_B^2 N^*(0)$$</div>
            <p>反映有效质量增强</p>
          </div>

          <div class="experiment-card">
            <h3>磁化率测量</h3>
            <p>Pauli磁化率：</p> <div class="formula-block">$$\chi = \mu_B^2 N^*(0) \frac{1 + F_0^a/3}{1 + F_0^a}$$</div>
            <p>Wilson比值检验</p>
          </div>

          <div class="experiment-card">
            <h3>等离子体子观测</h3>
            <p>能量损失谱：</p>
            <ul>
              <li>电子能量损失谱（EELS）</li>
              <li>光学反射谱</li>
              <li>X射线散射</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="experimental-section">
        <h3>冷原子系统</h3>
        <p>人工实现的Coulomb电子气：</p>
        
        <div class="cold-atom-features">
          <h4>冷原子优势</h4>
          <ul>
            <li>可调相互作用强度</li>
            <li>清洁的实验环境</li>
            <li>直接观测关联函数</li>
            <li>验证理论预言</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与扩展</h2>
      
      <div class="applications-section">
        <div class="application-card">
          <h3>密度泛函理论</h3>
          <p>交换关联泛函的构建：</p>
          <ul>
            <li>局域密度近似（LDA）</li>
            <li>广义梯度近似（GGA）</li>
            <li>杂化泛函</li>
            <li>精确交换</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>强关联系统</h3>
          <p>扩展到其他模型：</p>
          <ul>
            <li>Hubbard模型</li>
            <li>Anderson杂质模型</li>
            <li>Kondo晶格</li>
            <li>重费米子系统</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>量子等离子体</h3>
          <p>极端条件下的应用：</p>
          <ul>
            <li>白矮星内部</li>
            <li>惯性约束聚变</li>
            <li>温稠密物质</li>
            <li>行星内核</li>
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
            <li>长程Coulomb相互作用</li>
            <li>电荷中性条件</li><li>无量纲参数$r_s$</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>理论方法</h3>
          <ul>
            <li>Hartree-Fock近似</li>
            <li>RPA理论</li>
            <li>费米液体理论</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>集体激发</h3>
          <ul>
            <li>等离子体振荡</li>
            <li>屏蔽效应</li>
            <li>Landau阻尼</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>实验验证</h3>
          <ul>
            <li>金属性质</li>
            <li>等离子体子观测</li>
            <li>冷原子实现</li>
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

.formula-section, .hartree-fock-section, .correlation-section, .plasmon-section, .screening-section, .fermi-liquid-section, .qmc-section, .experimental-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3, .hartree-fock-section h3, .correlation-section h3, .plasmon-section h3, .screening-section h3, .fermi-liquid-section h3, .qmc-section h3, .experimental-section h3 {
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

.parameter-regimes, .rpa-properties, .plasmon-properties, .dielectric-features, .landau-parameters, .phase-diagram, .cold-atom-features {
  margin: 20px 0;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.parameter-regimes h4, .rpa-properties h4, .plasmon-properties h4, .dielectric-features h4, .landau-parameters h4, .phase-diagram h4, .cold-atom-features h4 {
  color: #2980b9;
  margin-bottom: 10px;
}

.parameter-regimes ul, .rpa-properties ul, .plasmon-properties ul, .dielectric-features ul, .landau-parameters ul, .phase-diagram ul, .cold-atom-features ul {
  padding-left: 20px;
}

.energy-terms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.energy-card {
  background: #fff3cd;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ffeaa7;
}

.energy-card h4 {
  color: #d68910;
  margin-bottom: 15px;
}

.correlation-coefficients {
  margin: 20px 0;
  padding: 15px;
  background: #e8f5e8;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.correlation-coefficients h4 {
  color: #27ae60;
  margin-bottom: 10px;
}

.correlation-coefficients ul {
  padding-left: 20px;
}

.screening-regimes {
  margin: 25px 0;
}

.regime-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.regime-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #9b59b6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.regime-card h5 {
  color: #8e44ad;
  margin-bottom: 8px;
}

.renormalization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.renorm-card {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border-top: 4px solid #3498db;
  text-align: center;
}

.renorm-card h4 {
  color: #2980b9;
  margin-bottom: 15px;
}

.qmc-results {
  margin: 25px 0;
}

.density-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.regime-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.regime-item h5 {
  color: #e74c3c;
  margin-bottom: 10px;
}

.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.experiment-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #f39c12;
  transition: transform 0.3s ease;
}

.experiment-card:hover {
  transform: translateY(-5px);
}

.experiment-card h3 {
  color: #f39c12;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.experiment-card ul {
  padding-left: 20px;
}

.experiment-card li {
  margin: 8px 0;
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
  
  .energy-terms, .experiment-grid {
    grid-template-columns: 1fr;
  }
  
  .regime-grid {
    grid-template-columns: 1fr;
  }
  
  .renormalization-grid {
    grid-template-columns: 1fr;
  }
  
  .density-regimes {
    grid-template-columns: 1fr;
  }
  
  .applications-section {
    grid-template-columns: 1fr;
  }
}
</style>