<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.6.2 重费米子超导体</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        重费米子超导体是一类特殊的非常规超导体，其特征是具有极大的
        电子有效质量（可达自由电子质量的几百倍）和复杂的磁性行为。
        这些材料通常含有f电子元素（如Ce、Yb、U等），表现出强关联
        电子效应。重费米子超导体的发现为理解强关联电子系统中的
        超导现象提供了重要的实验平台，其非常规的配对机制和
        奇异的物理性质引起了广泛的研究兴趣。
      </p>
    </section>

    <!-- 基本概念 -->
    <section class="section">
      <h2>基本概念</h2>
      
      <h3>1. 重费米子现象</h3>
      <p>重费米子现象的基本特征：</p>
      <ul>
        <li><strong>巨大有效质量：</strong>m* = (100-1000)m_e</li>
        <li><strong>大比热系数：</strong>γ = C/T ≈ 0.1-1 J/mol·K²</li>
        <li><strong>增强的泡利磁化率：</strong>χ ∝ m*</li>
        <li><strong>Kadowaki-Woods关系：</strong>A/γ² = 常数</li>
      </ul>
      
      <h3>2. f电子的作用</h3>
      <p>f电子在重费米子行为中的关键作用：</p>
      <div class="formula-box">
        <p>局域f电子 + 巡游电子 → 重准粒子</p>
      </div>
      
      <div class="info-box">
        <h4>f电子特征</h4>
        <ul>
          <li><strong>强局域性：</strong>4f/5f轨道收缩</li>
          <li><strong>强关联：</strong>库仑排斥U很大</li>
          <li><strong>多重态：</strong>丰富的能级结构</li>
          <li><strong>杂化：</strong>与传导电子杂化</li>
        </ul>
      </div>
      
      <h3>3. Kondo效应</h3>
      <p>单离子Kondo效应是重费米子行为的基础：</p>
      <div class="formula-box">
        <p>T_K = D exp(-1/ρJ)</p>
        <p>其中D是带宽，ρ是态密度，J是交换耦合</p>
      </div>
      
      <h3>4. 相干态的形成</h3>
      <p>低温下形成相干的重费米子态：</p>
      <ul>
        <li><strong>Kondo晶格：</strong>周期性排列的Kondo杂质</li>
        <li><strong>相干温度：</strong>T* ≈ T_K</li>
        <li><strong>费米液体行为：</strong>T < T*时的准粒子图像</li>
        <li><strong>大费米面：</strong>包含f电子的费米面</li>
      </ul>
    </section>

    <!-- 典型材料 -->
    <section class="section">
      <h2>典型材料</h2>
      
      <div class="data-table">
        <h3>重费米子超导体实例</h3>
        <table>
          <thead>
            <tr>
              <th>材料</th>
              <th>T_c (K)</th>
              <th>γ (mJ/mol·K²)</th>
              <th>配对对称性</th>
              <th>发现年份</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CeCu₂Si₂</td>
              <td>0.6</td>
              <td>1000</td>
              <td>d波</td>
              <td>1979</td>
            </tr>
            <tr>
              <td>UPt₃</td>
              <td>0.5</td>
              <td>450</td>
              <td>f波</td>
              <td>1984</td>
            </tr>
            <tr>
              <td>UBe₁₃</td>
              <td>0.9</td>
              <td>1100</td>
              <td>未确定</td>
              <td>1983</td>
            </tr>
            <tr>
              <td>URu₂Si₂</td>
              <td>1.5</td>
              <td>180</td>
              <td>d波</td>
              <td>1985</td>
            </tr>
            <tr>
              <td>CeCoIn₅</td>
              <td>2.3</td>
              <td>300</td>
              <td>d波</td>
              <td>2001</td>
            </tr>
            <tr>
              <td>PuCoGa₅</td>
              <td>18.5</td>
              <td>77</td>
              <td>d波</td>
              <td>2002</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>1. CeCu₂Si₂系统</h3>
      <p>第一个发现的重费米子超导体：</p>
      <ul>
        <li><strong>结构：</strong>四方ThCr₂Si₂型结构</li>
        <li><strong>相图：</strong>反铁磁-超导竞争</li>
        <li><strong>压力效应：</strong>压力调控相变</li>
        <li><strong>量子临界点：</strong>T = 0相变</li>
      </ul>
      
      <h3>2. UPt₃系统</h3>
      <p>具有复杂超导相图的材料：</p>
      <ul>
        <li><strong>多重超导相：</strong>A、B、C三个相</li>
        <li><strong>磁场诱导相变：</strong>H-T相图复杂</li>
        <li><strong>手性配对：</strong>可能的手性p波配对</li>
        <li><strong>时间反演破缺：</strong>μSR实验证据</li>
      </ul>
      
      <h3>3. 115系统（CeCoIn₅等）</h3>
      <p>新一代重费米子超导体：</p>
      <ul>
        <li><strong>层状结构：</strong>准二维特性</li>
        <li><strong>高T_c：</strong>相对较高的临界温度</li>
        <li><strong>d波配对：</strong>明确的配对对称性</li>
        <li><strong>量子振荡：</strong>清晰的费米面</li>
      </ul>
    </section>

    <!-- 电子结构与费米面 -->
    <section class="section">
      <h2>电子结构与费米面</h2>
      
      <h3>1. 能带结构特征</h3>
      <p>重费米子材料的能带结构：</p>
      <ul>
        <li><strong>窄f能带：</strong>接近费米能级</li>
        <li><strong>杂化能隙：</strong>f-d杂化形成的能隙</li>
        <li><strong>重能带：</strong>大有效质量的能带</li>
        <li><strong>多轨道特性：</strong>f轨道的多重性</li>
      </ul>
      
      <h3>2. 费米面拓扑</h3>
      <div class="concept-box">
        <h4>费米面演化</h4>
        <ul>
          <li><strong>小费米面：</strong>高温时不包含f电子</li>
          <li><strong>大费米面：</strong>低温时包含f电子</li>
          <li><strong>费米面重构：</strong>温度驱动的拓扑变化</li>
          <li><strong>Luttinger定理：</strong>费米面体积守恒</li>
        </ul>
      </div>
      
      <h3>3. 量子振荡</h3>
      <p>量子振荡实验揭示费米面信息：</p>
      <div class="formula-box">
        <p>de Haas-van Alphen频率：F = (ℏ/2πe)A_F</p>
        <p>回旋有效质量：m* = (ℏ²/2π)(∂A_F/∂E)</p>
      </div>
      
      <h3>4. ARPES研究</h3>
      <p>角分辨光电子谱的重要发现：</p>
      <ul>
        <li><strong>重准粒子能带：</strong>窄带宽和大有效质量</li>
        <li><strong>杂化能隙：</strong>f-d杂化的直接观测</li>
        <li><strong>相干-非相干渡越：</strong>温度依赖的谱重</li>
        <li><strong>超导能隙：</strong>配对对称性的确定</li>
      </ul>
    </section>

    <!-- 磁性与超导的竞争 -->
    <section class="section">
      <h2>磁性与超导的竞争</h2>
      
      <h3>1. 相图特征</h3>
      <p>重费米子材料的典型相图：</p>
      <div class="formula-box">
        <p>顺磁金属 → 反铁磁序 → 超导态</p>
      </div>
      
      <h3>2. Doniach相图</h3>
      <p>描述磁性和超导竞争的理论模型：</p>
      <ul>
        <li><strong>RKKY相互作用：</strong>间接磁交换</li>
        <li><strong>Kondo效应：</strong>自旋屏蔽</li>
        <li><strong>竞争参数：</strong>J/T_K比值</li>
        <li><strong>量子临界点：</strong>T = 0相变点</li>
      </ul>
      
      <h3>3. 量子临界现象</h3>
      <div class="info-box">
        <h4>量子临界点特征</h4>
        <ul>
          <li><strong>非费米液体行为：</strong>ρ ∝ T^n, n ≠ 2</li>
          <li><strong>对数发散：</strong>C/T ∝ -ln T</li>
          <li><strong>临界涨落：</strong>增强的磁涨落</li>
          <li><strong>标度律：</strong>临界指数关系</li>
        </ul>
      </div>
      
      <h3>4. 磁涨落与超导</h3>
      <p>磁涨落在超导配对中的作用：</p>
      <ul>
        <li><strong>配对胶水：</strong>反铁磁涨落介导配对</li>
        <li><strong>配对对称性：</strong>决定d波配对</li>
        <li><strong>T_c增强：</strong>临界涨落提高T_c</li>
        <li><strong>竞争效应：</strong>强磁序抑制超导</li>
      </ul>
    </section>

    <!-- 非常规超导性质 -->
    <section class="section">
      <h2>非常规超导性质</h2>
      
      <h3>1. 配对对称性</h3>
      <p>重费米子超导体的配对对称性：</p>
      <div class="data-table">
        <h3>配对对称性分类</h3>
        <table>
          <thead>
            <tr>
              <th>对称性</th>
              <th>角度依赖</th>
              <th>节点</th>
              <th>实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>d_{x²-y²}</td>
              <td>cos(2φ)</td>
              <td>线节点</td>
              <td>CeCoIn₅</td>
            </tr>
            <tr>
              <td>d_{xy}</td>
              <td>sin(2φ)</td>
              <td>线节点</td>
              <td>CeCu₂Si₂</td>
            </tr>
            <tr>
              <td>f波</td>
              <td>复杂</td>
              <td>点节点</td>
              <td>UPt₃</td>
            </tr>
            <tr>
              <td>p波</td>
              <td>sin φ</td>
              <td>线节点</td>
              <td>可能的UPt₃</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>2. 能隙结构</h3>
      <p>非常规超导的能隙特征：</p>
      <ul>
        <li><strong>各向异性能隙：</strong>Δ(k)依赖于k方向</li>
        <li><strong>节点结构：</strong>能隙为零的k点或线</li>
        <li><strong>多能隙：</strong>多轨道或多带超导</li>
        <li><strong>能隙比：</strong>2Δ/k_BT_c偏离BCS值</li>
      </ul>
      
      <h3>3. 热力学性质</h3>
      <p>反映非常规配对的热力学证据：</p>
      <div class="formula-box">
        <p>比热：C ∝ T^n (n < 3，有节点时)</p>
        <p>穿透深度：λ ∝ T (线节点)</p>
        <p>NMR弛豫率：1/T₁ ∝ T^n</p>
      </div>
      
      <h3>4. 输运性质</h3>
      <ul>
        <li><strong>剩余电阻率：</strong>杂质散射增强</li>
        <li><strong>热导率：</strong>准粒子热导</li>
        <li><strong>霍尔效应：</strong>复杂的温度依赖</li>
        <li><strong>磁阻：</strong>各向异性磁阻</li>
      </ul>
    </section>

    <!-- 实验技术 -->
    <section class="section">
      <h2>实验技术</h2>
      
      <h3>1. 宏观测量</h3>
      <p>基本物性测量技术：</p>
      <ul>
        <li><strong>比热测量：</strong>电子比热系数γ</li>
        <li><strong>磁化率：</strong>泡利磁化率和抗磁性</li>
        <li><strong>电阻率：</strong>温度和磁场依赖</li>
        <li><strong>热导率：</strong>电子和声子热导</li>
      </ul>
      
      <h3>2. 微观探针</h3>
      <div class="concept-box">
        <h4>微观实验技术</h4>
        <ul>
          <li><strong>NMR/NQR：</strong>局域磁场和自旋动力学</li>
          <li><strong>μSR：</strong>内部磁场分布</li>
          <li><strong>中子散射：</strong>磁结构和激发</li>
          <li><strong>X射线散射：</strong>电荷和轨道序</li>
        </ul>
      </div>
      
      <h3>3. 光谱学技术</h3>
      <ul>
        <li><strong>ARPES：</strong>电子结构和费米面</li>
        <li><strong>隧道谱：</strong>准粒子态密度</li>
        <li><strong>光学谱：</strong>电子激发和等离激元</li>
        <li><strong>拉曼散射：</strong>集体激发模式</li>
      </ul>
      
      <h3>4. 极端条件</h3>
      <p>重费米子研究需要的极端条件：</p>
      <ul>
        <li><strong>超低温：</strong>mK温度范围</li>
        <li><strong>强磁场：</strong>高达几十特斯拉</li>
        <li><strong>高压：</strong>GPa压力范围</li>
        <li><strong>单晶样品：</strong>高质量单晶</li>
      </ul>
    </section>

    <!-- 理论模型 -->
    <section class="section">
      <h2>理论模型</h2>
      
      <h3>1. Anderson晶格模型</h3>
      <p>描述f电子局域化的基本模型：</p>
      <div class="formula-box">
        <p>H = Σ_k ε_k c†_k c_k + Σ_i E_f f†_i f_i + Σ_{i,k} V_{ik}(c†_k f_i + h.c.) + U Σ_i n_{i↑} n_{i↓}</p>
      </div>
      
      <h3>2. Kondo晶格模型</h3>
      <p>简化的有效模型：</p>
      <div class="formula-box">
        <p>H = Σ_k ε_k c†_k c_k + J Σ_i S_i · s_i</p>
      </div>
      
      <h3>3. 平均场理论</h3>
      <p>处理强关联效应的方法：</p>
      <ul>
        <li><strong>奴隶玻色子：</strong>约束费米子方法</li>
        <li><strong>大N展开：</strong>1/N展开技术</li>
        <li><strong>动力学平均场：</strong>DMFT方法</li>
        <li><strong>变分方法：</strong>Gutzwiller变分</li>
      </ul>
      
      <h3>4. 超导理论</h3>
      <div class="info-box">
        <h4>重费米子超导理论</h4>
        <ul>
          <li><strong>磁涨落机制：</strong>自旋涨落介导配对</li>
          <li><strong>轨道涨落：</strong>轨道自由度的作用</li>
          <li><strong>多轨道模型：</strong>f-d杂化效应</li>
          <li><strong>拓扑超导：</strong>非平庸拓扑态</li>
        </ul>
      </div>
    </section>

    <!-- 应用前景 -->
    <section class="section">
      <h2>应用前景</h2>
      
      <h3>1. 量子器件</h3>
      <p>重费米子材料在量子技术中的应用：</p>
      <ul>
        <li><strong>量子比特：</strong>基于f电子的量子比特</li>
        <li><strong>量子传感：</strong>高灵敏度磁场传感</li>
        <li><strong>量子存储：</strong>长相干时间存储</li>
        <li><strong>拓扑量子计算：</strong>拓扑保护的量子态</li>
      </ul>
      
      <h3>2. 自旋电子学</h3>
      <ul>
        <li><strong>自旋过滤：</strong>高自旋极化率</li>
        <li><strong>自旋阀：</strong>磁阻效应器件</li>
        <li><strong>自旋晶体管：</strong>电场控制磁性</li>
        <li><strong>自旋存储：</strong>非易失性存储</li>
      </ul>
      
      <h3>3. 热电应用</h3>
      <div class="concept-box">
        <h4>热电性能优势</h4>
        <ul>
          <li><strong>大塞贝克系数：</strong>重费米子增强</li>
          <li><strong>低热导率：</strong>强散射机制</li>
          <li><strong>可调载流子：</strong>掺杂控制</li>
          <li><strong>宽温度范围：</strong>多种工作温度</li>
        </ul>
      </div>
      
      <h3>4. 基础研究</h3>
      <ul>
        <li><strong>强关联物理：</strong>理论验证平台</li>
        <li><strong>量子临界性：</strong>相变研究</li>
        <li><strong>非费米液体：</strong>新奇量子态</li>
        <li><strong>拓扑物态：</strong>拓扑相变</li>
      </ul>
    </section>

    <!-- 挑战与展望 -->
    <section class="section">
      <h2>挑战与展望</h2>
      
      <h3>1. 理论挑战</h3>
      <ul>
        <li><strong>强关联问题：</strong>精确求解困难</li>
        <li><strong>多体效应：</strong>复杂的相互作用</li>
        <li><strong>非费米液体：</strong>超越准粒子图像</li>
        <li><strong>拓扑性质：</strong>拓扑不变量计算</li>
      </ul>
      
      <h3>2. 实验挑战</h3>
      <div class="info-box">
        <h4>实验技术挑战</h4>
        <ul>
          <li><strong>样品质量：</strong>高质量单晶制备</li>
          <li><strong>极端条件：</strong>超低温强磁场</li>
          <li><strong>信号微弱：</strong>高精度测量技术</li>
          <li><strong>多参数调控：</strong>压力、磁场、掺杂</li>
        </ul>
      </div>
      
      <h3>3. 发展方向</h3>
      <ul>
        <li><strong>新材料探索：</strong>寻找新的重费米子材料</li>
        <li><strong>人工结构：</strong>超晶格和异质结</li>
        <li><strong>机器学习：</strong>材料设计和相图预测</li>
        <li><strong>量子模拟：</strong>冷原子系统模拟</li>
      </ul>
      
      <h3>4. 未来展望</h3>
      <ul>
        <li><strong>室温重费米子：</strong>高温重费米子行为</li>
        <li><strong>拓扑超导体：</strong>马约拉纳费米子</li>
        <li><strong>量子自旋液体：</strong>新奇磁性态</li>
        <li><strong>多铁性材料：</strong>多序参量耦合</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        重费米子超导体作为强关联电子系统的典型代表，展现了丰富而
        奇异的物理现象。从基本的Kondo效应到复杂的量子临界行为，
        从非常规超导配对到拓扑量子态，重费米子材料为我们理解
        强关联电子系统提供了重要的实验平台。尽管在理论理解和
        实验技术方面仍面临挑战，但随着新材料的发现、新实验
        技术的发展和理论方法的进步，重费米子超导体必将在
        未来的量子技术和基础物理研究中发挥更加重要的作用。
        特别是在量子计算、自旋电子学和拓扑量子态等前沿领域，
        重费米子材料有望带来革命性的突破。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_6_2',
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

.concept-box h3, .concept-box h4 {
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