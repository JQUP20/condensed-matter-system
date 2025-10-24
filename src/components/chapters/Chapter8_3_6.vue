<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.6 与实验的比较</h1>
      <p class="chapter-subtitle">理论预测与实验观测的对话</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>了解量子横场Ising模型的实验实现</li>
        <li>掌握理论预测与实验结果的比较方法</li>
        <li>理解实验中的挑战和限制因素</li>
        <li>学习如何从实验数据提取理论参数</li>
        <li>认识理论模型的适用范围和局限性</li>
      </ul>
    </div>

    <div class="experimental-realizations">
      <h2>实验实现</h2>
      
      <div class="realization-overview">
        <h3>量子横场Ising模型的实验平台</h3>
        <p>
          量子横场Ising模型可以在多种实验平台中实现，
          每种平台都有其独特的优势和挑战：
        </p>
        
        <div class="platform-grid">
          <div class="platform-card magnetic">
            <h4>🧲 磁性材料</h4>
            <div class="platform-details">
              <h5>典型材料</h5>
              <ul>
                <li>CoNb₂O₆（钴铌酸盐）</li>
                <li>BaCo₂V₂O₈（钡钴钒酸盐）</li>
                <li>LiHoF₄（氟化锂钬）</li>
                <li>Cs₂CoCl₄（氯化铯钴）</li>
              </ul>
              
              <h5>实现机制</h5>
              <ul>
                <li>自旋链结构提供一维性</li>
                <li>外加磁场作为横场</li>
                <li>晶体场效应产生各向异性</li>
                <li>交换相互作用提供耦合</li>
              </ul>
              
              <h5>优势</h5>
              <ul>
                <li>天然的量子自旋系统</li>
                <li>参数可通过外场调节</li>
                <li>成熟的测量技术</li>
                <li>大系统尺寸</li>
              </ul>
              
              <h5>挑战</h5>
              <ul>
                <li>参数难以精确控制</li>
                <li>存在无序和缺陷</li>
                <li>三维耦合的影响</li>
                <li>温度效应</li>
              </ul>
            </div>
          </div>
          
          <div class="platform-card cold-atoms">
            <h4>❄️ 冷原子系统</h4>
            <div class="platform-details">
              <h5>实现方案</h5>
              <ul>
                <li>光晶格中的超冷原子</li>
                <li>Rydberg原子阵列</li>
                <li>离子阱系统</li>
                <li>极性分子气体</li>
              </ul>
              
              <h5>控制机制</h5>
              <ul>
                <li>激光强度控制隧穿</li>
                <li>微波场产生横场</li>
                <li>Feshbach共振调节相互作用</li>
                <li>光学势阱提供约束</li>
              </ul>
              
              <h5>优势</h5>
              <ul>
                <li>参数高度可控</li>
                <li>系统非常纯净</li>
                <li>可实现单原子分辨</li>
                <li>量子态的直接制备</li>
              </ul>
              
              <h5>挑战</h5>
              <ul>
                <li>系统尺寸相对较小</li>
                <li>有限的相干时间</li>
                <li>技术复杂度高</li>
                <li>测量破坏性</li>
              </ul>
            </div>
          </div>
          
          <div class="platform-card quantum-devices">
            <h4>💎 量子器件</h4>
            <div class="platform-details">
              <h5>器件类型</h5>
              <ul>
                <li>超导量子比特</li>
                <li>量子点阵列</li>
                <li>NV色心系统</li>
                <li>硅量子比特</li>
              </ul>
              
              <h5>操控方法</h5>
              <ul>
                <li>微波脉冲控制</li>
                <li>电压门调节</li>
                <li>激光操控</li>
                <li>磁场梯度</li>
              </ul>
              
              <h5>优势</h5>
              <ul>
                <li>精确的量子控制</li>
                <li>快速操作</li>
                <li>可编程性</li>
                <li>集成化潜力</li>
              </ul>
              
              <h5>挑战</h5>
              <ul>
                <li>相干时间限制</li>
                <li>串扰和噪声</li>
                <li>标定复杂</li>
                <li>规模化困难</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="hamiltonian-mapping">
        <h3>哈密顿量映射</h3>
        <p>
          不同实验平台如何映射到理论模型：
        </p>
        
        <div class="mapping-examples">
          <div class="mapping-card">
            <h4>磁性材料中的映射</h4>
            <p>
              对于准一维磁性材料，有效哈密顿量为：
            </p>
            <div class="formula-container">
              $$H_{\text{eff}} = -J_{\parallel} \sum_i S_i^z S_{i+1}^z - h_{\perp} \sum_i S_i^x - h_{\parallel} \sum_i S_i^z$$</div>
            <p>
              其中：</p><ul>              <li>$J_{\parallel}$：链内交换相互作用</li>              <li>$h_{\perp}$：横向磁场</li>              <li>$h_{\parallel}$：纵向磁场</li>
            </ul>
            
            <div class="parameter-relations"><h5>参数关系</h5><div class="formula-container">$$J = J_{\parallel}, \quad h = h_{\perp}$$</div><p>                纵向场$h_{\parallel}$破坏$\mathbb{Z}_2$对称性，
                需要在分析中考虑其影响。
              </p>
            </div>
          </div>
          
          <div class="mapping-card">
            <h4>冷原子系统中的映射</h4>
            <p>
              光晶格中的Bose-Hubbard模型在强相互作用极限下：</p><div class="formula-container">$$H_{\text{BH}} = -t \sum_{\langle i,j \rangle} (b_i^\dagger b_j + \text{h.c.}) + \frac{U}{2} \sum_i n_i(n_i-1) - \mu \sum_i n_i$$</div> <p>在Mott绝缘相附近，可以映射为： </p><div class="formula-container">$$H_{\text{eff}} = J_{\text{eff}} \sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z + h_{\text{eff}} \sum_i \sigma_i^x$$</div> <p>其中： </p><div class="formula-container">$$J_{\text{eff}} = \frac{4t^2}{U}, \quad h_{\text{eff}} = \mu - U/2$$</div>
          </div>
          
          <div class="mapping-card">
            <h4>量子器件中的映射</h4> <p>超导量子比特系统的哈密顿量： </p><div class="formula-container">$$H = \sum_i \frac{\omega_i}{2} \sigma_i^z + \sum_{\langle i,j \rangle} g_{ij} (\sigma_i^+ \sigma_j^- + \sigma_i^- \sigma_j^+) + \sum_i \Omega_i \sigma_i^x$$</div> <p>通过适当的参数选择，可以实现： </p><div class="formula-container">$$J = g_{ij}, \quad h = \Omega_i$$</div><p>              频率失谐$\omega_i$可以用来调节有效相互作用。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="experimental-observables">
      <h2>实验可观测量</h2>
      
      <div class="observable-categories">
        <h3>主要可观测量</h3>
        <p>
          实验中可以测量的物理量及其与理论的对应关系：
        </p>
        
        <div class="observable-grid">
          <div class="observable-card">
            <h4>🧭 磁化强度</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$\langle \sigma^x \rangle = \frac{1}{N} \sum_i \langle \sigma_i^x \rangle$$</div>
              
              <h5>实验测量</h5>
              <ul>
                <li><strong>磁性材料</strong>：磁化强度测量</li>
                <li><strong>冷原子</strong>：自旋极化测量</li> <li><strong>量子器件</strong>：量子态层析</li></ul> <h5>临界行为</h5><div class="formula-container">$$\langle \sigma^x \rangle \sim |h - h_c|^{\beta}$$</div>              <p>其中$\beta = 1/8$（二维Ising普适类）</p>
            </div>
          </div>
          
          <div class="observable-card">
            <h4>📊 磁化率</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$\chi = \frac{\partial \langle \sigma^x \rangle}{\partial h} = \beta \sum_i \langle \sigma_i^x \sigma_0^x \rangle_c$$</div><h5>实验测量</h5><ul>                <li><strong>交流磁化率</strong>：$\chi_{ac}(\omega, T)$</li>                <li><strong>静态磁化率</strong>：$\chi_{dc}(T)$</li>
                <li><strong>涨落测量</strong>：磁化涨落</li>
              </ul><h5>临界行为</h5><div class="formula-container">$$\chi \sim |h - h_c|^{-\gamma}$$</div>              <p>其中$\gamma = 7/4$</p>
            </div>
          </div>
          
          <div class="observable-card">
            <h4>🌡️ 比热</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$c = \frac{\partial \langle E \rangle}{\partial T} = \beta^2 (\langle E^2 \rangle - \langle E \rangle^2)$$</div>
              
              <h5>实验测量</h5>
              <ul>
                <li><strong>量热法</strong>：直接测量比热</li>
                <li><strong>弛豫法</strong>：热弛豫测量</li> <li><strong>调制法</strong>：交流量热法</li></ul> <h5>临界行为</h5><div class="formula-container">$$c \sim |h - h_c|^{-\alpha}$$</div>              <p>其中$\alpha = 0$（对数奇异性）</p>
            </div>
          </div>
          
          <div class="observable-card">
            <h4>🔗 关联函数</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$G(r) = \langle \sigma_0^x \sigma_r^x \rangle - \langle \sigma_0^x \rangle \langle \sigma_r^x \rangle$$</div><h5>实验测量</h5><ul>                <li><strong>中子散射</strong>：结构因子$S(q)$</li>
                <li><strong>光散射</strong>：动态结构因子</li>
                <li><strong>量子气体显微镜</strong>：直接关联测量</li>
              </ul><h5>临界行为</h5><div class="formula-container">$$G(r) \sim r^{-(d-2+\eta)} e^{-r/\xi}$$</div>              <p>其中$\eta = 1/4$，$\xi \sim |h - h_c|^{-\nu}$</p>
            </div>
          </div>
          
          <div class="observable-card">
            <h4>⚡ 动力学响应</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$S(\omega, q) = \int dt \, e^{i\omega t} \langle \sigma^x(q, t) \sigma^x(-q, 0) \rangle$$</div><h5>实验测量</h5><ul>                <li><strong>非弹性中子散射</strong>：$S(\omega, q)$</li>
                <li><strong>电子自旋共振</strong>：ESR谱</li>
                <li><strong>太赫兹光谱</strong>：动力学响应</li>
              </ul><h5>临界行为</h5><div class="formula-container">$$S(\omega, q) = q^{-2+\eta} f(\omega/q^z)$$</div>              <p>其中$z = 1$是动力学指数</p>
            </div>
          </div>
          
          <div class="observable-card">
            <h4>🎯 纠缠熵</h4>
            <div class="observable-details"><h5>理论表达式</h5><div class="formula-container">$$S_E = -\text{Tr}(\rho_A \ln \rho_A)$$</div>
              
              <h5>实验测量</h5>
              <ul>
                <li><strong>量子态层析</strong>：完整态重构</li>
                <li><strong>随机测量</strong>：阴影层析</li> <li><strong>干涉测量</strong>：Rényi熵</li></ul> <h5>临界行为</h5><div class="formula-container">$$S_E = \frac{c}{6} \ln L + \text{const}$$</div>              <p>其中$c = 1/2$是中心荷</p>
            </div>
          </div>
        </div>
      </div>

      <div class="measurement-techniques">
        <h3>测量技术</h3>
        <p>
          不同实验平台采用的主要测量技术：
        </p>
        
        <div class="technique-comparison">
          <div class="technique-table">
            <div class="table-header">
              <div class="header-cell">测量技术</div>
              <div class="header-cell">适用平台</div>
              <div class="header-cell">可观测量</div>
              <div class="header-cell">优势</div>
              <div class="header-cell">限制</div>
            </div>
            
            <div class="table-row"><div class="cell">磁化强度测量</div><div class="cell">磁性材料</div>              <div class="cell">$\langle \sigma^x \rangle$, $\chi$</div>
              <div class="cell">高精度、宽温度范围</div>
              <div class="cell">平均效应、慢速</div>
            </div>
            
            <div class="table-row"><div class="cell">中子散射</div><div class="cell">磁性材料</div>              <div class="cell">$S(q, \omega)$, 关联函数</div>
              <div class="cell">动量分辨、动力学信息</div>
              <div class="cell">需要大样品、昂贵</div>
            </div>
            
            <div class="table-row">
              <div class="cell">量子气体显微镜</div>
              <div class="cell">冷原子</div>
              <div class="cell">单原子分辨、关联</div>
              <div class="cell">直接观测、高分辨</div>
              <div class="cell">破坏性测量、技术复杂</div>
            </div>
            
            <div class="table-row">
              <div class="cell">量子态层析</div>
              <div class="cell">量子器件</div>
              <div class="cell">完整量子态、纠缠</div>
              <div class="cell">完整信息、快速</div>
              <div class="cell">指数标度、噪声敏感</div>
            </div>
            
            <div class="table-row">
              <div class="cell">时间分辨光谱</div>
              <div class="cell">多种平台</div>
              <div class="cell">动力学演化</div>
              <div class="cell">时间分辨、非侵入</div>
              <div class="cell">间接测量、解释复杂</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="theory-experiment-comparison">
      <h2>理论与实验的比较</h2>
      
      <div class="comparison-framework">
        <h3>比较框架</h3>
        <p>
          理论预测与实验结果的系统性比较需要考虑多个方面：
        </p>
        
        <div class="framework-aspects">
          <div class="aspect-card">
            <h4>📏 参数确定</h4>
            <div class="aspect-content"><h5>理论参数</h5><ul>                <li>交换耦合强度$J$</li>                <li>横场强度 $h$</li>                <li>温度 $T$</li>                <li>系统尺寸 $L$</li>
              </ul>
              
              <h5>实验参数</h5>
              <ul>
                <li>材料特性（晶格常数、交换积分）</li>
                <li>外场强度（磁场、激光功率）</li>
                <li>环境条件（温度、压力）</li>
                <li>样品尺寸和几何</li>
              </ul>
              
              <h5>参数映射</h5>
              <p>
                建立理论参数与实验参数的对应关系：</p><div class="formula-container">$$J_{\text{theory}} = f(J_{\text{exchange}}, \text{geometry})$$                $$h_{\text{theory}} = g(B_{\text{external}}, g_{\text{factor}})$$</div>
            </div>
          </div>
          
          <div class="aspect-card"> <h4>🎯 临界点定位</h4><div class="aspect-content"> <h5>理论预测</h5><div class="formula-container">$$h_c = J \quad \text{(精确结果)}$$</div>
              
              <h5>实验确定</h5>
              <ul>
                <li>磁化率峰值位置</li>
                <li>比热异常</li>
                <li>关联长度发散</li>
                <li>标度行为分析</li>
              </ul>
              
              <h5>比较方法</h5>
              <div class="comparison-methods"><div class="method-item"><h6>直接比较</h6>                  <p>比较理论预测的$h_c/J$与实验测定值</p>
                </div>
                <div class="method-item">
                  <h6>标度分析</h6>
                  <p>通过有限尺寸标度确定临界点</p>
                </div>
                <div class="method-item">
                  <h6>数据塌缩</h6>
                  <p>验证标度假设并提取临界点</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="aspect-card">
            <h4>📊 临界指数验证</h4>
            <div class="aspect-content">
              <h5>理论预测</h5><div class="critical-exponents-table"><div class="exponent-row">                  <span>$\nu = 1$</span>
                  <span>关联长度指数</span></div><div class="exponent-row">                  <span>$\gamma = 7/4$</span>
                  <span>磁化率指数</span></div><div class="exponent-row">                  <span>$\beta = 1/8$</span>
                  <span>序参量指数</span></div><div class="exponent-row">                  <span>$\alpha = 0$</span>
                  <span>比热指数</span>
                </div>
              </div><h5>实验测定</h5><ul>                <li>幂律拟合：$\chi \sim |h - h_c|^{-\gamma}$</li>
                <li>有限尺寸标度分析</li>
                <li>数据塌缩验证</li>
                <li>交叉现象研究</li>
              </ul>
              
              <h5>比较结果</h5>
              <p>
                大多数实验结果与理论预测在误差范围内一致，
                但存在系统性偏差的情况需要进一步分析。
              </p>
            </div>
          </div>
          
          <div class="aspect-card">
            <h4>🌊 动力学性质</h4>
            <div class="aspect-content"><h5>理论预测</h5><ul>                <li>动力学指数：$z = 1$</li>                <li>能隙：$\Delta = 2|h - h_c|$</li>                <li>群速度：$v = 2J$</li>                <li>弛豫时间：$\tau \sim \xi^z$</li>
              </ul>
              
              <h5>实验观测</h5>
              <ul>
                <li>非弹性中子散射谱</li>
                <li>太赫兹光谱</li>
                <li>量子淬火动力学</li>
                <li>弛豫时间测量</li>
              </ul>
              
              <h5>比较分析</h5>
              <p>
                动力学性质的比较更加复杂，
                需要考虑：
              </p>
              <ul>
                <li>有限温度效应</li>
                <li>无序和缺陷的影响</li>
                <li>测量时间尺度</li>
                <li>非平衡效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="case-studies">
        <h3>典型案例研究</h3>
        <p>
          以下是一些重要的理论-实验比较案例：
        </p>
        
        <div class="case-grid">
          <div class="case-card">
            <h4>案例1：CoNb₂O₆</h4>
            <div class="case-details">
              <h5>材料特性</h5>
              <ul><li>准一维钴链结构</li><li>强单轴各向异性</li>                <li>$J \approx 1.8$ K</li>                <li>$g_{\perp} \approx 5.0$</li>
              </ul><h5>实验结果</h5><ul>                <li>临界场：$H_c \approx 5.5$ T</li>                <li>临界指数：$\nu = 1.0 \pm 0.1$</li>                <li>动力学指数：$z = 1.0 \pm 0.1$</li>
              </ul><h5>理论比较</h5><div class="formula-container">$$\frac{h_c}{J} = \frac{g_{\perp} \mu_B H_c}{J} \approx 1.0$$</div><p>                与理论预测$h_c/J = 1$完美符合！
              </p>
              
              <h5>成功因素</h5>
              <ul>
                <li>良好的一维性</li>
                <li>清晰的量子相变</li>
                <li>精确的参数控制</li>
                <li>高质量单晶样品</li>
              </ul>
            </div>
          </div>
          
          <div class="case-card">
            <h4>案例2：LiHoF₄</h4>
            <div class="case-details">
              <h5>材料特性</h5>
              <ul>
                <li>稀土离子Ho³⁺</li>
                <li>偶极相互作用主导</li>
                <li>长程相互作用</li>
                <li>强横场各向异性</li>
              </ul>
              
              <h5>实验挑战</h5>
              <ul>
                <li>偶极相互作用的长程性</li>
                <li>核自旋的影响</li>
                <li>晶体场效应</li>
                <li>量子隧穿效应</li>
              </ul>
              
              <h5>理论修正</h5>
              <p>
                需要考虑长程相互作用的修正：
              </p><div class="formula-container">$$H = -\sum_{i&lt;j} J_{ij} \sigma_i^z \sigma_j^z - h \sum_i \sigma_i^x$$</div>
              <p>其中$J_{ij} \sim r_{ij}^{-3}$。
              </p>
              
              <h5>比较结果</h5>
              <ul>
                <li>临界行为基本符合</li>
                <li>临界指数有小幅偏差</li>
                <li>需要考虑有限尺寸效应</li>
                <li>动力学行为更复杂</li>
              </ul>
            </div>
          </div>
          
          <div class="case-card">
            <h4>案例3：冷原子实验</h4>
            <div class="case-details">
              <h5>实验设置</h5>
              <ul>
                <li>⁸⁷Rb原子在光晶格中</li>
                <li>Feshbach共振调节相互作用</li>
                <li>微波场产生横场</li>
                <li>量子气体显微镜观测</li>
              </ul>
              
              <h5>优势</h5>
              <ul>
                <li>参数精确可控</li>
                <li>单原子分辨率</li>
                <li>实时动力学观测</li>
                <li>任意初态制备</li>
              </ul>
              
              <h5>实验结果</h5>
              <ul>
                <li>清晰观测到量子相变</li>
                <li>关联函数直接测量</li>
                <li>纠缠熵的实验验证</li>
                <li>非平衡动力学研究</li>
              </ul>
              
              <h5>理论验证</h5>
              <ul>
                <li>临界点位置精确符合</li>
                <li>关联函数完美匹配</li>
                <li>动力学演化一致</li>
                <li>量子纠缠行为符合</li>
              </ul>
            </div>
          </div>
          
          <div class="case-card">
            <h4>案例4：超导量子比特</h4>
            <div class="case-details">
              <h5>系统设置</h5>
              <ul>
                <li>一维transmon量子比特链</li>
                <li>可调耦合器</li>
                <li>微波驱动场</li>
                <li>量子态层析测量</li>
              </ul>
              
              <h5>实现挑战</h5>
              <ul>
                <li>相干时间限制</li>
                <li>串扰和噪声</li>
                <li>参数标定精度</li>
                <li>测量保真度</li>
              </ul>
              
              <h5>实验成果</h5>
              <ul>
                <li>绝热量子相变演示</li>
                <li>临界点附近的标度行为</li>
                <li>量子纠缠的直接测量</li>
                <li>多体局域化研究</li>
              </ul>
              
              <h5>理论对比</h5>
              <ul>
                <li>短时间动力学符合良好</li>
                <li>长时间行为受退相干影响</li>
                <li>有限尺寸效应显著</li>
                <li>需要考虑开放系统效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="discrepancies-analysis">
      <h2>差异分析</h2>
      
      <div class="discrepancy-sources">
        <h3>理论与实验差异的来源</h3>
        <p>
          理论模型与实际实验之间的差异主要来源于：
        </p>
        
        <div class="source-categories">
          <div class="source-card">
            <h4>🔧 模型近似</h4>
            <div class="source-details">
              <h5>主要近似</h5>
              <ul>
                <li><strong>一维近似</strong>：忽略链间耦合</li>
                <li><strong>最近邻相互作用</strong>：忽略长程相互作用</li>
                <li><strong>自旋-1/2近似</strong>：忽略高自旋态</li>
                <li><strong>完美晶格</strong>：忽略无序和缺陷</li>
              </ul>
              
              <h5>修正方法</h5>
              <ul>
                <li>包含链间耦合：准一维模型</li>
                <li>考虑长程相互作用</li>
                <li>高自旋推广</li>
                <li>无序效应的处理</li>
              </ul><h5>影响评估</h5><div class="formula-container">$$\Delta h_c \sim \frac{J_{\perp}}{J_{\parallel}}, \quad \Delta \nu \sim \frac{J_{\text{long}}}{J_{\text{short}}}$$</div>
            </div>
          </div>
          
          <div class="source-card">
            <h4>🌡️ 环境效应</h4>
            <div class="source-details">
              <h5>温度效应</h5>
              <ul>
                <li>有限温度涨落</li>
                <li>热激发的影响</li>
                <li>量子-经典交叉</li>
                <li>临界区域的缩小</li>
              </ul>
              
              <h5>噪声和退相干</h5>
              <ul>
                <li>环境噪声</li>
                <li>测量反作用</li>
                <li>相干时间限制</li> <li>马尔可夫近似失效</li></ul> <h5>定量分析</h5><div class="formula-container">$$\xi_{\text{thermal}} \sim \frac{v}{k_B T}, \quad \tau_{\text{coherence}} \sim \frac{1}{\gamma}$$</div><p>                其中$v$是特征速度，$\gamma$是退相干率。
              </p>
            </div>
          </div>
          
          <div class="source-card">
            <h4>📏 有限尺寸效应</h4>
            <div class="source-details">
              <h5>尺寸限制</h5>
              <ul>
                <li>关联长度截断</li>
                <li>边界条件影响</li>
                <li>临界点漂移</li>
                <li>标度行为修正</li>
              </ul>
              
              <h5>几何效应</h5>
              <ul>
                <li>样品形状</li>
                <li>表面效应</li>
                <li>维度交叉</li>
                <li>各向异性</li>
              </ul><h5>标度修正</h5><div class="formula-container">$$\chi_L = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu}) \left[1 + \frac{A}{L^{\omega}} + \cdots \right]$$</div><p>                其中$\omega$是修正指数。
              </p>
            </div>
          </div>
          
          <div class="source-card">
            <h4>🔬 测量限制</h4>
            <div class="source-details">
              <h5>分辨率限制</h5>
              <ul>
                <li>能量分辨率</li>
                <li>时间分辨率</li>
                <li>空间分辨率</li>
                <li>统计精度</li>
              </ul>
              
              <h5>系统误差</h5>
              <ul>
                <li>标定误差</li>
                <li>背景信号</li>
                <li>仪器响应</li>
                <li>数据处理偏差</li>
              </ul>
              
              <h5>测量反作用</h5>
              <ul>
                <li>量子测量的破坏性</li>
                <li>探测光的影响</li>
                <li>测量时间的限制</li>
                <li>投影测量的局限</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="improvement-strategies">
        <h3>改进策略</h3>
        <p>
          为了提高理论与实验的一致性，可以采用以下策略：
        </p>
        
        <div class="strategy-grid">
          <div class="strategy-card">
            <h4>🎯 理论改进</h4>
            <ul>
              <li><strong>更精确的模型</strong>：包含更多物理效应</li>
              <li><strong>数值方法</strong>：精确数值计算</li>
              <li><strong>微扰修正</strong>：系统性微扰展开</li>
              <li><strong>重整化群</strong>：处理多尺度问题</li>
            </ul>
          </div>
          
          <div class="strategy-card">
            <h4>🔬 实验优化</h4>
            <ul>
              <li><strong>样品质量</strong>：更高质量的样品</li>
              <li><strong>测量精度</strong>：提高测量精度</li>
              <li><strong>环境控制</strong>：更好的环境控制</li>
              <li><strong>新技术</strong>：开发新的测量技术</li>
            </ul>
          </div>
          
          <div class="strategy-card">
            <h4>📊 数据分析</h4>
            <ul>
              <li><strong>统计方法</strong>：更好的统计分析</li>
              <li><strong>误差分析</strong>：系统性误差分析</li>
              <li><strong>拟合方法</strong>：改进的拟合算法</li>
              <li><strong>机器学习</strong>：AI辅助数据分析</li>
            </ul>
          </div>
          
          <div class="strategy-card">
            <h4>🤝 理论-实验协作</h4>
            <ul>
              <li><strong>紧密合作</strong>：理论与实验的密切合作</li>
              <li><strong>实时反馈</strong>：实验结果的实时理论分析</li>
              <li><strong>参数优化</strong>：基于理论的实验设计</li>
              <li><strong>新现象预测</strong>：理论预测新的实验现象</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="future-directions">
      <h2>未来发展方向</h2>
      
      <div class="research-frontiers">
        <h3>研究前沿</h3>
        <p>
          量子横场Ising模型的理论与实验研究正在向以下方向发展：
        </p>
        
        <div class="frontier-areas">
          <div class="frontier-card">
            <h4>🚀 新实验平台</h4>
            <div class="frontier-content">
              <h5>新兴技术</h5>
              <ul>
                <li><strong>拓扑量子材料</strong>：Majorana费米子系统</li>
                <li><strong>二维材料</strong>：石墨烯、过渡金属硫化物</li>
                <li><strong>人工量子系统</strong>：超导电路、光子系统</li>
                <li><strong>混合系统</strong>：不同平台的耦合</li>
              </ul>
              
              <h5>技术突破</h5>
              <ul>
                <li>更长的相干时间</li>
                <li>更大的系统尺寸</li>
                <li>更精确的控制</li>
                <li>实时量子反馈</li>
              </ul>
            </div>
          </div>
          
          <div class="frontier-card">
            <h4>🧠 理论发展</h4>
            <div class="frontier-content">
              <h5>新理论方法</h5>
              <ul>
                <li><strong>机器学习</strong>：神经网络量子态</li>
                <li><strong>张量网络</strong>：高效数值方法</li>
                <li><strong>量子场论</strong>：连续极限描述</li>
                <li><strong>拓扑理论</strong>：拓扑相变</li>
              </ul>
              
              <h5>新物理现象</h5>
              <ul>
                <li>多体局域化</li>
                <li>时间晶体</li>
                <li>量子疤痕</li>
                <li>非平衡相变</li>
              </ul>
            </div>
          </div>
          
          <div class="frontier-card">
            <h4>💻 计算方法</h4>
            <div class="frontier-content">
              <h5>算法创新</h5>
              <ul>
                <li><strong>量子算法</strong>：变分量子本征求解器</li>
                <li><strong>经典算法</strong>：改进的DMRG、QMC</li>
                <li><strong>混合算法</strong>：量子-经典混合</li>
                <li><strong>并行计算</strong>：大规模并行算法</li>
              </ul>
              
              <h5>计算资源</h5>
              <ul>
                <li>量子计算机</li>
                <li>超级计算机</li>
                <li>GPU加速</li>
                <li>云计算平台</li>
              </ul>
            </div>
          </div>
          
          <div class="frontier-card">
            <h4>🌐 应用前景</h4>
            <div class="frontier-content">
              <h5>技术应用</h5>
              <ul>
                <li><strong>量子计算</strong>：量子退火、绝热计算</li>
                <li><strong>量子模拟</strong>：复杂系统模拟</li>
                <li><strong>量子传感</strong>：高精度测量</li>
                <li><strong>量子通信</strong>：量子网络</li>
              </ul>
              
              <h5>基础科学</h5>
              <ul>
                <li>凝聚态物理新现象</li>
                <li>量子多体理论发展</li>
                <li>统计物理新概念</li>
                <li>量子信息理论</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="challenges-opportunities">
        <h3>挑战与机遇</h3>
        <p>
          未来发展面临的主要挑战和机遇：
        </p>
        
        <div class="challenge-opportunity-grid">
          <div class="challenge-card">
            <h4>⚠️ 主要挑战</h4>
            <ul>
              <li><strong>规模化问题</strong>：如何扩展到更大系统</li>
              <li><strong>相干性保持</strong>：如何延长相干时间</li>
              <li><strong>精度要求</strong>：如何提高测量和控制精度</li>
              <li><strong>复杂性增长</strong>：如何处理指数增长的复杂性</li>
              <li><strong>理论-实验鸿沟</strong>：如何缩小理论与实验的差距</li>
            </ul>
          </div>
          
          <div class="opportunity-card">
            <h4>🌟 重要机遇</h4>
            <ul>
              <li><strong>量子优势</strong>：实现真正的量子计算优势</li>
              <li><strong>新物理发现</strong>：发现新的量子现象</li>
              <li><strong>技术突破</strong>：推动量子技术发展</li>
              <li><strong>跨学科合作</strong>：促进不同领域的交叉</li>
              <li><strong>产业应用</strong>：推动量子技术产业化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          本节全面分析了量子横场Ising模型的理论与实验比较：
        </p>
        <ul>
          <li><strong>实验实现</strong>：磁性材料、冷原子、量子器件等多种平台</li>
          <li><strong>可观测量</strong>：磁化强度、磁化率、比热、关联函数等</li>
          <li><strong>比较框架</strong>：参数映射、临界点定位、指数验证</li>
          <li><strong>典型案例</strong>：CoNb₂O₆、LiHoF₄、冷原子、超导量子比特</li>
          <li><strong>差异分析</strong>：模型近似、环境效应、有限尺寸、测量限制</li>
          <li><strong>未来方向</strong>：新平台、新理论、新方法、新应用</li>
        </ul>
        <p>
          理论与实验的对比不仅验证了理论预测的正确性，
          也揭示了实际系统的复杂性，推动了理论和实验技术的发展。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 参数映射</h4>
          <p>选择一种实验平台，建立其物理参数与理论模型参数的映射关系。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 临界指数分析</h4>
          <p>设计实验方案来测定临界指数，分析可能的误差来源。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 有限尺寸效应</h4>
          <p>分析有限尺寸效应对实验观测的影响，提出修正方案。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 新实验设计</h4>
          <p>基于理论预测，设计新的实验来验证某个特定的物理性质。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 渲染数学公式
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
})
</script>

