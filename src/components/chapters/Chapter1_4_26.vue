<template>
  <div class="kt-transition-page">
    <h1>KT相变 (Kosterlitz-Thouless Transition)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>Kosterlitz-Thouless (KT) 相变是一种特殊的拓扑相变，由John Kosterlitz和David Thouless在1973年发现。这种相变不同于传统的Landau相变，它不涉及局域序参量的变化，而是由拓扑激发（涡旋）的束缚-解束缚转变驱动。KT相变在二维系统中普遍存在，是理解低维物理的重要概念。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1973年</strong>：Kosterlitz和Thouless提出拓扑相变理论</li>
        <li><strong>1974年</strong>：José等人发展了重整化群方法</li>
        <li><strong>1980年代</strong>：实验验证在超流薄膜中观察到KT相变</li>
        <li><strong>1990年代</strong>：在约瑟夫森结阵列中的实现</li>
        <li><strong>2000年代至今</strong>：冷原子系统和二维材料中的研究</li>
        <li><strong>2016年</strong>：Kosterlitz、Thouless和Haldane获得诺贝尔物理学奖</li>
      </ul>
    </section>

    <!-- 二维XY模型 -->
    <section class="xy-model">
      <h2>二维XY模型</h2>
      
      <h3>模型哈密顿量</h3>
      <p>二维XY模型是研究KT相变的典型模型：</p>
      
      <div class="formula">
        <p>$$H = -J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)$$</p>
      </div>
      
      <p>其中 $\theta_i$ 是格点 $i$ 上的角度变量，$J > 0$ 是交换耦合常数。</p>

      <h3>连续极限</h3>
      <p>在长波长极限下，模型可以写成：</p>
      
      <div class="formula">
        <p>$$H = \frac{J}{2} \int d^2r (\nabla \theta)^2$$</p>
      </div>
      
      <p>这是一个非线性σ模型的形式。</p>

      <h3>Mermin-Wagner定理</h3>
      <p>在二维系统中，连续对称性不能自发破缺：</p>
      <ul>
        <li><strong>长程序</strong>：$\langle e^{i\theta_i} \rangle = 0$ 对于 $T > 0$</li>
        <li><strong>准长程序</strong>：关联函数幂律衰减</li>
        <li><strong>拓扑激发</strong>：涡旋成为重要的低能激发</li>
      </ul>
    </section>

    <!-- 涡旋激发 -->
    <section class="vortex-excitations">
      <h2>涡旋激发</h2>
      
      <h3>涡旋的定义</h3>
      <p>涡旋是角度场的拓扑缺陷：</p>
      
      <div class="formula">
        <p><strong>拓扑荷：</strong> <KatexElement expression="q = \\frac{1}{2\\pi} \\oint_C d\\vec{l} \\cdot \\nabla \\theta" /></p>
      </div>
      
      <p>其中积分沿着围绕涡旋中心的闭合路径进行。</p>

      <h3>涡旋能量</h3>
      <p>单个涡旋的能量为：</p>
      
      <div class="formula">
        <p>$$E_{\text{vortex}} = \pi J q^2 \ln(L/a)$$</p>
      </div>
      
      <p>其中 $L$ 是系统尺寸，$a$ 是晶格常数，$q$ 是涡旋的拓扑荷。</p>

      <h3>涡旋-反涡旋对</h3>
      <p>由于单个涡旋的能量发散，系统中主要存在涡旋-反涡旋对：</p>
      <ul>
        <li><strong>束缚对</strong>：低温下涡旋与反涡旋束缚在一起</li>
        <li><strong>自由涡旋</strong>：高温下涡旋-反涡旋对解离</li>
        <li><strong>相变点</strong>：束缚-解束缚转变发生的温度</li>
      </ul>

      <h3>涡旋相互作用</h3>
      <p>两个涡旋之间的相互作用能：</p>
      
      <div class="formula">
        <p>$$V(r) = 2\pi J q_1 q_2 \ln(r/a)$$</p>
      </div>
      
      <p>对于相反拓扑荷的涡旋对，这是吸引相互作用。</p>
    </section>

    <!-- Coulomb气体类比 -->
    <section class="coulomb-gas">
      <h2>Coulomb气体类比</h2>
      
      <h3>映射关系</h3>
      <p>二维XY模型可以映射到二维Coulomb气体：</p>
      <ul>
        <li><strong>涡旋</strong> ↔ <strong>电荷</strong></li>
        <li><strong>拓扑荷</strong> ↔ <strong>电荷量</strong></li>
        <li><strong>对数相互作用</strong> ↔ <strong>Coulomb相互作用</strong></li>
      </ul>

      <h3>有效哈密顿量</h3>
      <p>涡旋系统的有效哈密顿量：</p>
      
      <div class="formula">
        <KatexElement expression="H_{\\text{eff}} = \\sum_i E_c q_i^2 - \\sum_{i<j} 2\\pi J q_i q_j \\ln(r_{ij}/a)" :inline="false" />
      </div>
      
      <p>其中 $E_c$ 是涡旋核心能量。</p>

      <h3>配分函数</h3>
      <p>系统的配分函数可以写成：</p>
      
      <div class="formula">
        <KatexElement expression="Z = \\sum_{\\{q_i\\}} \\prod_i y^{|q_i|} \\prod_{i<j} \\left(\\frac{r_{ij}}{a}\\right)^{-2\\pi J q_i q_j / k_B T}" :inline="false" />
      </div>
      
      <p>其中 $y = e^{-E_c/k_B T}$ 是涡旋逸度。</p>
    </section>

    <!-- 重整化群分析 -->
    <section class="renormalization-group">
      <h2>重整化群分析</h2>
      
      <h3>RG方程</h3>
      <p>Kosterlitz重整化群方程：</p>
      
      <div class="formula">
        <p>$$\frac{dK}{dl} = -2\pi^2 y^2$$</p>
        <p>$$\frac{dy}{dl} = (2 - \pi K) y$$</p>
      </div>
      
      <p>其中 $K = J/k_B T$，$l$ 是重整化群流参数。</p>

      <h3>固定点分析</h3>
      <p>系统存在两个相：</p>
      <ul>
        <li><strong>低温相</strong>：$y \to 0$，$K > K_c = 2/\pi$</li>
        <li><strong>高温相</strong>：$y \to \infty$，$K < K_c = 2/\pi$</li>
        <li><strong>临界点</strong>：$K_c = 2/\pi$，$T_c = \pi J / 2k_B$</li>
      </ul>

      <h3>标度律</h3>
      <p>在临界点附近：</p>
      
      <div class="formula">
        <p><strong>关联长度：</strong> $\xi \sim \exp(b/\sqrt{t})$</p>
        <p><strong>比热：</strong> $C \sim \ln|\ln t|$</p>
      </div>
      
      <p>其中 $t = (T - T_c)/T_c$ 是约化温度。</p>
    </section>

    <!-- 物理性质 -->
    <section class="physical-properties">
      <h2>物理性质</h2>
      
      <h3>关联函数</h3>
      <p>不同温度区间的关联函数行为：</p>
      
      <div class="formula">
        <p><strong>低温相：</strong> $G(r) \sim r^{-\eta(T)}$，$\eta(T) = \frac{k_B T}{2\pi J}$</p>
        <p><strong>高温相：</strong> $G(r) \sim e^{-r/\xi}$，指数衰减</p>
        <p><strong>临界点：</strong> $G(r) \sim r^{-1/4}$</p>
      </div>

      <h3>刚度</h3>
      <p>超流刚度（螺旋度模量）：</p>
      
      <div class="formula">
        <p>$$\rho_s = \frac{k_B T}{2\pi} \left\langle \left(\sum_i \sin(\theta_i - \theta_{i+\hat{x}})\right)^2 \right\rangle$$</p>
      </div>
      
      <p>在KT相变点：$\rho_s(T_c) = \frac{2k_B T_c}{\pi}$</p>

      <h3>比热</h3>
      <p>比热在相变点附近的行为：</p>
      <ul>
        <li><strong>低温相</strong>：$C \propto T$ (线性)</li>
        <li><strong>相变点</strong>：$C$ 有一个宽的峰</li>
        <li><strong>高温相</strong>：$C$ 逐渐减小</li>
      </ul>
    </section>

    <!-- 实验实现 -->
    <section class="experimental-realizations">
      <h2>实验实现</h2>
      
      <h3>超流薄膜</h3>
      <p>液氦薄膜中的KT相变：</p>
      <ul>
        <li><strong>超流密度</strong>：测量超流刚度的跳跃</li>
        <li><strong>临界温度</strong>：与理论预言一致</li>
        <li><strong>涡旋观察</strong>：直接观察涡旋-反涡旋对</li>
      </ul>

      <h3>约瑟夫森结阵列</h3>
      <p>二维约瑟夫森结阵列：</p>
      
      <div class="formula">
        <p>$$H = -E_J \sum_{\langle i,j \rangle} \cos(\phi_i - \phi_j - A_{ij})$$</p>
      </div>
      
      <ul>
        <li><strong>相位涡旋</strong>：约瑟夫森相位的拓扑缺陷</li>
        <li><strong>电阻跳跃</strong>：KT相变的电输运特征</li>
        <li><strong>可调参数</strong>：通过外场调节耦合强度</li>
      </ul>

      <h3>冷原子系统</h3>
      <p>二维玻色气体中的KT相变：</p>
      <ul>
        <li><strong>相干性测量</strong>：一阶关联函数的幂律衰减</li>
        <li><strong>涡旋动力学</strong>：涡旋的产生和湮灭</li>
        <li><strong>有限尺寸效应</strong>：陷阱中的修正</li>
      </ul>

      <h3>二维材料</h3>
      <p>石墨烯和过渡金属硫化物中的应用：</p>
      <ul>
        <li><strong>磁性薄膜</strong>：二维磁体中的KT相变</li>
        <li><strong>超导薄膜</strong>：二维超导体的相变</li>
        <li><strong>量子霍尔系统</strong>：边缘态的KT物理</li>
      </ul>
    </section>

    <!-- 推广与变形 -->
    <section class="generalizations">
      <h2>推广与变形</h2>
      
      <h3>q态时钟模型</h3>
      <p>离散对称性的推广：</p>
      
      <div class="formula">
        <p>$$H = -J \sum_{\langle i,j \rangle} \cos\left(\frac{2\pi}{q}(n_i - n_j)\right)$$</p>
      </div>
      
      <p>其中 $n_i = 0, 1, \ldots, q-1$。</p>

      <h3>ANNNI模型</h3>
      <p>轴向次近邻Ising模型中的KT相变：</p>
      <ul>
        <li><strong>竞争相互作用</strong>：近邻铁磁和次近邻反铁磁</li>
        <li><strong>调制相</strong>：不可公度的有序态</li>
        <li><strong>魔鬼阶梯</strong>：有理调制波矢的序列</li>
      </ul>

      <h3>受挫系统</h3>
      <p>几何受挫中的KT物理：</p>
      <ul>
        <li><strong>三角晶格</strong>：120°有序态</li>
        <li><strong>kagome晶格</strong>：量子自旋液体</li>
        <li><strong>蜂窝晶格</strong>：Dirac点附近的物理</li>
      </ul>
    </section>

    <!-- 数值方法 -->
    <section class="numerical-methods">
      <h2>数值方法</h2>
      
      <h3>蒙特卡罗方法</h3>
      <p>研究KT相变的数值技术：</p>
      <ul>
        <li><strong>Metropolis算法</strong>：标准的重要性采样</li>
        <li><strong>Wolff算法</strong>：团簇更新减少临界慢化</li>
        <li><strong>涡旋算法</strong>：直接更新拓扑激发</li>
      </ul>

      <h3>有限尺寸标度</h3>
      <p>确定相变点的方法：</p>
      
      <div class="formula">
        <p><strong>Binder累积量：</strong> $U_4 = 1 - \frac{\langle m^4 \rangle}{3\langle m^2 \rangle^2}$</p>
      </div>
      
      <ul>
        <li><strong>标度分析</strong>：提取临界指数</li>
        <li><strong>数据坍缩</strong>：验证标度假设</li>
        <li><strong>外推方法</strong>：热力学极限的结果</li>
      </ul>

      <h3>张量网络方法</h3>
      <p>现代数值技术：</p>
      <ul>
        <li><strong>PEPS</strong>：投影纠缠对态</li>
        <li><strong>TNR</strong>：张量网络重整化</li>
        <li><strong>MERA</strong>：多尺度纠缠重整化</li>
      </ul>
    </section>

    <!-- 理论发展 -->
    <section class="theoretical-developments">
      <h2>理论发展</h2>
      
      <h3>共形场论</h3>
      <p>KT相变的共形场论描述：</p>
      <ul>
        <li><strong>中心荷</strong>：$c = 1$</li>
        <li><strong>标度维度</strong>：算符的共形权重</li>
        <li><strong>共形不变性</strong>：临界点的对称性</li>
      </ul>

      <h3>可积性</h3>
      <p>可积模型中的KT相变：</p>
      <ul>
        <li><strong>Bethe ansatz</strong>：精确解的方法</li>
        <li><strong>Yang-Baxter方程</strong>：可积性的条件</li>
        <li><strong>热力学Bethe ansatz</strong>：有限温度性质</li>
      </ul>

      <h3>全息对偶</h3>
      <p>AdS/CFT对应中的KT相变：</p>
      <ul>
        <li><strong>引力双重描述</strong>：黑洞相变</li>
        <li><strong>纠缠熵</strong>：几何熵的计算</li>
        <li><strong>输运性质</strong>：全息电导率</li>
      </ul>
    </section>

    <!-- 应用与相关领域 -->
    <section class="applications">
      <h2>应用与相关领域</h2>
      
      <h3>凝聚态物理</h3>
      <ul>
        <li><strong>二维磁体</strong>：单层磁性材料</li>
        <li><strong>超导薄膜</strong>：二维超导体</li>
        <li><strong>量子霍尔效应</strong>：边缘态物理</li>
        <li><strong>莫特绝缘体</strong>：强关联电子系统</li>
      </ul>

      <h3>软物质物理</h3>
      <ul>
        <li><strong>液晶</strong>：向列相的缺陷</li>
        <li><strong>胶体系统</strong>：二维熔化</li>
        <li><strong>生物膜</strong>：脂质双分子层</li>
        <li><strong>活性物质</strong>：自驱动粒子系统</li>
      </ul>

      <h3>高能物理</h3>
      <ul>
        <li><strong>规范理论</strong>：二维QED</li>
        <li><strong>弦理论</strong>：世界面的物理</li>
        <li><strong>宇宙学</strong>：早期宇宙的相变</li>
      </ul>

      <h3>数学物理</h3>
      <ul>
        <li><strong>拓扑学</strong>：同伦群理论</li>
        <li><strong>微分几何</strong>：纤维丛理论</li>
        <li><strong>概率论</strong>：随机几何</li>
      </ul>
    </section>

    <!-- 前沿发展 -->
    <section class="frontier-developments">
      <h2>前沿发展</h2>
      
      <h3>机器学习方法</h3>
      <ul>
        <li><strong>相变识别</strong>：神经网络检测KT相变</li>
        <li><strong>涡旋识别</strong>：计算机视觉方法</li>
        <li><strong>重整化群</strong>：机器学习辅助的RG流</li>
      </ul>

      <h3>非平衡系统</h3>
      <ul>
        <li><strong>驱动系统</strong>：周期驱动下的KT相变</li>
        <li><strong>开放系统</strong>：耗散环境的影响</li>
        <li><strong>量子淬火</strong>：非绝热演化</li>
      </ul>

      <h3>拓扑量子计算</h3>
      <ul>
        <li><strong>任意子</strong>：非阿贝尔统计</li>
        <li><strong>拓扑量子比特</strong>：容错量子计算</li>
        <li><strong>编织操作</strong>：拓扑门操作</li>
      </ul>

      <h3>多体局域化</h3>
      <ul>
        <li><strong>无序系统</strong>：Anderson局域化</li>
        <li><strong>热化失效</strong>：本征态热化假设的破坏</li>
        <li><strong>时间晶体</strong>：周期驱动系统</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>Kosterlitz-Thouless相变作为拓扑相变的典型代表，展现了物理学中深刻而优美的概念。从涡旋的拓扑性质到重整化群的精确解，从实验的精确验证到理论的不断发展，KT相变理论体现了现代物理学的重要特征：数学的严谨性、物理的直观性和实验的可验证性。</p>
      
      <p>KT相变不仅在理论上具有重要意义，在实际应用中也发挥着重要作用。从超导薄膜到冷原子系统，从二维材料到拓扑量子计算，KT相变的概念和方法在现代物理学的各个分支中都有广泛应用。</p>
      
      <p>随着实验技术的进步和理论方法的发展，KT相变研究仍然是一个活跃的前沿领域。机器学习、非平衡统计力学、拓扑量子计算等新兴方向为KT相变研究注入了新的活力，也为我们理解复杂量子多体系统提供了新的视角和工具。</p>
    </section>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'
export default {
  name: 'KTTransition',
  components: { KatexElement },
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.kt-transition-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #e74c3c;
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

.formula {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
}

.formula p {
  margin: 5px 0;
}

section {
  margin-bottom: 40px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

strong {
  color: #2c3e50;
}

.overview {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.xy-model {
  border-left: 4px solid #3498db;
}

.vortex-excitations {
  border-left: 4px solid #9b59b6;
}

.coulomb-gas {
  border-left: 4px solid #27ae60;
}

.renormalization-group {
  border-left: 4px solid #f39c12;
}

.physical-properties {
  border-left: 4px solid #1abc9c;
}

.experimental-realizations {
  border-left: 4px solid #34495e;
}

.generalizations {
  border-left: 4px solid #8e44ad;
}

.numerical-methods {
  border-left: 4px solid #16a085;
}

.theoretical-developments {
  border-left: 4px solid #2980b9;
}

.applications {
  border-left: 4px solid #d35400;
}

.frontier-developments {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .kt-transition-page {
    padding: 10px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  section {
    padding: 15px;
  }
}
</style>