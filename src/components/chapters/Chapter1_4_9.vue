<template>
  <div class="dmft-theory">
    <div class="header-section">
      <h1 class="main-title">动力学平均场理论 (DMFT)</h1>
      <p class="subtitle">强关联电子系统的非微扰方法</p>
    </div>

    <div class="content-container">
      <!-- 定义与核心特征 -->
      <section class="definition-section">
        <h2>定义与核心特征</h2>
        <div class="definition-card">
          <h3>基本定义</h3>
          <p>动力学平均场理论(Dynamical Mean Field Theory, DMFT)是一种处理强关联电子系统的非微扰理论方法。它将复杂的多体问题映射为一个量子杂质模型，通过自洽求解杂质问题来获得系统的动力学性质。DMFT在无穷维度极限下是精确的，在有限维度下提供了很好的近似。</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <h4>局域近似</h4>
            <p>将复杂的晶格问题简化为单个格点的杂质问题，保留了局域的量子涨落</p>
          </div>
          <div class="feature-card">
            <h4>动力学信息</h4>
            <p>能够计算频率依赖的物理量，如谱函数、光电导等动力学响应</p>
          </div>
          <div class="feature-card">
            <h4>非微扰性质</h4>
            <p>适用于任意相互作用强度，能够处理强关联区域的物理现象</p>
          </div>
          <div class="feature-card">
            <h4>相变描述</h4>
            <p>能够描述金属-绝缘体转变、磁性相变等强关联系统的相变现象</p>
          </div>
        </div>
      </section>

      <!-- 理论基础 -->
      <section class="theory-section">
        <h2>理论基础</h2>
        
        <div class="theory-subsection">
          <h3>基本思想</h3>
          <p>DMFT的核心思想是将晶格上的强关联问题映射为一个有效的杂质模型：</p>
          <ul class="concept-list">
            <li><strong>局域近似</strong>: 假设自能只依赖于频率，不依赖于动量</li>
            <li><strong>自洽条件</strong>: 杂质问题的局域格林函数等于晶格问题的局域格林函数</li>
            <li><strong>有效介质</strong>: 引入有效的杂质浴来模拟其余格点的影响</li>
          </ul>
        </div>

        <div class="theory-subsection">
          <h3>数学表述</h3>
          <p>DMFT的核心方程组包括：</p>
          <div class="equation-box">
            <p>G(iωₙ) = ∫ dε ρ(ε) / (iωₙ + μ - ε - Σ(iωₙ))</p>
          </div>
          <div class="equation-box">
            <p>G₀⁻¹(iωₙ) = G⁻¹(iωₙ) + Σ(iωₙ)</p>
          </div>
          <div class="equation-box">
            <p>Σ(iωₙ) = Σᵢₘₚ[G₀](iωₙ)</p>
          </div>
          <ul class="equation-list">
            <li><strong>G(iωₙ)</strong>: 局域格林函数</li>
            <li><strong>G₀(iωₙ)</strong>: 杂质问题的非相互作用格林函数</li>
            <li><strong>Σ(iωₙ)</strong>: 自能函数</li>
            <li><strong>ρ(ε)</strong>: 非相互作用态密度</li>
            <li><strong>Σᵢₘₚ</strong>: 杂质求解器</li>
          </ul>
        </div>
      </section>

      <!-- 物理图像 -->
      <section class="physics-section">
        <h2>物理图像</h2>
        
        <div class="physics-grid">
          <div class="physics-card">
            <h3>杂质模型映射</h3>
            <p>将晶格上的每个格点看作一个杂质，周围的格点通过有效的电子浴来描述。这种映射保留了局域的量子涨落，同时简化了计算复杂度。</p>
          </div>
          
          <div class="physics-card">
            <h3>自洽循环</h3>
            <p>通过迭代求解杂质问题和晶格问题，直到自洽条件满足。这个过程确保了局域和非局域效应的平衡。</p>
          </div>
          
          <div class="physics-card">
            <h3>量子涨落</h3>
            <p>DMFT完全保留了局域的量子涨落，这使得它能够正确描述强关联系统中的Kondo效应、局域矩形成等现象。</p>
          </div>
          
          <div class="physics-card">
            <h3>维度效应</h3>
            <p>在无穷维度极限下，DMFT是精确的。在有限维度下，它忽略了空间涨落，但仍能捕捉主要的物理效应。</p>
          </div>
        </div>
      </section>

      <!-- 杂质求解器 -->
      <section class="solvers-section">
        <h2>杂质求解器</h2>
        
        <div class="solvers-grid">
          <div class="solver-card">
            <h3>量子蒙特卡罗 (QMC)</h3>
            <ul class="solver-features">
              <li><strong>连续时间QMC</strong>: 处理连续时间的相互作用</li>
              <li><strong>辅助场QMC</strong>: 通过辅助场分解相互作用</li>
              <li><strong>优势</strong>: 精确求解，适用于任意相互作用强度</li>
              <li><strong>局限</strong>: 符号问题，低温下计算困难</li>
            </ul>
          </div>
          
          <div class="solver-card">
            <h3>精确对角化 (ED)</h3>
            <ul class="solver-features">
              <li><strong>有限浴</strong>: 用有限个浴轨道近似连续浴</li>
              <li><strong>Lanczos方法</strong>: 高效计算基态和低激发态</li>
              <li><strong>优势</strong>: 无符号问题，可达零温</li>
              <li><strong>局限</strong>: 浴轨道数目限制，高频精度有限</li>
            </ul>
          </div>
          
          <div class="solver-card">
            <h3>数值重整化群 (NRG)</h3>
            <ul class="solver-features">
              <li><strong>Wilson链</strong>: 将连续浴离散化为链状结构</li>
              <li><strong>迭代对角化</strong>: 逐步增加链长度</li>
              <li><strong>优势</strong>: 低能精度高，适合研究Kondo物理</li>
              <li><strong>局限</strong>: 高频分辨率有限</li>
            </ul>
          </div>
          
          <div class="solver-card">
            <h3>连分数展开 (CFE)</h3>
            <ul class="solver-features">
              <li><strong>矩展开</strong>: 通过格林函数的矩来重构谱函数</li>
              <li><strong>解析延拓</strong>: 从虚时间到实频率的延拓</li>
              <li><strong>优势</strong>: 计算快速，适合高温</li>
              <li><strong>局限</strong>: 低温精度有限</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 计算流程 -->
      <section class="workflow-section">
        <h2>计算流程</h2>
        
        <div class="workflow-container">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>初始化</h3>
              <p>设置初始的自能函数Σ(iωₙ)，通常从非相互作用或简单近似开始</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>计算局域格林函数</h3>
              <p>利用Dyson方程和态密度计算晶格的局域格林函数G(iωₙ)</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>构造杂质问题</h3>
              <p>通过自洽条件确定杂质问题的非相互作用格林函数G₀(iωₙ)</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>求解杂质问题</h3>
              <p>使用杂质求解器计算杂质问题的自能Σ(iωₙ)</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>检查收敛</h3>
              <p>比较新旧自能函数，如未收敛则返回步骤2，否则计算物理量</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="applications-section">
        <h2>物理应用</h2>
        
        <div class="applications-grid">
          <div class="application-card">
            <h3>Mott转变</h3>
            <ul class="application-list">
              <li>金属-绝缘体转变的理论描述</li>
              <li>临界相互作用强度的确定</li>
              <li>准粒子峰的演化</li>
              <li>Hubbard带的形成</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>重费米子系统</h3>
            <ul class="heavy-fermion-list">
              <li>Kondo效应的微观机制</li>
              <li>相干温度的计算</li>
              <li>重准粒子的形成</li>
              <li>量子临界点行为</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>高温超导体</h3>
            <ul class="superconductor-list">
              <li>赝能隙态的理论解释</li>
              <li>正常态输运性质</li>
              <li>电荷转移能隙</li>
              <li>反铁磁相关的影响</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>过渡金属氧化物</h3>
            <ul class="oxide-list">
              <li>轨道有序和自旋有序</li>
              <li>Jahn-Teller效应</li>
              <li>电荷有序态</li>
              <li>多轨道效应</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 扩展方法 -->
      <section class="extensions-section">
        <h2>扩展方法</h2>
        
        <div class="extensions-grid">
          <div class="extension-card">
            <h3>团簇DMFT (CDMFT)</h3>
            <p>将单格点杂质扩展为小团簇，能够部分考虑短程空间关联。适用于研究d波超导、反铁磁序等需要考虑近邻关联的现象。</p>
            <ul class="extension-features">
              <li>保留短程空间关联</li>
              <li>更好地描述相变临界行为</li>
              <li>适用于低维系统</li>
            </ul>
          </div>
          
          <div class="extension-card">
            <h3>双杂质DMFT (DIDMFT)</h3>
            <p>考虑两个杂质格点的相关，特别适用于研究双层系统、异质结构等具有层间耦合的系统。</p>
            <ul class="extension-features">
              <li>层间隧穿效应</li>
              <li>界面物理</li>
              <li>维度交叉现象</li>
            </ul>
          </div>
          
          <div class="extension-card">
            <h3>非平衡DMFT</h3>
            <p>扩展到非平衡态，研究强关联系统在外场驱动下的动力学演化和稳态性质。</p>
            <ul class="extension-features">
              <li>泵浦-探测实验模拟</li>
              <li>光诱导相变</li>
              <li>输运性质计算</li>
            </ul>
          </div>
          
          <div class="extension-card">
            <h3>实空间DMFT (R-DMFT)</h3>
            <p>在实空间中应用DMFT，适用于研究无序系统、表面、界面等空间非均匀的系统。</p>
            <ul class="extension-features">
              <li>无序效应</li>
              <li>表面态</li>
              <li>异质结构</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 优势与局限 -->
      <section class="advantages-section">
        <h2>优势与局限</h2>
        
        <div class="pros-cons-grid">
          <div class="pros-card">
            <h3>主要优势</h3>
            <ul class="pros-list">
              <li><strong>非微扰性质</strong>: 适用于任意相互作用强度</li>
              <li><strong>动力学信息</strong>: 能计算频率依赖的物理量</li>
              <li><strong>相变描述</strong>: 正确描述连续相变</li>
              <li><strong>量子涨落</strong>: 完全保留局域量子涨落</li>
              <li><strong>温度依赖</strong>: 能处理有限温度效应</li>
              <li><strong>普适性</strong>: 适用于多种强关联模型</li>
            </ul>
          </div>
          
          <div class="cons-card">
            <h3>主要局限</h3>
            <ul class="cons-list">
              <li><strong>空间关联</strong>: 忽略了非局域的空间关联</li>
              <li><strong>维度限制</strong>: 在低维系统中精度有限</li>
              <li><strong>计算成本</strong>: 杂质求解器计算量大</li>
              <li><strong>解析延拓</strong>: 从虚时间到实频率的延拓困难</li>
              <li><strong>符号问题</strong>: QMC求解器存在符号问题</li>
              <li><strong>长程序</strong>: 难以描述长程有序现象</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 现代发展 -->
      <section class="modern-section">
        <h2>现代发展</h2>
        
        <div class="modern-grid">
          <div class="development-card">
            <h3>机器学习增强</h3>
            <ul class="ml-list">
              <li>神经网络杂质求解器</li>
              <li>深度学习加速解析延拓</li>
              <li>强化学习优化参数</li>
              <li>自动微分计算梯度</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>量子计算应用</h3>
            <ul class="quantum-list">
              <li>变分量子杂质求解器</li>
              <li>量子退火优化</li>
              <li>量子模拟器实现</li>
              <li>NISQ算法开发</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>多尺度方法</h3>
            <ul class="multiscale-list">
              <li>DFT+DMFT结合方法</li>
              <li>GW+DMFT混合理论</li>
              <li>多轨道DMFT</li>
              <li>第一性原理DMFT</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>高性能计算</h3>
            <ul class="hpc-list">
              <li>GPU加速计算</li>
              <li>并行化算法</li>
              <li>云计算平台</li>
              <li>异构计算架构</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 软件实现 -->
      <section class="software-section">
        <h2>软件实现</h2>
        
        <div class="software-grid">
          <div class="software-card">
            <h3>TRIQS</h3>
            <p>开源的强关联电子系统计算框架，提供完整的DMFT实现和多种杂质求解器。</p>
            <ul class="software-features">
              <li>Python/C++混合编程</li>
              <li>模块化设计</li>
              <li>丰富的求解器库</li>
              <li>活跃的开发社区</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>ALPS</h3>
            <p>阿尔卑斯项目提供的量子多体系统计算库，包含连续时间QMC杂质求解器。</p>
            <ul class="software-features">
              <li>高效的QMC实现</li>
              <li>并行计算支持</li>
              <li>标准化数据格式</li>
              <li>可视化工具</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>w2dynamics</h3>
            <p>专门用于连续时间量子蒙特卡罗的DMFT计算软件包。</p>
            <ul class="software-features">
              <li>高效的CT-QMC算法</li>
              <li>多轨道支持</li>
              <li>MPI并行化</li>
              <li>灵活的输入输出</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>EDMFTF</h3>
            <p>基于精确对角化的DMFT实现，适用于快速原型开发和教学。</p>
            <ul class="software-features">
              <li>简单易用</li>
              <li>教育友好</li>
              <li>快速收敛</li>
              <li>可视化界面</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 总结与展望 -->
      <section class="summary-section">
        <h2>总结与展望</h2>
        <div class="summary-content">
          <p>动力学平均场理论作为处理强关联电子系统的重要理论工具，在过去三十年中取得了巨大成功。它不仅为理解Mott转变、重费米子行为等复杂现象提供了理论框架，还为材料设计和器件应用提供了指导。</p>
          
          <p>DMFT的成功在于其巧妙地平衡了物理准确性和计算可行性。通过将复杂的晶格问题映射为相对简单的杂质问题，DMFT保留了强关联系统的核心物理，同时避免了指数增长的计算复杂度。</p>
          
          <p>未来的发展方向包括：更精确的杂质求解器开发、非平衡态理论的完善、与第一性原理方法的深度结合，以及在量子材料设计中的应用。随着计算能力的提升和新算法的发展，DMFT将在量子多体物理研究中发挥更重要的作用。</p>
          
          <div class="future-directions">
            <h3>未来发展方向</h3>
            <ul class="future-list">
              <li><strong>方法学发展</strong>: 新的杂质求解器、改进的解析延拓方法</li>
              <li><strong>应用拓展</strong>: 非平衡态、拓扑材料、量子器件</li>
              <li><strong>技术融合</strong>: 机器学习、量子计算、高性能计算</li>
              <li><strong>实验结合</strong>: 与ARPES、STM等实验技术的紧密结合</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_9',
  mounted() {
    // 添加页面加载动画
    this.animateOnLoad();
  },
  methods: {
    animateOnLoad() {
      const sections = document.querySelectorAll('.dmft-theory section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
  }
}
</script>

<style scoped>
.dmft-theory {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.main-title {
  font-size: 3em;
  margin-bottom: 10px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
  font-size: 1.3em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

section h2 {
  color: #2c3e50;
  font-size: 2.2em;
  margin-bottom: 25px;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}

section h3 {
  color: #34495e;
  font-size: 1.5em;
  margin-bottom: 15px;
}

section h4 {
  color: #7f8c8d;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.definition-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  border-left: 5px solid #3498db;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.theory-subsection {
  margin-bottom: 30px;
  padding: 20px;
  background: #fafbfc;
  border-radius: 8px;
}

.equation-box {
  background: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);
}

.equation-box:hover {
  background: #34495e;
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.concept-list, .equation-list {
  list-style: none;
  padding: 0;
}

.concept-list li, .equation-list li {
  background: white;
  margin: 8px 0;
  padding: 12px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.physics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.physics-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.physics-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.physics-card h3 {
  color: white;
  margin-bottom: 15px;
}

.solvers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.solver-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.solver-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(252, 182, 159, 0.4);
}

.solver-features {
  list-style: none;
  padding: 0;
}

.solver-features li {
  background: rgba(255,255,255,0.8);
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  border-left: 4px solid #e67e22;
}

.workflow-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.workflow-step {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #3498db;
  transition: all 0.3s ease;
}

.workflow-step:hover {
  background: #e9ecef;
  transform: translateX(10px);
}

.step-number {
  background: #3498db;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  margin-right: 20px;
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.application-card {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #ecf0f1;
  transition: all 0.3s ease;
}

.application-card:hover {
  border-color: #3498db;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(52, 152, 219, 0.2);
}

.application-list, .heavy-fermion-list, .superconductor-list, .oxide-list {
  list-style: none;
  padding: 0;
}

.application-list li, .heavy-fermion-list li, .superconductor-list li, .oxide-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #1abc9c;
  border-radius: 4px;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.extension-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.extension-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(168, 237, 234, 0.4);
}

.extension-features {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.extension-features li {
  background: rgba(255,255,255,0.8);
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
  border-left: 4px solid #16a085;
}

.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.pros-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 25px;
  border-radius: 12px;
}

.cons-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
}

.pros-list, .cons-list {
  list-style: none;
  padding: 0;
}

.pros-list li, .cons-list li {
  background: rgba(255,255,255,0.8);
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #27ae60;
}

.cons-list li {
  border-left-color: #e74c3c;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.development-card {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #ecf0f1;
  transition: all 0.3s ease;
}

.development-card:hover {
  border-color: #9b59b6;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(155, 89, 182, 0.2);
}

.ml-list, .quantum-list, .multiscale-list, .hpc-list {
  list-style: none;
  padding: 0;
}

.ml-list li, .quantum-list li, .multiscale-list li, .hpc-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.software-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.software-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.software-card h3 {
  color: white;
  margin-bottom: 15px;
}

.software-features {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.software-features li {
  background: rgba(255,255,255,0.2);
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
  border-left: 4px solid rgba(255,255,255,0.5);
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.summary-section h2 {
  color: white;
  border-bottom-color: rgba(255,255,255,0.3);
}

.summary-content p {
  margin-bottom: 20px;
  font-size: 1.1em;
  line-height: 1.8;
}

.future-directions {
  margin-top: 30px;
  padding: 25px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

.future-directions h3 {
  color: white;
  margin-bottom: 15px;
}

.future-list {
  list-style: none;
  padding: 0;
}

.future-list li {
  background: rgba(255,255,255,0.1);
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid rgba(255,255,255,0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dmft-theory {
    padding: 15px;
  }
  
  .main-title {
    font-size: 2.2em;
  }
  
  .features-grid, .physics-grid, .solvers-grid, .applications-grid, .extensions-grid, .modern-grid, .software-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 20px;
  }
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.8em;
  }
  
  .subtitle {
    font-size: 1.1em;
  }
  
  section h2 {
    font-size: 1.8em;
  }
}

/* 打印样式 */
@media print {
  .dmft-theory {
    max-width: none;
    padding: 0;
  }
  
  section {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ddd;
  }
  
  .header-section {
    background: #f5f5f5 !important;
    color: #333 !important;
  }
  
  .physics-card, .solver-card, .extension-card, .software-card {
    background: #f9f9f9 !important;
    color: #333 !important;
  }
  
  .summary-section {
    background: #f5f5f5 !important;
    color: #333 !important;
  }
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card, .physics-card, .solver-card, .application-card, .extension-card, .development-card, .software-card {
  animation: fadeInUp 0.6s ease forwards;
}
</style>