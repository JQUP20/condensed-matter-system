<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.2.1 重整化群的物理图像</h1>
      <p class="chapter-subtitle">从粗粒化到标度变换的物理理解</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：30分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解重整化群的基本物理思想</li>
        <li>掌握粗粒化操作的概念和实现</li>
        <li>理解标度变换与重整化的关系</li>
        <li>学习不动点的物理意义</li>
        <li>理解相关长度和无关长度的概念</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：重整化群的核心思想</h2>
      <div class="highlight-box">
        <p>
          <strong>重整化群（Renormalization Group, RG）</strong>是理解临界现象最强大的理论工具。
          它的核心思想是：<strong>在不同的长度尺度上观察系统，物理本质保持不变</strong>。
          通过系统地消除短程自由度，我们可以揭示长程物理的普遍规律。
          这种"粗粒化"的思想不仅适用于临界现象，也是现代物理学中处理多尺度问题的基本方法。
        </p>
      </div>
    </section>

    <!-- 粗粒化的物理图像 -->
    <section class="content-section">
      <h2>1. 粗粒化：从微观到宏观</h2>
      
      <div class="coarse-graining-concept">
        <div class="definition-box">
          <h4>粗粒化的基本思想</h4>
          <p>
            粗粒化是一种系统地消除短程自由度的过程：
          </p>
          <ul>
            <li><strong>空间粗粒化</strong>：将相邻的自由度合并</li>
            <li><strong>能量粗粒化</strong>：积分掉高能模式</li>
            <li><strong>保持物理本质</strong>：长程行为不变</li>
          </ul>
        </div>
        
        <div class="coarse-graining-visualization">
          <h4>粗粒化的可视化</h4>
          
          <div class="visualization-steps">
            <div class="step-item">
              <h5>原始晶格</h5>
              <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- 原始8x8晶格 -->
                <g class="original-lattice">
                  <!-- 绘制晶格点 -->
                  <g class="lattice-points">
                    <!-- 第一行 -->
                    <circle cx="40" cy="40" r="3" fill="#e74c3c"/>
                    <circle cx="60" cy="40" r="3" fill="#3498db"/>
                    <circle cx="80" cy="40" r="3" fill="#e74c3c"/>
                    <circle cx="100" cy="40" r="3" fill="#3498db"/>
                    <circle cx="120" cy="40" r="3" fill="#e74c3c"/>
                    <circle cx="140" cy="40" r="3" fill="#3498db"/>
                    <circle cx="160" cy="40" r="3" fill="#e74c3c"/>
                    
                    <!-- 第二行 -->
                    <circle cx="40" cy="60" r="3" fill="#3498db"/>
                    <circle cx="60" cy="60" r="3" fill="#e74c3c"/>
                    <circle cx="80" cy="60" r="3" fill="#3498db"/>
                    <circle cx="100" cy="60" r="3" fill="#e74c3c"/>
                    <circle cx="120" cy="60" r="3" fill="#3498db"/>
                    <circle cx="140" cy="60" r="3" fill="#e74c3c"/>
                    <circle cx="160" cy="60" r="3" fill="#3498db"/>
                    
                    <!-- 继续其他行... -->
                    <circle cx="40" cy="80" r="3" fill="#e74c3c"/>
                    <circle cx="60" cy="80" r="3" fill="#3498db"/>
                    <circle cx="80" cy="80" r="3" fill="#e74c3c"/>
                    <circle cx="100" cy="80" r="3" fill="#3498db"/>
                    <circle cx="120" cy="80" r="3" fill="#e74c3c"/>
                    <circle cx="140" cy="80" r="3" fill="#3498db"/>
                    <circle cx="160" cy="80" r="3" fill="#e74c3c"/>
                    
                    <circle cx="40" cy="100" r="3" fill="#3498db"/>
                    <circle cx="60" cy="100" r="3" fill="#e74c3c"/>
                    <circle cx="80" cy="100" r="3" fill="#3498db"/>
                    <circle cx="100" cy="100" r="3" fill="#e74c3c"/>
                    <circle cx="120" cy="100" r="3" fill="#3498db"/>
                    <circle cx="140" cy="100" r="3" fill="#e74c3c"/>
                    <circle cx="160" cy="100" r="3" fill="#3498db"/>
                  </g>
                  
                  <!-- 晶格连线 -->
                  <g class="lattice-bonds" stroke="#666" stroke-width="1" opacity="0.3">
                    <!-- 水平连线 -->
                    <line x1="40" y1="40" x2="160" y2="40"/>
                    <line x1="40" y1="60" x2="160" y2="60"/>
                    <line x1="40" y1="80" x2="160" y2="80"/>
                    <line x1="40" y1="100" x2="160" y2="100"/>
                    
                    <!-- 垂直连线 -->
                    <line x1="40" y1="40" x2="40" y2="100"/>
                    <line x1="60" y1="40" x2="60" y2="100"/>
                    <line x1="80" y1="40" x2="80" y2="100"/>
                    <line x1="100" y1="40" x2="100" y2="100"/>
                    <line x1="120" y1="40" x2="120" y2="100"/>
                    <line x1="140" y1="40" x2="140" y2="100"/>
                    <line x1="160" y1="40" x2="160" y2="100"/>
                  </g>
                </g>
                
                <text x="100" y="180" text-anchor="middle" font-size="12">
                  晶格常数 a
                </text>
              </svg>
            </div>
            
            <div class="arrow">→</div>
            
            <div class="step-item">
              <h5>粗粒化后</h5>
              <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- 粗粒化后的4x4晶格 -->
                <g class="coarse-lattice">
                  <!-- 粗粒化块 -->
                  <g class="coarse-blocks">
                    <rect x="30" y="30" width="40" height="40" fill="#e74c3c" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                    <rect x="90" y="30" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db" stroke-width="2"/>
                    <rect x="30" y="90" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db" stroke-width="2"/>
                    <rect x="90" y="90" width="40" height="40" fill="#e74c3c" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                  </g>
                  
                  <!-- 有效自旋 -->
                  <circle cx="50" cy="50" r="5" fill="#e74c3c"/>
                  <circle cx="110" cy="50" r="5" fill="#3498db"/>
                  <circle cx="50" cy="110" r="5" fill="#3498db"/>
                  <circle cx="110" cy="110" r="5" fill="#e74c3c"/>
                  
                  <!-- 有效连线 -->
                  <g stroke="#333" stroke-width="2">
                    <line x1="50" y1="50" x2="110" y2="50"/>
                    <line x1="50" y1="50" x2="50" y2="110"/>
                    <line x1="110" y1="50" x2="110" y2="110"/>
                    <line x1="50" y1="110" x2="110" y2="110"/>
                  </g>
                </g>
                
                <text x="100" y="180" text-anchor="middle" font-size="12">
                  晶格常数 2a
                </text>
              </svg>
            </div>
          </div>
          
          <p class="visualization-caption">
            粗粒化过程：将2×2的自旋块合并为一个有效自旋，晶格常数变为原来的2倍。
          </p>
        </div>
      </div>
    </section>

    <!-- 重整化变换 -->
    <section class="content-section">
      <h2>2. 重整化变换的数学表述</h2>
      
      <div class="rg-transformation">
        <div class="definition-box">
          <h4>重整化变换的定义</h4>
          <p>
            重整化变换 $T$是一个映射，将原始哈密顿量映射到有效哈密顿量：
          </p><div class="formula-container">$$H' = T[H]$$</div>
          <p>
            这个变换包含两个步骤：
          </p>
          <ol>
            <li><strong>粗粒化</strong>：消除短程自由度</li>
            <li><strong>重标度</strong>：恢复原始长度尺度</li>
          </ol>
        </div>
        
        <div class="transformation-steps">
          <h4>变换的具体步骤</h4>
          
          <div class="step-grid"> <div class="step-card"><h5>步骤1：粗粒化</h5> <div class="formula-container">$$Z' = \text{Tr}_{\text{fast}} e^{-\beta H}$$</div>
              <p>对快变量求迹，得到有效配分函数</p>
            </div> <div class="step-card"><h5>步骤2：重标度</h5> <div class="formula-container">$$\mathbf{r}' = \mathbf{r}/b$$</div><p>将长度尺度缩放因子$b$，恢复原始尺度</p>
            </div>
            
            <div class="step-card">
              <h5>步骤3：参数重整化</h5><div class="formula-container">$$K' = R_b(K)$$</div>
              <p>耦合常数按重整化函数变换</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 标度变换 -->
    <section class="content-section">
      <h2>3. 标度变换与重整化</h2>
      
      <div class="scaling-transformation">
        <div class="scaling-concept">
          <h4>标度变换的物理意义</h4>
          <p>
            标度变换反映了系统在不同长度尺度下的自相似性：
          </p>
          
          <div class="scaling-visualization">
            <svg width="400" height="250" viewBox="0 0 400 250">
              <!-- 不同尺度的观察 -->
              <g class="scale-levels">
                <!-- 微观尺度 -->
                <g class="microscopic">
                  <rect x="20" y="20" width="100" height="60" fill="#f8f9fa" stroke="#333" stroke-width="1"/>
                  <text x="70" y="15" text-anchor="middle" font-size="10">微观尺度</text>
                  
                  <!-- 原子级细节 -->
                  <g class="atoms">
                    <circle cx="35" cy="35" r="2" fill="#e74c3c"/>
                    <circle cx="45" cy="35" r="2" fill="#3498db"/>
                    <circle cx="55" cy="35" r="2" fill="#e74c3c"/>
                    <circle cx="65" cy="35" r="2" fill="#3498db"/>
                    <circle cx="75" cy="35" r="2" fill="#e74c3c"/>
                    <circle cx="85" cy="35" r="2" fill="#3498db"/>
                    <circle cx="95" cy="35" r="2" fill="#e74c3c"/>
                    <circle cx="105" cy="35" r="2" fill="#3498db"/>
                    
                    <circle cx="35" cy="45" r="2" fill="#3498db"/>
                    <circle cx="45" cy="45" r="2" fill="#e74c3c"/>
                    <circle cx="55" cy="45" r="2" fill="#3498db"/>
                    <circle cx="65" cy="45" r="2" fill="#e74c3c"/>
                    <circle cx="75" cy="45" r="2" fill="#3498db"/>
                    <circle cx="85" cy="45" r="2" fill="#e74c3c"/>
                    <circle cx="95" cy="45" r="2" fill="#3498db"/>
                    <circle cx="105" cy="45" r="2" fill="#e74c3c"/>
                  </g>
                </g>
                
                <!-- 箭头 -->
                <path d="M 130 50 L 160 50" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="145" y="45" text-anchor="middle" font-size="10">粗粒化</text>
                
                <!-- 介观尺度 -->
                <g class="mesoscopic">
                  <rect x="170" y="20" width="100" height="60" fill="#f8f9fa" stroke="#333" stroke-width="1"/>
                  <text x="220" y="15" text-anchor="middle" font-size="10">介观尺度</text>
                  
                  <!-- 自旋块 -->
                  <g class="spin-blocks">
                    <rect x="180" y="30" width="15" height="15" fill="#e74c3c" opacity="0.7"/>
                    <rect x="200" y="30" width="15" height="15" fill="#3498db" opacity="0.7"/>
                    <rect x="220" y="30" width="15" height="15" fill="#e74c3c" opacity="0.7"/>
                    <rect x="240" y="30" width="15" height="15" fill="#3498db" opacity="0.7"/>
                    
                    <rect x="180" y="50" width="15" height="15" fill="#3498db" opacity="0.7"/>
                    <rect x="200" y="50" width="15" height="15" fill="#e74c3c" opacity="0.7"/>
                    <rect x="220" y="50" width="15" height="15" fill="#3498db" opacity="0.7"/>
                    <rect x="240" y="50" width="15" height="15" fill="#e74c3c" opacity="0.7"/>
                  </g>
                </g>
                
                <!-- 箭头 -->
                <path d="M 280 50 L 310 50" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="295" y="45" text-anchor="middle" font-size="10">粗粒化</text>
                
                <!-- 宏观尺度 -->
                <g class="macroscopic">
                  <rect x="320" y="20" width="60" height="60" fill="#f8f9fa" stroke="#333" stroke-width="1"/>
                  <text x="350" y="15" text-anchor="middle" font-size="10">宏观尺度</text>
                  
                  <!-- 大尺度结构 -->
                  <g class="large-domains">
                    <rect x="325" y="25" width="25" height="25" fill="#e74c3c" opacity="0.5"/>
                    <rect x="355" y="25" width="20" height="25" fill="#3498db" opacity="0.5"/>
                    <rect x="325" y="55" width="20" height="20" fill="#3498db" opacity="0.5"/>
                    <rect x="350" y="55" width="25" height="20" fill="#e74c3c" opacity="0.5"/>
                  </g>
                </g>
              </g>
              
              <!-- 标度关系 -->
              <g class="scale-relations">
                <text x="70" y="110" text-anchor="middle" font-size="12">a</text>
                <text x="220" y="110" text-anchor="middle" font-size="12">ba</text>
                <text x="350" y="110" text-anchor="middle" font-size="12">b²a</text>
                
                <text x="200" y="140" text-anchor="middle" font-size="14" font-weight="bold">
                  长度尺度：a → ba → b²a → ...
                </text>
              </g>
              
              <!-- 定义箭头标记 -->
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="scaling-laws">
          <h4>标度律的数学表述</h4>
          <p>
            在临界点附近，物理量遵循标度律：
          </p>
          
          <div class="scaling-equations"> <div class="equation-item"><h5>关联长度</h5> <div class="formula-container">$$\xi(t) = \xi_0 |t|^{-\nu}$$</div>
            </div> <div class="equation-item"><h5>磁化强度</h5> <div class="formula-container">$$M(t) = M_0 |t|^{\beta}$$</div>
            </div> <div class="equation-item"><h5>磁化率</h5> <div class="formula-container">$$\chi(t) = \chi_0 |t|^{-\gamma}$$</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 不动点理论 -->
    <section class="content-section">
      <h2>4. 不动点与临界行为</h2>
      
      <div class="fixed-point-theory">
        <div class="definition-box">
          <h4>不动点的定义</h4>
          <p> 不动点是重整化变换下保持不变的参数点：</p> <div class="formula-container">$$K^* = R_b(K^*)$$</div>
          <p>
            不动点决定了系统的临界行为和普适性类别。
          </p>
        </div>
        
        <div class="fixed-point-types">
          <h4>不动点的类型</h4>
          
          <div class="fp-grid"> <div class="fp-card"><h5>高温不动点</h5> <div class="formula-container">$$K^*_{\text{高温}} = 0$$</div>
              <p>对应于无序相，所有耦合常数为零</p>
              <div class="phase-diagram">
                <svg width="150" height="100" viewBox="0 0 150 100">
                  <circle cx="75" cy="50" r="30" fill="#ff7675" opacity="0.3"/>
                  <circle cx="75" cy="50" r="3" fill="#d63031"/>
                  <text x="75" y="85" text-anchor="middle" font-size="10">高温不动点</text>
                </svg>
              </div>
            </div> <div class="fp-card"><h5>低温不动点</h5> <div class="formula-container">$$K^*_{\text{低温}} = \infty$$</div>
              <p>对应于完全有序相</p>
              <div class="phase-diagram">
                <svg width="150" height="100" viewBox="0 0 150 100">
                  <circle cx="75" cy="50" r="30" fill="#74b9ff" opacity="0.3"/>
                  <circle cx="75" cy="50" r="3" fill="#0984e3"/>
                  <text x="75" y="85" text-anchor="middle" font-size="10">低温不动点</text>
                </svg>
              </div>
            </div> <div class="fp-card"><h5>临界不动点</h5> <div class="formula-container">$$K^*_{\text{临界}} = K_c$$</div>
              <p>对应于临界点，决定临界指数</p>
              <div class="phase-diagram">
                <svg width="150" height="100" viewBox="0 0 150 100">
                  <circle cx="75" cy="50" r="30" fill="#00b894" opacity="0.3"/>
                  <circle cx="75" cy="50" r="3" fill="#00a085"/>
                  <text x="75" y="85" text-anchor="middle" font-size="10">临界不动点</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 线性化分析 -->
    <section class="content-section">
      <h2>5. 不动点附近的线性化分析</h2>
      
      <div class="linearization-analysis">
        <div class="linearization-concept">
          <h4>线性化的基本思想</h4>
          <p> 在不动点附近，重整化变换可以线性化：</p> <div class="formula-container">$$\delta K'_i = \sum_j T_{ij} \delta K_j$$</div><p>其中$T_{ij} = \frac{\partial R_i}{\partial K_j}\Big|_{K^*}$是线性化矩阵。
          </p>
        </div>
        
        <div class="eigenvalue-analysis">
          <h4>本征值分析</h4><p>线性化矩阵的本征值$\lambda_i$决定了参数的标度行为：
          </p>
          
          <div class="eigenvalue-grid">
            <div class="eigen-card">
              <h5>相关方向 (λ > 1)</h5><div class="formula-container">$$\delta K_i \to \lambda_i^n \delta K_i$$</div>
              <p>偏离不动点的扰动增长</p>
              <div class="flow-diagram">
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <circle cx="60" cy="40" r="3" fill="#e74c3c"/>
                  <path d="M 30 40 L 50 40" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowhead-red)"/>
                  <path d="M 70 40 L 90 40" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowhead-red)"/>
                  <text x="60" y="65" text-anchor="middle" font-size="8">不稳定</text>
                  
                  <defs>
                    <marker id="arrowhead-red" markerWidth="8" markerHeight="6" 
                            refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#e74c3c"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div> <div class="eigen-card"><h5>无关方向 (λ < 1)</h5> <div class="formula-container">$$\delta K_i \to \lambda_i^n \delta K_i$$</div>
              <p>偏离不动点的扰动衰减</p>
              <div class="flow-diagram">
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <circle cx="60" cy="40" r="3" fill="#3498db"/>
                  <path d="M 50 40 L 30 40" stroke="#3498db" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
                  <path d="M 90 40 L 70 40" stroke="#3498db" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
                  <text x="60" y="65" text-anchor="middle" font-size="8">稳定</text>
                  
                  <defs>
                    <marker id="arrowhead-blue" markerWidth="8" markerHeight="6" 
                            refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#3498db"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div> <div class="eigen-card"><h5>边际方向 (λ = 1)</h5> <div class="formula-container">$$\delta K_i \to \delta K_i$$</div>
              <p>扰动既不增长也不衰减</p>
              <div class="flow-diagram">
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <circle cx="60" cy="40" r="3" fill="#f39c12"/>
                  <circle cx="45" cy="40" r="1" fill="#f39c12"/>
                  <circle cx="75" cy="40" r="1" fill="#f39c12"/>
                  <text x="60" y="65" text-anchor="middle" font-size="8">边际</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 临界指数与本征值 -->
    <section class="content-section">
      <h2>6. 临界指数与本征值的关系</h2>
      
      <div class="critical-exponents">
        <div class="exponent-relations">
          <h4>临界指数的定义</h4>
          <p>
            临界指数通过本征值表示：
          </p>
          
          <div class="exponent-table">
            <table>
              <thead>
                <tr>
                  <th>临界指数</th>
                  <th>定义</th>
                  <th>与本征值的关系</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ν</td><td>关联长度指数</td><td>$\nu = \frac{\ln b}{\ln \lambda_t}$</td>
                </tr>
                <tr>
                  <td>β</td><td>序参量指数</td><td>$\beta = \frac{d-y_h}{\lambda_t}$</td>
                </tr>
                <tr>
                  <td>γ</td><td>磁化率指数</td><td>$\gamma = \frac{2y_h-d}{\lambda_t}$</td>
                </tr>
                <tr>
                  <td>δ</td><td>临界等温线指数</td><td>$\delta = \frac{y_h}{d-y_h}$</td>
                </tr>
              </tbody>
            </table>
          </div><p>其中$y_h = d - \frac{\ln \lambda_h}{\ln b}$是磁场的标度维度。
          </p>
        </div>
        
        <div class="universality-concept">
          <h4>普适性的起源</h4>
          <p>
            普适性来源于不动点的吸引性：
          </p>
          
          <div class="universality-visualization">
            <svg width="400" height="300" viewBox="0 0 400 300">
              <!-- 参数空间 -->
              <rect x="50" y="50" width="300" height="200" fill="#f8f9fa" stroke="#333" stroke-width="1"/>
              
              <!-- 不动点 -->
              <circle cx="200" cy="150" r="5" fill="#e74c3c"/>
              <text x="200" y="140" text-anchor="middle" font-size="12" font-weight="bold">临界不动点</text>
              
              <!-- 流线 -->
              <g class="flow-lines" stroke="#3498db" stroke-width="2" fill="none">
                <!-- 从不同初始点流向不动点 -->
                <path d="M 100 100 Q 150 125 200 150"/>
                <path d="M 300 100 Q 250 125 200 150"/>
                <path d="M 100 200 Q 150 175 200 150"/>
                <path d="M 300 200 Q 250 175 200 150"/>
                <path d="M 80 150 Q 140 150 200 150"/>
                <path d="M 320 150 Q 260 150 200 150"/>
              </g>
              
              <!-- 箭头 -->
              <g class="arrows" fill="#3498db">
                <polygon points="190,145 200,150 190,155" transform="rotate(-30 195 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(30 205 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(150 195 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(-150 205 150)"/>
              </g>
              
              <!-- 标签 -->
              <text x="100" y="80" text-anchor="middle" font-size="10">不同的微观模型</text>
              <text x="300" y="80" text-anchor="middle" font-size="10">相同的临界行为</text>
              
              <text x="200" y="280" text-anchor="middle" font-size="14" font-weight="bold">
                普适性：不同模型 → 相同不动点 → 相同临界指数
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- RG流的几何图像 -->
    <section class="content-section">
      <h2>7. 重整化群流的几何图像</h2>
      
      <div class="rg-flow">
        <div class="flow-concept">
          <h4>参数空间中的流动</h4>
          <p>
            重整化群变换在参数空间中产生流动，类似于相空间中的动力学流：
          </p>
        </div>
        
        <div class="flow-visualization">
          <svg width="500" height="400" viewBox="0 0 500 400">
            <!-- 坐标轴 -->
            <line x1="50" y1="350" x2="450" y2="350" stroke="#333" stroke-width="2"/>
            <line x1="50" y1="350" x2="50" y2="50" stroke="#333" stroke-width="2"/>
            
            <!-- 轴标签 -->
            <text x="250" y="380" text-anchor="middle" font-size="14">温度 T</text>
            <text x="20" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 20 200)">磁场 H</text>
            
            <!-- 相边界 -->
            <line x1="250" y1="50" x2="250" y2="350" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,5"/>
            <text x="260" y="70" font-size="12" fill="#e74c3c">相边界</text>
            
            <!-- 不动点 -->
            <circle cx="250" cy="200" r="6" fill="#2d3436"/>
            <text x="250" y="185" text-anchor="middle" font-size="12" font-weight="bold">临界点</text>
            
            <!-- RG流线 -->
            <g class="rg-flows" stroke="#0984e3" stroke-width="2" fill="none">
              <!-- 高温相的流 -->
              <path d="M 150 150 Q 200 175 250 200"/>
              <path d="M 150 250 Q 200 225 250 200"/>
              <path d="M 100 200 Q 175 200 250 200"/>
              
              <!-- 低温相的流 -->
              <path d="M 350 150 Q 300 175 250 200"/>
              <path d="M 350 250 Q 300 225 250 200"/>
              <path d="M 400 200 Q 325 200 250 200"/>
              
              <!-- 临界线上的流 -->
              <path d="M 250 100 L 250 190"/>
              <path d="M 250 300 L 250 210"/>
            </g>
            
            <!-- 流动箭头 -->
            <g class="flow-arrows" fill="#0984e3">
              <polygon points="240,195 250,200 240,205" transform="rotate(-30 245 200)"/>
              <polygon points="240,195 250,200 240,205" transform="rotate(30 255 200)"/>
              <polygon points="240,195 250,200 240,205" transform="rotate(150 245 200)"/>
              <polygon points="240,195 250,200 240,205" transform="rotate(-150 255 200)"/>
              <polygon points="245,195 250,190 255,195"/>
              <polygon points="245,205 250,210 255,205"/>
            </g>
            
            <!-- 相区标签 -->
            <text x="150" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#74b9ff">顺磁相</text>
            <text x="350" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#fd79a8">铁磁相</text>
            
            <!-- 标度区域 -->
            <circle cx="250" cy="200" r="80" fill="none" stroke="#00b894" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="320" y="140" font-size="10" fill="#00b894">标度区域</text>
          </svg>
        </div>
        
        <div class="flow-interpretation">
          <h4>流动的物理解释</h4>
          <ul>
            <li><strong>流线</strong>：表示重整化变换的轨迹</li>
            <li><strong>不动点</strong>：流线的汇聚点，决定临界行为</li>
            <li><strong>吸引域</strong>：流向同一不动点的区域，对应普适性类</li>
            <li><strong>相边界</strong>：分隔不同相的界面</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul><li><strong>粗粒化</strong>：系统地消除短程自由度，保持长程物理本质</li><li><strong>重整化变换</strong>：$H' = T[H]$，包含粗粒化和重标度</li><li><strong>不动点</strong>：$K^* = R_b(K^*)$，决定临界行为和普适性</li>
          <li><strong>线性化分析</strong>：本征值决定参数的相关性和临界指数</li>
          <li><strong>RG流</strong>：参数空间中的流动图像，揭示相变的几何结构</li>
          <li><strong>普适性</strong>：不同微观模型流向相同不动点，具有相同临界行为</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么粗粒化操作不会改变系统的长程物理性质？</li>
          <li>解释为什么临界不动点是不稳定的，但却决定了临界行为？</li>
          <li>从重整化群的角度理解，为什么不同的微观模型可以有相同的临界指数？</li>
          <li>如果一个参数的本征值 λ = 1，这意味着什么？给出具体例子。</li>
          <li>重整化群流如何解释一级相变和二级相变的区别？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Wilson, K.G. "Renormalization Group and Critical Phenomena" - Nobel演讲</li>
          <li>Fisher, M.E. "Renormalization Group Theory: Its Basis and Formulation"</li>
          <li>Cardy, J. "Scaling and Renormalization in Statistical Physics"</li>
          <li>Goldenfeld, N. "Lectures on Phase Transitions and the Renormalization Group"</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_2_1',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
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
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
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
  border-bottom: 3px solid #6c5ce7;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.definition-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.definition-box h4 {
  color: #856404;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-container {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.coarse-graining-concept {
  margin: 20px 0;
}