<style scoped>
.chapter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.learning-objectives {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.learning-objectives h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.learning-objectives li::before {
  content: "🎯";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.experimental-realizations, .experimental-observables, .theory-experiment-comparison,
.discrepancies-analysis, .future-directions, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.experimental-realizations h2, .experimental-observables h2, .theory-experiment-comparison h2,
.discrepancies-analysis h2, .future-directions h2, .summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.realization-overview, .hamiltonian-mapping, .observable-categories, .measurement-techniques,
.comparison-framework, .case-studies, .discrepancy-sources, .improvement-strategies,
.research-frontiers, .challenges-opportunities, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.platform-grid, .mapping-examples, .observable-grid, .framework-aspects,
.case-grid, .source-categories, .strategy-grid, .frontier-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.platform-card, .mapping-card, .observable-card, .aspect-card,
.case-card, .source-card, .strategy-card, .frontier-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.platform-card.magnetic {
  border-left: 4px solid #e74c3c;
}

.platform-card.cold-atoms {
  border-left: 4px solid #3498db;
}

.platform-card.quantum-devices {
  border-left: 4px solid #9b59b6;
}

.platform-card h4, .mapping-card h4, .observable-card h4, .aspect-card h4,
.case-card h4, .source-card h4, .strategy-card h4, .frontier-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.platform-details, .observable-details, .aspect-content, .case-details,
.source-details, .frontier-content {
  margin-top: 1rem;
}

.platform-details h5, .observable-details h5, .aspect-content h5,
.case-details h5, .source-details h5, .frontier-content h5 {
  color: #667eea;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
}

.parameter-relations, .comparison-methods, .critical-exponents-table {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.method-item, .exponent-row {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 5px;
  border-left: 3px solid #667eea;
}

.method-item h6 {
  color: #667eea;
  margin-bottom: 0.3rem;
}

.exponent-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.technique-comparison {
  margin-top: 1rem;
}

.technique-table {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: #e1e8ff;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: contents;
}

.header-cell {
  background: #667eea;
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-align: center;
}

.table-row {
  display: contents;
}

.cell {
  background: white;
  padding: 1rem;
  text-align: center;
  font-size: 0.9em;
}

.challenge-opportunity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.challenge-card, .opportunity-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.challenge-card {
  border-left: 4px solid #e74c3c;
}

.opportunity-card {
  border-left: 4px solid #27ae60;
}

.challenge-card h4 {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.opportunity-card h4 {
  color: #27ae60;
  margin-bottom: 1rem;
}

.formula-container {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1e8ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exercise-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .platform-grid, .mapping-examples, .observable-grid, .framework-aspects,
  .case-grid, .source-categories, .strategy-grid, .frontier-areas {
    grid-template-columns: 1fr;
  }
  
  .challenge-opportunity-grid {
    grid-template-columns: 1fr;
  }
  
  .technique-table {
    grid-template-columns: 1fr;
  }
  
  .header-cell, .cell {
    text-align: left;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula-container {
    font-size: 0.8em;
    padding: 0.6rem;
  }
}
</style>