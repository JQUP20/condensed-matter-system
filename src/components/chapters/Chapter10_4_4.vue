<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.4.4 Z₂拓扑不变量与拓扑绝缘体</h1>
      <p class="chapter-subtitle">深入理解时间反演对称保护的拓扑分类与三维拓扑绝缘体</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>Z₂拓扑不变量是描述时间反演对称系统拓扑性质的核心概念。与整数量子霍尔效应中的Chern数不同，Z₂不变量只能取0或1两个值，但它能够完整地刻画具有时间反演对称性的拓扑绝缘体的拓扑性质。</p>
          
          <p>本节将系统介绍Z₂拓扑不变量的数学定义、物理意义以及计算方法，并详细讨论二维和三维拓扑绝缘体的分类。我们还将探讨Z₂不变量与边界态、表面态之间的深刻联系，以及它们在实际材料中的实现。</p>
        </div>
      </div>

      <!-- Z₂拓扑不变量的数学定义 -->
      <div class="content-card">
        <h2 class="card-title">Z₂拓扑不变量的数学定义</h2>
        <div class="card-content">
          <h3>时间反演对称性</h3>
          <p>时间反演算符$\mathcal{T}$满足：</p>
          <div class="formula">$$\mathcal{T} H(\mathbf{k}) \mathcal{T}^{-1} = H(-\mathbf{k})$$</div>
          
          <p>对于自旋1/2系统：</p> <div class="formula">$$\mathcal{T} = i\sigma_y \mathcal{K}, \quad \mathcal{T}^2 = -1$$</div>

          <h3>Kramers简并</h3>
          <p>时间反演对称性导致Kramers简并：</p> <div class="formula">$$E_n(\mathbf{k}) = E_n(-\mathbf{k})$$</div>
          
          <p>在时间反演不变动量点（TRIM），每个能级至少二重简并。</p>

          <h3>二维Z₂不变量</h3>
          <p>二维系统的Z₂不变量定义为：</p> <div class="formula">$$(-1)^\nu = \prod_{i=1}^4 \delta_i$$</div><p>其中$\delta_i$是第i个TRIM点的Pfaffian：</p>
          <div class="formula">$$\delta_i = \frac{\text{Pf}[w(\Lambda_i)]}{\sqrt{\det[w(\Lambda_i)]}}$$</div>

          <h3>三维Z₂不变量</h3><p>三维系统有四个Z₂不变量：$(ν_0; ν_1ν_2ν_3)$</p>
          <div class="formula">$$(-1)^{\nu_0} = \prod_{i=1}^8 \delta_i$$</div> <div class="formula">$$(-1)^{\nu_i} = \prod_{n_j=0,1; n_k=0,1} \delta_{n_1n_2n_3}$$</div><p>其中$i \neq j \neq k$，$n_i = 1$。</p>

          <h3>Wilson环方法</h3>
          <p>Z₂不变量也可以通过Wilson环计算：</p>
          <div class="formula">$$\nu = \frac{1}{2\pi i} \oint_C \text{Tr}[\mathcal{A}(\mathbf{k})] d\mathbf{k} \pmod{2}$$</div><p>其中$\mathcal{A}(\mathbf{k})$是Berry连接矩阵。</p>
        </div>
      </div>

      <!-- 拓扑绝缘体的分类 -->
      <div class="content-card">
        <h2 class="card-title">拓扑绝缘体的分类</h2>
        <div class="card-content">
          <h3>二维拓扑绝缘体</h3>
          <div class="classification-2d">
            <div class="class-item">
              <h4>量子自旋霍尔绝缘体 (ν = 1)</h4>
              <ul>
                <li>螺旋边界态</li>
                <li>时间反演保护</li>
                <li>量子化自旋霍尔电导</li>
                <li>例：HgTe/CdTe量子阱</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>平凡绝缘体 (ν = 0)</h4>
              <ul>
                <li>无拓扑边界态</li>
                <li>普通能带绝缘体</li>
                <li>可能有平凡边界态</li>
                <li>例：普通半导体</li>
              </ul>
            </div>
          </div>

          <h3>三维拓扑绝缘体</h3>
          <div class="classification-3d">
            <div class="class-item">
              <h4>强拓扑绝缘体 (ν₀ = 1)</h4>
              <ul>
                <li>所有表面都有Dirac锥</li>
                <li>表面态不能被局域化</li>
                <li>拓扑保护最强</li>
                <li>例：Bi₂Se₃, Bi₂Te₃</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>弱拓扑绝缘体 (ν₀ = 0, νᵢ ≠ 0)</h4>
              <ul>
                <li>部分表面有Dirac锥</li>
                <li>表面态可被局域化</li>
                <li>对无序敏感</li>
                <li>例：层状材料</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>平凡绝缘体 (ν₀ = νᵢ = 0)</h4>
              <ul>
                <li>无拓扑表面态</li>
                <li>普通三维绝缘体</li>
                <li>可能有平凡表面态</li>
                <li>例：普通半导体</li>
              </ul>
            </div>
          </div>

          <h3>拓扑相变</h3>
          <p>拓扑相变发生在体能隙关闭的点：</p>
          <div class="formula">$$\Delta(\mathbf{k}) = 0$$</div>
          
          <p>相变前后Z₂不变量发生改变：</p>
          <div class="phase-transition">
            <div class="transition-item">
              <h4>能带反转</h4>
              <p>价带和导带在TRIM点交换位置</p>
            </div>
            <div class="transition-item">
              <h4>拓扑不变量跳跃</h4>
              <p>Z₂不变量从0变为1或从1变为0</p>
            </div>
            <div class="transition-item">
              <h4>表面态出现/消失</h4>
              <p>拓扑表面态的产生或湮灭</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Z₂不变量的计算方法 -->
      <div class="content-card">
        <h2 class="card-title">Z₂不变量的计算方法</h2>
        <div class="card-content">
          <h3>Pfaffian方法</h3><p>构造反对称矩阵$w_{mn}(\mathbf{k})$：</p>
          <div class="formula">$$w_{mn}(\mathbf{k}) = \langle u_m(\mathbf{k}) | \mathcal{T} | u_n(\mathbf{k}) \rangle$$</div>
          
          <p>在TRIM点计算Pfaffian：</p> <div class="formula">$$\delta_i = \frac{\text{Pf}[w(\Lambda_i)]}{\sqrt{\det[w(\Lambda_i)]}} = \pm 1$$</div>

          <h3>能带反转判据</h3>
          <p>对于简单模型，可以通过能带反转判断：</p>
          <div class="band-inversion-criteria">
            <div class="criteria-item">
              <h4>二维系统</h4>
              <p>比较K和K'点的能隙符号</p> <div class="formula">$$\nu = \frac{1}{2}[\text{sgn}(\Delta_K) - \text{sgn}(\Delta_{K'})]$$</div>
            </div>
            <div class="criteria-item">
              <h4>三维系统</h4>
              <p>比较8个TRIM点的能隙符号</p> <div class="formula">$$(-1)^{\nu_0} = \prod_{i=1}^8 \text{sgn}(\Delta_i)$$</div>
            </div>
          </div>

          <h3>Wilson环积分</h3>
          <p>沿布里渊区边界的Wilson环：</p> <div class="formula">$$W = \mathcal{P} \exp\left( i \oint_C \mathcal{A}(\mathbf{k}) \cdot d\mathbf{k} \right)$$</div>
          
          <p>Z₂不变量为Wilson环本征值的相位：</p> <div class="formula">$$\nu = \frac{1}{2\pi i} \ln(\det W) \pmod{2}$$
          </div>

          <h3>数值计算技巧</h3>
          <div class="numerical-methods">
            <div class="method-item">
              <h4>规范选择</h4>
              <ul>
                <li>选择合适的Bloch函数规范</li>
                <li>避免规范奇点</li>
                <li>保证数值稳定性</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>网格密度</h4>
              <ul>
                <li>足够密的k点网格</li>
                <li>特别注意TRIM点附近</li>
                <li>收敛性检验</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>对称性利用</h4>
              <ul>
                <li>利用晶体对称性</li>
                <li>减少计算量</li>
                <li>提高精度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 体-边对应关系 -->
      <div class="content-card">
        <h2 class="card-title">体-边对应关系</h2>
        <div class="card-content">
          <h3>二维系统的边界态</h3>
          <p>二维拓扑绝缘体的边界态特征：</p>
          <div class="edge-states-2d">
            <div class="state-item">
              <h4>螺旋边界态</h4>
              <ul>
                <li>自旋-动量锁定</li>
                <li>线性色散关系</li>
                <li>时间反演保护</li>
              </ul>
            </div>
            <div class="state-item">
              <h4>Kramers对</h4>
              <ul>
                <li>边界态成对出现</li>
                <li>相反自旋和动量</li>
                <li>无背散射</li>
              </ul>
            </div>
          </div>

          <h3>三维系统的表面态</h3>
          <p>三维拓扑绝缘体的表面态特征：</p>
          <div class="surface-states-3d">
            <div class="state-item">
              <h4>Dirac锥</h4>
              <ul>
                <li>线性色散关系</li>
                <li>自旋-动量锁定</li>
                <li>Berry相位π</li>
              </ul>
            </div>
            <div class="state-item">
              <h4>表面态密度</h4>
              <ul>
                <li>奇数个Dirac锥</li>
                <li>不能被局域化</li>
                <li>拓扑保护</li>
              </ul>
            </div>
          </div>

          <h3>拓扑保护机制</h3>
          <div class="protection-mechanisms">
            <div class="mechanism-item">
              <h4>时间反演对称性</h4>
              <p>保护Kramers简并，防止能隙开启</p>
            </div>
            <div class="mechanism-item">
              <h4>自旋-轨道耦合</h4>
              <p>实现自旋-动量锁定</p>
            </div>
            <div class="mechanism-item">
              <h4>体能隙</h4>
              <p>隔离表面态与体态</p>
            </div>
            <div class="mechanism-item">
              <h4>拓扑不变量</h4>
              <p>量化拓扑保护强度</p>
            </div>
          </div>

          <h3>对称性破缺效应</h3>
          <p>各种扰动对拓扑保护的影响：</p>
          <div class="symmetry-breaking">
            <div class="breaking-item">
              <h4>磁杂质</h4>
              <ul>
                <li>破坏时间反演对称性</li>
                <li>打开表面态能隙</li>
                <li>可能导致拓扑相变</li>
              </ul>
            </div>
            <div class="breaking-item">
              <h4>非磁杂质</h4>
              <ul>
                <li>保持时间反演对称性</li>
                <li>不能打开能隙</li>
                <li>可能引起局域化</li>
              </ul>
            </div>
            <div class="breaking-item">
              <h4>电场</h4>
              <ul>
                <li>可能破坏空间反演</li>
                <li>引入Rashba效应</li>
                <li>调节表面态性质</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 实际材料中的Z₂拓扑绝缘体 -->
      <div class="content-card">
        <h2 class="card-title">实际材料中的Z₂拓扑绝缘体</h2>
        <div class="card-content">
          <h3>二维拓扑绝缘体</h3>
          <div class="materials-2d">
            <div class="material-item">
              <h4>HgTe/CdTe量子阱</h4>
              <ul>
                <li>首个实验实现的2D TI</li>
                <li>可调节的能带反转</li>
                <li>清晰的量子化电导</li>
                <li>厚度依赖的拓扑相变</li>
              </ul>
            </div>
            <div class="material-item">
              <h4>InAs/GaSb双量子阱</h4>
              <ul>
                <li>类型II能带排列</li>
                <li>电场可调的拓扑性质</li>
                <li>Josephson结应用</li>
                <li>边界态的直接观测</li>
              </ul>
            </div>
            <div class="material-item">
              <h4>WTe₂单分子层</h4>
              <ul>
                <li>大的自旋轨道耦合</li>
                <li>室温稳定性</li>
                <li>可电场调控</li>
                <li>高迁移率</li>
              </ul>
            </div>
          </div>

          <h3>三维拓扑绝缘体</h3>
          <div class="materials-3d">
            <div class="material-item">
              <h4>Bi₂Se₃族化合物</h4>
              <ul>
                <li>强拓扑绝缘体</li>
                <li>简单的表面态结构</li>
                <li>大的体能隙</li>
                <li>层状结构</li>
              </ul>
            </div>
            <div class="material-item">
              <h4>Bi₂Te₃族化合物</h4>
              <ul>
                <li>强拓扑绝缘体</li>
                <li>热电材料</li>
                <li>可掺杂调节</li>
                <li>工业应用潜力</li>
              </ul>
            </div>
            <div class="material-item">
              <h4>Sb₂Te₃族化合物</h4>
              <ul>
                <li>强拓扑绝缘体</li>
                <li>相变存储材料</li>
                <li>可调节载流子浓度</li>
                <li>器件应用</li>
              </ul>
            </div>
          </div>

          <h3>材料设计原理</h3>
          <div class="design-principles">
            <div class="principle-item">
              <h4>能带反转</h4>
              <p>通过自旋轨道耦合实现s和p轨道的反转</p>
            </div>
            <div class="principle-item">
              <h4>体能隙</h4>
              <p>足够大的能隙以观测表面态</p>
            </div>
            <div class="principle-item">
              <h4>载流子调节</h4>
              <p>通过掺杂或门电压调节费米能级</p>
            </div>
            <div class="principle-item">
              <h4>界面质量</h4>
              <p>高质量界面以保持拓扑性质</p>
            </div>
          </div>

          <h3>实验表征方法</h3>
          <div class="characterization-methods">
            <div class="method-item">
              <h4>ARPES</h4>
              <ul>
                <li>直接观测表面态能带</li>
                <li>自旋分辨测量</li>
                <li>Dirac锥的确认</li>
                <li>拓扑表面态的识别</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>输运测量</h4>
              <ul>
                <li>量子化电导</li>
                <li>弱反局域化</li>
                <li>Shubnikov-de Haas振荡</li>
                <li>量子霍尔效应</li>
              </ul>
            </div>
            <div class="method-item">
              <h4>STM/STS</h4>
              <ul>
                <li>局域态密度</li>
                <li>准粒子干涉</li>
                <li>表面态成像</li>
                <li>杂质效应研究</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 应用前景与挑战 -->
      <div class="content-card">
        <h2 class="card-title">应用前景与挑战</h2>
        <div class="card-content">
          <h3>量子器件应用</h3>
          <div class="quantum-applications">
            <div class="app-item">
              <h4>拓扑量子计算</h4>
              <ul>
                <li>Majorana费米子</li>
                <li>拓扑量子比特</li>
                <li>容错量子门</li>
                <li>拓扑保护</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>自旋电子学</h4>
              <ul>
                <li>自旋过滤器</li>
                <li>自旋阀</li>
                <li>自旋存储器</li>
                <li>低功耗器件</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>拓扑电子学</h4>
              <ul>
                <li>无耗散传输</li>
                <li>拓扑场效应管</li>
                <li>拓扑超导器件</li>
                <li>量子传感器</li>
              </ul>
            </div>
          </div>

          <h3>技术挑战</h3>
          <div class="technical-challenges">
            <div class="challenge-item">
              <h4>材料质量</h4>
              <ul>
                <li>减少体载流子</li>
                <li>提高界面质量</li>
                <li>控制杂质浓度</li>
                <li>大面积制备</li>
              </ul>
            </div>
            <div class="challenge-item">
              <h4>器件集成</h4>
              <ul>
                <li>与传统半导体兼容</li>
                <li>可控的接触电阻</li>
                <li>稳定的器件性能</li>
                <li>规模化制造</li>
              </ul>
            </div>
            <div class="challenge-item">
              <h4>工作条件</h4>
              <ul>
                <li>室温工作</li>
                <li>环境稳定性</li>
                <li>长期可靠性</li>
                <li>功耗控制</li>
              </ul>
            </div>
          </div>

          <h3>未来发展方向</h3>
          <div class="future-directions">
            <div class="direction-item">
              <h4>新材料探索</h4>
              <p>寻找更好的拓扑绝缘体材料</p>
            </div>
            <div class="direction-item">
              <h4>异质结构</h4>
              <p>设计新型拓扑异质结构</p>
            </div>
            <div class="direction-item">
              <h4>人工结构</h4>
              <p>超晶格、摩尔纹理等</p>
            </div>
            <div class="direction-item">
              <h4>多体效应</h4>
              <p>强关联拓扑态的研究</p>
            </div>
          </div>

          <h3>理论发展</h3>
          <p>Z₂拓扑不变量理论的进一步发展：</p>
          <ul>
            <li><strong>高阶拓扑相：</strong>铰链态、角态的拓扑分类</li>
            <li><strong>非线性拓扑：</strong>非线性响应中的拓扑效应</li>
            <li><strong>机器学习：</strong>AI辅助的拓扑相识别</li>
            <li><strong>多体拓扑：</strong>相互作用系统的拓扑分类</li>
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

