<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.5 自由能密度与临界指数</h1>
      <p class="chapter-subtitle">热力学函数与临界现象的定量描述</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握自由能密度的计算方法</li>
        <li>理解临界指数的定义和物理意义</li>
        <li>学习标度理论在临界现象中的应用</li>
        <li>掌握有限尺寸标度的基本概念</li>
        <li>理解普适性和普适类的概念</li>
      </ul>
    </div>

    <div class="free-energy-density">
      <h2>自由能密度</h2>
      
      <div class="free-energy-definition">
        <h3>自由能密度的定义</h3>
        <p>
          系统的自由能密度是描述热力学性质的基本函数：
        </p>
        <div class="formula-container">
          $$f(T, h, J) = -\frac{k_B T}{N} \ln Z$$</div>
        <p>其中$Z$是配分函数。对于一维量子横场Ising模型：
        </p>
        <div class="formula-container">$$Z = \prod_k (1 + e^{-\beta E_k})$$</div>
        
        <div class="free-energy-components">
          <div class="component-card">
            <h4>基态贡献</h4> <div class="formula-container">$$f_0 = \frac{E_{\text{ground}}}{N} = -\frac{1}{4\pi} \int_0^{2\pi} dk \, E_k$$</div>
            <p>零温下的基态能量密度</p>
          </div>
          
          <div class="component-card">
            <h4>热激发贡献</h4> <div class="formula-container">$$f_{\text{thermal}} = -\frac{k_B T}{2\pi} \int_0^{2\pi} dk \, \ln(1 + e^{-\beta E_k})$$</div>
            <p>有限温度下的热激发修正</p>
          </div>
        </div>
        
        <div class="total-free-energy">
          <h4>总自由能密度</h4> <div class="formula-container">$$f(T, h, J) = f_0 + f_{\text{thermal}} = -\frac{1}{4\pi} \int_0^{2\pi} dk \left[ E_k + k_B T \ln(1 + e^{-\beta E_k}) \right]$$</div>
          <p>
            这个表达式包含了系统的完整热力学信息。
          </p>
        </div>
      </div>

      <div class="thermodynamic-derivatives">
        <h3>热力学导数</h3>
        <p>
          通过对自由能密度求导，可以得到各种热力学量：
        </p>
        
        <div class="derivative-relations">
          <div class="derivative-card">
            <h4>内能密度</h4> <div class="formula-container">$$u = f - T \frac{\partial f}{\partial T} = \frac{1}{2\pi} \int_0^{2\pi} dk \, E_k \frac{1}{1 + e^{\beta E_k}}$$</div>
            <p>系统的平均能量密度</p>
          </div>
          
          <div class="derivative-card">
            <h4>熵密度</h4> <div class="formula-container">$$s = -\frac{\partial f}{\partial T} = \frac{k_B}{2\pi} \int_0^{2\pi} dk \left[ \beta E_k \frac{1}{1 + e^{\beta E_k}} - \ln(1 + e^{-\beta E_k}) \right]$$</div>
            <p>系统的熵密度</p>
          </div>
          
          <div class="derivative-card">
            <h4>比热</h4> <div class="formula-container">$$c = T \frac{\partial s}{\partial T} = \frac{k_B \beta^2}{2\pi} \int_0^{2\pi} dk \, E_k^2 \frac{e^{-\beta E_k}}{(1 + e^{-\beta E_k})^2}$$</div>
            <p>系统的比热容</p>
          </div>
          
          <div class="derivative-card">
            <h4>磁化强度</h4> <div class="formula-container">$$m = -\frac{\partial f}{\partial h}$$</div>
            <p>系统对横场的响应</p>
          </div>
          
          <div class="derivative-card">
            <h4>磁化率</h4> <div class="formula-container">$$\chi = \frac{\partial m}{\partial h} = -\frac{\partial^2 f}{\partial h^2}$$</div>
            <p>磁化强度对场的敏感性</p>
          </div>
        </div>
      </div>

      <div class="temperature-regimes">
        <h3>不同温度区域的行为</h3>
        <p>
          自由能密度在不同温度区域表现出不同的行为：
        </p>
        
        <div class="regime-analysis">
          <div class="regime-card low-temp"><h4>低温区域 ($k_B T \ll \Delta$)</h4>
            <p>
              在低温下，只有能隙边缘的激发被热激活：
            </p>
            <div class="formula-container">$$f_{\text{thermal}} \approx -k_B T \rho(\Delta) e^{-\Delta/k_B T}$$</div>
            <p>其中$\rho(\Delta)$是能隙边缘的态密度。
              自由能表现出指数激活行为。
            </p>
            
            <div class="low-temp-properties">
              <h5>低温性质</h5>
              <ul><li>比热：$c \sim e^{-\Delta/k_B T}$</li><li>熵：$s \sim e^{-\Delta/k_B T}$</li><li>磁化率：$\chi \sim e^{-\Delta/k_B T}$</li>
              </ul>
            </div>
          </div>
          
          <div class="regime-card high-temp"><h4>高温区域 ($k_B T \gg J, h$)</h4>
            <p>
              在高温下，所有激发模式都被激活：
            </p>
            <div class="formula-container">$$f \approx -k_B T \ln 2 - \frac{J^2 + h^2/4}{4k_B T} + O(T^{-2})$$</div>
            <p>
              第一项是完全无序态的熵贡献，
              第二项是相互作用的平均场修正。
            </p>
            
            <div class="high-temp-properties">
              <h5>高温性质</h5>
              <ul><li>比热：$c \sim T^{-2}$（经典行为）</li><li>熵：$s \approx k_B \ln 2$（最大熵）</li><li>磁化率：$\chi \sim T^{-1}$（居里定律）</li>
              </ul>
            </div>
          </div>
          
          <div class="regime-card intermediate-temp"><h4>中间温度区域 ($k_B T \sim \Delta$)</h4>
            <p>
              在中间温度区域，系统表现出最丰富的物理现象：
            </p>
            <div class="formula-container">$$f = f_0 + k_B T \cdot F\left(\frac{\Delta}{k_B T}\right)$$</div>
            <p>其中$F(x)$是标度函数，描述量子-经典交叉。
            </p>
            
            <div class="crossover-behavior">
              <h5>交叉行为</h5>
              <ul>
                <li>量子区域 → 经典区域的平滑过渡</li>
                <li>比热出现峰值结构</li>
                <li>磁化率表现出复杂的温度依赖</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="critical-exponents">
      <h2>临界指数</h2>
      
      <div class="critical-exponents-definition">
        <h3>临界指数的定义</h3>
        <p>
          临界指数描述了物理量在临界点附近的奇异行为。对于量子相变，我们考虑$T=0$时参数$h$接近临界值$h_c$的情况。
        </p>
        
        <div class="exponent-definitions">
          <div class="exponent-card"><h4>关联长度指数$\nu$</h4>
            <div class="formula-container">$$\xi \sim |h - h_c|^{-\nu}$$</div>
            <p>
              描述关联长度在临界点附近的发散行为。对于一维量子横场Ising模型：$\nu = 1$</p>
          </div>
          
          <div class="exponent-card"><h4>动力学指数$z$</h4>
            <div class="formula-container">$$\Delta \sim |h - h_c|^{z\nu}$$</div>
            <p>
              描述能隙的临界行为。对于该模型：$z = 1$，因此$\Delta \sim |h - h_c|$</p>
          </div>
          
          <div class="exponent-card"><h4>磁化率指数$\gamma$</h4>
            <div class="formula-container">$$\chi \sim |h - h_c|^{-\gamma}$$</div>
            <p>
              描述磁化率的发散行为。该模型中：$\gamma = 1$</p>
          </div>
          
          <div class="exponent-card"><h4>比热指数$\alpha$</h4>
            <div class="formula-container">$$c \sim |h - h_c|^{-\alpha}$$</div>
            <p>
              描述比热的奇异性。该模型中：$\alpha = 0$（对数奇异性）
            </p>
          </div>
        </div>
      </div>

      <div class="exponent-calculations">
        <h3>临界指数的计算</h3>
        <p>
          利用精确解，我们可以直接计算各种临界指数：
        </p>
        
        <div class="calculation-methods">
          <div class="method-card">
            <h4>关联长度指数的计算</h4>
            <p>
              关联长度定义为能隙的倒数：
            </p>
            <div class="formula-container">$$\xi = \frac{1}{\Delta} = \frac{2}{h}$$</div>
            <p>在临界点$h_c = J$附近：
            </p>
            <div class="formula-container">$$\xi = \frac{2}{J + (h - J)} \approx \frac{2}{J} \frac{1}{1 + (h-J)/J} \approx \frac{2}{h-J}$$</div>
            <p>因此$\nu = 1$。
            </p>
          </div>
          
          <div class="method-card">
            <h4>磁化率指数的计算</h4>
            <p>
              磁化率可以通过自由能的二阶导数计算：
            </p>
            <div class="formula-container">$$\chi = -\frac{\partial^2 f}{\partial h^2}$$</div>
            <p>
              在临界点附近的分析表明：
            </p> <div class="formula-container">$$\chi \sim \frac{1}{|h - h_c|}$$</div>
            <p>因此$\gamma = 1$。
            </p>
          </div>
          
          <div class="method-card">
            <h4>比热指数的计算</h4>
            <p>
              比热的临界行为需要更仔细的分析。
              在临界点，比热表现出对数奇异性：
            </p>
            <div class="formula-container">$$c \sim \ln|h - h_c|$$</div>
            <p>这对应于$\alpha = 0$。
            </p>
          </div>
        </div>
      </div>

      <div class="scaling-relations">
        <h3>标度关系</h3>
        <p>
          临界指数之间存在普适的标度关系：
        </p>
        
        <div class="relation-list">
          <div class="relation-card">
            <h4>Rushbrooke关系</h4>
            <div class="formula-container">$$\alpha + 2\beta + \gamma = 2$$</div>
            <p>对于该模型：$0 + 2 \times 1/8 + 1 = 5/4 \neq 2$（需要考虑维度修正）
            </p>
          </div>
          
          <div class="relation-card">
            <h4>Fisher关系</h4>
            <div class="formula-container">$$\gamma = \nu(2 - \eta)$$</div>
            <p>其中$\eta$是关联函数的异常维度。
            </p>
          </div>
          
          <div class="relation-card">
            <h4>超标度关系</h4>
            <div class="formula-container">$$d\nu = 2 - \alpha$$</div>
            <p>对于$d=1$：$1 \times 1 = 2 - 0 = 2$✗
              （一维系统的特殊性）
            </p>
          </div>
        </div>
        
        <div class="dimension-considerations">
          <h4>维度效应</h4>
          <p>
            一维系统的临界行为有其特殊性：
          </p>
          <ul><li>下临界维度：$d_c = 1$</li><li>上临界维度：$d_u = 3$</li>
            <li>标度关系需要考虑边界效应</li>
            <li>有限尺寸效应更加显著</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="scaling-theory">
      <h2>标度理论</h2>
      
      <div class="scaling-hypothesis">
        <h3>标度假设</h3>
        <p>
          标度理论假设在临界点附近，自由能具有标度形式：
        </p>
        <div class="formula-container">$$f(t, h, L) = L^{-d} F(tL^{1/\nu}, hL^{\beta\delta/\nu})$$</div>
        <p>其中$t = (T - T_c)/T_c$是约化温度，$L$是系统尺寸。
        </p>
        
        <div class="scaling-variables">
          <h4>标度变量</h4>
          <div class="variable-definitions">
            <div class="variable-card">
              <h5>约化温度</h5>
              <div class="formula-container">$$t = \frac{h - h_c}{h_c}$$</div>
              <p>对于量子相变，这是调控参数的偏离</p>
            </div>
            
            <div class="variable-card">
              <h5>标度长度</h5> <div class="formula-container">$$L_{\xi} = \xi = |t|^{-\nu}$$</div>
              <p>系统的特征长度尺度</p>
            </div>
            
            <div class="variable-card">
              <h5>标度能量</h5> <div class="formula-container">$$E_{\xi} = \Delta = |t|^{z\nu}$$</div>
              <p>系统的特征能量尺度</p>
            </div>
          </div>
        </div>
      </div>

      <div class="finite-size-scaling">
        <h3>有限尺寸标度</h3>
        <p>
          在有限系统中，临界行为会被系统尺寸修正：
        </p>
        
        <div class="finite-size-effects">
          <div class="effect-card">
            <h4>关联长度的截断</h4> <div class="formula-container">$$\xi_{\text{eff}} = \min(\xi_{\text{bulk}}, L)$$</div>
            <p>当$\xi > L$时，关联长度被系统尺寸截断。
            </p>
          </div>
          
          <div class="effect-card">
            <h4>能隙的有限尺寸修正</h4>
            <div class="formula-container">$$\Delta_L = \max(\Delta_{\text{bulk}}, v_s/L)$$</div>
            <p>其中$v_s$是声速。有限尺寸引入额外的能量尺度。
            </p>
          </div>
          
          <div class="effect-card">
            <h4>临界点的漂移</h4>
            <div class="formula-container">$$h_c(L) = h_c + \frac{A}{L^{1/\nu}} + O(L^{-2/\nu})$$</div>
            <p>
              有限尺寸系统的临界点会发生漂移。
            </p>
          </div>
        </div>
        
        <div class="scaling-functions">
          <h4>有限尺寸标度函数</h4>
          <p>
            物理量的有限尺寸标度形式：
          </p>
          
          <div class="function-examples">
            <div class="function-card">
              <h5>磁化率</h5> <div class="formula-container">$$\chi_L = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})$$</div>
            </div>
            
            <div class="function-card">
              <h5>比热</h5> <div class="formula-container">$$c_L = L^{\alpha/\nu} \tilde{c}(tL^{1/\nu})$$</div>
            </div>
            
            <div class="function-card">
              <h5>关联长度</h5> <div class="formula-container">$$\xi_L = L \tilde{\xi}(tL^{1/\nu})$$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="data-collapse">
        <h3>数据塌缩</h3>
        <p>
          标度理论的一个重要预测是数据塌缩现象：
          不同系统尺寸的数据在适当的标度下应该塌缩到同一条曲线上。
        </p>
        
        <div class="collapse-procedure">
          <div class="procedure-step">
            <h4>步骤1：数据重标度</h4>
            <p>
              将原始数据按照标度关系重新标度：
            </p> <div class="formula-container">$$y = \frac{\chi_L}{L^{\gamma/\nu}}, \quad x = tL^{1/\nu}$$</div>
          </div>
          
          <div class="procedure-step">
            <h4>步骤2：塌缩检验</h4>
            <p>如果标度理论正确，所有不同$L$的数据点应该落在同一条$y = \tilde{\chi}(x)$曲线上。
            </p>
          </div>
          
          <div class="procedure-step">
            <h4>步骤3：临界指数提取</h4>
            <p>
              通过优化塌缩质量，可以精确确定临界指数的值。
            </p>
          </div>
        </div>
        
        <div class="collapse-applications">
          <h4>数据塌缩的应用</h4>
          <ul><li><strong>临界指数测定</strong>：精确确定$\nu$, $\gamma$等指数</li><li><strong>临界点定位</strong>：准确确定$h_c$的位置</li>
            <li><strong>标度函数提取</strong>：获得普适的标度函数</li>
            <li><strong>理论验证</strong>：检验标度理论的正确性</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="universality">
      <h2>普适性</h2>
      
      <div class="universality-concept">
        <h3>普适性的概念</h3>
        <p>
          普适性是临界现象的一个基本特征：
          具有相同对称性和维度的不同系统在临界点附近
          表现出相同的临界指数和标度函数。
        </p>
        
        <div class="universality-features">
          <div class="feature-card">
            <h4>🎯 普适类</h4>
            <p>
              具有相同临界行为的系统属于同一普适类。
              一维量子横场Ising模型属于二维经典Ising普适类。
            </p>
          </div>
          
          <div class="feature-card">
            <h4>🔄 量子-经典对应</h4>
            <p>$d$维量子系统的临界行为对应于$(d+1)$维经典系统，其中额外维度是虚时间。
            </p>
          </div>
          
          <div class="feature-card">
            <h4>📊 临界指数普适性</h4>
            <p>
              同一普适类的所有系统具有相同的临界指数，
              不依赖于微观细节。
            </p>
          </div>
        </div>
      </div>

      <div class="universality-class-analysis">
        <h3>普适类分析</h3>
        <p>
          一维量子横场Ising模型的普适类分析：
        </p>
        
        <div class="class-characteristics">
          <div class="characteristic-item">
            <h4>对称性分析</h4>
            <ul>
              <li><strong>空间对称性</strong>：平移不变性</li><li><strong>自旋对称性</strong>：$\mathbb{Z}_2$对称性</li><li><strong>时间反演对称性</strong>：$T$不变性</li>
            </ul>
          </div>
          
          <div class="characteristic-item">
            <h4>维度分析</h4>
            <ul><li><strong>空间维度</strong>：$d = 1$</li><li><strong>有效维度</strong>：$d_{\text{eff}} = d + z = 2$</li><li><strong>下临界维度</strong>：$d_c = 1$</li><li><strong>上临界维度</strong>：$d_u = 3$</li>
            </ul>
          </div>
          
          <div class="characteristic-item">
            <h4>序参量</h4>
            <ul><li><strong>主序参量</strong>：横向磁化强度$m_x$</li><li><strong>对偶序参量</strong>：纵向磁化强度$m_z$</li><li><strong>序参量维度</strong>：$n = 1$（标量序参量）</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="comparison-with-classical">
        <h3>与经典Ising模型的比较</h3>
        <p>
          一维量子横场Ising模型与二维经典Ising模型的对应关系：
        </p>
        
        <div class="comparison-table">
          <div class="comparison-row">
            <div class="quantum-column">
              <h4>1D量子TFIM</h4>
              <ul><li>哈密顿量：$H = -J\sum_i \sigma_i^z\sigma_{i+1}^z - h\sum_i \sigma_i^x$</li>
                <li>基态：量子叠加态</li>
                <li>激发：准粒子</li><li>调控参数：$h/J$</li>
              </ul>
            </div>
            
            <div class="classical-column">
              <h4>2D经典Ising</h4>
              <ul><li>哈密顿量：$H = -J\sum_{\langle i,j \rangle} \sigma_i\sigma_j$</li>
                <li>基态：有序态</li>
                <li>激发：畴壁</li><li>调控参数：$T/J$</li>
              </ul>
            </div>
          </div>
          
          <div class="correspondence-details">
            <h4>对应关系细节</h4>
            <div class="detail-grid">
              <div class="detail-card">
                <h5>临界指数</h5>
                <p>两个模型具有相同的临界指数集合</p>
              </div>
              
              <div class="detail-card">
                <h5>标度函数</h5>
                <p>标度函数在适当变换下相同</p>
              </div>
              
              <div class="detail-card">
                <h5>普适比</h5>
                <p>无量纲普适比值相同</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="experimental-universality">
        <h3>实验中的普适性</h3>
        <p>
          普适性在实验中的体现：
        </p>
        
        <div class="experimental-examples">
          <div class="example-card">
            <h4>🧲 磁性材料</h4>
            <p>
              不同的准一维磁性材料（如CoNb₂O₆, BaCo₂V₂O₈）
              在横场下表现出相同的临界指数。
            </p>
          </div>
          
          <div class="example-card">
            <h4>❄️ 冷原子系统</h4>
            <p>
              光晶格中的冷原子系统可以精确实现
              量子横场Ising模型，验证普适性。
            </p>
          </div>
          
          <div class="example-card">
            <h4>💎 量子器件</h4>
            <p>
              超导量子比特阵列等人工量子系统
              也表现出相同的普适行为。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="computational-methods">
      <h2>计算方法</h2>
      
      <div class="numerical-techniques">
        <h3>数值计算技术</h3>
        <p>
          虽然一维量子横场Ising模型有精确解，
          但数值方法在验证理论和处理有限尺寸效应方面仍然重要：
        </p>
        
        <div class="technique-list">
          <div class="technique-card">
            <h4>🔢 精确对角化</h4>
            <ul><li>适用于小系统（$N \lesssim 20$）</li>
              <li>可以获得完整的能谱</li>
              <li>用于验证解析结果</li>
              <li>研究有限尺寸效应</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>🌊 量子蒙特卡罗</h4>
            <ul>
              <li>路径积分蒙特卡罗</li>
              <li>随机级数展开</li>
              <li>适用于大系统</li>
              <li>可以处理有限温度</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>🔗 密度矩阵重整化群</h4>
            <ul>
              <li>DMRG算法</li>
              <li>矩阵乘积态</li>
              <li>适用于一维系统</li>
              <li>可以达到很大系统尺寸</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>📊 有限尺寸标度分析</h4>
            <ul>
              <li>数据塌缩技术</li>
              <li>临界指数提取</li>
              <li>临界点定位</li>
              <li>标度函数确定</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="analytical-methods">
        <h3>解析方法</h3>
        <p>
          除了精确解，还有其他解析方法可以研究临界性质：
        </p>
        
        <div class="analytical-approaches">
          <div class="approach-card">
            <h4>🔄 重整化群</h4>
            <p>
              实空间重整化群方法可以系统地研究
              临界行为和标度性质。
            </p>
          </div>
          
          <div class="approach-card">
            <h4>🌊 共形场论</h4>
            <p>
              临界点的共形不变性可以用
              共形场论方法精确描述。
            </p>
          </div>
          
          <div class="approach-card"><h4>📈$\epsilon$展开</h4>
            <p>
              在上临界维度附近的微扰展开
              可以计算临界指数。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          本节深入分析了一维量子横场Ising模型的自由能密度和临界指数：
        </p>
        <ul>
          <li><strong>自由能密度</strong>：完整的热力学描述，包括基态和热激发贡献</li><li><strong>临界指数</strong>：$\nu=1$, $z=1$, $\gamma=1$, $\alpha=0$等关键指数</li>
          <li><strong>标度理论</strong>：有限尺寸标度、数据塌缩、标度函数</li>
          <li><strong>普适性</strong>：与二维经典Ising模型的对应关系</li>
          <li><strong>计算方法</strong>：数值和解析方法的结合应用</li>
        </ul>
        <p>
          这些结果为理解量子临界现象提供了
          完整的理论框架和实用的分析工具。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 自由能密度计算</h4>
          <p>推导不同温度区域自由能密度的渐近表达式，分析其物理意义。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 临界指数验证</h4>
          <p>通过精确解验证各临界指数的数值，检验标度关系。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 有限尺寸标度</h4>
          <p>分析有限尺寸系统中临界行为的修正，设计数据塌缩方案。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 普适性分析</h4>
          <p>比较一维量子TFIM与二维经典Ising模型的临界性质。</p>
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

