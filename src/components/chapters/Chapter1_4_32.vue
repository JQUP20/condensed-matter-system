<template>
  <div class="chapter-content">
    <h1>对偶变换 (Duality Transformation)</h1>
    
    <div class="section">
      <h2>概述与历史背景</h2>
      <p>
        对偶变换是理论物理学中的一个重要概念，它揭示了看似不同的物理系统之间的深层联系。
        在凝聚态物理中，对偶变换帮助我们理解相变、临界现象和拓扑性质。
        最著名的例子包括Kramers-Wannier对偶性、电磁对偶性和AdS/CFT对应等。
      </p>
      
      <div class="key-points">
        <h3>核心思想</h3>
        <ul>
          <li><strong>映射关系</strong>：建立不同理论描述之间的一一对应</li>
          <li><strong>对称性交换</strong>：强耦合与弱耦合区域的互换</li>
          <li><strong>临界点自对偶</strong>：临界点处的特殊性质</li>
          <li><strong>拓扑不变量</strong>：对偶变换保持的拓扑性质</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>Kramers-Wannier对偶性</h2>
      
      <div class="subsection">
        <h3>二维Ising模型的对偶性</h3>
        <p>二维Ising模型是对偶变换最经典的例子：</p>
        
        <div class="formula-box">
          <h4>原始Ising哈密顿量</h4>
          <div class="formula">
            $$H = -J \sum_{\langle i,j \rangle} \sigma_i \sigma_j$$
          </div>
          <p>其中 $\sigma_i = \pm 1$ 是Ising自旋变量。</p>
        </div>

        <div class="formula-box">
          <h4>对偶变换构造</h4>
          <p>在每个格点上定义对偶自旋 $\tilde{\sigma}_i$，对偶哈密顿量为：</p>
          <div class="formula">
            $$\tilde{H} = -\tilde{J} \sum_{\langle i,j \rangle} \tilde{\sigma}_i \tilde{\sigma}_j$$
          </div>
          <p>其中对偶耦合常数满足：</p>
          <div class="formula">
            $$\sinh(2J/k_B T) \sinh(2\tilde{J}/k_B T) = 1$$
          </div>
        </div>

        <div class="formula-box">
          <h4>临界点的自对偶性</h4>
          <p>在临界点处，$J_c = \tilde{J}_c$，即：</p>
          <div class="formula">
            $$\sinh(2J_c/k_B T_c) = 1$$
          </div>
          <p>这给出了精确的临界温度：</p>
          <div class="formula">
            $$k_B T_c = \frac{2J}{\ln(1+\sqrt{2})} \approx 2.269J$$
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>高低温对偶性</h3>
        <p>Kramers-Wannier对偶性建立了高温和低温相之间的对应关系：</p>
        
        <div class="formula-box">
          <h4>高温展开与低温展开</h4>
          <div class="formula">
            $$Z(K) = 2^N (\cosh K)^{2N} Z^*(K^*)$$
          </div>
          <p>其中 $K = J/k_B T$，对偶参数 $K^*$ 满足：</p>
          <div class="formula">
            $$e^{-2K} = \tanh K^*$$
          </div>
        </div>

        <div class="formula-box">
          <h4>序参量的对偶关系</h4>
          <p>磁化强度和能量密度之间存在对偶关系：</p>
          <div class="formula">
            $$\langle \sigma \rangle(K) = \langle \varepsilon \rangle(K^*)$$
          </div>
          <p>其中 $\varepsilon$ 是能量密度算符。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>电磁对偶性</h2>
      
      <div class="subsection">
        <h3>经典电磁对偶</h3>
        <p>在没有电荷和电流的情况下，Maxwell方程具有电磁对偶性：</p>
        
        <div class="formula-box">
          <h4>Maxwell方程组</h4>
          <div class="formula">
            $$\nabla \cdot \mathbf{E} = 0, \quad \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$
          </div>
          <div class="formula">
            $$\nabla \cdot \mathbf{B} = 0, \quad \nabla \times \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$
          </div>
        </div>

        <div class="formula-box">
          <h4>对偶变换</h4>
          <p>电磁对偶变换为：</p>
          <div class="formula">
            $$\mathbf{E} \rightarrow c\mathbf{B}, \quad c\mathbf{B} \rightarrow -\mathbf{E}$$
          </div>
          <p>其中 $c = 1/\sqrt{\mu_0 \varepsilon_0}$ 是光速。</p>
        </div>
      </div>

      <div class="subsection">
        <h3>量子电磁对偶</h3>
        <p>在量子场论中，电磁对偶性更加丰富：</p>
        
        <div class="formula-box">
          <h4>Dirac量子化条件</h4>
          <p>电荷 $e$ 和磁荷 $g$ 满足：</p>
          <div class="formula">
            $$eg = \frac{n\hbar c}{2}, \quad n \in \mathbb{Z}$$
          </div>
        </div>

        <div class="formula-box">
          <h4>强弱耦合对偶</h4>
          <p>在某些规范理论中，强耦合区域对偶于弱耦合区域：</p>
          <div class="formula">
            $$g \leftrightarrow \frac{1}{g}$$
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>量子自旋系统中的对偶性</h2>
      
      <div class="subsection">
        <h3>XY模型的对偶性</h3>
        <p>二维XY模型具有Kosterlitz-Thouless对偶性：</p>
        
        <div class="formula-box">
          <h4>XY哈密顿量</h4>
          <div class="formula">
            $$H = -J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)$$
          </div>
          <p>其中 $\theta_i$ 是角度变量。</p>
        </div>

        <div class="formula-box">
          <h4>涡旋-反涡旋对偶</h4>
          <p>低温相的自旋波对偶于高温相的涡旋气体：</p>
          <div class="formula">
            $$Z_{XY}(K) = Z_{vortex}(K^*)$$
          </div>
          <p>其中 $K^* = \text{const}/K$。</p>
        </div>

        <div class="formula-box">
          <h4>KT相变点</h4>
          <p>在KT相变点处，系统是自对偶的：</p>
          <div class="formula">
            $$K_c = K_c^*, \quad k_B T_c = \frac{\pi J}{2}$$
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>量子Ising链的对偶性</h3>
        <p>横场Ising模型具有量子对偶性：</p>
        
        <div class="formula-box">
          <h4>横场Ising哈密顿量</h4>
          <div class="formula">
            $$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$
          </div>
        </div>

        <div class="formula-box">
          <h4>对偶哈密顿量</h4>
          <p>通过对偶变换得到：</p>
          <div class="formula">
            $$\tilde{H} = -\tilde{h} \sum_i \tilde{\sigma}_i^z \tilde{\sigma}_{i+1}^z - \tilde{J} \sum_i \tilde{\sigma}_i^x$$
          </div>
          <p>其中 $\tilde{J} = h$，$\tilde{h} = J$。</p>
        </div>

        <div class="formula-box">
          <h4>量子临界点</h4>
          <p>在量子临界点 $h = J$ 处，系统是自对偶的。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>拓扑对偶性</h2>
      
      <div class="subsection">
        <h3>Chern-Simons对偶性</h3>
        <p>在(2+1)维中，Chern-Simons理论具有层次对偶性：</p>
        
        <div class="formula-box">
          <h4>Chern-Simons作用量</h4>
          <div class="formula">
            $$S_{CS} = \frac{k}{4\pi} \int d^3x \, \varepsilon^{\mu\nu\rho} A_\mu \partial_\nu A_\rho$$
          </div>
        </div>

        <div class="formula-box">
          <h4>层次对偶</h4>
          <p>层次 $k$ 的理论对偶于层次 $-1/k$ 的理论：</p>
          <div class="formula">
            $$Z_k = Z_{-1/k}$$
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>拓扑绝缘体的对偶性</h3>
        <p>拓扑绝缘体和拓扑超导体之间存在对偶关系：</p>
        
        <div class="formula-box">
          <h4>拓扑分类对偶</h4>
          <p>在某些对称类中，$d$ 维拓扑绝缘体对偶于 $(d-1)$ 维拓扑超导体。</p>
        </div>

        <div class="formula-box">
          <h4>边界-体对偶</h4>
          <p>体态拓扑不变量与边界态性质之间的对偶关系：</p>
          <div class="formula">
            $$\nu_{bulk} = \nu_{boundary}$$
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>全息对偶性</h2>
      
      <div class="subsection">
        <h3>AdS/CFT对应</h3>
        <p>反德西特空间中的引力理论与边界共形场论的对偶：</p>
        
        <div class="formula-box">
          <h4>AdS/CFT字典</h4>
          <p>体态引力理论的配分函数等于边界CFT的配分函数：</p>
          <div class="formula">
            $$Z_{gravity}[AdS_{d+1}] = Z_{CFT}[\partial AdS_d]$$
          </div>
        </div>

        <div class="formula-box">
          <h4>算符对应</h4>
          <p>体态场与边界算符的对应关系：</p>
          <div class="formula">
            $$\langle \mathcal{O}(x) \rangle_{CFT} = \frac{\delta Z_{gravity}}{\delta \phi_0(x)}$$
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>凝聚态中的全息对偶</h3>
        <p>全息方法在凝聚态物理中的应用：</p>
        
        <div class="formula-box">
          <h4>全息超导体</h4>
          <p>AdS黑洞背景下的标量场凝聚对应于边界超导相变。</p>
        </div>

        <div class="formula-box">
          <h4>全息费米液体</h4>
          <p>体态费米子场对应于边界的准粒子激发。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>数值方法中的对偶性</h2>
      
      <div class="subsection">
        <h3>蒙特卡罗方法中的应用</h3>
        <p>对偶变换在数值模拟中的应用：</p>
        
        <div class="formula-box">
          <h4>集群算法</h4>
          <p>利用对偶性设计高效的集群更新算法：</p>
          <ul>
            <li><strong>Swendsen-Wang算法</strong>：基于Fortuin-Kasteleyn对偶</li>
            <li><strong>Wolff算法</strong>：单集群更新方法</li>
            <li><strong>临界减速的抑制</strong>：在临界点附近保持高效率</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>符号问题的缓解</h4>
          <p>某些对偶变换可以缓解量子蒙特卡罗中的符号问题：</p>
          <ul>
            <li><strong>粒子-空穴对偶</strong>：改变费米子符号结构</li>
            <li><strong>自旋-费米子对偶</strong>：转换统计性质</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>张量网络中的对偶性</h3>
        <p>张量网络方法中对偶性的应用：</p>
        
        <div class="formula-box">
          <h4>对偶张量网络</h4>
          <p>原始张量网络与对偶张量网络的关系：</p>
          <div class="formula">
            $$T_{ijkl} \leftrightarrow \tilde{T}_{ijkl}$$
          </div>
        </div>

        <div class="formula-box">
          <h4>重整化群流</h4>
          <p>对偶变换在重整化群流中的作用：</p>
          <ul>
            <li><strong>不动点的识别</strong>：自对偶点对应RG不动点</li>
            <li><strong>临界指数</strong>：通过对偶性计算临界指数</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>对偶性的数学结构</h2>
      
      <div class="subsection">
        <h3>群论基础</h3>
        <p>对偶变换的群论描述：</p>
        
        <div class="formula-box">
          <h4>对偶群</h4>
          <p>对于有限群 $G$，其对偶群 $\hat{G}$ 由不可约表示构成：</p>
          <div class="formula">
            $$|\hat{G}| = |G|$$
          </div>
        </div>

        <div class="formula-box">
          <h4>Pontryagin对偶</h4>
          <p>对于局部紧致阿贝尔群，存在自然的对偶结构：</p>
          <div class="formula">
            $$\hat{\hat{G}} \cong G$$
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>范畴论观点</h3>
        <p>从范畴论角度理解对偶性：</p>
        
        <div class="formula-box">
          <h4>对偶函子</h4>
          <p>对偶变换可以看作范畴间的函子：</p>
          <div class="formula">
            $$D: \mathcal{C} \rightarrow \mathcal{C}^{op}$$
          </div>
        </div>

        <div class="formula-box">
          <h4>自然变换</h4>
          <p>对偶性通过自然变换实现：</p>
          <div class="formula">
            $$\eta: \text{Id} \Rightarrow DD$$
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>实验验证与应用</h2>
      
      <div class="subsection">
        <h3>临界现象的实验验证</h3>
        <p>对偶性预言的实验验证：</p>
        
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>系统</th>
                <th>理论预言</th>
                <th>实验结果</th>
                <th>精度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2D Ising模型</td>
                <td>$T_c = 2.269J/k_B$</td>
                <td>$T_c = 2.269(1)J/k_B$</td>
                <td>0.1%</td>
              </tr>
              <tr>
                <td>XY模型</td>
                <td>$T_{KT} = \pi J/2k_B$</td>
                <td>$T_{KT} = 1.57(2)J/k_B$</td>
                <td>1%</td>
              </tr>
              <tr>
                <td>量子Ising链</td>
                <td>$h_c = J$</td>
                <td>$h_c = 1.00(1)J$</td>
                <td>1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>材料科学中的应用</h3>
        <p>对偶性在材料设计中的应用：</p>
        
        <div class="formula-box">
          <h4>相变工程</h4>
          <ul>
            <li><strong>临界点调控</strong>：利用对偶性设计临界材料</li>
            <li><strong>多铁性材料</strong>：电磁对偶性的应用</li>
            <li><strong>拓扑材料</strong>：拓扑对偶性指导材料搜索</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>现代发展与前沿</h2>
      
      <div class="subsection">
        <h3>机器学习中的对偶性</h3>
        <p>对偶性在机器学习中的新应用：</p>
        
        <div class="formula-box">
          <h4>神经网络对偶</h4>
          <p>深度学习中的对偶结构：</p>
          <ul>
            <li><strong>编码器-解码器对偶</strong>：信息压缩与重构</li>
            <li><strong>生成对抗网络</strong>：生成器与判别器的对偶</li>
            <li><strong>变分推断</strong>：先验与后验的对偶关系</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>量子机器学习</h4>
          <p>量子算法中的对偶性：</p>
          <ul>
            <li><strong>量子-经典对偶</strong>：量子优势的理解</li>
            <li><strong>纠缠-复杂度对偶</strong>：计算复杂性理论</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>量子信息中的对偶性</h3>
        <p>量子信息理论中的对偶结构：</p>
        
        <div class="formula-box">
          <h4>纠缠对偶</h4>
          <p>纠缠熵与互信息的对偶关系：</p>
          <div class="formula">
            $$S(A) + S(B) = S(AB) + I(A:B)$$
          </div>
        </div>

        <div class="formula-box">
          <h4>量子纠错码对偶</h4>
          <p>量子纠错码的对偶结构：</p>
          <ul>
            <li><strong>CSS码</strong>：经典码的量子对偶</li>
            <li><strong>表面码</strong>：拓扑对偶性的应用</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>总结与展望</h2>
      <p>
        对偶变换作为理论物理学的重要工具，不仅揭示了不同物理系统之间的深层联系，
        也为解决复杂问题提供了新的视角和方法。从经典的Kramers-Wannier对偶到现代的全息对偶，
        对偶性的概念不断发展和深化。
      </p>
      
      <div class="key-points">
        <h3>主要贡献</h3>
        <ul>
          <li><strong>精确解</strong>：为某些复杂系统提供精确解</li>
          <li><strong>临界现象</strong>：揭示相变的普遍性质</li>
          <li><strong>计算方法</strong>：启发新的数值算法</li>
          <li><strong>理论统一</strong>：连接不同的物理理论</li>
        </ul>
      </div>

      <div class="key-points">
        <h3>未来发展方向</h3>
        <ul>
          <li><strong>量子多体系统</strong>：发现新的量子对偶性</li>
          <li><strong>机器学习</strong>：对偶性在AI中的应用</li>
          <li><strong>量子计算</strong>：对偶算法的量子实现</li>
          <li><strong>材料设计</strong>：基于对偶性的材料工程</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.section {
  margin-bottom: 40px;
}

.subsection {
  margin-bottom: 30px;
  padding-left: 20px;
}

.formula-box {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.key-points {
  background-color: #e8f4f8;
  border-left: 4px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
}

.key-points h3 {
  color: #2c3e50;
  margin-top: 0;
}

.key-points ul {
  margin: 10px 0;
  padding-left: 20px;
}

.key-points li {
  margin: 8px 0;
}

.comparison-table {
  margin: 20px 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.comparison-table th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.comparison-table tr:hover {
  background-color: #e8f4f8;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

ul, ol {
  padding-left: 30px;
}

li {
  margin: 5px 0;
}

strong {
  color: #2c3e50;
  font-weight: bold;
}

.formula-box ul {
  text-align: left;
  margin-top: 10px;
}

.formula-box li {
  margin: 5px 0;
}
</style>