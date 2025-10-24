<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.2.2 简谐势阱中的玻色-爱因斯坦凝聚</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        在实际的冷原子实验中，原子总是被束缚在某种形式的势阱中。
        简谐势阱是最常见和最重要的束缚势，它不仅在理论上易于处理，
        而且在实验中容易实现。简谐势阱中的玻色-爱因斯坦凝聚展现出
        许多与自由空间不同的特性，包括有限的临界温度、
        非均匀的密度分布和丰富的集体激发模式。
      </p>
    </div>

    <!-- 简谐势阱模型 -->
    <div class="content-card">
      <h2>简谐势阱模型</h2>
      
      <h3>势能函数</h3>
      <p>三维各向异性简谐势：</p>
      <div class="formula-box">
        V(r) = (1/2)m(ωₓ²x² + ωᵧ²y² + ωᵤ²z²)
      </div>
      
      <div class="trap-types">
        <div class="trap-type">
          <h4>球对称势阱</h4>
          <p>ωₓ = ωᵧ = ωᵤ = ω</p>
          <p>V(r) = (1/2)mω²r²</p>
        </div>
        <div class="trap-type">
          <h4>轴对称势阱</h4>
          <p>ωₓ = ωᵧ = ω⊥, ωᵤ = ω∥</p>
          <p>长椭球：ω⊥ > ω∥</p>
          <p>扁椭球：ω⊥ < ω∥</p>
        </div>
        <div class="trap-type">
          <h4>准一维/二维势阱</h4>
          <p>一个或两个方向的频率很大</p>
          <p>有效降维系统</p>
        </div>
      </div>
      
      <h3>单粒子能级</h3>
      <p>三维简谐振子的能级：</p>
      <div class="formula-box">
        εₙₓ,ₙᵧ,ₙᵤ = ℏωₓ(nₓ + 1/2) + ℏωᵧ(nᵧ + 1/2) + ℏωᵤ(nᵤ + 1/2)
      </div>
      <p>其中nₓ, nᵧ, nᵤ = 0, 1, 2, ...</p>
      
      <h3>态密度</h3>
      <p>对于球对称势阱：</p>
      <div class="formula-box">
        g(ε) = ε²/(2(ℏω)³)
      </div>
    </div>

    <!-- 临界温度 -->
    <div class="content-card">
      <h2>临界温度</h2>
      
      <h3>粒子数约束</h3>
      <p>总粒子数：</p>
      <div class="formula-box">
        N = ∫₀^∞ g(ε)/(e^(β(ε-μ)) - 1) dε
      </div>
      
      <h3>临界温度推导</h3>
      <p>当μ → 0时：</p>
      <div class="formula-box">
        N = ∫₀^∞ (ε²/2(ℏω)³)/(e^(βcε) - 1) dε
      </div>
      
      <p>引入x = βcε：</p>
      <div class="formula-box">
        N = (kᵦTc)³/(2(ℏω)³) ∫₀^∞ x²/(e^x - 1) dx
      </div>
      
      <h3>临界温度公式</h3>
      <div class="critical-temp-formula">
        <div class="formula-box">
          kᵦTc = ℏω̄[N/ζ(3)]^(1/3)
        </div>
        <p>其中：</p>
        <ul>
          <li>ω̄ = (ωₓωᵧωᵤ)^(1/3)：几何平均频率</li>
          <li>ζ(3) ≈ 1.202：Riemann ζ函数</li>
        </ul>
        
        <div class="tc-properties">
          <div class="property">
            <h4>粒子数依赖</h4>
            <p>Tc ∝ N^(1/3)</p>
          </div>
          <div class="property">
            <h4>频率依赖</h4>
            <p>Tc ∝ ω̄</p>
          </div>
          <div class="property">
            <h4>与自由气体比较</h4>
            <p>势阱中的Tc更高</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Thomas-Fermi近似 -->
    <div class="content-card">
      <h2>Thomas-Fermi近似</h2>
      
      <h3>基本假设</h3>
      <p>当相互作用能远大于动能时，可以忽略动能项：</p>
      <div class="tf-assumptions">
        <div class="assumption">
          <h4>局域密度近似</h4>
          <p>化学势在空间中保持常数</p>
        </div>
        <div class="assumption">
          <h4>动能忽略</h4>
          <p>相互作用能 >> 动能</p>
        </div>
        <div class="assumption">
          <h4>经典场近似</h4>
          <p>凝聚体用经典场描述</p>
        </div>
      </div>
      
      <h3>Gross-Pitaevskii方程</h3>
      <p>凝聚体波函数满足：</p>
      <div class="formula-box">
        μψ(r) = [-ℏ²∇²/(2m) + V(r) + g|ψ(r)|²]ψ(r)
      </div>
      
      <h3>Thomas-Fermi解</h3>
      <p>忽略动能项后：</p>
      <div class="formula-box">
        μ = V(r) + g|ψ(r)|²
      </div>
      
      <p>密度分布：</p>
      <div class="formula-box">
        n(r) = |ψ(r)|² = (μ - V(r))/g, 当μ > V(r)
      </div>
      <div class="formula-box">
        n(r) = 0, 当μ ≤ V(r)
      </div>
      
      <h3>TF半径</h3>
      <p>凝聚体边界由μ = V(R)确定：</p>
      <div class="formula-box">
        Rᵢ = √(2μ/(mωᵢ²)), i = x,y,z
      </div>
      
      <div class="tf-properties">
        <div class="property">
          <h4>椭球形状</h4>
          <p>凝聚体呈椭球分布</p>
        </div>
        <div class="property">
          <h4>抛物线密度</h4>
          <p>密度呈倒抛物线分布</p>
        </div>
        <div class="property">
          <h4>尖锐边界</h4>
          <p>密度在边界处突然降为零</p>
        </div>
      </div>
    </div>

    <!-- 集体激发 -->
    <div class="content-card">
      <h2>集体激发</h2>
      
      <h3>小振幅激发</h3>
      <p>在平衡态附近的小扰动：</p>
      <div class="formula-box">
        ψ(r,t) = e^(-iμt/ℏ)[ψ₀(r) + δψ(r,t)]
      </div>
      
      <h3>Bogoliubov-de Gennes方程</h3>
      <p>激发的本征方程：</p>
      <div class="formula-box">
        ℏω(uₙ/vₙ) = (L̂₊ L̂₋/L̂₋ L̂₊)(uₙ/vₙ)
      </div>
      <p>其中：</p>
      <ul>
        <li>L̂₊ = -ℏ²∇²/(2m) + V(r) + 2g|ψ₀|² - μ</li>
        <li>L̂₋ = -ℏ²∇²/(2m) + V(r) + g|ψ₀|²</li>
      </ul>
      
      <h3>集体模式</h3>
      <div class="collective-modes">
        <div class="mode">
          <h4>呼吸模式</h4>
          <p><strong>频率：</strong>ω = 2ω₀（球对称）</p>
          <p><strong>特征：</strong>径向对称振荡</p>
          <p><strong>观测：</strong>凝聚体尺寸周期变化</p>
        </div>
        
        <div class="mode">
          <h4>偶极模式</h4>
          <p><strong>频率：</strong>ω = ω₀</p>
          <p><strong>特征：</strong>质心振荡</p>
          <p><strong>观测：</strong>凝聚体位置周期变化</p>
        </div>
        
        <div class="mode">
          <h4>四极模式</h4>
          <p><strong>频率：</strong>ω = √2ω₀</p>
          <p><strong>特征：</strong>形状振荡</p>
          <p><strong>观测：</strong>椭球轴比周期变化</p>
        </div>
        
        <div class="mode">
          <h4>剪切模式</h4>
          <p><strong>频率：</strong>ω = ω₀</p>
          <p><strong>特征：</strong>涡旋激发</p>
          <p><strong>观测：</strong>角动量变化</p>
        </div>
      </div>
    </div>

    <!-- 有限温度效应 -->
    <div class="content-card">
      <h2>有限温度效应</h2>
      
      <h3>双流体模型</h3>
      <p>系统由凝聚体和热激发组成：</p>
      <div class="two-fluid-model">
        <div class="component">
          <h4>凝聚体成分</h4>
          <p>密度：n₀(r,T)</p>
          <p>速度：v₀(r,t)</p>
          <p>性质：无粘滞超流</p>
        </div>
        <div class="component">
          <h4>正常成分</h4>
          <p>密度：nₙ(r,T)</p>
          <p>速度：vₙ(r,t)</p>
          <p>性质：有粘滞正常流体</p>
        </div>
      </div>
      
      <h3>温度依赖的密度分布</h3>
      <p>凝聚体密度随温度变化：</p>
      <div class="formula-box">
        n₀(r,T) = n₀(r,0)[1 - (T/Tc)³]
      </div>
      
      <h3>热激发的影响</h3>
      <div class="thermal-effects">
        <div class="effect">
          <h4>凝聚分数减少</h4>
          <p>随温度升高，更多粒子进入激发态</p>
        </div>
        <div class="effect">
          <h4>尺寸增大</h4>
          <p>热激发导致有效势阱变浅</p>
        </div>
        <div class="effect">
          <h4>集体模式阻尼</h4>
          <p>热激发与集体模式耦合产生阻尼</p>
        </div>
      </div>
    </div>

    <!-- 实验技术 -->
    <div class="content-card">
      <h2>实验技术</h2>
      
      <h3>势阱的产生</h3>
      <div class="trap-generation">
        <div class="method">
          <h4>磁阱</h4>
          <p><strong>原理：</strong>磁偶极与磁场梯度相互作用</p>
          <p><strong>优点：</strong>深势阱，易于控制</p>
          <p><strong>缺点：</strong>只能束缚弱场寻求态</p>
        </div>
        
        <div class="method">
          <h4>光阱</h4>
          <p><strong>原理：</strong>AC Stark效应</p>
          <p><strong>优点：</strong>可束缚任意自旋态</p>
          <p><strong>缺点：</strong>光散射加热</p>
        </div>
        
        <div class="method">
          <h4>混合阱</h4>
          <p><strong>原理：</strong>磁阱+光阱</p>
          <p><strong>优点：</strong>结合两者优势</p>
          <p><strong>应用：</strong>现代实验标准配置</p>
        </div>
      </div>
      
      <h3>参数测量</h3>
      <div class="parameter-measurement">
        <div class="measurement">
          <h4>阱频测量</h4>
          <p><strong>方法：</strong>偶极振荡</p>
          <p><strong>原理：</strong>ω = 2πf</p>
          <p><strong>精度：</strong>~1%</p>
        </div>
        
        <div class="measurement">
          <h4>粒子数测量</h4>
          <p><strong>方法：</strong>吸收成像</p>
          <p><strong>原理：</strong>积分密度分布</p>
          <p><strong>精度：</strong>~5%</p>
        </div>
        
        <div class="measurement">
          <h4>温度测量</h4>
          <p><strong>方法：</strong>飞行时间</p>
          <p><strong>原理：</strong>热原子动量分布</p>
          <p><strong>精度：</strong>~10%</p>
        </div>
      </div>
    </div>

    <!-- 非线性动力学 -->
    <div class="content-card">
      <h2>非线性动力学</h2>
      
      <h3>Gross-Pitaevskii方程</h3>
      <p>含时演化方程：</p>
      <div class="formula-box">
        iℏ∂ψ/∂t = [-ℏ²∇²/(2m) + V(r) + g|ψ|²]ψ
      </div>
      
      <h3>非线性现象</h3>
      <div class="nonlinear-phenomena">
        <div class="phenomenon">
          <h4>孤子</h4>
          <p><strong>条件：</strong>一维，吸引相互作用</p>
          <p><strong>特征：</strong>稳定的局域化波包</p>
          <p><strong>应用：</strong>原子激光脉冲</p>
        </div>
        
        <div class="phenomenon">
          <h4>涡旋</h4>
          <p><strong>条件：</strong>旋转系统</p>
          <p><strong>特征：</strong>量子化角动量</p>
          <p><strong>观测：</strong>相位奇点</p>
        </div>
        
        <div class="phenomenon">
          <h4>调制不稳定性</h4>
          <p><strong>条件：</strong>排斥相互作用</p>
          <p><strong>特征：</strong>均匀态不稳定</p>
          <p><strong>结果：</strong>密度调制</p>
        </div>
      </div>
      
      <h3>量子涡旋</h3>
      <div class="quantum-vortex">
        <h4>涡旋态</h4>
        <p>含涡旋的波函数：</p>
        <div class="formula-box">
          ψ(r,φ) = f(r)e^(imφ)
        </div>
        <p>其中m是涡旋数（整数）</p>
        
        <h4>涡旋性质</h4>
        <ul>
          <li>量子化环流：Γ = h/m</li>
          <li>奇点处密度为零</li>
          <li>拓扑保护的稳定性</li>
        </ul>
        
        <h4>涡旋格子</h4>
        <p>快速旋转下形成三角格子排列</p>
      </div>
    </div>

    <!-- 维度效应 -->
    <div class="content-card">
      <h2>维度效应</h2>
      
      <h3>准低维系统</h3>
      <p>当一个或两个方向的束缚很强时：</p>
      <div class="dimensional-crossover">
        <div class="dimension">
          <h4>准二维系统</h4>
          <p><strong>条件：</strong>ℏωz >> μ, kBT</p>
          <p><strong>特征：</strong>运动局限在xy平面</p>
          <p><strong>相互作用：</strong>g2D = g3D√(mωz/2πℏ)</p>
        </div>
        
        <div class="dimension">
          <h4>准一维系统</h4>
          <p><strong>条件：</strong>ℏω⊥ >> μ, kBT</p>
          <p><strong>特征：</strong>运动局限在一维</p>
          <p><strong>相互作用：</strong>g1D = g3D(mω⊥/2πℏ)</p>
        </div>
      </div>
      
      <h3>低维BEC的特殊性质</h3>
      <div class="low-dim-properties">
        <div class="property">
          <h4>增强的涨落</h4>
          <p>低维系统中涨落更强</p>
        </div>
        <div class="property">
          <h4>相变性质改变</h4>
          <p>Kosterlitz-Thouless相变</p>
        </div>
        <div class="property">
          <h4>新的激发模式</h4>
          <p>低维特有的集体激发</p>
        </div>
      </div>
    </div>

    <!-- 应用和展望 -->
    <div class="content-card">
      <h2>应用和展望</h2>
      
      <h3>精密测量</h3>
      <div class="precision-measurements">
        <div class="measurement-app">
          <h4>重力测量</h4>
          <p>利用原子干涉测量重力加速度</p>
          <p>精度：10⁻⁹ g</p>
        </div>
        <div class="measurement-app">
          <h4>惯性导航</h4>
          <p>基于原子陀螺仪的导航系统</p>
          <p>优势：无漂移，高精度</p>
        </div>
        <div class="measurement-app">
          <h4>基本常数测量</h4>
          <p>精细结构常数，万有引力常数</p>
          <p>意义：检验基本物理理论</p>
        </div>
      </div>
      
      <h3>量子模拟</h3>
      <div class="quantum-simulation">
        <div class="simulation">
          <h4>多体物理</h4>
          <p>模拟强关联电子系统</p>
        </div>
        <div class="simulation">
          <h4>拓扑物理</h4>
          <p>人工规范场和拓扑态</p>
        </div>
        <div class="simulation">
          <h4>宇宙学模拟</h4>
          <p>模拟早期宇宙的相变</p>
        </div>
      </div>
      
      <h3>量子技术</h3>
      <div class="quantum-technology">
        <div class="technology">
          <h4>量子传感</h4>
          <p>超高精度的磁场、电场传感器</p>
        </div>
        <div class="technology">
          <h4>量子计算</h4>
          <p>基于中性原子的量子比特</p>
        </div>
        <div class="technology">
          <h4>量子通信</h4>
          <p>量子存储和量子中继</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        简谐势阱中的玻色-爱因斯坦凝聚是冷原子物理的核心内容。
        与自由空间相比，势阱的存在带来了许多新的物理现象：
        有限的系统尺寸、非均匀的密度分布、丰富的集体激发模式等。
        Thomas-Fermi近似为我们提供了理解强相互作用凝聚体的有效工具，
        而Bogoliubov理论则揭示了集体激发的微观机制。
      </p>
      
      <div class="key-takeaways">
        <div class="takeaway">
          <h4>理论框架</h4>
          <p>Gross-Pitaevskii方程和Bogoliubov理论</p>
        </div>
        <div class="takeaway">
          <h4>实验实现</h4>
          <p>磁阱和光阱技术的成熟应用</p>
        </div>
        <div class="takeaway">
          <h4>丰富物理</h4>
          <p>集体激发、涡旋、孤子等非线性现象</p>
        </div>
        <div class="takeaway">
          <h4>应用前景</h4>
          <p>精密测量、量子模拟和量子技术</p>
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
  border-bottom: 3px solid #9b59b6;
}

