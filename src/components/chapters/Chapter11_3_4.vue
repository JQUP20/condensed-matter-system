<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.3.4 无穷大U极限-变换至自旋模型</h1>
      <p class="chapter-subtitle">Infinite U Limit - Mapping to Spin Models</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        在Bose-Hubbard模型的强相互作用极限（U → ∞）下，系统的物理行为发生根本性变化。
        无穷大的在位排斥相互作用完全禁止了双占据态，使得系统的希尔伯特空间被严格约束。
        在这种极限下，可以通过巧妙的变换将玻色子系统映射到有效的量子自旋模型，
        从而利用自旋系统的丰富理论来理解强关联玻色子的行为。
        本节将详细讨论这种映射的数学基础、物理图像和重要应用。
      </p>
    </div>

    <div class="content-section">
      <h2>硬核玻色子近似</h2>
      
      <h3>无穷大U极限</h3>
      <div class="formula-box">
        <p><strong>原始哈密顿量：</strong></p>
        <p>Ĥ = -t Σ⟨i,j⟩ (b̂ᵢ†b̂ⱼ + h.c.) + U Σᵢ n̂ᵢ(n̂ᵢ-1)/2 - μ Σᵢ n̂ᵢ</p>
        <p><strong>硬核约束：</strong></p>
        <p>U → ∞: n̂ᵢ(n̂ᵢ-1) = 0</p>
        <p><strong>允许态：</strong></p>
        <p>n̂ᵢ = 0 或 1 (每个格点最多一个粒子)</p>
      </div>

      <div class="concept-box">
        <h4>硬核玻色子的特征</h4>
        <ul>
          <li><strong>排斥约束：</strong>完全禁止双占据</li>
          <li><strong>局域希尔伯特空间：</strong>每格点只有两个态</li>
          <li><strong>量子统计：</strong>保持玻色统计性质</li>
          <li><strong>相干跳跃：</strong>保持相位相干性</li>
        </ul>
      </div>

      <h3>有效哈密顿量</h3>
      <div class="formula-box">
        <p><strong>硬核玻色子哈密顿量：</strong></p>
        <p>Ĥ_hc = -t Σ⟨i,j⟩ (b̂ᵢ†b̂ⱼ + h.c.) - μ Σᵢ n̂ᵢ</p>
        <p><strong>约束条件：</strong></p>
        <p>b̂ᵢ†b̂ᵢ† = 0, b̂ᵢb̂ᵢ = 0</p>
        <p><strong>反对易关系：</strong></p>
        <p>{b̂ᵢ, b̂ⱼ†} = δᵢⱼ (i ≠ j时反对易)</p>
      </div>

      <div class="theory-box">
        <h4>硬核玻色子的性质</h4>
        <ul>
          <li><strong>局域约束：</strong>n̂ᵢ² = n̂ᵢ</li>
          <li><strong>跳跃修正：</strong>跳跃算符的投影</li>
          <li><strong>相位自由度：</strong>保持U(1)对称性</li>
          <li><strong>密度涨落：</strong>受约束的密度涨落</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Jordan-Wigner变换</h2>
      
      <h3>一维情况</h3>
      <div class="formula-box">
        <p><strong>Jordan-Wigner变换：</strong></p>
        <p>b̂ᵢ = (∏ⱼ<ᵢ (-1)^n̂ⱼ) ĉᵢ</p>
        <p>b̂ᵢ† = ĉᵢ† (∏ⱼ<ᵢ (-1)^n̂ⱼ)</p>
        <p><strong>费米算符：</strong></p>
        <p>{ĉᵢ, ĉⱼ†} = δᵢⱼ, {ĉᵢ, ĉⱼ} = 0</p>
      </div>

      <div class="concept-box">
        <h4>变换的物理意义</h4>
        <ul>
          <li><strong>统计变换：</strong>玻色子→费米子</li>
          <li><strong>非局域性：</strong>引入弦算符</li>
          <li><strong>相位因子：</strong>(-1)^n̂ⱼ 的累积相位</li>
          <li><strong>一维特殊性：</strong>仅在一维严格成立</li>
        </ul>
      </div>

      <h3>变换后的哈密顿量</h3>
      <div class="formula-box">
        <p><strong>自由费米子哈密顿量：</strong></p>
        <p>Ĥ = -t Σᵢ (ĉᵢ†ĉᵢ₊₁ + h.c.) - μ Σᵢ ĉᵢ†ĉᵢ</p>
        <p><strong>对角化：</strong></p>
        <p>ĉₖ = (1/√N) Σᵢ e^(ikrᵢ) ĉᵢ</p>
        <p><strong>能谱：</strong></p>
        <p>εₖ = -2t cos(ka) - μ</p>
      </div>

      <div class="theory-box">
        <h4>一维硬核玻色子的解</h4>
        <ul>
          <li><strong>精确可解：</strong>映射到自由费米子</li>
          <li><strong>基态：</strong>费米海的填充</li>
          <li><strong>激发：</strong>粒子-空穴激发</li>
          <li><strong>相关函数：</strong>费米子关联函数</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>自旋-1/2表示</h2>
      
      <h3>Schwinger玻色子表示</h3>
      <div class="formula-box">
        <p><strong>自旋算符：</strong></p>
        <p>Ŝᵢ⁺ = b̂ᵢ†, Ŝᵢ⁻ = b̂ᵢ</p>
        <p>Ŝᵢᶻ = n̂ᵢ - 1/2 = b̂ᵢ†b̂ᵢ - 1/2</p>
        <p><strong>自旋对易关系：</strong></p>
        <p>[Ŝᵢ⁺, Ŝⱼ⁻] = 2δᵢⱼ Ŝᵢᶻ</p>
        <p>[Ŝᵢᶻ, Ŝⱼ±] = ±δᵢⱼ Ŝᵢ±</p>
      </div>

      <div class="concept-box">
        <h4>自旋表示的优势</h4>
        <ul>
          <li><strong>直观图像：</strong>自旋上下对应占据空态</li>
          <li><strong>SU(2)对称性：</strong>自旋旋转不变性</li>
          <li><strong>磁性类比：</strong>与量子磁性的联系</li>
          <li><strong>理论工具：</strong>丰富的自旋理论</li>
        </ul>
      </div>

      <h3>XXZ自旋模型</h3>
      <div class="formula-box">
        <p><strong>硬核玻色子→自旋映射：</strong></p>
        <p>Ĥ = -t Σ⟨i,j⟩ (Ŝᵢ⁺Ŝⱼ⁻ + Ŝᵢ⁻Ŝⱼ⁺) - μ Σᵢ Ŝᵢᶻ</p>
        <p><strong>标准XXZ形式：</strong></p>
        <p>Ĥ = J Σ⟨i,j⟩ (ŜᵢˣŜⱼˣ + ŜᵢʸŜⱼʸ) - h Σᵢ Ŝᵢᶻ</p>
        <p><strong>参数关系：</strong></p>
        <p>J = 2t, h = μ</p>
      </div>

      <div class="theory-box">
        <h4>XXZ模型的相</h4>
        <ul>
          <li><strong>XY相：</strong>h < 2J，超流相对应</li>
          <li><strong>Ising相：</strong>h > 2J，Mott相对应</li>
          <li><strong>临界点：</strong>h = 2J，量子相变点</li>
          <li><strong>各向异性：</strong>Δ = 0的XY极限</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>高维推广</h2>
      
      <h3>Slave-particle表示</h3>
      <div class="formula-box">
        <p><strong>从属粒子分解：</strong></p>
        <p>b̂ᵢ = f̂ᵢ†ŝᵢ</p>
        <p><strong>约束条件：</strong></p>
        <p>f̂ᵢ†f̂ᵢ + ŝᵢ†ŝᵢ = 1</p>
        <p><strong>物理意义：</strong></p>
        <p>f̂ᵢ†: 费米子（占据态）</p>
        <p>ŝᵢ: 玻色子（空态）</p>
      </div>

      <div class="concept-box">
        <h4>从属粒子方法</h4>
        <ul>
          <li><strong>约束理论：</strong>拉格朗日乘子方法</li>
          <li><strong>平均场：</strong>约束的平均场处理</li>
          <li><strong>涨落：</strong>约束涨落的效应</li>
          <li><strong>规范结构：</strong>局域U(1)规范对称性</li>
        </ul>
      </div>

      <h3>t-J模型类比</h3>
      <div class="formula-box">
        <p><strong>有效哈密顿量：</strong></p>
        <p>Ĥ_eff = -t_eff Σ⟨i,j⟩ P̂(f̂ᵢ†f̂ⱼ + h.c.)P̂ + J_eff Σ⟨i,j⟩ Ŝᵢ·Ŝⱼ</p>
        <p><strong>投影算符：</strong></p>
        <p>P̂ = ∏ᵢ (1 - n̂ᵢ↑n̂ᵢ↓)</p>
        <p><strong>有效参数：</strong></p>
        <p>t_eff ∼ t²/U, J_eff ∼ t²/U</p>
      </div>

      <div class="theory-box">
        <h4>与电子系统的类比</h4>
        <ul>
          <li><strong>Hubbard模型：</strong>强关联电子系统</li>
          <li><strong>Mott绝缘体：</strong>相同的物理机制</li>
          <li><strong>超交换：</strong>虚跳跃产生的有效相互作用</li>
          <li><strong>相图结构：</strong>类似的相变行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子自旋液体</h2>
      
      <h3>阻挫效应</h3>
      <div class="formula-box">
        <p><strong>阻挫自旋模型：</strong></p>
        <p>Ĥ = J₁ Σ⟨i,j⟩ Ŝᵢ·Ŝⱼ + J₂ Σ⟨⟨i,j⟩⟩ Ŝᵢ·Ŝⱼ</p>
        <p><strong>阻挫参数：</strong></p>
        <p>α = J₂/J₁</p>
        <p><strong>临界阻挫：</strong></p>
        <p>αc ≈ 0.5 (二维正方晶格)</p>
      </div>

      <div class="concept-box">
        <h4>量子自旋液体特征</h4>
        <ul>
          <li><strong>无磁序：</strong>基态无长程磁序</li>
          <li><strong>能隙：</strong>可能存在自旋能隙</li>
          <li><strong>拓扑序：</strong>拓扑纠缠熵</li>
          <li><strong>分数化激发：</strong>spinon等分数化准粒子</li>
        </ul>
      </div>

      <h3>共振价键态</h3>
      <div class="formula-box">
        <p><strong>RVB波函数：</strong></p>
        <p>|RVB⟩ = Σ_{配对} A[配对] ∏_{⟨i,j⟩∈配对} (|↑ᵢ↓ⱼ⟩ - |↓ᵢ↑ⱼ⟩)</p>
        <p><strong>变分能量：</strong></p>
        <p>E_RVB = ⟨RVB|Ĥ|RVB⟩</p>
        <p><strong>关联长度：</strong></p>
        <p>ξ ∼ 1/Δ_spin</p>
      </div>

      <div class="theory-box">
        <h4>RVB态的性质</h4>
        <ul>
          <li><strong>短程关联：</strong>指数衰减的关联函数</li>
          <li><strong>量子涨落：</strong>强量子涨落效应</li>
          <li><strong>拓扑简并：</strong>环面上的基态简并</li>
          <li><strong>anyonic激发：</strong>非阿贝尔统计</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>数值方法</h2>
      
      <h3>精确对角化</h3>
      <div class="formula-box">
        <p><strong>希尔伯特空间：</strong></p>
        <p>dim(H) = 2^N (自旋-1/2系统)</p>
        <p><strong>对称性约化：</strong></p>
        <p>Sz总量子数，动量，点群对称性</p>
        <p><strong>Lanczos算法：</strong></p>
        <p>基态和低激发态的计算</p>
      </div>

      <div class="concept-box">
        <h4>ED方法的优势</h4>
        <ul>
          <li><strong>精确结果：</strong>有限系统的精确解</li>
          <li><strong>全谱信息：</strong>完整的能谱结构</li>
          <li><strong>动力学：</strong>动力学结构因子</li>
          <li><strong>基准测试：</strong>其他方法的基准</li>
        </ul>
      </div>

      <h3>量子蒙特卡罗</h3>
      <div class="formula-box">
        <p><strong>自旋系统QMC：</strong></p>
        <p>无符号问题（双分量系统）</p>
        <p><strong>SSE算法：</strong></p>
        <p>随机级数展开</p>
        <p><strong>集团更新：</strong></p>
        <p>Wolff算法，减少关联时间</p>
      </div>

      <div class="theory-box">
        <h4>QMC在自旋系统的应用</h4>
        <ul>
          <li><strong>相图绘制：</strong>精确的相边界</li>
          <li><strong>临界指数：</strong>连续相变的普适性</li>
          <li><strong>有限温度：</strong>热力学性质</li>
          <li><strong>大系统：</strong>热力学极限的结果</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验实现</h2>
      
      <h3>光晶格中的实现</h3>
      <div class="experiment-box">
        <h4>硬核玻色子的实现</h4>
        <ul>
          <li><strong>深光晶格：</strong>强约束产生硬核行为</li>
          <li><strong>Feshbach共振：</strong>调节相互作用强度</li>
          <li><strong>超流-Mott转变：</strong>XY-Ising相变的观测</li>
          <li><strong>自旋关联：</strong>自旋-自旋关联函数测量</li>
        </ul>
      </div>

      <h3>量子气体显微镜</h3>
      <div class="experiment-box">
        <h4>单原子分辨成像</h4>
        <ul>
          <li><strong>格点分辨：</strong>单格点占据数测量</li>
          <li><strong>关联测量：</strong>空间关联函数</li>
          <li><strong>纠缠探测：</strong>纠缠熵的测量</li>
          <li><strong>动力学：</strong>实时演化观测</li>
        </ul>
      </div>

      <h3>人工量子系统</h3>
      <div class="experiment-box">
        <h4>其他实验平台</h4>
        <ul>
          <li><strong>超导量子比特：</strong>可编程量子模拟器</li>
          <li><strong>离子阱：</strong>长程相互作用自旋系统</li>
          <li><strong>Rydberg原子：</strong>强相互作用原子系统</li>
          <li><strong>光子系统：</strong>线性光学量子模拟</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>拓扑性质</h2>
      
      <h3>拓扑自旋液体</h3>
      <div class="formula-box">
        <p><strong>拓扑纠缠熵：</strong></p>
        <p>S_topo = γ ln(D)</p>
        <p><strong>量子维数：</strong></p>
        <p>D = √(Σₐ dₐ²)</p>
        <p><strong>模矩阵：</strong></p>
        <p>S矩阵和T矩阵</p>
      </div>

      <div class="concept-box">
        <h4>拓扑序的特征</h4>
        <ul>
          <li><strong>基态简并：</strong>拓扑保护的简并</li>
          <li><strong>anyonic激发：</strong>分数统计准粒子</li>
          <li><strong>边界态：</strong>体边对应关系</li>
          <li><strong>拓扑不变量：</strong>拓扑数的量化</li>
        </ul>
      </div>

      <h3>Kitaev模型</h3>
      <div class="formula-box">
        <p><strong>Kitaev蜂窝格子模型：</strong></p>
        <p>Ĥ = -Jₓ Σₓ-links ŜᵢˣŜⱼˣ - Jᵧ Σᵧ-links ŜᵢʸŜⱼʸ - Jᵤ Σᵤ-links ŜᵢᶻŜⱼᶻ</p>
        <p><strong>精确可解：</strong></p>
        <p>Jordan-Wigner变换到Majorana费米子</p>
        <p><strong>拓扑相：</strong></p>
        <p>非阿贝尔anyons</p>
      </div>

      <div class="theory-box">
        <h4>Kitaev模型的意义</h4>
        <ul>
          <li><strong>精确解：</strong>拓扑自旋液体的精确解</li>
          <li><strong>Majorana费米子：</strong>实空间Majorana模式</li>
          <li><strong>量子计算：</strong>拓扑量子计算的基础</li>
          <li><strong>材料实现：</strong>候选材料的理论指导</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与展望</h2>
      
      <h3>量子模拟</h3>
      <div class="application-box">
        <h4>模拟应用</h4>
        <ul>
          <li><strong>强关联系统：</strong>高温超导机制研究</li>
          <li><strong>量子磁性：</strong>复杂磁性相的理解</li>
          <li><strong>拓扑物态：</strong>拓扑相的实现和操控</li>
          <li><strong>非平衡态：</strong>量子多体动力学</li>
        </ul>
      </div>

      <h3>量子技术</h3>
      <div class="application-box">
        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>拓扑量子比特</li>
          <li><strong>量子传感：</strong>纠缠增强的精密测量</li>
          <li><strong>量子通信：</strong>量子纠错码</li>
          <li><strong>量子材料：</strong>新奇量子材料设计</li>
        </ul>
      </div>

      <h3>理论发展</h3>
      <div class="application-box">
        <h4>未来方向</h4>
        <ul>
          <li><strong>机器学习：</strong>AI辅助的相识别</li>
          <li><strong>张量网络：</strong>高效的数值方法</li>
          <li><strong>量子纠错：</strong>噪声环境下的量子相</li>
          <li><strong>非厄米系统：</strong>开放量子系统</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          无穷大U极限下的Bose-Hubbard模型通过硬核约束可以精确映射到量子自旋模型，
          这种映射不仅提供了理论上的简化，更重要的是建立了玻色子系统与自旋系统之间的深刻联系。
          通过Jordan-Wigner变换、Schwinger玻色子表示等数学工具，
          我们可以利用量子磁性理论的丰富成果来理解强关联玻色子的行为。
          这种方法不仅解释了超流-Mott相变的本质，还预言了量子自旋液体等新奇量子相的存在。
          在实验方面，光晶格冷原子系统为验证这些理论预测提供了理想的平台，
          而量子气体显微镜等先进技术使得单原子分辨的测量成为可能。
          未来，这一理论框架将继续在量子模拟、拓扑量子计算和新奇量子材料的研究中发挥重要作用。
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