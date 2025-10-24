<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.2 XY模型：涡旋快来</h1>
      <p class="chapter-subtitle">二维XY模型中的涡旋激发与拓扑相变</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：25分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解二维XY模型的基本设定和物理意义</li>
        <li>掌握涡旋激发的数学描述和物理图像</li>
        <li>学习涡旋能量的计算方法</li>
        <li>理解涡旋-反涡旋相互作用的对数性质</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：旋转的世界</h2>
      <div class="highlight-box">
        <p>
          在二维平面上，想象无数个小磁针在热运动的驱动下不断旋转。这些磁针倾向于与邻居保持相同方向，
          但热涨落又试图打乱这种秩序。在这个看似简单的模型中，隐藏着丰富的物理现象——
          <strong>涡旋</strong>的出现将彻底改变系统的行为，带来意想不到的相变。
        </p>
      </div>
    </section>

    <!-- XY模型的定义 -->
    <section class="content-section">
      <h2>1. 二维XY模型</h2>
      
      <div class="subsection">
        <h3>1.1 模型的基本设定</h3>
        <p>
          二维XY模型是研究KT相变的经典模型。在这个模型中，每个格点上有一个二维单位矢量（自旋）：
        </p>
        
        <div class="formula-container">
          $$\mathbf{S}_i = (\cos\theta_i, \sin\theta_i)$$</div><p>其中$\theta_i$ 是第 $i$ 个格点上自旋的角度，可以在 $[0, 2\pi)$范围内自由变化。
        </p>
      </div>

      <div class="subsection">
        <h3>1.2 哈密顿量</h3>
        <p>
          XY模型的哈密顿量为：
        </p><div class="formula-container">$$H = -J \sum_{\langle i,j \rangle} \mathbf{S}_i \cdot \mathbf{S}_j = -J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)$$</div><p>其中$J > 0$是交换耦合常数，求和遍历所有最近邻格点对。
        </p>
      </div>

      <div class="subsection">
        <h3>1.3 连续极限</h3>
        <p>
          在长波长极限下，可以将离散的格点模型转化为连续场论：
        </p><div class="formula-container">$$H = \frac{J}{2} \int d^2r \, |\nabla \theta(\mathbf{r})|^2$$</div>
        
        <p>
          这个形式更便于分析涡旋激发的性质。
        </p>
      </div>
    </section>

    <!-- 涡旋激发 -->
    <section class="content-section">
      <h2>2. 涡旋激发的数学描述</h2>
      
      <div class="subsection">
        <h3>2.1 涡旋的定义</h3><p>涡旋是角度场$\theta(\mathbf{r})$的拓扑奇点。对于位于原点的单个涡旋：
        </p><div class="formula-container">$$\theta(\mathbf{r}) = n \arctan\left(\frac{y}{x}\right) + \text{const}$$</div><p>其中$n$是涡旋的拓扑荷（涡旋数），必须是整数。
        </p>
      </div>

      <div class="subsection">
        <h3>2.2 拓扑荷的计算</h3>
        <p>
          涡旋的拓扑荷通过线积分计算：
        </p><div class="formula-container">$$n = \frac{1}{2\pi} \oint_C d\mathbf{l} \cdot \nabla \theta = \frac{1}{2\pi} \oint_C \frac{\partial \theta}{\partial l} dl$$</div><p>其中积分路径$C$ 包围涡旋核心。对于简单涡旋，$n = \pm 1$。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 涡旋的物理图像</h3>
        <div class="note-box">
          <p>
            <strong>物理图像：</strong>
          </p>
          <ul><li><strong>涡旋核心：</strong>角度场不确定的奇点，自旋方向剧烈变化</li><li><strong>涡旋 (n=+1)：</strong>绕核心逆时针旋转一圈，角度增加$2\pi$</li><li><strong>反涡旋 (n=-1)：</strong>绕核心顺时针旋转一圈，角度减少$2\pi$</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 涡旋能量 -->
    <section class="content-section">
      <h2>3. 涡旋的能量计算</h2>
      
      <div class="subsection">
        <h3>3.1 单个涡旋的能量</h3>
        <p>
          考虑位于原点的单个涡旋，其角度场为：
        </p><div class="formula-container">$$\theta(r, \phi) = n\phi$$</div>
        
        <p> 梯度为：</p> <div class="formula-container">$$|\nabla \theta|^2 = \left(\frac{\partial \theta}{\partial r}\right)^2 + \frac{1}{r^2}\left(\frac{\partial \theta}{\partial \phi}\right)^2 = \frac{n^2}{r^2}$$</div>
      </div>

      <div class="subsection">
        <h3>3.2 能量积分</h3>
        <p> 涡旋的能量为：</p> <div class="formula-container">$$E_{\text{vortex}} = \frac{J}{2} \int_{a}^{L} 2\pi r dr \cdot \frac{n^2}{r^2} = \pi J n^2 \ln\left(\frac{L}{a}\right)$$</div><p>其中$a$ 是涡旋核心尺寸（短程截断），$L$是系统尺寸（长程截断）。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 对数发散的物理意义</h3>
        <div class="highlight-box">
          <p>
            <strong>关键观察：</strong>涡旋能量随系统尺寸对数增长！这意味着：
          </p>
          <ul>
            <li>在无限大系统中，单个涡旋的能量发散</li>
            <li>涡旋的产生需要克服巨大的能量代价</li>
            <li>但这种对数发散相对较弱，为涡旋对的形成留下了可能</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 涡旋相互作用 -->
    <section class="content-section">
      <h2>4. 涡旋-反涡旋相互作用</h2>
      
      <div class="subsection">
        <h3>4.1 涡旋对的角度场</h3><p>考虑位于$\mathbf{r}_1$ 和 $\mathbf{r}_2$的涡旋-反涡旋对，其角度场为：
        </p><div class="formula-container">$$\theta(\mathbf{r}) = \arctan\left(\frac{y-y_1}{x-x_1}\right) - \arctan\left(\frac{y-y_2}{x-x_2}\right)$$</div>
      </div>

      <div class="subsection">
        <h3>4.2 相互作用能</h3>
        <p> 通过计算总能量并减去单个涡旋的自能，得到相互作用能：</p> <div class="formula-container">$$E_{\text{int}} = -\pi J n_1 n_2 \ln\left(\frac{|\mathbf{r}_1 - \mathbf{r}_2|}{a}\right)$$</div><p>对于涡旋-反涡旋对（$n_1 = -n_2 = 1$）：
        </p><div class="formula-container">$$E_{\text{int}} = \pi J \ln\left(\frac{r}{a}\right)$$</div><p>其中$r = |\mathbf{r}_1 - \mathbf{r}_2|$是涡旋对的分离距离。
        </p>
      </div>

      <div class="subsection">
        <h3>4.3 对数相互作用的特点</h3>
        <div class="note-box">
          <p>
            <strong>重要特征：</strong>
          </p>
          <ul>
            <li><strong>吸引相互作用：</strong>涡旋-反涡旋对相互吸引</li>
            <li><strong>对数形式：</strong>相互作用随距离对数增长</li><li><strong>长程性质：</strong>相互作用衰减很慢，具有长程特征</li><li><strong>温度竞争：</strong>束缚能与热涨落$k_B T$竞争</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 涡旋对的束缚-解离 -->
    <section class="content-section">
      <h2>5. 涡旋对的束缚-解离转变</h2>
      
      <div class="subsection">
        <h3>5.1 束缚条件</h3>
        <p>
          涡旋对能否束缚取决于束缚能与热能的比较：
        </p><div class="formula-container">$$E_{\text{binding}} = \pi J \ln\left(\frac{r}{a}\right) \stackrel{?}{\gtrless} k_B T$$</div>
        
        <p>
          当束缚能大于热能时，涡旋对保持束缚状态。
        </p>
      </div>

      <div class="subsection">
        <h3>5.2 临界温度的估算</h3>
        <p> 在临界点附近，典型的涡旋对分离距离为：</p> <div class="formula-container">$$r_c \sim a \exp\left(\frac{\pi J}{k_B T_c}\right)$$</div><p>当$T > T_c$时，热涨落足以破坏涡旋对的束缚。
        </p>
      </div>

      <div class="subsection">
        <h3>5.3 相变的物理图像</h3>
        <div class="highlight-box">
          <p>
            <strong>KT相变的物理图像：</strong>
          </p><ul><li><strong>低温相 ($T < T_c$)：</strong>涡旋-反涡旋紧密束缚，系统具有准长程序</li><li><strong>高温相 ($T > T_c$)：</strong>涡旋对解离，自由涡旋破坏长程关联</li><li><strong>相变点 ($T = T_c$)：</strong>束缚-解离的临界平衡点</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 实验观测 -->
    <section class="content-section">
      <h2>6. 涡旋的实验观测</h2>
      
      <div class="subsection">
        <h3>6.1 超流体薄膜</h3><p>在超流体$^4$He 薄膜中，涡旋对应于量子化的环流：
        </p><div class="formula-container">$$\oint \mathbf{v}_s \cdot d\mathbf{l} = n \frac{h}{m}$$</div><p>其中$\mathbf{v}_s$ 是超流速度，$n$是涡旋数。
        </p>
      </div>

      <div class="subsection">
        <h3>6.2 超导薄膜</h3>
        <p>
          在超导薄膜中，涡旋表现为磁通量子：
        </p><div class="formula-container">$$\Phi = n \Phi_0 = n \frac{h}{2e}$$</div>
        
        <p>
          可以通过磁场测量直接观测涡旋。
        </p>
      </div>

      <div class="subsection">
        <h3>6.3 现代观测技术</h3>
        <ul>
          <li><strong>扫描隧道显微镜 (STM)：</strong>直接成像涡旋核心</li>
          <li><strong>磁力显微镜 (MFM)：</strong>观测磁通涡旋</li>
          <li><strong>冷原子系统：</strong>人工制造和控制涡旋</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>XY模型为研究KT相变提供了理想的理论框架</li>
          <li>涡旋是角度场的拓扑奇点，具有整数拓扑荷</li>
          <li>涡旋能量随系统尺寸对数增长，体现了拓扑激发的特殊性质</li>
          <li>涡旋-反涡旋对存在对数相互作用，导致束缚-解离转变</li>
          <li>现代实验技术使得直接观测涡旋成为可能</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么涡旋的拓扑荷必须是整数？这有什么物理意义？</li>
          <li>涡旋能量的对数发散如何影响系统的热力学性质？</li>
          <li>为什么涡旋-反涡旋相互作用是吸引的？</li>
          <li>如何通过实验区分束缚态和解离态的涡旋？</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_2',
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