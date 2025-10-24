<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.2 一维原子链的量子描述</h1>
      <p class="chapter-subtitle">Quantum Description of One-Dimensional Atomic Chain</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        从经典力学向量子力学的过渡是理解固体中声子行为的关键步骤。
        在量子描述中，晶格振动不再是连续的经典波，而是量子化的准粒子——声子。
        这种量子化不仅解释了固体比热的温度依赖性，也为理解声子与其他准粒子的相互作用提供了理论基础。
        本节将详细介绍如何将经典的晶格振动量子化，建立声子的概念，
        并探讨量子效应对晶格动力学的重要影响。
      </p>
    </div>

    <div class="content-section">
      <h2>正则量子化</h2>
      
      <h3>哈密顿量的构建</h3>
      <div class="formula-box">
        <p><strong>经典哈密顿量：</strong></p>
        <p>H = Σₙ [pₙ²/(2m) + ½K(uₙ₊₁ - uₙ)²]</p>
        <p><strong>正则动量：</strong></p>
        <p>pₙ = m duₙ/dt</p>
        <p><strong>正则对易关系：</strong></p>
        <p>[uₙ, pₘ] = iℏδₙₘ</p>
        <p>[uₙ, uₘ] = [pₙ, pₘ] = 0</p>
      </div>

      <div class="concept-box">
        <h4>量子化的基本原理</h4>
        <ul>
          <li><strong>对应原理：</strong>经典泊松括号 → 量子对易子</li>
          <li><strong>正则量子化：</strong>{A,B}ₚ → (1/iℏ)[Â,B̂]</li>
          <li><strong>厄米性：</strong>物理量对应厄米算符</li>
          <li><strong>不确定性原理：</strong>位置和动量的不确定性关系</li>
        </ul>
      </div>

      <h3>正则坐标的量子化</h3>
      <div class="formula-box">
        <p><strong>正则坐标变换：</strong></p>
        <p>Qₖ = (1/√N) Σₙ uₙ e^(-ikna)</p>
        <p>Pₖ = (1/√N) Σₙ pₙ e^(-ikna)</p>
        <p><strong>对易关系：</strong></p>
        <p>[Qₖ, Pₖ'] = iℏδₖₖ'</p>
        <p>[Qₖ, Qₖ'] = [Pₖ, Pₖ'] = 0</p>
      </div>

      <div class="theory-box">
        <h4>正则坐标的物理意义</h4>
        <ul>
          <li><strong>模式分离：</strong>不同k模式之间解耦</li>
          <li><strong>独立谐振子：</strong>每个k对应一个量子谐振子</li>
          <li><strong>集体坐标：</strong>描述集体振动模式</li>
          <li><strong>动量守恒：</strong>总动量的量子化</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子谐振子</h2>
      
      <h3>单模哈密顿量</h3>
      <div class="formula-box">
        <p><strong>模式哈密顿量：</strong></p>
        <p>Ĥₖ = Pₖ²/(2m) + ½mω²(k)Qₖ²</p>
        <p><strong>总哈密顿量：</strong></p>
        <p>Ĥ = Σₖ Ĥₖ</p>
        <p><strong>升降算符：</strong></p>
        <p>âₖ = √(mω(k)/(2ℏ))Qₖ + i√(1/(2ℏmω(k)))Pₖ</p>
        <p>âₖ† = √(mω(k)/(2ℏ))Qₖ - i√(1/(2ℏmω(k)))Pₖ</p>
      </div>

      <div class="concept-box">
        <h4>升降算符的性质</h4>
        <ul>
          <li><strong>对易关系：</strong>[âₖ, âₖ'†] = δₖₖ'</li>
          <li><strong>玻色统计：</strong>[âₖ, âₖ'] = [âₖ†, âₖ'†] = 0</li>
          <li><strong>粒子数算符：</strong>n̂ₖ = âₖ†âₖ</li>
          <li><strong>能量本征值：</strong>Eₙₖ = ℏω(k)(nₖ + ½)</li>
        </ul>
      </div>

      <h3>声子的概念</h3>
      <div class="formula-box">
        <p><strong>声子哈密顿量：</strong></p>
        <p>Ĥ = Σₖ ℏω(k)(âₖ†âₖ + ½)</p>
        <p><strong>声子数算符：</strong></p>
        <p>n̂ₖ = âₖ†âₖ</p>
        <p><strong>声子态：</strong></p>
        <p>|n₁, n₂, ..., nₖ, ...⟩</p>
        <p><strong>基态（真空态）：</strong></p>
        <p>|0⟩ = |0, 0, ..., 0, ...⟩</p>
      </div>

      <div class="theory-box">
        <h4>声子的基本性质</h4>
        <ul>
          <li><strong>玻色子：</strong>整数自旋，服从玻色-爱因斯坦统计</li>
          <li><strong>准粒子：</strong>集体激发的量子化</li>
          <li><strong>能量：</strong>E = ℏω(k)</li>
          <li><strong>动量：</strong>p = ℏk</li>
          <li><strong>零点能：</strong>基态具有零点振动能</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>声子态和算符</h2>
      
      <h3>Fock态表示</h3>
      <div class="formula-box">
        <p><strong>单声子态：</strong></p>
        <p>|1ₖ⟩ = âₖ†|0⟩</p>
        <p><strong>多声子态：</strong></p>
        <p>|nₖ⟩ = (âₖ†)ⁿₖ/√(nₖ!)|0⟩</p>
        <p><strong>一般态：</strong></p>
        <p>|{nₖ}⟩ = ∏ₖ |nₖ⟩</p>
        <p><strong>归一化：</strong></p>
        <p>⟨{nₖ}|{nₖ}⟩ = 1</p>
      </div>

      <div class="concept-box">
        <h4>Fock态的特征</h4>
        <ul>
          <li><strong>粒子数确定：</strong>每个模式的声子数确定</li>
          <li><strong>正交完备：</strong>构成完备的正交基</li>
          <li><strong>可数无穷：</strong>无限维希尔伯特空间</li>
          <li><strong>产生湮灭：</strong>升降算符改变粒子数</li>
        </ul>
      </div>

      <h3>位移和动量算符</h3>
      <div class="formula-box">
        <p><strong>位移算符：</strong></p>
        <p>ûₙ = √(ℏ/(2Nm)) Σₖ √(1/ω(k))(âₖ + âₖ†)e^(ikna)</p>
        <p><strong>动量算符：</strong></p>
        <p>p̂ₙ = i√(ℏm/(2N)) Σₖ √ω(k)(âₖ† - âₖ)e^(ikna)</p>
        <p><strong>厄米性：</strong></p>
        <p>ûₙ† = ûₙ, p̂ₙ† = p̂ₙ</p>
      </div>

      <div class="theory-box">
        <h4>算符的物理意义</h4>
        <ul>
          <li><strong>实空间表示：</strong>原子位移的量子算符</li>
          <li><strong>零点涨落：</strong>基态中的量子涨落</li>
          <li><strong>测量：</strong>对应可观测的物理量</li>
          <li><strong>关联函数：</strong>计算各种关联函数的基础</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>零点振动</h2>
      
      <h3>基态性质</h3>
      <div class="formula-box">
        <p><strong>基态能量：</strong></p>
        <p>E₀ = Σₖ ½ℏω(k)</p>
        <p><strong>零点位移涨落：</strong></p>
        <p>⟨0|ûₙ²|0⟩ = ℏ/(2Nm) Σₖ 1/ω(k)</p>
        <p><strong>零点动量涨落：</strong></p>
        <p>⟨0|p̂ₙ²|0⟩ = ℏm/2N Σₖ ω(k)</p>
        <p><strong>不确定性关系：</strong></p>
        <p>Δuₙ · Δpₙ ≥ ℏ/2</p>
      </div>

      <div class="concept-box">
        <h4>零点振动的特征</h4>
        <ul>
          <li><strong>量子效应：</strong>纯粹的量子力学现象</li>
          <li><strong>温度无关：</strong>T=0时仍存在</li>
          <li><strong>能量贡献：</strong>对总能量的重要贡献</li>
          <li><strong>同位素效应：</strong>质量依赖的量子效应</li>
        </ul>
      </div>

      <h3>德拜截止</h3>
      <div class="formula-box">
        <p><strong>德拜频率：</strong></p>
        <p>ωD = vs(6π²n)^(1/3)</p>
        <p><strong>零点能估算：</strong></p>
        <p>E₀ ≈ ∫₀^ωD ½ℏω g(ω)dω</p>
        <p><strong>态密度：</strong></p>
        <p>g(ω) = V/(2π²vs³)ω² (三维)</p>
        <p><strong>结果：</strong></p>
        <p>E₀ ≈ (9/8)NkBΘD</p>
      </div>

      <div class="theory-box">
        <h4>德拜模型的意义</h4>
        <ul>
          <li><strong>连续近似：</strong>长波近似下的有效理论</li>
          <li><strong>截止频率：</strong>引入物理截止</li>
          <li><strong>温度标度：</strong>德拜温度ΘD = ℏωD/kB</li>
          <li><strong>实验验证：</strong>与实验结果的比较</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>热力学性质</h2>
      
      <h3>配分函数</h3>
      <div class="formula-box">
        <p><strong>正则配分函数：</strong></p>
        <p>Z = Tr[e^(-βĤ)] = ∏ₖ Zₖ</p>
        <p><strong>单模配分函数：</strong></p>
        <p>Zₖ = Σₙₖ e^(-βℏω(k)(nₖ+½))</p>
        <p><strong>几何级数求和：</strong></p>
        <p>Zₖ = e^(-βℏω(k)/2)/(1 - e^(-βℏω(k)))</p>
        <p><strong>自由能：</strong></p>
        <p>F = -kBT ln Z = Σₖ [½ℏω(k) + kBT ln(1 - e^(-βℏω(k)))]</p>
      </div>

      <div class="concept-box">
        <h4>统计力学的要点</h4>
        <ul>
          <li><strong>玻色分布：</strong>声子服从玻色-爱因斯坦分布</li>
          <li><strong>模式独立：</strong>不同模式统计独立</li>
          <li><strong>零点贡献：</strong>零点能的热力学贡献</li>
          <li><strong>高温极限：</strong>经典极限的恢复</li>
        </ul>
      </div>

      <h3>平均声子数</h3>
      <div class="formula-box">
        <p><strong>玻色-爱因斯坦分布：</strong></p>
        <p>⟨nₖ⟩ = 1/(e^(βℏω(k)) - 1)</p>
        <p><strong>高温极限：</strong></p>
        <p>⟨nₖ⟩ ≈ kBT/(ℏω(k)) (βℏω << 1)</p>
        <p><strong>低温极限：</strong></p>
        <p>⟨nₖ⟩ ≈ e^(-βℏω(k)) (βℏω >> 1)</p>
        <p><strong>内能：</strong></p>
        <p>U = Σₖ ℏω(k)[⟨nₖ⟩ + ½]</p>
      </div>

      <div class="theory-box">
        <h4>温度效应</h4>
        <ul>
          <li><strong>经典极限：</strong>高温下恢复经典结果</li>
          <li><strong>量子效应：</strong>低温下的量子统计</li>
          <li><strong>激发阈值：</strong>ℏω ~ kBT的临界温度</li>
          <li><strong>模式冻结：</strong>低温下高频模式被冻结</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>相干态</h2>
      
      <h3>相干态的定义</h3>
      <div class="formula-box">
        <p><strong>相干态：</strong></p>
        <p>|α⟩ = e^(-|α|²/2) Σₙ (αⁿ/√n!)|n⟩</p>
        <p><strong>本征方程：</strong></p>
        <p>â|α⟩ = α|α⟩</p>
        <p><strong>位移算符：</strong></p>
        <p>|α⟩ = D̂(α)|0⟩ = e^(αâ† - α*â)|0⟩</p>
        <p><strong>归一化：</strong></p>
        <p>⟨α|α⟩ = 1</p>
      </div>

      <div class="concept-box">
        <h4>相干态的性质</h4>
        <ul>
          <li><strong>最小不确定态：</strong>达到海森堡不确定性下限</li>
          <li><strong>经典对应：</strong>最接近经典振动的量子态</li>
          <li><strong>时间演化：</strong>保持相干性的时间演化</li>
          <li><strong>过完备性：</strong>构成过完备基</li>
        </ul>
      </div>

      <h3>准经典性质</h3>
      <div class="formula-box">
        <p><strong>期望值：</strong></p>
        <p>⟨α|Q̂|α⟩ = √(2ℏ/(mω)) Re(α)</p>
        <p>⟨α|P̂|α⟩ = √(2ℏmω) Im(α)</p>
        <p><strong>涨落：</strong></p>
        <p>ΔQ = √(ℏ/(2mω)), ΔP = √(ℏmω/2)</p>
        <p><strong>不确定性乘积：</strong></p>
        <p>ΔQ · ΔP = ℏ/2</p>
      </div>

      <div class="theory-box">
        <h4>相干态的应用</h4>
        <ul>
          <li><strong>激光理论：</strong>光场的相干态描述</li>
          <li><strong>量子光学：</strong>非经典光的基础</li>
          <li><strong>路径积分：</strong>相干态路径积分</li>
          <li><strong>半经典近似：</strong>量子-经典对应</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>声子-声子相互作用</h2>
      
      <h3>非谐效应</h3>
      <div class="formula-box">
        <p><strong>非谐哈密顿量：</strong></p>
        <p>Ĥ_anh = Σₙ [V₃(uₙ₋₁, uₙ, uₙ₊₁) + V₄(uₙ₋₁, uₙ, uₙ₊₁) + ...]</p>
        <p><strong>三次项：</strong></p>
        <p>V₃ ∝ Σₖ₁ₖ₂ₖ₃ (âₖ₁âₖ₂âₖ₃ + âₖ₁†âₖ₂†âₖ₃† + ...)</p>
        <p><strong>四次项：</strong></p>
        <p>V₄ ∝ Σₖ₁ₖ₂ₖ₃ₖ₄ âₖ₁†âₖ₂†âₖ₃âₖ₄</p>
      </div>

      <div class="concept-box">
        <h4>非谐效应的后果</h4>
        <ul>
          <li><strong>声子寿命：</strong>声子的有限寿命</li>
          <li><strong>热导率：</strong>声子散射导致的热阻</li>
          <li><strong>热膨胀：</strong>非对称势导致的热膨胀</li>
          <li><strong>频率移动：</strong>温度依赖的频率</li>
        </ul>
      </div>

      <h3>声子散射过程</h3>
      <div class="formula-box">
        <p><strong>三声子过程：</strong></p>
        <p>ω₁ = ω₂ + ω₃ (分裂过程)</p>
        <p>ω₁ + ω₂ = ω₃ (合并过程)</p>
        <p><strong>动量守恒：</strong></p>
        <p>k₁ = k₂ + k₃ + G (G为倒格矢)</p>
        <p><strong>散射率：</strong></p>
        <p>1/τ ∝ T (低温), 1/τ ∝ T² (高温)</p>
      </div>

      <div class="theory-box">
        <h4>散射机制</h4>
        <ul>
          <li><strong>正常过程：</strong>G = 0，动量严格守恒</li>
          <li><strong>翻转过程：</strong>G ≠ 0，准动量不守恒</li>
          <li><strong>温度依赖：</strong>散射率的温度标度</li>
          <li><strong>输运性质：</strong>对热导率的影响</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子效应的实验观测</h2>
      
      <h3>中子散射</h3>
      <div class="experiment-box">
        <h4>非弹性中子散射</h4>
        <ul>
          <li><strong>色散测量：</strong>直接测量ω(k)关系</li>
          <li><strong>动力学结构因子：</strong>S(k,ω)的测量</li>
          <li><strong>声子谱：</strong>完整的声子色散谱</li>
          <li><strong>声子寿命：</strong>谱线宽度反映声子寿命</li>
        </ul>
      </div>

      <h3>拉曼散射</h3>
      <div class="experiment-box">
        <h4>光学声子的探测</h4>
        <ul>
          <li><strong>一阶拉曼：</strong>k≈0的光学声子</li>
          <li><strong>二阶拉曼：</strong>两声子过程</li>
          <li><strong>温度效应：</strong>频率和线宽的温度依赖</li>
          <li><strong>应力效应：</strong>应力对声子频率的影响</li>
        </ul>
      </div>

      <h3>比热测量</h3>
      <div class="experiment-box">
        <h4>声子比热的量子特征</h4>
        <ul>
          <li><strong>德拜T³定律：</strong>低温下的T³行为</li>
          <li><strong>爱因斯坦模型：</strong>高频光学模式的贡献</li>
          <li><strong>同位素效应：</strong>质量对比热的影响</li>
          <li><strong>量子临界：</strong>量子相变附近的异常</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展</h2>
      
      <h3>拓扑声子学</h3>
      <div class="application-box">
        <h4>拓扑保护的声子态</h4>
        <ul>
          <li><strong>拓扑绝缘体：</strong>声子的拓扑相</li>
          <li><strong>边界态：</strong>拓扑保护的边界模式</li>
          <li><strong>Weyl声子：</strong>三维拓扑半金属中的Weyl点</li>
          <li><strong>量子自旋霍尔：</strong>声子的自旋轨道耦合</li>
        </ul>
      </div>

      <h3>量子声学器件</h3>
      <div class="application-box">
        <h4>基于声子的量子技术</h4>
        <ul>
          <li><strong>声子激光：</strong>相干声子的产生和放大</li>
          <li><strong>声子晶体：</strong>人工周期结构的声子调控</li>
          <li><strong>量子传感：</strong>声子用于精密测量</li>
          <li><strong>量子信息：</strong>声子作为量子信息载体</li>
        </ul>
      </div>

      <h3>理论方法发展</h3>
      <div class="application-box">
        <h4>现代理论工具</h4>
        <ul>
          <li><strong>第一性原理：</strong>从电子结构计算声子</li>
          <li><strong>机器学习：</strong>AI预测声子性质</li>
          <li><strong>非平衡理论：</strong>非平衡态声子动力学</li>
          <li><strong>多体理论：</strong>强关联系统中的声子</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          一维原子链的量子描述将经典的晶格振动转化为量子化的声子，
          这一转变不仅是形式上的数学处理，更揭示了固体中集体激发的量子本质。
          通过正则量子化，我们建立了声子作为玻色子的概念，
          理解了零点振动、量子统计和相干态等重要的量子效应。
          声子的量子性质不仅解释了固体比热的温度依赖性，
          也为理解热传导、声子-电子相互作用等现象提供了理论基础。
          非谐效应引入的声子-声子相互作用进一步丰富了声子的物理图像，
          解释了声子寿命、热膨胀等重要现象。
          现代实验技术如中子散射、拉曼散射等为验证这些理论预测提供了有力工具。
          随着拓扑声子学和量子声学器件的发展，
          声子的量子描述正在开辟新的研究领域和技术应用。
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