.coarse-graining-visualization {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.visualization-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
}

.step-item {
  text-align: center;
}

.step-item h5 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.arrow {
  font-size: 2em;
  color: #6c5ce7;
  font-weight: bold;
}

.visualization-caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 15px;
}

.rg-transformation {
  margin: 20px 0;
}

.transformation-steps {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.step-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #6c5ce7;
}

.step-card h5 {
  color: #6c5ce7;
  margin-bottom: 15px;
}

.scaling-transformation {
  margin: 20px 0;
}

.scaling-concept {
  margin-bottom: 20px;
}

.scaling-visualization {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.scaling-laws {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.scaling-equations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.equation-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.equation-item h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.fixed-point-theory {
  margin: 20px 0;
}

.fixed-point-types {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.fp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.fp-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.fp-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.phase-diagram {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.linearization-analysis {
  margin: 20px 0;
}

.linearization-concept {
  margin-bottom: 20px;
}

.eigenvalue-analysis {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.eigenvalue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.eigen-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.eigen-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.flow-diagram {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.critical-exponents {
  margin: 20px 0;
}

.exponent-relations {
  margin-bottom: 20px;
}

.exponent-table {
  margin: 20px 0;
}

.exponent-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.exponent-table th,
.exponent-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.exponent-table th {
  background: #6c5ce7;
  color: white;
  font-weight: 600;
}

.universality-concept {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.universality-visualization {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.rg-flow {
  margin: 20px 0;
}

.flow-concept {
  margin-bottom: 20px;
}

.flow-visualization {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.flow-interpretation {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
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
  
  .visualization-steps {
    flex-direction: column;
    gap: 20px;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .step-grid,
  .scaling-equations,
  .fp-grid,
  .eigenvalue-grid {
    grid-template-columns: 1fr;
  }
}
</style>