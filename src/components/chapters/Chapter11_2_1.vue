<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.2.1 自由空间的玻色-爱因斯坦凝聚</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        自由空间的玻色-爱因斯坦凝聚是理解BEC现象最基础和最重要的情形。
        在这种情况下，玻色子在均匀的三维空间中运动，不受外势场的束缚。
        虽然这是一个理想化的模型，但它揭示了BEC的本质特征，
        为理解更复杂系统奠定了坚实的理论基础。本节将深入探讨自由空间BEC的各个方面。
      </p>
    </div>

    <!-- 理想玻色气体的统计力学 -->
    <div class="content-card">
      <h2>理想玻色气体的统计力学</h2>
      
      <h3>基本设定</h3>
      <p>考虑N个无相互作用的玻色子在体积V的三维空间中：</p>
      <div class="basic-setup">
        <div class="setup-item">
          <h4>单粒子态</h4>
          <p>平面波态：|k⟩ = e^(ik·r)/√V</p>
          <p>能量：εₖ = ℏ²k²/(2m)</p>
        </div>
        <div class="setup-item">
          <h4>态密度</h4>
          <p>动量空间：g(k) = V/(2π)³</p>
          <p>能量空间：g(ε) = (V/2π²)(2m/ℏ²)^(3/2)ε^(1/2)</p>
        </div>
        <div class="setup-item">
          <h4>热力学极限</h4>
          <p>N → ∞, V → ∞, n = N/V = 常数</p>
        </div>
      </div>
      
      <h3>玻色-爱因斯坦分布</h3>
      <p>平衡态下的占据数分布：</p>
      <div class="formula-box">
        ⟨nₖ⟩ = 1/(e^(β(εₖ-μ)) - 1)
      </div>
      <p>其中β = 1/(kᵦT)，μ是化学势。</p>
      
      <h3>粒子数约束</h3>
      <div class="formula-box">
        N = ∑ₖ ⟨nₖ⟩ = ∫₀^∞ g(ε)/(e^(β(ε-μ)) - 1) dε
      </div>
    </div>

    <!-- 临界温度的推导 -->
    <div class="content-card">
      <h2>临界温度的推导</h2>
      
      <h3>临界条件</h3>
      <p>当μ → 0⁻时，基态开始宏观占据。此时：</p>
      <div class="formula-box">
        N = ∫₀^∞ g(ε)/(e^(βcε) - 1) dε
      </div>
      
      <h3>积分计算</h3>
      <p>引入无量纲变量x = βcε：</p>
      <div class="formula-box">
        N = g₀(kᵦTc)^(3/2) ∫₀^∞ x^(1/2)/(e^x - 1) dx
      </div>
      <p>其中g₀ = (V/2π²)(2m/ℏ²)^(3/2)</p>
      
      <h3>Riemann ζ函数</h3>
      <p>积分结果为：</p>
      <div class="formula-box">
        ∫₀^∞ x^(1/2)/(e^x - 1) dx = Γ(3/2)ζ(3/2) = (√π/2)ζ(3/2)
      </div>
      <p>其中ζ(3/2) ≈ 2.612</p>
      
      <h3>临界温度公式</h3>
      <div class="critical-temperature">
        <div class="formula-box">
          kᵦTc = (2πℏ²/m)[n/ζ(3/2)]^(2/3)
        </div>
        <div class="tc-properties">
          <div class="property">
            <h4>密度依赖性</h4>
            <p>Tc ∝ n^(2/3)</p>
          </div>
          <div class="property">
            <h4>质量依赖性</h4>
            <p>Tc ∝ m⁻¹</p>
          </div>
          <div class="property">
            <h4>数值估计</h4>
            <p>对于⁸⁷Rb：Tc ≈ 94 nK × (n/10¹⁴ cm⁻³)^(2/3)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 凝聚相的性质 -->
    <div class="content-card">
      <h2>凝聚相的性质</h2>
      
      <h3>凝聚分数</h3>
      <p>当T < Tc时，基态的宏观占据：</p>
      <div class="formula-box">
        N₀ = N - ∫₀^∞ g(ε)/(e^(βε) - 1) dε
      </div>
      <p>凝聚分数为：</p>
      <div class="formula-box">
        N₀/N = 1 - (T/Tc)^(3/2)
      </div>
      
      <div class="condensate-properties">
        <div class="property">
          <h4>T = 0时</h4>
          <p>N₀/N = 1（完全凝聚）</p>
        </div>
        <div class="property">
          <h4>T = Tc时</h4>
          <p>N₀/N = 0（凝聚消失）</p>
        </div>
        <div class="property">
          <h4>T = Tc/2时</h4>
          <p>N₀/N ≈ 0.65</p>
        </div>
      </div>
      
      <h3>激发态密度</h3>
      <p>激发态的粒子数密度：</p>
      <div class="formula-box">
        nₑₓ(T) = (1/2π²)(2mkᵦT/ℏ²)^(3/2) ζ(3/2)
      </div>
      <p>在T < Tc时保持常数，多余的粒子进入基态。</p>
    </div>

    <!-- 热力学性质 -->
    <div class="content-card">
      <h2>热力学性质</h2>
      
      <h3>内能</h3>
      <p>系统的内能主要由激发态贡献：</p>
      <div class="formula-box">
        U = ∫₀^∞ ε g(ε)/(e^(βε) - 1) dε
      </div>
      
      <div class="energy-regimes">
        <div class="regime">
          <h4>高温区域 (T > Tc)</h4>
          <div class="formula-box">
            U = (3/2)NkᵦT
          </div>
          <p>经典理想气体行为</p>
        </div>
        
        <div class="regime">
          <h4>低温区域 (T < Tc)</h4>
          <div class="formula-box">
            U = (3/2)NkᵦT(T/Tc)^(3/2)
          </div>
          <p>只有激发态对内能有贡献</p>
        </div>
      </div>
      
      <h3>比热</h3>
      <p>比热C = ∂U/∂T：</p>
      <div class="specific-heat">
        <div class="heat-regime">
          <h4>T > Tc</h4>
          <div class="formula-box">
            C = (3/2)Nkᵦ
          </div>
        </div>
        
        <div class="heat-regime">
          <h4>T < Tc</h4>
          <div class="formula-box">
            C = (15/4)Nkᵦ(T/Tc)^(3/2)
          </div>
        </div>
        
        <div class="heat-regime">
          <h4>T = Tc</h4>
          <p>比热连续但导数不连续（λ型跃变）</p>
        </div>
      </div>
      
      <h3>压强和状态方程</h3>
      <p>理想玻色气体的压强：</p>
      <div class="formula-box">
        P = (2/3)(U/V)
      </div>
      
      <div class="pressure-regimes">
        <div class="pressure-regime">
          <h4>T > Tc</h4>
          <p>P = nkᵦT（理想气体状态方程）</p>
        </div>
        <div class="pressure-regime">
          <h4>T < Tc</h4>
          <p>P = nkᵦT(T/Tc)^(3/2)</p>
        </div>
      </div>
    </div>

    <!-- 相变的特征 -->
    <div class="content-card">
      <h2>相变的特征</h2>
      
      <h3>相变类型</h3>
      <div class="phase-transition-type">
        <h4>三级相变</h4>
        <p>根据Ehrenfest分类：</p>
        <ul>
          <li>密度连续：ρ(Tc⁺) = ρ(Tc⁻)</li>
          <li>比热连续：C(Tc⁺) = C(Tc⁻)</li>
          <li>比热导数不连续：∂C/∂T|Tc⁺ ≠ ∂C/∂T|Tc⁻</li>
        </ul>
      </div>
      
      <h3>序参量</h3>
      <div class="order-parameter">
        <h4>凝聚体波函数</h4>
        <p>复序参量：</p>
        <div class="formula-box">
          ψ₀ = √N₀ e^(iφ)
        </div>
        <p>其中φ是全局相位</p>
        
        <h4>序参量的性质</h4>
        <ul>
          <li>T > Tc：⟨ψ₀⟩ = 0</li>
          <li>T < Tc：⟨|ψ₀|²⟩ = N₀ ≠ 0</li>
          <li>相位φ是任意的（对称性破缺）</li>
        </ul>
      </div>
      
      <h3>对称性破缺</h3>
      <div class="symmetry-breaking">
        <div class="symmetry">
          <h4>U(1)规范对称性</h4>
          <p>哈密顿量在全局相位变换下不变</p>
          <p>ψ → ψe^(iα)</p>
        </div>
        <div class="symmetry">
          <h4>自发对称性破缺</h4>
          <p>基态选择特定相位，破缺U(1)对称性</p>
        </div>
        <div class="symmetry">
          <h4>Goldstone模式</h4>
          <p>相位涨落对应无能隙的集体激发</p>
        </div>
      </div>
    </div>

    <!-- 量子统计效应 -->
    <div class="content-card">
      <h2>量子统计效应</h2>
      
      <h3>德布罗意波长</h3>
      <p>热德布罗意波长：</p>
      <div class="formula-box">
        λdB = h/√(2πmkᵦT)
      </div>
      
      <h3>量子简并条件</h3>
      <div class="degeneracy-condition">
        <h4>简并参数</h4>
        <div class="formula-box">
          nλdB³ = (h³n)/(2πmkᵦT)^(3/2)
        </div>
        
        <h4>临界条件</h4>
        <p>当nλdB³ ≥ ζ(3/2) ≈ 2.612时发生BEC</p>
        
        <h4>物理图像</h4>
        <ul>
          <li>粒子的量子波包开始重叠</li>
          <li>统计关联变得重要</li>
          <li>宏观量子效应出现</li>
        </ul>
      </div>
      
      <h3>相空间密度</h3>
      <div class="phase-space-density">
        <h4>定义</h4>
        <p>相空间密度：D = nλdB³</p>
        
        <h4>物理意义</h4>
        <ul>
          <li>D << 1：经典气体</li>
          <li>D ~ 1：量子简并边界</li>
          <li>D >> 1：强量子简并</li>
        </ul>
      </div>
    </div>

    <!-- 涨落和关联 -->
    <div class="content-card">
      <h2>涨落和关联</h2>
      
      <h3>粒子数涨落</h3>
      <p>基态占据数的涨落：</p>
      <div class="formula-box">
        ⟨(ΔN₀)²⟩ = ⟨N₀²⟩ - ⟨N₀⟩²
      </div>
      
      <div class="fluctuation-properties">
        <div class="fluctuation">
          <h4>理想气体</h4>
          <p>⟨(ΔN₀)²⟩ = ⟨N₀⟩（泊松分布）</p>
        </div>
        <div class="fluctuation">
          <h4>相对涨落</h4>
          <p>⟨(ΔN₀)²⟩/⟨N₀⟩² = 1/⟨N₀⟩</p>
        </div>
        <div class="fluctuation">
          <h4>热力学极限</h4>
          <p>相对涨落趋于零</p>
        </div>
      </div>
      
      <h3>空间关联函数</h3>
      <p>一体密度矩阵：</p>
      <div class="formula-box">
        ρ₁(r,r') = ⟨ψ̂†(r)ψ̂(r')⟩
      </div>
      
      <div class="correlation-functions">
        <div class="correlation">
          <h4>对角元</h4>
          <p>ρ₁(r,r) = n(r)（局域密度）</p>
        </div>
        <div class="correlation">
          <h4>非对角元</h4>
          <p>T < Tc时：ρ₁(r,r') → √n₀(r)n₀(r')</p>
        </div>
        <div class="correlation">
          <h4>非对角长程序</h4>
          <p>|r-r'| → ∞时关联不衰减</p>
        </div>
      </div>
    </div>

    <!-- 实验观测 -->
    <div class="content-card">
      <h2>实验观测</h2>
      
      <h3>直接成像</h3>
      <div class="imaging-methods">
        <div class="method">
          <h4>吸收成像</h4>
          <p><strong>原理：</strong>共振光的吸收</p>
          <p><strong>信息：</strong>密度分布</p>
          <p><strong>分辨率：</strong>~1μm</p>
        </div>
        
        <div class="method">
          <h4>相位对比成像</h4>
          <p><strong>原理：</strong>折射率变化</p>
          <p><strong>优势：</strong>非破坏性</p>
          <p><strong>应用：</strong>实时监测</p>
        </div>
        
        <div class="method">
          <h4>荧光成像</h4>
          <p><strong>原理：</strong>激发态荧光</p>
          <p><strong>特点：</strong>高信噪比</p>
          <p><strong>限制：</strong>破坏性测量</p>
        </div>
      </div>
      
      <h3>飞行时间测量</h3>
      <div class="time-of-flight">
        <h4>实验步骤</h4>
        <ol>
          <li>关闭束缚势</li>
          <li>让原子自由膨胀</li>
          <li>一定时间后成像</li>
        </ol>
        
        <h4>信息提取</h4>
        <ul>
          <li>动量分布</li>
          <li>温度测量</li>
          <li>凝聚分数</li>
        </ul>
        
        <h4>BEC特征</h4>
        <p>双峰结构：窄的凝聚峰 + 宽的热原子背景</p>
      </div>
      
      <h3>干涉实验</h3>
      <div class="interference-experiments">
        <div class="experiment">
          <h4>双缝干涉</h4>
          <p>验证凝聚体的相干性</p>
        </div>
        <div class="experiment">
          <h4>Ramsey干涉</h4>
          <p>测量相位演化</p>
        </div>
        <div class="experiment">
          <h4>原子激光</h4>
          <p>连续输出相干原子束</p>
        </div>
      </div>
    </div>

    <!-- 理论发展 -->
    <div class="content-card">
      <h2>理论发展</h2>
      
      <h3>历史回顾</h3>
      <div class="historical-development">
        <div class="milestone">
          <h4>1924年 - Bose统计</h4>
          <p>Bose提出光子的统计理论</p>
        </div>
        <div class="milestone">
          <h4>1925年 - Einstein预言</h4>
          <p>Einstein将Bose统计推广到物质粒子</p>
        </div>
        <div class="milestone">
          <h4>1938年 - London理论</h4>
          <p>将BEC与超流联系起来</p>
        </div>
        <div class="milestone">
          <h4>1995年 - 实验实现</h4>
          <p>Cornell、Wieman和Ketterle实现冷原子BEC</p>
        </div>
      </div>
      
      <h3>现代发展</h3>
      <div class="modern-developments">
        <div class="development">
          <h4>有限尺寸效应</h4>
          <p>考虑系统尺寸对相变的影响</p>
        </div>
        <div class="development">
          <h4>涨落理论</h4>
          <p>超越平均场的涨落效应</p>
        </div>
        <div class="development">
          <h4>非平衡动力学</h4>
          <p>BEC形成的动力学过程</p>
        </div>
      </div>
    </div>

    <!-- 应用前景 -->
    <div class="content-card">
      <h2>应用前景</h2>
      
      <h3>基础物理研究</h3>
      <div class="basic-research">
        <div class="research-area">
          <h4>量子多体物理</h4>
          <p>研究强关联量子系统</p>
        </div>
        <div class="research-area">
          <h4>量子相变</h4>
          <p>探索新的量子相和相变</p>
        </div>
        <div class="research-area">
          <h4>量子模拟</h4>
          <p>模拟复杂的量子系统</p>
        </div>
      </div>
      
      <h3>技术应用</h3>
      <div class="technological-applications">
        <div class="application">
          <h4>精密测量</h4>
          <p>原子干涉仪、重力仪</p>
        </div>
        <div class="application">
          <h4>量子传感</h4>
          <p>磁场、电场、加速度测量</p>
        </div>
        <div class="application">
          <h4>量子信息</h4>
          <p>量子存储、量子计算</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        自由空间的玻色-爱因斯坦凝聚为我们提供了理解宏观量子现象的基础框架。
        从Einstein的理论预言到现代冷原子实验的精确验证，BEC已经成为
        量子多体物理研究的重要平台。理想玻色气体模型虽然简单，
        但它揭示了量子统计、相变和宏观量子相干的深刻物理内涵。
      </p>
      
      <div class="summary-points">
        <div class="point">
          <h4>理论基础</h4>
          <p>量子统计力学和相变理论</p>
        </div>
        <div class="point">
          <h4>关键特征</h4>
          <p>宏观量子相干和非对角长程序</p>
        </div>
        <div class="point">
          <h4>实验验证</h4>
          <p>冷原子技术的成功应用</p>
        </div>
        <div class="point">
          <h4>未来发展</h4>
          <p>量子模拟和精密测量的广阔前景</p>
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
  border-bottom: 3px solid #27ae60;
}

