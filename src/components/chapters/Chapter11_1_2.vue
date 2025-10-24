<template>
  <div class="chapter-content">
    <h1 class="chapter-title">11.1.2 短程相互作用下的模型</h1>
    
    <!-- 引言 -->
    <div class="content-card">
      <h2>引言</h2>
      <p>
        在实际的物理系统中，粒子间的相互作用是不可避免的。即使是最稀薄的气体，
        粒子间的碰撞和相互作用也会对系统的性质产生重要影响。对于玻色气体而言，
        弱的短程相互作用不仅不会破坏玻色-爱因斯坦凝聚，反而会使其更加稳定，
        并带来许多新的物理现象。本节将系统介绍短程相互作用下的玻色气体模型。
      </p>
    </div>

    <!-- 相互作用哈密顿量 -->
    <div class="content-card">
      <h2>相互作用哈密顿量</h2>
      
      <h3>总哈密顿量</h3>
      <p>包含短程相互作用的玻色气体哈密顿量为：</p>
      <div class="formula-box">
        Ĥ = Ĥ₀ + Ĥᵢₙₜ
      </div>
      <p>其中：</p>
      <ul>
        <li>Ĥ₀：单粒子哈密顿量</li>
        <li>Ĥᵢₙₜ：相互作用哈密顿量</li>
      </ul>
      
      <h3>单粒子项</h3>
      <div class="formula-box">
        Ĥ₀ = ∫ ψ̂†(r) [-ℏ²∇²/(2m) + V(r)] ψ̂(r) d³r
      </div>
      
      <h3>相互作用项</h3>
      <div class="formula-box">
        Ĥᵢₙₜ = (1/2) ∫∫ ψ̂†(r₁)ψ̂†(r₂)V(r₁-r₂)ψ̂(r₂)ψ̂(r₁) d³r₁d³r₂
      </div>
      
      <div class="interaction-types">
        <div class="interaction">
          <h4>接触相互作用</h4>
          <p>对于短程相互作用，可以近似为：</p>
          <div class="formula-box">
            V(r₁-r₂) = g δ(r₁-r₂)
          </div>
          <p>其中 g = 4πℏ²a/m，a 为散射长度</p>
        </div>
        
        <div class="interaction">
          <h4>散射长度</h4>
          <p>低能散射的特征长度：</p>
          <ul>
            <li>a > 0：排斥相互作用</li>
            <li>a < 0：吸引相互作用</li>
            <li>|a| << n⁻¹/³：弱相互作用条件</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bogoliubov理论 -->
    <div class="content-card">
      <h2>Bogoliubov理论</h2>
      
      <h3>基本思想</h3>
      <p>Bogoliubov理论是处理弱相互作用玻色气体的经典方法：</p>
      <div class="bogoliubov-ideas">
        <div class="idea">
          <h4>宏观占据近似</h4>
          <p>假设大部分粒子占据基态：N₀ ≈ N</p>
        </div>
        <div class="idea">
          <h4>算符替换</h4>
          <p>将基态算符用c数替换：â₀ → √N₀</p>
        </div>
        <div class="idea">
          <h4>微扰展开</h4>
          <p>对激发态进行微扰处理</p>
        </div>
      </div>
      
      <h3>有效哈密顿量</h3>
      <p>在Bogoliubov近似下，有效哈密顿量为：</p>
      <div class="formula-box">
        Ĥₑff = ∑ₖ≠₀ [εₖ + gn₀] âₖ†âₖ + (gn₀/2) ∑ₖ≠₀ (âₖ†â₋ₖ† + âₖâ₋ₖ)
      </div>
      <p>其中：</p>
      <ul>
        <li>εₖ = ℏ²k²/(2m)：自由粒子能量</li>
        <li>n₀ = N₀/V：凝聚体密度</li>
        <li>非对角项描述粒子对的产生和湮灭</li>
      </ul>
      
      <h3>Bogoliubov变换</h3>
      <p>引入新的准粒子算符：</p>
      <div class="formula-box">
        αₖ = uₖâₖ + vₖâ₋ₖ†
      </div>
      <div class="formula-box">
        αₖ† = uₖâₖ† + vₖâ₋ₖ
      </div>
      <p>其中系数满足：</p>
      <div class="formula-box">
        uₖ² - vₖ² = 1
      </div>
    </div>

    <!-- 激发谱和声子模式 -->
    <div class="content-card">
      <h2>激发谱和声子模式</h2>
      
      <h3>Bogoliubov激发谱</h3>
      <p>对角化后得到准粒子激发谱：</p>
      <div class="formula-box">
        Eₖ = √[εₖ(εₖ + 2gn₀)]
      </div>
      
      <h3>不同动量区域的行为</h3>
      <div class="momentum-regions">
        <div class="region">
          <h4>长波长极限 (k → 0)</h4>
          <div class="formula-box">
            Eₖ ≈ ℏck = ℏk√(gn₀/m)
          </div>
          <p><strong>物理意义：</strong>线性色散关系，类似声子</p>
          <p><strong>声速：</strong>c = √(gn₀/m)</p>
        </div>
        
        <div class="region">
          <h4>短波长极限 (k → ∞)</h4>
          <div class="formula-box">
            Eₖ ≈ εₖ + gn₀ = ℏ²k²/(2m) + gn₀
          </div>
          <p><strong>物理意义：</strong>自由粒子行为加化学势移动</p>
        </div>
        
        <div class="region">
          <h4>交叉区域</h4>
          <p><strong>特征动量：</strong>k* ~ √(mgn₀)/ℏ</p>
          <p><strong>愈合长度：</strong>ξ = ℏ/√(mgn₀)</p>
        </div>
      </div>
      
      <h3>Landau判据和超流性</h3>
      <div class="landau-criterion">
        <h4>Landau临界速度</h4>
        <p>超流的临界速度由激发谱的最小值确定：</p>
        <div class="formula-box">
          vₒ = min(Eₖ/ℏk) = c
        </div>
        
        <h4>物理意义</h4>
        <ul>
          <li>当流速 v < vₒ 时，系统无法产生激发</li>
          <li>保证了超流的稳定性</li>
          <li>线性色散关系是超流性的关键</li>
        </ul>
      </div>
    </div>

    <!-- 基态性质 -->
    <div class="content-card">
      <h2>基态性质</h2>
      
      <h3>基态能量</h3>
      <p>弱相互作用玻色气体的基态能量为：</p>
      <div class="formula-box">
        E₀/N = (gn/2)[1 + (128/15π)√(na³)]
      </div>
      <p>其中第二项是量子修正（Lee-Huang-Yang修正）</p>
      
      <h3>凝聚分数</h3>
      <p>相互作用导致凝聚分数的减少：</p>
      <div class="formula-box">
        N₀/N = 1 - (8/3)√(na³/π)
      </div>
      
      <h3>化学势</h3>
      <div class="formula-box">
        μ = gn[1 + (32/3)√(na³/π)]
      </div>
      
      <div class="ground-state-properties">
        <div class="property">
          <h4>压缩性</h4>
          <p>等温压缩性：κ = 1/(mc²n)</p>
        </div>
        <div class="property">
          <h4>相关函数</h4>
          <p>一体密度矩阵表现出非对角长程序</p>
        </div>
        <div class="property">
          <h4>量子耗尽</h4>
          <p>相互作用导致基态占据数的减少</p>
        </div>
      </div>
    </div>

    <!-- 有限温度性质 -->
    <div class="content-card">
      <h2>有限温度性质</h2>
      
      <h3>准粒子分布</h3>
      <p>Bogoliubov准粒子遵循玻色分布：</p>
      <div class="formula-box">
        ⟨αₖ†αₖ⟩ = 1/(e^(βEₖ) - 1)
      </div>
      
      <h3>激发态密度</h3>
      <p>激发态的粒子数密度：</p>
      <div class="formula-box">
        nₑₓ = ∫ (dk/(2π)³) vₖ²[1 + 2⟨αₖ†αₖ⟩]
      </div>
      
      <h3>临界温度的修正</h3>
      <div class="temperature-corrections">
        <div class="correction">
          <h4>相互作用修正</h4>
          <p>弱相互作用对临界温度的修正：</p>
          <div class="formula-box">
            Tc/Tc⁰ ≈ 1 + 1.3(na³)^(1/6)
          </div>
        </div>
        
        <div class="correction">
          <h4>物理机制</h4>
          <ul>
            <li>排斥相互作用提高临界温度</li>
            <li>量子耗尽效应</li>
            <li>激发谱的修正</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 集体激发模式 -->
    <div class="content-card">
      <h2>集体激发模式</h2>
      
      <h3>密度涨落</h3>
      <p>系统的密度涨落对应于声子模式：</p>
      <div class="formula-box">
        δn(r,t) = ∑ₖ √(n₀ℏk²/2mEₖ) [αₖe^(ik·r-iEₖt/ℏ) + h.c.]
      </div>
      
      <h3>相位涨落</h3>
      <p>凝聚体相位的涨落：</p>
      <div class="formula-box">
        δφ(r,t) = i∑ₖ √(ℏ/2mn₀Eₖ) [αₖe^(ik·r-iEₖt/ℏ) - h.c.]
      </div>
      
      <div class="collective-modes">
        <div class="mode">
          <h4>声子模式</h4>
          <p><strong>色散关系：</strong>ω = ck</p>
          <p><strong>物理性质：</strong>密度和相位的耦合振荡</p>
          <p><strong>实验观测：</strong>Bragg散射</p>
        </div>
        
        <div class="mode">
          <h4>单粒子激发</h4>
          <p><strong>色散关系：</strong>Eₖ = √[εₖ(εₖ + 2gn₀)]</p>
          <p><strong>物理性质：</strong>准粒子激发</p>
          <p><strong>实验观测：</strong>射频谱学</p>
        </div>
      </div>
    </div>

    <!-- 稳定性分析 -->
    <div class="content-card">
      <h2>稳定性分析</h2>
      
      <h3>动力学稳定性</h3>
      <p>Bogoliubov激发谱的实数性保证了动力学稳定性：</p>
      <div class="formula-box">
        Eₖ² = εₖ(εₖ + 2gn₀) ≥ 0
      </div>
      <p>要求：gn₀ ≥ 0（排斥相互作用）</p>
      
      <h3>热力学稳定性</h3>
      <div class="stability-conditions">
        <div class="condition">
          <h4>压缩性条件</h4>
          <p>要求压缩性为正：∂μ/∂n > 0</p>
        </div>
        <div class="condition">
          <h4>相分离</h4>
          <p>强吸引相互作用可能导致相分离</p>
        </div>
        <div class="condition">
          <h4>塌缩不稳定性</h4>
          <p>三维系统中吸引相互作用的危险</p>
        </div>
      </div>
      
      <h3>Feshbach共振</h3>
      <div class="feshbach-resonance">
        <h4>基本原理</h4>
        <p>利用磁场调节散射长度：</p>
        <div class="formula-box">
          a(B) = abg[1 - Δ/(B - B₀)]
        </div>
        
        <h4>应用</h4>
        <ul>
          <li>精确控制相互作用强度</li>
          <li>研究BEC-BCS渡越</li>
          <li>制备分子玻色气体</li>
        </ul>
      </div>
    </div>

    <!-- 实验观测 -->
    <div class="content-card">
      <h2>实验观测</h2>
      
      <h3>激发谱测量</h3>
      <div class="experimental-methods">
        <div class="method">
          <h4>Bragg散射</h4>
          <p><strong>原理：</strong>两束激光的拍频激发集体模式</p>
          <p><strong>测量：</strong>动量转移和能量转移</p>
          <p><strong>结果：</strong>验证线性声子色散关系</p>
        </div>
        
        <div class="method">
          <h4>射频谱学</h4>
          <p><strong>原理：</strong>射频场驱动自旋翻转</p>
          <p><strong>测量：</strong>单粒子激发谱</p>
          <p><strong>结果：</strong>观测到能隙和化学势</p>
        </div>
        
        <div class="method">
          <h4>调制谱学</h4>
          <p><strong>原理：</strong>周期性调制相互作用或势阱</p>
          <p><strong>测量：</strong>集体振荡频率</p>
          <p><strong>结果：</strong>确定声速和压缩性</p>
        </div>
      </div>
      
      <h3>关键实验结果</h3>
      <div class="experimental-results">
        <div class="result">
          <h4>声速测量</h4>
          <p>精确验证了 c = √(gn₀/m) 的理论预言</p>
        </div>
        <div class="result">
          <h4>量子耗尽</h4>
          <p>观测到相互作用导致的凝聚分数减少</p>
        </div>
        <div class="result">
          <h4>Lee-Huang-Yang修正</h4>
          <p>在强相互作用区域验证了量子修正</p>
        </div>
      </div>
    </div>

    <!-- 理论扩展 -->
    <div class="content-card">
      <h2>理论扩展</h2>
      
      <h3>超越Bogoliubov理论</h3>
      <div class="beyond-bogoliubov">
        <div class="extension">
          <h4>高阶修正</h4>
          <p>包含更高阶的相互作用项</p>
          <ul>
            <li>Beliaev阻尼</li>
            <li>Landau阻尼</li>
            <li>非线性效应</li>
          </ul>
        </div>
        
        <div class="extension">
          <h4>有限温度理论</h4>
          <p>Popov近似和Hartree-Fock-Bogoliubov理论</p>
          <ul>
            <li>热激发的自洽处理</li>
            <li>相变附近的临界行为</li>
            <li>涨落效应</li>
          </ul>
        </div>
        
        <div class="extension">
          <h4>强相互作用区域</h4>
          <p>Tonks-Girardeau气体和费米化</p>
          <ul>
            <li>一维强相互作用极限</li>
            <li>量子蒙特卡罗方法</li>
            <li>精确可解模型</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 应用和展望 -->
    <div class="content-card">
      <h2>应用和展望</h2>
      
      <h3>量子模拟</h3>
      <div class="quantum-simulation">
        <div class="application">
          <h4>多体物理</h4>
          <p>利用可控的玻色气体研究复杂量子多体系统</p>
        </div>
        <div class="application">
          <h4>相变物理</h4>
          <p>研究量子相变和临界现象</p>
        </div>
        <div class="application">
          <h4>非平衡动力学</h4>
          <p>探索量子淬火和热化过程</p>
        </div>
      </div>
      
      <h3>技术应用</h3>
      <div class="technological-applications">
        <div class="tech">
          <h4>精密测量</h4>
          <p>原子干涉仪和重力测量</p>
        </div>
        <div class="tech">
          <h4>量子传感</h4>
          <p>磁场和电场的高精度探测</p>
        </div>
        <div class="tech">
          <h4>量子信息</h4>
          <p>量子存储和量子计算</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="content-card">
      <h2>总结</h2>
      <p>
        短程相互作用下的玻色气体模型极大地丰富了我们对玻色-爱因斯坦凝聚的理解。
        Bogoliubov理论成功地描述了弱相互作用区域的物理性质，预言了线性的声子激发谱
        和超流性质。这一理论不仅在冷原子实验中得到了精确验证，更为研究更复杂的
        量子多体系统提供了重要的理论基础。
      </p>
      
      <div class="key-insights">
        <div class="insight">
          <h4>理论成就</h4>
          <p>Bogoliubov理论的建立和发展</p>
        </div>
        <div class="insight">
          <h4>物理图像</h4>
          <p>声子激发和超流性的微观机制</p>
        </div>
        <div class="insight">
          <h4>实验验证</h4>
          <p>冷原子实验的精确测量</p>
        </div>
        <div class="insight">
          <h4>应用前景</h4>
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

