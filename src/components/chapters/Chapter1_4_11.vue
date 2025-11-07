<template>
  <div class="tensor-network">
    <div class="header-section">
      <h1 class="main-title">张量网络 (Tensor Network)</h1>
      <p class="subtitle">量子多体系统的现代表示与计算框架</p>
    </div>

    <div class="content-container">
      <!-- 定义与核心概念 -->
      <section class="definition-section">
        <h2>定义与核心概念</h2>
        <div class="definition-card">
          <h3>基本定义</h3>
          <p>张量网络是一种用于表示和操作高维张量的图形化方法，通过将复杂的多体量子态分解为相互连接的低阶张量的网络结构。每个张量对应网络中的一个节点，张量的指标对应连接节点的边。这种表示方法不仅提供了直观的几何图像，更重要的是能够高效地处理量子多体系统中的纠缠结构。</p>
        </div>
        
        <div class="concepts-grid">
          <div class="concept-card">
            <h4>张量分解</h4>
            <p>将高阶张量分解为低阶张量的乘积，降低存储和计算复杂度</p>
          </div>
          <div class="concept-card">
            <h4>纠缠结构</h4>
            <p>通过网络拓扑结构直观地表示量子态的纠缠模式</p>
          </div>
          <div class="concept-card">
            <h4>图形表示</h4>
            <p>用图论语言描述张量运算，使复杂计算变得直观</p>
          </div>
          <div class="concept-card">
            <h4>维度约简</h4>
            <p>通过控制键维度实现对量子态的有效近似</p>
          </div>
        </div>
      </section>

      <!-- 基本张量网络结构 -->
      <section class="structures-section">
        <h2>基本张量网络结构</h2>
        
        <div class="structures-grid">
          <div class="structure-card">
            <h3>矩阵乘积态 (MPS)</h3>
            <div class="structure-content">
              <p>一维系统的标准张量网络表示，每个物理位点对应一个三阶张量。</p>
              <div class="equation-box">
                <p>|ψ⟩ = Σ{σ} Tr(A¹[σ₁]A²[σ₂]...Aᴸ[σₗ])|σ₁σ₂...σₗ⟩</p>
              </div>
              <ul class="structure-features">
                <li><strong>键维度</strong>: 控制纠缠程度的关键参数</li>
                <li><strong>标准形式</strong>: 左标准、右标准、混合标准</li>
                <li><strong>DMRG联系</strong>: DMRG的现代理论基础</li>
                <li><strong>高效算法</strong>: 线性复杂度的基态搜索</li>
              </ul>
            </div>
          </div>
          
          <div class="structure-card">
            <h3>矩阵乘积算符 (MPO)</h3>
            <div class="structure-content">
              <p>一维算符的张量网络表示，用于高效地表示局域和长程相互作用。</p>
              <div class="equation-box">
                <p>Ĥ = Σ{σ,σ'} Tr(W¹[σ₁,σ'₁]W²[σ₂,σ'₂]...Wᴸ[σₗ,σ'ₗ])|σ₁...σₗ⟩⟨σ'₁...σ'ₗ|</p>
              </div>
              <ul class="structure-features">
                <li><strong>哈密顿量表示</strong>: 复杂相互作用的紧凑表示</li>
                <li><strong>时间演化</strong>: 量子门和演化算符</li>
                <li><strong>压缩技术</strong>: MPO压缩和优化</li>
                <li><strong>算符运算</strong>: 高效的算符乘法</li>
              </ul>
            </div>
          </div>
          
          <div class="structure-card">
            <h3>投影纠缠对态 (PEPS)</h3>
            <div class="structure-content">
              <p>二维系统的张量网络表示，每个格点对应一个五阶张量。</p>
              <div class="equation-box">
                <p>|ψ⟩ = Σ{σ} Tr(∏ᵢⱼ Tᵢⱼ[σᵢⱼ])|{σᵢⱼ}⟩</p>
              </div>
              <ul class="structure-features">
                <li><strong>二维扩展</strong>: MPS向高维的自然推广</li>
                <li><strong>面积定律</strong>: 满足纠缠面积定律</li>
                <li><strong>计算挑战</strong>: 收缩复杂度指数增长</li>
                <li><strong>近似方法</strong>: 各种收缩近似算法</li>
              </ul>
            </div>
          </div>
          
          <div class="structure-card">
            <h3>多尺度纠缠重整化 (MERA)</h3>
            <div class="structure-content">
              <p>具有分层结构的张量网络，特别适合描述临界系统。</p>
              <div class="equation-box">
                <p>|ψ⟩ = (∏ₗ Uₗ Wₗ)|Ω⟩</p>
              </div>
              <ul class="structure-features">
                <li><strong>分层结构</strong>: 多尺度的纠缠描述</li>
                <li><strong>临界系统</strong>: 对数纠缠的有效处理</li>
                <li><strong>全息对偶</strong>: AdS/CFT对应关系</li>
                <li><strong>重整化群</strong>: 实空间重整化群实现</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 张量网络算法 -->
      <section class="algorithms-section">
        <h2>张量网络算法</h2>
        
        <div class="algorithms-container">
          <div class="algorithm-category">
            <h3>基态搜索算法</h3>
            <div class="algorithm-grid">
              <div class="algorithm-card">
                <h4>变分优化</h4>
                <ul class="algorithm-features">
                  <li>单位点更新 (Single-site update)</li>
                  <li>双位点更新 (Two-site update)</li>
                  <li>梯度优化方法</li>
                  <li>共轭梯度法</li>
                </ul>
              </div>
              <div class="algorithm-card">
                <h4>虚时演化</h4>
                <ul class="algorithm-features">
                  <li>Trotter分解</li>
                  <li>Krylov子空间方法</li>
                  <li>时间步长优化</li>
                  <li>误差控制策略</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="algorithm-category">
            <h3>实时动力学</h3>
            <div class="algorithm-grid">
              <div class="algorithm-card">
                <h4>时间演化块抽取 (TEBD)</h4>
                <ul class="algorithm-features">
                  <li>Suzuki-Trotter分解</li>
                  <li>奇偶分解策略</li>
                  <li>自适应时间步长</li>
                  <li>纠缠增长控制</li>
                </ul>
              </div>
              <div class="algorithm-card">
                <h4>时间依赖变分原理 (TDVP)</h4>
                <ul class="algorithm-features">
                  <li>切空间投影</li>
                  <li>规范条件</li>
                  <li>高阶积分器</li>
                  <li>能量守恒</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="algorithm-category">
            <h3>有限温度方法</h3>
            <div class="algorithm-grid">
              <div class="algorithm-card">
                <h4>纯化方法</h4>
                <ul class="algorithm-features">
                  <li>辅助系统引入</li>
                  <li>热态制备</li>
                  <li>温度扫描</li>
                  <li>相变研究</li>
                </ul>
              </div>
              <div class="algorithm-card">
                <h4>最小化纠缠典型热态 (METTS)</h4>
                <ul class="algorithm-features">
                  <li>随机采样</li>
                  <li>纠缠最小化</li>
                  <li>热力学量计算</li>
                  <li>统计误差估计</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 张量网络收缩 -->
      <section class="contraction-section">
        <h2>张量网络收缩</h2>
        
        <div class="contraction-content">
          <div class="contraction-theory">
            <h3>收缩复杂度理论</h3>
            <p>张量网络的收缩是计算物理量的核心步骤，其复杂度与网络的拓扑结构密切相关：</p>
            <ul class="complexity-list">
              <li><strong>树状网络</strong>: 多项式复杂度，可精确收缩</li>
              <li><strong>环状网络</strong>: 指数复杂度，需要近似方法</li>
              <li><strong>二维网络</strong>: #P-hard问题，计算困难</li>
              <li><strong>三维及以上</strong>: 极其困难，需要特殊技巧</li>
            </ul>
          </div>
          
          <div class="contraction-methods">
            <h3>收缩方法</h3>
            <div class="methods-grid">
              <div class="method-card">
                <h4>精确收缩</h4>
                <ul class="method-features">
                  <li>树分解算法</li>
                  <li>动态规划</li>
                  <li>图着色方法</li>
                  <li>最优收缩序列</li>
                </ul>
              </div>
              <div class="method-card">
                <h4>近似收缩</h4>
                <ul class="method-features">
                  <li>边界MPS方法</li>
                  <li>角转移矩阵</li>
                  <li>张量重整化群</li>
                  <li>蒙特卡罗采样</li>
                </ul>
              </div>
              <div class="method-card">
                <h4>优化策略</h4>
                <ul class="method-features">
                  <li>收缩路径优化</li>
                  <li>中间张量压缩</li>
                  <li>并行化策略</li>
                  <li>内存管理</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="applications-section">
        <h2>物理应用</h2>
        
        <div class="applications-grid">
          <div class="application-domain">
            <h3>凝聚态物理</h3>
            <div class="domain-applications">
              <div class="app-card">
                <h4>强关联系统</h4>
                <ul class="app-list">
                  <li>Hubbard模型研究</li>
                  <li>高温超导机制</li>
                  <li>Mott绝缘体转变</li>
                  <li>量子自旋液体</li>
                </ul>
              </div>
              <div class="app-card">
                <h4>拓扑物态</h4>
                <ul class="app-list">
                  <li>拓扑绝缘体</li>
                  <li>拓扑超导体</li>
                  <li>分数量子霍尔效应</li>
                  <li>Majorana费米子</li>
                </ul>
              </div>
              <div class="app-card">
                <h4>量子相变</h4>
                <ul class="app-list">
                  <li>临界现象研究</li>
                  <li>标度行为</li>
                  <li>普适类确定</li>
                  <li>有限尺寸效应</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="application-domain">
            <h3>量子信息</h3>
            <div class="domain-applications">
              <div class="app-card">
                <h4>量子纠缠</h4>
                <ul class="app-list">
                  <li>纠缠熵计算</li>
                  <li>纠缠谱分析</li>
                  <li>纠缠传播</li>
                  <li>纠缠相变</li>
                </ul>
              </div>
              <div class="app-card">
                <h4>量子计算</h4>
                <ul class="app-list">
                  <li>量子电路模拟</li>
                  <li>量子纠错码</li>
                  <li>变分量子算法</li>
                  <li>量子优势验证</li>
                </ul>
              </div>
              <div class="app-card">
                <h4>量子通信</h4>
                <ul class="app-list">
                  <li>量子密钥分发</li>
                  <li>量子隐形传态</li>
                  <li>量子网络</li>
                  <li>量子中继器</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="application-domain">
            <h3>量子化学</h3>
            <div class="domain-applications">
              <div class="app-card">
                <h4>分子电子结构</h4>
                <ul class="app-list">
                  <li>强关联分子</li>
                  <li>化学键分析</li>
                  <li>激发态计算</li>
                  <li>光谱性质</li>
                </ul>
              </div>
              <div class="app-card">
                <h4>催化反应</h4>
                <ul class="app-list">
                  <li>反应路径</li>
                  <li>过渡态</li>
                  <li>表面化学</li>
                  <li>酶催化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 现代发展 -->
      <section class="modern-developments-section">
        <h2>现代发展</h2>
        
        <div class="developments-grid">
          <div class="development-area">
            <h3>机器学习融合</h3>
            <div class="development-content">
              <div class="ml-integration">
                <h4>神经网络张量网络</h4>
                <p>将深度学习与张量网络相结合，利用神经网络的表达能力增强张量网络的描述能力。</p>
                <ul class="integration-features">
                  <li>神经网络参数化张量</li>
                  <li>自动微分优化</li>
                  <li>深度张量网络</li>
                  <li>生成模型应用</li>
                </ul>
              </div>
              <div class="ml-optimization">
                <h4>智能优化算法</h4>
                <p>利用机器学习技术优化张量网络的结构和参数，提高计算效率。</p>
                <ul class="optimization-features">
                  <li>强化学习优化</li>
                  <li>遗传算法设计</li>
                  <li>自适应网络结构</li>
                  <li>智能收缩策略</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="development-area">
            <h3>量子计算应用</h3>
            <div class="development-content">
              <div class="quantum-simulation">
                <h4>变分量子本征求解器 (VQE)</h4>
                <p>在量子计算机上实现张量网络态的制备和优化。</p>
                <ul class="vqe-features">
                  <li>量子电路参数化</li>
                  <li>混合经典-量子算法</li>
                  <li>噪声鲁棒性</li>
                  <li>量子优势探索</li>
                </ul>
              </div>
              <div class="quantum-advantage">
                <h4>量子张量网络</h4>
                <p>利用量子计算的并行性加速张量网络计算。</p>
                <ul class="advantage-features">
                  <li>量子并行收缩</li>
                  <li>量子纠缠制备</li>
                  <li>量子态层析</li>
                  <li>量子模拟器</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="development-area">
            <h3>高性能计算</h3>
            <div class="development-content">
              <div class="hpc-optimization">
                <h4>并行化策略</h4>
                <p>针对大规模张量网络计算的并行化和分布式实现。</p>
                <ul class="hpc-features">
                  <li>MPI并行实现</li>
                  <li>GPU加速计算</li>
                  <li>分布式内存管理</li>
                  <li>负载均衡优化</li>
                </ul>
              </div>
              <div class="scalability">
                <h4>可扩展性</h4>
                <p>面向超大规模系统的张量网络算法设计。</p>
                <ul class="scalability-features">
                  <li>弱扩展性优化</li>
                  <li>强扩展性分析</li>
                  <li>内存层次优化</li>
                  <li>通信开销最小化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 软件工具 -->
      <section class="software-section">
        <h2>软件工具</h2>
        
        <div class="software-grid">
          <div class="software-category">
            <h3>通用张量库</h3>
            <div class="software-tools">
              <div class="tool-card">
                <h4>ITensor</h4>
                <p>C++/Julia实现的智能张量库，提供直观的张量网络编程接口。</p>
                <ul class="tool-features">
                  <li>智能索引系统</li>
                  <li>自动对称性处理</li>
                  <li>丰富的算法库</li>
                  <li>高性能实现</li>
                </ul>
              </div>
              <div class="tool-card">
                <h4>TeNPy</h4>
                <p>Python实现的张量网络库，专注于一维系统的DMRG计算。</p>
                <ul class="tool-features">
                  <li>教育友好接口</li>
                  <li>模块化设计</li>
                  <li>丰富的模型库</li>
                  <li>可视化工具</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="software-category">
            <h3>专业化工具</h3>
            <div class="software-tools">
              <div class="tool-card">
                <h4>TensorNetwork</h4>
                <p>Google开发的TensorFlow后端张量网络库。</p>
                <ul class="tool-features">
                  <li>TensorFlow集成</li>
                  <li>自动微分</li>
                  <li>GPU加速</li>
                  <li>机器学习友好</li>
                </ul>
              </div>
              <div class="tool-card">
                <h4>Uni10</h4>
                <p>台湾大学开发的统一张量网络库。</p>
                <ul class="tool-features">
                  <li>统一接口设计</li>
                  <li>多语言支持</li>
                  <li>对称性优化</li>
                  <li>并行计算</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="software-category">
            <h3>量子计算平台</h3>
            <div class="software-tools">
              <div class="tool-card">
                <h4>Qiskit</h4>
                <p>IBM的量子计算平台，支持张量网络模拟。</p>
                <ul class="tool-features">
                  <li>量子电路设计</li>
                  <li>噪声模拟</li>
                  <li>变分算法</li>
                  <li>云端计算</li>
                </ul>
              </div>
              <div class="tool-card">
                <h4>Cirq</h4>
                <p>Google的量子计算框架，支持NISQ算法。</p>
                <ul class="tool-features">
                  <li>量子门操作</li>
                  <li>噪声建模</li>
                  <li>优化编译</li>
                  <li>硬件接口</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 挑战与前景 -->
      <section class="challenges-section">
        <h2>挑战与前景</h2>
        
        <div class="challenges-content">
          <div class="current-challenges">
            <h3>当前挑战</h3>
            <div class="challenges-grid">
              <div class="challenge-card">
                <h4>计算复杂度</h4>
                <ul class="challenge-list">
                  <li>高维系统收缩困难</li>
                  <li>纠缠增长限制</li>
                  <li>临界系统处理</li>
                  <li>长程相互作用</li>
                </ul>
              </div>
              <div class="challenge-card">
                <h4>算法局限</h4>
                <ul class="challenge-list">
                  <li>局域极小问题</li>
                  <li>收敛速度慢</li>
                  <li>参数选择困难</li>
                  <li>数值不稳定性</li>
                </ul>
              </div>
              <div class="challenge-card">
                <h4>应用限制</h4>
                <ul class="challenge-list">
                  <li>系统尺寸限制</li>
                  <li>温度范围限制</li>
                  <li>动力学时间限制</li>
                  <li>精度与效率平衡</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="future-prospects">
            <h3>未来前景</h3>
            <div class="prospects-grid">
              <div class="prospect-card">
                <h4>理论突破</h4>
                <ul class="prospect-list">
                  <li>新型网络结构设计</li>
                  <li>纠缠理论深化</li>
                  <li>量子信息理论融合</li>
                  <li>拓扑量子计算</li>
                </ul>
              </div>
              <div class="prospect-card">
                <h4>算法创新</h4>
                <ul class="prospect-list">
                  <li>智能优化算法</li>
                  <li>自适应网络结构</li>
                  <li>多尺度方法</li>
                  <li>量子-经典混合算法</li>
                </ul>
              </div>
              <div class="prospect-card">
                <h4>技术融合</h4>
                <ul class="prospect-list">
                  <li>人工智能集成</li>
                  <li>量子计算应用</li>
                  <li>高性能计算优化</li>
                  <li>云计算平台</li>
                </ul>
              </div>
              <div class="prospect-card">
                <h4>应用拓展</h4>
                <ul class="prospect-list">
                  <li>材料设计</li>
                  <li>药物发现</li>
                  <li>金融建模</li>
                  <li>人工智能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 总结与展望 -->
      <section class="summary-section">
        <h2>总结与展望</h2>
        <div class="summary-content">
          <p>张量网络作为现代量子多体理论的核心工具，为我们理解和计算复杂量子系统提供了强大的理论框架和计算方法。从最初的DMRG算法发展到今天的多样化张量网络结构，这一领域经历了从数值技巧到理论体系的深刻转变。</p>
          
          <p>张量网络的成功在于其对量子纠缠结构的精确刻画。通过将复杂的多体波函数分解为相互连接的张量网络，我们不仅能够高效地存储和操作量子态，更重要的是获得了对量子纠缠本质的深刻理解。这种基于纠缠的观点已经成为现代量子物理的重要组成部分。</p>
          
          <p>当前，张量网络正在经历新的发展阶段。机器学习技术的融入为张量网络带来了新的优化方法和表示能力；量子计算的兴起为张量网络提供了新的实现平台；高性能计算的发展使得大规模张量网络计算成为可能。这些技术的融合正在推动张量网络向更高维度、更大规模、更复杂系统的方向发展。</p>
          
          <div class="future-vision">
            <h3>未来愿景</h3>
            <p>展望未来，张量网络将在以下几个方向发挥重要作用：</p>
            <ul class="vision-list">
              <li><strong>量子材料设计</strong>: 通过精确的多体计算指导新材料的发现和设计</li>
              <li><strong>量子技术应用</strong>: 为量子计算、量子通信、量子传感提供理论支撑</li>
              <li><strong>交叉学科融合</strong>: 在生物物理、化学、材料科学等领域发挥作用</li>
              <li><strong>人工智能集成</strong>: 与机器学习深度融合，开发智能化的量子算法</li>
            </ul>
          </div>
          
          <div class="scientific-impact">
            <h3>科学意义</h3>
            <p>张量网络不仅是一个计算工具，更是理解量子世界的新语言。它为我们提供了一种几何化的量子态描述方式，使得抽象的量子概念变得直观可视。通过张量网络，我们能够系统地研究量子纠缠、量子相变、拓扑序等现代物理学的核心概念，为量子科学技术的发展奠定坚实的理论基础。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_11',
  mounted() {
    // 添加页面加载动画
    this.animateOnLoad();
  },
  methods: {
    animateOnLoad() {
      const sections = document.querySelectorAll('.tensor-network section');
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
.tensor-network {
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

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.concept-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.structures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.structure-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.structure-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.structure-card h3 {
  color: white;
  margin-bottom: 15px;
}

.structure-content {
  margin-top: 15px;
}

.equation-box {
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.3);
}

.structure-features {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.structure-features li {
  background: rgba(255,255,255,0.2);
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
  border-left: 4px solid rgba(255,255,255,0.5);
}

.algorithms-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.algorithm-category {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #1abc9c;
}

.algorithm-category h3 {
  color: #16a085;
  margin-bottom: 20px;
  text-align: center;
}

.algorithm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.algorithm-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.algorithm-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.algorithm-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.algorithm-features {
  list-style: none;
  padding: 0;
}

.algorithm-features li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #3498db;
  border-radius: 4px;
}

.contraction-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.contraction-theory {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
}

.complexity-list {
  list-style: none;
  padding: 0;
}

.complexity-list li {
  background: rgba(255,255,255,0.8);
  margin: 10px 0;
  padding: 12px;
  border-left: 4px solid #e67e22;
  border-radius: 4px;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.method-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #ecf0f1;
  transition: all 0.3s ease;
}

.method-card:hover {
  border-color: #3498db;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(52, 152, 219, 0.2);
}

.method-features {
  list-style: none;
  padding: 0;
}

.method-features li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
}

.applications-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.application-domain {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #e74c3c;
}

.application-domain h3 {
  color: #c0392b;
  margin-bottom: 20px;
  text-align: center;
}

.domain-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.app-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.app-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.app-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.app-list {
  list-style: none;
  padding: 0;
}

.app-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #1abc9c;
  border-radius: 4px;
}