.classification-2d, .classification-3d {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.class-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.class-item h4 {
  color: #92400e;
  margin-bottom: 1rem;
}

.phase-transition {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.transition-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.transition-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.band-inversion-criteria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.criteria-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.criteria-item h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
}

.numerical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
}

.method-item h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.edge-states-2d, .surface-states-3d {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.state-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1rem;
}

.state-item h4 {
  color: #be185d;
  margin-bottom: 0.5rem;
}

.protection-mechanisms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.mechanism-item {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.mechanism-item h4 {
  color: #15803d;
  margin-bottom: 0.5rem;
}

.symmetry-breaking {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.breaking-item {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1rem;
}

.breaking-item h4 {
  color: #a16207;
  margin-bottom: 0.5rem;
}

.materials-2d, .materials-3d {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.material-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.material-item h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.design-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.principle-item {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.principle-item h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.characterization-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.quantum-applications {
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

.technical-challenges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.challenge-item {
  background: #fef2f2;
  border: 1px solid #f87171;
  border-radius: 0.5rem;
  padding: 1rem;
}

.challenge-item h4 {
  color: #991b1b;
  margin-bottom: 0.5rem;
}

.future-directions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.direction-item {
  background: #f0fdfa;
  border: 1px solid #14b8a6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.direction-item h4 {
  color: #134e4a;
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
  
  .classification-2d,
  .classification-3d,
  .phase-transition,
  .band-inversion-criteria,
  .numerical-methods,
  .edge-states-2d,
  .surface-states-3d,
  .protection-mechanisms,
  .symmetry-breaking,
  .materials-2d,
  .materials-3d,
  .design-principles,
  .characterization-methods,
  .quantum-applications,
  .technical-challenges,
  .future-directions {
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