<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.1 拓扑物态：看谁谁没有拓扑</h1>
      <p class="chapter-subtitle">探索凝聚态物理中的拓扑概念与拓扑物态的基本特征</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>拓扑学作为数学的一个分支，研究的是在连续变形下保持不变的几何性质。在凝聚态物理中，拓扑概念的引入为我们理解物质的新奇性质提供了全新的视角。拓扑物态是指那些具有非平凡拓扑性质的量子物态，它们的基态性质受到拓扑不变量的保护，不会因为局部扰动而改变。</p>
          
          <p>本章将深入探讨拓扑物态的基本概念，从最简单的拓扑绝缘体到复杂的拓扑超导体，从理论基础到实验观测，全面介绍这一激动人心的研究领域。</p>
        </div>
      </div>

      <!-- 拓扑的基本概念 -->
      <div class="content-card">
        <h2 class="card-title">拓扑的基本概念</h2>
        <div class="card-content">
          <h3>拓扑不变量</h3>
          <p>拓扑不变量是描述拓扑空间性质的数学量，在连续变形下保持不变。在凝聚态物理中，常见的拓扑不变量包括：</p>
          
          <div class="formula-box">
            <p><strong>陈数 (Chern Number)：</strong></p>
            <div class="formula">
              $$C = \frac{1}{2\pi} \int_{BZ} \Omega(\mathbf{k}) d^2k$$</div><p>其中$\Omega(\mathbf{k})$是贝里曲率</p>
          </div>

          <div class="formula-box">
            <p><strong>Z₂拓扑不变量：</strong></p>
            <div class="formula">$$\nu = \frac{1}{2\pi} \left[ \int_0^{\pi} dk_x A_x(k_x, 0) + \int_0^{\pi} dk_x A_x(k_x, \pi) \right] \mod 2$$</div>
          </div>

          <h3>贝里相位与贝里曲率</h3>
          <p>贝里相位是量子态在参数空间中绝热演化时获得的几何相位：</p> <div class="formula">$$\gamma_n = i \oint_C \langle n(\mathbf{R}) | \nabla_{\mathbf{R}} | n(\mathbf{R}) \rangle \cdot d\mathbf{R}$$</div>
          
          <p>贝里曲率则是贝里联络的旋度：</p> <div class="formula">$$\Omega_n(\mathbf{k}) = \nabla_{\mathbf{k}} \times \mathbf{A}_n(\mathbf{k})$$</div>
        </div>
      </div>

      <!-- 拓扑物态的分类 -->
      <div class="content-card">
        <h2 class="card-title">拓扑物态的分类</h2>
        <div class="card-content">
          <h3>按维度分类</h3>
          <div class="classification-grid">
            <div class="class-item">
              <h4>一维拓扑物态</h4>
              <ul>
                <li>SSH模型</li>
                <li>Kitaev链</li>
                <li>拓扑超导线</li>
              </ul>
            </div>
            
            <div class="class-item">
              <h4>二维拓扑物态</h4>
              <ul>
                <li>量子霍尔效应</li>
                <li>量子自旋霍尔效应</li>
                <li>拓扑绝缘体</li>
              </ul>
            </div>
            
            <div class="class-item">
              <h4>三维拓扑物态</h4>
              <ul>
                <li>三维拓扑绝缘体</li>
                <li>外尔半金属</li>
                <li>狄拉克半金属</li>
              </ul>
            </div>
          </div>

          <h3>按对称性分类</h3>
          <p>根据时间反演对称性(T)、粒子-空穴对称性(C)和手征对称性(S)的存在与否，可以将拓扑物态分为10个对称性类别，这就是著名的拓扑周期表。</p>
          
          <div class="symmetry-table">
            <table>
              <thead>
                <tr>
                  <th>对称性类别</th>
                  <th>T</th>
                  <th>C</th>
                  <th>S</th>
                  <th>d=1</th>
                  <th>d=2</th>
                  <th>d=3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Z</td>
                  <td>0</td>
                  <td>Z</td>
                </tr>
                <tr>
                  <td>AIII</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>Z</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>AI</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>AII</td>
                  <td>-1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Z₂</td>
                  <td>Z₂</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 拓扑绝缘体 -->
      <div class="content-card">
        <h2 class="card-title">拓扑绝缘体</h2>
        <div class="card-content">
          <h3>基本特征</h3>
          <p>拓扑绝缘体是一类具有体能隙但表面存在无能隙态的材料。其主要特征包括：</p>
          <ul>
            <li><strong>体绝缘性：</strong>体态具有能隙，是绝缘体</li>
            <li><strong>表面导电：</strong>表面态无能隙，具有导电性</li>
            <li><strong>拓扑保护：</strong>表面态受拓扑不变量保护</li>
            <li><strong>自旋-动量锁定：</strong>表面态的自旋与动量垂直</li>
          </ul>

          <h3>二维拓扑绝缘体</h3>
          <p>二维拓扑绝缘体的有效哈密顿量可以写为：</p> <div class="formula">$$H = (m + t\cos k_x + t\cos k_y)\sigma_z + t\sin k_x \sigma_x + t\sin k_y \sigma_y$$</div><p>当$|m| < 2t$ 时，系统处于拓扑非平凡相，Z₂拓扑不变量 $\nu = 1$。</p>

          <h3>三维拓扑绝缘体</h3>
          <p>三维拓扑绝缘体的表面态形成狄拉克锥，其低能有效哈密顿量为：</p>
          <div class="formula">$$H_{surf} = v_F(\sigma_x k_y - \sigma_y k_x)$$</div><p>其中$v_F$是费米速度，表面态的色散关系为线性的。</p>
        </div>
      </div>

      <!-- 拓扑超导体 -->
      <div class="content-card">
        <h2 class="card-title">拓扑超导体</h2>
        <div class="card-content">
          <h3>基本概念</h3>
          <p>拓扑超导体是同时具有超导性和非平凡拓扑性质的量子物态。它们的边界或缺陷处可能存在马约拉纳费米子，这是实现拓扑量子计算的重要候选体系。</p>

          <h3>Kitaev链模型</h3>
          <p>一维拓扑超导体的最简单模型是Kitaev链：</p>
          <div class="formula">$$H = -\mu \sum_i c_i^\dagger c_i - t \sum_i (c_i^\dagger c_{i+1} + h.c.) + \Delta \sum_i (c_i c_{i+1} + h.c.)$$</div><p>当$|\mu| < 2t$ 且 $\Delta \neq 0$时，系统处于拓扑超导相，链的两端存在马约拉纳零模。</p>

          <h3>马约拉纳费米子</h3><p>马约拉纳费米子满足$\gamma = \gamma^\dagger$，即粒子就是自己的反粒子。在拓扑超导体中，马约拉纳费米子以零能模的形式出现在边界处。</p>
          
          <div class="highlight-box">
            <h4>马约拉纳费米子的性质</h4>
            <ul><li>零能量：$E = 0$</li>
              <li>局域化：指数衰减到体内</li>
              <li>非阿贝尔统计：交换时产生非平凡的相位</li>
              <li>拓扑保护：受能隙保护</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 外尔半金属 -->
      <div class="content-card">
        <h2 class="card-title">外尔半金属</h2>
        <div class="card-content">
          <h3>基本特征</h3>
          <p>外尔半金属是三维体系中价带和导带在孤立点相接触的半金属。这些接触点称为外尔点，具有确定的手征性。</p>

          <h3>外尔哈密顿量</h3>
          <p>外尔点附近的低能有效哈密顿量为：</p>
          <div class="formula">$$H = \hbar v_F \boldsymbol{\sigma} \cdot \mathbf{k}$$</div><p>其中$\boldsymbol{\sigma}$ 是泡利矩阵，$v_F$是费米速度。</p>

          <h3>手征异常与反常霍尔效应</h3>
          <p>外尔半金属中的手征异常导致了反常霍尔效应：</p>
          <div class="formula">$$\sigma_{xy} = \frac{e^2}{h} \sum_i \chi_i \frac{k_{zi}}{2\pi}$$</div><p>其中$\chi_i = \pm 1$ 是第i个外尔点的手征性，$k_{zi}$ 是其在k_z方向的坐标。</p>

          <h3>费米弧表面态</h3>
          <p>外尔半金属的表面存在连接不同手征外尔点投影的费米弧态，这是外尔半金属的重要特征之一。</p>
        </div>
      </div>

      <!-- 实验观测 -->
      <div class="content-card">
        <h2 class="card-title">实验观测与表征</h2>
        <div class="card-content">
          <h3>角分辨光电子能谱(ARPES)</h3>
          <p>ARPES是研究拓扑物态最重要的实验技术之一，可以直接观测能带结构和表面态。</p>
          
          <div class="technique-box">
            <h4>ARPES的优势</h4>
            <ul>
              <li>直接测量能带结构</li>
              <li>区分体态和表面态</li>
              <li>观测狄拉克锥和费米弧</li>
              <li>测量自旋纹理</li>
            </ul>
          </div>

          <h3>输运测量</h3>
          <p>通过电阻率、霍尔效应等输运测量可以研究拓扑物态的电学性质：</p>
          <ul>
            <li><strong>量子霍尔效应：</strong>霍尔电导的量子化</li>
            <li><strong>反常霍尔效应：</strong>外尔半金属的特征</li>
            <li><strong>弱反局域化：</strong>拓扑绝缘体表面态的特征</li>
          </ul>

          <h3>扫描隧道显微镜(STM)</h3>
          <p>STM可以在原子尺度上研究拓扑物态的局域电子态密度，特别适合观测：</p>
          <ul>
            <li>马约拉纳零模</li>
            <li>拓扑边界态</li>
            <li>准粒子干涉图样</li>
          </ul>
        </div>
      </div>

      <!-- 应用前景 -->
      <div class="content-card">
        <h2 class="card-title">应用前景</h2>
        <div class="card-content">
          <h3>拓扑量子计算</h3>
          <p>拓扑量子计算利用拓扑物态的拓扑保护性质来实现容错的量子计算：</p>
          
          <div class="application-grid">
            <div class="app-item">
              <h4>马约拉纳量子比特</h4>
              <p>利用马约拉纳费米子的非阿贝尔统计性质构建拓扑保护的量子比特</p>
            </div>
            
            <div class="app-item">
              <h4>编织操作</h4>
              <p>通过马约拉纳费米子的编织实现量子门操作</p>
            </div>
          </div>

          <h3>自旋电子学</h3>
          <p>拓扑绝缘体的自旋-动量锁定特性为自旋电子学器件提供了新的可能：</p>
          <ul>
            <li>自旋流生成</li>
            <li>自旋轨道矩</li>
            <li>磁化翻转</li>
          </ul>

          <h3>低功耗电子器件</h3>
          <p>拓扑物态的无耗散输运特性有望应用于低功耗电子器件的开发。</p>
        </div>
      </div>

      <!-- 理论发展 -->
      <div class="content-card">
        <h2 class="card-title">理论发展与前沿</h2>
        <div class="card-content">
          <h3>机器学习在拓扑物态中的应用</h3>
          <p>机器学习技术为拓扑物态的研究带来了新的工具：</p>
          <ul>
            <li>拓扑相的自动识别</li>
            <li>拓扑不变量的计算</li>
            <li>新拓扑物态的预测</li>
          </ul>

          <h3>高阶拓扑物态</h3>
          <p>高阶拓扑物态是近年来的研究热点，其特征是：</p>
          <ul>
            <li>d维体系具有(d-n)维边界态 (n>1)</li>
            <li>受高阶拓扑不变量保护</li>
            <li>角态和铰链态的存在</li>
          </ul>

          <h3>非线性拓扑物态</h3>
          <p>非线性效应在拓扑物态中的作用正在被深入研究：</p>
          <ul>
            <li>非线性霍尔效应</li>
            <li>非线性拓扑绝缘体</li>
            <li>孤子态</li>
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

.formula-box {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.formula {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 0.25rem;
}

.classification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.class-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
}

.class-item h4 {
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.symmetry-table {
  overflow-x: auto;
  margin: 1rem 0;
}

.symmetry-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.symmetry-table th,
.symmetry-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.symmetry-table th {
  background: #f1f5f9;
  font-weight: 600;
  color: #1e293b;
}

.highlight-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.highlight-box h4 {
  color: #92400e;
  margin-bottom: 1rem;
}

.technique-box {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.technique-box h4 {
  color: #047857;
  margin-bottom: 1rem;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.app-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.app-item h4 {
  color: #1d4ed8;
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
  
  .classification-grid,
  .application-grid {
    grid-template-columns: 1fr;
  }
}

/* 数学公式样式 */
.formula {
  font-family: 'Times New Roman', serif;
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