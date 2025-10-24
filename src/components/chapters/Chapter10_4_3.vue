<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.4.3 Kane-Mele模型与量子自旋霍尔绝缘体</h1>
      <p class="chapter-subtitle">探索自旋轨道耦合驱动的拓扑绝缘体与Z₂拓扑不变量</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>2005年，Kane和Mele提出了一个开创性的模型，将自旋轨道耦合引入石墨烯的紧束缚模型中。这个模型预言了量子自旋霍尔效应的存在，即使在没有外磁场的情况下，系统也能表现出类似量子霍尔效应的拓扑性质，但具有时间反演对称性。</p>
          
          <p>Kane-Mele模型是第一个二维拓扑绝缘体的理论模型，引入了Z₂拓扑不变量的概念，为后来三维拓扑绝缘体的发现奠定了理论基础。本节将详细介绍Kane-Mele模型的构建、拓扑性质以及量子自旋霍尔效应。</p>
        </div>
      </div>

      <!-- Kane-Mele模型的构建 -->
      <div class="content-card">
        <h2 class="card-title">Kane-Mele模型的构建</h2>
        <div class="card-content">
          <h3>模型哈密顿量</h3>
          <p>Kane-Mele模型在石墨烯紧束缚模型基础上添加了自旋轨道耦合项：</p>
          <div class="formula">
            $$H = H_0 + H_{SO} + H_{Rashba} + H_{stag}$$</div>

          <h3>各项详细表达式</h3>
          
          <h4>基础紧束缚项</h4> <div class="formula">$$H_0 = -t \sum_{\langle i,j \rangle, \sigma} c_{i\sigma}^\dagger c_{j\sigma}$$</div>

          <h4>内禀自旋轨道耦合</h4> <div class="formula">$$H_{SO} = i\lambda_{SO} \sum_{\langle\langle i,j \rangle\rangle, \sigma\sigma'} \nu_{ij} s_z^{\sigma\sigma'} c_{i\sigma}^\dagger c_{j\sigma'}$$</div>

          <h4>Rashba自旋轨道耦合</h4> <div class="formula">$$H_{Rashba} = i\lambda_R \sum_{\langle i,j \rangle, \sigma\sigma'} (\mathbf{s} \times \hat{\mathbf{d}}_{ij})_z^{\sigma\sigma'} c_{i\sigma}^\dagger c_{j\sigma'}$$</div>

          <h4>交错在位能</h4> <div class="formula">$$H_{stag} = \lambda_v \sum_{i \in A, \sigma} c_{i\sigma}^\dagger c_{i\sigma} - \lambda_v \sum_{i \in B, \sigma} c_{i\sigma}^\dagger c_{i\sigma}$$</div>

          <h3>模型参数</h3>
          <div class="parameter-grid">
            <div class="param-item">
              <h4>跳跃积分 t</h4>
              <p>最近邻原子间的跳跃强度</p>
            </div>
            <div class="param-item">
              <h4>内禀SOC λ_SO</h4>
              <p>次近邻自旋轨道耦合强度</p>
            </div>
            <div class="param-item">
              <h4>Rashba SOC λ_R</h4>
              <p>最近邻Rashba耦合强度</p>
            </div>
            <div class="param-item">
              <h4>交错势 λ_v</h4>
              <p>子晶格间的在位能差</p>
            </div>
          </div>

          <h3>动量空间哈密顿量</h3>
          <p>在动量空间中，哈密顿量可以写成：</p> <div class="formula">$$H(\mathbf{k}) = \mathbf{d}(\mathbf{k}) \cdot \boldsymbol{\sigma} \otimes I_2 + \mathbf{h}(\mathbf{k}) \cdot I_2 \otimes \mathbf{s}$$</div>
          
          <p>其中：</p> <div class="formula">$$d_x(\mathbf{k}) = t[1 + \cos(k_x a) + \cos(k_y a)]$$</div> <div class="formula">$$d_y(\mathbf{k}) = t[\sin(k_x a) + \sin(k_y a)]$$</div> <div class="formula">$$d_z(\mathbf{k}) = \lambda_v + 2\lambda_{SO}[\sin(k_x a) - \sin(k_y a)]$$</div>
        </div>
      </div>

      <!-- 能带结构与拓扑相 -->
      <div class="content-card">
        <h2 class="card-title">能带结构与拓扑相</h2>
        <div class="card-content">
          <h3>本征能量</h3>
          <p>系统的本征能量为：</p> <div class="formula">$$E_{\pm,\sigma}(\mathbf{k}) = \pm \sqrt{|\mathbf{d}(\mathbf{k})|^2 + |\mathbf{h}(\mathbf{k})|^2}$$</div>

          <h3>能隙开合条件</h3>
          <p>能隙在K和K'点关闭，条件为：</p> <div class="formula">$$|\lambda_v| = 3\sqrt{3}\lambda_{SO}$$</div>

          <h3>拓扑相图</h3>
          <div class="phase-diagram">
            <div class="phase-item">
              <h4>量子自旋霍尔相 (|λ_v| < 3√3λ_SO)</h4>
              <ul>
                <li>Z₂ = 1 (非平凡)</li>
                <li>螺旋边界态</li>
                <li>量子化自旋霍尔电导</li>
                <li>时间反演对称性保护</li>
              </ul>
            </div>
            <div class="phase-item">
              <h4>平凡绝缘体相 (|λ_v| > 3√3λ_SO)</h4>
              <ul>
                <li>Z₂ = 0 (平凡)</li>
                <li>无边界态</li>
                <li>普通能带绝缘体</li>
                <li>能隙由交错势主导</li>
              </ul>
            </div>
          </div>

          <h3>自旋轨道耦合的作用</h3>
          <div class="soc-effects">
            <div class="effect-item">
              <h4>内禀SOC</h4>
              <p>在K和K'点打开能隙，产生拓扑质量项</p>
            </div>
            <div class="effect-item">
              <h4>Rashba SOC</h4>
              <p>破坏面外镜面对称性，但保持时间反演对称性</p>
            </div>
            <div class="effect-item">
              <h4>交错势</h4>
              <p>破坏子晶格对称性，竞争拓扑相</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Z₂拓扑不变量 -->
      <div class="content-card">
        <h2 class="card-title">Z₂拓扑不变量</h2>
        <div class="card-content">
          <h3>Z₂分类理论</h3>
          <p>对于具有时间反演对称性的二维绝缘体，拓扑分类由Z₂不变量描述：</p> <div class="formula">$$\nu = 0 \text{ (平凡)}, \quad \nu = 1 \text{ (非平凡)}$$</div>

          <h3>Pfaffian公式</h3>
          <p>Z₂不变量可以通过Pfaffian计算：</p> <div class="formula">$$(-1)^\nu = \sqrt{\frac{\text{Pf}[w(\mathbf{k}_1)]\text{Pf}[w(\mathbf{k}_3)]}{\text{Pf}[w(\mathbf{k}_2)]\text{Pf}[w(\mathbf{k}_4)]}}$$</div><p>其中$\mathbf{k}_i$是布里渊区的四个时间反演不变动量点。</p>

          <h3>Wilson环方法</h3>
          <p>另一种计算方法是通过Wilson环：</p>
          <div class="formula">$$\nu = \frac{1}{2\pi i} \oint_C \text{Tr}[\mathcal{A}(\mathbf{k})] d\mathbf{k} \pmod{2}$$</div>

          <h3>能带反转判据</h3>
          <p>对于Kane-Mele模型，Z₂不变量可以通过能带反转判断：</p>
          <div class="band-inversion">
            <div class="inversion-item">
              <h4>K点能隙</h4><p>$\Delta_K = \lambda_v - 3\sqrt{3}\lambda_{SO}$</p>
            </div>
            <div class="inversion-item">
              <h4>K'点能隙</h4><p>$\Delta_{K'} = \lambda_v + 3\sqrt{3}\lambda_{SO}$</p>
            </div>
            <div class="inversion-item">
              <h4>Z₂不变量</h4><p>$\nu = \frac{1}{2}[\text{sgn}(\Delta_K) - \text{sgn}(\Delta_{K'})]$</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 量子自旋霍尔效应 -->
      <div class="content-card">
        <h2 class="card-title">量子自旋霍尔效应</h2>
        <div class="card-content">
          <h3>螺旋边界态</h3>
          <p>在量子自旋霍尔相中，边界处存在螺旋边界态：</p>
          <ul>
            <li><strong>自旋-动量锁定：</strong>电子的自旋方向与动量方向垂直</li>
            <li><strong>时间反演保护：</strong>反向传播的电子具有相反自旋</li>
            <li><strong>无背散射：</strong>时间反演对称的杂质不能引起背散射</li>
          </ul>

          <h3>边界态色散</h3>
          <p>螺旋边界态的色散关系为：</p>
          <div class="formula">$$E_{edge}(k_y) = \pm v_F k_y$$</div>
          
          <p>其中费米速度为：</p> <div class="formula">$$v_F = \frac{3ta}{2\hbar}$$</div>

          <h3>自旋霍尔电导</h3>
          <p>量子自旋霍尔效应的特征是量子化的自旋霍尔电导：</p> <div class="formula">$$\sigma_{xy}^{spin} = \nu \frac{e}{2\pi}$$</div>

          <h3>边界态的自旋结构</h3>
          <div class="spin-structure">
            <div class="spin-item">
              <h4>上边界</h4>
              <p>右行电子：自旋向上<br>左行电子：自旋向下</p>
            </div>
            <div class="spin-item">
              <h4>下边界</h4>
              <p>右行电子：自旋向下<br>左行电子：自旋向上</p>
            </div>
            <div class="spin-item">
              <h4>左边界</h4>
              <p>上行电子：自旋向右<br>下行电子：自旋向左</p>
            </div>
            <div class="spin-item">
              <h4>右边界</h4>
              <p>上行电子：自旋向左<br>下行电子：自旋向右</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 对称性分析 -->
      <div class="content-card">
        <h2 class="card-title">对称性分析</h2>
        <div class="card-content">
          <h3>时间反演对称性</h3>
          <p>Kane-Mele模型保持时间反演对称性：</p> <div class="formula">$$\mathcal{T} H(\mathbf{k}) \mathcal{T}^{-1} = H(-\mathbf{k})$$</div>
          
          <p>其中时间反演算符为：</p> <div class="formula">$$\mathcal{T} = i\sigma_y \otimes s_y \mathcal{K}$$</div>

          <h3>空间反演对称性</h3>
          <p>在没有Rashba耦合时，系统具有空间反演对称性：</p> <div class="formula">$$\mathcal{P} H(\mathbf{k}) \mathcal{P}^{-1} = H(-\mathbf{k})$$</div>

          <h3>对称性保护的拓扑相</h3>
          <div class="symmetry-protection">
            <div class="protection-item">
              <h4>时间反演保护</h4>
              <ul>
                <li>Kramers简并</li>
                <li>螺旋边界态</li>
                <li>Z₂拓扑分类</li>
              </ul>
            </div>
            <div class="protection-item">
              <h4>对称性破缺效应</h4>
              <ul>
                <li>磁杂质：破坏时间反演</li>
                <li>电场：引入Rashba耦合</li>
                <li>应变：修改跳跃积分</li>
              </ul>
            </div>
          </div>

          <h3>拓扑相变</h3>
          <p>拓扑相变发生在能隙关闭点：</p> <div class="formula">$$\lambda_v = \pm 3\sqrt{3}\lambda_{SO}$$
          </div>
          
          <p>相变点处，系统变为无能隙的Dirac半金属。</p>
        </div>
      </div>

      <!-- 实验实现与观测 -->
      <div class="content-card">
        <h2 class="card-title">实验实现与观测</h2>
        <div class="card-content">
          <h3>石墨烯中的挑战</h3>
          <p>在石墨烯中实现Kane-Mele模型面临的困难：</p>
          <ul>
            <li><strong>弱自旋轨道耦合：</strong>λ_SO ~ 10⁻³ meV，远小于温度</li>
            <li><strong>环境效应：</strong>衬底、杂质破坏拓扑性质</li>
            <li><strong>能隙太小：</strong>难以在实验中观测</li>
          </ul>

          <h3>其他材料平台</h3>
          <div class="material-platforms">
            <div class="platform-item">
              <h4>HgTe/CdTe量子阱</h4>
              <ul>
                <li>首个实验实现的2D拓扑绝缘体</li>
                <li>可调节的能带反转</li>
                <li>清晰的边界态观测</li>
              </ul>
            </div>
            <div class="platform-item">
              <h4>InAs/GaSb双量子阱</h4>
              <ul>
                <li>类型II能带排列</li>
                <li>电场可调的拓扑相变</li>
                <li>Josephson结应用</li>
              </ul>
            </div>
            <div class="platform-item">
              <h4>WTe₂单分子层</h4>
              <ul>
                <li>大的自旋轨道耦合</li>
                <li>室温稳定</li>
                <li>可电场调控</li>
              </ul>
            </div>
          </div>

          <h3>实验观测方法</h3>
          <div class="experimental-methods">
            <div class="method-item">
              <h4>输运测量</h4>
              <ul>
                <li>四端电阻测量</li>
                <li>量子化电导平台</li>
                <li>温度依赖性</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>ARPES</h4>
              <ul>
                <li>直接观测边界态</li>
                <li>自旋分辨测量</li>
                <li>能带结构确认</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>STM/STS</h4>
              <ul>
                <li>局域态密度</li>
                <li>空间分辨能谱</li>
                <li>边界态成像</li>
              </ul>
            </div>
          </div>

          <h3>关键实验结果</h3>
          <div class="key-results">
            <div class="result-item">
              <h4>量子化电导</h4>
              <p>G = 2e²/h的量子化平台</p>
            </div>
            <div class="result-item">
              <h4>螺旋边界态</h4>
              <p>自旋-动量锁定的直接观测</p>
            </div>
            <div class="result-item">
              <h4>拓扑保护</h4>
              <p>对非磁性杂质的鲁棒性</p>
            </div>
            <div class="result-item">
              <h4>相变调控</h4>
              <p>通过门电压调节拓扑相变</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 应用与展望 -->
      <div class="content-card">
        <h2 class="card-title">应用与展望</h2>
        <div class="card-content">
          <h3>量子器件应用</h3>
          <div class="device-applications">
            <div class="app-item">
              <h4>拓扑场效应管</h4>
              <ul>
                <li>低功耗开关器件</li>
                <li>拓扑保护的传输</li>
                <li>高开关比</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>自旋电子学器件</h4>
              <ul>
                <li>自旋过滤器</li>
                <li>自旋阀</li>
                <li>自旋存储器</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>量子计算</h4>
              <ul>
                <li>拓扑量子比特</li>
                <li>容错量子门</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
          </div>

          <h3>理论发展</h3>
          <p>Kane-Mele模型启发的理论进展：</p>
          <ul>
            <li><strong>三维拓扑绝缘体：</strong>Z₂分类的三维推广</li>
            <li><strong>拓扑超导体：</strong>配对与拓扑的结合</li>
            <li><strong>拓扑半金属：</strong>Weyl和Dirac半金属</li>
            <li><strong>高阶拓扑相：</strong>铰链态和角态</li>
          </ul>

          <h3>材料设计</h3>
          <div class="material-design">
            <div class="design-item">
              <h4>能带工程</h4>
              <p>通过应变、电场调节拓扑性质</p>
            </div>
            <div class="design-item">
              <h4>异质结构</h4>
              <p>界面工程实现新拓扑相</p>
            </div>
            <div class="design-item">
              <h4>人工结构</h4>
              <p>超晶格、摩尔纹理</p>
            </div>
            <div class="design-item">
              <h4>机器学习</h4>
              <p>AI辅助材料发现</p>
            </div>
          </div>

          <h3>未来挑战</h3>
          <div class="future-challenges">
            <h4>技术挑战</h4>
            <ul>
              <li>室温工作的拓扑器件</li>
              <li>大规模集成制备</li>
              <li>界面质量控制</li>
              <li>拓扑性质的精确调控</li>
            </ul>
            
            <h4>科学问题</h4>
            <ul>
              <li>强关联拓扑态</li>
              <li>非线性拓扑效应</li>
              <li>拓扑量子临界性</li>
              <li>多体拓扑不变量</li>
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

.soc-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
}

.effect-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.band-inversion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.inversion-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.inversion-item h4 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.spin-structure {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.spin-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.spin-item h4 {
  color: #be185d;
  margin-bottom: 0.5rem;
}

.symmetry-protection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.protection-item {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.protection-item h4 {
  color: #15803d;
  margin-bottom: 1rem;
}

.material-platforms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.platform-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.platform-item h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.experimental-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method-item {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1rem;
}

.method-item h4 {
  color: #a16207;
  margin-bottom: 0.5rem;
}

.key-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.result-item {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.result-item h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.device-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.app-item {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.app-item h4 {
  color: #7c2d12;
  margin-bottom: 1rem;
}

.material-design {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.design-item {
  background: #f0fdfa;
  border: 1px solid #14b8a6;
  border-radius: 0.5rem;
  padding: 1rem;
}

.design-item h4 {
  color: #134e4a;
  margin-bottom: 0.5rem;
}

.future-challenges {
  background: #fef2f2;
  border: 1px solid #f87171;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.future-challenges h4 {
  color: #991b1b;
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
  .soc-effects,
  .band-inversion,
  .spin-structure,
  .symmetry-protection,
  .material-platforms,
  .experimental-methods,
  .key-results,
  .device-applications,
  .material-design {
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