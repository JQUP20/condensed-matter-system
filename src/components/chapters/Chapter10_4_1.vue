<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.4.1 石墨烯的紧束缚模型</h1>
      <p class="chapter-subtitle">探索石墨烯的电子结构与狄拉克锥的形成机制</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>石墨烯是由碳原子组成的二维蜂窝晶格材料，具有独特的电子性质。其低能激发呈现线性色散关系，形成狄拉克锥结构，使得石墨烯中的电子表现得像无质量的狄拉克费米子。紧束缚模型为理解石墨烯的电子结构提供了重要的理论框架。</p>
          
          <p>本节将详细介绍石墨烯的晶格结构、紧束缚哈密顿量的构建、能带结构的计算，以及狄拉克点附近的低能有效理论。</p>
        </div>
      </div>

      <!-- 石墨烯的晶格结构 -->
      <div class="content-card">
        <h2 class="card-title">石墨烯的晶格结构</h2>
        <div class="card-content">
          <h3>蜂窝晶格</h3>
          <p>石墨烯具有蜂窝晶格结构，可以看作是两个三角子晶格A和B的叠加。每个碳原子有三个最近邻原子，形成六角形的蜂窝结构。</p>
          
          <div class="structure-info">
            <h4>晶格参数</h4>
            <ul>
              <li><strong>晶格常数：</strong>a = 2.46 Å</li>
              <li><strong>最近邻距离：</strong>a₀ = a/√3 = 1.42 Å</li>
              <li><strong>原胞面积：</strong>S = (3√3/2)a₀²</li>
            </ul>
          </div>

          <h3>原胞基矢</h3>
          <p>石墨烯的原胞基矢为：</p>
          <div class="formula">
            $$\mathbf{a}_1 = \frac{a}{2}(3, \sqrt{3}), \quad \mathbf{a}_2 = \frac{a}{2}(3, -\sqrt{3})$$</div>

          <h3>倒格子</h3>
          <p>对应的倒格子基矢为：</p> <div class="formula">$$\mathbf{b}_1 = \frac{2\pi}{3a}(1, \sqrt{3}), \quad \mathbf{b}_2 = \frac{2\pi}{3a}(1, -\sqrt{3})$$</div>

          <h3>高对称点</h3>
          <div class="symmetry-points">
            <div class="point-item">
              <h4>Γ点</h4>
              <p>布里渊区中心：(0, 0)</p>
            </div>
            <div class="point-item">
              <h4>K点</h4><p>狄拉克点：$\mathbf{K} = \frac{2\pi}{3a}(1, 1/\sqrt{3})$</p>
            </div>
            <div class="point-item">
              <h4>K'点</h4><p>狄拉克点：$\mathbf{K}' = \frac{2\pi}{3a}(1, -1/\sqrt{3})$</p>
            </div>
            <div class="point-item">
              <h4>M点</h4><p>边界中点：$\mathbf{M} = \frac{2\pi}{3a}(1, 0)$</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 紧束缚哈密顿量 -->
      <div class="content-card">
        <h2 class="card-title">紧束缚哈密顿量</h2>
        <div class="card-content">
          <h3>最近邻紧束缚模型</h3>
          <p>考虑每个碳原子贡献一个pz轨道电子，紧束缚哈密顿量为：</p>
          <div class="formula">$$H = -t \sum_{\langle i,j \rangle} (c_i^\dagger c_j + c_j^\dagger c_i)$$</div>
          <p>其中t是最近邻跳跃积分，通常取t ≈ 2.8 eV。</p>

          <h3>布洛赫函数</h3>
          <p>由于存在两个子晶格，布洛赫函数可以写为：</p> <div class="formula">$$|\psi_{\mathbf{k}}\rangle = \sum_{\mathbf{R}} e^{i\mathbf{k} \cdot \mathbf{R}} \left[ \psi_A(\mathbf{k}) |A, \mathbf{R}\rangle + \psi_B(\mathbf{k}) |B, \mathbf{R}\rangle \right]$$</div>

          <h3>哈密顿量矩阵</h3>
          <p>在子晶格基础上，哈密顿量矩阵为：</p> <div class="formula">$$H(\mathbf{k}) = \begin{pmatrix} 0 & h(\mathbf{k}) \\ h^*(\mathbf{k}) & 0 \end{pmatrix}$$</div>
          
          <p>其中：</p> <div class="formula">$$h(\mathbf{k}) = -t \sum_{i=1}^3 e^{i\mathbf{k} \cdot \boldsymbol{\delta}_i}$$</div>

          <h3>最近邻矢量</h3>
          <p>三个最近邻矢量为：</p> <div class="formula">$$\boldsymbol{\delta}_1 = \frac{a}{2}(1, \sqrt{3}), \quad \boldsymbol{\delta}_2 = \frac{a}{2}(1, -\sqrt{3}), \quad \boldsymbol{\delta}_3 = a(-1, 0)$$</div>
        </div>
      </div>

      <!-- 能带结构 -->
      <div class="content-card">
        <h2 class="card-title">能带结构</h2>
        <div class="card-content">
          <h3>本征值求解</h3>
          <p>哈密顿量的本征值为：</p> <div class="formula">$$E_{\pm}(\mathbf{k}) = \pm t |h(\mathbf{k})| = \pm t \sqrt{3 + 2\cos(k_x a) + 4\cos\left(\frac{k_x a}{2}\right)\cos\left(\frac{\sqrt{3} k_y a}{2}\right)}$$</div>

          <h3>狄拉克点</h3>
          <p>能带在K和K'点相接触，形成狄拉克点。在这些点处：</p> <div class="formula">$$h(\mathbf{K}) = h(\mathbf{K}') = 0$$</div><p>因此$E_+(\mathbf{K}) = E_-(\mathbf{K}) = 0$，价带和导带在费米能级相接触。</p>

          <h3>能带特征</h3>
          <div class="band-features">
            <div class="feature-item">
              <h4>π带</h4>
              <p>价带，由成键轨道形成</p>
            </div>
            <div class="feature-item">
              <h4>π*带</h4>
              <p>导带，由反成键轨道形成</p>
            </div>
            <div class="feature-item">
              <h4>零能隙</h4>
              <p>在狄拉克点处能隙为零</p>
            </div>
            <div class="feature-item">
              <h4>电子-空穴对称性</h4>
              <p>能带关于费米能级对称</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 狄拉克锥与低能有效理论 -->
      <div class="content-card">
        <h2 class="card-title">狄拉克锥与低能有效理论</h2>
        <div class="card-content">
          <h3>K点附近的展开</h3><p>在K点附近，设$\mathbf{k} = \mathbf{K} + \mathbf{q}$，其中q是小量。展开得到：</p>
          <div class="formula">$$h(\mathbf{K} + \mathbf{q}) \approx -\frac{3ta}{2}(q_x + iq_y)$$</div>

          <h3>低能有效哈密顿量</h3>
          <p>在K点附近，有效哈密顿量为：</p> <div class="formula">$$H_{eff}^K = v_F \hbar (\sigma_x q_x + \sigma_y q_y) = v_F \hbar \boldsymbol{\sigma} \cdot \mathbf{q}$$</div>
          
          <p>其中费米速度为：</p> <div class="formula">$$v_F = \frac{3ta}{2\hbar} \approx 10^6 \text{ m/s}$$</div>

          <h3>K'点的有效哈密顿量</h3>
          <p>在K'点附近：</p> <div class="formula">$$H_{eff}^{K'} = v_F \hbar (\sigma_x q_x - \sigma_y q_y)$$</div>

          <h3>狄拉克方程</h3>
          <p>低能激发满足二维无质量狄拉克方程：</p> <div class="formula">$$H_{eff} \psi = v_F \hbar \boldsymbol{\sigma} \cdot \mathbf{q} \psi = E \psi$$</div>
          
          <p>能谱为线性色散：</p> <div class="formula">$$E = \pm v_F \hbar |\mathbf{q}|$$</div>
        </div>
      </div>

      <!-- 手征性与赝自旋 -->
      <div class="content-card">
        <h2 class="card-title">手征性与赝自旋</h2>
        <div class="card-content">
          <h3>赝自旋</h3>
          <p>子晶格自由度可以看作赝自旋，泡利矩阵σ作用在子晶格空间上。赝自旋与动量方向的关系体现了石墨烯的手征性。</p>

          <h3>手征算符</h3>
          <p>定义手征算符：</p> <div class="formula">$$\hat{\chi} = \sigma_z$$</div>
          
          <p>在K点，本征态具有确定的手征性：</p> <div class="formula">$$\psi_{\pm}^K = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ \pm e^{i\theta_{\mathbf{q}}} \end{pmatrix}$$</div><p>其中$\theta_{\mathbf{q}} = \arctan(q_y/q_x)$。</p>

          <h3>贝里相位</h3>
          <p>电子在动量空间绕狄拉克点一周获得的贝里相位为：</p>
          <div class="formula">$$\gamma = \oint \mathbf{A}(\mathbf{q}) \cdot d\mathbf{q} = \pm \pi$$</div>
          
          <p>这个π贝里相位是石墨烯拓扑性质的重要体现。</p>

          <h3>Klein隧穿</h3>
          <p>由于手征性，石墨烯中的电子在势垒处表现出Klein隧穿现象，即垂直入射时透射概率为1，不受势垒高度影响。</p>
        </div>
      </div>

      <!-- 次近邻效应 -->
      <div class="content-card">
        <h2 class="card-title">次近邻效应</h2>
        <div class="card-content">
          <h3>次近邻跳跃</h3>
          <p>考虑次近邻跳跃t'时，哈密顿量变为：</p> <div class="formula">$$H = -t \sum_{\langle i,j \rangle} c_i^\dagger c_j - t' \sum_{\langle\langle i,j \rangle\rangle} c_i^\dagger c_j$$</div>

          <h3>修正的能带</h3>
          <p>包含次近邻跳跃后，能带变为：</p> <div class="formula">$$E_{\pm}(\mathbf{k}) = \pm t |h(\mathbf{k})| + t' h'(\mathbf{k})$$</div>
          
          <p>其中：</p> <div class="formula">$$h'(\mathbf{k}) = 2\cos(k_x a) + 4\cos\left(\frac{k_x a}{2}\right)\cos\left(\frac{\sqrt{3} k_y a}{2}\right)$$
          </div>

          <h3>电子-空穴不对称性</h3>
          <p>次近邻跳跃破坏了电子-空穴对称性，但保持狄拉克点的零能隙特性。</p>

          <h3>三角翘曲</h3>
          <p>次近邻效应导致费米面从圆形变为三角形，这种效应称为三角翘曲（trigonal warping）。</p>
        </div>
      </div>

      <!-- 实验观测 -->
      <div class="content-card">
        <h2 class="card-title">实验观测</h2>
        <div class="card-content">
          <h3>ARPES测量</h3>
          <p>角分辨光电子能谱直接观测到了石墨烯的线性色散关系和狄拉克锥结构。</p>

          <div class="experimental-results">
            <h4>关键实验结果</h4>
            <ul>
              <li>确认了狄拉克锥的存在</li>
              <li>测量了费米速度 v_F ≈ 10⁶ m/s</li>
              <li>观测到了K和K'两个狄拉克点</li>
              <li>验证了线性色散关系</li>
            </ul>
          </div>

          <h3>输运测量</h3>
          <p>电输运测量揭示了石墨烯的独特性质：</p>
          <ul>
            <li><strong>最小电导率：</strong>σ_min = 4e²/(πh)</li>
            <li><strong>半整数量子霍尔效应：</strong>σ_xy = ±4(n+1/2)e²/h</li>
            <li><strong>弱反局域化：</strong>由于贝里相位导致</li>
          </ul>

          <h3>STM观测</h3>
          <p>扫描隧道显微镜观测到了：</p>
          <ul>
            <li>蜂窝晶格结构</li>
            <li>子晶格不对称性</li>
            <li>准粒子干涉图样</li>
          </ul>
        </div>
      </div>

      <!-- 应用与展望 -->
      <div class="content-card">
        <h2 class="card-title">应用与展望</h2>
        <div class="card-content">
          <h3>电子器件应用</h3>
          <div class="application-grid">
            <div class="app-item">
              <h4>场效应晶体管</h4>
              <p>利用石墨烯的高迁移率制作高频器件</p>
            </div>
            <div class="app-item">
              <h4>透明导电膜</h4>
              <p>结合高透明度和导电性的优势</p>
            </div>
            <div class="app-item">
              <h4>传感器</h4>
              <p>基于电阻变化的气体和生物传感器</p>
            </div>
          </div>

          <h3>基础物理研究</h3>
          <ul>
            <li><strong>相对论量子力学：</strong>研究无质量狄拉克费米子</li>
            <li><strong>量子霍尔效应：</strong>半整数量子化</li>
            <li><strong>Klein隧穿：</strong>验证相对论效应</li>
            <li><strong>拓扑物理：</strong>贝里相位和手征性</li>
          </ul>

          <h3>理论发展</h3>
          <p>石墨烯的成功推动了其他二维材料的研究：</p>
          <ul>
            <li>过渡金属硫化物</li>
            <li>黑磷</li>
            <li>拓扑绝缘体薄膜</li>
            <li>范德华异质结构</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
}

.content-grid {
  display: grid;
  gap: 2rem;
}

.content-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.content-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3b82f6;
}

.card-content {
  line-height: 1.7;
  color: #374151;
}

.card-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin: 1.5rem 0 1rem 0;
}

.card-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 1rem 0 0.5rem 0;
}

.card-content p {
  margin-bottom: 1rem;
  text-align: justify;
}

.card-content ul, .card-content ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.card-content li {
  margin-bottom: 0.5rem;
}

.formula {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-family: 'Times New Roman', serif;
}

.structure-info {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.structure-info h4 {
  color: #047857;
  margin-bottom: 1rem;
}

.symmetry-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.point-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.point-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.band-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.feature-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
}

.feature-item h4 {
  color: #92400e;
  margin-bottom: 0.5rem;
}

.experimental-results {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.experimental-results h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.app-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.app-item h4 {
  color: #5b21b6;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-card {
    padding: 1.5rem;
  }
  
  .symmetry-points,
  .band-features,
  .application-grid {
    grid-template-columns: 1fr;
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>