.developments-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.development-area {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 25px;
  border-radius: 12px;
}

.development-area h3 {
  color: #16a085;
  margin-bottom: 20px;
  text-align: center;
}

.development-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.ml-integration, .ml-optimization, .quantum-simulation, .quantum-advantage, .hpc-optimization, .scalability {
  background: rgba(255,255,255,0.8);
  padding: 20px;
  border-radius: 8px;
}

.ml-integration h4, .ml-optimization h4, .quantum-simulation h4, .quantum-advantage h4, .hpc-optimization h4, .scalability h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.integration-features, .optimization-features, .vqe-features, .advantage-features, .hpc-features, .scalability-features {
  list-style: none;
  padding: 0;
}

.integration-features li, .optimization-features li, .vqe-features li, .advantage-features li, .hpc-features li, .scalability-features li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #27ae60;
  border-radius: 4px;
}

.software-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.software-category {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #9b59b6;
}

.software-category h3 {
  color: #8e44ad;
  margin-bottom: 20px;
  text-align: center;
}

.software-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.tool-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.tool-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.tool-features {
  list-style: none;
  padding: 0;
}

.tool-features li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #9b59b6;
  border-radius: 4px;
}

.challenges-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.current-challenges, .future-prospects {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
}

.current-challenges h3 {
  color: #e74c3c;
  margin-bottom: 20px;
  text-align: center;
}

