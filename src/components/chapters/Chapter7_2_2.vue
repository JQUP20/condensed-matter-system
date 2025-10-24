<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.2.2 涡旋</h1>
      <p class="chapter-subtitle">涡旋的微观结构、动力学行为与实验观测</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：22分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>深入理解涡旋的微观结构和核心性质</li>
        <li>掌握涡旋的动力学行为和运动规律</li>
        <li>学习涡旋在不同物理系统中的表现形式</li>
        <li>了解涡旋的现代实验观测技术</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：涡旋的奇妙世界</h2>
      <div class="highlight-box">
        <p>
          涡旋是自然界中最迷人的现象之一。从台风的螺旋结构到咖啡杯中的漩涡，
          从超流体中的量子涡旋到超导体中的磁通涡旋，涡旋无处不在。
          在凝聚态物理中，涡旋不仅是一种有趣的激发态，更是理解拓扑相变和量子多体系统的关键。
          让我们深入探索这些微观世界中的"小旋风"。
        </p>
      </div>
    </section>

    <!-- 涡旋的微观结构 -->
    <section class="content-section">
      <h2>1. 涡旋的微观结构</h2>
      
      <div class="subsection">
        <h3>1.1 涡旋核心</h3>
        <p>
          涡旋的核心是一个奇点，在这里序参量的相位不确定。对于XY模型，涡旋核心的典型尺寸为：
        </p>
        
        <div class="formula-container">
          $$\xi_{\text{core}} \sim \frac{\hbar}{\sqrt{m \Delta}}$$</div><p>其中$\Delta$是能隙参数。在核心区域内，序参量的幅度被强烈抑制。
        </p>
      </div>

      <div class="subsection">
        <h3>1.2 涡旋的相位结构</h3>
        <p>
          围绕涡旋核心，相位场呈现螺旋结构：
        </p><div class="formula-container">$$\theta(r, \phi) = n\phi + \theta_0$$</div><p>其中$n$ 是涡旋数，$\theta_0$是任意常数。这种相位结构导致了涡旋的拓扑稳定性。
        </p>
      </div>

      <div class="subsection">
        <h3>1.3 涡旋的速度场</h3>
        <p>
          在超流体中，涡旋周围的速度场为：
        </p><div class="formula-container">$$\mathbf{v}(\mathbf{r}) = \frac{n \hbar}{m r} \hat{\boldsymbol{\phi}}$$</div>
        
        <p>
          这是一个环流场，速度与距离成反比，体现了涡旋的长程性质。
        </p>
      </div>
    </section>

    <!-- 涡旋的能量结构 -->
    <section class="content-section">
      <h2>2. 涡旋的能量结构</h2>
      
      <div class="subsection">
        <h3>2.1 核心能量</h3>
        <p> 涡旋的总能量可以分解为核心能量和流场能量：</p> <div class="formula-container">$$E_{\text{total}} = E_{\text{core}} + E_{\text{flow}}$$</div>
        
        <p> 核心能量来自于序参量在核心区域的抑制：</p> <div class="formula-container">$$E_{\text{core}} \sim \pi \xi_{\text{core}}^2 \Delta$$</div>
      </div>

      <div class="subsection">
        <h3>2.2 流场能量</h3>
        <p> 流场能量来自于涡旋周围的动能密度积分：</p> <div class="formula-container">$$E_{\text{flow}} = \frac{1}{2} \rho_s \int_{\xi_{\text{core}}}^{L} 2\pi r dr \, v^2(r) = \pi \rho_s n^2 \ln\left(\frac{L}{\xi_{\text{core}}}\right)$$</div><p>其中$\rho_s$ 是超流密度，$L$是系统尺寸。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 能量的标度行为</h3>
        <div class="note-box">
          <p><strong>重要观察：</strong>涡旋能量的对数发散行为$$E_{\text{vortex}} \propto \ln(L/\xi_{\text{core}})$$这种弱发散使得涡旋在有限温度下可以被热激发产生。
          </p>
        </div>
      </div>
    </section>

    <!-- 涡旋的动力学 -->
    <section class="content-section">
      <h2>3. 涡旋的动力学行为</h2>
      
      <div class="subsection">
        <h3>3.1 涡旋的运动方程</h3>
        <p> 在超流体中，涡旋的运动遵循特殊的动力学方程。对于单个涡旋：</p> <div class="formula-container">$$\frac{d\mathbf{R}}{dt} = \frac{1}{\rho_s} \hat{\mathbf{z}} \times \mathbf{F}$$</div><p>其中$\mathbf{R}$ 是涡旋位置，$\mathbf{F}$是作用在涡旋上的力。
        </p>
      </div>

      <div class="subsection">
        <h3>3.2 涡旋间的相互作用力</h3>
        <p>
          两个涡旋之间的相互作用力为：
        </p><div class="formula-container">$$\mathbf{F}_{12} = \frac{\pi \rho_s n_1 n_2}{|\mathbf{R}_1 - \mathbf{R}_2|} \hat{\mathbf{r}}_{12}$$</div>
        
        <p>
          对于涡旋-反涡旋对，这是吸引力；对于同号涡旋，这是排斥力。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 涡旋对的轨道运动</h3>
        <p> 涡旋-反涡旋对会绕共同质心做螺旋运动，最终湮灭：</p> <div class="formula-container">$$r(t) = r_0 \sqrt{1 - \frac{t}{\tau}}$$</div>
        
        <p> 其中湮灭时间为：</p> <div class="formula-container">$$\tau = \frac{\rho_s r_0^2}{4\pi}$$</div>
      </div>
    </section>

    <!-- 不同系统中的涡旋 -->
    <section class="content-section">
      <h2>4. 不同物理系统中的涡旋</h2>
      
      <div class="subsection">
        <h3>4.1 超流体中的量子涡旋</h3><p>在超流体$^4$He 中，涡旋是量子化的：
        </p><div class="formula-container">$$\oint \mathbf{v}_s \cdot d\mathbf{l} = n \frac{h}{m}$$</div>
        
        <p>
          涡旋线是一维的拓扑缺陷，具有以下特征：
        </p>
        <ul>
          <li>量子化的环流</li>
          <li>无粘性运动</li>
          <li>拓扑保护的稳定性</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>4.2 超导体中的磁通涡旋</h3>
        <p> 在第二类超导体中，磁通以涡旋的形式穿透：</p> <div class="formula-container">$$\Phi = n \Phi_0 = n \frac{h}{2e}$$</div>
        
        <p>
          每个涡旋携带一个磁通量子，形成Abrikosov涡旋格子。
        </p>
      </div>

      <div class="subsection">
        <h3>4.3 冷原子系统中的涡旋</h3>
        <p>
          在玻色-爱因斯坦凝聚体中，可以人工制造和操控涡旋：
        </p>
        <ul>
          <li>激光搅拌产生涡旋</li>
          <li>相位印记技术</li>
          <li>磁场梯度方法</li>
        </ul>
        
        <div class="highlight-box">
          <p>
            <strong>优势：</strong>冷原子系统提供了研究涡旋动力学的理想平台，
            可以实时观测涡旋的产生、运动和湮灭过程。
          </p>
        </div>
      </div>
    </section>

    <!-- 涡旋的实验观测 -->
    <section class="content-section">
      <h2>5. 涡旋的实验观测技术</h2>
      
      <div class="subsection">
        <h3>5.1 直接成像技术</h3>
        <div class="technique-box">
          <h4>扫描隧道显微镜 (STM)</h4>
          <p>
            STM可以直接观测超导体中涡旋核心的电子态密度分布，
            分辨率可达原子尺度。
          </p>
          
          <h4>磁力显微镜 (MFM)</h4>
          <p>
            MFM通过探测磁场分布来观测磁通涡旋，
            可以研究涡旋格子的结构和动力学。
          </p>
        </div>
      </div>

      <div class="subsection">
        <h3>5.2 间接探测方法</h3>
        <div class="technique-box">
          <h4>电阻测量</h4>
          <p> 通过测量电阻率的温度依赖性，可以探测涡旋的解离转变：</p> <div class="formula-container">$$R(T) \propto \exp\left(-\frac{b}{\sqrt{T - T_c}}\right)$$</div>
          
          <h4>比热测量</h4>
          <p> 比热的对数奇异性反映了涡旋激发的贡献：</p> <div class="formula-container">$$C \propto -\ln|T - T_c|$$</div>
        </div>
      </div>

      <div class="subsection">
        <h3>5.3 现代观测技术</h3>
        <ul>
          <li><strong>中子散射：</strong>研究涡旋格子的结构因子</li>
          <li><strong>μSR技术：</strong>探测涡旋的磁场分布</li>
          <li><strong>光学成像：</strong>在冷原子系统中实时观测涡旋</li>
          <li><strong>量子气体显微镜：</strong>单原子分辨率的涡旋成像</li>
        </ul>
      </div>
    </section>

    <!-- 涡旋的应用 -->
    <section class="content-section">
      <h2>6. 涡旋的应用前景</h2>
      
      <div class="subsection">
        <h3>6.1 量子计算</h3>
        <p>
          拓扑涡旋具有天然的量子保护性质，可用于：
        </p>
        <ul>
          <li>拓扑量子比特的构建</li>
          <li>容错量子计算</li>
          <li>量子信息存储</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>6.2 超导电子学</h3>
        <p>
          涡旋在超导电子器件中的应用：
        </p>
        <ul>
          <li>单磁通量子器件</li>
          <li>超导量子干涉仪 (SQUID)</li>
          <li>约瑟夫森结阵列</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>6.3 量子模拟</h3>
        <p>
          利用涡旋系统模拟其他物理现象：
        </p>
        <ul>
          <li>宇宙学中的拓扑缺陷</li>
          <li>高能物理中的规范场理论</li>
          <li>凝聚态中的新奇相变</li>
        </ul>
      </div>
    </section>

    <!-- 前沿研究 -->
    <section class="content-section">
      <h2>7. 涡旋研究的前沿方向</h2>
      
      <div class="subsection">
        <h3>7.1 非阿贝尔涡旋</h3>
        <p>
          在具有多分量序参量的系统中，涡旋可以携带非阿贝尔拓扑荷，
          为拓扑量子计算提供新的可能性。
        </p>
      </div>

      <div class="subsection">
        <h3>7.2 涡旋物质态</h3>
        <p>
          在强磁场下，涡旋可以形成各种有序态：
        </p>
        <ul>
          <li>涡旋晶体</li>
          <li>涡旋液体</li>
          <li>涡旋玻璃</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>7.3 人工涡旋系统</h3>
        <p>
          利用现代纳米技术构建人工涡旋系统：
        </p>
        <ul>
          <li>超导约瑟夫森结网络</li>
          <li>光子晶体中的光学涡旋</li>
          <li>声子晶体中的声学涡旋</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>涡旋具有复杂的微观结构，包括核心区域和长程流场</li>
          <li>涡旋的动力学行为遵循特殊的运动方程，体现了拓扑性质</li>
          <li>不同物理系统中的涡旋表现出丰富多样的性质和行为</li>
          <li>现代实验技术使得涡旋的直接观测和操控成为可能</li>
          <li>涡旋在量子计算、超导电子学等领域具有重要应用前景</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么涡旋的能量具有对数发散行为？这对涡旋的热激发有什么影响？</li>
          <li>涡旋的动力学方程与普通粒子的牛顿方程有什么本质区别？</li>
          <li>如何通过实验区分量子涡旋和经典涡旋？</li>
          <li>涡旋在量子计算中的应用基于什么物理原理？</li>
          <li>设计一个实验方案来观测涡旋-反涡旋对的湮灭过程。</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_2_2',
  mounted() {
    // 渲染数学公式
    if (this.$renderMath) {
      this.$renderMath();
    }
  },
  updated() {
    // 内容更新后重新渲染数学公式
    if (this.$renderMath) {
      this.$renderMath();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin-bottom: 15px;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #f8f9ff;
  border-left: 5px solid #667eea;
  padding: 25px;
  margin: 30px 0;
  border-radius: 0 10px 10px 0;
}

.learning-objectives h3 {
  color: #667eea;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-section {
  margin: 40px 0;
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.subsection {
  margin: 30px 0;
}

.subsection h3 {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.highlight-box {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #e17055;
}

.note-box {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.technique-box {
  background: #e8f4fd;
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.technique-box h4 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.formula-container {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  overflow-x: auto;
}

.summary-box {
  background: #d4edda;
  border: 2px solid #28a745;
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
}

.exercise-box {
  background: #f8d7da;
  border: 2px solid #dc3545;
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin: 10px 0;
  font-weight: 500;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin: 8px 0;
}

p {
  margin: 15px 0;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}
</style>