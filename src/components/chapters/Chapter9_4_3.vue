<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.4.3 三维无自旋费米子体系的重整化：patch形式</h1>
      <p class="chapter-subtitle">Three-Dimensional Spinless Fermion Renormalization: Patch Formalism</p>
    </div>

    <div class="content-section">
      <h2>三维费米子系统概述</h2>
      <div class="concept-box">
        <h3>三维系统的特点</h3>
        <p>三维费米子系统相比低维系统具有独特的性质：</p>
        <ul>
          <li>费米面为二维曲面</li>
          <li>相互作用的不相关性质</li>
          <li>费米液体理论的稳定性</li>
          <li>Landau阻尼效应</li>
          <li>更复杂的拓扑结构</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>基本哈密顿量</h3>
        <p>三维无自旋费米子系统：</p>
        <div class="formula-block">
                H = ∑_k ε_k c<sup>†</sup>_k c_k + (1/2V) ∑_{k,k',q} V(q) c<sup>†</sup>_{k+q} c<sup>†</sup>_{k'-q} c_{k'} c_k
              </div>
        <p>其中三维能谱为：</p>
        <div class="formula-block">
          ε_k = -2t(cos k_x + cos k_y + cos k_z) - μ
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Patch分解方法</h2>
      <div class="patch-formalism">
        <div class="concept-box">
          <h3>Patch方法的动机</h3>
          <p>在三维系统中，费米面是一个复杂的二维曲面，需要特殊的处理方法：</p>
          <ul>
            <li>将费米面分解为多个小的patch</li>
            <li>每个patch内部近似为平面</li>
            <li>简化重整化群分析</li>
            <li>保持旋转对称性</li>
          </ul>
        </div>

        <div class="patch-decomposition">
          <h3>Patch分解</h3>
          <div class="patch-grid">
            <div class="patch-card">
              <h4>Patch定义</h4>
              <p>将费米面分解为N个patch：</p>
              <div class="formula-block">
                ψ(k) = ∑_{i=1}^N ψ_i(k)
              </div>
              <p>其中每个patch覆盖费米面的一小部分</p>
            </div>

            <div class="patch-card">
              <h4>局域坐标系</h4>
              <p>在每个patch内建立局域坐标：</p>
              <div class="formula-block">
                k = k_F^{(i)} + k_⊥ n̂_i + k_∥
              </div>
              <p>其中n̂_i是patch i的法向量</p>
            </div>
          </div>
        </div>

        <div class="patch-properties">
          <h3>Patch的几何性质</h3>
          <div class="geometry-grid">
            <div class="geometry-card">
              <h4>曲率效应</h4>
              <ul>
                <li>费米面的局域曲率</li>
                <li>高阶动量修正</li>
                <li>几何相位</li>
                <li>Berry曲率</li>
              </ul>
            </div>

            <div class="geometry-card">
              <h4>对称性约束</h4>
              <ul>
                <li>点群对称性</li>
                <li>时间反演对称性</li>
                <li>粒子-空穴对称性</li>
                <li>手性对称性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相互作用的分类</h2>
      <div class="interaction-classification">
        <div class="interaction-types">
          <h3>相互作用通道</h3>
          <div class="channel-grid">
            <div class="channel-card forward">
              <h4>前向散射</h4>
              <p>同一patch内的散射：</p>
              <div class="formula-block">
                g_0: (i,i) → (i,i)
              </div>
              <ul>
                <li>密度-密度相互作用</li>
                <li>Hartree-Fock修正</li>
                <li>费米速度重整化</li>
              </ul>
            </div>

            <div class="channel-card backward">
              <h4>后向散射</h4>
              <p>相对patch间的散射：</p>
              <div class="formula-block">
                g_1: (i,j) → (j,i), j = i + π
              </div>
              <ul>
                <li>反铁磁涨落</li>
                <li>自旋密度波</li>
                <li>嵌套效应</li>
              </ul>
            </div>

            <div class="channel-card exchange">
              <h4>交换散射</h4>
              <p>相邻patch间的散射：</p>
              <div class="formula-block">
                g_2: (i,j) → (k,l)
              </div>
              <ul>
                <li>动量传递</li>
                <li>角度依赖</li>
                <li>多体效应</li>
              </ul>
            </div>

            <div class="channel-card pairing">
              <h4>配对散射</h4>
              <p>Cooper对形成：</p>
              <div class="formula-block">
                g_3: (i,-i) → (j,-j)
              </div>
              <ul>
                <li>超导不稳定性</li>
                <li>配对对称性</li>
                <li>能隙函数</li>
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
          <h3>能量壳层积分</h3>
          <p>从高能到低能逐步积分费米子自由度：</p>
          <div class="formula-block">
            Λ → Λ/s, s = e^{dl}
          </div>
          <p>其中l是重整化群流参数。</p>
        </div>

        <div class="beta-functions">
          <h3>β函数</h3>
          <div class="beta-grid">
            <div class="beta-card">
              <h4>前向散射β函数</h4>
              <div class="formula-block">
                β_0 = dg_0/dl = -g_1²/(2π²v_F)
              </div>
              <p>受后向散射的反馈影响</p>
            </div>

            <div class="beta-card">
              <h4>后向散射β函数</h4>
              <div class="formula-block">
                β_1 = dg_1/dl = -g_1g_2/(2π²v_F) + g_0g_1/(2π²v_F)
              </div>
              <p>包含交换和前向散射的贡献</p>
            </div>

            <div class="beta-card">
              <h4>交换散射β函数</h4>
              <div class="formula-block">
                β_2 = dg_2/dl = -g_2²/(2π²v_F) + g_1²/(4π²v_F)
              </div>
              <p>自相互作用和后向散射驱动</p>
            </div>

            <div class="beta-card">
              <h4>配对散射β函数</h4>
              <div class="formula-block">
                β_3 = dg_3/dl = -g_3²/(2π²v_F) + g_1g_2/(4π²v_F)
              </div>
              <p>竞争相互作用的影响</p>
            </div>
          </div>
        </div>

        <div class="rg-analysis">
          <h3>重整化群分析</h3>
          <div class="analysis-points">
            <div class="analysis-card">
              <h4>弱耦合展开</h4>
              <p>在弱耦合极限下，可以进行微扰展开：</p>
              <ul>
                <li>一圈修正占主导</li>
                <li>对数发散的处理</li>
                <li>边际算符的识别</li>
              </ul>
            </div>

            <div class="analysis-card">
              <h4>强耦合行为</h4>
              <p>当耦合常数增大时：</p>
              <ul>
                <li>非微扰效应</li>
                <li>相变的触发</li>
                <li>新相的出现</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>固定点和相图</h2>
      <div class="fixed-points">
        <div class="fp-classification">
          <h3>重整化群固定点</h3>
          <div class="fp-grid">
            <div class="fp-card stable">
              <h4>费米液体固定点</h4>
              <div class="formula-block">
                g_0* = g_1* = g_2* = g_3* = 0
              </div>
              <ul>
                <li>弱相互作用极限</li>
                <li>准粒子图像</li>
                <li>Landau参数</li>
                <li>线性比热</li>
              </ul>
            </div>

            <div class="fp-card unstable">
              <h4>反铁磁固定点</h4>
              <div class="formula-block">
                g_1* ≠ 0, g_0* = g_2* = g_3* = 0
              </div>
              <ul>
                <li>磁性长程序</li>
                <li>自旋密度波</li>
                <li>费米面重构</li>
                <li>能隙打开</li>
              </ul>
            </div>

            <div class="fp-card critical">
              <h4>超导固定点</h4>
              <div class="formula-block">
                g_3* ≠ 0, g_0* = g_1* = g_2* = 0
              </div>
              <ul>
                <li>Cooper对凝聚</li>
                <li>配对能隙</li>
                <li>Meissner效应</li>
                <li>零电阻</li>
              </ul>
            </div>

            <div class="fp-card mixed">
              <h4>混合固定点</h4>
              <div class="formula-block">
                多个g_i* ≠ 0
              </div>
              <ul>
                <li>竞争序参量</li>
                <li>量子临界点</li>
                <li>非费米液体</li>
                <li>奇异金属相</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="phase-diagram">
          <h3>三维相图</h3>
          <div class="phase-regions">
            <div class="region-card normal">
              <h4>正常费米液体相</h4>
              <ul>
                <li>T²电阻率</li>
                <li>线性比热</li>
                <li>Pauli磁化率</li>
                <li>准粒子峰</li>
              </ul>
            </div>

            <div class="region-card magnetic">
              <h4>磁有序相</h4>
              <ul>
                <li>反铁磁长程序</li>
                <li>自旋波激发</li>
                <li>磁畴结构</li>
                <li>磁阻效应</li>
              </ul>
            </div>

            <div class="region-card superconducting">
              <h4>超导相</h4>
              <ul>
                <li>s波或d波配对</li>
                <li>约瑟夫森效应</li>
                <li>磁通量子化</li>
                <li>同位素效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Landau阻尼和屏蔽效应</h2>
      <div class="damping-effects">
        <div class="landau-damping">
          <h3>Landau阻尼机制</h3>
          <div class="damping-grid">
            <div class="damping-card">
              <h4>粒子-空穴激发</h4>
              <p>集体激发通过创造粒子-空穴对而衰减：</p>
              <div class="formula-block">
                Γ(q,ω) ∝ ω/q
              </div>
              <ul>
                <li>相空间约束</li>
                <li>动量守恒</li>
                <li>能量守恒</li>
              </ul>
            </div>

            <div class="damping-card">
              <h4>动态屏蔽</h4>
              <p>库仑相互作用的频率依赖屏蔽：</p>
              <div class="formula-block">
                V_eff(q,ω) = V(q)/ε(q,ω)
              </div>
              <ul>
                <li>Thomas-Fermi屏蔽</li>
                <li>等离子体振荡</li>
                <li>介电函数</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="screening-effects">
          <h3>屏蔽效应的影响</h3>
          <div class="screening-grid">
            <div class="screening-card">
              <h4>静态屏蔽</h4>
              <ul>
                <li>Thomas-Fermi屏蔽长度</li>
                <li>Friedel振荡</li>
                <li>RKKY相互作用</li>
              </ul>
            </div>

            <div class="screening-card">
              <h4>动态屏蔽</h4>
              <ul>
                <li>等离子体频率</li>
                <li>集体激发模式</li>
                <li>声子软化</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测和材料实现</h2>
      <div class="experimental-section">
        <div class="materials-examples">
          <h3>典型三维材料</h3>
          <div class="materials-grid">
            <div class="material-card">
              <h4>简单金属</h4>
              <ul>
                <li>铜(Cu)</li>
                <li>银(Ag)</li>
                <li>金(Au)</li>
                <li>铝(Al)</li>
              </ul>
              <p>特征：自由电子气模型、费米液体行为</p>
            </div>

            <div class="material-card">
              <h4>过渡金属</h4>
              <ul>
                <li>铁(Fe)</li>
                <li>镍(Ni)</li>
                <li>钯(Pd)</li>
                <li>铂(Pt)</li>
              </ul>
              <p>特征：d轨道贡献、强关联效应</p>
            </div>

            <div class="material-card">
              <h4>重费米子材料</h4>
              <ul>
                <li>CeCoIn₅</li>
                <li>UBe₁₃</li>
                <li>CeIrIn₅</li>
                <li>PuCoGa₅</li>
              </ul>
              <p>特征：大有效质量、量子临界性</p>
            </div>
          </div>
        </div>

        <div class="measurement-techniques">
          <h3>实验技术</h3>
          <div class="technique-grid">
            <div class="technique-card">
              <h4>de Haas-van Alphen效应</h4>
              <ul>
                <li>费米面测量</li>
                <li>有效质量</li>
                <li>散射时间</li>
                <li>轨道磁化率</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>比热测量</h4>
              <ul>
                <li>电子比热系数</li>
                <li>态密度</li>
                <li>相变识别</li>
                <li>熵变化</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>输运性质</h4>
              <ul>
                <li>电阻率温度依赖</li>
                <li>霍尔系数</li>
                <li>磁阻效应</li>
                <li>热导率</li>
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
            <h3>函数重整化群</h3>
            <ul>
              <li>频率依赖顶点</li>
              <li>多回路计算</li>
              <li>截断方案</li>
              <li>数值积分</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>量子蒙特卡罗</h3>
            <ul>
              <li>连续时间算法</li>
              <li>辅助场方法</li>
              <li>符号问题</li>
              <li>有限尺寸标度</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>动力学平均场</h3>
            <ul>
              <li>自洽条件</li>
              <li>杂质求解器</li>
              <li>集团扩展</li>
              <li>非局域修正</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>密度泛函理论</h3>
            <ul>
              <li>第一性原理</li>
              <li>交换关联泛函</li>
              <li>能带结构</li>
              <li>费米面计算</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论方法</h3>
          <ul>
            <li>Patch分解技术</li>
            <li>重整化群流</li>
            <li>固定点分析</li>
            <li>相图构建</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理机制</h3>
          <ul>
            <li>Landau阻尼</li>
            <li>动态屏蔽</li>
            <li>相互作用分类</li>
            <li>对称性破缺</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验现象</h3>
          <ul>
            <li>费米液体行为</li>
            <li>量子振荡</li>
            <li>相变现象</li>
            <li>输运性质</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>计算工具</h3>
          <ul>
            <li>函数重整化群</li>
            <li>量子蒙特卡罗</li>
            <li>动力学平均场</li>
            <li>第一性原理</li>
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

.patch-grid, .geometry-grid, .channel-grid, .beta-grid, .fp-grid, .damping-grid, .screening-grid, .materials-grid, .technique-grid, .method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.patch-card, .geometry-card, .channel-card, .beta-card, .fp-card, .damping-card, .screening-card, .material-card, .technique-card, .method-card, .analysis-card, .region-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.patch-card:hover, .geometry-card:hover, .channel-card:hover, .beta-card:hover, .fp-card:hover, .damping-card:hover, .screening-card:hover, .material-card:hover, .technique-card:hover, .method-card:hover, .analysis-card:hover, .region-card:hover {
  transform: translateY(-5px);
}

.patch-card h4, .geometry-card h4, .channel-card h4, .beta-card h4, .fp-card h4, .damping-card h4, .screening-card h4, .material-card h4, .technique-card h4, .method-card h3, .analysis-card h4, .region-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.channel-card.forward {
  border-top-color: #3498db;
}

.channel-card.forward h4 {
  color: #3498db;
}

.channel-card.backward {
  border-top-color: #e74c3c;
}

.channel-card.exchange {
  border-top-color: #f39c12;
}

.channel-card.exchange h4 {
  color: #f39c12;
}

.channel-card.pairing {
  border-top-color: #9b59b6;
}

.channel-card.pairing h4 {
  color: #9b59b6;
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

.fp-card.critical {
  border-top-color: #9b59b6;
}

.fp-card.critical h4 {
  color: #9b59b6;
}

.fp-card.mixed {
  border-top-color: #f39c12;
}

.fp-card.mixed h4 {
  color: #f39c12;
}

.region-card.normal {
  border-top-color: #3498db;
}

.region-card.normal h4 {
  color: #3498db;
}

.region-card.magnetic {
  border-top-color: #e74c3c;
}

.region-card.magnetic h4 {
  color: #e74c3c;
}

.region-card.superconducting {
  border-top-color: #9b59b6;
}

.region-card.superconducting h4 {
  color: #9b59b6;
}

.analysis-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.phase-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  
  .patch-grid, .geometry-grid, .channel-grid, .beta-grid, .fp-grid, .damping-grid, .screening-grid, .materials-grid, .technique-grid, .method-grid {
    grid-template-columns: 1fr;
  }
  
  .analysis-points, .phase-regions {
    grid-template-columns: 1fr;
  }
}
</style>