.future-prospects h3 {
  color: #27ae60;
  margin-bottom: 20px;
  text-align: center;
}

.challenges-grid, .prospects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.challenge-card, .prospect-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.challenge-card:hover, .prospect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.challenge-card h4 {
  color: #c0392b;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.prospect-card h4 {
  color: #229954;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.challenge-list, .prospect-list {
  list-style: none;
  padding: 0;
}

.challenge-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #e74c3c;
  border-radius: 4px;
}

.prospect-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 8px;
  border-left: 4px solid #27ae60;
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

.future-vision, .scientific-impact {
  margin-top: 30px;
  padding: 25px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

.future-vision h3, .scientific-impact h3 {
  color: white;
  margin-bottom: 15px;
}

.vision-list {
  list-style: none;
  padding: 0;
}

.vision-list li {
  background: rgba(255,255,255,0.2);
  margin: 10px 0;
  padding: 12px;
  border-left: 4px solid rgba(255,255,255,0.5);
  border-radius: 4px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .tensor-network {
    padding: 15px;
  }
  
  .main-title {
    font-size: 2.2em;
  }
  
  .concepts-grid, .structures-grid, .algorithm-grid, .methods-grid, .domain-applications, .software-tools, .challenges-grid, .prospects-grid {
    grid-template-columns: 1fr;
  }
  
  .contraction-content, .development-content {
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
}

/* 打印样式 */
@media print {
  .tensor-network {
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
  
  .structure-card, .development-area {
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

.concept-card, .structure-card, .algorithm-card, .method-card, .app-card, .tool-card, .challenge-card, .prospect-card {
  animation: fadeInUp 0.6s ease forwards;
}
</style>