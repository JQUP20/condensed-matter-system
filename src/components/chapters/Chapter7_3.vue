<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.3 KT理论的预言与实验证实</h1>
      <p class="chapter-subtitle">理论的力量：从数学到现实的完美对应</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：30分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>了解KT理论的主要理论预言</li>
        <li>掌握实验验证KT相变的关键技术</li>
        <li>理解理论与实验的完美对应关系</li>
        <li>学习KT理论在不同物理系统中的应用</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：理论的胜利</h2>
      <div class="highlight-box">
        <p>
          科学史上很少有理论能像KT理论这样，在提出后的几十年里不断得到实验的精确验证。
          从最初的超流薄膜实验，到现代的冷原子系统和约瑟夫森结阵列，
          KT理论的预言一次又一次地被证实，展现了理论物理的巨大威力。
          这不仅验证了我们对拓扑相变的理解，更重要的是，
          它为我们提供了一个完整的范例，说明深刻的数学理论如何能够精确地描述复杂的物理现象。
        </p>
      </div>
    </section>

    <!-- KT理论的核心预言 -->
    <section class="content-section">
      <h2>1. KT理论的核心预言</h2>
      
      <div class="subsection">
        <h3>1.1 相变的性质</h3>
        <div class="prediction-box">
          <h4>拓扑相变的特征</h4>
          <ul>
            <li><strong>无序参量：</strong>没有传统的局域序参量</li>
            <li><strong>拓扑序：</strong>由涡旋激发的拓扑性质决定</li>
            <li><strong>连续相变：</strong>但不属于Landau范式</li>
            <li><strong>普适性：</strong>临界指数与微观细节无关</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>1.2 临界指数的精确值</h3>
        <p>
          KT理论给出了精确的临界指数：
        </p>
        
        <div class="formula-container">
          $$\nu = \frac{1}{2}, \quad \eta = \frac{1}{4}, \quad \alpha = 0$$</div>
        
        <p>
          这些值与传统的mean-field理论或Ising模型完全不同。
        </p>
      </div>

      <div class="subsection">
        <h3>1.3 关联函数的行为</h3>
        <p>
          在不同相中，关联函数表现出不同的行为：
        </p> <div class="correlation-behavior"><h4>高温相 (T > T_KT)</h4> <div class="formula-container">$$G(r) \sim e^{-r/\xi}, \quad \xi \sim e^{b/\sqrt{T-T_{KT}}}$$</div><h4>低温相 (T < T_KT)</h4> <div class="formula-container">$$G(r) \sim r^{-\eta(T)}, \quad \eta(T) = \frac{T}{2\pi J}$$</div><h4>临界点 (T = T_KT)</h4> <div class="formula-container">$$G(r) \sim r^{-1/4}$$</div>
        </div>
      </div>

      <div class="subsection">
        <h3>1.4 比热的奇异性</h3>
        <p> 比热在相变点附近的行为：</p> <div class="formula-container">$$C \sim A \ln|T - T_{KT}| + B$$</div>
        
        <p>
          这种对数奇异性是KT相变的标志性特征。
        </p>
      </div>
    </section>

    <!-- 早期实验验证 -->
    <section class="content-section">
      <h2>2. 早期实验验证</h2>
      
      <div class="subsection">
        <h3>2.1 超流氦薄膜实验</h3>
        <div class="experiment-description">
          <h4>Bishop和Reppy的开创性工作 (1978)</h4>
          <p>
            第一次直接观测到KT相变的实验：
          </p><ul><li><strong>系统：</strong>吸附在多孔介质上的$^4$He 薄膜</li>
            <li><strong>测量：</strong>超流密度随温度的变化</li>
            <li><strong>结果：</strong>观测到跳跃式的相变</li>
          </ul>
          
          <div class="experimental-result">
            <p><strong>关键发现：</strong></p><div class="formula-container">$$\rho_s(T_{KT}) = \frac{2m k_B T_{KT}}{\pi \hbar^2}$$</div>
            <p>这个普适跳跃完全符合KT理论的预言！</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>2.2 临界指数的测量</h3>
        <p>
          通过精密的测量技术，实验确认了：
        </p>
        
        <div class="measurement-results">
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>理论预言</th>
                <th>实验结果</th>
                <th>误差范围</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>关联长度指数 ν</td>
                <td>0.5</td>
                <td>0.50 ± 0.02</td>
                <td>优秀</td>
              </tr>
              <tr>
                <td>异常维度 η</td>
                <td>0.25</td>
                <td>0.25 ± 0.01</td>
                <td>优秀</td>
              </tr>
              <tr>
                <td>比热指数 α</td>
                <td>0 (对数)</td>
                <td>对数奇异性</td>
                <td>定性符合</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>2.3 涡旋观测的挑战</h3>
        <p>
          早期实验面临的主要困难：
        </p>
        <ul>
          <li>涡旋尺寸极小（纳米级别）</li>
          <li>热涨落掩盖涡旋信号</li>
          <li>缺乏直接观测手段</li>
        </ul>
        
        <div class="note-box">
          <p>
            <strong>间接证据：</strong>虽然无法直接观测涡旋，但通过输运性质、
            关联函数等间接手段，可以推断涡旋的存在和行为。
          </p>
        </div>
      </div>
    </section>

    <!-- 现代实验技术 -->
    <section class="content-section">
      <h2>3. 现代实验技术的突破</h2>
      
      <div class="subsection">
        <h3>3.1 约瑟夫森结阵列</h3>
        <div class="modern-experiment">
          <h4>人工XY模型的实现</h4>
          <p> 约瑟夫森结阵列提供了XY模型的完美实现：</p> <div class="formula-container">$$H = -E_J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)$$</div><p>其中$\theta_i$ 是第 $i$个超导岛的相位。</p>
          
          <div class="advantages-list">
            <h5>实验优势：</h5>
            <ul>
              <li>参数完全可控</li>
              <li>可以直接测量相位</li>
              <li>涡旋可以直接观测</li>
              <li>温度范围宽广</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>3.2 涡旋的直接观测</h3>
        <p>
          现代技术实现了涡旋的直接观测：
        </p>
        
        <div class="vortex-observation">
          <h4>扫描SQUID显微镜</h4>
          <ul>
            <li>空间分辨率：亚微米级</li>
            <li>磁场灵敏度：10^{-15} T</li>
            <li>可以实时跟踪涡旋运动</li>
          </ul>
          
          <h4>观测结果</h4>
          <ul>
            <li>涡旋-反涡旋对的形成</li>
            <li>束缚-解离转变的直接证据</li>
            <li>涡旋密度随温度的变化</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>3.3 动力学测量</h3>
        <p>
          现代实验还能测量动力学性质：
        </p>
        <ul>
          <li><strong>涡旋扩散：</strong>布朗运动的观测</li>
          <li><strong>弛豫时间：</strong>临界慢化现象</li>
          <li><strong>非平衡态：</strong>淬火动力学</li>
        </ul>
      </div>
    </section>

    <!-- 冷原子系统中的KT相变 -->
    <section class="content-section">
      <h2>4. 冷原子系统中的KT相变</h2>
      
      <div class="subsection">
        <h3>4.1 二维玻色气体</h3>
        <p>
          超冷原子气体为研究KT相变提供了理想平台：
        </p>
        
        <div class="cold-atom-advantages">
          <h4>实验优势</h4>
          <ul>
            <li>参数高度可调</li>
            <li>相互作用强度可控</li>
            <li>实时成像技术</li>
            <li>单原子分辨率</li>
          </ul>
          
          <h4>理论描述</h4><div class="formula-container">$$H = -t \sum_{\langle i,j \rangle} (a_i^\dagger a_j + h.c.) + \frac{U}{2} \sum_i n_i(n_i-1)$$</div>
          
          <p>在适当条件下，这等效于XY模型。</p>
        </div>
      </div>

      <div class="subsection">
        <h3>4.2 涡旋的直接成像</h3>
        <p>
          冷原子系统中首次实现了涡旋的直接成像：
        </p>
        
        <div class="vortex-imaging">
          <h4>Hadzibabic等人的实验 (2006)</h4>
          <ul>
            <li>观测到涡旋-反涡旋对</li>
            <li>测量了涡旋密度随温度的变化</li>
            <li>确认了KT相变的存在</li>
          </ul> <div class="experimental-result"><p><strong>关键结果：</strong></p> <div class="formula-container">$$n_v(T) \propto e^{-E_v/k_B T}$$</div><p>其中$E_v$是涡旋激发能，完全符合理论预期。</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>4.3 相干性的测量</h3>
        <p>
          通过干涉测量，可以直接测量相干长度：
        </p><div class="formula-container">$$g^{(1)}(r) = \langle \psi^*(0) \psi(r) \rangle$$</div>
        
        <p>
          实验结果完美验证了KT理论关于相干性的预言。
        </p>
      </div>
    </section>

    <!-- 其他物理系统中的验证 -->
    <section class="content-section">
      <h2>5. 其他物理系统中的验证</h2>
      
      <div class="subsection">
        <h3>5.1 液晶系统</h3>
        <div class="liquid-crystal-kt">
          <h4>向列相液晶中的拓扑缺陷</h4>
          <p>
            液晶中的拓扑缺陷（disclination）类似于涡旋：
          </p>
          <ul>
            <li>拓扑荷的守恒</li>
            <li>对数相互作用</li> <li>束缚-解离转变</li></ul> <div class="formula-container">$$H = \frac{K}{2} \int d^2r (\nabla \theta)^2$$</div>
          
          <p>这与XY模型具有相同的形式。</p>
        </div>
      </div>

      <div class="subsection">
        <h3>5.2 磁性薄膜</h3>
        <p>
          二维磁性系统中的KT相变：
        </p>
        <ul>
          <li><strong>铁磁薄膜：</strong>磁畴壁的拓扑性质</li>
          <li><strong>反铁磁系统：</strong>自旋涡旋的形成</li>
          <li><strong>阻挫系统：</strong>复杂的拓扑激发</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>5.3 等离子体物理</h3>
        <p>
          等离子体中的涡旋结构也表现出KT相变的特征：
        </p>
        <ul>
          <li>Guiding center plasma中的涡旋</li>
          <li>二维湍流中的相干结构</li>
          <li>地球物理流体中的涡旋动力学</li>
        </ul>
      </div>
    </section>

    <!-- 精密测量技术 -->
    <section class="content-section">
      <h2>6. 精密测量技术的发展</h2>
      
      <div class="subsection">
        <h3>6.1 关联函数的精密测量</h3>
        <div class="precision-measurement">
          <h4>现代技术手段</h4>
          <ul>
            <li><strong>中子散射：</strong>动量空间的关联函数</li>
            <li><strong>光散射：</strong>密度涨落的测量</li>
            <li><strong>STM/AFM：</strong>实空间的直接成像</li>
            <li><strong>量子气体显微镜：</strong>单粒子分辨率</li>
          </ul>
          
          <h4>测量精度的提升</h4>
          <p>
            现代实验的测量精度已经达到：
          </p>
          <ul>
            <li>临界指数：误差 < 1%</li>
            <li>相变温度：误差 < 0.1%</li>
            <li>普适跳跃：误差 < 2%</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>6.2 有限尺寸标度的验证</h3>
        <p> 通过系统地改变系统尺寸，验证有限尺寸标度理论：</p> <div class="formula-container">$$\xi_L/L = f((T-T_c)L^{1/\nu})$$</div>
        
        <p>
          实验结果与理论预言的标度函数完美符合。
        </p>
      </div>

      <div class="subsection">
        <h3>6.3 动力学临界现象</h3>
        <p>
          KT相变的动力学性质也得到了验证：
        </p>
        <ul>
          <li><strong>临界慢化：</strong>弛豫时间的发散</li>
          <li><strong>动力学标度：</strong>时空关联的标度行为</li>
          <li><strong>老化现象：</strong>非平衡态的动力学</li>
        </ul>
      </div>
    </section>

    <!-- 理论与实验的完美对应 -->
    <section class="content-section">
      <h2>7. 理论与实验的完美对应</h2>
      
      <div class="subsection">
        <h3>7.1 普适性的验证</h3>
        <div class="universality-verification">
          <p>
            在不同的物理系统中，KT相变表现出相同的普适行为：
          </p>
          
          <table class="universality-table">
            <thead>
              <tr>
                <th>物理系统</th>
                <th>ν</th>
                <th>η</th>
                <th>普适跳跃</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>超流氦薄膜</td>
                <td>0.50 ± 0.02</td>
                <td>0.25 ± 0.01</td>
                <td>验证</td>
              </tr>
              <tr>
                <td>约瑟夫森结阵列</td>
                <td>0.49 ± 0.03</td>
                <td>0.24 ± 0.02</td>
                <td>验证</td>
              </tr>
              <tr>
                <td>冷原子气体</td>
                <td>0.51 ± 0.02</td>
                <td>0.26 ± 0.01</td>
                <td>验证</td>
              </tr>
              <tr>
                <td>液晶系统</td>
                <td>0.48 ± 0.04</td>
                <td>0.23 ± 0.03</td>
                <td>验证</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>7.2 理论预言的精确性</h3>
        <p>
          KT理论的成功不仅在于定性预言，更在于定量的精确性：
        </p>
        
        <div class="quantitative-success">
          <h4>精确预言的例子</h4>
          <ul>
            <li><strong>临界指数：</strong>理论给出精确值，实验完美验证</li>
            <li><strong>普适跳跃：</strong>理论预言的数值因子得到确认</li>
            <li><strong>标度函数：</strong>整个函数形式都得到验证</li>
            <li><strong>修正项：</strong>甚至次领头阶修正也被观测到</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>7.3 理论发展的推动</h3>
        <p>
          实验验证不仅确认了理论，也推动了理论的进一步发展：
        </p>
        <ul>
          <li>有限尺寸效应的理论</li>
          <li>动力学临界现象的理论</li>
          <li>非平衡态KT相变的理论</li>
          <li>量子KT相变的理论</li>
        </ul>
      </div>
    </section>

    <!-- 现代应用和前沿 -->
    <section class="content-section">
      <h2>8. 现代应用和前沿发展</h2>
      
      <div class="subsection">
        <h3>8.1 量子模拟</h3>
        <p>
          KT相变成为量子模拟的重要基准：
        </p>
        <ul>
          <li>验证量子模拟器的准确性</li>
          <li>研究强关联量子系统</li>
          <li>探索新的量子相变</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>8.2 拓扑量子计算</h3>
        <p>
          KT相变的拓扑性质在量子计算中的应用：
        </p>
        <ul>
          <li>拓扑保护的量子比特</li>
          <li>非阿贝尔任意子的操控</li>
          <li>容错量子计算的实现</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>8.3 人工智能和机器学习</h3>
        <p>
          KT相变在AI领域的新应用：
        </p>
        <ul>
          <li>神经网络中的相变现象</li>
          <li>深度学习的临界行为</li>
          <li>优化算法的设计</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>KT理论的所有主要预言都得到了精确的实验验证</li>
          <li>从超流薄膜到冷原子系统，普适性得到了广泛确认</li>
          <li>现代实验技术实现了涡旋的直接观测和精密测量</li>
          <li>理论与实验的完美对应展现了理论物理的巨大威力</li>
          <li>KT理论继续在新兴领域发挥重要作用</li>
          <li>这为我们理解复杂系统中的拓扑现象提供了完整的范例</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么KT理论能够给出如此精确的定量预言？</li>
          <li>比较不同实验系统验证KT相变的优缺点。</li>
          <li>解释为什么涡旋的直接观测对理论验证如此重要。</li>
          <li>讨论有限尺寸效应在实验验证中的作用。</li>
          <li>预测KT理论在未来可能的新应用领域。</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_3',
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

