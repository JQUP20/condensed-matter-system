<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.3.2 超流-Mott相变的平均场理论</h1>
      <p class="chapter-subtitle">Mean-Field Theory of Superfluid-Mott Transition</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        超流-Mott相变是量子多体系统中最重要的相变之一，它描述了从具有长程相干性的超流相
        到局域化的Mott绝缘体相的转变。平均场理论虽然忽略了量子涨落，
        但为理解这一相变提供了重要的物理图像和定量预测。
        本节将详细讨论Bose-Hubbard模型的平均场处理及其对相变的描述。
      </p>
    </div>

    <div class="content-section">
      <h2>平均场近似的基本思想</h2>
      
      <h3>序参量的引入</h3>
      <div class="formula-box">
        <p><strong>超流序参量：</strong></p>
        <p>ψ = ⟨b̂ᵢ⟩ = ⟨b̂ᵢ†⟩*</p>
        <p><strong>物理意义：</strong></p>
        <p>|ψ|² ∝ 凝聚体密度</p>
        <p>arg(ψ) = 超流相位</p>
      </div>

      <div class="concept-box">
        <h4>平均场假设</h4>
        <ul>
          <li><strong>均匀系统：</strong>所有格点等价，⟨b̂ᵢ⟩ = ψ</li>
          <li><strong>因式分解：</strong>⟨b̂ᵢ†b̂ⱼ⟩ ≈ ⟨b̂ᵢ†⟩⟨b̂ⱼ⟩ + ⟨b̂ᵢ†⟩⟨b̂ⱼ⟩*</li>
          <li><strong>涨落忽略：</strong>忽略序参量的量子和热涨落</li>
          <li><strong>自洽条件：</strong>序参量满足自洽方程</li>
        </ul>
      </div>

      <h3>平均场哈密顿量</h3>
      <div class="formula-box">
        <p><strong>原始哈密顿量：</strong></p>
        <p>Ĥ = -t Σ⟨i,j⟩ (b̂ᵢ†b̂ⱼ + h.c.) + (U/2) Σᵢ n̂ᵢ(n̂ᵢ-1) - μ Σᵢ n̂ᵢ</p>
        <p><strong>平均场近似：</strong></p>
        <p>b̂ᵢ†b̂ⱼ ≈ ψ*b̂ⱼ + ψb̂ᵢ† - |ψ|²</p>
        <p><strong>有效哈密顿量：</strong></p>
        <p>ĤMF = Σᵢ [-ztψ*(b̂ᵢ + b̂ᵢ†) + (U/2)n̂ᵢ(n̂ᵢ-1) - μ̃n̂ᵢ] + NMzt|ψ|²</p>
      </div>

      <div class="theory-box">
        <h4>有效参数</h4>
        <ul>
          <li><strong>有效化学势：</strong>μ̃ = μ + zt|ψ|²</li>
          <li><strong>配位数：</strong>z = 2d (d维立方晶格)</li>
          <li><strong>格点数：</strong>M = 总格点数</li>
          <li><strong>平均场能：</strong>Mzt|ψ|² 项</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>单格点问题</h2>
      
      <h3>有效单格点哈密顿量</h3>
      <div class="formula-box">
        <p><strong>单格点哈密顿量：</strong></p>
        <p>ĥᵢ = -ztψ*(b̂ᵢ + b̂ᵢ†) + (U/2)n̂ᵢ(n̂ᵢ-1) - μ̃n̂ᵢ</p>
        <p><strong>Fock态基：</strong></p>
        <p>|n⟩, n = 0, 1, 2, ...</p>
        <p><strong>矩阵元：</strong></p>
        <p>⟨n|ĥᵢ|n⟩ = Un(n-1)/2 - μ̃n</p>
        <p>⟨n±1|ĥᵢ|n⟩ = -ztψ*√(n+1), -ztψ√n</p>
      </div>

      <div class="concept-box">
        <h4>能级结构</h4>
        <ul>
          <li><strong>对角项：</strong>相互作用能和化学势能</li>
          <li><strong>非对角项：</strong>超流场引起的跳跃</li>
          <li><strong>截断：</strong>实际计算中截断到有限n</li>
          <li><strong>本征态：</strong>相互作用和跳跃的竞争</li>
        </ul>
      </div>

      <h3>自洽方程</h3>
      <div class="formula-box">
        <p><strong>序参量自洽方程：</strong></p>
        <p>ψ = ⟨b̂ᵢ⟩ = Tr[ρ̂b̂ᵢ] = Σₙ ρₙ⟨n|b̂ᵢ|ψ⟩</p>
        <p><strong>粒子数方程：</strong></p>
        <p>n̄ = ⟨n̂ᵢ⟩ = Tr[ρ̂n̂ᵢ] = Σₙ nρₙ</p>
        <p><strong>密度矩阵：</strong></p>
        <p>ρₙ = ⟨n|e^(-βĥᵢ)|n⟩/Z</p>
      </div>

      <div class="theory-box">
        <h4>求解策略</h4>
        <ul>
          <li><strong>对角化：</strong>数值对角化单格点哈密顿量</li>
          <li><strong>迭代：</strong>迭代求解自洽方程</li>
          <li><strong>稳定性：</strong>检查解的稳定性</li>
          <li><strong>相图：</strong>扫描参数空间</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>零温相图</h2>
      
      <h3>相边界的确定</h3>
      <div class="formula-box">
        <p><strong>超流相条件：</strong></p>
        <p>ψ ≠ 0 (非零序参量)</p>
        <p><strong>Mott相条件：</strong></p>
        <p>ψ = 0 (零序参量)</p>
        <p><strong>相边界：</strong></p>
        <p>∂²F/∂ψ²|ψ=0 = 0</p>
      </div>

      <div class="concept-box">
        <h4>Mott叶的特征</h4>
        <ul>
          <li><strong>整数填充：</strong>n̄ = 1, 2, 3, ...</li>
          <li><strong>能隙：</strong>粒子-空穴激发能隙</li>
          <li><strong>不可压缩：</strong>∂n̄/∂μ = 0</li>
          <li><strong>叶状结构：</strong>在(μ/U, t/U)平面的形状</li>
        </ul>
      </div>

      <h3>临界点分析</h3>
      <div class="formula-box">
        <p><strong>n̄=1 Mott叶的边界：</strong></p>
        <p>μc/U = 1/2 ± (t/U)c</p>
        <p><strong>临界跳跃：</strong></p>
        <p>(t/U)c = 1/(2z) = 1/(4d)</p>
        <p><strong>叶尖：</strong></p>
        <p>μ/U = 1/2, t/U = 1/(4d)</p>
      </div>

      <div class="theory-box">
        <h4>维度依赖性</h4>
        <ul>
          <li><strong>一维：</strong>(t/U)c = 1/4</li>
          <li><strong>二维：</strong>(t/U)c = 1/8</li>
          <li><strong>三维：</strong>(t/U)c = 1/12</li>
          <li><strong>高维极限：</strong>(t/U)c → 0</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>有限温度效应</h2>
      
      <h3>温度相图</h3>
      <div class="formula-box">
        <p><strong>有限温度自洽方程：</strong></p>
        <p>ψ = Σₙ √n ⟨n-1|e^(-βĥᵢ)|n⟩/Z</p>
        <p><strong>临界温度：</strong></p>
        <p>Tc: ψ(T > Tc) = 0</p>
        <p><strong>Berezinskii-Kosterlitz-Thouless转变：</strong></p>
        <p>二维系统中的拓扑相变</p>
      </div>

      <div class="concept-box">
        <h4>温度效应</h4>
        <ul>
          <li><strong>热涨落：</strong>破坏长程序</li>
          <li><strong>Mott区缩小：</strong>温度升高时Mott叶收缩</li>
          <li><strong>正常相：</strong>高温下的正常流体相</li>
          <li><strong>三相点：</strong>超流-Mott-正常相交点</li>
        </ul>
      </div>

      <h3>热力学性质</h3>
      <div class="formula-box">
        <p><strong>自由能：</strong></p>
        <p>F = -T ln Z + Mzt|ψ|²</p>
        <p><strong>比热：</strong></p>
        <p>C = -T ∂²F/∂T²</p>
        <p><strong>压缩率：</strong></p>
        <p>κ = (1/n̄) ∂n̄/∂μ</p>
      </div>

      <div class="theory-box">
        <h4>相变特征</h4>
        <ul>
          <li><strong>连续相变：</strong>超流-正常相变</li>
          <li><strong>一阶相变：</strong>某些参数区域的Mott转变</li>
          <li><strong>临界指数：</strong>平均场普适类</li>
          <li><strong>标度律：</strong>临界点附近的标度行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>动力学性质</h2>
      
      <h3>激发谱</h3>
      <div class="formula-box">
        <p><strong>Bogoliubov-de Gennes方程：</strong></p>
        <p>[ĥᵢ, b̂ᵢ] = ωb̂ᵢ (超流相)</p>
        <p><strong>能隙：</strong></p>
        <p>Δ = min(E₁ - E₀, E₀ - E₋₁) (Mott相)</p>
        <p><strong>声子模式：</strong></p>
        <p>ω(k) ≈ c|k| (长波长极限)</p>
      </div>

      <div class="concept-box">
        <h4>激发类型</h4>
        <ul>
          <li><strong>Goldstone模式：</strong>超流相中的无能隙激发</li>
          <li><strong>粒子-空穴激发：</strong>Mott相中的有能隙激发</li>
          <li><strong>振幅模式：</strong>序参量振幅涨落</li>
          <li><strong>相位模式：</strong>序参量相位涨落</li>
        </ul>
      </div>

      <h3>输运性质</h3>
      <div class="formula-box">
        <p><strong>超流密度：</strong></p>
        <p>ρs ∝ |ψ|² (超流相)</p>
        <p>ρs = 0 (Mott相)</p>
        <p><strong>电导率：</strong></p>
        <p>σ(ω) ∝ δ(ω) (超流相)</p>
        <p>σ(ω) = 0 (ω < Δ, Mott相)</p>
      </div>

      <div class="theory-box">
        <h4>输运特征</h4>
        <ul>
          <li><strong>超流性：</strong>无阻尼流动</li>
          <li><strong>绝缘性：</strong>Mott相中的零电导</li>
          <li><strong>临界慢化：</strong>相变点附近的慢动力学</li>
          <li><strong>普适性：</strong>临界动力学指数</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>平均场理论的局限性</h2>
      
      <h3>量子涨落的忽略</h3>
      <div class="theory-box">
        <h4>主要局限</h4>
        <ul>
          <li><strong>零点涨落：</strong>忽略量子零点运动</li>
          <li><strong>关联效应：</strong>忽略粒子间关联</li>
          <li><strong>拓扑效应：</strong>忽略拓扑激发</li>
          <li><strong>维度效应：</strong>低维系统中的偏差</li>
        </ul>
      </div>

      <h3>修正方法</h3>
      <div class="formula-box">
        <p><strong>Gaussian涨落：</strong></p>
        <p>Z = ∫ Dψ e^(-S[ψ])</p>
        <p><strong>1/N展开：</strong></p>
        <p>大N极限下的系统修正</p>
        <p><strong>重整化群：</strong></p>
        <p>临界点附近的标度分析</p>
      </div>

      <div class="concept-box">
        <h4>改进理论</h4>
        <ul>
          <li><strong>量子蒙特卡罗：</strong>精确数值结果</li>
          <li><strong>动力学平均场：</strong>DMFT方法</li>
          <li><strong>密度泛函理论：</strong>DFT方法</li>
          <li><strong>张量网络：</strong>DMRG和PEPS</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验验证</h2>
      
      <h3>光晶格实验</h3>
      <div class="experiment-box">
        <h4>实验观测</h4>
        <ul>
          <li><strong>相图测量：</strong>超流-Mott相变的观测</li>
          <li><strong>能隙测量：</strong>Mott相中能隙的确定</li>
          <li><strong>相干性：</strong>干涉条纹的消失</li>
          <li><strong>激发谱：</strong>Bragg散射谱学</li>
        </ul>
      </div>

      <h3>定量比较</h3>
      <div class="experiment-box">
        <h4>理论与实验</h4>
        <ul>
          <li><strong>临界点：</strong>平均场预测的定性正确性</li>
          <li><strong>定量偏差：</strong>量子涨落的重要性</li>
          <li><strong>维度效应：</strong>低维系统中的显著偏差</li>
          <li><strong>有限尺寸：</strong>实验系统的有限尺寸效应</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>扩展应用</h2>
      
      <h3>其他系统</h3>
      <div class="application-box">
        <h4>应用领域</h4>
        <ul>
          <li><strong>超导体：</strong>Cooper对的Bose-Hubbard模型</li>
          <li><strong>量子点阵列：</strong>人工量子系统</li>
          <li><strong>极化子系统：</strong>强耦合电子-声子系统</li>
          <li><strong>磁性系统：</strong>量子自旋系统的映射</li>
        </ul>
      </div>

      <h3>量子模拟</h3>
      <div class="application-box">
        <h4>模拟应用</h4>
        <ul>
          <li><strong>强关联物理：</strong>高温超导机制研究</li>
          <li><strong>量子相变：</strong>临界现象的研究</li>
          <li><strong>非平衡态：</strong>量子淬火动力学</li>
          <li><strong>拓扑相：</strong>拓扑量子态的实现</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>数值计算方法</h2>
      
      <h3>算法实现</h3>
      <div class="theory-box">
        <h4>计算步骤</h4>
        <ul>
          <li><strong>初始化：</strong>给定初始序参量ψ₀</li>
          <li><strong>对角化：</strong>求解单格点本征值问题</li>
          <li><strong>统计求和：</strong>计算热力学平均</li>
          <li><strong>更新：</strong>计算新的序参量</li>
          <li><strong>收敛：</strong>检查自洽条件</li>
        </ul>
      </div>

      <h3>数值技巧</h3>
      <div class="theory-box">
        <h4>优化方法</h4>
        <ul>
          <li><strong>混合算法：</strong>新旧序参量的线性组合</li>
          <li><strong>自适应步长：</strong>动态调整迭代步长</li>
          <li><strong>多重网格：</strong>不同精度的计算网格</li>
          <li><strong>并行计算：</strong>参数空间的并行扫描</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          平均场理论为理解超流-Mott相变提供了重要的理论框架。
          通过引入超流序参量并采用自洽近似，我们得到了相图的基本结构，
          包括Mott绝缘体叶和超流相区域。理论预测了临界跳跃强度的维度依赖性，
          解释了能隙的产生机制，并描述了相变的热力学和动力学性质。
          尽管平均场理论忽略了量子涨落，但它为更精确的理论方法提供了重要的起点，
          并在光晶格冷原子实验中得到了定性验证。
          这一理论框架不仅适用于Bose-Hubbard模型，
          还可以推广到其他强关联量子系统的研究中。
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