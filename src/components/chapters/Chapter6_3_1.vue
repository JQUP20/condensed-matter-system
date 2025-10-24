<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.3.1 实空间重整化群</h1>
      <p class="chapter-subtitle">从格点模型到连续理论的桥梁</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：40分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解实空间重整化群的基本思想和操作步骤</li>
        <li>掌握格点模型的粗粒化方法</li>
        <li>学习Kadanoff块自旋变换的具体实现</li>
        <li>理解实空间RG的优缺点和适用范围</li>
        <li>掌握一维和二维Ising模型的实空间RG分析</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：从微观到宏观的桥梁</h2>
      <div class="highlight-box">
        <p>
          实空间重整化群是Wilson重整化群理论的最直观实现。
          它直接在<strong>实空间</strong>中进行粗粒化操作，通过逐步消除短程自由度，
          揭示系统的长程行为。这种方法特别适合处理<strong>格点模型</strong>，
          为我们提供了从微观相互作用到宏观临界现象的清晰图像。
          虽然在定量精度上不如动量空间方法，但其物理图像直观，
          是理解重整化群思想的绝佳起点。
        </p>
      </div>
    </section>

    <!-- 基本思想 -->
    <section class="content-section">
      <h2>1. 实空间重整化群的基本思想</h2>
      
      <div class="basic-idea">
        <div class="concept-overview">
          <h4>核心理念</h4>
          <p>
            实空间RG的核心是<strong>粗粒化</strong>（coarse-graining）：
            通过系统地消除短距离的细节，保留长距离的物理，
            从而揭示系统在不同长度尺度下的行为。
          </p>
          
          <div class="coarse-graining-diagram">
            <svg width="600" height="300" viewBox="0 0 600 300">
              <!-- 原始格点 -->
              <g class="original-lattice">
                <text x="100" y="30" text-anchor="middle" font-size="14" font-weight="bold">原始格点</text>
                <!-- 4x4 格点 -->
                <g stroke="#2d3436" stroke-width="1" fill="none">
                  <rect x="50" y="50" width="100" height="100"/>
                  <line x1="75" y1="50" x2="75" y2="150"/>
                  <line x1="100" y1="50" x2="100" y2="150"/>
                  <line x1="125" y1="50" x2="125" y2="150"/>
                  <line x1="50" y1="75" x2="150" y2="75"/>
                  <line x1="50" y1="100" x2="150" y2="100"/>
                  <line x1="50" y1="125" x2="150" y2="125"/>
                </g>
                <!-- 自旋 -->
                <g class="spins">
                  <circle cx="62.5" cy="62.5" r="3" fill="#e74c3c"/>
                  <circle cx="87.5" cy="62.5" r="3" fill="#3498db"/>
                  <circle cx="112.5" cy="62.5" r="3" fill="#e74c3c"/>
                  <circle cx="137.5" cy="62.5" r="3" fill="#3498db"/>
                  <circle cx="62.5" cy="87.5" r="3" fill="#3498db"/>
                  <circle cx="87.5" cy="87.5" r="3" fill="#e74c3c"/>
                  <circle cx="112.5" cy="87.5" r="3" fill="#3498db"/>
                  <circle cx="137.5" cy="87.5" r="3" fill="#e74c3c"/>
                  <circle cx="62.5" cy="112.5" r="3" fill="#e74c3c"/>
                  <circle cx="87.5" cy="112.5" r="3" fill="#3498db"/>
                  <circle cx="112.5" cy="112.5" r="3" fill="#e74c3c"/>
                  <circle cx="137.5" cy="112.5" r="3" fill="#3498db"/>
                  <circle cx="62.5" cy="137.5" r="3" fill="#3498db"/>
                  <circle cx="87.5" cy="137.5" r="3" fill="#e74c3c"/>
                  <circle cx="112.5" cy="137.5" r="3" fill="#3498db"/>
                  <circle cx="137.5" cy="137.5" r="3" fill="#e74c3c"/>
                </g>
              </g>
              
              <!-- 箭头 -->
              <g class="transformation-arrow">
                <path d="M 180 100 L 220 100" stroke="#fd79a8" stroke-width="3" marker-end="url(#arrowhead)"/>
                <text x="200" y="90" text-anchor="middle" font-size="12" fill="#fd79a8">粗粒化</text>
              </g>
              
              <!-- 块自旋 -->
              <g class="block-spins">
                <text x="300" y="30" text-anchor="middle" font-size="14" font-weight="bold">块自旋</text>
                <!-- 2x2 块 -->
                <g stroke="#2d3436" stroke-width="2" fill="none">
                  <rect x="250" y="50" width="100" height="100"/>
                  <line x1="300" y1="50" x2="300" y2="150"/>
                  <line x1="250" y1="100" x2="350" y2="100"/>
                </g>
                <!-- 块自旋标记 -->
                <g class="block-indicators">
                  <rect x="250" y="50" width="50" height="50" fill="#e74c3c" opacity="0.3"/>
                  <rect x="300" y="50" width="50" height="50" fill="#3498db" opacity="0.3"/>
                  <rect x="250" y="100" width="50" height="50" fill="#3498db" opacity="0.3"/>
                  <rect x="300" y="100" width="50" height="50" fill="#e74c3c" opacity="0.3"/>
                </g>
                <!-- 有效自旋 -->
                <circle cx="275" cy="75" r="5" fill="#e74c3c"/>
                <circle cx="325" cy="75" r="5" fill="#3498db"/>
                <circle cx="275" cy="125" r="5" fill="#3498db"/>
                <circle cx="325" cy="125" r="5" fill="#e74c3c"/>
              </g>
              
              <!-- 箭头 -->
              <g class="rescaling-arrow">
                <path d="M 380 100 L 420 100" stroke="#00b894" stroke-width="3" marker-end="url(#arrowhead-green)"/>
                <text x="400" y="90" text-anchor="middle" font-size="12" fill="#00b894">重标度</text>
              </g>
              
              <!-- 重标度后格点 -->
              <g class="rescaled-lattice">
                <text x="500" y="30" text-anchor="middle" font-size="14" font-weight="bold">重标度格点</text>
                <!-- 2x2 格点重标度为4x4 -->
                <g stroke="#2d3436" stroke-width="1" fill="none">
                  <rect x="450" y="50" width="100" height="100"/>
                  <line x1="475" y1="50" x2="475" y2="150"/>
                  <line x1="500" y1="50" x2="500" y2="150"/>
                  <line x1="525" y1="50" x2="525" y2="150"/>
                  <line x1="450" y1="75" x2="550" y2="75"/>
                  <line x1="450" y1="100" x2="550" y2="100"/>
                  <line x1="450" y1="125" x2="550" y2="125"/>
                </g>
                <!-- 重标度后的自旋 -->
                <g class="rescaled-spins">
                  <circle cx="462.5" cy="62.5" r="3" fill="#e74c3c"/>
                  <circle cx="487.5" cy="62.5" r="3" fill="#3498db"/>
                  <circle cx="512.5" cy="62.5" r="3" fill="#e74c3c"/>
                  <circle cx="537.5" cy="62.5" r="3" fill="#3498db"/>
                  <circle cx="462.5" cy="87.5" r="3" fill="#3498db"/>
                  <circle cx="487.5" cy="87.5" r="3" fill="#e74c3c"/>
                  <circle cx="512.5" cy="87.5" r="3" fill="#3498db"/>
                  <circle cx="537.5" cy="87.5" r="3" fill="#e74c3c"/>
                  <circle cx="462.5" cy="112.5" r="3" fill="#e74c3c"/>
                  <circle cx="487.5" cy="112.5" r="3" fill="#3498db"/>
                  <circle cx="512.5" cy="112.5" r="3" fill="#e74c3c"/>
                  <circle cx="537.5" cy="112.5" r="3" fill="#3498db"/>
                  <circle cx="462.5" cy="137.5" r="3" fill="#3498db"/>
                  <circle cx="487.5" cy="137.5" r="3" fill="#e74c3c"/>
                  <circle cx="512.5" cy="137.5" r="3" fill="#3498db"/>
                  <circle cx="537.5" cy="137.5" r="3" fill="#e74c3c"/>
                </g>
              </g>
              
              <!-- 说明文字 -->
              <text x="300" y="200" text-anchor="middle" font-size="12" fill="#666">
                通过粗粒化和重标度，系统回到原始形式但参数发生变化
              </text>
              
              <!-- 参数变化 -->
              <g class="parameter-change">
                <text x="100" y="230" font-size="12">K → K'</text>
                <text x="300" y="230" font-size="12">h → h'</text>
                <text x="500" y="230" font-size="12">...</text>
              </g>
              
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" 
                        refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#fd79a8"/>
                </marker>
                <marker id="arrowhead-green" markerWidth="8" markerHeight="6" 
                        refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#00b894"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="three-steps">
          <h4>三个基本步骤</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <h5>分块（Blocking）</h5>
              <p>
                将原始格点分成若干个块，每个块包含 $b^d$个格点（$b$ 是线性尺度因子，$d$是空间维度）。
              </p><div class="formula-container">$$\text{块大小} = b^d$$</div>
            </div>
            
            <div class="step-card">
              <div class="step-number">2</div>
              <h5>粗粒化（Coarse-graining）</h5>
              <p>
                对每个块内的自由度进行求和或平均， 得到一个有效的"块自旋"或"块变量"。</p> <div class="formula-container">$$S'_I = f(\{S_i\}_{i \in \text{block } I})$$</div>
            </div>
            
            <div class="step-card">
              <div class="step-number">3</div>
              <h5>重标度（Rescaling）</h5>
              <p>
                将新的格点常数重新标度到原始尺度， 使系统回到原始的形式但参数发生变化。</p> <div class="formula-container">$$a' = a/b \rightarrow a$$</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kadanoff块自旋变换 -->
    <section class="content-section">
      <h2>2. Kadanoff块自旋变换</h2>
      
      <div class="kadanoff-transformation">
        <div class="historical-context">
          <h4>历史背景</h4>
          <p>
            1966年，Leo Kadanoff提出了块自旋的概念，这是实空间重整化群的先驱思想。
            他认为在临界点附近，系统的行为由<strong>长程关联</strong>主导，
            短程细节可以通过适当的粗粒化过程消除。
          </p>
        </div>
        
        <div class="block-spin-concept">
          <h4>块自旋的定义</h4><p>考虑一个$d$ 维格点系统，将其分成线性尺寸为 $b$的超立方体块。每个块包含$b^d$个原始自旋，我们定义块自旋为：
          </p>
          
          <div class="definition-methods">
            <div class="method-grid">
              <div class="method-card">
                <h5>多数决定规则</h5><div class="formula-container">$$S'_I = \text{sign}\left(\sum_{i \in I} S_i\right)$$</div>
                <p>块自旋取块内多数自旋的方向</p>
                
                <div class="example-diagram">
                  <svg width="200" height="150" viewBox="0 0 200 150">
                    <!-- 2x2 块 -->
                    <rect x="50" y="50" width="100" height="80" stroke="#333" stroke-width="2" fill="none"/>
                    <line x1="100" y1="50" x2="100" y2="130"/>
                    <line x1="50" y1="90" x2="150" y2="90"/>
                    
                    <!-- 原始自旋 -->
                    <text x="75" y="75" text-anchor="middle" font-size="16" fill="#e74c3c">↑</text>
                    <text x="125" y="75" text-anchor="middle" font-size="16" fill="#3498db">↓</text>
                    <text x="75" y="115" text-anchor="middle" font-size="16" fill="#e74c3c">↑</text>
                    <text x="125" y="115" text-anchor="middle" font-size="16" fill="#e74c3c">↑</text>
                    
                    <!-- 箭头 -->
                    <path d="M 160 90 L 180 90" stroke="#fd79a8" stroke-width="2" marker-end="url(#small-arrow)"/>
                    
                    <!-- 结果 -->
                    <text x="190" y="95" font-size="20" fill="#e74c3c">↑</text>
                    
                    <text x="100" y="20" text-anchor="middle" font-size="12">3↑ + 1↓ → ↑</text>
                    
                    <defs>
                      <marker id="small-arrow" markerWidth="6" markerHeight="4" 
                              refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#fd79a8"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div> <div class="method-card"><h5>平均值规则</h5> <div class="formula-container">$$S'_I = \frac{1}{b^d}\sum_{i \in I} S_i$$</div>
                <p>块自旋为块内自旋的平均值</p>
                
                <div class="example-diagram">
                  <svg width="200" height="150" viewBox="0 0 200 150">
                    <!-- 2x2 块 -->
                    <rect x="50" y="50" width="100" height="80" stroke="#333" stroke-width="2" fill="none"/>
                    <line x1="100" y1="50" x2="100" y2="130"/>
                    <line x1="50" y1="90" x2="150" y2="90"/>
                    
                    <!-- 原始自旋值 -->
                    <text x="75" y="75" text-anchor="middle" font-size="12" fill="#e74c3c">+1</text>
                    <text x="125" y="75" text-anchor="middle" font-size="12" fill="#3498db">-1</text>
                    <text x="75" y="115" text-anchor="middle" font-size="12" fill="#e74c3c">+1</text>
                    <text x="125" y="115" text-anchor="middle" font-size="12" fill="#e74c3c">+1</text>
                    
                    <!-- 箭头 -->
                    <path d="M 160 90 L 180 90" stroke="#fd79a8" stroke-width="2" marker-end="url(#small-arrow2)"/>
                    
                    <!-- 结果 -->
                    <text x="190" y="95" font-size="12" fill="#e74c3c">+0.5</text>
                    
                    <text x="100" y="20" text-anchor="middle" font-size="12">(1-1+1+1)/4 = 0.5</text>
                    
                    <defs>
                      <marker id="small-arrow2" markerWidth="6" markerHeight="4" 
                              refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#fd79a8"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="transformation-properties">
          <h4>变换的性质</h4>
          <div class="properties-list">
            <div class="property-item">
              <h5>🔄 可逆性问题</h5>
              <p>
                实空间RG变换通常是<strong>不可逆的</strong>，因为粗粒化过程丢失了信息。
                这与动量空间RG的可逆性形成对比。
              </p>
            </div>
            
            <div class="property-item">
              <h5>📏 长度尺度变化</h5><p>每次变换后，格点常数变为$a' = a/b$，
                系统的特征长度尺度相应改变。
              </p>
            </div>
            
            <div class="property-item">
              <h5>🎯 不动点的存在</h5>
              <p>在临界点，系统具有标度不变性，RG变换存在不动点$\mathcal{R}[H^*] = H^*$。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 一维Ising模型的实空间RG -->
    <section class="content-section">
      <h2>3. 一维Ising模型的实空间RG</h2>
      
      <div class="ising-1d-rg">
        <div class="model-setup">
          <h4>模型设定</h4>
          <p>
            考虑一维Ising模型的哈密顿量：
          </p><div class="formula-container">$$H = -J \sum_{i} S_i S_{i+1} - h \sum_i S_i$$</div><p>其中$S_i = \pm 1$，$J$ 是交换耦合，$h$是外磁场。
          </p>
        </div>
        
        <div class="decimation-procedure">
          <h4>抽取变换（Decimation）</h4>
          <p>我们采用<strong>抽取变换</strong>：保留奇数格点，消除偶数格点。这相当于$b = 2$的块自旋变换。
          </p>
          
          <div class="decimation-diagram">
            <svg width="500" height="200" viewBox="0 0 500 200">
              <!-- 原始链 -->
              <g class="original-chain">
                <text x="250" y="30" text-anchor="middle" font-size="14" font-weight="bold">原始一维链</text>
                
                <!-- 格点 -->
                <g class="lattice-sites">
                  <circle cx="50" cy="70" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="100" cy="70" r="8" fill="#3498db" stroke="#333" stroke-width="2"/>
                  <circle cx="150" cy="70" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="200" cy="70" r="8" fill="#3498db" stroke="#333" stroke-width="2"/>
                  <circle cx="250" cy="70" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="300" cy="70" r="8" fill="#3498db" stroke="#333" stroke-width="2"/>
                  <circle cx="350" cy="70" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="400" cy="70" r="8" fill="#3498db" stroke="#333" stroke-width="2"/>
                  <circle cx="450" cy="70" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                </g>
                
                <!-- 连接线 -->
                <g class="bonds" stroke="#333" stroke-width="2">
                  <line x1="58" y1="70" x2="92" y2="70"/>
                  <line x1="108" y1="70" x2="142" y2="70"/>
                  <line x1="158" y1="70" x2="192" y2="70"/>
                  <line x1="208" y1="70" x2="242" y2="70"/>
                  <line x1="258" y1="70" x2="292" y2="70"/>
                  <line x1="308" y1="70" x2="342" y2="70"/>
                  <line x1="358" y1="70" x2="392" y2="70"/>
                  <line x1="408" y1="70" x2="442" y2="70"/>
                </g>
                
                <!-- 标号 -->
                <g class="site-labels" font-size="10" text-anchor="middle">
                  <text x="50" y="90">1</text>
                  <text x="100" y="90">2</text>
                  <text x="150" y="90">3</text>
                  <text x="200" y="90">4</text>
                  <text x="250" y="90">5</text>
                  <text x="300" y="90">6</text>
                  <text x="350" y="90">7</text>
                  <text x="400" y="90">8</text>
                  <text x="450" y="90">9</text>
                </g>
              </g>
              
              <!-- 箭头 -->
              <path d="M 250 110 L 250 130" stroke="#fd79a8" stroke-width="3" marker-end="url(#down-arrow)"/>
              <text x="270" y="125" font-size="12" fill="#fd79a8">抽取偶数格点</text>
              
              <!-- 抽取后的链 -->
              <g class="decimated-chain">
                <text x="250" y="160" text-anchor="middle" font-size="14" font-weight="bold">抽取后的链</text>
                
                <!-- 保留的格点 -->
                <g class="remaining-sites">
                  <circle cx="100" cy="180" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="200" cy="180" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="300" cy="180" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                  <circle cx="400" cy="180" r="8" fill="#e74c3c" stroke="#333" stroke-width="2"/>
                </g>
                
                <!-- 有效连接 -->
                <g class="effective-bonds" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,5">
                  <line x1="108" y1="180" x2="192" y2="180"/>
                  <line x1="208" y1="180" x2="292" y2="180"/>
                  <line x1="308" y1="180" x2="392" y2="180"/>
                </g>
                
                <!-- 新标号 -->
                <g class="new-labels" font-size="10" text-anchor="middle">
                  <text x="100" y="200">1'</text>
                  <text x="200" y="200">3'</text>
                  <text x="300" y="200">5'</text>
                  <text x="400" y="200">7'</text>
                </g>
              </g>
              
              <defs>
                <marker id="down-arrow" markerWidth="8" markerHeight="6" 
                        refX="4" refY="5" orient="auto">
                  <polygon points="0 0, 8 0, 4 6" fill="#fd79a8"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="rg-calculation">
          <h4>重整化群计算</h4>
          <p>
            为了消除偶数格点，我们需要对它们的自由度求和。
            考虑三个相邻格点的局部配置：
          </p>
          
          <div class="local-calculation">
            <div class="step-by-step">
              <div class="calc-step"><h5>步骤1：局部配置</h5><p>考虑格点$i-1$, $i$, $i+1$，其中 $i$是偶数格点：</p><div class="formula-container">$$E_{local} = -J S_{i-1} S_i - J S_i S_{i+1} - h S_i$$</div>
              </div>
              
              <div class="calc-step"><h5>步骤2：对中间格点求和</h5><p>对$S_i = \pm 1$求和：</p><div class="formula-container">$$\sum_{S_i = \pm 1} e^{-\beta E_{local}} = \sum_{S_i = \pm 1} e^{\beta J S_{i-1} S_i + \beta J S_i S_{i+1} + \beta h S_i}$$</div>
              </div>
              
              <div class="calc-step"> <h5>步骤3：计算结果</h5><p>经过计算得到：</p> <div class="formula-container">$$\sum_{S_i} e^{-\beta E_{local}} = 2\cosh(\beta h) \cdot e^{\beta J' S_{i-1} S_{i+1}}$$</div><p>其中有效耦合为：</p> <div class="formula-container">$$\tanh(\beta J') = \tanh^2(\beta J)$$</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="rg-flow">
          <h4>重整化群流</h4><p>定义$K = \beta J$，重整化群变换为：
          </p><div class="formula-container">$$K' = \frac{1}{2}\ln\left(\cosh(2K)\right)$$</div>
          
          <div class="flow-analysis">
            <div class="flow-diagram">
              <svg width="400" height="300" viewBox="0 0 400 300">
                <!-- 坐标轴 -->
                <line x1="50" y1="250" x2="350" y2="250" stroke="#333" stroke-width="2"/>
                <line x1="50" y1="250" x2="50" y2="50" stroke="#333" stroke-width="2"/>
                
                <!-- RG流曲线 -->
                <path d="M 60 240 Q 150 200 250 150 Q 300 120 340 100" 
                      stroke="#e74c3c" stroke-width="3" fill="none"/>
                
                <!-- 不动点 -->
                <circle cx="50" cy="250" r="4" fill="#2d3436"/>
                <text x="30" y="265" font-size="12">K=0</text>
                
                <!-- 流动方向箭头 -->
                <g class="flow-arrows" fill="#e74c3c">
                  <polygon points="145,195 155,200 145,205" transform="rotate(30 150 200)"/>
                  <polygon points="245,145 255,150 245,155" transform="rotate(20 250 150)"/>
                  <polygon points="295,115 305,120 295,125" transform="rotate(15 300 120)"/>
                </g>
                
                <!-- 标签 -->
                <text x="200" y="280" text-anchor="middle" font-size="14">K</text>
                <text x="20" y="150" text-anchor="middle" font-size="14" transform="rotate(-90 20 150)">K'</text>
                
                <!-- 对角线 -->
                <line x1="50" y1="250" x2="350" y2="50" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="300" y="70" font-size="12" fill="#666">K' = K</text>
                
                <!-- 说明 -->
                <text x="200" y="30" text-anchor="middle" font-size="14" font-weight="bold">一维Ising模型RG流</text>
              </svg>
            </div>
            
            <div class="flow-interpretation">
              <h5>物理解释</h5><ul><li><strong>唯一不动点</strong>：$K^* = 0$（高温相）</li><li><strong>流动方向</strong>：所有$K > 0$ 都流向 $K = 0$</li><li><strong>物理含义</strong>：一维Ising模型在任何有限温度下都无长程序</li><li><strong>关联长度</strong>：$\xi \sim e^{2K}$，在 $T > 0$时总是有限的</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 二维Ising模型的近似处理 -->
    <section class="content-section">
      <h2>4. 二维Ising模型的近似处理</h2>
      
      <div class="ising-2d-rg">
        <div class="model-complexity">
          <h4>二维模型的复杂性</h4>
          <p>
            二维Ising模型的实空间RG比一维情况复杂得多，因为：
          </p>
          <ul>
            <li>每个格点有更多近邻</li>
            <li>粗粒化后会产生多体相互作用</li>
            <li>需要引入近似来处理复杂的相互作用</li>
          </ul>
        </div>
        
        <div class="block-spin-2d">
          <h4>2×2块自旋变换</h4>
          <p>
            考虑将2×2的格点块替换为单个块自旋：
          </p>
          
          <div class="block-diagram">
            <svg width="400" height="250" viewBox="0 0 400 250">
              <!-- 原始2x2块 -->
              <g class="original-block">
                <text x="100" y="30" text-anchor="middle" font-size="14" font-weight="bold">原始2×2块</text>
                
                <!-- 格点 -->
                <rect x="50" y="50" width="100" height="100" stroke="#333" stroke-width="2" fill="none"/>
                <line x1="100" y1="50" x2="100" y2="150"/>
                <line x1="50" y1="100" x2="150" y2="100"/>
                
                <!-- 自旋 -->
                <circle cx="75" cy="75" r="8" fill="#e74c3c"/>
                <circle cx="125" cy="75" r="8" fill="#3498db"/>
                <circle cx="75" cy="125" r="8" fill="#e74c3c"/>
                <circle cx="125" cy="125" r="8" fill="#e74c3c"/>
                
                <!-- 标号 -->
                <text x="75" y="80" text-anchor="middle" font-size="10" fill="white">1</text>
                <text x="125" y="80" text-anchor="middle" font-size="10" fill="white">2</text>
                <text x="75" y="130" text-anchor="middle" font-size="10" fill="white">3</text>
                <text x="125" y="130" text-anchor="middle" font-size="10" fill="white">4</text>
                
                <!-- 相互作用 -->
                <g stroke="#fd79a8" stroke-width="2">
                  <line x1="83" y1="75" x2="117" y2="75"/>
                  <line x1="75" y1="83" x2="75" y2="117"/>
                  <line x1="125" y1="83" x2="125" y2="117"/>
                  <line x1="83" y1="125" x2="117" y2="125"/>
                </g>
              </g>
              
              <!-- 箭头 -->
              <path d="M 180 100 L 220 100" stroke="#00b894" stroke-width="3" marker-end="url(#arrow-green)"/>
              <text x="200" y="90" text-anchor="middle" font-size="12" fill="#00b894">粗粒化</text>
              
              <!-- 块自旋 -->
              <g class="block-spin">
                <text x="300" y="30" text-anchor="middle" font-size="14" font-weight="bold">块自旋</text>
                
                <!-- 有效自旋 -->
                <circle cx="300" cy="100" r="15" fill="#e74c3c" stroke="#333" stroke-width="3"/>
                <text x="300" y="105" text-anchor="middle" font-size="12" fill="white">S'</text>
                
                <!-- 说明 -->
                <text x="300" y="140" text-anchor="middle" font-size="12">多数决定：3↑ + 1↓ → ↑</text>
              </g>
              
              <!-- 哈密顿量变化 -->
              <g class="hamiltonian-change">
                <text x="200" y="180" text-anchor="middle" font-size="12" font-weight="bold">哈密顿量变化</text>
                <text x="100" y="200" text-anchor="middle" font-size="11">H = -J∑⟨ij⟩SᵢSⱼ</text>
                <text x="300" y="200" text-anchor="middle" font-size="11">H' = -J'∑⟨IJ⟩S'ᵢS'ⱼ + ...</text>
                <text x="200" y="220" text-anchor="middle" font-size="10" fill="#666">+ 多体相互作用项</text>
              </g>
              
              <defs>
                <marker id="arrow-green" markerWidth="8" markerHeight="6" 
                        refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#00b894"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="approximation-schemes">
          <h4>近似方案</h4>
          <p>
            由于精确的RG变换会产生无穷多个耦合常数，我们需要引入近似：
          </p>
          
          <div class="approximation-methods">
            <div class="method-grid">
              <div class="method-card">
                <h5>最近邻近似</h5>
                <p>
                  只保留最近邻相互作用，忽略多体项：
                </p><div class="formula-container">$$H' = -J' \sum_{\langle I,J \rangle} S'_I S'_J$$</div>
                <p class="method-note">
                  简单但精度有限
                </p>
              </div>
              
              <div class="method-card">
                <h5>Migdal-Kadanoff近似</h5>
                <p> 通过键的移动简化计算：</p> <div class="formula-container">$$K' = \frac{1}{2}\ln(\cosh(4K))$$</div>
                <p class="method-note">
                  给出临界温度的合理估计
                </p>
              </div>
              
              <div class="method-card">
                <h5>变分方法</h5>
                <p> 通过变分原理确定最优参数：</p> <div class="formula-container">$$\min_{\{K'\}} \langle H' - H \rangle^2$$</div>
                <p class="method-note">
                  系统性改进的可能
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="critical-behavior">
          <h4>临界行为的预测</h4>
          <p>
            使用Migdal-Kadanoff近似，我们可以分析二维Ising模型的临界行为：
          </p>
          
          <div class="mk-results">
            <div class="result-comparison">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>物理量</th>
                    <th>MK近似</th>
                    <th>精确值</th>
                    <th>实验值</th>
                  </tr>
                </thead>
                <tbody><tr><td>$T_c/J$</td>
                    <td>3.077</td>
                    <td>2.269</td>
                    <td>2.27</td>
                  </tr><tr><td>$\nu$</td>
                    <td>0.75</td>
                    <td>1.0</td>
                    <td>1.0</td>
                  </tr><tr><td>$\beta$</td>
                    <td>0.25</td>
                    <td>0.125</td>
                    <td>0.125</td>
                  </tr><tr><td>$\gamma$</td>
                    <td>1.5</td>
                    <td>1.75</td>
                    <td>1.75</td>
                  </tr>
                </tbody>
              </table>
              
              <p class="table-note">
                MK近似给出了正确的定性行为，但定量精度有限。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实空间RG的优缺点 -->
    <section class="content-section">
      <h2>5. 实空间RG的优缺点分析</h2>
      
      <div class="pros-cons-analysis">
        <div class="advantages">
          <h4>✅ 优点</h4>
          <div class="advantage-list">
            <div class="advantage-item">
              <h5>🎯 物理图像直观</h5>
              <p>
                直接在实空间操作，粗粒化过程的物理意义清晰，
                容易理解长程关联如何从短程相互作用中涌现。
              </p>
            </div>
            
            <div class="advantage-item">
              <h5>🔧 适用范围广</h5>
              <p>
                可以处理各种格点模型，不局限于连续场论，
                特别适合研究量子相变和强关联系统。
              </p>
            </div>
            
            <div class="advantage-item">
              <h5>💻 数值实现简单</h5>
              <p>
                算法相对简单，容易编程实现，
                可以与蒙特卡罗方法结合进行数值研究。
              </p>
            </div>
            
            <div class="advantage-item">
              <h5>🌐 处理非均匀系统</h5>
              <p>
                可以处理有杂质、界面或几何约束的系统，
                这是动量空间方法难以处理的。
              </p>
            </div>
          </div>
        </div>
        
        <div class="disadvantages">
          <h4>❌ 缺点</h4>
          <div class="disadvantage-list">
            <div class="disadvantage-item">
              <h5>📉 定量精度有限</h5>
              <p>
                由于需要引入近似（如截断高阶相互作用），
                定量结果的精度通常不如动量空间方法。
              </p>
            </div>
            
            <div class="disadvantage-item">
              <h5>🔄 不可逆性</h5>
              <p>
                粗粒化过程丢失信息，变换不可逆，
                这限制了理论分析的深度。
              </p>
            </div>
            
            <div class="disadvantage-item">
              <h5>📈 复杂性增长</h5>
              <p>
                高维系统中会产生大量新的相互作用项，
                需要更多的近似来保持计算的可行性。
              </p>
            </div>
            
            <div class="disadvantage-item">
              <h5>🎲 近似依赖性</h5>
              <p>
                结果强烈依赖于所采用的近似方案，
                不同近似可能给出不同的结果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="content-section">
      <h2>6. 现代发展与应用</h2>
      
      <div class="modern-developments">
        <div class="tensor-networks">
          <h4>张量网络重整化</h4>
          <p>
            现代的实空间RG方法结合了张量网络技术，
            如<strong>张量重整化群</strong>（TRG）和<strong>多尺度纠缠重整化</strong>（MERA）：
          </p>
          
          <div class="tensor-advantages">
            <ul>
              <li>系统地处理量子纠缠</li>
              <li>控制近似误差</li>
              <li>适用于强关联量子系统</li>
              <li>可以计算基态和激发态性质</li>
            </ul>
          </div>
        </div>
        
        <div class="machine-learning">
          <h4>机器学习辅助RG</h4>
          <p>
            机器学习技术为实空间RG带来新的可能性：
          </p>
          
          <div class="ml-applications">
            <div class="ml-grid">
              <div class="ml-card">
                <h5>🤖 自动化粗粒化</h5>
                <p>
                  使用神经网络自动学习最优的粗粒化规则，
                  减少人为近似的影响。
                </p>
              </div>
              
              <div class="ml-card">
                <h5>🔍 相变识别</h5>
                <p>
                  通过机器学习识别相变点和临界行为，
                  无需先验知识。
                </p>
              </div>
              
              <div class="ml-card">
                <h5>📊 数据驱动RG</h5>
                <p>
                  从实验或数值数据中直接学习RG流，
                  绕过理论建模的困难。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="quantum-applications">
          <h4>量子系统应用</h4>
          <p>
            实空间RG在量子多体系统中的应用日益重要：
          </p>
          
          <div class="quantum-examples">
            <ul>
              <li><strong>量子相变</strong>：研究量子临界点和量子临界区域</li>
              <li><strong>拓扑相</strong>：分析拓扑序和边界态</li>
              <li><strong>多体局域化</strong>：理解无序系统的局域化转变</li>
              <li><strong>量子纠缠</strong>：研究纠缠的标度行为</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li><strong>基本思想</strong>：通过粗粒化消除短程自由度，保留长程物理</li>
          <li><strong>操作步骤</strong>：分块 → 粗粒化 → 重标度</li>
          <li><strong>一维Ising</strong>：精确可解，展示RG流向高温不动点</li>
          <li><strong>二维Ising</strong>：需要近似，MK方法给出合理结果</li>
          <li><strong>优势</strong>：物理图像直观，适用范围广</li>
          <li><strong>局限</strong>：定量精度有限，需要近似处理</li>
          <li><strong>现代发展</strong>：张量网络、机器学习、量子应用</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么实空间RG变换通常是不可逆的？这对理论分析有什么影响？</li>
          <li>比较多数决定规则和平均值规则在块自旋变换中的优缺点。</li>
          <li>一维Ising模型的RG流为什么总是流向高温不动点？</li>
          <li>在二维Ising模型中，为什么会出现多体相互作用项？</li>
          <li>如何改进Migdal-Kadanoff近似以获得更精确的结果？</li>
          <li>实空间RG与动量空间RG在处理长程相互作用时有何不同？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Kadanoff, L.P. "Scaling laws for Ising models near Tc"</li>
          <li>Migdal, A.A. "Phase transitions in gauge and spin-lattice systems"</li>
          <li>Niemeijer, T. & van Leeuwen, J.M.J. "Renormalization theory for Ising-like spin systems"</li>
          <li>Vidal, G. "Entanglement Renormalization"</li>
          <li>Carrasquilla, J. & Melko, R.G. "Machine learning phases of matter"</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_3_1',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {delimiters: [{left: '$$', right: '$$', display: true},{left: '$', right: '$', display: false}
          ]
        });
      }
    });
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

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  border-left: 5px solid #007bff;
}

