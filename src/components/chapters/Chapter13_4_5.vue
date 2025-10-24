<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.4.5 热力学性质</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        超导体的热力学性质反映了其微观电子结构的特征。BCS理论成功地预言了
        超导态的各种热力学量，包括比热、熵、磁化率等，这些预言与实验结果
        高度吻合，为BCS理论提供了强有力的支持。
      </p>
    </section>

    <!-- 电子比热 -->
    <section class="section">
      <h2>电子比热</h2>
      
      <h3>1. BCS理论预言</h3>
      <p>超导态的电子比热由准粒子激发贡献：</p>
      <div class="formula-box">
        <p>C<sub>es</sub> = ∫ dε N(ε) f(E) [∂f(E)/∂T] E</p>
      </div>
      
      <p>其中E = √(ε² + Δ²)是准粒子能量，f(E)是费米分布函数。</p>
      
      <h3>2. 低温行为</h3>
      <p>当T ≪ T<sub>c</sub>时，比热呈指数激活行为：</p>
      <div class="formula-box">
        <p>C<sub>es</sub>/C<sub>en</sub> = (2πΔ(0)/k<sub>B</sub>T)^(1/2) exp(-Δ(0)/k<sub>B</sub>T)</p>
      </div>
      
      <p>其中C<sub>en</sub> = γT是正常态电子比热。</p>
      
      <h3>3. 相变处的跳跃</h3>
      <p>在T<sub>c</sub>处，比热有一个跳跃：</p>
      <div class="formula-box">
        <p>ΔC/γT<sub>c</sub> = 1.43</p>
      </div>
      
      <p>这是BCS理论的一个重要预言，已被实验广泛验证。</p>
    </section>

    <!-- 熵和自由能 -->
    <section class="section">
      <h2>熵和自由能</h2>
      
      <h3>1. 电子熵</h3>
      <p>超导态的电子熵：</p>
      <div class="formula-box">
        <p>S<sub>es</sub> = -k<sub>B</sub> ∑<sub>k</sub> [f<sub>k</sub> ln f<sub>k</sub> + (1-f<sub>k</sub>) ln(1-f<sub>k</sub>)]</p>
      </div>
      
      <p>其中f<sub>k</sub> = 1/(1 + exp(E<sub>k</sub>/k<sub>B</sub>T))是准粒子占据数。</p>
      
      <h3>2. 凝聚能</h3>
      <p>超导凝聚能密度：</p>
      <div class="formula-box">
        <p>U<sub>cond</sub> = -½N(0)Δ²</p>
      </div>
      
      <p>这表示超导态比正常态能量更低。</p>
      
      <h3>3. 自由能差</h3>
      <p>超导态与正常态的自由能差：</p>
      <div class="formula-box">
        <p>F<sub>s</sub> - F<sub>n</sub> = -½N(0)Δ² + ∫ dε N(ε) k<sub>B</sub>T ln[2 cosh(E/2k<sub>B</sub>T)]</p>
      </div>
    </section>

    <!-- 磁性质 -->
    <section class="section">
      <h2>磁性质</h2>
      
      <h3>1. 抗磁磁化率</h3>
      <p>超导体的抗磁响应由两部分组成：</p>
      <ul>
        <li><strong>轨道贡献：</strong>Meissner效应，χ = -1/4π</li>
        <li><strong>自旋贡献：</strong>Pauli自旋磁化率的修正</li>
      </ul>
      
      <h3>2. Knight位移</h3>
      <p>NMR Knight位移反映自旋磁化率：</p>
      <div class="formula-box">
        <p>K<sub>s</sub>/K<sub>n</sub> = ∫ dε N(ε) [∂f(E)/∂E] ε/E</p>
      </div>
      
      <h3>3. 自旋弛豫时间</h3>
      <p>NMR自旋-晶格弛豫时间：</p>
      <div class="formula-box">
        <p>1/T<sub>1s</sub> ∝ ∫ dε N(ε) [∂f(E)/∂E] (ε/E)²</p>
      </div>
    </section>

    <!-- 实验数据对比 -->
    <section class="section">
      <h2>实验数据对比</h2>
      
      <div class="data-table">
        <h3>典型超导体的热力学参数</h3>
        <table>
          <thead>
            <tr>
              <th>材料</th>
              <th>T<sub>c</sub> (K)</th>
              <th>ΔC/γT<sub>c</sub></th>
              <th>2Δ(0)/k<sub>B</sub>T<sub>c</sub></th>
              <th>理论符合度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Al</td>
              <td>1.18</td>
              <td>1.35</td>
              <td>3.4</td>
              <td>优秀</td>
            </tr>
            <tr>
              <td>Sn</td>
              <td>3.72</td>
              <td>1.60</td>
              <td>3.5</td>
              <td>优秀</td>
            </tr>
            <tr>
              <td>In</td>
              <td>3.41</td>
              <td>1.87</td>
              <td>3.6</td>
              <td>良好</td>
            </tr>
            <tr>
              <td>Pb</td>
              <td>7.20</td>
              <td>2.71</td>
              <td>4.3</td>
              <td>强耦合修正</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>温度依赖性验证</h3>
      <div class="info-box">
        <h4>实验观测特征</h4>
        <ul>
          <li><strong>低温指数行为：</strong>C ∝ exp(-Δ/k<sub>B</sub>T)</li>
          <li><strong>相变跳跃：</strong>在T<sub>c</sub>处比热不连续</li>
          <li><strong>熵守恒：</strong>相变前后总熵保持守恒</li>
          <li><strong>磁化率抑制：</strong>自旋磁化率在T<sub>c</sub>以下急剧下降</li>
        </ul>
      </div>
    </section>

    <!-- 强耦合效应 -->
    <section class="section">
      <h2>强耦合效应</h2>
      
      <h3>1. 比热异常</h3>
      <p>强耦合超导体的比热偏离BCS预言：</p>
      <ul>
        <li>相变跳跃增大：ΔC/γT<sub>c</sub> > 1.43</li>
        <li>低温行为修正：指数因子变化</li>
        <li>声子贡献：电子-声子相互作用的影响</li>
      </ul>
      
      <h3>2. 同位素效应</h3>
      <p>热力学量的同位素依赖性：</p>
      <div class="formula-box">
        <p>T<sub>c</sub> ∝ M^(-α), α ≈ 0.5</p>
      </div>
      
      <p>其中M是同位素质量，α是同位素指数。</p>
    </section>

    <!-- 多能隙超导体 -->
    <section class="section">
      <h2>多能隙超导体</h2>
      
      <h3>1. 两能隙模型</h3>
      <p>对于多带超导体，总比热为各带贡献之和：</p>
      <div class="formula-box">
        <p>C<sub>total</sub> = ∑<sub>i</sub> w<sub>i</sub> C<sub>i</sub>(Δ<sub>i</sub>, T)</p>
      </div>
      
      <p>其中w<sub>i</sub>是第i个能带的权重。</p>
      
      <h3>2. 典型例子</h3>
      <ul>
        <li><strong>MgB₂：</strong>σ和π能带的不同能隙</li>
        <li><strong>铁基超导体：</strong>多个费米面的能隙</li>
        <li><strong>重费米子：</strong>f电子和传导电子的混合</li>
      </ul>
    </section>

    <!-- 量子临界点 -->
    <section class="section">
      <h2>量子临界点</h2>
      
      <h3>1. 临界涨落</h3>
      <p>接近量子临界点时的热力学异常：</p>
      <ul>
        <li>比热系数γ的增强</li>
        <li>磁化率的量子临界行为</li>
        <li>非费米液体行为的出现</li>
      </ul>
      
      <h3>2. 标度律</h3>
      <p>量子临界区域的标度行为：</p>
      <div class="formula-box">
        <p>C/T ∝ T^(-α), χ ∝ T^(-β)</p>
      </div>
      
      <p>其中α和β是临界指数。</p>
    </section>

    <!-- 实验技术 -->
    <section class="section">
      <h2>实验技术</h2>
      
      <div class="concept-box">
        <h3>主要测量方法</h3>
        <ul>
          <li><strong>量热法：</strong>直接测量比热容</li>
          <li><strong>弛豫量热法：</strong>高精度比热测量</li>
          <li><strong>交流量热法：</strong>相变附近的精确测量</li>
          <li><strong>NMR/NQR：</strong>微观磁性质探测</li>
          <li><strong>μSR：</strong>局域磁场和动力学</li>
        </ul>
      </div>
      
      <h3>数据分析技巧</h3>
      <ul>
        <li><strong>背景扣除：</strong>分离电子和声子贡献</li>
        <li><strong>拟合方法：</strong>多参数非线性拟合</li>
        <li><strong>标度分析：</strong>寻找普适行为</li>
        <li><strong>模型比较：</strong>不同理论模型的检验</li>
      </ul>
    </section>

    <!-- 应用前景 -->
    <section class="section">
      <h2>应用前景</h2>
      
      <h3>1. 材料表征</h3>
      <ul>
        <li><strong>超导机制识别：</strong>区分常规和非常规超导</li>
        <li><strong>能隙结构确定：</strong>单能隙vs多能隙</li>
        <li><strong>配对对称性：</strong>s波、d波等的判断</li>
        <li><strong>杂质效应：</strong>评估材料纯度影响</li>
      </ul>
      
      <h3>2. 器件设计</h3>
      <ul>
        <li><strong>工作温度优化：</strong>基于热力学稳定性</li>
        <li><strong>热管理：</strong>超导器件的散热设计</li>
        <li><strong>相变控制：</strong>利用热力学相变</li>
        <li><strong>能效评估：</strong>超导应用的热力学效率</li>
      </ul>
    </section>

    <!-- 理论发展 -->
    <section class="section">
      <h2>理论发展</h2>
      
      <h3>1. 超越BCS</h3>
      <ul>
        <li><strong>强关联效应：</strong>Hubbard模型和t-J模型</li>
        <li><strong>无序效应：</strong>Anderson定理的推广</li>
        <li><strong>维度效应：</strong>低维超导体的特殊性质</li>
        <li><strong>拓扑效应：</strong>拓扑超导体的热力学</li>
      </ul>
      
      <h3>2. 计算方法</h3>
      <ul>
        <li><strong>第一性原理：</strong>从电子结构计算热力学量</li>
        <li><strong>量子蒙特卡罗：</strong>强关联系统的数值研究</li>
        <li><strong>动力学平均场：</strong>局域关联效应</li>
        <li><strong>机器学习：</strong>数据驱动的材料发现</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        超导体的热力学性质是理解其微观机制的重要窗口。BCS理论成功地解释了
        常规超导体的各种热力学行为，包括比热的指数激活、相变跳跃、熵的
        温度依赖等。这些理论预言与实验的高度吻合证实了BCS理论的正确性。
        对于非常规超导体，热力学测量揭示了更丰富的物理现象，推动了超导
        理论的进一步发展。热力学研究不仅加深了我们对超导机制的理解，
        也为新材料的发现和超导技术的应用提供了重要指导。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_5',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

.section {
  margin-bottom: 30px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.section h2 {
  color: #2980b9;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.section h3 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.section h4 {
  color: #7f8c8d;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.formula-box p {
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: bold;
}

.info-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #3498db;
}

.info-box h3, .info-box h4 {
  color: #2c3e50;
  margin-top: 0;
}

.concept-box {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #e74c3c;
}

.concept-box h3 {
  color: #c0392b;
  margin-top: 0;
}

.data-table {
  margin: 20px 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.data-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
}

.data-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .section {
    padding: 20px;
  }
  
  .section h2 {
    font-size: 1.5em;
  }
  
  .formula-box {
    padding: 15px;
  }
  
  .data-table {
    overflow-x: auto;
  }
}
</style>