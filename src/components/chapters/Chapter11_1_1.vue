<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.1.1 基本模型</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        玻色-爱因斯坦凝聚(Bose-Einstein Condensation, BEC)是量子统计力学中最引人注目的现象之一，
        它描述了玻色子在低温下宏观占据单一量子态的现象。这一现象不仅在理论上具有深刻的物理意义，
        更在实验上为我们提供了研究量子多体系统的独特平台。本节将从基本模型出发，
        系统地介绍玻色-爱因斯坦凝聚的理论基础。
      </p>
    </div>

    <!-- 理想玻色气体模型 -->
    <div class="content-card">
      <h2>理想玻色气体模型</h2>
      
      <h3>基本假设</h3>
      <p>理想玻色气体模型基于以下基本假设：</p>
      <div class="assumptions">
        <div class="assumption">
          <h4>粒子性质</h4>
          <ul>
            <li>粒子为无相互作用的玻色子</li>
            <li>满足玻色-爱因斯坦统计</li>
            <li>粒子数守恒</li>
          </ul>
        </div>
        <div class="assumption">
          <h4>系统条件</h4>
          <ul>
            <li>热力学平衡态</li>
            <li>均匀系统或外势场中</li>
            <li>低温极限</li>
          </ul>
        </div>
        <div class="assumption">
          <h4>量子效应</h4>
          <ul>
            <li>德布罗意波长与粒子间距可比</li>
            <li>量子统计效应显著</li>
            <li>宏观量子相干</li>
          </ul>
        </div>
      </div>
      
      <h3>哈密顿量</h3>
      <p>理想玻色气体的哈密顿量为：</p>
      <div class="formula-box">
        Ĥ = ∑ᵢ εᵢ â†ᵢ âᵢ
      </div>
      <p>其中：</p>
      <ul>
        <li>εᵢ：单粒子能级</li>
        <li>â†ᵢ, âᵢ：玻色子产生和湮灭算符</li>
        <li>满足玻色对易关系：[âᵢ, â†ⱼ] = δᵢⱼ</li>
      </ul>
    </div>

    <!-- 玻色-爱因斯坦分布 -->
    <div class="content-card">
      <h2>玻色-爱因斯坦分布</h2>
      
      <h3>分布函数</h3>
      <p>在热力学平衡下，玻色子的平均占据数遵循玻色-爱因斯坦分布：</p>
      <div class="formula-box">
        ⟨nᵢ⟩ = 1/(e^(β(εᵢ-μ)) - 1)
      </div>
      <p>其中：</p>
      <ul>
        <li>β = 1/(kᵦT)：逆温度</li>
        <li>μ：化学势</li>
        <li>εᵢ：单粒子能级</li>
      </ul>
      
      <div class="distribution-features">
        <div class="feature">
          <h4>化学势约束</h4>
          <p>对于玻色子，化学势必须满足 μ ≤ ε₀，其中 ε₀ 是基态能量</p>
        </div>
        <div class="feature">
          <h4>高温极限</h4>
          <p>当 β(εᵢ-μ) >> 1 时，退化为麦克斯韦-玻尔兹曼分布</p>
        </div>
        <div class="feature">
          <h4>低温行为</h4>
          <p>当 μ → ε₀ 时，基态占据数发散，发生玻色凝聚</p>
        </div>
      </div>
    </div>

    <!-- 临界温度和凝聚条件 -->
    <div class="content-card">
      <h2>临界温度和凝聚条件</h2>
      
      <h3>粒子数约束</h3>
      <p>总粒子数的约束条件为：</p>
      <div class="formula-box">
        N = ∑ᵢ ⟨nᵢ⟩ = ∑ᵢ 1/(e^(β(εᵢ-μ)) - 1)
      </div>
      
      <h3>临界温度</h3>
      <p>对于三维均匀系统，临界温度由以下条件确定：</p>
      <div class="formula-box">
        N = ∫ g(ε)/(e^(βc ε) - 1) dε
      </div>
      <p>其中 g(ε) 是态密度。对于自由粒子气体：</p>
      <div class="formula-box">
        Tc = (2πℏ²/mkᵦ)(N/V)^(2/3) / ζ(3/2)^(2/3)
      </div>
      
      <div class="critical-conditions">
        <div class="condition">
          <h4>三维系统</h4>
          <p>Tc ∝ n^(2/3)，其中 n = N/V 是粒子密度</p>
        </div>
        <div class="condition">
          <h4>二维系统</h4>
          <p>严格意义上不存在有限温度的BEC</p>
        </div>
        <div class="condition">
          <h4>一维系统</h4>
          <p>不存在有限温度的BEC</p>
        </div>
      </div>
    </div>

    <!-- 凝聚分数和热力学性质 -->
    <div class="content-card">
      <h2>凝聚分数和热力学性质</h2>
      
      <h3>凝聚分数</h3>
      <p>当 T < Tc 时，基态的宏观占据导致凝聚分数：</p>
      <div class="formula-box">
        N₀/N = 1 - (T/Tc)^(3/2)
      </div>
      
      <h3>热力学量</h3>
      <div class="thermodynamic-properties">
        <div class="property">
          <h4>内能</h4>
          <div class="formula-box">
            U = ∑ᵢ εᵢ ⟨nᵢ⟩
          </div>
          <p>在低温下主要由激发态贡献</p>
        </div>
        
        <div class="property">
          <h4>比热</h4>
          <div class="formula-box">
            C = ∂U/∂T
          </div>
          <p>在 Tc 处出现λ型跃变</p>
        </div>
        
        <div class="property">
          <h4>压强</h4>
          <div class="formula-box">
            P = -∂F/∂V
          </div>
          <p>其中 F 是自由能</p>
        </div>
      </div>
      
      <h3>相变特征</h3>
      <div class="phase-transition-features">
        <div class="feature">
          <h4>相变类型</h4>
          <p>三级相变：比热在 Tc 处连续但导数不连续</p>
        </div>
        <div class="feature">
          <h4>序参量</h4>
          <p>凝聚体波函数 ψ₀ = √N₀ e^(iφ)</p>
        </div>
        <div class="feature">
          <h4>对称性破缺</h4>
          <p>U(1)规范对称性的自发破缺</p>
        </div>
      </div>
    </div>

    <!-- 量子统计效应 -->
    <div class="content-card">
      <h2>量子统计效应</h2>
      
      <h3>德布罗意波长</h3>
      <p>热德布罗意波长定义为：</p>
      <div class="formula-box">
        λdB = h/√(2πmkᵦT)
      </div>
      <p>当 λdB 与粒子间距 n^(-1/3) 可比时，量子效应变得重要。</p>
      
      <h3>量子简并条件</h3>
      <div class="degeneracy-conditions">
        <div class="condition">
          <h4>简并参数</h4>
          <div class="formula-box">
            nλdB³ ≥ ζ(3/2) ≈ 2.612
          </div>
        </div>
        <div class="condition">
          <h4>物理意义</h4>
          <p>粒子的量子波包开始重叠，统计关联变得重要</p>
        </div>
        <div class="condition">
          <h4>实验条件</h4>
          <p>需要极低温度和高密度</p>
        </div>
      </div>
    </div>

    <!-- 不同维度的行为 -->
    <div class="content-card">
      <h2>不同维度的行为</h2>
      
      <h3>维度效应</h3>
      <div class="dimensional-effects">
        <div class="dimension">
          <h4>三维系统</h4>
          <p><strong>态密度：</strong>g(ε) ∝ ε^(1/2)</p>
          <p><strong>临界温度：</strong>存在有限的 Tc</p>
          <p><strong>凝聚行为：</strong>真正的BEC相变</p>
        </div>
        
        <div class="dimension">
          <h4>二维系统</h4>
          <p><strong>态密度：</strong>g(ε) = 常数</p>
          <p><strong>临界温度：</strong>Tc = 0（严格意义）</p>
          <p><strong>凝聚行为：</strong>Kosterlitz-Thouless相变</p>
        </div>
        
        <div class="dimension">
          <h4>一维系统</h4>
          <p><strong>态密度：</strong>g(ε) ∝ ε^(-1/2)</p>
          <p><strong>临界温度：</strong>Tc = 0</p>
          <p><strong>凝聚行为：</strong>无真正的长程序</p>
        </div>
      </div>
      
      <h3>Mermin-Wagner定理</h3>
      <div class="mermin-wagner">
        <h4>定理内容</h4>
        <p>在低维系统中，连续对称性不能在有限温度下自发破缺</p>
        
        <h4>物理后果</h4>
        <ul>
          <li>一维和二维系统中不存在真正的BEC</li>
          <li>长程序被热涨落破坏</li>
          <li>可能存在准长程序</li>
        </ul>
        
        <h4>例外情况</h4>
        <ul>
          <li>外势场的束缚效应</li>
          <li>有限尺寸效应</li>
          <li>弱相互作用的修正</li>
        </ul>
      </div>
    </div>

    <!-- 实验实现 -->
    <div class="content-card">
      <h2>实验实现</h2>
      
      <h3>冷原子气体</h3>
      <div class="cold-atoms">
        <div class="technique">
          <h4>激光冷却</h4>
          <p>利用多普勒效应和辐射压力冷却原子</p>
          <ul>
            <li>多普勒冷却极限：~μK</li>
            <li>偏振梯度冷却：~nK</li>
            <li>西西弗斯冷却机制</li>
          </ul>
        </div>
        
        <div class="technique">
          <h4>磁光阱</h4>
          <p>结合激光冷却和磁场梯度的束缚</p>
          <ul>
            <li>三维冷却和束缚</li>
            <li>典型温度：~100μK</li>
            <li>密度：~10¹¹ cm⁻³</li>
          </ul>
        </div>
        
        <div class="technique">
          <h4>蒸发冷却</h4>
          <p>选择性移除高能原子实现进一步冷却</p>
          <ul>
            <li>射频蒸发冷却</li>
            <li>可达温度：~nK</li>
            <li>实现量子简并</li>
          </ul>
        </div>
      </div>
      
      <h3>典型实验系统</h3>
      <div class="experimental-systems">
        <div class="system">
          <h4>碱金属原子</h4>
          <p><strong>常用原子：</strong>⁸⁷Rb, ²³Na, ⁷Li</p>
          <p><strong>优势：</strong>易于激光冷却，磁性可调</p>
          <p><strong>应用：</strong>首次实现BEC的系统</p>
        </div>
        
        <div class="system">
          <h4>稀土原子</h4>
          <p><strong>代表：</strong>¹⁶⁴Dy, ¹⁶⁸Er</p>
          <p><strong>特点：</strong>强磁偶极相互作用</p>
          <p><strong>应用：</strong>研究长程相互作用效应</p>
        </div>
        
        <div class="system">
          <h4>分子BEC</h4>
          <p><strong>系统：</strong>Feshbach分子</p>
          <p><strong>特点：</strong>可调相互作用</p>
          <p><strong>应用：</strong>BEC-BCS渡越研究</p>
        </div>
      </div>
    </div>

    <!-- 理论发展历程 -->
    <div class="content-card">
      <h2>理论发展历程</h2>
      
      <h3>历史里程碑</h3>
      <div class="historical-milestones">
        <div class="milestone">
          <h4>1924-1925年</h4>
          <p><strong>Einstein预言：</strong>基于Bose统计预言了BEC现象</p>
          <p><strong>意义：</strong>首次从理论上预测宏观量子现象</p>
        </div>
        
        <div class="milestone">
          <h4>1938年</h4>
          <p><strong>London理论：</strong>将BEC与超流联系起来</p>
          <p><strong>意义：</strong>建立了BEC的宏观量子理论</p>
        </div>
        
        <div class="milestone">
          <h4>1947年</h4>
          <p><strong>Bogoliubov理论：</strong>处理弱相互作用玻色气体</p>
          <p><strong>意义：</strong>超越理想气体模型</p>
        </div>
        
        <div class="milestone">
          <h4>1995年</h4>
          <p><strong>实验实现：</strong>冷原子气体中首次实现BEC</p>
          <p><strong>意义：</strong>开启了量子气体研究的新时代</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        理想玻色气体的基本模型为理解玻色-爱因斯坦凝聚提供了重要的理论基础。
        通过玻色-爱因斯坦统计，我们可以预测在低温下玻色子会宏观占据基态，
        形成具有宏观量子相干性的凝聚体。这一现象不仅在理论上具有深刻意义，
        更在冷原子实验中得到了精确验证，为研究量子多体物理开辟了新的道路。
      </p>
      
      <div class="key-points">
        <div class="point">
          <h4>理论基础</h4>
          <p>玻色-爱因斯坦统计和量子统计力学</p>
        </div>
        <div class="point">
          <h4>关键条件</h4>
          <p>低温、高密度和量子简并</p>
        </div>
        <div class="point">
          <h4>维度效应</h4>
          <p>只有三维系统存在真正的有限温度BEC</p>
        </div>
        <div class="point">
          <h4>实验实现</h4>
          <p>冷原子技术使BEC成为可控的实验平台</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #3498db;
}

