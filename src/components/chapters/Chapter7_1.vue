<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.1 KT相变：斯德合力破难题</h1>
      <p class="chapter-subtitle">Kosterlitz-Thouless相变的发现与理论突破</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：20分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>了解KT相变的历史背景和发现过程</li>
        <li>理解二维系统中的拓扑相变概念</li>
        <li>掌握涡旋-反涡旋对的基本物理图像</li>
        <li>理解KT相变与传统相变的区别</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：二维世界的奇迹</h2>
      <div class="highlight-box">
        <p>
          1973年，John Michael Kosterlitz和David James Thouless提出了一种全新的相变理论，
          彻底改变了我们对二维系统相变的理解。这个理论不仅解决了长期困扰物理学家的难题，
          更开启了拓扑相变研究的新纪元，最终为他们赢得了2016年的诺贝尔物理学奖。
        </p>
      </div>
    </section>

    <!-- KT相变的背景 -->
    <section class="content-section">
      <h2>1. 历史背景：二维系统的困惑</h2>
      
      <div class="subsection">
        <h3>1.1 Mermin-Wagner定理的挑战</h3>
        <p>
          在KT理论提出之前，物理学家面临着一个重要的理论困惑。根据Mermin-Wagner定理，
          在二维系统中，连续对称性不能被自发破缺，这意味着传统意义上的长程序不应该存在。
        </p>
        
        <div class="formula-container">
          $$\langle \mathbf{S}(\mathbf{r}) \cdot \mathbf{S}(\mathbf{r}') \rangle \sim |\mathbf{r} - \mathbf{r}'|^{-\eta}$$</div>
        
        <p>
          其中关联函数呈幂律衰减，而不是指数衰减，这表明系统处于临界状态。
        </p>
      </div>

      <div class="subsection">
        <h3>1.2 实验观察的矛盾</h3>
        <p>
          然而，实验上观察到许多二维系统确实存在某种形式的相变，比如：
        </p>
        <ul>
          <li>二维超流体薄膜的超流转变</li>
          <li>二维超导薄膜的超导转变</li>
          <li>二维磁性系统的磁有序转变</li>
        </ul>
        
        <div class="note-box">
          <p><strong>关键问题：</strong>如何在不违背Mermin-Wagner定理的前提下，解释二维系统中观察到的相变现象？</p>
        </div>
      </div>
    </section>

    <!-- KT理论的核心思想 -->
    <section class="content-section">
      <h2>2. KT理论的核心思想</h2>
      
      <div class="subsection">
        <h3>2.1 拓扑激发：涡旋的引入</h3>
        <p>
          Kosterlitz和Thouless的天才洞察在于认识到，二维系统的相变不是由传统的对称性破缺驱动， 而是由<strong>拓扑激发</strong>——涡旋的行为变化所控制。</p> <div class="formula-container">$$\theta(\mathbf{r}) = \arg[\psi(\mathbf{r})]$$</div><p>对于复序参量$\psi(\mathbf{r}) = |\psi(\mathbf{r})| e^{i\theta(\mathbf{r})}$，涡旋对应于相位场$\theta(\mathbf{r})$的奇点。
        </p>
      </div>

      <div class="subsection">
        <h3>2.2 涡旋的拓扑性质</h3>
        <p>
          涡旋的拓扑荷（涡旋数）定义为：
        </p><div class="formula-container">$$n = \frac{1}{2\pi} \oint_C d\mathbf{l} \cdot \nabla \theta$$</div><p>其中积分沿着包围涡旋核心的闭合路径进行。拓扑荷$n$必须是整数，这保证了涡旋的稳定性。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 涡旋-反涡旋对的物理图像</h3>
        <p>
          KT理论的关键洞察是：
        </p>
        <ul>
          <li><strong>低温相：</strong>涡旋和反涡旋紧密束缚成对，系统表现出准长程序</li>
          <li><strong>高温相：</strong>涡旋对解离，自由涡旋破坏长程关联</li>
          <li><strong>相变点：</strong>涡旋对的束缚-解离转变</li>
        </ul>
        
        <div class="highlight-box">
          <p>
            <strong>核心思想：</strong>KT相变是一种拓扑相变，其特征是涡旋-反涡旋对的束缚-解离转变，
            而不是传统的对称性破缺。
          </p>
        </div>
      </div>
    </section>

    <!-- KT相变的特征 -->
    <section class="content-section">
      <h2>3. KT相变的独特特征</h2>
      
      <div class="subsection">
        <h3>3.1 无潜热的连续相变</h3>
        <p>
          KT相变是一种特殊的连续相变，具有以下特征：
        </p>
        <ul>
          <li>没有潜热释放</li>
          <li>没有传统的序参量突变</li>
          <li>相变由拓扑性质的改变驱动</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>3.2 普适跳跃</h3>
        <p>
          在KT相变点，某些物理量会发生普适的跳跃，例如超流密度：
        </p><div class="formula-container">$$\rho_s(T_c^-) = \frac{2T_c}{\pi}$$</div>
        
        <p>
          这个跳跃的大小是普适的，不依赖于系统的微观细节。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 指数关联长度</h3>
        <p> 在KT相变附近，关联长度表现出特殊的行为：</p> <div class="formula-container">$$\xi(T) \sim \exp\left(\frac{b}{\sqrt{T - T_c}}\right)$$</div>
        
        <p>
          这种指数发散行为与传统相变的幂律发散截然不同。
        </p>
      </div>
    </section>

    <!-- 理论意义 -->
    <section class="content-section">
      <h2>4. KT理论的深远影响</h2>
      
      <div class="subsection">
        <h3>4.1 拓扑相变概念的建立</h3>
        <p>
          KT理论首次明确提出了拓扑相变的概念，为后来的拓扑物态研究奠定了基础：
        </p>
        <ul>
          <li>拓扑绝缘体</li>
          <li>拓扑超导体</li>
          <li>量子霍尔效应</li>
          <li>拓扑量子计算</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>4.2 重整化群方法的应用</h3>
        <p>
          KT理论成功地将重整化群方法应用于拓扑激发，开创了新的理论分析框架。
        </p>
      </div>

      <div class="subsection">
        <h3>4.3 跨学科影响</h3>
        <p>
          KT理论的影响远超凝聚态物理，在以下领域都有重要应用：
        </p>
        <ul>
          <li>宇宙学中的拓扑缺陷</li>
          <li>生物物理中的膜相变</li>
          <li>量子信息中的拓扑保护</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>KT相变解决了二维系统相变的理论困惑，提出了拓扑相变的概念</li>
          <li>涡旋-反涡旋对的束缚-解离转变是KT相变的物理机制</li>
          <li>KT相变具有普适跳跃和指数关联长度等独特特征</li>
          <li>KT理论开创了拓扑物态研究的新纪元，影响深远</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么传统的Landau相变理论无法解释二维系统的相变？</li>
          <li>涡旋的拓扑性质如何保证其稳定性？</li>
          <li>KT相变与传统相变在物理机制上有什么本质区别？</li>
          <li>为什么KT相变点的某些物理量会发生普适跳跃？</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_1',
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

.definition-box {
  background: #e8f4fd;
  border: 2px solid #3498db;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
}

.definition-box h4 {
  color: #2980b9;
  margin-bottom: 15px;
  font-size: 1.2em;
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