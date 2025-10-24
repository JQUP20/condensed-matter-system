<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.5.1 相变</h1>
      <p class="chapter-subtitle">探索拓扑相变的基本概念、分类与物理机制</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>相变是物理学中的基本概念，描述系统从一种相态转变为另一种相态的过程。在拓扑物理学中，拓扑相变具有特殊的重要性，因为它们涉及系统拓扑性质的根本改变，而不仅仅是对称性的破缺。</p>
          
          <p>拓扑相变的特点是在相变点处，系统的体能隙关闭，拓扑不变量发生跳跃性改变。这种相变通常不能用传统的Landau理论描述，需要新的理论框架。本节将系统介绍相变的基本概念、分类以及拓扑相变的独特性质。</p>
        </div>
      </div>

      <!-- 相变的基本概念 -->
      <div class="content-card">
        <h2 class="card-title">相变的基本概念</h2>
        <div class="card-content">
          <h3>相与相变的定义</h3>
          <p><strong>相（Phase）：</strong>物质在一定条件下具有相同物理性质的均匀状态。</p>
          <p><strong>相变（Phase Transition）：</strong>系统从一种相转变为另一种相的过程。</p>

          <h3>相变的热力学描述</h3>
          <p>相变通常伴随着热力学量的不连续变化：</p>
          <div class="formula">
            $$G = H - TS = U + PV - TS$$</div>
          
          <p>其中G是Gibbs自由能，相变发生在：</p> <div class="formula">$$G_1(T, P) = G_2(T, P)$$</div>

          <h3>相变的分类</h3>
          <div class="phase-classification">
            <div class="class-item">
              <h4>一级相变</h4>
              <ul>
                <li>自由能的一阶导数不连续</li>
                <li>存在潜热</li>
                <li>相共存</li>
                <li>例：固液相变、磁性相变</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>二级相变</h4>
              <ul>
                <li>自由能的二阶导数不连续</li>
                <li>无潜热</li>
                <li>连续相变</li>
                <li>例：铁磁-顺磁相变</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>拓扑相变</h4>
              <ul>
                <li>拓扑不变量的改变</li>
                <li>能隙关闭</li>
                <li>边界态的出现/消失</li>
                <li>例：量子霍尔相变</li>
              </ul>
            </div>
          </div>

          <h3>序参量</h3>
          <p>序参量是描述相变的重要概念：</p> <div class="formula">$$\langle \psi \rangle = \begin{cases} 
            0 & \text{无序相} \\
            \neq 0 & \text{有序相}\end{cases}$$</div>

          <h3>相变的驱动机制</h3>
          <div class="driving-mechanisms">
            <div class="mechanism-item">
              <h4>温度驱动</h4>
              <p>热涨落与有序化竞争</p>
            </div>
            <div class="mechanism-item">
              <h4>压力驱动</h4>
              <p>体积变化引起的相变</p>
            </div>
            <div class="mechanism-item">
              <h4>化学势驱动</h4>
              <p>载流子浓度变化</p>
            </div>
            <div class="mechanism-item">
              <h4>外场驱动</h4>
              <p>电场、磁场等外场</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Landau理论 -->
      <div class="content-card">
        <h2 class="card-title">Landau理论</h2>
        <div class="card-content">
          <h3>Landau自由能</h3>
          <p>Landau理论将自由能按序参量展开：</p> <div class="formula">$$F(\psi, T) = F_0 + a(T)\psi^2 + b\psi^4 + c\psi^6 + \cdots$$</div>

          <h3>二级相变</h3><p>当$a(T) = \alpha(T - T_c)$，$b > 0$时：</p>
          <div class="formula">$$\psi_{eq} = \begin{cases} 
            0 & T > T_c \\
            \pm\sqrt{\frac{\alpha(T_c - T)}{b}} & T < T_c\end{cases}$$</div>

          <h3>一级相变</h3><p>当$b < 0$，$c > 0$时，自由能具有双井结构：</p>
          <div class="formula">$$F(\psi) = a\psi^2 + b\psi^4 + c\psi^6$$</div>

          <h3>临界指数</h3>
          <p>在相变点附近，物理量的标度行为：</p>
          <div class="critical-exponents">
            <div class="exponent-item">
              <h4>序参量</h4><p>$\psi \propto |T - T_c|^\beta$</p>
            </div>
            <div class="exponent-item">
              <h4>比热</h4><p>$C \propto |T - T_c|^{-\alpha}$</p>
            </div>
            <div class="exponent-item">
              <h4>磁化率</h4><p>$\chi \propto |T - T_c|^{-\gamma}$</p>
            </div>
            <div class="exponent-item">
              <h4>关联长度</h4><p>$\xi \propto |T - T_c|^{-\nu}$</p>
            </div>
          </div>

          <h3>Landau理论的局限性</h3>
          <ul>
            <li><strong>平均场近似：</strong>忽略涨落效应</li>
            <li><strong>临界指数：</strong>预测值与实验不符</li>
            <li><strong>拓扑相变：</strong>无法描述拓扑性质变化</li>
            <li><strong>量子相变：</strong>不适用于零温相变</li>
          </ul>
        </div>
      </div>

      <!-- 拓扑相变 -->
      <div class="content-card">
        <h2 class="card-title">拓扑相变</h2>
        <div class="card-content">
          <h3>拓扑相变的特征</h3>
          <p>拓扑相变具有以下独特特征：</p>
          <div class="topological-features">
            <div class="feature-item">
              <h4>能隙关闭</h4>
              <p>相变点处体能隙必须关闭</p>
            </div>
            <div class="feature-item">
              <h4>拓扑不变量跳跃</h4>
              <p>拓扑数在相变点不连续变化</p>
            </div>
            <div class="feature-item">
              <h4>边界态变化</h4>
              <p>边界态的出现或消失</p>
            </div>
            <div class="feature-item">
              <h4>普适性</h4>
              <p>相变性质不依赖于微观细节</p>
            </div>
          </div>

          <h3>拓扑相变的分类</h3>
          <div class="topological-classification">
            <div class="topo-class-item">
              <h4>整数量子霍尔相变</h4>
              <ul>
                <li>Chern数的改变</li>
                <li>Landau能级交叉</li>
                <li>霍尔电导平台跳跃</li>
              </ul>
            </div>
            <div class="topo-class-item">
              <h4>Z₂拓扑相变</h4>
              <ul>
                <li>时间反演对称保护</li>
                <li>能带反转</li>
                <li>表面态的出现</li>
              </ul>
            </div>
            <div class="topo-class-item">
              <h4>拓扑超导相变</h4>
              <ul>
                <li>配对对称性改变</li>
                <li>Majorana模式</li>
                <li>拓扑数Z₂或Z</li>
              </ul>
            </div>
          </div>

          <h3>能隙关闭的机制</h3>
          <p>拓扑相变中能隙关闭的几种机制：</p>
          <div class="gap-closing-mechanisms">
            <div class="gap-mechanism">
              <h4>能带接触</h4>
              <p>价带和导带在某些k点相遇</p>
              <div class="formula">$$E_c(\mathbf{k}) = E_v(\mathbf{k})$$</div>
            </div>
            <div class="gap-mechanism">
              <h4>Dirac点</h4>
              <p>线性色散的接触点</p> <div class="formula">$$E(\mathbf{k}) = \pm v_F |\mathbf{k} - \mathbf{k}_D|$$</div>
            </div>
            <div class="gap-mechanism">
              <h4>Weyl点</h4>
              <p>三维中的线性接触点</p> <div class="formula">$$E(\mathbf{k}) = \pm v_F |\mathbf{k} - \mathbf{k}_W|$$</div>
            </div>
          </div>

          <h3>拓扑相变的理论描述</h3>
          <p>拓扑相变需要超越Landau理论的新方法：</p>
          <ul>
            <li><strong>拓扑场论：</strong>Chern-Simons理论等</li>
            <li><strong>K理论：</strong>拓扑分类理论</li>
            <li><strong>边界-体对应：</strong>体拓扑与边界态的关系</li>
            <li><strong>重整化群：</strong>临界行为的描述</li>
          </ul>
        </div>
      </div>

      <!-- 量子相变 -->
      <div class="content-card">
        <h2 class="card-title">量子相变</h2>
        <div class="card-content">
          <h3>量子相变的定义</h3>
          <p>量子相变是在绝对零度下由量子涨落驱动的相变：</p> <div class="formula">$$H = H_0 + g H_1$$</div><p>其中g是调节参数，相变发生在临界值$g_c$处。</p>

          <h3>量子临界点</h3>
          <p>量子临界点的特征：</p>
          <div class="quantum-critical-features">
            <div class="qc-feature">
              <h4>零温相变</h4>
              <p>T = 0时发生的相变</p>
            </div>
            <div class="qc-feature">
              <h4>量子涨落主导</h4>
              <p>海森堡不确定性原理</p>
            </div>
            <div class="qc-feature">
              <h4>时空标度不变性</h4>
              <p>动力学临界指数z</p>
            </div>
            <div class="qc-feature">
              <h4>非费米液体行为</h4>
              <p>异常的输运性质</p>
            </div>
          </div>

          <h3>量子相变的分类</h3>
          <div class="quantum-phase-transitions">
            <div class="qpt-item">
              <h4>连续量子相变</h4>
              <ul>
                <li>序参量连续变化</li>
                <li>临界标度行为</li>
                <li>共形场论描述</li>
                <li>例：横场Ising模型</li>
              </ul>
            </div>
            <div class="qpt-item">
              <h4>一级量子相变</h4>
              <ul>
                <li>序参量跳跃变化</li>
                <li>相分离</li>
                <li>亚稳态</li>
                <li>例：Mott绝缘体相变</li>
              </ul>
            </div>
            <div class="qpt-item">
              <h4>拓扑量子相变</h4>
              <ul>
                <li>拓扑不变量改变</li>
                <li>能隙关闭</li>
                <li>边界态变化</li>
                <li>例：量子霍尔相变</li>
              </ul>
            </div>
          </div>

          <h3>动力学临界指数</h3>
          <p>量子相变中时间和空间的标度关系：</p>
          <div class="formula">$$t \rightarrow b^z t, \quad \mathbf{r} \rightarrow b \mathbf{r}$$</div>
          
          <p>其中z是动力学临界指数：</p>
          <div class="dynamical-exponents">
            <div class="exponent-example">
              <h4>自由费米子 (z = 1)</h4>
              <p>线性色散关系</p>
            </div>
            <div class="exponent-example">
              <h4>扩散过程 (z = 2)</h4>
              <p>抛物线色散关系</p>
            </div>
            <div class="exponent-example">
              <h4>Lifshitz相变 (z = 3)</h4>
              <p>三次色散关系</p>
            </div>
          </div>

          <h3>有限温度效应</h3>
          <p>量子临界点附近的有限温度行为：</p> <div class="formula">$$\xi_T = \frac{\hbar v_F}{k_B T}$$</div>
          
          <p>形成量子临界扇形区域，其中：</p>
          <ul><li><strong>量子临界区：</strong>$T > |g - g_c|^{z\nu}$</li><li><strong>经典临界区：</strong>$T < |g - g_c|^{z\nu}$</li>
            <li><strong>量子无序区：</strong>低温有序相</li>
          </ul>
        </div>
      </div>

      <!-- 相变的实验观测 -->
      <div class="content-card">
        <h2 class="card-title">相变的实验观测</h2>
        <div class="card-content">
          <h3>热力学测量</h3>
          <div class="thermodynamic-measurements">
            <div class="measurement-item">
              <h4>比热</h4>
              <ul>
                <li>相变点的异常</li>
                <li>临界指数测定</li>
                <li>相变类型判断</li>
              </ul>
            </div>
            <div class="measurement-item">
              <h4>磁化率</h4>
              <ul>
                <li>磁性相变</li>
                <li>临界温度确定</li>
                <li>序参量测量</li>
              </ul>
            </div>
            <div class="measurement-item">
              <h4>介电常数</h4>
              <ul>
                <li>铁电相变</li>
                <li>结构相变</li>
                <li>软模行为</li>
              </ul>
            </div>
          </div>

          <h3>输运测量</h3>
          <div class="transport-measurements">
            <div class="transport-item">
              <h4>电阻率</h4>
              <ul>
                <li>金属-绝缘体相变</li>
                <li>超导相变</li>
                <li>量子临界行为</li>
              </ul>
            </div>
            <div class="transport-item">
              <h4>霍尔效应</h4>
              <ul>
                <li>载流子浓度变化</li>
                <li>量子霍尔相变</li>
                <li>拓扑相变</li>
              </ul>
            </div>
            <div class="transport-item">
              <h4>热电效应</h4>
              <ul>
                <li>电子结构变化</li>
                <li>相变机制</li>
                <li>能带结构</li>
              </ul>
            </div>
          </div>

          <h3>谱学测量</h3>
          <div class="spectroscopic-measurements">
            <div class="spectro-item">
              <h4>光电子能谱 (ARPES)</h4>
              <ul>
                <li>能带结构变化</li>
                <li>能隙开合</li>
                <li>费米面重构</li>
              </ul>
            </div>
            <div class="spectro-item">
              <h4>中子散射</h4>
              <ul>
                <li>磁结构</li>
                <li>声子软化</li>
                <li>临界涨落</li>
              </ul>
            </div>
            <div class="spectro-item">
              <h4>拉曼散射</h4>
              <ul>
                <li>对称性破缺</li>
                <li>软模</li>
                <li>电子-声子耦合</li>
              </ul>
            </div>
          </div>

          <h3>显微镜技术</h3>
          <div class="microscopy-techniques">
            <div class="microscopy-item">
              <h4>扫描隧道显微镜 (STM)</h4>
              <ul>
                <li>局域态密度</li>
                <li>相分离</li>
                <li>畴结构</li>
              </ul>
            </div>
            <div class="microscopy-item">
              <h4>原子力显微镜 (AFM)</h4>
              <ul>
                <li>结构相变</li>
                <li>表面形貌</li>
                <li>畴壁</li>
              </ul>
            </div>
            <div class="microscopy-item">
              <h4>透射电子显微镜 (TEM)</h4>
              <ul>
                <li>晶体结构</li>
                <li>相界面</li>
                <li>缺陷结构</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 相变的应用与展望 -->
      <div class="content-card">
        <h2 class="card-title">相变的应用与展望</h2>
        <div class="card-content">
          <h3>技术应用</h3>
          <div class="technological-applications">
            <div class="tech-app-item">
              <h4>相变存储器</h4>
              <ul>
                <li>非易失性存储</li>
                <li>快速读写</li>
                <li>高密度存储</li>
                <li>例：PCM, ReRAM</li>
              </ul>
            </div>
            <div class="tech-app-item">
              <h4>超导器件</h4>
              <ul>
                <li>约瑟夫森结</li>
                <li>SQUID</li>
                <li>量子比特</li>
                <li>超导计算机</li>
              </ul>
            </div>
            <div class="tech-app-item">
              <h4>拓扑器件</h4>
              <ul>
                <li>拓扑场效应管</li>
                <li>量子计算</li>
                <li>自旋电子学</li>
                <li>低功耗器件</li>
              </ul>
            </div>
          </div>

          <h3>基础研究前沿</h3>
          <div class="research-frontiers">
            <div class="frontier-item">
              <h4>量子多体系统</h4>
              <ul>
                <li>强关联电子系统</li>
                <li>量子自旋液体</li>
                <li>非费米液体</li>
                <li>量子临界性</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>拓扑物态</h4>
              <ul>
                <li>高阶拓扑相</li>
                <li>非阿贝尔拓扑相</li>
                <li>拓扑超导体</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>非平衡相变</h4>
              <ul>
                <li>驱动系统</li>
                <li>Floquet工程</li>
                <li>时间晶体</li>
                <li>动力学相变</li>
              </ul>
            </div>
          </div>

          <h3>理论发展方向</h3>
          <div class="theoretical-developments">
            <div class="theory-item">
              <h4>机器学习</h4>
              <p>AI辅助相变识别和分类</p>
            </div>
            <div class="theory-item">
              <h4>量子信息</h4>
              <p>纠缠与相变的关系</p>
            </div>
            <div class="theory-item">
              <h4>全息对偶</h4>
              <p>AdS/CFT与相变</p>
            </div>
            <div class="theory-item">
              <h4>拓扑场论</h4>
              <p>拓扑相变的场论描述</p>
            </div>
          </div>

          <h3>实验技术发展</h3>
          <div class="experimental-developments">
            <div class="exp-dev-item">
              <h4>极端条件</h4>
              <ul>
                <li>超高压</li>
                <li>超低温</li>
                <li>强磁场</li>
                <li>超快时间分辨</li>
              </ul>
            </div>
            <div class="exp-dev-item">
              <h4>新探测手段</h4>
              <ul>
                <li>量子传感器</li>
                <li>单原子操控</li>
                <li>原位表征</li>
                <li>多维度测量</li>
              </ul>
            </div>
            <div class="exp-dev-item">
              <h4>人工量子系统</h4>
              <ul>
                <li>冷原子</li>
                <li>超导量子比特</li>
                <li>光子系统</li>
                <li>离子阱</li>
              </ul>
            </div>
          </div>

          <h3>未来挑战</h3>
          <p>相变研究面临的主要挑战：</p>
          <ul>
            <li><strong>多体问题：</strong>强关联系统的精确求解</li>
            <li><strong>非平衡态：</strong>远离平衡的相变理论</li>
            <li><strong>量子计算：</strong>相变在量子算法中的应用</li>
            <li><strong>材料设计：</strong>按需设计具有特定相变的材料</li>
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

