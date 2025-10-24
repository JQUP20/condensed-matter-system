<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.5.1 直流Josephson效应</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        直流Josephson效应是超导量子干涉现象的基础，描述了两个超导体通过
        薄绝缘层（Josephson结）耦合时的直流超导电流。这一效应由Brian Josephson
        在1962年理论预言，随后被实验证实，为他赢得了1973年的诺贝尔物理学奖。
        Josephson效应在超导电子学和量子计算中有着广泛的应用。
      </p>
    </section>

    <!-- Josephson结构 -->
    <section class="section">
      <h2>Josephson结构</h2>
      
      <h3>1. 基本结构</h3>
      <p>典型的Josephson结由以下部分组成：</p>
      <ul>
        <li><strong>左超导体：</strong>序参量ψ₁ = |ψ₁|e^(iφ₁)</li>
        <li><strong>绝缘层：</strong>厚度d ≈ 1-2 nm</li>
        <li><strong>右超导体：</strong>序参量ψ₂ = |ψ₂|e^(iφ₂)</li>
      </ul>
      
      <h3>2. 结的类型</h3>
      <div class="info-box">
        <h4>常见Josephson结类型</h4>
        <ul>
          <li><strong>SIS结：</strong>超导体-绝缘体-超导体</li>
          <li><strong>SNS结：</strong>超导体-正常金属-超导体</li>
          <li><strong>点接触结：</strong>两个超导体的点接触</li>
          <li><strong>薄膜结：</strong>通过薄膜技术制备的结</li>
        </ul>
      </div>
      
      <h3>3. 制备方法</h3>
      <ul>
        <li><strong>隧道结：</strong>氧化铝绝缘层</li>
        <li><strong>桥接结：</strong>微细加工技术</li>
        <li><strong>点接触：</strong>机械接触或电化学腐蚀</li>
        <li><strong>约瑟夫森结阵列：</strong>大规模集成</li>
      </ul>
    </section>

    <!-- 理论基础 -->
    <section class="section">
      <h2>理论基础</h2>
      
      <h3>1. Josephson方程推导</h3>
      <p>从含时薛定谔方程出发，考虑两个超导体的耦合：</p>
      <div class="formula-box">
        <p>iℏ ∂ψ₁/∂t = E₁ψ₁ + Kψ₂</p>
        <p>iℏ ∂ψ₂/∂t = E₂ψ₂ + Kψ₁</p>
      </div>
      
      <p>其中K是隧穿耦合强度，E₁、E₂是各自的能量。</p>
      
      <h3>2. 相位差的重要性</h3>
      <p>定义相位差：</p>
      <div class="formula-box">
        <p>δ = φ₂ - φ₁</p>
      </div>
      
      <p>相位差δ是决定Josephson效应的关键参量。</p>
      
      <h3>3. 第一Josephson关系</h3>
      <p>直流Josephson电流与相位差的关系：</p>
      <div class="formula-box">
        <p>I = I_c sin δ</p>
      </div>
      
      <p>其中I_c是临界电流，这是直流Josephson效应的核心方程。</p>
    </section>

    <!-- 临界电流 -->
    <section class="section">
      <h2>临界电流</h2>
      
      <h3>1. 临界电流的物理意义</h3>
      <p>临界电流I_c是在零电压下能够通过Josephson结的最大超导电流。</p>
      
      <h3>2. 临界电流的表达式</h3>
      <p>对于SIS隧道结：</p>
      <div class="formula-box">
        <p>I_c = (π Δ₁ Δ₂)/(2eR_N) tanh(Δ₁/2k_BT) tanh(Δ₂/2k_BT)</p>
      </div>
      
      <p>其中R_N是正常态电阻，Δ₁、Δ₂是两侧的超导能隙。</p>
      
      <h3>3. 温度依赖性</h3>
      <p>临界电流随温度的变化：</p>
      <ul>
        <li><strong>低温极限：</strong>I_c ∝ Δ₁Δ₂</li>
        <li><strong>接近T_c：</strong>I_c ∝ (T_c - T)^(3/2)</li>
        <li><strong>T > T_c：</strong>I_c = 0</li>
      </ul>
    </section>

    <!-- 电流-相位关系 -->
    <section class="section">
      <h2>电流-相位关系</h2>
      
      <h3>1. 基本关系</h3>
      <p>理想Josephson结的I-δ关系：</p>
      <div class="formula-box">
        <p>I(δ) = I_c sin δ</p>
      </div>
      
      <h3>2. 非理想效应</h3>
      <p>实际结中的修正：</p>
      <ul>
        <li><strong>高次谐波：</strong>I = I_c sin δ + I₂ sin 2δ + ...</li>
        <li><strong>磁场调制：</strong>临界电流的磁场依赖性</li>
        <li><strong>温度效应：</strong>热涨落对相位的影响</li>
        <li><strong>噪声效应：</strong>环境噪声的影响</li>
      </ul>
      
      <h3>3. 能量关系</h3>
      <p>Josephson结的能量：</p>
      <div class="formula-box">
        <p>E_J(δ) = -E_J cos δ</p>
      </div>
      
      <p>其中E_J = ℏI_c/2e是Josephson耦合能。</p>
    </section>

    <!-- 磁场中的Josephson结 -->
    <section class="section">
      <h2>磁场中的Josephson结</h2>
      
      <h3>1. 磁通量子化</h3>
      <p>穿过Josephson结的磁通量：</p>
      <div class="formula-box">
        <p>Φ = ∫ B⃗ · dA⃗</p>
      </div>
      
      <h3>2. 相位与磁通的关系</h3>
      <p>考虑磁场时的相位差：</p>
      <div class="formula-box">
        <p>δ = δ₀ + (2π/Φ₀) ∫ A⃗ · dl⃗</p>
      </div>
      
      <p>其中Φ₀ = h/2e是磁通量子。</p>
      
      <h3>3. Fraunhofer衍射图样</h3>
      <p>均匀磁场中的临界电流：</p>
      <div class="formula-box">
        <p>I_c(Φ) = I_c(0) |sin(πΦ/Φ₀)/(πΦ/Φ₀)|</p>
      </div>
      
      <p>这类似于光学中的单缝衍射图样。</p>
    </section>

    <!-- 实验测量 -->
    <section class="section">
      <h2>实验测量</h2>
      
      <div class="data-table">
        <h3>典型Josephson结参数</h3>
        <table>
          <thead>
            <tr>
              <th>结类型</th>
              <th>I_c (μA)</th>
              <th>R_N (Ω)</th>
              <th>I_c R_N (mV)</th>
              <th>应用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nb/AlO_x/Nb</td>
              <td>1-100</td>
              <td>10-1000</td>
              <td>2.5</td>
              <td>SQUID</td>
            </tr>
            <tr>
              <td>Pb/PbO_x/Pb</td>
              <td>0.1-10</td>
              <td>100-10000</td>
              <td>2.8</td>
              <td>电压标准</td>
            </tr>
            <tr>
              <td>点接触</td>
              <td>10-1000</td>
              <td>0.1-10</td>
              <td>变化大</td>
              <td>基础研究</td>
            </tr>
            <tr>
              <td>高T_c结</td>
              <td>1-100</td>
              <td>1-100</td>
              <td>20-50</td>
              <td>高频应用</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>测量技术</h3>
      <ul>
        <li><strong>I-V特性：</strong>直流电流-电压特性测量</li>
        <li><strong>临界电流测量：</strong>四端法精确测量</li>
        <li><strong>磁场调制：</strong>Fraunhofer图样测量</li>
        <li><strong>噪声测量：</strong>热噪声和散粒噪声</li>
      </ul>
    </section>

    <!-- 应用 -->
    <section class="section">
      <h2>应用</h2>
      
      <div class="concept-box">
        <h3>主要应用领域</h3>
        <ul>
          <li><strong>SQUID：</strong>超导量子干涉器件</li>
          <li><strong>电压标准：</strong>基于Josephson效应的电压基准</li>
          <li><strong>超导电子学：</strong>快速开关和逻辑器件</li>
          <li><strong>量子计算：</strong>超导量子比特</li>
          <li><strong>太赫兹源：</strong>高频振荡器</li>
        </ul>
      </div>
      
      <h3>1. SQUID磁强计</h3>
      <p>基于Josephson结的超灵敏磁场探测器：</p>
      <ul>
        <li>磁场灵敏度：10^(-18) T</li>
        <li>应用：地磁测量、生物磁场、NDE检测</li>
        <li>工作原理：磁通量子化和相位相干</li>
      </ul>
      
      <h3>2. 电压标准</h3>
      <p>Josephson电压标准的优势：</p>
      <ul>
        <li>基于基本物理常数</li>
        <li>精度达到10^(-9)</li>
        <li>国际电压标准</li>
        <li>可溯源性好</li>
      </ul>
    </section>

    <!-- 量子相干性 -->
    <section class="section">
      <h2>量子相干性</h2>
      
      <h3>1. 宏观量子相干</h3>
      <p>Josephson结展现了宏观尺度的量子相干现象：</p>
      <ul>
        <li><strong>相位相干：</strong>两侧超导体的相位锁定</li>
        <li><strong>量子隧穿：</strong>Cooper对的宏观隧穿</li>
        <li><strong>量子干涉：</strong>多路径的相位干涉</li>
      </ul>
      
      <h3>2. 退相干机制</h3>
      <p>影响量子相干的因素：</p>
      <ul>
        <li><strong>热涨落：</strong>k_B T与E_J的竞争</li>
        <li><strong>电荷涨落：</strong>环境电荷噪声</li>
        <li><strong>磁通涨落：</strong>外部磁场噪声</li>
        <li><strong>准粒子中毒：</strong>非平衡准粒子</li>
      </ul>
      
      <h3>3. 相干长度</h3>
      <p>Josephson结中的特征长度：</p>
      <div class="formula-box">
        <p>λ_J = √(Φ₀/2πμ₀d j_c)</p>
      </div>
      
      <p>其中j_c = I_c/A是临界电流密度。</p>
    </section>

    <!-- 理论发展 -->
    <section class="section">
      <h2>理论发展</h2>
      
      <h3>1. 微观理论</h3>
      <ul>
        <li><strong>隧穿哈密顿量：</strong>基于BCS理论的推导</li>
        <li><strong>格林函数方法：</strong>非平衡态的处理</li>
        <li><strong>路径积分：</strong>量子涨落的影响</li>
        <li><strong>Bogoliubov-de Gennes方程：</strong>空间变化的处理</li>
      </ul>
      
      <h3>2. 现代发展</h3>
      <ul>
        <li><strong>拓扑Josephson结：</strong>Majorana费米子</li>
        <li><strong>自旋三重态配对：</strong>非常规超导体</li>
        <li><strong>多端结：</strong>复杂网络结构</li>
        <li><strong>时间反演对称破缺：</strong>φ₀结</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        直流Josephson效应是超导物理中最重要的现象之一，它不仅揭示了
        超导态的宏观量子相干性质，还为现代超导电子学奠定了基础。
        从基本的I = I_c sin δ关系出发，我们可以理解Josephson结的
        各种性质和应用。这一效应在精密测量、量子计算和超导电子学
        中都有着不可替代的作用，继续推动着超导技术的发展和应用。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_5_1',
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