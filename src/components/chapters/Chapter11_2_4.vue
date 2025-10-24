<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.2.4 液氦-4的Feynman理论</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        Richard Feynman在1950年代提出了一套描述液氦-4超流性质的理论框架，
        这一理论从微观角度解释了超流现象的本质。Feynman理论的核心思想是
        将超流体的激发描述为涡旋环的运动，并通过路径积分方法
        计算系统的热力学性质。这一理论不仅为理解液氦-4的超流性质
        提供了深刻的物理洞察，也为后续的量子多体理论发展奠定了基础。
      </p>
    </div>

    <!-- Feynman理论的基本思想 -->
    <div class="content-card">
      <h2>Feynman理论的基本思想</h2>
      
      <h3>路径积分表述</h3>
      <p>Feynman将量子统计力学问题表述为路径积分：</p>
      <div class="formula-box">
        Z = ∫ D[r(τ)] exp(-S[r(τ)]/ℏ)
      </div>
      <p>其中作用量：</p>
      <div class="formula-box">
        S[r(τ)] = ∫₀^β dτ [m/2 (dr/dτ)² + V(r(τ))]
      </div>
      
      <h3>玻色子交换对称性</h3>
      <div class="exchange-symmetry">
        <div class="symmetry-aspect">
          <h4>路径的拓扑分类</h4>
          <p>粒子路径可以根据交换性质分类</p>
          <p>不同拓扑类对应不同的统计权重</p>
        </div>
        <div class="symmetry-aspect">
          <h4>置换群</h4>
          <p>N个粒子的置换群S_N</p>
          <p>每个置换对应一个拓扑类</p>
        </div>
        <div class="symmetry-aspect">
          <h4>玻色统计</h4>
          <p>所有置换的权重相等</p>
          <p>增强了量子涨落效应</p>
        </div>
      </div>
      
      <h3>有效作用量</h3>
      <p>考虑粒子交换后的有效作用量：</p>
      <div class="formula-box">
        S_eff = S_classical + S_exchange
      </div>
      <p>其中交换项来自不同拓扑类的贡献</p>
    </div>

    <!-- 涡旋环理论 -->
    <div class="content-card">
      <h2>涡旋环理论</h2>
      
      <h3>涡旋环的概念</h3>
      <p>Feynman提出超流体中的激发可以用涡旋环来描述：</p>
      <div class="vortex-ring-concept">
        <div class="concept-aspect">
          <h4>涡旋环结构</h4>
          <p>闭合的涡旋线形成环状结构</p>
          <p>环流量子化：Γ = h/m</p>
        </div>
        <div class="concept-aspect">
          <h4>环的运动</h4>
          <p>涡旋环可以在流体中运动</p>
          <p>运动速度与环的几何形状相关</p>
        </div>
        <div class="concept-aspect">
          <h4>能量和动量</h4>
          <p>涡旋环携带确定的能量和动量</p>
          <p>形成准粒子激发谱</p>
        </div>
      </div>
      
      <h3>涡旋环的能量</h3>
      <p>半径为R的圆形涡旋环的能量：</p>
      <div class="formula-box">
        E(R) = (ρκ²R/2)[ln(8R/a₀) - 2]
      </div>
      <p>其中：</p>
      <ul>
        <li>κ = h/m：量子化环流</li>
        <li>a₀：涡旋核心尺寸</li>
        <li>ρ：流体密度</li>
      </ul>
      
      <h3>涡旋环的运动</h3>
      <p>涡旋环的自感应速度：</p>
      <div class="formula-box">
        v = (κ/4πR)[ln(8R/a₀) - 2]
      </div>
      
      <div class="ring-dynamics">
        <div class="dynamics-aspect">
          <h4>大环 (R >> a₀)</h4>
          <p>v ∝ (ln R)/R</p>
          <p>运动较慢</p>
        </div>
        <div class="dynamics-aspect">
          <h4>小环 (R ~ a₀)</h4>
          <p>运动速度较快</p>
          <p>能量较低</p>
        </div>
        <div class="dynamics-aspect">
          <h4>临界尺寸</h4>
          <p>存在最稳定的环尺寸</p>
          <p>对应主要激发模式</p>
        </div>
      </div>
    </div>

    <!-- 激发谱的计算 -->
    <div class="content-card">
      <h2>激发谱的计算</h2>
      
      <h3>单个涡旋环</h3>
      <p>涡旋环的色散关系：</p>
      <div class="formula-box">
        ε(p) = (p²/2m*) + Δ
      </div>
      <p>其中：</p>
      <ul>
        <li>m*：有效质量</li>
        <li>Δ：能隙（涡旋环的最小能量）</li>
      </ul>
      
      <h3>Feynman关系</h3>
      <p>对于长波长激发，Feynman得到：</p>
      <div class="formula-box">
        ε(k) = (ℏ²k²/2mS(k))
      </div>
      <p>其中S(k)是静态结构因子</p>
      
      <h3>与实验的比较</h3>
      <div class="experimental-comparison">
        <div class="comparison-aspect">
          <h4>中子散射</h4>
          <p><strong>测量：</strong>S(k,ω)</p>
          <p><strong>结果：</strong>与Feynman关系符合</p>
          <p><strong>精度：</strong>长波长区域很好</p>
        </div>
        <div class="comparison-aspect">
          <h4>声速</h4>
          <p><strong>理论：</strong>c = ℏk/√(2mS(k))</p>
          <p><strong>实验：</strong>c ≈ 240 m/s</p>
          <p><strong>符合度：</strong>定量一致</p>
        </div>
        <div class="comparison-aspect">
          <h4>高动量行为</h4>
          <p><strong>偏差：</strong>k → ∞时理论失效</p>
          <p><strong>原因：</strong>忽略了多体效应</p>
          <p><strong>修正：</strong>需要更精确理论</p>
        </div>
      </div>
    </div>

    <!-- 热力学性质 -->
    <div class="content-card">
      <h2>热力学性质</h2>
      
      <h3>比热的计算</h3>
      <p>基于涡旋环激发的比热：</p>
      <div class="formula-box">
        C_V = k_B ∫ (d³k/(2π)³) (ℏω(k)/k_BT)² (e^(ℏω(k)/k_BT))/((e^(ℏω(k)/k_BT) - 1)²)
      </div>
      
      <h3>低温行为</h3>
      <div class="low-temp-behavior">
        <div class="temp-regime">
          <h4>T³定律</h4>
          <p>C_V ∝ T³ (T → 0)</p>
          <p>来自声子激发的贡献</p>
        </div>
        <div class="temp-regime">
          <h4>与实验比较</h4>
          <p>定性符合，但系数有差异</p>
          <p>需要考虑涡旋环相互作用</p>
        </div>
      </div>
      
      <h3>超流密度</h3>
      <p>基于涡旋环理论的超流密度：</p>
      <div class="formula-box">
        ρ_s(T) = ρ - ρ_n(T)
      </div>
      <p>其中正常密度来自热激发的涡旋环</p>
      
      <div class="superfluid-density-calc">
        <div class="density-component">
          <h4>正常密度</h4>
          <p>ρ_n ∝ ∫ n(ε)ε dε</p>
          <p>n(ε)是涡旋环的分布函数</p>
        </div>
        <div class="density-component">
          <h4>温度依赖</h4>
          <p>低温：ρ_n ∝ T⁴</p>
          <p>高温：ρ_n → ρ</p>
        </div>
      </div>
    </div>

    <!-- 涡旋环的相互作用 -->
    <div class="content-card">
      <h2>涡旋环的相互作用</h2>
      
      <h3>环-环相互作用</h3>
      <p>两个涡旋环之间的相互作用：</p>
      <div class="ring-interactions">
        <div class="interaction-type">
          <h4>速度场相互作用</h4>
          <p>一个环的速度场影响另一个环</p>
          <p>导致环的运动轨迹改变</p>
        </div>
        <div class="interaction-type">
          <h4>重连过程</h4>
          <p>两个环可能发生重连</p>
          <p>改变拓扑结构</p>
        </div>
        <div class="interaction-type">
          <h4>湮灭过程</h4>
          <p>相反环流的环可能湮灭</p>
          <p>释放能量</p>
        </div>
      </div>
      
      <h3>多体效应</h3>
      <p>高密度涡旋环系统的集体行为：</p>
      <div class="formula-box">
        H_eff = ∑ᵢ E(Rᵢ) + ∑ᵢ<ⱼ V(Rᵢ,Rⱼ)
      </div>
      
      <h3>重整化效应</h3>
      <div class="renormalization-effects">
        <div class="effect">
          <h4>有效质量重整化</h4>
          <p>m* → m*_eff(T)</p>
          <p>温度依赖的有效质量</p>
        </div>
        <div class="effect">
          <h4>激发谱修正</h4>
          <p>ε(k) → ε_eff(k,T)</p>
          <p>包含多体修正</p>
        </div>
        <div class="effect">
          <h4>阻尼效应</h4>
          <p>激发获得有限寿命</p>
          <p>谱线展宽</p>
        </div>
      </div>
    </div>

    <!-- 量子涡旋的拓扑性质 -->
    <div class="content-card">
      <h2>量子涡旋的拓扑性质</h2>
      
      <h3>拓扑不变量</h3>
      <p>涡旋环的拓扑分类：</p>
      <div class="topological-classification">
        <div class="topo-class">
          <h4>链接数</h4>
          <p>描述两个环的缠绕程度</p>
          <p>拓扑保护的量子数</p>
        </div>
        <div class="topo-class">
          <h4>扭转数</h4>
          <p>环自身的扭转程度</p>
          <p>影响环的稳定性</p>
        </div>
        <div class="topo-class">
          <h4>结点不变量</h4>
          <p>复杂涡旋结构的分类</p>
          <p>高阶拓扑效应</p>
        </div>
      </div>
      
      <h3>拓扑相变</h3>
      <p>涡旋环系统的相变：</p>
      <div class="formula-box">
        T_c ∝ ρ_s(0)/k_B
      </div>
      
      <div class="topological-transitions">
        <div class="transition">
          <h4>Kosterlitz-Thouless相变</h4>
          <p>涡旋-反涡旋对的解束缚</p>
          <p>适用于二维系统</p>
        </div>
        <div class="transition">
          <h4>三维推广</h4>
          <p>涡旋环的凝聚-解凝聚</p>
          <p>λ相变的拓扑理解</p>
        </div>
      </div>
    </div>

    <!-- 现代发展和应用 -->
    <div class="content-card">
      <h2>现代发展和应用</h2>
      
      <h3>数值模拟</h3>
      <div class="numerical-methods">
        <div class="method">
          <h4>路径积分蒙特卡罗</h4>
          <p><strong>方法：</strong>直接模拟Feynman路径积分</p>
          <p><strong>优势：</strong>包含完整的量子效应</p>
          <p><strong>挑战：</strong>符号问题</p>
        </div>
        <div class="method">
          <h4>涡旋动力学模拟</h4>
          <p><strong>方法：</strong>经典涡旋线动力学</p>
          <p><strong>应用：</strong>湍流超流研究</p>
          <p><strong>结果：</strong>Kolmogorov谱</p>
        </div>
        <div class="method">
          <h4>密度泛函理论</h4>
          <p><strong>方法：</strong>基于密度的变分方法</p>
          <p><strong>优势：</strong>计算效率高</p>
          <p><strong>应用：</strong>有限温度性质</p>
        </div>
      </div>
      
      <h3>实验验证</h3>
      <div class="experimental-verification">
        <div class="experiment">
          <h4>涡旋环的直接观测</h4>
          <p><strong>技术：</strong>粒子示踪</p>
          <p><strong>结果：</strong>确认涡旋环存在</p>
          <p><strong>测量：</strong>环的尺寸和速度</p>
        </div>
        <div class="experiment">
          <h4>激发谱测量</h4>
          <p><strong>技术：</strong>中子散射</p>
          <p><strong>结果：</strong>验证Feynman关系</p>
          <p><strong>精度：</strong>长波长区域精确</p>
        </div>
        <div class="experiment">
          <h4>超流湍流</h4>
          <p><strong>观测：</strong>量子化涡旋缠结</p>
          <p><strong>理论：</strong>基于Feynman涡旋环</p>
          <p><strong>应用：</strong>湍流能谱研究</p>
        </div>
      </div>
      
      <h3>理论扩展</h3>
      <div class="theoretical-extensions">
        <div class="extension">
          <h4>有限温度理论</h4>
          <p>包含热涡旋环的完整理论</p>
          <p>解释λ相变的微观机制</p>
        </div>
        <div class="extension">
          <h4>强相互作用推广</h4>
          <p>超越弱相互作用近似</p>
          <p>适用于高密度系统</p>
        </div>
        <div class="extension">
          <h4>其他量子流体</h4>
          <p>应用于³He-B相</p>
          <p>冷原子气体中的涡旋</p>
        </div>
      </div>
    </div>

    <!-- 与其他理论的关系 -->
    <div class="content-card">
      <h2>与其他理论的关系</h2>
      
      <h3>与Landau理论的关系</h3>
      <div class="theory-comparison">
        <div class="comparison-item">
          <h4>互补性</h4>
          <p><strong>Landau：</strong>现象学描述</p>
          <p><strong>Feynman：</strong>微观机制</p>
          <p><strong>结合：</strong>完整理论框架</p>
        </div>
        <div class="comparison-item">
          <h4>激发谱</h4>
          <p><strong>Landau：</strong>准粒子图像</p>
          <p><strong>Feynman：</strong>涡旋环图像</p>
          <p><strong>统一：</strong>长波长一致</p>
        </div>
      </div>
      
      <h3>与Bogoliubov理论的关系</h3>
      <div class="bogoliubov-comparison">
        <div class="comparison-aspect">
          <h4>适用范围</h4>
          <p><strong>Bogoliubov：</strong>弱相互作用气体</p>
          <p><strong>Feynman：</strong>强相互作用液体</p>
        </div>
        <div class="comparison-aspect">
          <h4>激发机制</h4>
          <p><strong>Bogoliubov：</strong>密度波</p>
          <p><strong>Feynman：</strong>涡旋环</p>
        </div>
        <div class="comparison-aspect">
          <h4>统一框架</h4>
          <p>两者在某些极限下等价</p>
          <p>提供不同的物理图像</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        Feynman的涡旋环理论为理解液氦-4的超流性质提供了独特而深刻的视角。
        这一理论不仅成功解释了许多实验观测，更重要的是，
        它引入了全新的物理概念和数学方法，对后续的量子多体理论发展
        产生了深远影响。
      </p>
      
      <div class="key-contributions">
        <div class="contribution">
          <h4>概念创新</h4>
          <p>涡旋环作为基本激发的概念</p>
          <p>路径积分在量子统计中的应用</p>
        </div>
        <div class="contribution">
          <h4>理论成就</h4>
          <p>Feynman关系的建立</p>
          <p>激发谱的微观解释</p>
        </div>
        <div class="contribution">
          <h4>方法论贡献</h4>
          <p>拓扑方法在凝聚态物理中的应用</p>
          <p>数值模拟方法的发展</p>
        </div>
        <div class="contribution">
          <h4>现代意义</h4>
          <p>量子湍流理论的基础</p>
          <p>其他量子流体系统的理论模板</p>
        </div>
      </div>
      
      <p>
        虽然Feynman理论在某些方面仍有局限性，但它所提供的物理洞察
        和数学框架至今仍在推动着量子多体物理学的发展。
        特别是在冷原子物理、量子流体动力学和拓扑量子态等
        现代研究领域中，Feynman的思想继续发挥着重要作用。
      </p>
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
  color: #3498db;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-card h5 {
  color: #2980b9;
  font-size: 1.1rem;
  margin: 0.8rem 0 0.4rem 0;
}