.phase-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
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

.driving-mechanisms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.mechanism-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.mechanism-item h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.critical-exponents {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.exponent-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.exponent-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.topological-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.feature-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.feature-item h4 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.topological-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.topo-class-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.topo-class-item h4 {
  color: #be185d;
  margin-bottom: 1rem;
}

.gap-closing-mechanisms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.gap-mechanism {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.gap-mechanism h4 {
  color: #15803d;
  margin-bottom: 1rem;
}

.quantum-critical-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.qc-feature {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.qc-feature h4 {
  color: #a16207;
  margin-bottom: 0.5rem;
}

.quantum-phase-transitions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.qpt-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.qpt-item h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.dynamical-exponents {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.exponent-example {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.exponent-example h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.thermodynamic-measurements,
.transport-measurements,
.spectroscopic-measurements,
.microscopy-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.measurement-item,
.transport-item,
.spectro-item,
.microscopy-item {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1rem;
}

.measurement-item h4,
.transport-item h4,
.spectro-item h4,
.microscopy-item h4 {
  color: #7c2d12;
  margin-bottom: 0.5rem;
}

.technological-applications,
.research-frontiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tech-app-item,
.frontier-item {
  background: #f0fdfa;
  border: 1px solid #14b8a6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.tech-app-item h4,
.frontier-item h4 {
  color: #134e4a;
  margin-bottom: 1rem;
}

.theoretical-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.theory-item {
  background: #fef2f2;
  border: 1px solid #f87171;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.theory-item h4 {
  color: #991b1b;
  margin-bottom: 0.5rem;
}

.experimental-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.exp-dev-item {
  background: #fffbeb;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
}

.exp-dev-item h4 {
  color: #92400e;
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
  
  .phase-classification,
  .driving-mechanisms,
  .critical-exponents,
  .topological-features,
  .topological-classification,
  .gap-closing-mechanisms,
  .quantum-critical-features,
  .quantum-phase-transitions,
  .dynamical-exponents,
  .thermodynamic-measurements,
  .transport-measurements,
  .spectroscopic-measurements,
  .microscopy-techniques,
  .technological-applications,
  .research-frontiers,
  .theoretical-developments,
  .experimental-developments {
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