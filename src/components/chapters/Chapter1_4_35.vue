<template>
  <div class="physics-page">
    <h1>相干态 (Coherent State)</h1>
    <p class="intro">相干态是量子力学中的重要概念，它在经典极限和量子力学之间架起了桥梁。在凝聚态物理中，相干态方法为研究量子多体系统提供了强有力的工具，特别是在路径积分表述和变分方法中发挥着关键作用。</p>

    <section>
      <h2>概述与历史背景</h2>
      <p>相干态的概念最初由Erwin Schrödinger在1926年提出，后来由Roy Glauber在1963年系统发展，成为量子光学的基础。在凝聚态物理中，相干态方法由于其独特的性质而被广泛应用于各种量子多体系统的研究。</p>
      
      <h3>主要特点</h3>
      <ul>
        <li><strong>最小不确定性</strong>：相干态是最小不确定性态，满足海森堡不确定性原理的等号</li>
        <li><strong>经典对应</strong>：在经典极限下，相干态的行为最接近经典粒子</li>
        <li><strong>过完备性</strong>：相干态构成过完备基，任何量子态都可以用相干态展开</li>
        <li><strong>路径积分</strong>：为路径积分表述提供了自然的基础</li>
      </ul>
    </section>

    <section>
      <h2>玻色子相干态</h2>
      
      <h3>定义与性质</h3>
      <p>玻色子相干态定义为湮灭算符的本征态：</p>
      <div class="formula-box">
        <p><strong>本征方程：</strong></p>
        <p>a|α⟩ = α|α⟩</p>
      </div>
      
      <p>其中α是复数本征值。相干态的显式表达式为：</p>
      <div class="formula-box">
        <p>|α⟩ = e^(-|α|²/2) ∑_{n=0}^∞ (α^n/√n!) |n⟩ = e^(-|α|²/2) e^(αa†) |0⟩</p>
      </div>

      <h3>基本性质</h3>
      <ul>
        <li><strong>归一化</strong>：⟨α|α⟩ = 1</li>
        <li><strong>非正交性</strong>：⟨α|β⟩ = exp(-|α|²/2 - |β|²/2 + α*β)</li>
        <li><strong>过完备性</strong>：∫ d²α/π |α⟩⟨α| = I</li>
        <li><strong>位移算符</strong>：|α⟩ = D(α)|0⟩，其中D(α) = e^(αa† - α*a)</li>
      </ul>

      <h3>期望值与涨落</h3>
      <p>在相干态中，算符的期望值为：</p>
      <div class="formula-box">
        <p>⟨α|a|α⟩ = α</p>
        <p>⟨α|a†|α⟩ = α*</p>
        <p>⟨α|n|α⟩ = |α|²</p>
      </div>
      
      <p>位置和动量的涨落：</p>
      <div class="formula-box">
        <p>Δx = Δp = 1/√2</p>
        <p>ΔxΔp = 1/2</p>
      </div>
    </section>

    <section>
      <h2>自旋相干态</h2>
      
      <h3>SU(2)相干态</h3>
      <p>对于自旋-S系统，相干态定义为：</p>
      <div class="formula-box">
        <p>|θ,φ⟩ = e^(-iφS^z) e^(-iθS^y) |S,S⟩</p>
      </div>
      
      <p>或者用复数参数ζ = tan(θ/2)e^(iφ)表示：</p>
      <div class="formula-box">
        <p>|ζ⟩ = (1 + |ζ|²)^(-S) ∑_{m=-S}^S √(2S choose S+m) ζ^(S-m) |S,m⟩</p>
      </div>

      <h3>几何表示</h3>
      <p>自旋相干态可以用Bloch球面上的点来表示：</p>
      <ul>
        <li><strong>极坐标</strong>：(θ,φ)对应球面上的点</li>
        <li><strong>立体投影</strong>：ζ = tan(θ/2)e^(iφ)是立体投影坐标</li>
        <li><strong>经典对应</strong>：⟨S⟩指向球面上的相应点</li>
      </ul>

      <h3>过完备性关系</h3>
      <div class="formula-box">
        <p>(2S+1)/4π ∫ dΩ |θ,φ⟩⟨θ,φ| = I</p>
      </div>
      
      <p>其中dΩ = sin θ dθ dφ是立体角元素。</p>
    </section>

    <section>
      <h2>路径积分表述</h2>
      
      <h3>玻色子系统的路径积分</h3>
      <p>使用相干态，玻色子系统的路径积分表示为：</p>
      <div class="formula-box">
        <p>Z = ∫ D[α*,α] exp(∫₀^β dτ [∑ᵢ α*ᵢ(∂τ - μ)αᵢ - H[α*,α]])</p>
      </div>
      
      <p>其中：</p>
      <ul>
        <li>β = 1/(kᵦT)：逆温度</li>
        <li>μ：化学势</li>
        <li>H[α*,α]：用相干态变量表示的哈密顿量</li>
      </ul>

      <h3>自旋系统的路径积分</h3>
      <p>对于自旋系统，路径积分为：</p>
      <div class="formula-box">
        <p>Z = ∫ D[ζ*,ζ] exp(∫₀^β dτ [∑ᵢ Sᵢ ζ*ᵢ∂τζᵢ/(1+|ζᵢ|²) - H[ζ*,ζ]])</p>
      </div>

      <h3>Berry相位</h3>
      <p>在路径积分中，Berry相位自然出现：</p>
      <div class="formula-box">
        <p>γ = i∫ ⟨ζ(τ)|∂τ|ζ(τ)⟩ dτ = S∫ dΩ</p>
      </div>
      
      <p>其中积分是在参数空间的闭合路径上进行的。</p>
    </section>

    <section>
      <h2>变分方法</h2>
      
      <h3>相干态变分</h3>
      <p>使用相干态作为变分波函数：</p>
      <div class="formula-box">
        <p>|ψ⟩ = ∏ᵢ |αᵢ⟩</p>
      </div>
      
      <p>变分参数αᵢ通过最小化能量确定：</p>
      <div class="formula-box">
        <p>∂⟨H⟩/∂α*ᵢ = 0</p>
      </div>

      <h3>时间相关变分原理</h3>
      <p>对于时间演化，使用时间相关的变分原理：</p>
      <div class="formula-box">
        <p>δ∫ dt ⟨ψ(t)|i∂t - H|ψ(t)⟩ = 0</p>
      </div>
      
      <p>这导致相干态参数的运动方程：</p>
      <div class="formula-box">
        <p>i∂tαᵢ = ∂⟨H⟩/∂α*ᵢ</p>
      </div>

      <h3>Gutzwiller近似</h3>
      <p>在强关联系统中，Gutzwiller波函数可以写成：</p>
      <div class="formula-box">
        <p>|ψ⟩ = P ∏ᵢ (uᵢ + vᵢc†ᵢ↑c†ᵢ↓)|0⟩</p>
      </div>
      
      <p>其中P是投影算符，消除双占据态。</p>
    </section>

    <section>
      <h2>量子多体系统中的应用</h2>
      
      <h3>Bose-Hubbard模型</h3>
      <p>Bose-Hubbard模型的哈密顿量：</p>
      <div class="formula-box">
        <p>H = -t∑⟨i,j⟩(b†ᵢbⱼ + h.c.) + (U/2)∑ᵢnᵢ(nᵢ-1) - μ∑ᵢnᵢ</p>
      </div>
      
      <p>使用相干态方法研究超流-Mott绝缘体相变：</p>
      <ul>
        <li><strong>超流相</strong>：⟨bᵢ⟩ ≠ 0，长程相干</li>
        <li><strong>Mott绝缘体相</strong>：⟨bᵢ⟩ = 0，能隙存在</li>
        <li><strong>相变点</strong>：通过变分计算确定</li>
      </ul>

      <h3>海森堡模型</h3>
      <p>使用自旋相干态研究海森堡模型：</p>
      <div class="formula-box">
        <p>H = J∑⟨i,j⟩ Sᵢ·Sⱼ</p>
      </div>
      
      <p>在相干态表示下：</p>
      <div class="formula-box">
        <p>⟨H⟩ = JS²∑⟨i,j⟩ Re(ζ*ᵢζⱼ)/(1+|ζᵢ|²)^(1/2)(1+|ζⱼ|²)^(1/2)</p>
      </div>

      <h3>BCS理论</h3>
      <p>BCS波函数可以用相干态表示：</p>
      <div class="formula-box">
        <p>|BCS⟩ = ∏ₖ (uₖ + vₖc†ₖ↑c†₋ₖ↓)|0⟩</p>
      </div>
      
      <p>这等价于Cooper对的相干态。</p>
    </section>

    <section>
      <h2>数值方法与计算技术</h2>
      
      <h3>蒙特卡罗方法</h3>
      <p>相干态路径积分的蒙特卡罗模拟：</p>
      <ul>
        <li><strong>重要性采样</strong>：根据作用量的权重采样</li>
        <li><strong>Metropolis算法</strong>：更新相干态变量</li>
        <li><strong>符号问题</strong>：在某些情况下可以避免</li>
      </ul>

      <h3>变分蒙特卡罗</h3>
      <p>使用相干态变分波函数的VMC方法：</p>
      <ul>
        <li><strong>参数优化</strong>：优化变分参数</li>
        <li><strong>能量计算</strong>：计算基态能量</li>
        <li><strong>关联函数</strong>：计算各种物理量</li>
      </ul>

      <h3>张量网络方法</h3>
      <p>相干态在张量网络中的应用：</p>
      <ul>
        <li><strong>连续MPS</strong>：用于连续系统</li>
        <li><strong>相干态DMRG</strong>：结合DMRG方法</li>
        <li><strong>时间演化</strong>：研究动力学过程</li>
      </ul>
    </section>

    <section>
      <h2>高级主题</h2>
      
      <h3>压缩态</h3>
      <p>压缩相干态具有更小的量子涨落：</p>
      <div class="formula-box">
        <p>|α,ξ⟩ = S(ξ)D(α)|0⟩</p>
      </div>
      
      <p>其中S(ξ) = exp[(ξ*a² - ξa†²)/2]是压缩算符。</p>

      <h3>多模相干态</h3>
      <p>对于多模系统：</p>
      <div class="formula-box">
        <p>|{αᵢ}⟩ = ∏ᵢ |αᵢ⟩</p>
      </div>
      
      <p>纠缠相干态：</p>
      <div class="formula-box">
        <p>|ψ⟩ = N(|α⟩₁|β⟩₂ + |β⟩₁|α⟩₂)</p>
      </div>

      <h3>非线性相干态</h3>
      <p>对于非线性系统，定义广义相干态：</p>
      <div class="formula-box">
        <p>f(n̂)a|α⟩ = α|α⟩</p>
      </div>
      
      <p>其中f(n̂)是粒子数算符的函数。</p>
    </section>

    <section>
      <h2>实验应用与观测</h2>
      
      <h3>量子光学实验</h3>
      <p>相干态在量子光学实验中的应用：</p>
      <ul>
        <li><strong>激光</strong>：激光光场接近相干态</li>
        <li><strong>压缩光</strong>：产生和探测压缩态</li>
        <li><strong>量子干涉</strong>：Mach-Zehnder干涉仪</li>
        <li><strong>量子计量</strong>：超越标准量子极限</li>
      </ul>

      <h3>冷原子系统</h3>
      <p>在冷原子实验中的应用：</p>
      <ul>
        <li><strong>BEC</strong>：玻色-爱因斯坦凝聚态的相干性</li>
        <li><strong>光晶格</strong>：研究Bose-Hubbard模型</li>
        <li><strong>自旋压缩</strong>：产生自旋压缩态</li>
        <li><strong>量子模拟</strong>：模拟多体量子系统</li>
      </ul>

      <h3>固体系统</h3>
      <p>在固体物理中的应用：</p>
      <ul>
        <li><strong>超导体</strong>：Cooper对的相干性</li>
        <li><strong>激子</strong>：激子的相干态描述</li>
        <li><strong>磁振子</strong>：磁振子的相干激发</li>
        <li><strong>声子</strong>：晶格振动的相干态</li>
      </ul>
    </section>

    <section>
      <h2>现代发展与前沿应用</h2>
      
      <h3>量子信息</h3>
      <p>相干态在量子信息中的应用：</p>
      <ul>
        <li><strong>连续变量量子计算</strong>：基于相干态的量子计算</li>
        <li><strong>量子密钥分发</strong>：连续变量QKD协议</li>
        <li><strong>量子纠错</strong>：相干态的量子纠错码</li>
        <li><strong>量子传感</strong>：利用压缩态提高精度</li>
      </ul>

      <h3>机器学习方法</h3>
      <p>AI在相干态理论中的应用：</p>
      <ul>
        <li><strong>变分优化</strong>：神经网络优化变分参数</li>
        <li><strong>态重构</strong>：从测量数据重构量子态</li>
        <li><strong>相变识别</strong>：识别量子相变</li>
        <li><strong>动力学预测</strong>：预测系统演化</li>
      </ul>

      <h3>拓扑量子态</h3>
      <p>相干态在拓扑系统中的应用：</p>
      <ul>
        <li><strong>拓扑超导体</strong>：Majorana费米子的相干态</li>
        <li><strong>分数量子霍尔态</strong>：Laughlin波函数的相干态表示</li>
        <li><strong>拓扑绝缘体</strong>：表面态的相干性</li>
        <li><strong>Weyl半金属</strong>：Weyl费米子的相干态</li>
      </ul>

      <h3>非平衡系统</h3>
      <p>相干态在非平衡系统中的应用：</p>
      <ul>
        <li><strong>开放系统</strong>：耗散环境中的相干态</li>
        <li><strong>驱动系统</strong>：周期驱动下的相干态</li>
        <li><strong>量子淬火</strong>：相干态的动力学演化</li>
        <li><strong>多体局域化</strong>：无序系统中的相干性</li>
      </ul>
    </section>

    <section>
      <h2>总结与展望</h2>
      <p>相干态作为连接经典物理和量子物理的桥梁，在凝聚态物理的理论和实验研究中都发挥着重要作用。从最初的量子光学应用到现在的量子多体系统研究，相干态方法不断发展和完善。</p>
      
      <h3>主要贡献</h3>
      <ul>
        <li><strong>理论工具</strong>：为量子多体理论提供了强有力的数学工具</li>
        <li><strong>物理直观</strong>：帮助理解量子系统的经典对应</li>
        <li><strong>计算方法</strong>：为数值计算提供了有效的基础</li>
        <li><strong>实验指导</strong>：指导了大量的量子光学和冷原子实验</li>
      </ul>

      <h3>未来方向</h3>
      <ul>
        <li><strong>量子技术</strong>：在量子计算和量子通信中的应用</li>
        <li><strong>多体物理</strong>：研究强关联量子系统</li>
        <li><strong>拓扑物理</strong>：探索拓扑量子态的相干性质</li>
        <li><strong>非平衡物理</strong>：研究开放和驱动量子系统</li>
      </ul>
      
      <p>随着量子技术的快速发展和新型量子材料的不断发现，相干态方法将继续在凝聚态物理和量子信息科学中发挥重要作用，为理解和控制量子多体系统提供新的思路和方法。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_35',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.physics-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
}

h2 {
  color: #34495e;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.intro {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.1em;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.formula-box {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.formula-box p {
  margin: 10px 0;
  font-size: 1.1em;
}

.formula-box strong {
  color: #2c3e50;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
}

li strong {
  color: #2c3e50;
}

section {
  margin-bottom: 40px;
}

p {
  margin: 15px 0;
  text-align: justify;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .physics-page {
    padding: 15px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  .formula-box {
    padding: 15px;
    font-size: 0.9em;
  }
}
</style>