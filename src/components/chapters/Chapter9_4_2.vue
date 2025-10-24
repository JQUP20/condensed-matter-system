<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.4.2 二维无自旋费米子体系的重整化：手性费米子形式</h1>
      <p class="chapter-subtitle">Two-Dimensional Spinless Fermion Renormalization: Chiral Fermion Formalism</p>
    </div>

    <div class="content-section">
      <h2>二维费米子系统概述</h2>
      <div class="concept-box">
        <h3>二维系统的特殊性</h3>
        <p>二维费米子系统相比一维系统具有更丰富的物理现象：</p>
        <ul>
          <li>费米面为一维曲线而非零维点</li>
          <li>存在嵌套效应和van Hove奇点</li>
          <li>相互作用的边际性质</li>
          <li>量子相变的丰富性</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>基本哈密顿量</h3>
        <p>二维无自旋费米子系统的哈密顿量：</p>
        <div class="formula-block">
                H = ∑_k ε_k c<sup>†</sup>_k c_k + (1/2A) ∑_{k,k',q} V(q) c<sup>†</sup>_{k+q} c<sup>†</sup>_{k'-q} c_{k'} c_k
              </div>
        <p>其中能谱为：</p>
        <div class="formula-block">
          ε_k = -2t(cos k_x + cos k_y) - μ
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>手性费米子表示</h2>
      <div class="chiral-formalism">
        <div class="concept-box">
          <h3>手性分解的动机</h3>
          <p>在费米面附近，可以将费米子场分解为手性分量：</p>
          <ul>
            <li>利用费米面的几何结构</li>
            <li>分离不同动量区域的贡献</li>
            <li>简化重整化群分析</li>
            <li>揭示拓扑性质</li>
          </ul>
        </div>

        <div class="chiral-decomposition">
          <h3>手性分解</h3>
          <div class="decomposition-grid">
            <div class="decomposition-card">
              <h4>右手性费米子</h4>
              <div class="formula-block">
                ψ_R(k) = P_R ψ(k)
              </div>
              <p>其中P_R = (1 + γ₅)/2是右手性投影算符</p>
            </div>

            <div class="decomposition-card">
              <h4>左手性费米子</h4>
              <div class="formula-block">
                ψ_L(k) = P_L ψ(k)
              </div>
              <p>其中P_L = (1 - γ₅)/2是左手性投影算符</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>费米面几何和热点</h2>
      <div class="fermi-surface-analysis">
        <div class="hotspot-section">
          <h3>热点分析</h3>
          <p>在二维系统中，相互作用最强的区域称为"热点"：</p>
          <div class="hotspot-grid">
            <div class="hotspot-card">
              <h4>热点的定义</h4>
              <p>满足完美嵌套条件的费米面上的点：</p>
              <div class="formula-block">
                k_F + Q = k'_F
              </div>
              <p>其中Q是嵌套矢量</p>
            </div>

            <div class="hotspot-card">
              <h4>热点附近的线性化</h4>
              <p>在热点附近，能谱可以线性化：</p>
              <div class="formula-block">
                ε_k ≈ v_F · (k - k_F)
              </div>
              <p>其中v_F是费米速度</p>
            </div>
          </div>
        </div>

        <div class="nesting-effects">
          <h3>嵌套效应</h3>
          <div class="nesting-grid">
            <div class="nesting-card">
              <h4>完美嵌套</h4>
              <ul>
                <li>费米面的平行段</li>
                <li>增强的磁性不稳定性</li>
                <li>自旋密度波的形成</li>
              </ul>
            </div>

            <div class="nesting-card">
              <h4>不完美嵌套</h4>
              <ul>
                <li>有限的嵌套矢量</li>
                <li>竞争的序参量</li>
                <li>量子临界行为</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群方程</h2>
      <div class="rg-equations">
        <div class="rg-setup">
          <h3>重整化群设置</h3>
          <p>考虑能量壳层积分，从高能到低能逐步积分：</p>
          <div class="formula-block">
            Λ → Λ/s, s = e^{dl}
          </div>
          <p>其中Λ是能量截断，l是重整化群参数。</p>
        </div>

        <div class="coupling-flow">
          <h3>耦合常数流方程</h3>
          <div class="flow-equations">
            <div class="equation-card">
              <h4>前向散射耦合</h4>
              <div class="formula-block">
                dg₁/dl = -g₁g₂/(2π)
              </div>
            </div>

            <div class="equation-card">
              <h4>后向散射耦合</h4>
              <div class="formula-block">
                dg₂/dl = -g₂²/(2π) + g₁g₃/(2π)
              </div>
            </div>

            <div class="equation-card">
              <h4>Cooper配对耦合</h4>
              <div class="formula-block">
                dg₃/dl = -g₃²/(2π) + g₁g₂/(2π)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>固定点分析</h2>
      <div class="fixed-points">
        <div class="fp-analysis">
          <h3>重整化群固定点</h3>
          <div class="fp-grid">
            <div class="fp-card stable">
              <h4>稳定固定点</h4>
              <p>费米液体固定点：</p>
              <div class="formula-block">
                g₁* = g₂* = g₃* = 0
              </div>
              <ul>
                <li>弱耦合极限</li>
                <li>准粒子图像有效</li>
                <li>Landau费米液体理论</li>
              </ul>
            </div>

            <div class="fp-card unstable">
              <h4>不稳定固定点</h4>
              <p>强耦合固定点：</p>
              <div class="formula-block">
                g₁* ≠ 0, g₂* ≠ 0, g₃* ≠ 0
              </div>
              <ul>
                <li>非费米液体行为</li>
                <li>量子临界性</li>
                <li>相变的驱动</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="stability-analysis">
          <h3>稳定性分析</h3>
          <p>通过线性化分析确定固定点的稳定性：</p>
          <div class="formula-block">
            δg_i(l) = δg_i(0) e^{λᵢl}
          </div>
          <p>其中λᵢ是特征指数，决定了扰动的增长或衰减。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相图和量子相变</h2>
      <div class="phase-diagram">
        <div class="phase-regions">
          <h3>主要相区</h3>
          <div class="phase-grid">
            <div class="phase-card fermi-liquid">
              <h4>费米液体相</h4>
              <ul>
                <li>弱相互作用</li>
                <li>准粒子激发</li>
                <li>Pauli顺磁性</li>
                <li>T²电阻率</li>
              </ul>
            </div>

            <div class="phase-card antiferro">
              <h4>反铁磁相</h4>
              <ul>
                <li>自旋密度波序</li>
                <li>费米面重构</li>
                <li>能隙打开</li>
                <li>磁性长程序</li>
              </ul>
            </div>

            <div class="phase-card superconductor">
              <h4>超导相</h4>
              <ul>
                <li>Cooper对形成</li>
                <li>d波配对</li>
                <li>Meissner效应</li>
                <li>零电阻</li>
              </ul>
            </div>

            <div class="phase-card strange-metal">
              <h4>奇异金属相</h4>
              <ul>
                <li>线性电阻率</li>
                <li>非费米液体</li>
                <li>量子临界性</li>
                <li>标度行为</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="quantum-transitions">
          <h3>量子相变</h3>
          <div class="transition-types">
            <div class="transition-card">
              <h4>磁性量子相变</h4>
              <p>从顺磁到反铁磁的转变：</p>
              <ul>
                <li>序参量：磁化强度</li>
                <li>临界指数：z = 2</li>
                <li>量子临界扇形区</li>
              </ul>
            </div>

            <div class="transition-card">
              <h4>超导量子相变</h4>
              <p>从正常态到超导态：</p>
              <ul>
                <li>序参量：配对振幅</li>
                <li>拓扑相变</li>
                <li>涡旋激发</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测和材料实现</h2>
      <div class="experimental-section">
        <div class="materials-grid">
          <div class="material-card">
            <h3>铜氧化物超导体</h3>
            <ul>
              <li>La₂₋ₓSrₓCuO₄</li>
              <li>YBa₂Cu₃O₇₋δ</li>
              <li>Bi₂Sr₂CaCu₂O₈₊δ</li>
            </ul>
            <p>特征：强关联、d波超导、赝能隙</p>
          </div>

          <div class="material-card">
            <h3>铁基超导体</h3>
            <ul>
              <li>LaFeAsO₁₋ₓFₓ</li>
              <li>Ba₁₋ₓKₓFe₂As₂</li>
              <li>FeSe</li>
            </ul>
            <p>特征：多轨道、s±波配对、磁性涨落</p>
          </div>

          <div class="material-card">
            <h3>重费米子系统</h3>
            <ul>
              <li>CeCu₂Si₂</li>
              <li>UPt₃</li>
              <li>URu₂Si₂</li>
            </ul>
            <p>特征：强关联、量子临界点、隐藏序</p>
          </div>
        </div>

        <div class="measurement-techniques">
          <h3>实验技术</h3>
          <div class="technique-grid">
            <div class="technique-card">
              <h4>角分辨光电子谱</h4>
              <ul>
                <li>费米面测量</li>
                <li>能隙结构</li>
                <li>准粒子权重</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>中子散射</h4>
              <ul>
                <li>磁性激发</li>
                <li>自旋涨落</li>
                <li>结构相变</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>输运测量</h4>
              <ul>
                <li>电阻率</li>
                <li>霍尔效应</li>
                <li>热电性质</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>数值计算方法</h2>
      <div class="numerical-methods">
        <div class="method-grid">
          <div class="method-card">
            <h3>量子蒙特卡罗</h3>
            <ul>
              <li>确定性量子蒙特卡罗</li>
              <li>辅助场量子蒙特卡罗</li>
              <li>连续时间量子蒙特卡罗</li>
              <li>符号问题的处理</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>动力学平均场理论</h3>
            <ul>
              <li>局域自能近似</li>
              <li>杂质求解器</li>
              <li>集团动力学平均场</li>
              <li>双时格林函数</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>函数重整化群</h3>
            <ul>
              <li>一圈重整化群</li>
              <li>顶点函数流</li>
              <li>多回路修正</li>
              <li>频率依赖性</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论框架</h3>
          <ul>
            <li>手性费米子表示</li>
            <li>热点分析</li>
            <li>重整化群流</li>
            <li>固定点分类</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>费米面嵌套</li>
            <li>量子相变</li>
            <li>非费米液体</li>
            <li>竞争序参量</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验联系</h3>
          <ul>
            <li>高温超导体</li>
            <li>铁基超导体</li>
            <li>重费米子系统</li>
            <li>量子临界材料</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>计算方法</h3>
          <ul>
            <li>量子蒙特卡罗</li>
            <li>动力学平均场</li>
            <li>函数重整化群</li>
            <li>解析理论</li>
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

.formula-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3 {
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
  font-family: 'Times New Roman', serif;
}

.decomposition-grid, .hotspot-grid, .nesting-grid, .fp-grid, .phase-grid, .technique-grid, .method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.decomposition-card, .hotspot-card, .nesting-card, .fp-card, .phase-card, .technique-card, .method-card, .material-card, .transition-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.decomposition-card:hover, .hotspot-card:hover, .nesting-card:hover, .fp-card:hover, .phase-card:hover, .technique-card:hover, .method-card:hover, .material-card:hover, .transition-card:hover {
  transform: translateY(-5px);
}

.decomposition-card h4, .hotspot-card h4, .nesting-card h4, .fp-card h4, .phase-card h4, .technique-card h4, .method-card h3, .material-card h3, .transition-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.fp-card.stable {
  border-top-color: #27ae60;
}

.fp-card.stable h4 {
  color: #27ae60;
}

.fp-card.unstable {
  border-top-color: #e74c3c;
}

.phase-card.fermi-liquid {
  border-top-color: #3498db;
}

.phase-card.fermi-liquid h4 {
  color: #3498db;
}

.phase-card.antiferro {
  border-top-color: #e74c3c;
}

.phase-card.antiferro h4 {
  color: #e74c3c;
}

.phase-card.superconductor {
  border-top-color: #9b59b6;
}

.phase-card.superconductor h4 {
  color: #9b59b6;
}

.phase-card.strange-metal {
  border-top-color: #f39c12;
}

.phase-card.strange-metal h4 {
  color: #f39c12;
}

.flow-equations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.equation-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.equation-card h4 {
  color: #8e44ad;
  margin-bottom: 15px;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.transition-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
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
  
  .decomposition-grid, .hotspot-grid, .nesting-grid, .fp-grid, .phase-grid, .technique-grid, .method-grid, .materials-grid {
    grid-template-columns: 1fr;
  }
  
  .flow-equations, .transition-types {
    grid-template-columns: 1fr;
  }
}
</style>