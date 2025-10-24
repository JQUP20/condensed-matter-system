<template>
  <div class="chapter-content">
    <h1>15.1.1 准粒子图像的失效</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        在传统的费米液体理论中，准粒子图像是理解金属电子性质的核心概念。
        然而，在某些强关联电子系统中，特别是在低维系统和量子临界点附近，
        传统的准粒子图像会失效，导致非费米液体行为的出现。
        这种失效表现为准粒子寿命的急剧缩短、准粒子重整化因子的消失，
        以及费米面的模糊化等现象。
        理解准粒子图像失效的机制对于认识强关联电子系统的奇异金属态、
        高温超导体的正常态性质以及量子临界现象具有重要意义。
        本节将详细讨论准粒子图像失效的物理机制、理论描述和实验表现。
      </p>
    </div>

    <div class="section">
      <h2>费米液体理论回顾</h2>
      
      <h3>Landau费米液体理论</h3>
      <p>在Landau费米液体理论中，低能激发可以用准粒子描述：</p>
      <div class="formula">
        E(k) = ε_k + Σ(k, E(k))
      </div>
      <p>其中Σ(k,ω)是自能。准粒子的基本性质：</p>
      <ul>
        <li><strong>准粒子能谱：</strong>E_k = v_F(k - k_F) + O((k - k_F)²)</li>
        <li><strong>准粒子寿命：</strong>τ_k ∝ 1/|E_k|²</li>
        <li><strong>重整化因子：</strong>Z_k = (1 - ∂Σ/∂ω|_{ω=0})^{-1}</li>
        <li><strong>费米面：</strong>尖锐定义的费米面</li>
      </ul>
      
      <h3>准粒子的稳定性条件</h3>
      <p>准粒子图像成立的条件：</p>
      <div class="formula">
        |Im Σ(k_F, 0)| ≪ |Re Σ(k_F, 0)|
      </div>
      <p>这要求：</p>
      <ul>
        <li><strong>长寿命：</strong>准粒子寿命远大于费米时间</li>
        <li><strong>小阻尼：</strong>准粒子阻尼小于准粒子能量</li>
        <li><strong>绝热连续性：</strong>与自由费米气体的绝热连续性</li>
        <li><strong>有限重整化：</strong>重整化因子Z > 0</li>
      </ul>
    </div>

    <div class="section">
      <h2>准粒子图像失效的机制</h2>
      
      <h3>强关联效应</h3>
      <p>强库仑相互作用导致的失效：</p>
      <div class="formula">
        U/t ≫ 1
      </div>
      <p>强关联的表现：</p>
      <ul>
        <li><strong>Mott物理：</strong>电荷激发的能隙</li>
        <li><strong>自旋-电荷分离：</strong>电子分数化</li>
        <li><strong>准粒子权重：</strong>Z → 0</li>
        <li><strong>非相干输运：</strong>非相干散射过程</li>
      </ul>
      
      <h3>量子临界涨落</h3>
      <p>量子相变附近的临界涨落：</p>
      <div class="formula">
        χ(q, ω) ∝ 1/(|q - Q|^{2-η} + (ω/v|q - Q|)^z)
      </div>
      <p>临界涨落的影响：</p>
      <ul>
        <li><strong>软模散射：</strong>准粒子与软模的强耦合</li>
        <li><strong>异常自能：</strong>非解析的自能行为</li>
        <li><strong>标度行为：</strong>幂律型的物理量</li>
        <li><strong>边际费米液体：</strong>对数修正的出现</li>
      </ul>
      
      <h3>维度效应</h3>
      <p>低维系统中的特殊性：</p>
      <ul>
        <li><strong>一维系统：</strong>Luttinger液体行为</li>
        <li><strong>二维系统：</strong>对数发散和边际行为</li>
        <li><strong>嵌套费米面：</strong>完美嵌套导致的不稳定性</li>
        <li><strong>van Hove奇点：</strong>态密度奇点的影响</li>
      </ul>
    </div>

    <div class="section">
      <h2>自能的异常行为</h2>
      
      <h3>非费米液体自能</h3>
      <p>异常自能的一般形式：</p>
      <div class="formula">
        Σ(k, ω) = Σ₀ + A(ω + iδ)^α + B|ω|^β sign(ω)
      </div>
      <p>其中α, β ≠ 2（费米液体情况）。</p>
      
      <p>典型的异常行为：</p>
      <ul>
        <li><strong>边际费米液体：</strong>Σ ∝ ω ln|ω|</li>
        <li><strong>Luttinger液体：</strong>Σ ∝ |ω|^α, α < 1</li>
        <li><strong>量子临界：</strong>Σ ∝ |ω|^{2/3}</li>
        <li><strong>自旋液体：</strong>线性ω依赖</li>
      </ul>
      
      <h3>谱函数的变化</h3>
      <p>单粒子谱函数：</p>
      <div class="formula">
        A(k, ω) = -1/π Im G(k, ω) = Γ_k(ω)/[(ω - ε_k - Σ'(k,ω))² + Γ_k(ω)²]
      </div>
      <p>其中Γ_k(ω) = -Im Σ(k,ω)。</p>
      
      <p>非费米液体的谱函数特征：</p>
      <ul>
        <li><strong>准粒子峰消失：</strong>δ函数峰的消失</li>
        <li><strong>非相干背景：</strong>宽的非相干谱重</li>
        <li><strong>能量依赖宽度：</strong>Γ(ω) ∝ |ω|^α</li>
        <li><strong>费米面模糊：</strong>费米面处的有限宽度</li>
      </ul>
    </div>

    <div class="section">
      <h2>具体的非费米液体态</h2>
      
      <h3>边际费米液体</h3>
      <p>Varma等人提出的边际费米液体理论：</p>
      <div class="formula">
        Σ(ω) = λω ln(ω_c/|ω|) - iπλω/2
      </div>
      <p>主要特征：</p>
      <ul>
        <li><strong>对数修正：</strong>费米液体行为的对数修正</li>
        <li><strong>线性电阻率：</strong>ρ(T) ∝ T</li>
        <li><strong>对数比热：</strong>C/T ∝ ln T</li>
        <li><strong>应用：</strong>铜氧化物超导体的正常态</li>
      </ul>
      
      <h3>Luttinger液体</h3>
      <p>一维系统的非费米液体态：</p>
      <div class="formula">
        G(x,t) ∝ (x - v_F t)^{-α} (x + v_F t)^{-β}
      </div>
      <p>特征：</p>
      <ul>
        <li><strong>自旋-电荷分离：</strong>不同的传播速度</li>
        <li><strong>幂律关联：</strong>幂律衰减的关联函数</li>
        <li><strong>无准粒子：</strong>准粒子图像完全失效</li>
        <li><strong>玻色化：</strong>费米子的玻色化描述</li>
      </ul>
      
      <h3>奇异金属</h3>
      <p>高温超导体中的奇异金属态：</p>
      <ul>
        <li><strong>线性电阻率：</strong>ρ(T) = ρ₀ + AT</li>
        <li><strong>线性比热：</strong>C/T = const</li>
        <li><strong>平方根磁化率：</strong>χ(T) ∝ T^{1/2}</li>
        <li><strong>异常霍尔效应：</strong>非常规的霍尔行为</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验观测</h2>
      
      <h3>角分辨光电子能谱(ARPES)</h3>
      <p>ARPES直接测量单粒子谱函数：</p>
      <div class="formula">
        I(k, ω) ∝ f(ω) A(k, ω)
      </div>
      <p>非费米液体的ARPES特征：</p>
      <ul>
        <li><strong>准粒子峰消失：</strong>尖锐峰的消失</li>
        <li><strong>非相干谱重：</strong>宽的背景</li>
        <li><strong>能量依赖宽度：</strong>线宽的异常能量依赖</li>
        <li><strong>费米面模糊：</strong>费米面的模糊化</li>
      </ul>
      
      <h3>输运性质</h3>
      <p>电阻率的异常行为：</p>
      <ul>
        <li><strong>线性电阻率：</strong>ρ(T) ∝ T</li>
        <li><strong>饱和电阻率：</strong>Mott-Ioffe-Regel极限</li>
        <li><strong>异常磁阻：</strong>非常规的磁阻行为</li>
        <li><strong>霍尔效应：</strong>异常的霍尔系数</li>
      </ul>
      
      <h3>热力学性质</h3>
      <p>比热和磁化率的异常：</p>
      <div class="formula">
        C(T) = γT + βT³ + δT ln T
      </div>
      <ul>
        <li><strong>增强的γ：</strong>大的电子比热系数</li>
        <li><strong>对数修正：</strong>对数温度依赖</li>
        <li><strong>非费米液体标度：</strong>幂律行为</li>
        <li><strong>Wilson比：</strong>偏离费米液体值</li>
      </ul>
    </div>

    <div class="section">
      <h2>理论方法</h2>
      
      <h3>重整化群方法</h3>
      <p>研究临界行为的重整化群：</p>
      <div class="formula">
        β(g) = μ ∂g/∂μ = -εg + bg² + ...
      </div>
      <p>应用：</p>
      <ul>
        <li><strong>固定点分析：</strong>稳定和不稳定固定点</li>
        <li><strong>标度律：</strong>临界指数的计算</li>
        <li><strong>交叉行为：</strong>不同区域的交叉</li>
        <li><strong>边际维度：</strong>边际算符的识别</li>
      </ul>
      
      <h3>大N展开</h3>
      <p>可控的理论方法：</p>
      <div class="formula">
        Σ(ω) = ∑_{n=0}^∞ Σ_n(ω)/N^n
      </div>
      <ul>
        <li><strong>SYK模型：</strong>可解的非费米液体模型</li>
        <li><strong>自旋玻璃：</strong>无序系统的处理</li>
        <li><strong>量子临界：</strong>临界点的精确解</li>
        <li><strong>全息对偶：</strong>AdS/CFT对应</li>
      </ul>
      
      <h3>数值方法</h3>
      <p>强关联系统的数值研究：</p>
      <ul>
        <li><strong>量子蒙特卡罗：</strong>有限温度性质</li>
        <li><strong>动力学平均场：</strong>局域自能的自洽计算</li>
        <li><strong>精确对角化：</strong>小系统的精确解</li>
        <li><strong>密度矩阵重整化群：</strong>一维系统的高精度</li>
      </ul>
    </div>

    <div class="section">
      <h2>物理系统中的实例</h2>
      
      <h3>高温超导体</h3>
      <p>铜氧化物超导体的正常态：</p>
      <ul>
        <li><strong>线性电阻率：</strong>广泛的温度范围</li>
        <li><strong>ARPES异常：</strong>准粒子峰的消失</li>
        <li><strong>赝能隙：</strong>费米弧的形成</li>
        <li><strong>奇异金属：</strong>最优掺杂附近</li>
      </ul>
      
      <h3>重费米子系统</h3>
      <p>f电子系统的量子临界行为：</p>
      <ul>
        <li><strong>量子临界点：</strong>磁序的抑制</li>
        <li><strong>非费米液体行为：</strong>临界点附近</li>
        <li><strong>局域量子临界：</strong>Kondo破坏</li>
        <li><strong>奇异金属相：</strong>临界扇形区域</li>
      </ul>
      
      <h3>有机导体</h3>
      <p>准一维有机导体：</p>
      <ul>
        <li><strong>Luttinger液体：</strong>一维电子系统</li>
        <li><strong>自旋-电荷分离：</strong>不同的激发</li>
        <li><strong>幂律行为：</strong>输运和谱学性质</li>
        <li><strong>维度交叉：</strong>温度驱动的交叉</li>
      </ul>
    </div>

    <div class="section">
      <h2>理论挑战与前沿</h2>
      
      <h3>未解决的问题</h3>
      <ul>
        <li><strong>奇异金属的微观机制：</strong>线性电阻率的起源</li>
        <li><strong>量子临界的普适性：</strong>不同系统的共同特征</li>
        <li><strong>有限温度交叉：</strong>非费米液体到费米液体</li>
        <li><strong>输运理论：</strong>非相干输运的理论</li>
      </ul>
      
      <h3>新的理论方向</h3>
      <ul>
        <li><strong>机器学习：</strong>AI辅助的理论发现</li>
        <li><strong>全息理论：</strong>强耦合系统的对偶描述</li>
        <li><strong>拓扑序：</strong>拓扑非费米液体</li>
        <li><strong>非平衡态：</strong>驱动系统的非费米液体</li>
      </ul>
      
      <h3>实验技术发展</h3>
      <ul>
        <li><strong>时间分辨谱学：</strong>超快动力学</li>
        <li><strong>扫描探针：</strong>局域电子结构</li>
        <li><strong>量子振荡：</strong>费米面的精确测量</li>
        <li><strong>中子散射：</strong>磁激发的直接观测</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        准粒子图像的失效是强关联电子系统中的一个核心现象，
        它标志着从传统费米液体向非费米液体态的转变。
        这种失效可能源于强库仑相互作用、量子临界涨落、
        维度效应等多种物理机制。
        非费米液体态表现出异常的自能行为、模糊的费米面、
        以及非常规的输运和热力学性质。
        理解准粒子图像失效的机制不仅对基础物理具有重要意义，
        也为探索新的量子物态和开发新型量子材料提供了指导。
        随着实验技术的进步和理论方法的发展，
        我们对非费米液体行为的认识将不断深化，
        这将有助于解决凝聚态物理中的一些重要问题，
        如高温超导的机制、量子临界现象的普适性等。
        准粒子图像失效的研究代表了现代凝聚态物理的前沿领域，
        继续推动着我们对强关联量子多体系统的理解。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter15_1_1'
}
</script>

<style scoped>
.chapter-content {
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
  font-size: 2.2em;
}

h2 {
  color: #34495e;
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 1.6em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.section {
  margin-bottom: 35px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background: #ffffff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

ul {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

li strong {
  color: #2980b9;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

sub, sup {
  font-size: 0.8em;
}
</style>