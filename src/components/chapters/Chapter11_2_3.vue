<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.2.3 弱相互作用的玻色子体系-液氦-4的超流理论</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        液氦-4是自然界中第一个被发现的超流体，也是玻色-爱因斯坦凝聚理论
        在实际物理系统中的重要应用。与理想玻色气体不同，液氦-4中的原子
        之间存在显著的相互作用，这使得其超流性质既复杂又丰富。
        本节将深入探讨弱相互作用玻色子体系的理论框架，
        以及如何应用于理解液氦-4的超流现象。
      </p>
    </div>

    <!-- 液氦-4的基本性质 -->
    <div class="content-card">
      <h2>液氦-4的基本性质</h2>
      
      <h3>物理参数</h3>
      <div class="physical-parameters">
        <div class="parameter">
          <h4>原子质量</h4>
          <p>m = 4.003 u ≈ 6.65 × 10⁻²⁷ kg</p>
        </div>
        <div class="parameter">
          <h4>密度</h4>
          <p>ρ = 0.145 g/cm³ (液态，T = 0)</p>
          <p>n = 2.18 × 10²² cm⁻³</p>
        </div>
        <div class="parameter">
          <h4>超流转变温度</h4>
          <p>Tλ = 2.17 K</p>
        </div>
        <div class="parameter">
          <h4>相互作用强度</h4>
          <p>散射长度：a ≈ 100 a₀</p>
          <p>相互作用参数：na³ ≈ 0.01</p>
        </div>
      </div>
      
      <h3>相图和相变</h3>
      <div class="phase-diagram">
        <h4>λ相变</h4>
        <p>在Tλ = 2.17 K发生连续相变：</p>
        <ul>
          <li><strong>He I相：</strong>正常液体（T > Tλ）</li>
          <li><strong>He II相：</strong>超流体（T < Tλ）</li>
        </ul>
        
        <h4>相变特征</h4>
        <div class="phase-characteristics">
          <div class="characteristic">
            <h5>比热异常</h5>
            <p>λ形状的比热峰</p>
          </div>
          <div class="characteristic">
            <h5>密度连续</h5>
            <p>密度在相变点连续</p>
          </div>
          <div class="characteristic">
            <h5>粘滞性消失</h5>
            <p>超流成分无粘滞</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 弱相互作用玻色子理论 -->
    <div class="content-card">
      <h2>弱相互作用玻色子理论</h2>
      
      <h3>Hamiltonian</h3>
      <p>系统的总Hamiltonian：</p>
      <div class="formula-box">
        Ĥ = Ĥ₀ + Ĥᵢₙₜ
      </div>
      
      <p>其中：</p>
      <div class="formula-box">
        Ĥ₀ = ∫ ψ̂†(r) [-ℏ²∇²/(2m)] ψ̂(r) d³r
      </div>
      <div class="formula-box">
        Ĥᵢₙₜ = (1/2) ∫∫ ψ̂†(r)ψ̂†(r')V(r-r')ψ̂(r')ψ̂(r) d³r d³r'
      </div>
      
      <h3>接触相互作用近似</h3>
      <p>对于低能散射，相互作用可以近似为：</p>
      <div class="formula-box">
        V(r-r') = g δ(r-r')
      </div>
      <p>其中耦合常数：</p>
      <div class="formula-box">
        g = 4πℏ²a/m
      </div>
      
      <h3>Bogoliubov变换</h3>
      <p>引入准粒子算符：</p>
      <div class="formula-box">
        α̂ₖ = uₖâₖ + vₖâ†₋ₖ
      </div>
      <div class="formula-box">
        β̂†ₖ = vₖâₖ + uₖâ†₋ₖ
      </div>
      
      <p>Bogoliubov系数满足：</p>
      <div class="formula-box">
        uₖ² - vₖ² = 1
      </div>
      <div class="formula-box">
        uₖ = (1/2)[(εₖ/Eₖ + 1)]^(1/2)
      </div>
      <div class="formula-box">
        vₖ = (1/2)[(εₖ/Eₖ - 1)]^(1/2)
      </div>
    </div>

    <!-- Bogoliubov谱 -->
    <div class="content-card">
      <h2>Bogoliubov激发谱</h2>
      
      <h3>色散关系</h3>
      <p>准粒子激发能量：</p>
      <div class="formula-box">
        Eₖ = √[εₖ(εₖ + 2gn₀)]
      </div>
      <p>其中εₖ = ℏ²k²/(2m)是自由粒子能量</p>
      
      <h3>不同动量区域的行为</h3>
      <div class="momentum-regions">
        <div class="region">
          <h4>长波长极限 (k → 0)</h4>
          <p>声子模式：</p>
          <div class="formula-box">
            Eₖ ≈ ℏck = ℏk√(gn₀/m)
          </div>
          <p>声速：c = √(gn₀/m)</p>
        </div>
        
        <div class="region">
          <h4>短波长极限 (k → ∞)</h4>
          <p>自由粒子行为：</p>
          <div class="formula-box">
            Eₖ ≈ εₖ + gn₀ = ℏ²k²/(2m) + gn₀
          </div>
        </div>
        
        <div class="region">
          <h4>中间区域</h4>
          <p>从线性到二次的平滑过渡</p>
          <p>特征动量：k₀ = √(2mgn₀)/ℏ</p>
        </div>
      </div>
      
      <h3>谱的物理意义</h3>
      <div class="spectrum-physics">
        <div class="physics-aspect">
          <h4>能隙消失</h4>
          <p>Eₖ₌₀ = 0，无能隙激发</p>
        </div>
        <div class="physics-aspect">
          <h4>Goldstone模式</h4>
          <p>U(1)对称性破缺的结果</p>
        </div>
        <div class="physics-aspect">
          <h4>声子激发</h4>
          <p>长波长集体密度振荡</p>
        </div>
      </div>
    </div>

    <!-- 基态性质 -->
    <div class="content-card">
      <h2>基态性质</h2>
      
      <h3>基态能量</h3>
      <p>Lee-Huang-Yang修正：</p>
      <div class="formula-box">
        E₀/N = (gn/2)[1 + (128/15π)√(na³)]
      </div>
      
      <div class="energy-components">
        <div class="component">
          <h4>平均场项</h4>
          <p>E₀^(MF) = (gn²N)/2</p>
          <p>主导贡献</p>
        </div>
        <div class="component">
          <h4>量子修正</h4>
          <p>ΔE₀ = (gn²N)(128/15π)√(na³)</p>
          <p>小修正项</p>
        </div>
      </div>
      
      <h3>凝聚分数</h3>
      <p>零温下的凝聚分数：</p>
      <div class="formula-box">
        n₀/n = 1 - (8/3π)√(na³)
      </div>
      
      <p>对于液氦-4：</p>
      <ul>
        <li>na³ ≈ 0.01</li>
        <li>n₀/n ≈ 0.92</li>
        <li>约8%的粒子被量子涨落激发</li>
      </ul>
      
      <h3>关联函数</h3>
      <p>一体密度矩阵：</p>
      <div class="formula-box">
        ρ₁(r,r') = ⟨ψ̂†(r)ψ̂(r')⟩
      </div>
      
      <p>长程行为：</p>
      <div class="formula-box">
        ρ₁(r,r') → n₀ (|r-r'| → ∞)
      </div>
    </div>

    <!-- 有限温度理论 -->
    <div class="content-card">
      <h2>有限温度理论</h2>
      
      <h3>准粒子分布</h3>
      <p>Bogoliubov准粒子遵循玻色分布：</p>
      <div class="formula-box">
        ⟨α̂†ₖαₖ⟩ = 1/(e^(βEₖ) - 1)
      </div>
      
      <h3>激发态密度</h3>
      <p>热激发的粒子数密度：</p>
      <div class="formula-box">
        nₑₓ(T) = ∫ (d³k/(2π)³) [vₖ² + (uₖ² + vₖ²)/(e^(βEₖ) - 1)]
      </div>
      
      <h3>凝聚分数的温度依赖</h3>
      <p>凝聚分数随温度的变化：</p>
      <div class="formula-box">
        n₀(T) = n - nₑₓ(T)
      </div>
      
      <div class="temperature-behavior">
        <div class="temp-regime">
          <h4>低温区域 (T << Tλ)</h4>
          <p>n₀(T)/n ≈ n₀(0)/n - AT³</p>
          <p>T³行为来自声子激发</p>
        </div>
        <div class="temp-regime">
          <h4>临界区域 (T → Tλ)</h4>
          <p>n₀(T) → 0</p>
          <p>连续相变</p>
        </div>
      </div>
    </div>

    <!-- 超流性质 -->
    <div class="content-card">
      <h2>超流性质</h2>
      
      <h3>Landau判据</h3>
      <p>超流稳定性条件：</p>
      <div class="formula-box">
        v < min(Eₖ/ℏk) = c
      </div>
      
      <div class="landau-criterion">
        <div class="criterion-aspect">
          <h4>临界速度</h4>
          <p>vᶜ = c = √(gn₀/m)</p>
        </div>
        <div class="criterion-aspect">
          <h4>物理意义</h4>
          <p>低于临界速度时无法激发准粒子</p>
        </div>
        <div class="criterion-aspect">
          <h4>实验验证</h4>
          <p>观测到的临界速度与理论一致</p>
        </div>
      </div>
      
      <h3>双流体模型</h3>
      <p>Tisza-Landau双流体描述：</p>
      <div class="two-fluid-model">
        <div class="fluid-component">
          <h4>超流成分</h4>
          <p><strong>密度：</strong>ρₛ(T)</p>
          <p><strong>速度：</strong>vₛ</p>
          <p><strong>性质：</strong>无粘滞，无熵</p>
          <p><strong>运动：</strong>势流，∇ × vₛ = 0</p>
        </div>
        <div class="fluid-component">
          <h4>正常成分</h4>
          <p><strong>密度：</strong>ρₙ(T) = ρ - ρₛ(T)</p>
          <p><strong>速度：</strong>vₙ</p>
          <p><strong>性质：</strong>有粘滞，携带熵</p>
          <p><strong>运动：</strong>可有涡旋</p>
        </div>
      </div>
      
      <h3>超流密度</h3>
      <p>超流密度的温度依赖：</p>
      <div class="formula-box">
        ρₛ(T)/ρ = n₀(T)/n + ∫ (d³k/(2π)³) (ℏ²k²/2mEₖ²) ∂f(Eₖ)/∂T
      </div>
      
      <div class="superfluid-density">
        <div class="density-behavior">
          <h4>低温行为</h4>
          <p>ρₛ(T)/ρ ≈ 1 - BT⁴</p>
        </div>
        <div class="density-behavior">
          <h4>高温行为</h4>
          <p>ρₛ(T) → 0 当 T → Tλ</p>
        </div>
      </div>
    </div>

    <!-- 集体激发模式 -->
    <div class="content-card">
      <h2>集体激发模式</h2>
      
      <h3>密度波激发</h3>
      <p>密度涨落的色散关系：</p>
      <div class="formula-box">
        ω²(k) = (ℏk²/2m)[ℏk²/2m + 2gn₀]
      </div>
      
      <h3>不同波长的激发</h3>
      <div class="excitation-modes">
        <div class="mode">
          <h4>第一声 (First Sound)</h4>
          <p><strong>性质：</strong>密度振荡</p>
          <p><strong>色散：</strong>ω = ck (线性)</p>
          <p><strong>速度：</strong>c₁ = √(gn₀/m)</p>
          <p><strong>观测：</strong>声学测量</p>
        </div>
        
        <div class="mode">
          <h4>第二声 (Second Sound)</h4>
          <p><strong>性质：</strong>温度/熵振荡</p>
          <p><strong>色散：</strong>ω = c₂k</p>
          <p><strong>速度：</strong>c₂ = c₁√(ρₛ/ρₙ)</p>
          <p><strong>观测：</strong>热脉冲传播</p>
        </div>
        
        <div class="mode">
          <h4>第三声 (Third Sound)</h4>
          <p><strong>性质：</strong>薄膜中的表面波</p>
          <p><strong>色散：</strong>ω = c₃k^(3/2)</p>
          <p><strong>条件：</strong>受限几何</p>
          <p><strong>观测：</strong>薄膜实验</p>
        </div>
      </div>
      
      <h3>涡旋激发</h3>
      <div class="vortex-excitations">
        <h4>量子涡旋</h4>
        <p>环流量子化：</p>
        <div class="formula-box">
          Γ = ∮ vₛ·dl = nℏ/m (n = 0, ±1, ±2, ...)
        </div>
        
        <h4>涡旋性质</h4>
        <ul>
          <li>涡旋核心尺寸：ξ ~ ℏ/√(mgn₀)</li>
          <li>涡旋能量：E ~ (ρₛℏ²/2m)ln(R/ξ)</li>
          <li>涡旋相互作用：对数势</li>
        </ul>
      </div>
    </div>

    <!-- 实验观测 -->
    <div class="content-card">
      <h2>实验观测</h2>
      
      <h3>超流现象</h3>
      <div class="superfluid-phenomena">
        <div class="phenomenon">
          <h4>无阻力流动</h4>
          <p><strong>观测：</strong>通过细管的无阻力流动</p>
          <p><strong>条件：</strong>v < vᶜ</p>
          <p><strong>机制：</strong>无法激发准粒子</p>
        </div>
        
        <div class="phenomenon">
          <h4>喷泉效应</h4>
          <p><strong>观测：</strong>加热产生压力差</p>
          <p><strong>原理：</strong>超流成分不携带熵</p>
          <p><strong>应用：</strong>超流泵</p>
        </div>
        
        <div class="phenomenon">
          <h4>持续流</h4>
          <p><strong>观测：</strong>环形容器中的持续流动</p>
          <p><strong>原理：</strong>量子化涡旋的稳定性</p>
          <p><strong>寿命：</strong>理论上无限长</p>
        </div>
      </div>
      
      <h3>热力学测量</h3>
      <div class="thermodynamic-measurements">
        <div class="measurement">
          <h4>比热</h4>
          <p><strong>特征：</strong>λ形状的峰</p>
          <p><strong>位置：</strong>Tλ = 2.17 K</p>
          <p><strong>理论：</strong>临界涨落</p>
        </div>
        
        <div class="measurement">
          <h4>超流密度</h4>
          <p><strong>方法：</strong>扭摆实验</p>
          <p><strong>结果：</strong>ρₛ(T)的温度依赖</p>
          <p><strong>精度：</strong>高精度测量</p>
        </div>
        
        <div class="measurement">
          <h4>声速测量</h4>
          <p><strong>第一声：</strong>c₁ ≈ 240 m/s</p>
          <p><strong>第二声：</strong>c₂ ≈ 20 m/s (T ~ 1 K)</p>
          <p><strong>理论符合：</strong>很好的一致性</p>
        </div>
      </div>
    </div>

    <!-- 理论的局限性和扩展 -->
    <div class="content-card">
      <h2>理论的局限性和扩展</h2>
      
      <h3>Bogoliubov理论的局限</h3>
      <div class="theory-limitations">
        <div class="limitation">
          <h4>弱相互作用假设</h4>
          <p>na³ << 1的要求</p>
          <p>液氦-4中na³ ~ 0.01，接近边界</p>
        </div>
        <div class="limitation">
          <h4>均匀系统假设</h4>
          <p>忽略了表面效应</p>
          <p>实际系统有边界</p>
        </div>
        <div class="limitation">
          <h4>低激发假设</h4>
          <p>只考虑低能激发</p>
          <p>高温下失效</p>
        </div>
      </div>
      
      <h3>理论扩展</h3>
      <div class="theory-extensions">
        <div class="extension">
          <h4>高阶修正</h4>
          <p><strong>内容：</strong>包含更高阶相互作用项</p>
          <p><strong>方法：</strong>微扰论展开</p>
          <p><strong>结果：</strong>改善定量预测</p>
        </div>
        
        <div class="extension">
          <h4>有限尺寸效应</h4>
          <p><strong>内容：</strong>考虑边界条件</p>
          <p><strong>方法：</strong>边界积分方程</p>
          <p><strong>应用：</strong>薄膜和纳米结构</p>
        </div>
        
        <div class="extension">
          <h4>强相互作用理论</h4>
          <p><strong>内容：</strong>非微扰方法</p>
          <p><strong>方法：</strong>变分蒙特卡罗</p>
          <p><strong>目标：</strong>精确数值解</p>
        </div>
      </div>
    </div>

    <!-- 与其他系统的比较 -->
    <div class="content-card">
      <h2>与其他系统的比较</h2>
      
      <h3>冷原子气体 vs 液氦-4</h3>
      <div class="system-comparison">
        <div class="comparison-aspect">
          <h4>相互作用强度</h4>
          <p><strong>冷原子：</strong>na³ ~ 10⁻³ (更弱)</p>
          <p><strong>液氦-4：</strong>na³ ~ 10⁻² (较强)</p>
        </div>
        
        <div class="comparison-aspect">
          <h4>密度</h4>
          <p><strong>冷原子：</strong>n ~ 10¹⁴ cm⁻³</p>
          <p><strong>液氦-4：</strong>n ~ 10²² cm⁻³</p>
        </div>
        
        <div class="comparison-aspect">
          <h4>温度范围</h4>
          <p><strong>冷原子：</strong>nK - μK</p>
          <p><strong>液氦-4：</strong>mK - K</p>
        </div>
        
        <div class="comparison-aspect">
          <h4>可控性</h4>
          <p><strong>冷原子：</strong>高度可控</p>
          <p><strong>液氦-4：</strong>固定参数</p>
        </div>
      </div>
      
      <h3>理论适用性</h3>
      <div class="theory-applicability">
        <div class="applicability">
          <h4>Bogoliubov理论</h4>
          <p><strong>最适用：</strong>稀薄冷原子气体</p>
          <p><strong>部分适用：</strong>液氦-4</p>
          <p><strong>不适用：</strong>强相互作用系统</p>
        </div>
        
        <div class="applicability">
          <h4>现象学理论</h4>
          <p><strong>双流体模型：</strong>广泛适用</p>
          <p><strong>Landau理论：</strong>普遍有效</p>
          <p><strong>Ginzburg-Landau：</strong>临界区域</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        弱相互作用玻色子体系的理论为理解液氦-4的超流性质提供了重要的理论框架。
        Bogoliubov理论虽然基于弱相互作用假设，但在定性和半定量层面上
        成功解释了液氦-4的许多重要性质，包括激发谱、基态能量、
        凝聚分数和超流密度等。
      </p>
      
      <div class="key-insights">
        <div class="insight">
          <h4>理论成功</h4>
          <p>正确预测了声子激发谱和Landau临界速度</p>
        </div>
        <div class="insight">
          <h4>量子效应</h4>
          <p>揭示了量子涨落对基态性质的重要影响</p>
        </div>
        <div class="insight">
          <h4>相变机制</h4>
          <p>提供了理解BEC相变的微观图像</p>
        </div>
        <div class="insight">
          <h4>实验指导</h4>
          <p>为实验设计和数据解释提供了理论基础</p>
        </div>
      </div>
      
      <p>
        这一理论不仅加深了我们对液氦-4超流性质的理解，
        也为研究其他玻色子系统（如冷原子气体、激子极化子等）
        奠定了重要的理论基础。随着实验技术的发展，
        这一理论框架将继续在量子多体物理研究中发挥重要作用。
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
  border-bottom: 3px solid #e74c3c;
}