.content-card p {
  margin-bottom: 1rem;
  text-align: justify;
}

.content-card ul, .content-card ol {
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

.exchange-symmetry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.symmetry-aspect {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.symmetry-aspect h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.vortex-ring-concept {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.concept-aspect {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.concept-aspect h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.ring-dynamics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.dynamics-aspect {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.dynamics-aspect h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.experimental-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.comparison-aspect {
  background: #fff3e0;
  border: 1px solid #ff9800;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.comparison-aspect h4 {
  color: #f57c00;
  margin-bottom: 1rem;
}

.low-temp-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.temp-regime {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.temp-regime h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.superfluid-density-calc {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.density-component {
  background: #e0f2f1;
  border: 1px solid #009688;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.density-component h4 {
  color: #00695c;
  margin-bottom: 1rem;
}

.ring-interactions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.interaction-type {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.interaction-type h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.renormalization-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect {
  background: #fdf2e9;
  border: 1px solid #e67e22;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.effect h4 {
  color: #d35400;
  margin-bottom: 1rem;
}

.topological-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.topo-class {
  background: #e8f4fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.topo-class h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.topological-transitions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.transition {
  background: #f4ecf7;
  border: 1px solid #8e44ad;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.transition h4 {
  color: #7d3c98;
  margin-bottom: 1rem;
}

.numerical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method {
  background: #e1f5fe;
  border: 1px solid #03a9f4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.method h4 {
  color: #0288d1;
  margin-bottom: 1rem;
}

.experimental-verification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.experiment {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.experiment h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.theoretical-extensions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.extension {
  background: #fff8e1;
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.extension h4 {
  color: #f57f17;
  margin-bottom: 1rem;
}

.theory-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.comparison-item {
  background: #f0f4f8;
  border: 1px solid #607d8b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.comparison-item h4 {
  color: #455a64;
  margin-bottom: 1rem;
}

.bogoliubov-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.key-contributions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.contribution {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.contribution h4 {
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
  
  .exchange-symmetry,
  .vortex-ring-concept,
  .ring-dynamics,
  .experimental-comparison,
  .low-temp-behavior,
  .superfluid-density-calc,
  .ring-interactions,
  .renormalization-effects,
  .topological-classification,
  .topological-transitions,
  .numerical-methods,
  .experimental-verification,
  .theoretical-extensions,
  .theory-comparison,
  .bogoliubov-comparison,
  .key-contributions {
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