.content-card {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #27ae60;
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
  color: #27ae60;
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

.basic-setup {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.setup-item {
  background: #e8f5e8;
  border: 1px solid #27ae60;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.setup-item h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.critical-temperature {
  margin: 1rem 0;
}

.tc-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.property {
  background: #f0f8ff;
  border: 1px solid #3498db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.property h4 {
  color: #2980b9;
  margin-bottom: 1rem;
}

.condensate-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.energy-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.regime {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.regime h4 {
  color: #856404;
  margin-bottom: 1rem;
}

.specific-heat {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.heat-regime {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.heat-regime h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.pressure-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.pressure-regime {
  background: #e1f5fe;
  border: 1px solid #00bcd4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.pressure-regime h4 {
  color: #00838f;
  margin-bottom: 1rem;
}

.phase-transition-type {
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.phase-transition-type h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.order-parameter {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.order-parameter h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.symmetry-breaking {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.symmetry {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.symmetry h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.degeneracy-condition {
  background: #e8f4fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.degeneracy-condition h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.phase-space-density {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.phase-space-density h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.fluctuation-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.fluctuation {
  background: #e0f2f1;
  border: 1px solid #009688;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.fluctuation h4 {
  color: #00695c;
  margin-bottom: 1rem;
}

.correlation-functions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.correlation {
  background: #fff8e1;
  border: 1px solid #ff9800;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.correlation h4 {
  color: #f57c00;
  margin-bottom: 1rem;
}

.imaging-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method {
  background: #e8f4fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.method h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.time-of-flight {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.time-of-flight h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.interference-experiments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.experiment {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.experiment h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.historical-development {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.milestone {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.milestone h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.modern-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.development {
  background: #e0f7fa;
  border: 1px solid #00acc1;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.development h4 {
  color: #00838f;
  margin-bottom: 1rem;
}

.basic-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.research-area {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.research-area h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.technological-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.application {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.application h4 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.summary-points {
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
  
  .basic-setup,
  .tc-properties,
  .condensate-properties,
  .energy-regimes,
  .specific-heat,
  .pressure-regimes,
  .symmetry-breaking,
  .fluctuation-properties,
  .correlation-functions,
  .imaging-methods,
  .interference-experiments,
  .historical-development,
  .modern-developments,
  .basic-research,
  .technological-applications,
  .summary-points {
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