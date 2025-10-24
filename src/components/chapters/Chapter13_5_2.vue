<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.5.2 交流Josephson效应</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        交流Josephson效应描述了当Josephson结两端存在直流电压时，
        会产生高频交流超导电流的现象。这一效应是Josephson在1962年
        预言的第二个效应，它建立了电压与频率之间的精确关系，
        为精密测量和高频应用提供了理论基础。
      </p>
    </section>

    <!-- 基本原理 -->
    <section class="section">
      <h2>基本原理</h2>
      
      <h3>1. 第二Josephson关系</h3>
      <p>当Josephson结两端存在电压V时，相位差随时间变化：</p>
      <div class="formula-box">
        <p>dδ/dt = 2eV/ℏ</p>
      </div>
      
      <p>这是交流Josephson效应的基本方程。</p>
      
      <h3>2. 振荡频率</h3>
      <p>对于恒定电压V，相位差线性增长：</p>
      <div class="formula-box">
        <p>δ(t) = δ₀ + (2eV/ℏ)t = δ₀ + ωⱼt</p>
      </div>
      
      <p>其中Josephson频率为：</p>
      <div class="formula-box">
        <p>ωⱼ = 2eV/ℏ ≈ 483.6 GHz/mV</p>
      </div>
      
      <h3>3. 交流超导电流</h3>
      <p>结合直流Josephson关系，得到：</p>
      <div class="formula-box">
        <p>I(t) = Iᶜ sin(δ₀ + ωⱼt)</p>
      </div>
      
      <p>这表明存在频率为ωⱼ的交流超导电流。</p>
    </section>

    <!-- 电压偏置的Josephson结 -->
    <section class="section">
      <h2>电压偏置的Josephson结</h2>
      
      <h3>1. 等效电路模型</h3>
      <p>Josephson结的等效电路包括：</p>
      <ul>
        <li><strong>Josephson电感：</strong>Lⱼ = ℏ/(2eIᶜ cos δ)</li>
        <li><strong>几何电容：</strong>C ≈ ε₀εᵣA/d</li>
        <li><strong>正常电阻：</strong>Rₙ（准粒子隧穿）</li>
        <li><strong>分流电阻：</strong>Rs（外部电路）</li>
      </ul>
      
      <h3>2. RSJ模型</h3>
      <p>电阻分流结（RSJ）模型的电流方程：</p>
      <div class="formula-box">
        <p>I = Iᶜ sin δ + V/R + C dV/dt</p>
      </div>
      
      <p>结合第二Josephson关系：</p>
      <div class="formula-box">
        <p>I = Iᶜ sin δ + (ℏ/2eR) dδ/dt + (ℏC/2e) d²δ/dt²</p>
      </div>
      
      <h3>3. 特征频率</h3>
      <p>等离子体频率：</p>
      <div class="formula-box">
        <p>ωₚ = √(2eIᶜ/ℏC)</p>
      </div>
      
      <p>特征电压：</p>
      <div class="formula-box">
        <p>Vᶜ = IᶜR</p>
      </div>
    </section>

    <!-- I-V特性 -->
    <section class="section">
      <h2>I-V特性</h2>
      
      <h3>1. 零电压态</h3>
      <p>当I < Iᶜ时：</p>
      <ul>
        <li>V = 0（超导态）</li>
        <li>δ = arcsin(I/Iᶜ)（恒定相位差）</li>
        <li>无功率耗散</li>
      </ul>
      
      <h3>2. 电压态</h3>
      <p>当I > Iᶜ时：</p>
      <ul>
        <li>V ≠ 0（电阻态）</li>
        <li>相位差随时间线性增长</li>
        <li>存在功率耗散</li>
      </ul>
      
      <h3>3. 滞后现象</h3>
      <p>由于电容效应，I-V特性可能出现滞后：</p>
      <div class="info-box">
        <h4>滞后条件</h4>
        <ul>
          <li><strong>过阻尼：</strong>βᶜ = 2eIᶜR²C/ℏ < 1</li>
          <li><strong>欠阻尼：</strong>βᶜ > 1，出现滞后</li>
          <li><strong>临界阻尼：</strong>βᶜ = 1</li>
        </ul>
      </div>
    </section>

    <!-- 微波辐射 -->
    <section class="section">
      <h2>微波辐射</h2>
      
      <h3>1. 辐射功率</h3>
      <p>交流Josephson电流产生的辐射功率：</p>
      <div class="formula-box">
        <p>P = ½Iᶜ²R sin²(ωⱼt)</p>
      </div>
      
      <p>平均功率：</p>
      <div class="formula-box">
        <p>⟨P⟩ = ¼Iᶜ²R</p>
      </div>
      
      <h3>2. 辐射频谱</h3>
      <p>理想情况下，辐射频谱为单一频率ωⱼ。实际中由于噪声和非线性效应，
      频谱会有一定展宽。</p>
      
      <h3>3. 线宽</h3>
      <p>Josephson振荡的线宽主要由以下因素决定：</p>
      <ul>
        <li><strong>热噪声：</strong>Δf ∝ kᵦT</li>
        <li><strong>散粒噪声：</strong>Δf ∝ eI</li>
        <li><strong>1/f噪声：</strong>低频噪声的上转换</li>
        <li><strong>外部噪声：</strong>电源和环境噪声</li>
      </ul>
    </section>

    <!-- Shapiro台阶 -->
    <section class="section">
      <h2>Shapiro台阶</h2>
      
      <h3>1. 微波照射下的Josephson结</h3>
      <p>当Josephson结受到频率为ω的微波照射时，相位差变为：</p>
      <div class="formula-box">
        <p>δ(t) = δ₀ + ωⱼt + (eVᵣf/ℏω) sin(ωt)</p>
      </div>
      
      <p>其中Vᵣf是微波电压幅度。</p>
      
      <h3>2. 锁相条件</h3>
      <p>当满足锁相条件时：</p>
      <div class="formula-box">
        <p>ωⱼ = nω, n = 0, ±1, ±2, ...</p>
      </div>
      
      <p>对应的电压：</p>
      <div class="formula-box">
        <p>V = nℏω/2e</p>
      </div>
      
      <h3>3. Shapiro台阶的特征</h3>
      <div class="data-table">
        <h3>典型Shapiro台阶参数</h3>
        <table>
          <thead>
            <tr>
              <th>微波频率 (GHz)</th>
              <th>台阶间距 (μV)</th>
              <th>台阶数目</th>
              <th>应用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>20.7</td>
              <td>5-10</td>
              <td>电压标准</td>
            </tr>
            <tr>
              <td>70</td>
              <td>145</td>
              <td>3-5</td>
              <td>高精度测量</td>
            </tr>
            <tr>
              <td>100</td>
              <td>207</td>
              <td>2-3</td>
              <td>基础研究</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>2070</td>
              <td>1-2</td>
              <td>太赫兹应用</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 应用 -->
    <section class="section">
      <h2>应用</h2>
      
      <div class="concept-box">
        <h3>主要应用领域</h3>
        <ul>
          <li><strong>电压标准：</strong>基于Shapiro台阶的精密电压基准</li>
          <li><strong>频率标准：</strong>微波频率的精确测量</li>
          <li><strong>太赫兹源：</strong>高频振荡器和检测器</li>
          <li><strong>混频器：</strong>超导混频器和谐波发生器</li>
          <li><strong>数字电路：</strong>快速开关和逻辑门</li>
        </ul>
      </div>
      
      <h3>1. Josephson电压标准</h3>
      <p>基于Shapiro台阶的电压标准具有以下优势：</p>
      <ul>
        <li><strong>高精度：</strong>相对精度达到10⁻⁹</li>
        <li><strong>可重现：</strong>基于基本物理常数</li>
        <li><strong>稳定性：</strong>长期稳定性好</li>
        <li><strong>可溯源：</strong>直接与频率标准关联</li>
      </ul>
      
      <h3>2. 太赫兹技术</h3>
      <p>Josephson结在太赫兹频段的应用：</p>
      <ul>
        <li><strong>振荡器：</strong>0.1-10 THz频率范围</li>
        <li><strong>检测器：</strong>高灵敏度太赫兹探测</li>
        <li><strong>混频器：</strong>频率变换和信号处理</li>
        <li><strong>成像：</strong>太赫兹成像系统</li>
      </ul>
    </section>

    <!-- 噪声特性 -->
    <section class="section">
      <h2>噪声特性</h2>
      
      <h3>1. 噪声源</h3>
      <p>影响交流Josephson效应的主要噪声：</p>
      <ul>
        <li><strong>Johnson噪声：</strong>电阻的热噪声</li>
        <li><strong>散粒噪声：</strong>准粒子隧穿噪声</li>
        <li><strong>相位噪声：</strong>相位涨落</li>
        <li><strong>1/f噪声：</strong>低频噪声</li>
      </ul>
      
      <h3>2. 噪声对线宽的影响</h3>
      <p>Josephson振荡的线宽：</p>
      <div class="formula-box">
        <p>Δf = (2eIᶜR/ℏ) × (kᵦT/2eV)</p>
      </div>
      
      <h3>3. 噪声抑制方法</h3>
      <ul>
        <li><strong>低温工作：</strong>降低热噪声</li>
        <li><strong>滤波：</strong>射频和微波滤波</li>
        <li><strong>屏蔽：</strong>电磁屏蔽</li>
        <li><strong>稳定化：</strong>反馈控制系统</li>
      </ul>
    </section>

    <!-- 非线性动力学 -->
    <section class="section">
      <h2>非线性动力学</h2>
      
      <h3>1. 相位动力学方程</h3>
      <p>考虑阻尼和驱动的相位方程：</p>
      <div class="formula-box">
        <p>d²δ/dt² + (1/Q)(dδ/dt) + ωₚ² sin δ = (2eI/ℏC)</p>
      </div>
      
      <p>这类似于阻尼摆的运动方程。</p>
      
      <h3>2. 相空间轨道</h3>
      <p>系统的相空间行为：</p>
      <ul>
        <li><strong>固定点：</strong>零电压态</li>
        <li><strong>极限环：</strong>电压态的周期解</li>
        <li><strong>混沌：</strong>强驱动下的混沌行为</li>
      </ul>
      
      <h3>3. 分岔现象</h3>
      <p>参数变化时的分岔类型：</p>
      <ul>
        <li><strong>鞍结分岔：</strong>临界电流处</li>
        <li><strong>Hopf分岔：</strong>振荡的产生</li>
        <li><strong>倍周期分岔：</strong>通向混沌的路径</li>
      </ul>
    </section>

    <!-- 实验技术 -->
    <section class="section">
      <h2>实验技术</h2>
      
      <h3>1. 微波测量</h3>
      <ul>
        <li><strong>频谱分析：</strong>测量辐射频谱</li>
        <li><strong>功率测量：</strong>辐射功率的测定</li>
        <li><strong>相位测量：</strong>相位噪声分析</li>
        <li><strong>锁相技术：</strong>频率稳定化</li>
      </ul>
      
      <h3>2. 低温技术</h3>
      <ul>
        <li><strong>稀释制冷机：</strong>mK温度范围</li>
        <li><strong>³He制冷机：</strong>300 mK以下</li>
        <li><strong>液氦系统：</strong>4.2 K工作温度</li>
        <li><strong>温度控制：</strong>精密温度调节</li>
      </ul>
      
      <h3>3. 电子学系统</h3>
      <ul>
        <li><strong>低噪声放大器：</strong>信号放大</li>
        <li><strong>锁相放大器：</strong>微弱信号检测</li>
        <li><strong>频率合成器：</strong>精确频率源</li>
        <li><strong>数据采集：</strong>高速数据记录</li>
      </ul>
    </section>

    <!-- 理论发展 -->
    <section class="section">
      <h2>理论发展</h2>
      
      <h3>1. 量子效应</h3>
      <ul>
        <li><strong>宏观量子隧穿：</strong>相位的量子隧穿</li>
        <li><strong>量子相位滑移：</strong>拓扑激发</li>
        <li><strong>Bloch振荡：</strong>周期势中的运动</li>
        <li><strong>量子相干：</strong>相位相干性的保持</li>
      </ul>
      
      <h3>2. 多结系统</h3>
      <ul>
        <li><strong>Josephson结阵列：</strong>集体模式</li>
        <li><strong>相位锁定：</strong>同步现象</li>
        <li><strong>涡旋动力学：</strong>磁通涡旋的运动</li>
        <li><strong>非线性波：</strong>孤立子和呼吸子</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        交流Josephson效应建立了电压与频率之间的精确关系，为精密测量
        和高频应用提供了理论基础。从基本的dδ/dt = 2eV/ℏ关系出发，
        我们可以理解Josephson结在电压偏置下的各种动力学行为。
        这一效应不仅在电压标准和频率测量中有重要应用，还为太赫兹
        技术和超导电子学的发展提供了新的可能性。随着制备技术的
        进步和理论的深入，交流Josephson效应将在量子技术和精密
        测量中发挥越来越重要的作用。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_5_2',
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