<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.5.3 SQUID器件</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        SQUID（Superconducting Quantum Interference Device，超导量子干涉器件）
        是基于Josephson效应的超灵敏磁场测量器件。它利用超导环中的磁通量子化
        和Josephson结的量子干涉效应，能够探测到极其微弱的磁场变化，
        是目前最灵敏的磁场传感器，在科学研究和工业应用中有着广泛的用途。
      </p>
    </section>

    <!-- SQUID的基本原理 -->
    <section class="section">
      <h2>SQUID的基本原理</h2>
      
      <h3>1. 磁通量子化</h3>
      <p>在超导环中，磁通量必须是磁通量子的整数倍：</p>
      <div class="formula-box">
        <p>Φ = nΦ₀, n = 0, ±1, ±2, ...</p>
        <p>Φ₀ = h/2e ≈ 2.07 × 10⁻¹⁵ Wb</p>
      </div>
      
      <h3>2. 相位量子化条件</h3>
      <p>沿超导环的相位变化必须满足：</p>
      <div class="formula-box">
        <p>∮ ∇φ · dl = 2πn</p>
      </div>
      
      <p>考虑矢量势的贡献：</p>
      <div class="formula-box">
        <p>∮ (∇φ - (2e/ℏ)A) · dl = 2πn</p>
      </div>
      
      <h3>3. Josephson结的作用</h3>
      <p>Josephson结允许相位的不连续跳跃，使得磁通量可以连续变化，
      从而实现对外部磁场的灵敏探测。</p>
    </section>

    <!-- dc-SQUID -->
    <section class="section">
      <h2>dc-SQUID</h2>
      
      <h3>1. 基本结构</h3>
      <p>dc-SQUID由两个Josephson结并联组成的超导环：</p>
      <ul>
        <li><strong>超导环：</strong>形成闭合回路</li>
        <li><strong>两个Josephson结：</strong>对称或非对称</li>
        <li><strong>偏置电流：</strong>直流电流源</li>
        <li><strong>输出电压：</strong>测量端口</li>
      </ul>
      
      <h3>2. 工作原理</h3>
      <p>当偏置电流I通过dc-SQUID时，两个结的相位差为：</p>
      <div class="formula-box">
        <p>δ₁ = δ + πΦ/Φ₀</p>
        <p>δ₂ = δ - πΦ/Φ₀</p>
      </div>
      
      <p>其中δ是平均相位差，Φ是穿过环的磁通量。</p>
      
      <h3>3. 临界电流的磁通依赖性</h3>
      <p>对于对称的dc-SQUID：</p>
      <div class="formula-box">
        <p>I_c(Φ) = 2I_{c0} |cos(πΦ/Φ₀)|</p>
      </div>
      
      <p>其中I_{c0}是单个结的临界电流。</p>
      
      <h3>4. 电压-磁通特性</h3>
      <p>当偏置电流固定时，输出电压随磁通周期性变化：</p>
      <div class="formula-box">
        <p>V(Φ) = V(Φ + Φ₀)</p>
      </div>
      
      <p>这种周期性是SQUID工作的基础。</p>
    </section>

    <!-- rf-SQUID -->
    <section class="section">
      <h2>rf-SQUID</h2>
      
      <h3>1. 基本结构</h3>
      <p>rf-SQUID由单个Josephson结和超导环组成：</p>
      <ul>
        <li><strong>单个Josephson结：</strong>弱连接</li>
        <li><strong>超导环：</strong>大电感</li>
        <li><strong>射频激励：</strong>交流磁场驱动</li>
        <li><strong>谐振电路：</strong>LC振荡回路</li>
      </ul>
      
      <h3>2. 工作原理</h3>
      <p>rf-SQUID通过射频磁场激励，环中的磁通量满足：</p>
      <div class="formula-box">
        <p>Φ = Φ_{ext} + LI</p>
      </div>
      
      <p>其中L是环的电感，I是环流。</p>
      
      <h3>3. 能量分析</h3>
      <p>系统的总能量包括：</p>
      <div class="formula-box">
        <p>E = ½L(Φ - Φ_{ext})²/L² - E_J cos δ</p>
      </div>
      
      <p>其中E_J = ℏI_c/2e是Josephson耦合能。</p>
    </section>

    <!-- SQUID的性能参数 -->
    <section class="section">
      <h2>SQUID的性能参数</h2>
      
      <div class="data-table">
        <h3>典型SQUID性能参数</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>dc-SQUID</th>
              <th>rf-SQUID</th>
              <th>单位</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>磁场分辨率</td>
              <td>10⁻¹⁸</td>
              <td>10⁻¹⁶</td>
              <td>T</td>
            </tr>
            <tr>
              <td>磁通分辨率</td>
              <td>10⁻⁶</td>
              <td>10⁻⁴</td>
              <td>Φ₀</td>
            </tr>
            <tr>
              <td>带宽</td>
              <td>DC-100 MHz</td>
              <td>DC-1 MHz</td>
              <td>Hz</td>
            </tr>
            <tr>
              <td>工作温度</td>
              <td>4.2 K</td>
              <td>4.2 K</td>
              <td>K</td>
            </tr>
            <tr>
              <td>功耗</td>
              <td>10⁻⁹</td>
              <td>10⁻⁶</td>
              <td>W</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>1. 磁场灵敏度</h3>
      <p>SQUID的磁场灵敏度主要由噪声限制：</p>
      <div class="formula-box">
        <p>δB = √(S_B) = √(S_Φ)/A_{eff}</p>
      </div>
      
      <p>其中S_Φ是磁通噪声功率谱密度，A_{eff}是有效面积。</p>
      
      <h3>2. 噪声源</h3>
      <ul>
        <li><strong>热噪声：</strong>电阻的Johnson噪声</li>
        <li><strong>散粒噪声：</strong>Josephson结的量子噪声</li>
        <li><strong>1/f噪声：</strong>低频噪声</li>
        <li><strong>环境噪声：</strong>外部电磁干扰</li>
      </ul>
    </section>

    <!-- SQUID电子学 -->
    <section class="section">
      <h2>SQUID电子学</h2>
      
      <h3>1. 读出电路</h3>
      <p>SQUID需要复杂的电子学系统：</p>
      <ul>
        <li><strong>偏置电路：</strong>提供稳定的偏置电流</li>
        <li><strong>前置放大器：</strong>低噪声信号放大</li>
        <li><strong>反馈电路：</strong>磁通锁定环</li>
        <li><strong>数字处理：</strong>信号处理和控制</li>
      </ul>
      
      <h3>2. 磁通锁定环（FLL）</h3>
      <p>为了线性化SQUID的响应，通常采用磁通锁定环：</p>
      <div class="info-box">
        <h4>FLL工作原理</h4>
        <ul>
          <li><strong>误差检测：</strong>检测SQUID输出偏离工作点</li>
          <li><strong>反馈控制：</strong>通过反馈线圈补偿磁通变化</li>
          <li><strong>线性输出：</strong>反馈电流正比于外部磁场</li>
          <li><strong>动态范围：</strong>扩展测量范围</li>
        </ul>
      </div>
      
      <h3>3. 调制技术</h3>
      <p>为了提高信噪比，常用调制解调技术：</p>
      <ul>
        <li><strong>磁通调制：</strong>在工作点附近小幅调制</li>
        <li><strong>锁相检测：</strong>提取调制信号</li>
        <li><strong>数字锁相：</strong>数字信号处理</li>
      </ul>
    </section>

    <!-- 应用领域 -->
    <section class="section">
      <h2>应用领域</h2>
      
      <div class="concept-box">
        <h3>主要应用领域</h3>
        <ul>
          <li><strong>生物磁学：</strong>心磁图、脑磁图测量</li>
          <li><strong>地球物理：</strong>地磁测量、矿物勘探</li>
          <li><strong>无损检测：</strong>材料缺陷检测</li>
          <li><strong>基础物理：</strong>引力波探测、暗物质搜寻</li>
          <li><strong>量子计算：</strong>量子比特读出</li>
        </ul>
      </div>
      
      <h3>1. 生物磁学应用</h3>
      <p>SQUID在生物磁学中的应用：</p>
      <ul>
        <li><strong>脑磁图（MEG）：</strong>测量大脑神经活动产生的磁场</li>
        <li><strong>心磁图（MCG）：</strong>检测心脏电活动的磁信号</li>
        <li><strong>磁性纳米粒子：</strong>药物载体和成像对比剂</li>
        <li><strong>免疫检测：</strong>基于磁性标记的生物检测</li>
      </ul>
      
      <h3>2. 地球物理应用</h3>
      <ul>
        <li><strong>地磁观测：</strong>地球磁场的精密测量</li>
        <li><strong>矿物勘探：</strong>寻找磁性矿物资源</li>
        <li><strong>考古学：</strong>探测地下文物和遗迹</li>
        <li><strong>环境监测：</strong>污染物的磁性检测</li>
      </ul>
      
      <h3>3. 工业应用</h3>
      <ul>
        <li><strong>无损检测：</strong>金属材料的裂纹检测</li>
        <li><strong>质量控制：</strong>产品磁性能测试</li>
        <li><strong>安全检查：</strong>隐藏金属物品探测</li>
        <li><strong>导航系统：</strong>高精度磁导航</li>
      </ul>
    </section>

    <!-- 制备技术 -->
    <section class="section">
      <h2>制备技术</h2>
      
      <h3>1. 薄膜技术</h3>
      <p>现代SQUID主要采用薄膜技术制备：</p>
      <ul>
        <li><strong>溅射沉积：</strong>制备超导薄膜</li>
        <li><strong>光刻技术：</strong>图案化加工</li>
        <li><strong>离子束刻蚀：</strong>精密结构加工</li>
        <li><strong>氧化工艺：</strong>形成隧道结</li>
      </ul>
      
      <h3>2. 材料选择</h3>
      <div class="data-table">
        <h3>SQUID材料系统</h3>
        <table>
          <thead>
            <tr>
              <th>材料</th>
              <th>工作温度</th>
              <th>优点</th>
              <th>缺点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nb/AlO_x/Nb</td>
              <td>4.2 K</td>
              <td>成熟工艺，高性能</td>
              <td>需要液氦冷却</td>
            </tr>
            <tr>
              <td>YBCO</td>
              <td>77 K</td>
              <td>液氮冷却</td>
              <td>工艺复杂</td>
            </tr>
            <tr>
              <td>Pb合金</td>
              <td>4.2 K</td>
              <td>低噪声</td>
              <td>稳定性差</td>
            </tr>
            <tr>
              <td>NbN</td>
              <td>10 K</td>
              <td>高临界温度</td>
              <td>制备困难</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>3. 封装技术</h3>
      <ul>
        <li><strong>磁屏蔽：</strong>多层μ金属屏蔽</li>
        <li><strong>振动隔离：</strong>减少机械噪声</li>
        <li><strong>温度稳定：</strong>精密温度控制</li>
        <li><strong>电磁兼容：</strong>射频屏蔽设计</li>
      </ul>
    </section>

    <!-- 高温超导SQUID -->
    <section class="section">
      <h2>高温超导SQUID</h2>
      
      <h3>1. 技术优势</h3>
      <p>高温超导SQUID的主要优势：</p>
      <ul>
        <li><strong>液氮冷却：</strong>降低运行成本</li>
        <li><strong>便携性：</strong>简化制冷系统</li>
        <li><strong>实用性：</strong>更适合实际应用</li>
        <li><strong>可靠性：</strong>减少低温相关问题</li>
      </ul>
      
      <h3>2. 技术挑战</h3>
      <ul>
        <li><strong>1/f噪声：</strong>比低温SQUID高</li>
        <li><strong>热噪声：</strong>77 K下的热涨落</li>
        <li><strong>材料问题：</strong>晶界结的不稳定性</li>
        <li><strong>制备工艺：</strong>复杂的薄膜生长</li>
      </ul>
      
      <h3>3. 应用前景</h3>
      <ul>
        <li><strong>便携式磁强计：</strong>野外测量应用</li>
        <li><strong>医疗设备：</strong>降低医疗成本</li>
        <li><strong>工业检测：</strong>在线质量控制</li>
        <li><strong>消费电子：</strong>磁传感器集成</li>
      </ul>
    </section>

    <!-- 未来发展 -->
    <section class="section">
      <h2>未来发展</h2>
      
      <h3>1. 技术发展方向</h3>
      <ul>
        <li><strong>数字SQUID：</strong>全数字化信号处理</li>
        <li><strong>阵列SQUID：</strong>多通道并行测量</li>
        <li><strong>集成化：</strong>片上系统集成</li>
        <li><strong>智能化：</strong>自适应信号处理</li>
      </ul>
      
      <h3>2. 新兴应用</h3>
      <ul>
        <li><strong>量子计算：</strong>量子比特控制和读出</li>
        <li><strong>暗物质探测：</strong>轴子暗物质搜寻</li>
        <li><strong>引力波探测：</strong>提高探测灵敏度</li>
        <li><strong>精密测量：</strong>基本物理常数测定</li>
      </ul>
      
      <h3>3. 挑战与机遇</h3>
      <div class="info-box">
        <h4>发展挑战</h4>
        <ul>
          <li><strong>成本控制：</strong>降低制造和运行成本</li>
          <li><strong>标准化：</strong>建立行业标准</li>
          <li><strong>人才培养：</strong>专业技术人员短缺</li>
          <li><strong>市场推广：</strong>扩大应用领域</li>
        </ul>
      </div>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        SQUID器件是超导电子学的杰出代表，它将量子物理的基本原理
        转化为实用的测量工具。从基本的磁通量子化和Josephson效应
        出发，SQUID实现了前所未有的磁场测量精度，在科学研究和
        工业应用中发挥着重要作用。随着制备技术的进步和新材料的
        发展，特别是高温超导SQUID的成熟，这一技术将在更广泛的
        领域得到应用。未来，SQUID技术将继续推动精密测量、
        量子技术和生物医学等领域的发展，为人类科技进步做出
        更大贡献。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_5_3',
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