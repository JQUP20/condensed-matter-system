<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.4.2 性质预测</h1>
      <p class="chapter-subtitle">机器学习驱动的材料性质预测</p>
    </div>

    <div class="content-section">
      <h2>材料性质预测概述</h2>
      <p>
        材料性质预测是材料信息学的核心任务，通过机器学习模型建立材料结构与性质之间的映射关系，
        实现快速、准确的性质预测，大幅减少实验和计算成本。
      </p>

      <div class="prediction-pipeline">
        <h3>预测流程</h3>
        <div class="pipeline-steps">
          <div class="pipeline-step">
            <div class="step-icon">🧬</div>
            <h4>结构表示</h4>
            <p>将材料结构转换为机器学习可处理的特征向量</p>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step">
            <div class="step-icon">🤖</div>
            <h4>模型训练</h4>
            <p>使用已知数据训练预测模型</p>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step">
            <div class="step-icon">🎯</div>
            <h4>性质预测</h4>
            <p>对新材料进行性质预测</p>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step">
            <div class="step-icon">✅</div>
            <h4>验证优化</h4>
            <p>实验验证并优化模型</p>
          </div>
        </div>
      </div>

      <h2>主要预测性质</h2>
      <div class="properties-grid">
        <div class="property-category electronic">
          <h3>电子性质</h3>
          <div class="property-list">
            <div class="property-item">
              <h4>带隙</h4>
              <p>决定材料的导电性和光学性质</p>
              <div class="formula-container">
                <div class="math-display">
                  $$E_g = E_c - E_v$$
                </div>
              </div>
            </div>
            <div class="property-item">
              <h4>功函数</h4>
              <p>电子从材料表面逸出所需的最小能量</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\Phi = E_{vac} - E_F$$
                </div>
              </div>
            </div>
            <div class="property-item">
              <h4>介电常数</h4>
              <p>材料对电场的响应</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\varepsilon = \varepsilon_\infty + \sum_i \frac{f_i}{\omega_i^2 - \omega^2 - i\gamma_i\omega}$$
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="property-category mechanical">
          <h3>力学性质</h3>
          <div class="property-list">
            <div class="property-item">
              <h4>弹性模量</h4>
              <p>材料抵抗弹性变形的能力</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\sigma_{ij} = C_{ijkl} \varepsilon_{kl}$$
                </div>
              </div>
            </div>
            <div class="property-item">
              <h4>硬度</h4>
              <p>材料抵抗局部塑性变形的能力</p>
            </div>
            <div class="property-item">
              <h4>断裂韧性</h4>
              <p>材料抵抗裂纹扩展的能力</p>
            </div>
          </div>
        </div>

        <div class="property-category thermal">
          <h3>热学性质</h3>
          <div class="property-list">
            <div class="property-item">
              <h4>热导率</h4>
              <p>材料传导热量的能力</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\kappa = \frac{1}{3} C_v v \ell$$
                </div>
              </div>
            </div>
            <div class="property-item">
              <h4>热膨胀系数</h4>
              <p>温度变化引起的体积变化</p>
            </div>
            <div class="property-item">
              <h4>比热容</h4>
              <p>单位质量材料升高单位温度所需热量</p>
            </div>
          </div>
        </div>

        <div class="property-category magnetic">
          <h3>磁学性质</h3>
          <div class="property-list">
            <div class="property-item">
              <h4>磁化强度</h4>
              <p>材料的磁矩密度</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\mathbf{M} = \chi \mathbf{H}$$
                </div>
              </div>
            </div>
            <div class="property-item">
              <h4>居里温度</h4>
              <p>铁磁-顺磁相变温度</p>
            </div>
            <div class="property-item">
              <h4>磁各向异性</h4>
              <p>磁性质的方向依赖性</p>
            </div>
          </div>
        </div>
      </div>

      <h2>结构表示方法</h2>
      <div class="representation-methods">
        <div class="method-card">
          <h3>传统描述符</h3>
          <div class="descriptor-types">
            <div class="descriptor-type">
              <h4>组成描述符</h4>
              <ul>
                <li>元素分数</li>
                <li>平均原子性质</li>
                <li>元素性质分布</li>
              </ul>
              <div class="example">
                <strong>示例：</strong>平均电负性
                <div class="math-display">
                  $$\bar{\chi} = \sum_i f_i \chi_i$$
                </div>
              </div>
            </div>
            <div class="descriptor-type">
              <h4>结构描述符</h4>
              <ul>
                <li>径向分布函数</li>
                <li>配位数</li>
                <li>键角分布</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="method-card">
          <h3>现代表示学习</h3>
          <div class="modern-methods">
            <div class="method-detail">
              <h4>图神经网络</h4>
              <p>将晶体结构表示为图，原子为节点，化学键为边</p>
              <div class="architecture-diagram">
                <div class="layer">原子特征</div>
                <div class="arrow-down">↓</div>
                <div class="layer">图卷积层</div>
                <div class="arrow-down">↓</div>
                <div class="layer">池化层</div>
                <div class="arrow-down">↓</div>
                <div class="layer">预测层</div>
              </div>
            </div>
            <div class="method-detail">
              <h4>Transformer</h4>
              <p>使用注意力机制处理原子序列</p>
              <div class="formula-container">
                <div class="math-display">
                  $$\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>预测模型类型</h2>
      <div class="model-types">
        <div class="model-category">
          <h3>传统机器学习</h3>
          <div class="traditional-models">
            <div class="model-card">
              <h4>随机森林</h4>
              <div class="model-info">
                <div class="pros">
                  <h5>优点</h5>
                  <ul>
                    <li>处理非线性关系</li>
                    <li>特征重要性分析</li>
                    <li>抗过拟合能力强</li>
                  </ul>
                </div>
                <div class="cons">
                  <h5>缺点</h5>
                  <ul>
                    <li>难以处理高维稀疏数据</li>
                    <li>对噪声敏感</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="model-card">
              <h4>支持向量机</h4>
              <div class="model-info">
                <div class="pros">
                  <h5>优点</h5>
                  <ul>
                    <li>高维数据处理</li>
                    <li>核函数灵活性</li>
                    <li>泛化能力强</li>
                  </ul>
                </div>
                <div class="cons">
                  <h5>缺点</h5>
                  <ul>
                    <li>大数据集计算慢</li>
                    <li>参数选择困难</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="model-card">
              <h4>梯度提升</h4>
              <div class="model-info">
                <div class="pros">
                  <h5>优点</h5>
                  <ul>
                    <li>预测精度高</li>
                    <li>处理缺失值</li>
                    <li>特征选择自动化</li>
                  </ul>
                </div>
                <div class="cons">
                  <h5>缺点</h5>
                  <ul>
                    <li>容易过拟合</li>
                    <li>训练时间长</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="model-category">
          <h3>深度学习</h3>
          <div class="deep-models">
            <div class="model-card">
              <h4>多层感知机</h4>
              <div class="architecture">
                <div class="layer-info">
                  <span>输入层</span>
                  <span>隐藏层</span>
                  <span>输出层</span>
                </div>
                <div class="formula-container">
                  <div class="math-display">
                    $$y = f(W_n \sigma(W_{n-1} \sigma(...\sigma(W_1 x + b_1)...) + b_{n-1}) + b_n)$$
                  </div>
                </div>
              </div>
            </div>

            <div class="model-card">
              <h4>卷积神经网络</h4>
              <div class="cnn-features">
                <div class="feature">
                  <h5>局部连接</h5>
                  <p>捕获局部结构特征</p>
                </div>
                <div class="feature">
                  <h5>参数共享</h5>
                  <p>减少参数数量</p>
                </div>
                <div class="feature">
                  <h5>平移不变性</h5>
                  <p>对结构变化鲁棒</p>
                </div>
              </div>
            </div>

            <div class="model-card">
              <h4>图神经网络</h4>
              <div class="gnn-types">
                <div class="gnn-type">
                  <h5>GCN</h5>
                  <p>图卷积网络</p>
                </div>
                <div class="gnn-type">
                  <h5>GraphSAGE</h5>
                  <p>图采样聚合</p>
                </div>
                <div class="gnn-type">
                  <h5>GAT</h5>
                  <p>图注意力网络</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>模型评估与优化</h2>
      <div class="evaluation-optimization">
        <div class="evaluation-metrics">
          <h3>评估指标</h3>
          <div class="metrics-grid">
            <div class="metric-card">
              <h4>回归指标</h4>
              <div class="metric-formulas">
                <div class="metric">
                  <span class="metric-name">MAE</span>
                  <div class="math-display">
                    $$\text{MAE} = \frac{1}{n}\sum_{i=1}^n |y_i - \hat{y}_i|$$
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-name">RMSE</span>
                  <div class="math-display">
                    $$\text{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^n (y_i - \hat{y}_i)^2}$$
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-name">R²</span>
                  <div class="math-display">
                    $$R^2 = 1 - \frac{\sum_{i=1}^n (y_i - \hat{y}_i)^2}{\sum_{i=1}^n (y_i - \bar{y})^2}$$
                  </div>
                </div>
              </div>
            </div>

            <div class="metric-card">
              <h4>分类指标</h4>
              <div class="metric-formulas">
                <div class="metric">
                  <span class="metric-name">准确率</span>
                  <div class="math-display">
                    $$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-name">F1分数</span>
                  <div class="math-display">
                    $$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-name">AUC</span>
                  <p>ROC曲线下面积</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="optimization-strategies">
          <h3>优化策略</h3>
          <div class="strategy-list">
            <div class="strategy-item">
              <h4>超参数优化</h4>
              <div class="optimization-methods">
                <span class="method">网格搜索</span>
                <span class="method">随机搜索</span>
                <span class="method">贝叶斯优化</span>
                <span class="method">遗传算法</span>
              </div>
            </div>
            <div class="strategy-item">
              <h4>正则化技术</h4>
              <div class="regularization-methods">
                <div class="reg-method">
                  <h5>L1正则化</h5>
                  <div class="math-display">
                    $$\mathcal{L} = \mathcal{L}_0 + \lambda \sum_i |w_i|$$
                  </div>
                </div>
                <div class="reg-method">
                  <h5>L2正则化</h5>
                  <div class="math-display">
                    $$\mathcal{L} = \mathcal{L}_0 + \lambda \sum_i w_i^2$$
                  </div>
                </div>
                <div class="reg-method">
                  <h5>Dropout</h5>
                  <p>随机丢弃神经元</p>
                </div>
              </div>
            </div>
            <div class="strategy-item">
              <h4>集成学习</h4>
              <div class="ensemble-methods">
                <div class="ensemble-type">
                  <h5>Bagging</h5>
                  <p>Bootstrap聚合</p>
                </div>
                <div class="ensemble-type">
                  <h5>Boosting</h5>
                  <p>序列学习</p>
                </div>
                <div class="ensemble-type">
                  <h5>Stacking</h5>
                  <p>模型堆叠</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>应用案例</h2>
      <div class="application-cases">
        <div class="case-study">
          <h3>带隙预测</h3>
          <div class="case-details">
            <div class="case-info">
              <h4>研究背景</h4>
              <p>
                带隙是半导体材料最重要的性质之一，传统DFT计算存在系统性误差，
                需要昂贵的混合泛函或GW计算进行修正。
              </p>
              
              <h4>数据集</h4>
              <ul>
                <li>Materials Project: 100,000+ 化合物</li>
                <li>实验带隙数据: 6,000+ 材料</li>
                <li>HSE06计算结果: 1,000+ 材料</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>预测结果</h4>
              <div class="performance-metrics">
                <div class="performance-item">
                  <span class="metric-value">0.3 eV</span>
                  <span class="metric-label">MAE</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">0.92</span>
                  <span class="metric-label">R²</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">1000×</span>
                  <span class="metric-label">加速比</span>
                </div>
              </div>
              <div class="model-comparison">
                <h5>模型对比</h5>
                <div class="comparison-table">
                  <div class="table-row header">
                    <span>模型</span>
                    <span>MAE (eV)</span>
                    <span>R²</span>
                  </div>
                  <div class="table-row">
                    <span>随机森林</span>
                    <span>0.45</span>
                    <span>0.87</span>
                  </div>
                  <div class="table-row">
                    <span>XGBoost</span>
                    <span>0.38</span>
                    <span>0.90</span>
                  </div>
                  <div class="table-row">
                    <span>GNN</span>
                    <span>0.30</span>
                    <span>0.92</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-study">
          <h3>弹性模量预测</h3>
          <div class="case-details">
            <div class="case-info">
              <h4>研究背景</h4>
              <p>
                弹性模量决定材料的机械性能，对结构材料设计至关重要。
                传统计算需要精确的应力-应变关系计算。
              </p>
              
              <h4>特征工程</h4>
              <ul>
                <li>原子性质: 原子半径、体积模量</li>
                <li>键合特征: 键长、键角、配位数</li>
                <li>电子结构: 价电子数、轨道占据</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>预测结果</h4>
              <div class="performance-metrics">
                <div class="performance-item">
                  <span class="metric-value">15 GPa</span>
                  <span class="metric-label">MAE</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">0.89</span>
                  <span class="metric-label">R²</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">100×</span>
                  <span class="metric-label">加速比</span>
                </div>
              </div>
              <div class="feature-importance">
                <h5>特征重要性</h5>
                <div class="importance-bars">
                  <div class="importance-bar">
                    <span class="feature-name">平均体积模量</span>
                    <div class="bar" style="width: 100%"></div>
                    <span class="importance-value">0.35</span>
                  </div>
                  <div class="importance-bar">
                    <span class="feature-name">密度</span>
                    <div class="bar" style="width: 80%"></div>
                    <span class="importance-value">0.28</span>
                  </div>
                  <div class="importance-bar">
                    <span class="feature-name">平均原子半径</span>
                    <div class="bar" style="width: 60%"></div>
                    <span class="importance-value">0.21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-study">
          <h3>热导率预测</h3>
          <div class="case-details">
            <div class="case-info">
              <h4>研究背景</h4>
              <p>
                热导率对热电材料和热管理材料设计重要。
                传统计算需要声子输运理论，计算复杂度高。
              </p>
              
              <h4>挑战</h4>
              <ul>
                <li>多尺度物理过程</li>
                <li>温度依赖性</li>
                <li>缺陷和界面效应</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>预测结果</h4>
              <div class="performance-metrics">
                <div class="performance-item">
                  <span class="metric-value">0.3</span>
                  <span class="metric-label">log MAE</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">0.85</span>
                  <span class="metric-label">R²</span>
                </div>
                <div class="performance-item">
                  <span class="metric-value">10⁴×</span>
                  <span class="metric-label">加速比</span>
                </div>
              </div>
              <div class="prediction-challenges">
                <h5>预测挑战</h5>
                <div class="challenge-list">
                  <div class="challenge">
                    <h6>数据稀缺</h6>
                    <p>高质量实验数据有限</p>
                  </div>
                  <div class="challenge">
                    <h6>尺度跨越</h6>
                    <p>从原子到宏观的多尺度建模</p>
                  </div>
                  <div class="challenge">
                    <h6>温度效应</h6>
                    <p>温度相关的非线性行为</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>前沿发展</h2>
      <div class="frontier-developments">
        <div class="development-area">
          <h3>多任务学习</h3>
          <div class="development-content">
            <p>
              同时预测多个相关性质，利用性质间的相关性提高预测精度。
            </p>
            <div class="multitask-architecture">
              <div class="shared-layers">
                <h4>共享特征提取层</h4>
                <p>学习通用的材料表示</p>
              </div>
              <div class="task-specific-layers">
                <h4>任务特定层</h4>
                <div class="task-outputs">
                  <span class="task">带隙</span>
                  <span class="task">弹性模量</span>
                  <span class="task">热导率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="development-area">
          <h3>不确定性量化</h3>
          <div class="development-content">
            <p>
              量化预测的不确定性，为材料设计提供可靠性评估。
            </p>
            <div class="uncertainty-methods">
              <div class="method">
                <h4>贝叶斯神经网络</h4>
                <p>参数分布建模</p>
              </div>
              <div class="method">
                <h4>集成方法</h4>
                <p>多模型预测分布</p>
              </div>
              <div class="method">
                <h4>Dropout推理</h4>
                <p>Monte Carlo Dropout</p>
              </div>
            </div>
          </div>
        </div>

        <div class="development-area">
          <h3>主动学习</h3>
          <div class="development-content">
            <p>
              智能选择最有价值的样本进行标注，最大化学习效率。
            </p>
            <div class="active-learning-cycle">
              <div class="al-step">
                <h4>1. 初始训练</h4>
                <p>小规模标注数据</p>
              </div>
              <div class="al-step">
                <h4>2. 不确定性评估</h4>
                <p>识别高不确定性样本</p>
              </div>
              <div class="al-step">
                <h4>3. 样本选择</h4>
                <p>选择最有价值样本</p>
              </div>
              <div class="al-step">
                <h4>4. 标注更新</h4>
                <p>获取新标注数据</p>
              </div>
            </div>
          </div>
        </div>

        <div class="development-area">
          <h3>可解释AI</h3>
          <div class="development-content">
            <p>
              理解模型决策过程，发现新的物理规律和设计原则。
            </p>
            <div class="interpretability-methods">
              <div class="interp-method">
                <h4>SHAP</h4>
                <p>Shapley值特征重要性</p>
              </div>
              <div class="interp-method">
                <h4>LIME</h4>
                <p>局部线性解释</p>
              </div>
              <div class="interp-method">
                <h4>注意力可视化</h4>
                <p>关键结构区域识别</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>挑战与展望</h2>
      <div class="challenges-outlook">
        <div class="challenges">
          <h3>主要挑战</h3>
          <div class="challenge-items">
            <div class="challenge-item">
              <h4>数据质量与一致性</h4>
              <p>不同来源数据的标准化和质量控制</p>
            </div>
            <div class="challenge-item">
              <h4>外推能力</h4>
              <p>对训练集外化学空间的预测能力</p>
            </div>
            <div class="challenge-item">
              <h4>多尺度建模</h4>
              <p>从原子到宏观性质的跨尺度预测</p>
            </div>
            <div class="challenge-item">
              <h4>稀有材料预测</h4>
              <p>训练数据稀少的材料类别</p>
            </div>
          </div>
        </div>

        <div class="outlook">
          <h3>发展展望</h3>
          <div class="outlook-items">
            <div class="outlook-item">
              <h4>基础模型</h4>
              <p>预训练的通用材料表示模型</p>
            </div>
            <div class="outlook-item">
              <h4>物理约束</h4>
              <p>融入物理定律的机器学习模型</p>
            </div>
            <div class="outlook-item">
              <h4>实时预测</h4>
              <p>边缘计算和在线学习</p>
            </div>
            <div class="outlook-item">
              <h4>人机协作</h4>
              <p>专家知识与AI的深度融合</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_4_2',
  mounted() {
    // 渲染数学公式
    if (window.renderMathInElement) {
      this.$nextTick(() => {
        window.renderMathInElement(this.$el);
      });
    }
  },
  updated() {
    // 更新时重新渲染数学公式
    if (window.renderMathInElement) {
      this.$nextTick(() => {
        window.renderMathInElement(this.$el);
      });
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #9C27B0;
}

.chapter-header h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.chapter-subtitle {
  font-size: 1.2em;
  color: #7f8c8d;
  font-style: italic;
}

.content-section {
  margin-bottom: 30px;
}

.content-section h2 {
  color: #34495e;
  font-size: 1.8em;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 4px solid #9C27B0;
}

.content-section h3 {
  color: #2c3e50;
  font-size: 1.4em;
  margin-top: 20px;
  margin-bottom: 10px;
}

.content-section p {
  margin-bottom: 15px;
  text-align: justify;
}

.prediction-pipeline {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 20px 0;
  color: white;
}

.prediction-pipeline h3 {
  color: white;
  text-align: center;
  margin-bottom: 25px;
}

.pipeline-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.pipeline-step {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  min-width: 180px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.step-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.pipeline-step h4 {
  color: white;
  margin-bottom: 8px;
  font-size: 1.1em;
}

.pipeline-step p {
  font-size: 0.9em;
  margin: 0;
  opacity: 0.9;
}

.pipeline-arrow {
  font-size: 1.5em;
  color: white;
  font-weight: bold;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-category {
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid;
}

.electronic {
  background: #e3f2fd;
  border-left-color: #2196f3;
}

.mechanical {
  background: #fff3e0;
  border-left-color: #ff9800;
}

.thermal {
  background: #ffebee;
  border-left-color: #f44336;
}

.magnetic {
  background: #e8f5e8;
  border-left-color: #4caf50;
}

.property-category h3 {
  margin-bottom: 15px;
  text-align: center;
}

.electronic h3 { color: #1976d2; }
.mechanical h3 { color: #e65100; }
.thermal h3 { color: #c62828; }
.magnetic h3 { color: #2e7d32; }

.property-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.property-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.property-item h4 {
  margin-bottom: 8px;
  font-size: 1.1em;
}

.property-item p {
  margin-bottom: 10px;
  font-size: 0.9em;
}

.formula-container {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
}

.math-display {
  text-align: center;
  margin: 10px 0;
  font-size: 1em;
}

.representation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.method-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #9C27B0;
}

.method-card h3 {
  color: #7b1fa2;
  margin-bottom: 15px;
  text-align: center;
}

.descriptor-types {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.descriptor-type {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.descriptor-type h4 {
  color: #7b1fa2;
  margin-bottom: 10px;
}

.descriptor-type ul {
  margin-left: 20px;
  margin-bottom: 10px;
}

.descriptor-type li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.example {
  background: #f3e5f5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.modern-methods {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.method-detail {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.method-detail h4 {
  color: #7b1fa2;
  margin-bottom: 10px;
}

.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.layer {
  background: #e1bee7;
  padding: 8px 16px;
  border-radius: 20px;
  color: #4a148c;
  font-weight: 500;
  text-align: center;
  min-width: 120px;
}

.arrow-down {
  font-size: 1.2em;
  color: #7b1fa2;
}

.model-types {
  margin: 20px 0;
}

.model-category {
  margin-bottom: 30px;
}

.traditional-models, .deep-models {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.model-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #9C27B0;
}

.model-card h4 {
  color: #7b1fa2;
  margin-bottom: 15px;
  text-align: center;
}

.model-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.pros, .cons {
  padding: 10px;
  border-radius: 5px;
}

.pros {
  background: #e8f5e8;
}

.cons {
  background: #ffebee;
}

.pros h5 {
  color: #2e7d32;
  margin-bottom: 8px;
}

.cons h5 {
  color: #c62828;
  margin-bottom: 8px;
}

.pros ul, .cons ul {
  margin-left: 15px;
}

.pros li, .cons li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.architecture {
  text-align: center;
  margin: 15px 0;
}

.layer-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.layer-info span {
  background: #e1bee7;
  padding: 5px 10px;
  border-radius: 15px;
  color: #4a148c;
  font-size: 0.9em;
}

.cnn-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin: 15px 0;
}

.feature {
  background: #f3e5f5;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.feature h5 {
  color: #7b1fa2;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.feature p {
  font-size: 0.8em;
  margin: 0;
}

.gnn-types {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.gnn-type {
  text-align: center;
  background: #f3e5f5;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
  margin: 0 5px;
}

.gnn-type h5 {
  color: #7b1fa2;
  margin-bottom: 5px;
}

.gnn-type p {
  font-size: 0.8em;
  margin: 0;
}

.evaluation-optimization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.evaluation-metrics, .optimization-strategies {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.evaluation-metrics h3, .optimization-strategies h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.metrics-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.metric-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.metric-card h4 {
  color: #9C27B0;
  margin-bottom: 10px;
  text-align: center;
}

.metric-formulas {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metric {
  display: flex;
  align-items: center;
  gap: 10px;
}

.metric-name {
  background: #e1bee7;
  padding: 4px 8px;
  border-radius: 12px;
  color: #4a148c;
  font-weight: 500;
  min-width: 60px;
  text-align: center;
  font-size: 0.9em;
}

.strategy-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.strategy-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.strategy-item h4 {
  color: #9C27B0;
  margin-bottom: 10px;
}

.optimization-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.method {
  background: #e1bee7;
  padding: 4px 8px;
  border-radius: 12px;
  color: #4a148c;
  font-size: 0.8em;
}

.regularization-methods {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.reg-method {
  background: #f3e5f5;
  padding: 10px;
  border-radius: 5px;
}

.reg-method h5 {
  color: #7b1fa2;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.reg-method p {
  font-size: 0.8em;
  margin: 0;
}

.ensemble-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px 0;
}

.ensemble-type {
  background: #f3e5f5;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.ensemble-type h5 {
  color: #7b1fa2;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.ensemble-type p {
  font-size: 0.8em;
  margin: 0;
}

.application-cases {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 20px 0;
}

.case-study {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid #9C27B0;
}

.case-study h3 {
  color: #7b1fa2;
  margin-bottom: 20px;
  text-align: center;
}

.case-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.case-info, .case-results {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.case-info h4, .case-results h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.case-info ul {
  margin-left: 20px;
}

.case-info li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.performance-metrics {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.performance-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3e5f5;
  padding: 15px;
  border-radius: 8px;
  flex: 1;
  margin: 0 5px;
}

.metric-value {
  font-size: 1.2em;
  font-weight: bold;
  color: #7b1fa2;
  margin-bottom: 5px;
}

.metric-label {
  font-size: 0.9em;
  color: #666;
}

.model-comparison {
  margin: 15px 0;
}

.model-comparison h5 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.comparison-table {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 8px;
  border-radius: 5px;
}

.table-row.header {
  background: #9C27B0;
  color: white;
  font-weight: bold;
}

.table-row:not(.header) {
  background: #f3e5f5;
}

.feature-importance {
  margin: 15px 0;
}

.feature-importance h5 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.importance-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.importance-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-name {
  min-width: 120px;
  font-size: 0.9em;
}

.bar {
  height: 20px;
  background: linear-gradient(90deg, #9C27B0, #e1bee7);
  border-radius: 10px;
  flex: 1;
  max-width: 100px;
}

.importance-value {
  font-weight: bold;
  color: #7b1fa2;
  font-size: 0.9em;
}

.prediction-challenges {
  margin: 15px 0;
}

.prediction-challenges h5 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.challenge-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.challenge {
  background: #fff3e0;
  padding: 10px;
  border-radius: 5px;
  border-left: 3px solid #ff9800;
}

.challenge h6 {
  color: #e65100;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.challenge p {
  font-size: 0.8em;
  margin: 0;
}

.frontier-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.development-area {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #9C27B0;
}

.development-area h3 {
  color: #7b1fa2;
  margin-bottom: 15px;
  text-align: center;
}

.development-content p {
  margin-bottom: 15px;
  font-size: 0.95em;
}

.multitask-architecture {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
}

.shared-layers, .task-specific-layers {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.shared-layers h4, .task-specific-layers h4 {
  color: #7b1fa2;
  margin-bottom: 8px;
  font-size: 1em;
}

.task-outputs {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.task {
  background: #e1bee7;
  padding: 5px 10px;
  border-radius: 12px;
  color: #4a148c;
  font-size: 0.8em;
}

.uncertainty-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin: 15px 0;
}

.method {
  background: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.method h4 {
  color: #7b1fa2;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.method p {
  font-size: 0.8em;
  margin: 0;
}

.active-learning-cycle {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin: 15px 0;
}

.al-step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e1bee7;
}

.al-step h4 {
  color: #7b1fa2;
  margin-bottom: 8px;
  font-size: 0.9em;
}

.al-step p {
  font-size: 0.8em;
  margin: 0;
}

.interpretability-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 15px 0;
}

.interp-method {
  background: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.interp-method h4 {
  color: #7b1fa2;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.interp-method p {
  font-size: 0.8em;
  margin: 0;
}

.challenges-outlook {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.challenges, .outlook {
  padding: 20px;
  border-radius: 8px;
}

.challenges {
  background: #ffebee;
  border-left: 4px solid #f44336;
}

.outlook {
  background: #e8f5e8;
  border-left: 4px solid #4CAF50;
}

.challenges h3 {
  color: #c62828;
  margin-bottom: 15px;
}

.outlook h3 {
  color: #2e7d32;
  margin-bottom: 15px;
}

.challenge-items, .outlook-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.challenge-item, .outlook-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.challenge-item h4 {
  color: #c62828;
  margin-bottom: 8px;
  font-size: 1em;
}

.outlook-item h4 {
  color: #2e7d32;
  margin-bottom: 8px;
  font-size: 1em;
}

.challenge-item p, .outlook-item p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .pipeline-steps {
    flex-direction: column;
  }
  
  .pipeline-arrow {
    transform: rotate(90deg);
  }
  
  .properties-grid {
    grid-template-columns: 1fr;
  }
  
  .representation-methods {
    grid-template-columns: 1fr;
  }
  
  .traditional-models, .deep-models {
    grid-template-columns: 1fr;
  }
  
  .model-info {
    grid-template-columns: 1fr;
  }
  
  .evaluation-optimization {
    grid-template-columns: 1fr;
  }
  
  .case-details {
    grid-template-columns: 1fr;
  }
  
  .frontier-developments {
    grid-template-columns: 1fr;
  }
  
  .challenges-outlook {
    grid-template-columns: 1fr;
  }
  
  .ensemble-methods {
    grid-template-columns: 1fr;
  }
  
  .uncertainty-methods {
    grid-template-columns: 1fr;
  }
  
  .active-learning-cycle {
    grid-template-columns: 1fr;
  }
  
  .interpretability-methods {
    grid-template-columns: 1fr;
  }
}
</style>