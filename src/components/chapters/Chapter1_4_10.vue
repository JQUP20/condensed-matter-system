<template>
  <div class="dmrg-theory">
    <div class="header-section">
      <h1 class="main-title">密度矩阵重整化群 (DMRG)</h1>
      <p class="subtitle">一维强关联量子多体系统的精确数值方法</p>
    </div>

    <div class="content-container">
      <!-- 定义与核心特征 -->
      <section class="definition-section">
        <h2>定义与核心特征</h2>
        <div class="definition-card">
          <h3>基本定义</h3>
          <p>密度矩阵重整化群(Density Matrix Renormalization Group, DMRG)是由Steven White在1992年提出的一种数值方法，专门用于研究一维强关联量子多体系统。该方法通过保留最重要的量子态来系统地截断希尔伯特空间，从而能够精确计算大型一维系统的基态和低激发态性质。</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <h4>精确性</h4>
            <p>在一维系统中能够达到机器精度，是目前最精确的一维量子多体数值方法</p>
          </div>
          <div class="feature-card">
            <h4>系统性</h4>
            <p>通过控制保留态数目，可以系统地提高计算精度，误差可控</p>
          </div>
          <div class="feature-card">
            <h4>高效性</h4>
            <p>计算复杂度随系统尺寸线性或多项式增长，远优于精确对角化的指数增长</p>
          </div>
          <div class="feature-card">
            <h4>普适性</h4>
            <p>适用于各种一维量子多体模型，包括自旋系统、费米子系统等</p>
          </div>
        </div>
      </section>

      <!-- 理论基础 -->
      <section class="theory-section">
        <h2>理论基础</h2>
        
        <div class="theory-subsection">
          <h3>重整化群思想</h3>
          <p>DMRG的核心思想来源于Wilson的数值重整化群，但关键创新在于使用密度矩阵来选择保留的基态：</p>
          <ul class="concept-list">
            <li><strong>系统分割</strong>: 将系统分为左块、右块和中间的活跃区域</li>
            <li><strong>密度矩阵构造</strong>: 通过约化密度矩阵确定最重要的基态</li>
            <li><strong>基态截断</strong>: 保留密度矩阵最大本征值对应的基态</li>
            <li><strong>迭代优化</strong>: 通过扫描过程不断优化波函数</li>
          </ul>
        </div>

        <div class="theory-subsection">
          <h3>密度矩阵方法</h3>
          <p>DMRG的关键是构造和对角化约化密度矩阵：</p>
          <div class="equation-box">
            <p>ρₐ = Trᵦ|ψ⟩⟨ψ|</p>
          </div>
          <div class="equation-box">
            <p>ρₐ = Σᵢ wᵢ|φᵢᴬ⟩⟨φᵢᴬ|</p>
          </div>
          <ul class="equation-list">
            <li><strong>ρₐ</strong>: 子系统A的约化密度矩阵</li>
            <li><strong>|ψ⟩</strong>: 整个系统的波函数</li>
            <li><strong>wᵢ</strong>: 密度矩阵的本征值（权重）</li>
            <li><strong>|φᵢᴬ⟩</strong>: 子系统A的本征态</li>
          </ul>
        </div>

        <div class="theory-subsection">
          <h3>截断准则</h3>
          <p>DMRG通过截断密度矩阵的小本征值来控制计算精度：</p>
          <div class="equation-box">
            <p>ε = Σᵢ₌ₘ₊₁ᴺ wᵢ</p>
          </div>
          <p>其中ε是截断误差，m是保留的态数目，通常要求ε < 10⁻⁸以保证高精度。</p>
        </div>
      </section>

      <!-- 算法流程 -->
      <section class="algorithm-section">
        <h2>算法流程</h2>
        
        <div class="algorithm-container">
          <div class="phase-card">
            <h3>无限系统算法 (iDMRG)</h3>
            <div class="algorithm-steps">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>初始化</h4>
                  <p>从小系统开始，通常是2-4个格点的精确解</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>系统增长</h4>
                  <p>在系统两端各添加一个格点，形成更大的系统</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>对角化</h4>
                  <p>在扩展的希尔伯特空间中求解基态波函数</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>密度矩阵构造</h4>
                  <p>计算左右子系统的约化密度矩阵</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4>基态截断</h4>
                  <p>保留密度矩阵最大的m个本征值对应的基态</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="phase-card">
            <h3>有限系统算法 (fDMRG)</h3>
            <div class="algorithm-steps">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>初始配置</h4>
                  <p>使用iDMRG的结果作为初始波函数</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>扫描优化</h4>
                  <p>在固定系统尺寸下，移动活跃区域进行扫描</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>局域优化</h4>
                  <p>在每个位置优化活跃区域的波函数</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>收敛检查</h4>
                  <p>检查能量和波函数的收敛性</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4>多次扫描</h4>
                  <p>重复扫描直到达到所需精度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 现代发展 -->
      <section class="modern-section">
        <h2>现代发展</h2>
        
        <div class="modern-grid">
          <div class="development-card">
            <h3>矩阵乘积态 (MPS)</h3>
            <p>DMRG的现代理解基于矩阵乘积态表示，这为算法的改进和扩展提供了理论基础。</p>
            <div class="equation-box">
              <p>|ψ⟩ = Σ{σ} Tr(A¹[σ₁]A²[σ₂]...Aᴸ[σₗ])|σ₁σ₂...σₗ⟩</p>
            </div>
            <ul class="mps-features">
              <li>变分优化更加直观</li>
              <li>纠缠结构清晰可见</li>
              <li>算法实现更加高效</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>时间演化DMRG (t-DMRG)</h3>
            <p>扩展到非平衡态动力学，研究量子系统的时间演化过程。</p>
            <ul class="time-evolution-features">
              <li>实时动力学模拟</li>
              <li>量子淬火过程</li>
              <li>非平衡稳态</li>
              <li>输运性质计算</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>有限温度DMRG</h3>
            <p>通过辅助场或纯化方法扩展到有限温度，研究热力学性质。</p>
            <ul class="finite-temp-features">
              <li>热力学量计算</li>
              <li>相变温度确定</li>
              <li>比热和磁化率</li>
              <li>熵和自由能</li>
            </ul>
          </div>
          
          <div class="development-card">
            <h3>二维DMRG</h3>
            <p>通过柱状几何或树张量网络扩展到二维系统。</p>
            <ul class="2d-features">
              <li>柱状几何处理</li>
              <li>PEPS表示</li>
              <li>拓扑序研究</li>
              <li>量子相变</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="applications-section">
        <h2>物理应用</h2>
        
        <div class="applications-grid">
          <div class="application-card">
            <h3>自旋系统</h3>
            <ul class="spin-applications">
              <li><strong>Heisenberg模型</strong>: 反铁磁链的基态性质</li>
              <li><strong>自旋梯子</strong>: 能隙行为和相图</li>
              <li><strong>阻挫自旋系统</strong>: 量子自旋液体候选</li>
              <li><strong>Kitaev模型</strong>: 拓扑量子计算</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>费米子系统</h3>
            <ul class="fermion-applications">
              <li><strong>Hubbard模型</strong>: 强关联电子系统</li>
              <li><strong>t-J模型</strong>: 高温超导机制</li>
              <li><strong>Anderson杂质模型</strong>: Kondo效应</li>
              <li><strong>拓扑超导体</strong>: Majorana费米子</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>玻色子系统</h3>
            <ul class="boson-applications">
              <li><strong>Bose-Hubbard模型</strong>: 超流-绝缘体转变</li>
              <li><strong>自旋-玻色子模型</strong>: 量子磁性</li>
              <li><strong>Holstein模型</strong>: 电子-声子耦合</li>
              <li><strong>光晶格系统</strong>: 冷原子物理</li>
            </ul>
          </div>
          
          <div class="application-card">
            <h3>量子化学</h3>
            <ul class="chemistry-applications">
              <li><strong>分子基态</strong>: 强关联分子系统</li>
              <li><strong>化学反应</strong>: 反应路径计算</li>
              <li><strong>激发态</strong>: 光谱性质预测</li>
              <li><strong>催化过程</strong>: 表面化学反应</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 计算技巧 -->
      <section class="techniques-section">
        <h2>计算技巧</h2>
        
        <div class="techniques-grid">
          <div class="technique-card">
            <h3>对称性利用</h3>
            <ul class="symmetry-list">
              <li><strong>U(1)对称性</strong>: 粒子数守恒</li>
              <li><strong>SU(2)对称性</strong>: 自旋旋转不变性</li>
              <li><strong>空间对称性</strong>: 平移、反射对称</li>
              <li><strong>时间反演</strong>: 实波函数优化</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h3>收敛加速</h3>
            <ul class="acceleration-list">
              <li><strong>预测-校正</strong>: 外推初始猜测</li>
              <li><strong>子空间展开</strong>: Davidson方法</li>
              <li><strong>噪声项</strong>: 避免局域极小</li>
              <li><strong>动态截断</strong>: 自适应保留态数</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h3>内存优化</h3>
            <ul class="memory-list">
              <li><strong>稀疏矩阵</strong>: 利用哈密顿量稀疏性</li>
              <li><strong>块结构</strong>: 对称性分块存储</li>
              <li><strong>磁盘存储</strong>: 大矩阵外存算法</li>
              <li><strong>压缩存储</strong>: 波函数压缩技术</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h3>并行化</h3>
            <ul class="parallel-list">
              <li><strong>矩阵并行</strong>: 大矩阵分布式计算</li>
              <li><strong>对称性并行</strong>: 不同对称扇区并行</li>
              <li><strong>扫描并行</strong>: 多个扫描同时进行</li>
              <li><strong>GPU加速</strong>: 张量运算GPU实现</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 软件实现 -->
      <section class="software-section">
        <h2>软件实现</h2>
        
        <div class="software-grid">
          <div class="software-card">
            <h3>ITensor</h3>
            <p>C++/Julia实现的现代张量网络库，提供高效的DMRG实现。</p>
            <ul class="software-features">
              <li>智能张量索引系统</li>
              <li>自动对称性处理</li>
              <li>MPS/MPO高级接口</li>
              <li>丰富的物理模型库</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>ALPS</h3>
            <p>阿尔卑斯项目的DMRG实现，专注于量子多体系统计算。</p>
            <ul class="software-features">
              <li>标准化输入输出</li>
              <li>多种物理模型</li>
              <li>并行计算支持</li>
              <li>可视化工具</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>TeNPy</h3>
            <p>Python实现的张量网络库，易于使用和扩展。</p>
            <ul class="software-features">
              <li>Python生态集成</li>
              <li>教育友好界面</li>
              <li>灵活的模型定义</li>
              <li>丰富的分析工具</li>
            </ul>
          </div>
          
          <div class="software-card">
            <h3>DMRG++</h3>
            <p>高性能C++实现，专注于大规模计算。</p>
            <ul class="software-features">
              <li>高度优化代码</li>
              <li>大规模并行</li>
              <li>内存高效</li>
              <li>多种求解器</li>
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
              <li><strong>高精度</strong>: 一维系统中可达机器精度</li>
              <li><strong>系统性</strong>: 误差可控，精度可系统提升</li>
              <li><strong>高效性</strong>: 多项式复杂度，适合大系统</li>
              <li><strong>普适性</strong>: 适用于各种一维量子模型</li>
              <li><strong>物理直观</strong>: 基于纠缠结构的理解</li>
              <li><strong>成熟稳定</strong>: 算法成熟，软件完善</li>
            </ul>
          </div>
          
          <div class="cons-card">
            <h3>主要局限</h3>
            <ul class="cons-list">
              <li><strong>维度限制</strong>: 主要适用于一维或准一维系统</li>
              <li><strong>纠缠限制</strong>: 高纠缠态计算困难</li>
              <li><strong>临界系统</strong>: 临界点附近收敛慢</li>
              <li><strong>长程相互作用</strong>: 处理长程相互作用困难</li>
              <li><strong>有限温度</strong>: 高温计算挑战大</li>
              <li><strong>动力学</strong>: 长时间演化精度下降</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 未来发展 -->
      <section class="future-section">
        <h2>未来发展</h2>
        
        <div class="future-grid">
          <div class="future-card">
            <h3>算法改进</h3>
            <ul class="algorithm-improvements">
              <li><strong>自适应算法</strong>: 智能选择保留态数</li>
              <li><strong>机器学习</strong>: AI辅助波函数优化</li>
              <li><strong>量子启发</strong>: 量子算法思想融入</li>
              <li><strong>多尺度方法</strong>: 结合粗粒化技术</li>
            </ul>
          </div>
          
          <div class="future-card">
            <h3>应用拓展</h3>
            <ul class="application-extensions">
              <li><strong>高维系统</strong>: 二维三维系统处理</li>
              <li><strong>开放系统</strong>: 耗散量子系统</li>
              <li><strong>实时动力学</strong>: 长时间演化</li>
              <li><strong>量子器件</strong>: 量子计算应用</li>
            </ul>
          </div>
          
          <div class="future-card">
            <h3>技术融合</h3>
            <ul class="technology-fusion">
              <li><strong>量子计算</strong>: 变分量子算法</li>
              <li><strong>神经网络</strong>: 深度学习表示</li>
              <li><strong>云计算</strong>: 分布式计算</li>
              <li><strong>边缘计算</strong>: 实时处理</li>
            </ul>
          </div>
          
          <div class="future-card">
            <h3>交叉学科</h3>
            <ul class="interdisciplinary">
              <li><strong>量子化学</strong>: 分子电子结构</li>
              <li><strong>材料科学</strong>: 新材料设计</li>
              <li><strong>生物物理</strong>: 蛋白质折叠</li>
              <li><strong>信息科学</strong>: 量子信息处理</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 总结与展望 -->
      <section class="summary-section">
        <h2>总结与展望</h2>
        <div class="summary-content">
          <p>密度矩阵重整化群作为量子多体物理中最成功的数值方法之一，在过去三十年中为一维强关联系统的研究做出了巨大贡献。从最初的启发式算法发展到基于矩阵乘积态的现代理论框架，DMRG不仅在算法上日趋完善，在应用领域也不断拓展。</p>
          
          <p>DMRG的成功源于其对量子纠缠结构的深刻理解。通过保留最重要的纠缠态，DMRG能够用相对较少的参数精确描述复杂的量子多体态。这种基于纠缠的观点不仅为DMRG提供了理论基础，也为整个张量网络方法的发展奠定了基础。</p>
          
          <p>展望未来，DMRG将在以下几个方向继续发展：算法的进一步优化和智能化、向高维系统的扩展、与机器学习和量子计算的结合，以及在新兴交叉学科中的应用。随着计算技术的进步和理论理解的深化，DMRG将继续在量子多体物理研究中发挥重要作用。</p>
          
          <div class="impact-summary">
            <h3>科学影响</h3>
            <p>DMRG不仅是一个计算工具，更是理解量子多体系统的重要理论框架。它揭示了量子纠缠在多体系统中的核心作用，为量子信息理论和凝聚态物理的交叉发展提供了重要桥梁。通过DMRG，我们能够精确研究强关联系统的奇异性质，为新量子材料的发现和量子技术的发展提供理论支撑。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_10',
  mounted() {
    // 添加页面加载动画
    this.animateOnLoad();
  },
  methods: {
    animateOnLoad() {
      const sections = document.querySelectorAll('.dmrg-theory section');
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
.dmrg-theory {
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

.algorithm-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
}

.phase-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.phase-card h3 {
  color: #d35400;
  margin-bottom: 20px;
  text-align: center;
}

.algorithm-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.step-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.step-number {
  background: #3498db;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content h4 {
  margin-bottom: 5px;
  color: #2c3e50;
}

.step-content p {
  margin: 0;
  font-size: 0.9em;
  color: #555;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.development-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.development-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.development-card h3 {
  color: white;
  margin-bottom: 15px;
}

.mps-features, .time-evolution-features, .finite-temp-features, .2d-features {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.mps-features li, .time-evolution-features li, .finite-temp-features li, .2d-features li {
  background: rgba(255,255,255,0.2);
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
  border-left: 4px solid rgba(255,255,255,0.5);
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

.spin-applications, .fermion-applications, .boson-applications, .chemistry-applications {
  list-style: none;
  padding: 0;
}

.spin-applications li, .fermion-applications li, .boson-applications li, .chemistry-applications li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #1abc9c;
  border-radius: 4px;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.technique-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.technique-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(168, 237, 234, 0.4);
}

.symmetry-list, .acceleration-list, .memory-list, .parallel-list {
  list-style: none;
  padding: 0;
}

.symmetry-list li, .acceleration-list li, .memory-list li, .parallel-list li {
  background: rgba(255,255,255,0.8);
  margin: 8px 0;
  padding: 10px;
  border-left: 4px solid #16a085;
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

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.future-card {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #ecf0f1;
  transition: all 0.3s ease;
}

.future-card:hover {
  border-color: #9b59b6;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(155, 89, 182, 0.2);
}

.algorithm-improvements, .application-extensions, .technology-fusion, .interdisciplinary {
  list-style: none;
  padding: 0;
}

.algorithm-improvements li, .application-extensions li, .technology-fusion li, .interdisciplinary li {
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

.impact-summary {
  margin-top: 30px;
  padding: 25px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

.impact-summary h3 {
  color: white;
  margin-bottom: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dmrg-theory {
    padding: 15px;
  }
  
  .main-title {
    font-size: 2.2em;
  }
  
  .features-grid, .modern-grid, .applications-grid, .techniques-grid, .software-grid, .future-grid {
    grid-template-columns: 1fr;
  }
  
  .algorithm-container {
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
  
  .step-item {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

/* 打印样式 */
@media print {
  .dmrg-theory {
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
  
  .development-card, .software-card {
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

.feature-card, .development-card, .application-card, .technique-card, .software-card, .future-card {
  animation: fadeInUp 0.6s ease forwards;
}
</style>