.content-card {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #9b59b6;
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
  color: #9b59b6;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
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

.trap-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.trap-type {
  background: #f3e5f5;
  border: 1px solid #9b59b6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.trap-type h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.critical-temp-formula {
  margin: 1rem 0;
}

.tc-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.property {
  background: #e8f4fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.property h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.tf-assumptions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.assumption {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.assumption h4 {
  color: #856404;
  margin-bottom: 1rem;
}

.tf-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.collective-modes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.mode {
  background: #e0f2f1;
  border: 1px solid #009688;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.mode h4 {
  color: #00695c;
  margin-bottom: 1rem;
}

.two-fluid-model {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.component {
  background: #e1f5fe;
  border: 1px solid #00bcd4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.component h4 {
  color: #00838f;
  margin-bottom: 1rem;
}

.thermal-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect {
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.effect h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.trap-generation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.method h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.parameter-measurement {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.measurement {
  background: #f0f8ff;
  border: 1px solid #3498db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.measurement h4 {
  color: #2980b9;
  margin-bottom: 1rem;
}

.nonlinear-phenomena {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.phenomenon {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.phenomenon h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.quantum-vortex {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.quantum-vortex h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.dimensional-crossover {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.dimension {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.dimension h4 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.low-dim-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.precision-measurements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.measurement-app {
  background: #e0f7fa;
  border: 1px solid #00acc1;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.measurement-app h4 {
  color: #00838f;
  margin-bottom: 1rem;
}

.quantum-simulation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.simulation {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.simulation h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.quantum-technology {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.technology {
  background: #e8f4fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.technology h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.key-takeaways {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.takeaway {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.takeaway h4 {
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
  
  .trap-types,
  .tc-properties,
  .tf-assumptions,
  .tf-properties,
  .collective-modes,
  .two-fluid-model,
  .thermal-effects,
  .trap-generation,
  .parameter-measurement,
  .nonlinear-phenomena,
  .dimensional-crossover,
  .low-dim-properties,
  .precision-measurements,
  .quantum-simulation,
  .quantum-technology,
  .key-takeaways {
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