.free-energy-density, .critical-exponents, .scaling-theory, .universality,
.computational-methods, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.free-energy-density h2, .critical-exponents h2, .scaling-theory h2,
.universality h2, .computational-methods h2, .summary-section h2,
.exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.free-energy-definition, .thermodynamic-derivatives, .temperature-regimes,
.critical-exponents-definition, .exponent-calculations, .scaling-relations,
.scaling-hypothesis, .finite-size-scaling, .data-collapse, .universality-concept,
.universality-class-analysis, .comparison-with-classical, .experimental-universality,
.numerical-techniques, .analytical-methods, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.free-energy-components, .derivative-relations, .regime-analysis,
.exponent-definitions, .calculation-methods, .relation-list,
.scaling-variables, .finite-size-effects, .scaling-functions,
.collapse-procedure, .collapse-applications, .universality-features,
.class-characteristics, .comparison-table, .experimental-examples,
.technique-list, .analytical-approaches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.component-card, .derivative-card, .regime-card, .exponent-card,
.method-card, .relation-card, .variable-card, .effect-card,
.function-card, .procedure-step, .feature-card, .characteristic-item,
.example-card, .technique-card, .approach-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.component-card h4, .derivative-card h4, .regime-card h4, .exponent-card h4,
.method-card h4, .relation-card h4, .variable-card h5, .effect-card h4,
.function-card h5, .procedure-step h4, .feature-card h4, .characteristic-item h4,
.example-card h4, .technique-card h4, .approach-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.regime-card.low-temp {
  border-left: 4px solid #3498db;
}

.regime-card.high-temp {
  border-left: 4px solid #e74c3c;
}

.regime-card.intermediate-temp {
  border-left: 4px solid #f39c12;
}

.total-free-energy, .low-temp-properties, .high-temp-properties,
.crossover-behavior, .dimension-considerations, .function-examples,
.correspondence-details, .detail-grid {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.total-free-energy h4, .low-temp-properties h5, .high-temp-properties h5,
.crossover-behavior h5, .dimension-considerations h4, .correspondence-details h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.detail-card {
  background: #f8faff;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #e1e8ff;
  text-align: center;
}

.detail-card h5 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.quantum-column, .classical-column {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.quantum-column h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.classical-column h4 {
  color: #e74c3c;
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
  
  .free-energy-components, .derivative-relations, .regime-analysis,
  .exponent-definitions, .calculation-methods, .relation-list,
  .scaling-variables, .finite-size-effects, .scaling-functions,
  .collapse-procedure, .collapse-applications, .universality-features,
  .class-characteristics, .comparison-table, .experimental-examples,
  .technique-list, .analytical-approaches {
    grid-template-columns: 1fr;
  }
  
  .comparison-row {
    grid-template-columns: 1fr;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
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