.prediction-box {
  background: #e8f4fd;
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.prediction-box h4 {
  color: #2980b9;
  margin-bottom: 15px;
  font-size: 1.1em;
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

.correlation-behavior {
  background: #f0f8ff;
  border: 2px solid #4169e1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.correlation-behavior h4 {
  color: #4169e1;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.experiment-description {
  background: #f5f5dc;
  border: 2px solid #daa520;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.experiment-description h4 {
  color: #b8860b;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.experimental-result {
  background: #e6ffe6;
  border: 1px solid #90ee90;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}

.measurement-results {
  margin: 20px 0;
  overflow-x: auto;
}

.measurement-results table,
.universality-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.measurement-results th,
.universality-table th {
  background: #667eea;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: 600;
}

.measurement-results td,
.universality-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.measurement-results tr:nth-child(even),
.universality-table tr:nth-child(even) {
  background: #f8f9fa;
}

.modern-experiment {
  background: #f0f0f5;
  border: 2px solid #6a5acd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.modern-experiment h4 {
  color: #483d8b;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.advantages-list h5 {
  color: #483d8b;
  margin-bottom: 10px;
  font-size: 1em;
}

.vortex-observation {
  background: #fff0f5;
  border: 2px solid #ff69b4;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.vortex-observation h4 {
  color: #c71585;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.cold-atom-advantages {
  background: #f0fff0;
  border: 2px solid #32cd32;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.cold-atom-advantages h4 {
  color: #228b22;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.vortex-imaging {
  background: #fffacd;
  border: 2px solid #ffd700;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.vortex-imaging h4 {
  color: #daa520;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.liquid-crystal-kt {
  background: #f5fffa;
  border: 2px solid #00fa9a;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.liquid-crystal-kt h4 {
  color: #00c957;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.precision-measurement {
  background: #fdf5e6;
  border: 2px solid #deb887;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.precision-measurement h4 {
  color: #cd853f;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.universality-verification {
  background: #f8f8ff;
  border: 2px solid #9370db;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.quantitative-success {
  background: #f0f8ff;
  border: 2px solid #4682b4;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.quantitative-success h4 {
  color: #4682b4;
  margin-bottom: 15px;
  font-size: 1.1em;
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