.content-card {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
}

.content-card h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
}

.content-card h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-card h4 {
  color: #2980b9;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-card p {
  margin-bottom: 1rem;
  text-align: justify;
}

.content-card ul {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.content-card li {
  margin-bottom: 0.5rem;
}

.formula-box {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  text-align: center;
  overflow-x: auto;
}

.assumptions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.assumption {
  background: #e8f4fd;
  border: 1px solid #3498db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.assumption h4 {
  color: #2980b9;
  margin-bottom: 1rem;
}

.distribution-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.feature {
  background: #f0f8ff;
  border: 1px solid #4a90e2;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.feature h4 {
  color: #2c5aa0;
  margin-bottom: 1rem;
}

.critical-conditions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.condition {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.condition h4 {
  color: #856404;
  margin-bottom: 1rem;
}

.thermodynamic-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.property {
  background: #f5f7fa;
  border: 1px solid #8e9aaf;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.property h4 {
  color: #495057;
  margin-bottom: 1rem;
}

.phase-transition-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.degeneracy-conditions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.dimensional-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.dimension {
  background: #e7f3ff;
  border: 1px solid #007bff;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.dimension h4 {
  color: #004085;
  margin-bottom: 1rem;
}

.mermin-wagner {
  background: #f8d7da;
  border: 1px solid #dc3545;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.mermin-wagner h4 {
  color: #721c24;
  margin-bottom: 1rem;
}

.cold-atoms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.technique {
  background: #d1ecf1;
  border: 1px solid #17a2b8;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.technique h4 {
  color: #0c5460;
  margin-bottom: 1rem;
}

.experimental-systems {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.system {
  background: #d4edda;
  border: 1px solid #28a745;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.system h4 {
  color: #155724;
  margin-bottom: 1rem;
}

.historical-milestones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.milestone {
  background: #f3e5f5;
  border: 1px solid #6f42c1;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.milestone h4 {
  color: #4a148c;
  margin-bottom: 1rem;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.point {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.point h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-card {
    padding: 1.5rem;
  }
  
  .assumptions,
  .distribution-features,
  .critical-conditions,
  .thermodynamic-properties,
  .phase-transition-features,
  .degeneracy-conditions,
  .dimensional-effects,
  .cold-atoms,
  .experimental-systems,
  .historical-milestones,
  .key-points {
    grid-template-columns: 1fr;
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>