.learning-objectives h3 {
  color: #007bff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #00b894;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #00b894, #00cec9);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.formula-container {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.basic-idea {
  margin: 20px 0;
}

.concept-overview {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
}

.concept-overview h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.coarse-graining-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.three-steps {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.three-steps h4 {
  color: #2d3436;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.step-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  position: relative;
  border-top: 4px solid #00b894;
}

.step-number {
  position: absolute;
  top: -15px;
  left: 20px;
  background: #00b894;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
}

.step-card h5 {
  color: #00b894;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 1.2em;
}

.kadanoff-transformation {
  margin: 20px 0;
}

.historical-context {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.historical-context h4 {
  color: #856404;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.block-spin-concept {
  margin: 20px 0;
}

.definition-methods {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.method-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #e17055;
}

.method-card h5 {
  color: #e17055;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.example-diagram {
  display: flex;
  justify-content: center;
  margin: 15px 0;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.transformation-properties {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.transformation-properties h4 {
  color: #2d3436;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.properties-list {
  margin: 20px 0;
}

.property-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #fd79a8;
}

.property-item h5 {
  color: #2d3436;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.ising-1d-rg {
  margin: 20px 0;
}

.model-setup {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.model-setup h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.decimation-procedure {
  margin: 20px 0;
}

.decimation-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.rg-calculation {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.rg-calculation h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.local-calculation {
  margin: 20px 0;
}

.step-by-step {
  margin: 20px 0;
}

.calc-step {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #e17055;
}

.calc-step h5 {
  color: #e17055;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.rg-flow {
  margin: 20px 0;
}

.flow-analysis {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.flow-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.flow-interpretation {
  margin: 20px 0;
}

.flow-interpretation h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.ising-2d-rg {
  margin: 20px 0;
}

.model-complexity {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.model-complexity h4 {
  color: #856404;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.block-spin-2d {
  margin: 20px 0;
}

.block-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.approximation-schemes {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.approximation-schemes h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.approximation-methods {
  margin: 20px 0;
}

.method-note {
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.critical-behavior {
  margin: 20px 0;
}

.mk-results {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.result-comparison {
  margin: 20px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.comparison-table th {
  background: #00b894;
  color: white;
  font-weight: 600;
}

.table-note {
  font-style: italic;
  color: #666;
  text-align: center;
  margin-top: 10px;
}

.pros-cons-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.advantages,
.disadvantages {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
}

.advantages h4 {
  color: #27ae60;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.disadvantages h4 {
  color: #e74c3c;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.advantage-list,
.disadvantage-list {
  margin: 20px 0;
}

.advantage-item,
.disadvantage-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.advantage-item {
  border-left: 4px solid #27ae60;
}

.disadvantage-item {
  border-left: 4px solid #e74c3c;
}

.advantage-item h5,
.disadvantage-item h5 {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.advantage-item h5 {
  color: #27ae60;
}

.disadvantage-item h5 {
  color: #e74c3c;
}

.modern-developments {
  margin: 20px 0;
}

.tensor-networks,
.machine-learning,
.quantum-applications {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.tensor-networks h4,
.machine-learning h4,
.quantum-applications h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.tensor-advantages {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.ml-applications {
  margin: 20px 0;
}

.ml-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.ml-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-top: 4px solid #6c5ce7;
}

.ml-card h5 {
  color: #6c5ce7;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.quantum-examples {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.summary-box {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #4CAF50;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .steps-grid,
  .method-grid,
  .ml-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons-analysis {
    grid-template-columns: 1fr;
  }
}
</style>