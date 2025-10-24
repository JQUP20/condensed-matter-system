<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.3.3 超越平均场理论</h1>
      <p class="chapter-subtitle">Beyond Mean-Field Theory</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        平均场理论虽然为理解超流-Mott相变提供了重要的物理图像，但它忽略了量子涨落和关联效应，
        在低维系统和强相互作用区域存在显著偏差。为了获得更精确的理论描述，
        需要发展超越平均场的理论方法。本节将介绍几种重要的超越平均场理论，
        包括Gaussian涨落修正、重整化群方法、量子蒙特卡罗模拟等，
        并讨论它们对相图和物理性质的修正。
      </p>
    </div>

    <div class="content-section">
      <h2>Gaussian涨落修正</h2>
      
      <h3>路径积分表述</h3>
      <div class="formula-box">
        <p><strong>配分函数：</strong></p>
        <p>Z = ∫ Dψ e^(-S[ψ]/ℏ)</p>
        <p><strong>有效作用量：</strong></p>
        <p>S[ψ] = ∫₀^β dτ ∫ d³r [ψ*(∂τ - μ)ψ + t|∇ψ|² + (U/2)|ψ|⁴]</p>
        <p><strong>鞍点近似：</strong></p>
        <p>ψ(r,τ) = ψ₀ + δψ(r,τ)</p>
      </div>

      <div class="concept-box">
        <h4>涨落展开</h4>
        <ul>
          <li><strong>零阶：</strong>平均场近似，忽略涨落</li>
          <li><strong>一阶：</strong>Gaussian涨落，二次涨落修正</li>
          <li><strong>高阶：</strong>非Gaussian涨落，相互作用修正</li>
          <li><strong>重求和：</strong>无穷级数的部分重求和</li>
        </ul>
      </div>

      <h3>Gaussian积分</h3>
      <div class="formula-box">
        <p><strong>二次涨落作用量：</strong></p>
        <p>S₂ = ∫₀^β dτ ∫ d³r δψ* Ĝ⁻¹ δψ</p>
        <p><strong>Green函数：</strong></p>
        <p>Ĝ⁻¹ = -∂τ + μ - t∇² + U|ψ₀|²</p>
        <p><strong>涨落修正：</strong></p>
        <p>δF = (ℏ/2) Tr ln(Ĝ⁻¹)</p>
      </div>

      <div class="theory-box">
        <h4>涨落效应</h4>
        <ul>
          <li><strong>零点涨落：</strong>量子零点运动的贡献</li>
          <li><strong>热涨落：</strong>有限温度下的热激发</li>
          <li><strong>相位涨落：</strong>序参量相位的涨落</li>
          <li><strong>振幅涨落：</strong>序参量振幅的涨落</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>1/N展开方法</h2>
      
      <h3>大N极限</h3>
      <div class="formula-box">
        <p><strong>N分量模型：</strong></p>
        <p>Ĥ = -t Σ⟨i,j⟩ Σₐ (b̂ᵢₐ†b̂ⱼₐ + h.c.) + (U/2N) Σᵢ (Σₐ n̂ᵢₐ)²</p>
        <p><strong>序参量：</strong></p>
        <p>ψₐ = ⟨b̂ᵢₐ⟩, |ψ|² = Σₐ |ψₐ|²</p>
        <p><strong>1/N修正：</strong></p>
        <p>F = F₀ + (1/N)F₁ + (1/N²)F₂ + ...</p>
      </div>

      <div class="concept-box">
        <h4>大N极限的优势</h4>
        <ul>
          <li><strong>可控近似：</strong>1/N作为小参数</li>
          <li><strong>系统修正：</strong>逐阶计算涨落修正</li>
          <li><strong>临界行为：</strong>正确的临界指数</li>
          <li><strong>维度依赖：</strong>不同维度的统一处理</li>
        </ul>
      </div>

      <h3>自能修正</h3>
      <div class="formula-box">
        <p><strong>Dyson方程：</strong></p>
        <p>G = G₀ + G₀ΣG</p>
        <p><strong>自能：</strong></p>
        <p>Σ(k,ω) = U⟨n⟩ + Σ'(k,ω)</p>
        <p><strong>顶点修正：</strong></p>
        <p>Γ = U + δΓ</p>
      </div>

      <div class="theory-box">
        <h4>自能效应</h4>
        <ul>
          <li><strong>准粒子重整化：</strong>有效质量修正</li>
          <li><strong>寿命效应：</strong>准粒子的有限寿命</li>
          <li><strong>谱函数：</strong>单粒子谱的展宽</li>
          <li><strong>相干峰：</strong>准粒子峰的形成</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群方法</h2>
      
      <h3>Wilson重整化群</h3>
      <div class="formula-box">
        <p><strong>标度变换：</strong></p>
        <p>r → r/b, τ → τ/b^z</p>
        <p><strong>重整化群方程：</strong></p>
        <p>β(g) = b^d ∂g/∂ln b|fixed point</p>
        <p><strong>临界指数：</strong></p>
        <p>ν = 1/y_t, η = 2 - γ_ψ</p>
      </div>

      <div class="concept-box">
        <h4>重整化群流</h4>
        <ul>
          <li><strong>不动点：</strong>β(g*) = 0的解</li>
          <li><strong>相关长度：</strong>ξ ∝ |t|^(-ν)</li>
          <li><strong>普适性：</strong>临界指数的普适类</li>
          <li><strong>标度律：</strong>热力学量的标度行为</li>
        </ul>
      </div>

      <h3>ε展开</h3>
      <div class="formula-box">
        <p><strong>上临界维度：</strong></p>
        <p>d_c = 4 (Bose-Hubbard模型)</p>
        <p><strong>ε展开：</strong></p>
        <p>ε = 4 - d</p>
        <p><strong>临界指数：</strong></p>
        <p>ν = 1/2 + ε/12 + O(ε²)</p>
        <p>η = ε²/54 + O(ε³)</p>
      </div>

      <div class="theory-box">
        <h4>维度效应</h4>
        <ul>
          <li><strong>高维：</strong>d > 4时平均场理论精确</li>
          <li><strong>三维：</strong>弱的涨落修正</li>
          <li><strong>二维：</strong>显著的涨落效应</li>
          <li><strong>一维：</strong>强涨落，特殊行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子蒙特卡罗方法</h2>
      
      <h3>路径积分蒙特卡罗</h3>
      <div class="formula-box">
        <p><strong>Trotter分解：</strong></p>
        <p>e^(-βĤ) = lim_{M→∞} (e^(-ΔτĤ))^M</p>
        <p><strong>世界线表示：</strong></p>
        <p>Z = Σ_{configs} W[config]</p>
        <p><strong>重要性采样：</strong></p>
        <p>⟨O⟩ = Σ_{configs} O[config] P[config]</p>
      </div>

      <div class="concept-box">
        <h4>QMC算法</h4>
        <ul>
          <li><strong>连续时间：</strong>连续时间量子蒙特卡罗</li>
          <li><strong>世界线：</strong>粒子世界线的采样</li>
          <li><strong>集团更新：</strong>减少自关联时间</li>
          <li><strong>有限尺寸标度：</strong>外推到热力学极限</li>
        </ul>
      </div>

      <h3>符号问题</h3>
      <div class="formula-box">
        <p><strong>平均符号：</strong></p>
        <p>⟨sign⟩ = ⟨W⟩/⟨|W|⟩</p>
        <p><strong>统计误差：</strong></p>
        <p>δO ∝ 1/(⟨sign⟩√N_samples)</p>
        <p><strong>指数增长：</strong></p>
        <p>⟨sign⟩ ∝ e^(-βN)</p>
      </div>

      <div class="theory-box">
        <h4>符号问题的解决</h4>
        <ul>
          <li><strong>粒子-空穴对称：</strong>特殊填充下无符号问题</li>
          <li><strong>确定性方法：</strong>DMRG、DMFT等</li>
          <li><strong>近似方法：</strong>约束路径积分</li>
          <li><strong>新算法：</strong>机器学习辅助采样</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>动力学平均场理论</h2>
      
      <h3>DMFT基本思想</h3>
      <div class="formula-box">
        <p><strong>局域近似：</strong></p>
        <p>Σᵢⱼ(ω) = δᵢⱼ Σ(ω)</p>
        <p><strong>自洽条件：</strong></p>
        <p>G_loc(ω) = ∫ dε ρ(ε)/(ω - ε - Σ(ω))</p>
        <p><strong>杂质问题：</strong></p>
        <p>Ĥ_imp = Σₙ εₙ d̂ₙ†d̂ₙ + U Σᵢ n̂ᵢ↑n̂ᵢ↓ + Σₙ (Vₙ d̂ₙ†c + h.c.)</p>
      </div>

      <div class="concept-box">
        <h4>DMFT优势</h4>
        <ul>
          <li><strong>局域关联：</strong>完全考虑局域量子涨落</li>
          <li><strong>高维精确：</strong>无穷维极限下精确</li>
          <li><strong>非微扰：</strong>适用于强相互作用</li>
          <li><strong>实频计算：</strong>可计算实频谱函数</li>
        </ul>
      </div>

      <h3>杂质求解器</h3>
      <div class="formula-box">
        <p><strong>连续时间QMC：</strong></p>
        <p>CT-INT, CT-HYB算法</p>
        <p><strong>精确对角化：</strong></p>
        <p>有限bath的精确求解</p>
        <p><strong>数值重整化群：</strong></p>
        <p>Wilson NRG方法</p>
      </div>

      <div class="theory-box">
        <h4>DMFT结果</h4>
        <ul>
          <li><strong>Mott转变：</strong>连续的金属-绝缘体转变</li>
          <li><strong>准粒子峰：</strong>相干峰的形成和消失</li>
          <li><strong>Hubbard带：</strong>上下Hubbard带的分离</li>
          <li><strong>温度效应：</strong>有限温度下的相图</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>张量网络方法</h2>
      
      <h3>密度矩阵重整化群</h3>
      <div class="formula-box">
        <p><strong>矩阵乘积态：</strong></p>
        <p>|ψ⟩ = Σ_{s₁...sₙ} A¹[s₁]A²[s₂]...Aᴺ[sₙ]|s₁s₂...sₙ⟩</p>
        <p><strong>纠缠熵：</strong></p>
        <p>S = -Tr(ρₐ ln ρₐ)</p>
        <p><strong>面积定律：</strong></p>
        <p>S ∝ L^(d-1) (基态)</p>
      </div>

      <div class="concept-box">
        <h4>DMRG优势</h4>
        <ul>
          <li><strong>一维精确：</strong>一维系统的高精度计算</li>
          <li><strong>基态性质：</strong>基态和低激发态</li>
          <li><strong>实时演化：</strong>时间演化算法</li>
          <li><strong>有限温度：</strong>纯化算法</li>
        </ul>
      </div>

      <h3>投影纠缠对态</h3>
      <div class="formula-box">
        <p><strong>PEPS表示：</strong></p>
        <p>|ψ⟩ = Σ_{configs} ∏ᵢ Tᵢ[sᵢ,{αᵢⱼ}]|config⟩</p>
        <p><strong>收缩算法：</strong></p>
        <p>⟨O⟩ = ⟨ψ|O|ψ⟩/⟨ψ|ψ⟩</p>
        <p><strong>环境张量：</strong></p>
        <p>近似收缩的环境表示</p>
      </div>

      <div class="theory-box">
        <h4>高维扩展</h4>
        <ul>
          <li><strong>二维系统：</strong>PEPS方法的应用</li>
          <li><strong>三维系统：</strong>计算复杂度的挑战</li>
          <li><strong>临界系统：</strong>多尺度纠缠重整化</li>
          <li><strong>拓扑序：</strong>拓扑纠缠熵</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>机器学习方法</h2>
      
      <h3>神经网络量子态</h3>
      <div class="formula-box">
        <p><strong>变分波函数：</strong></p>
        <p>ψ(s) = e^(f(s;θ))</p>
        <p><strong>神经网络：</strong></p>
        <p>f(s;θ) = Σₖ wₖ σ(Σᵢ vₖᵢsᵢ + bₖ)</p>
        <p><strong>变分优化：</strong></p>
        <p>E = ⟨ψ|Ĥ|ψ⟩/⟨ψ|ψ⟩</p>
      </div>

      <div class="concept-box">
        <h4>机器学习优势</h4>
        <ul>
          <li><strong>表示能力：</strong>复杂量子态的表示</li>
          <li><strong>变分灵活性：</strong>不受特定ansatz限制</li>
          <li><strong>并行计算：</strong>GPU加速优化</li>
          <li><strong>可解释性：</strong>学习到的物理特征</li>
        </ul>
      </div>

      <h3>强化学习</h3>
      <div class="formula-box">
        <p><strong>策略梯度：</strong></p>
        <p>∇θ E = ⟨∇θ ln π(a|s;θ) R⟩</p>
        <p><strong>量子控制：</strong></p>
        <p>最优控制协议的学习</p>
        <p><strong>相变识别：</strong></p>
        <p>自动相图绘制</p>
      </div>

      <div class="theory-box">
        <h4>应用领域</h4>
        <ul>
          <li><strong>基态搜索：</strong>复杂哈密顿量的基态</li>
          <li><strong>相变检测：</strong>序参量的自动识别</li>
          <li><strong>量子控制：</strong>最优控制序列设计</li>
          <li><strong>实验设计：</strong>实验参数优化</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论比较与验证</h2>
      
      <h3>方法比较</h3>
      <div class="experiment-box">
        <h4>不同方法的适用性</h4>
        <ul>
          <li><strong>平均场：</strong>定性理解，高维系统</li>
          <li><strong>Gaussian涨落：</strong>弱相互作用，临界点附近</li>
          <li><strong>QMC：</strong>精确结果，但有符号问题</li>
          <li><strong>DMFT：</strong>强关联，高维有效</li>
          <li><strong>DMRG：</strong>一维系统，基态性质</li>
          <li><strong>机器学习：</strong>复杂系统，新兴方法</li>
        </ul>
      </div>

      <h3>实验验证</h3>
      <div class="experiment-box">
        <h4>理论预测的验证</h4>
        <ul>
          <li><strong>相图修正：</strong>量子涨落对相边界的修正</li>
          <li><strong>临界指数：</strong>连续相变的普适性验证</li>
          <li><strong>动力学性质：</strong>激发谱的精确测量</li>
          <li><strong>有限尺寸效应：</strong>实验系统的尺寸依赖</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>开放问题与挑战</h2>
      
      <h3>理论挑战</h3>
      <div class="theory-box">
        <h4>未解决问题</h4>
        <ul>
          <li><strong>符号问题：</strong>费米子系统的QMC计算</li>
          <li><strong>实时动力学：</strong>非平衡态的精确描述</li>
          <li><strong>高维系统：</strong>三维以上系统的精确方法</li>
          <li><strong>强关联：</strong>极强相互作用区域的理论</li>
        </ul>
      </div>

      <h3>计算挑战</h3>
      <div class="theory-box">
        <h4>计算复杂性</h4>
        <ul>
          <li><strong>指数复杂度：</strong>希尔伯特空间的指数增长</li>
          <li><strong>纠缠增长：</strong>时间演化中纠缠的增长</li>
          <li><strong>有限尺寸：</strong>热力学极限的外推</li>
          <li><strong>算法效率：</strong>新算法的开发需求</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>未来发展方向</h2>
      
      <h3>理论发展</h3>
      <div class="application-box">
        <h4>新兴方向</h4>
        <ul>
          <li><strong>量子纠错：</strong>噪声环境下的量子多体系统</li>
          <li><strong>机器学习：</strong>AI辅助的理论发现</li>
          <li><strong>拓扑量子：</strong>拓扑保护的量子态</li>
          <li><strong>非厄米系统：</strong>开放量子系统理论</li>
        </ul>
      </div>

      <h3>实验结合</h3>
      <div class="application-box">
        <h4>理论-实验协同</h4>
        <ul>
          <li><strong>量子模拟：</strong>可控量子系统的实现</li>
          <li><strong>实时监测：</strong>量子态的实时测量</li>
          <li><strong>反馈控制：</strong>测量反馈的量子控制</li>
          <li><strong>多体纠缠：</strong>纠缠结构的直接探测</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          超越平均场理论的发展为理解强关联量子多体系统提供了更精确的理论工具。
          Gaussian涨落修正揭示了量子涨落的重要性，重整化群方法给出了临界现象的普适描述，
          量子蒙特卡罗提供了精确的数值结果，动力学平均场理论处理了强关联效应，
          张量网络方法开辟了低维系统的精确计算途径，机器学习方法展现了新的可能性。
          这些方法各有优势和局限性，在不同的物理区域和问题中发挥重要作用。
          未来的发展将继续推动理论方法的创新，与实验技术的进步相结合，
          为理解和控制量子多体系统开辟新的道路。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
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
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2c5aa0;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c5aa0;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2c5aa0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1ecf4;
}

.content-section h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.formula-box p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
}

.concept-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.theory-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.experiment-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
}

.application-box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
}

.summary-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
  border-left: 5px solid #2c5aa0;
}

.concept-box ul,
.theory-box ul,
.experiment-box ul,
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.experiment-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
.experiment-box li::before,
.application-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.content-section ul {
  padding-left: 2rem;
}

.content-section li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-section h2 {
    font-size: 1.5rem;
  }
  
  .content-section h3 {
    font-size: 1.3rem;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box {
    padding: 1rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>