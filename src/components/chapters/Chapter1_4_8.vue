<template>
  <div class="gutzwiller-approximation">
    <div class="header-section">
      <h1 class="main-title">Gutzwiller近似</h1>
      <p class="subtitle">强关联电子系统的变分方法</p>
    </div>

    <div class="content-container">
      <!-- 定义与核心特征 -->
      <section class="definition-section">
        <h2>定义与核心特征</h2>
        <div class="definition-card">
          <h3>基本定义</h3>
          <p>Gutzwiller近似是一种用于处理强关联电子系统的变分方法，通过引入关联参数来描述电子间的库仑相互作用对系统基态性质的影响。该方法特别适用于研究金属-绝缘体转变、磁性相变等强关联现象。</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <h4>变分原理</h4>
            <p>基于变分原理构造试探波函数，通过优化变分参数获得系统基态能量的上界估计</p>
          </div>
          <div class="feature-card">
            <h4>关联效应</h4>
            <p>显式考虑电子间的库仑相互作用，特别是同一格点上的电子排斥</p>
          </div>
          <div class="feature-card">
            <h4>局域处理</h4>
            <p>将复杂的多体问题简化为局域的单粒子问题，保持计算的可行性</p>
          </div>
        </div>
      </section>

      <!-- 理论基础 -->
      <section class="theory-section">
        <h2>理论基础</h2>
        
        <div class="theory-subsection">
          <h3>Hubbard模型</h3>
          <p>Gutzwiller近似主要应用于Hubbard模型：</p>
          <div class="equation-box">
            <p>H = -t∑⟨i,j⟩,σ (c†ᵢσcⱼσ + h.c.) + U∑ᵢ nᵢ↑nᵢ↓</p>
          </div>
          <ul class="parameter-list">
            <li><strong>t</strong>: 跳跃积分，描述电子在相邻格点间的跳跃</li>
            <li><strong>U</strong>: 库仑排斥能，描述同一格点上电子间的相互作用</li>
            <li><strong>c†ᵢσ, cᵢσ</strong>: 格点i上自旋σ电子的产生和湮灭算符</li>
            <li><strong>nᵢσ</strong>: 格点i上自旋σ电子的数密度算符</li>
          </ul>
        </div>

        <div class="theory-subsection">
          <h3>Gutzwiller波函数</h3>
          <p>Gutzwiller提出的试探波函数形式为：</p>
          <div class="equation-box">
            <p>|ψG⟩ = ∏ᵢ (1 - (1-g)nᵢ↑nᵢ↓)|ψ₀⟩</p>
          </div>
          <ul class="wavefunction-list">
            <li><strong>|ψ₀⟩</strong>: 非相互作用系统的基态波函数（通常是Slater行列式）</li>
            <li><strong>g</strong>: Gutzwiller参数（0 ≤ g ≤ 1），控制双占据态的权重</li>
            <li><strong>g = 1</strong>: 对应非相互作用情况</li>
            <li><strong>g = 0</strong>: 完全抑制双占据态，对应无穷大U极限</li>
          </ul>
        </div>
      </section>

      <!-- 物理图像 -->
      <section class="physics-section">
        <h2>物理图像</h2>
        
        <div class="physics-grid">
          <div class="physics-card">
            <h3>关联效应的处理</h3>
            <p>通过调节Gutzwiller参数g，系统地控制双占据态的概率，从而模拟库仑排斥对电子分布的影响。当U增大时，g减小，双占据态被抑制。</p>
          </div>
          
          <div class="physics-card">
            <h3>准粒子重整化</h3>
            <p>关联效应导致电子的有效质量增加，表现为准粒子重整化因子的出现。这个因子描述了相互作用对电子运动的阻碍效应。</p>
          </div>
          
          <div class="physics-card">
            <h3>Mott转变</h3>
            <p>当U/t比值足够大时，系统从金属态转变为绝缘态（Mott绝缘体），这种转变可以通过Gutzwiller近似中准粒子权重的消失来描述。</p>
          </div>
        </div>
      </section>

      <!-- 数学表述 -->
      <section class="math-section">
        <h2>数学表述</h2>
        
        <div class="math-subsection">
          <h3>变分能量</h3>
          <p>在Gutzwiller近似下，系统的变分能量为：</p>
          <div class="equation-box">
            <p>E[g] = ⟨ψG|H|ψG⟩/⟨ψG|ψG⟩</p>
          </div>
          <p>通过对g求导并令其为零，可以得到最优的Gutzwiller参数。</p>
        </div>

        <div class="math-subsection">
          <h3>重整化因子</h3>
          <p>在均匀系统中，跳跃项的重整化因子为：</p>
          <div class="equation-box">
            <p>q = 2g/(1+g)</p>
          </div>
          <p>这个因子描述了关联效应对电子跳跃的抑制程度。</p>
        </div>

        <div class="math-subsection">
          <h3>双占据概率</h3>
          <p>双占据态的概率在Gutzwiller近似下为：</p>
          <div class="equation-box">
            <p>⟨nᵢ↑nᵢ↓⟩ = g²⟨nᵢ↑⟩₀⟨nᵢ↓⟩₀</p>
          </div>
          <p>其中下标0表示非相互作用系统的期望值。</p>
        </div>
      </section>

      <!-- 计算实现 -->
      <section class="computation-section">
        <h2>计算实现</h2>
        
        <div class="computation-grid">
          <div class="method-card">
            <h3>自洽求解</h3>
            <ul class="method-steps">
              <li>初始化Gutzwiller参数g</li>
              <li>计算重整化的跳跃积分</li>
              <li>求解有效单粒子哈密顿量</li>
              <li>计算新的电子密度分布</li>
              <li>更新Gutzwiller参数</li>
              <li>重复直至收敛</li>
            </ul>
          </div>
          
          <div class="method-card">
            <h3>数值技巧</h3>
            <ul class="technique-list">
              <li><strong>混合方案</strong>: 使用线性混合或Anderson混合加速收敛</li>
              <li><strong>温度展宽</strong>: 引入有限温度避免数值不稳定性</li>
              <li><strong>格点依赖</strong>: 考虑空间非均匀的Gutzwiller参数</li>
              <li><strong>自旋极化</strong>: 处理磁性态的自旋依赖参数</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="applications-section">
        <h2>物理应用</h2>
        
        <div class="applications-grid">
          <div class="application-card">
            <h3>强关联材料</h3>
            <ul class="application-list">
              <li>过渡金属氧化物的金属-绝缘体转变</li>
              <li>重费米子系统的Kondo效应</li>
              <li>高温超导体的正常态性质</li>
              <li>有机导体的电荷有序态</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>磁性系统</h3>
            <ul class="magnetic-list">
              <li>反铁磁绝缘体的基态性质</li>
              <li>磁性相变的临界行为</li>
              <li>自旋液体态的候选材料</li>
              <li>磁性掺杂半导体</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>光晶格系统</h3>
            <ul class="optical-list">
              <li>冷原子气体的Mott转变</li>
              <li>人工量子材料的设计</li>
              <li>量子相变的实验模拟</li>
              <li>非平衡态动力学</li>
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
              <li><strong>物理直观</strong>: 清晰的物理图像，易于理解关联效应</li>
              <li><strong>计算高效</strong>: 相对简单的数学形式，计算成本较低</li>
              <li><strong>定性正确</strong>: 能够正确描述Mott转变等关键物理现象</li>
              <li><strong>广泛适用</strong>: 可应用于多种强关联电子系统</li>
            </ul>
          </div>
          
          <div class="cons-card">
            <h3>主要局限</h3>
            <ul class="cons-list">
              <li><strong>平均场性质</strong>: 忽略了量子涨落和空间关联</li>
              <li><strong>定量精度</strong>: 在中等关联强度下精度有限</li>
              <li><strong>动力学性质</strong>: 难以描述激发态和动力学响应</li>
              <li><strong>相变临界性</strong>: 无法准确描述相变的临界指数</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 改进方法 -->
      <section class="improvements-section">
        <h2>改进方法</h2>
        
        <div class="improvements-grid">
          <div class="improvement-card">
            <h3>Gutzwiller投影蒙特卡罗</h3>
            <p>结合量子蒙特卡罗方法，更精确地处理Gutzwiller波函数的期望值计算，特别适用于二维系统的研究。</p>
          </div>
          
          <div class="improvement-card">
            <h3>变分蒙特卡罗</h3>
            <p>使用更复杂的试探波函数，包括Jastrow因子、反对称化等，提高变分能量的精度。</p>
          </div>
          
          <div class="improvement-card">
            <h3>Gutzwiller-RVB态</h3>
            <p>结合共振价键(RVB)态的概念，更好地描述量子自旋液体和高温超导体的性质。</p>
          </div>
          
          <div class="improvement-card">
            <h3>时间依赖Gutzwiller</h3>
            <p>扩展到非平衡态，研究强关联系统在外场驱动下的动力学演化。</p>
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
              <li>神经网络波函数的Gutzwiller形式</li>
              <li>深度学习优化变分参数</li>
              <li>自动微分加速梯度计算</li>
              <li>强化学习探索参数空间</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>量子计算应用</h3>
            <ul class="quantum-list">
              <li>变分量子本征求解器(VQE)中的应用</li>
              <li>量子近似优化算法(QAOA)的扩展</li>
              <li>量子模拟器上的实现</li>
              <li>噪声中等规模量子(NISQ)设备的适配</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>多尺度方法</h3>
            <ul class="multiscale-list">
              <li>与密度泛函理论的结合</li>
              <li>嵌入方法处理局域强关联</li>
              <li>多轨道系统的扩展</li>
              <li>长程相互作用的处理</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 总结与展望 -->
      <section class="summary-section">
        <h2>总结与展望</h2>
        <div class="summary-content">
          <p>Gutzwiller近似作为处理强关联电子系统的重要理论工具，在凝聚态物理学中发挥着重要作用。它以简洁的数学形式捕捉了电子关联效应的本质，为理解Mott转变、磁性相变等复杂现象提供了有力的理论框架。</p>
          
          <p>尽管存在平均场近似的局限性，但Gutzwiller方法的物理直观性和计算效率使其在强关联材料的研究中仍然具有重要价值。特别是在与现代计算技术（如机器学习、量子计算）结合后，该方法展现出新的发展潜力。</p>
          
          <p>未来的发展方向包括：更精确的变分波函数构造、非平衡态动力学的扩展、多体纠缠的量化描述，以及与实验技术的更紧密结合。这些发展将进一步拓展Gutzwiller近似在量子多体物理研究中的应用范围。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_8',
  mounted() {
    // 添加页面加载动画
    this.animateOnLoad();
  },
  methods: {
    animateOnLoad() {
      const sections = document.querySelectorAll('.gutzwiller-approximation section');
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
.gutzwiller-approximation {
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.parameter-list, .wavefunction-list {
  list-style: none;
  padding: 0;
}

.parameter-list li, .wavefunction-list li {
  background: white;
  margin: 8px 0;
  padding: 12px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.physics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

.math-subsection {
  background: #f8f9fa;
  padding: 25px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.computation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.method-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.method-steps, .technique-list {
  list-style: none;
  padding: 0;
}

.method-steps li, .technique-list li {
  background: rgba(255,255,255,0.8);
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #e67e22;
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

.application-list, .magnetic-list, .optical-list {
  list-style: none;
  padding: 0;
}

.application-list li, .magnetic-list li, .optical-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #1abc9c;
  border-radius: 4px;
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

.improvements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.improvement-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.improvement-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.improvement-card h3 {
  color: white;
  margin-bottom: 15px;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

.ml-list, .quantum-list, .multiscale-list {
  list-style: none;
  padding: 0;
}

.ml-list li, .quantum-list li, .multiscale-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .gutzwiller-approximation {
    padding: 15px;
  }
  
  .main-title {
    font-size: 2.2em;
  }
  
  .features-grid, .physics-grid, .computation-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 20px;
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
  
  .improvements-grid, .modern-grid {
    grid-template-columns: 1fr;
  }
}

/* 打印样式 */
@media print {
  .gutzwiller-approximation {
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
  
  .physics-card, .improvement-card {
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

.feature-card, .physics-card, .method-card, .application-card, .improvement-card, .development-card {
  animation: fadeInUp 0.6s ease forwards;
}
</style>