<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.4.2 Haldane模型与Chern绝缘体</h1>
      <p class="chapter-subtitle">探索无外磁场下的量子霍尔效应与拓扑Chern绝缘体</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>1988年，Haldane提出了一个开创性的模型，证明了即使在没有外加磁场的情况下，也可以实现量子霍尔效应。这个模型在石墨烯的蜂窝晶格基础上，通过引入复数次近邻跳跃项，打破时间反演对称性，从而产生非零的Chern数和量子化的霍尔电导。</p>
          
          <p>Haldane模型是第一个拓扑Chern绝缘体的理论模型，为后来拓扑绝缘体和拓扑物态的研究奠定了重要基础。本节将详细介绍Haldane模型的构建、拓扑性质分析以及实验实现。</p>
        </div>
      </div>

      <!-- Haldane模型的构建 -->
      <div class="content-card">
        <h2 class="card-title">Haldane模型的构建</h2>
        <div class="card-content">
          <h3>模型哈密顿量</h3>
          <p>Haldane模型在石墨烯紧束缚模型基础上添加了两个关键项：</p>
          <div class="formula">
            $$H = -t_1 \sum_{\langle i,j \rangle} c_i^\dagger c_j + i t_2 \sum_{\langle\langle i,j \rangle\rangle} \nu_{ij} c_i^\dagger c_j + \sum_i M_i c_i^\dagger c_i$$</div>

          <h3>模型参数</h3>
          <div class="parameter-grid">
            <div class="param-item">
              <h4>最近邻跳跃 t₁</h4>
              <p>实数，保持石墨烯的基本结构</p>
            </div>
            <div class="param-item">
              <h4>次近邻跳跃 t₂</h4>
              <p>复数，破坏时间反演对称性</p>
            </div>
            <div class="param-item">
              <h4>在位能 M</h4>
              <p>子晶格间的能量差</p>
            </div>
            <div class="param-item">
              <h4>相位因子 νᵢⱼ</h4>
              <p>±1，取决于跳跃方向</p>
            </div>
          </div>

          <h3>次近邻跳跃的相位</h3>
          <p>次近邻跳跃的相位因子定义为：</p> <div class="formula">$$\nu_{ij} = +1 \text{ (逆时针)}, \quad \nu_{ij} = -1 \text{ (顺时针)}$$</div>
          
          <p>这个相位选择等效于在每个六角形中心施加垂直向上或向下的磁通量：</p> <div class="formula">$$\Phi = \pm \frac{\phi_0}{2} = \pm \frac{\pi \hbar}{e}$$</div>

          <h3>动量空间哈密顿量</h3>
          <p>在动量空间中，哈密顿量矩阵为：</p> <div class="formula">$$H(\mathbf{k}) = d_0(\mathbf{k}) I + \mathbf{d}(\mathbf{k}) \cdot \boldsymbol{\sigma}$$</div>
          
          <p>其中：</p> <div class="formula">$$d_0(\mathbf{k}) = 2t_2 \cos\phi \sum_{i=1}^3 \cos(\mathbf{k} \cdot \mathbf{b}_i)$$</div> <div class="formula">$$d_x(\mathbf{k}) = t_1 \sum_{i=1}^3 \cos(\mathbf{k} \cdot \mathbf{a}_i)$$</div> <div class="formula">$$d_y(\mathbf{k}) = t_1 \sum_{i=1}^3 \sin(\mathbf{k} \cdot \mathbf{a}_i)$$</div> <div class="formula">$$d_z(\mathbf{k}) = M + 2t_2 \sin\phi \sum_{i=1}^3 \sin(\mathbf{k} \cdot \mathbf{b}_i)$$</div>
        </div>
      </div>

      <!-- 能带结构与相图 -->
      <div class="content-card">
        <h2 class="card-title">能带结构与相图</h2>
        <div class="card-content">
          <h3>本征能量</h3>
          <p>哈密顿量的本征能量为：</p> <div class="formula">$$E_{\pm}(\mathbf{k}) = d_0(\mathbf{k}) \pm |\mathbf{d}(\mathbf{k})|$$</div>
          
          <p>其中：</p> <div class="formula">$$|\mathbf{d}(\mathbf{k})| = \sqrt{d_x^2(\mathbf{k}) + d_y^2(\mathbf{k}) + d_z^2(\mathbf{k})}$$</div>

          <h3>能隙条件</h3><p>系统具有能隙当且仅当在整个布里渊区内$|\mathbf{d}(\mathbf{k})| > 0$。能隙关闭发生在：</p>
          <div class="formula">$$\mathbf{d}(\mathbf{k}) = 0$$</div>

          <h3>相边界</h3>
          <p>在K和K'点，能隙关闭条件为：</p> <div class="formula">$$|M| = 3\sqrt{3} t_2 |\sin\phi|$$</div>

          <h3>相图</h3>
          <div class="phase-diagram">
            <div class="phase-item">
              <h4>拓扑相 (|M| < 3√3t₂|sin φ|)</h4>
              <ul>
                <li>Chern数 C = ±1</li>
                <li>边界态存在</li>
                <li>量子化霍尔电导</li>
              </ul>
            </div>
            <div class="phase-item">
              <h4>平凡相 (|M| > 3√3t₂|sin φ|)</h4>
              <ul>
                <li>Chern数 C = 0</li>
                <li>无边界态</li>
                <li>普通绝缘体</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Chern数计算 -->
      <div class="content-card">
        <h2 class="card-title">Chern数计算</h2>
        <div class="card-content">
          <h3>贝里曲率</h3>
          <p>占据态的贝里曲率为：</p> <div class="formula">$$\Omega(\mathbf{k}) = \frac{\mathbf{d}(\mathbf{k})}{|\mathbf{d}(\mathbf{k})|^3} \cdot \left( \frac{\partial \mathbf{d}}{\partial k_x} \times \frac{\partial \mathbf{d}}{\partial k_y} \right)$$</div>

          <h3>Chern数</h3>
          <p>第一Chern数定义为：</p> <div class="formula">$$C = \frac{1}{2\pi} \int_{BZ} \Omega(\mathbf{k}) d^2k$$</div>

          <h3>解析表达式</h3>
          <p>对于Haldane模型，Chern数可以解析计算：</p> <div class="formula">$$C = \frac{1}{2} \left[ \text{sgn}(M + 3\sqrt{3} t_2 \sin\phi) + \text{sgn}(M - 3\sqrt{3} t_2 \sin\phi) \right]$$</div>

          <h3>拓扑相变</h3>
          <div class="topological-phases">
            <div class="topo-phase">
              <h4>φ > 0, M > 0</h4>
              <p>C = 0 (平凡相)</p>
            </div>
            <div class="topo-phase">
              <h4>φ > 0, -3√3t₂sin φ < M < 3√3t₂sin φ</h4>
              <p>C = -1 (拓扑相)</p>
            </div>
            <div class="topo-phase">
              <h4>φ > 0, M < -3√3t₂sin φ</h4>
              <p>C = 0 (平凡相)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 边界态 -->
      <div class="content-card">
        <h2 class="card-title">边界态</h2>
        <div class="card-content">
          <h3>体-边对应原理</h3>
          <p>根据体-边对应原理，具有非零Chern数的体系在边界处必然存在受拓扑保护的边界态。</p>

          <h3>边界态色散</h3>
          <p>在拓扑相中，边界态的色散关系为：</p> <div class="formula">$$E_{edge}(k_y) = \pm v_{edge} k_y$$</div>
          
          <p>其中边界态速度为：</p> <div class="formula">$$v_{edge} = \frac{3t_1 a}{2}$$</div>

          <h3>边界态性质</h3>
          <div class="edge-properties">
            <div class="prop-item">
              <h4>手征性</h4>
              <p>边界态具有确定的传播方向</p>
            </div>
            <div class="prop-item">
              <h4>拓扑保护</h4>
              <p>不受局域扰动影响</p>
            </div>
            <div class="prop-item">
              <h4>无背散射</h4>
              <p>时间反演对称性破缺</p>
            </div>
            <div class="prop-item">
              <h4>量子化电导</h4>
              <p>σ_xy = Ce²/h</p>
            </div>
          </div>

          <h3>边界态局域化</h3>
          <p>边界态的波函数在边界处指数衰减：</p> <div class="formula">$$\psi(x) \propto e^{-x/\xi}$$</div>
          
          <p>其中局域化长度为：</p> <div class="formula">$$\xi = \frac{\hbar v_F}{|\Delta|}$$</div>
        </div>
      </div>

      <!-- 霍尔电导 -->
      <div class="content-card">
        <h2 class="card-title">霍尔电导</h2>
        <div class="card-content">
          <h3>Kubo公式</h3>
          <p>霍尔电导可以通过Kubo公式计算：</p> <div class="formula">$$\sigma_{xy} = \frac{ie^2}{\hbar} \sum_n \int_{BZ} \frac{d^2k}{(2\pi)^2} f(E_n(\mathbf{k})) \Omega_n(\mathbf{k})$$</div>

          <h3>量子化霍尔电导</h3>
          <p>在绝缘相中，霍尔电导严格量子化：</p> <div class="formula">$$\sigma_{xy} = C \frac{e^2}{h}$$</div>

          <h3>TKNN公式</h3>
          <p>Thouless-Kohmoto-Nightingale-den Nijs公式将霍尔电导与拓扑不变量联系：</p> <div class="formula">$$\sigma_{xy} = \frac{e^2}{h} \sum_{occupied} C_n$$</div>

          <h3>温度效应</h3>
          <p>有限温度下，霍尔电导的修正为：</p> <div class="formula">$$\sigma_{xy}(T) = C \frac{e^2}{h} \left[ 1 - O(e^{-\Delta/k_B T}) \right]$$
          </div>
        </div>
      </div>

      <!-- 实验实现 -->
      <div class="content-card">
        <h2 class="card-title">实验实现</h2>
        <div class="card-content">
          <h3>光晶格中的冷原子</h3>
          <p>Haldane模型首先在光晶格中的超冷原子系统中得到实现：</p>
          <ul>
            <li><strong>蜂窝光晶格：</strong>激光干涉形成的周期势</li>
            <li><strong>复数跳跃：</strong>通过激光辅助隧穿实现</li>
            <li><strong>在位能：</strong>通过塞曼效应调节</li>
          </ul>

          <h3>光子晶体</h3>
          <p>光子系统中也实现了Haldane模型的类比：</p>
          <div class="photonic-realization">
            <h4>关键要素</h4>
            <ul>
              <li>蜂窝结构的介电常数调制</li>
              <li>磁光效应破坏时间反演对称性</li>
              <li>单向边界态的观测</li>
            </ul>
          </div>

          <h3>电路网络</h3>
          <p>经典电路网络提供了另一种实现平台：</p>
          <ul>
            <li>电阻网络模拟紧束缚模型</li>
            <li>回转器引入复数跳跃</li>
            <li>阻抗测量验证拓扑性质</li>
          </ul>

          <h3>实验观测</h3>
          <div class="experimental-observations">
            <div class="obs-item">
              <h4>能带结构</h4>
              <p>通过能谱测量确认能隙开合</p>
            </div>
            <div class="obs-item">
              <h4>边界态</h4>
              <p>直接观测手征边界态</p>
            </div>
            <div class="obs-item">
              <h4>拓扑相变</h4>
              <p>通过参数调节观测相变</p>
            </div>
            <div class="obs-item">
              <h4>量子化响应</h4>
              <p>测量量子化的输运系数</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 推广与应用 -->
      <div class="content-card">
        <h2 class="card-title">推广与应用</h2>
        <div class="card-content">
          <h3>其他晶格结构</h3>
          <p>Haldane模型的思想可以推广到其他晶格：</p>
          <ul>
            <li><strong>Kagome晶格：</strong>具有平带的拓扑模型</li>
            <li><strong>Lieb晶格：</strong>包含平带的二维晶格</li>
            <li><strong>三维推广：</strong>Weyl半金属模型</li>
          </ul>

          <h3>相互作用效应</h3>
          <p>加入电子-电子相互作用后的新现象：</p>
          <div class="interaction-effects">
            <div class="effect-item">
              <h4>分数Chern绝缘体</h4>
              <p>类似分数量子霍尔态</p>
            </div>
            <div class="effect-item">
              <h4>拓扑Mott绝缘体</h4>
              <p>强关联拓扑态</p>
            </div>
            <div class="effect-item">
              <h4>拓扑超导</h4>
              <p>配对机制与拓扑性质结合</p>
            </div>
          </div>

          <h3>器件应用</h3>
          <p>基于Haldane模型的潜在应用：</p>
          <ul>
            <li><strong>拓扑电子学：</strong>无耗散电子器件</li>
            <li><strong>量子计算：</strong>拓扑保护的量子比特</li>
            <li><strong>精密测量：</strong>量子化标准</li>
          </ul>

          <h3>理论意义</h3>
          <div class="theoretical-significance">
            <h4>拓扑物理学的里程碑</h4>
            <ul>
              <li>首个无磁场量子霍尔模型</li>
              <li>拓扑分类理论的基础</li>
              <li>体-边对应的典型例子</li>
              <li>拓扑相变的理论框架</li>
            </ul>
          </div>
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

.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.param-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
}

.param-item h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.phase-diagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.phase-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.phase-item h4 {
  color: #92400e;
  margin-bottom: 1rem;
}

.topological-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.topo-phase {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.topo-phase h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.edge-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.prop-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1rem;
}

.prop-item h4 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.photonic-realization {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.photonic-realization h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.experimental-observations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.obs-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1rem;
}

.obs-item h4 {
  color: #be185d;
  margin-bottom: 0.5rem;
}

.interaction-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect-item {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1rem;
}

.effect-item h4 {
  color: #15803d;
  margin-bottom: 0.5rem;
}

.theoretical-significance {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.theoretical-significance h4 {
  color: #a16207;
  margin-bottom: 1rem;
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
  
  .parameter-grid,
  .phase-diagram,
  .topological-phases,
  .edge-properties,
  .experimental-observations,
  .interaction-effects {
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