.interaction-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.interaction {
  background: #fdf2f2;
  border: 1px solid #e74c3c;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.interaction h4 {
  color: #c0392b;
  margin-bottom: 1rem;
}

.bogoliubov-ideas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.idea {
  background: #f0f8ff;
  border: 1px solid #3498db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.idea h4 {
  color: #2980b9;
  margin-bottom: 1rem;
}

.momentum-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.region {
  background: #f9f9f9;
  border: 1px solid #95a5a6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.region h4 {
  color: #34495e;
  margin-bottom: 1rem;
}

.landau-criterion {
  background: #e8f5e8;
  border: 1px solid #27ae60;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.landau-criterion h4 {
  color: #27ae60;
  margin-bottom: 1rem;
}

.ground-state-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.property {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.property h4 {
  color: #856404;
  margin-bottom: 1rem;
}

.temperature-corrections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.correction {
  background: #f3e5f5;
  border: 1px solid #9b59b6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.correction h4 {
  color: #8e44ad;
  margin-bottom: 1rem;
}

.collective-modes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.mode {
  background: #e1f5fe;
  border: 1px solid #00bcd4;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.mode h4 {
  color: #00838f;
  margin-bottom: 1rem;
}

.stability-conditions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.condition {
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.condition h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.feshbach-resonance {
  background: #f1f8e9;
  border: 1px solid #8bc34a;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
}

.feshbach-resonance h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.experimental-methods {
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

.experimental-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.result {
  background: #e0f2f1;
  border: 1px solid #009688;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.result h4 {
  color: #00695c;
  margin-bottom: 1rem;
}

.beyond-bogoliubov {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.extension {
  background: #fce4ec;
  border: 1px solid #e91e63;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.extension h4 {
  color: #c2185b;
  margin-bottom: 1rem;
}

.quantum-simulation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.application {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.application h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
}

.technological-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tech {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.tech h4 {
  color: #1565c0;
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
  
  .interaction-types,
  .bogoliubov-ideas,
  .momentum-regions,
  .ground-state-properties,
  .temperature-corrections,
  .collective-modes,
  .stability-conditions,
  .experimental-methods,
  .experimental-results,
  .beyond-bogoliubov,
  .quantum-simulation,
  .technological-applications,
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