.content-card {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #e74c3c;
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
  color: #e74c3c;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-card h5 {
  color: #c0392b;
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

.physical-parameters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.parameter {
  background: #fdf2e9;
  border: 1px solid #e67e22;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.parameter h4 {
  color: #d35400;
  margin-bottom: 1rem;
}

.phase-diagram {
  margin: 1rem 0;
}

.phase-characteristics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.characteristic {
  background: #e8f6f3;
  border: 1px solid #16a085;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.characteristic h5 {
  color: #138d75;
  margin-bottom: 0.5rem;
}

.momentum-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.region {
  background: #eaf2f8;
  border: 1px solid #3498db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.region h4 {
  color: #2980b9;
  margin-bottom: 1rem;
}

.spectrum-physics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.physics-aspect {
  background: #f4ecf7;
  border: 1px solid #8e44ad;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.physics-aspect h4 {
  color: #7d3c98;
  margin-bottom: 1rem;
}

.energy-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.component {
  background: #fef9e7;
  border: 1px solid #f39c12;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.component h4 {
  color: #e67e22;
  margin-bottom: 1rem;
}

.temperature-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.temp-regime {
  background: #e8f8f5;
  border: 1px solid #27ae60;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.temp-regime h4 {
  color: #229954;
  margin-bottom: 1rem;
}

.landau-criterion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.criterion-aspect {
  background: #fdf2e9;
  border: 1px solid #e67e22;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.criterion-aspect h4 {
  color: #d35400;
  margin-bottom: 1rem;
}

.two-fluid-model {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.fluid-component {
  background: #e1f5fe;
  border: 1px solid #03a9f4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.fluid-component h4 {
  color: #0288d1;
  margin-bottom: 1rem;
}

.superfluid-density {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.density-behavior {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.density-behavior h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.excitation-modes {
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

.vortex-excitations {
  background: #fff3e0;
  border: 1px solid #ff9800;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.vortex-excitations h4 {
  color: #f57c00;
  margin-bottom: 1rem;
}

.superfluid-phenomena {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.phenomenon {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.phenomenon h4 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.thermodynamic-measurements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.measurement {
  background: #f0f4f8;
  border: 1px solid #607d8b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.measurement h4 {
  color: #455a64;
  margin-bottom: 1rem;
}

.theory-limitations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.limitation {
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.limitation h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.theory-extensions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.extension {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.extension h4 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.system-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.comparison-aspect {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.comparison-aspect h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.theory-applicability {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.applicability {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.applicability h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.key-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.insight {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}

.insight h4 {
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
  
  .physical-parameters,
  .phase-characteristics,
  .momentum-regions,
  .spectrum-physics,
  .energy-components,
  .temperature-behavior,
  .landau-criterion,
  .two-fluid-model,
  .superfluid-density,
  .excitation-modes,
  .superfluid-phenomena,
  .thermodynamic-measurements,
  .theory-limitations,
  .theory-extensions,
  .system-comparison,
  .theory-applicability,
  .key-insights {
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