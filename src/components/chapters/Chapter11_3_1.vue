<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.3.1 几个极限分析</h1>
      <p class="chapter-subtitle">Several Limiting Cases Analysis</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        晶格中的玻色子系统展现出丰富的物理现象，从超流到Mott绝缘体的相变是其中最引人注目的。
        通过分析几个重要的极限情况，我们可以深入理解Bose-Hubbard模型的物理本质，
        为理解超流-Mott相变提供重要的理论基础。
      </p>
    </div>

    <div class="content-section">
      <h2>Bose-Hubbard模型</h2>
      
      <h3>哈密顿量</h3>
      <div class="formula-box">
        <p><strong>Bose-Hubbard哈密顿量：</strong></p>
        <p>Ĥ = -t Σ⟨i,j⟩ (b̂ᵢ†b̂ⱼ + h.c.) + (U/2) Σᵢ n̂ᵢ(n̂ᵢ-1) - μ Σᵢ n̂ᵢ</p>
        <p>其中 t 是跳跃积分，U 是在位相互作用，μ 是化学势</p>
      </div>

      <div class="concept-box">
        <h4>模型参数的物理意义</h4>
        <ul>
          <li><strong>跳跃项：</strong>-t 描述粒子在相邻格点间的隧穿</li>
          <li><strong>相互作用项：</strong>U 描述同一格点上粒子间的排斥</li>
          <li><strong>化学势：</strong>μ 控制系统的平均粒子数</li>
          <li><strong>竞争机制：</strong>动能与相互作用能的竞争</li>
        </ul>
      </div>

      <h3>无量纲参数</h3>
      <div class="formula-box">
        <p><strong>关键参数：</strong></p>
        <p>g = U/t (相互作用强度)</p>
        <p>n̄ = N/M (平均填充因子)</p>
        <p>其中 N 是总粒子数，M 是格点数</p>
      </div>

      <div class="theory-box">
        <h4>参数空间的相图</h4>
        <ul>
          <li><strong>弱相互作用：</strong>g ≪ 1，超流相占主导</li>
          <li><strong>强相互作用：</strong>g ≫ 1，Mott相占主导</li>
          <li><strong>整数填充：</strong>n̄ = 整数时出现Mott叶</li>
          <li><strong>非整数填充：</strong>总是超流相</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>弱相互作用极限 (U ≪ t)</h2>
      
      <h3>Bogoliubov近似</h3>
      <div class="formula-box">
        <p><strong>连续极限：</strong></p>
        <p>b̂ᵢ ≈ √n₀ + δb̂ᵢ</p>
        <p><strong>有效哈密顿量：</strong></p>
        <p>Ĥₑff ≈ Σₖ ωₖ α̂ₖ†α̂ₖ</p>
        <p>其中 ωₖ = √(εₖ(εₖ + 2Un₀))，εₖ = -2t Σᵢ cos(kᵢa)</p>
      </div>

      <div class="concept-box">
        <h4>弱相互作用相的特征</h4>
        <ul>
          <li><strong>宏观占据：</strong>k=0 模式的宏观占据</li>
          <li><strong>声子激发：</strong>Bogoliubov准粒子谱</li>
          <li><strong>超流性：</strong>无能隙的Goldstone模式</li>
          <li><strong>长程相干：</strong>非对角长程序</li>
        </ul>
      </div>

      <h3>激发谱</h3>
      <div class="formula-box">
        <p><strong>Bogoliubov谱：</strong></p>
        <p>ωₖ = √(εₖ² + 2Un₀εₖ)</p>
        <p><strong>长波长极限：</strong></p>
        <p>ωₖ ≈ c|k| (k → 0)</p>
        <p>其中 c = √(2tn₀U/ℏ) 是声速</p>
      </div>

      <div class="theory-box">
        <h4>激发谱的性质</h4>
        <ul>
          <li><strong>无能隙：</strong>ω(k=0) = 0</li>
          <li><strong>线性色散：</strong>低动量下的声子行为</li>
          <li><strong>自由粒子行为：</strong>高动量下 ω ≈ ε</li>
          <li><strong>相互作用修正：</strong>U 引起的谱重整化</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>强相互作用极限 (U ≫ t)</h2>
      
      <h3>原子极限</h3>
      <div class="formula-box">
        <p><strong>零阶哈密顿量：</strong></p>
        <p>Ĥ₀ = (U/2) Σᵢ n̂ᵢ(n̂ᵢ-1) - μ Σᵢ n̂ᵢ</p>
        <p><strong>基态能量：</strong></p>
        <p>E₀ = M × min_n [Un(n-1)/2 - μn]</p>
      </div>

      <div class="concept-box">
        <h4>Mott绝缘体的特征</h4>
        <ul>
          <li><strong>整数填充：</strong>每个格点固定粒子数</li>
          <li><strong>能隙：</strong>粒子-空穴激发能隙</li>
          <li><strong>不可压缩：</strong>化学势变化不改变密度</li>
          <li><strong>无超流：</strong>相位涨落被抑制</li>
        </ul>
      </div>

      <h3>微扰理论</h3>
      <div class="formula-box">
        <p><strong>有效跳跃：</strong></p>
        <p>tₑff = t²/U (二阶微扰)</p>
        <p><strong>有效哈密顿量：</strong></p>
        <p>Ĥₑff = -tₑff Σ⟨i,j⟩ (P̂ᵢb̂ᵢ†b̂ⱼP̂ⱼ + h.c.)</p>
        <p>其中 P̂ᵢ 是投影算符</p>
      </div>

      <div class="theory-box">
        <h4>强相互作用效应</h4>
        <ul>
          <li><strong>跳跃重整化：</strong>有效跳跃 ∝ t²/U</li>
          <li><strong>约束动力学：</strong>双占据被抑制</li>
          <li><strong>自旋模型：</strong>映射到量子自旋模型</li>
          <li><strong>量子涨落：</strong>零点运动的重要性</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>平均场理论</h2>
      
      <h3>平均场近似</h3>
      <div class="formula-box">
        <p><strong>序参量：</strong></p>
        <p>ψ = ⟨b̂ᵢ⟩ (超流序参量)</p>
        <p><strong>平均场哈密顿量：</strong></p>
        <p>ĤMF = Σᵢ [-ztψ*(b̂ᵢ + b̂ᵢ†) + (U/2)n̂ᵢ(n̂ᵢ-1) - μ̃n̂ᵢ]</p>
        <p>其中 z 是配位数，μ̃ = μ + ztψ</p>
      </div>

      <div class="concept-box">
        <h4>平均场相图</h4>
        <ul>
          <li><strong>超流相：</strong>ψ ≠ 0，有序参量</li>
          <li><strong>Mott相：</strong>ψ = 0，无序参量</li>
          <li><strong>相边界：</strong>ψ = 0 的临界线</li>
          <li><strong>Mott叶：</strong>整数填充处的绝缘区域</li>
        </ul>
      </div>

      <h3>自洽方程</h3>
      <div class="formula-box">
        <p><strong>序参量方程：</strong></p>
        <p>ψ = ⟨b̂ᵢ⟩ = Tr[ρ̂b̂ᵢ]</p>
        <p><strong>粒子数方程：</strong></p>
        <p>n̄ = ⟨n̂ᵢ⟩ = Tr[ρ̂n̂ᵢ]</p>
        <p>其中 ρ̂ = e^(-βĤMF)/Z</p>
      </div>

      <div class="theory-box">
        <h4>相变临界条件</h4>
        <ul>
          <li><strong>稳定性条件：</strong>∂²F/∂ψ² > 0</li>
          <li><strong>临界点：</strong>∂²F/∂ψ² = 0</li>
          <li><strong>相边界：</strong>ψ = 0 的边界条件</li>
          <li><strong>临界指数：</strong>连续相变的普适性</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子蒙特卡罗结果</h2>
      
      <h3>精确数值结果</h3>
      <div class="experiment-box">
        <h4>QMC计算的发现</h4>
        <ul>
          <li><strong>相图确认：</strong>验证平均场相图的定性正确性</li>
          <li><strong>临界点修正：</strong>量子涨落对临界点的修正</li>
          <li><strong>Mott叶形状：</strong>精确的Mott绝缘体边界</li>
          <li><strong>临界指数：</strong>3D XY普适类的确认</li>
        </ul>
      </div>

      <h3>关键发现</h3>
      <div class="formula-box">
        <p><strong>临界跳跃：</strong></p>
        <p>(t/U)c ≈ 0.034 (n̄ = 1, 3D)</p>
        <p><strong>能隙：</strong></p>
        <p>Δ ≈ U - 2zt (Mott相中)</p>
      </div>

      <div class="theory-box">
        <h4>维度效应</h4>
        <ul>
          <li><strong>一维：</strong>任意小U都能产生Mott相</li>
          <li><strong>二维：</strong>有限临界相互作用强度</li>
          <li><strong>三维：</strong>平均场理论较好适用</li>
          <li><strong>高维：</strong>平均场结果精确</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验实现</h2>
      
      <h3>光晶格中的冷原子</h3>
      <div class="experiment-box">
        <h4>实验参数控制</h4>
        <ul>
          <li><strong>晶格深度：</strong>控制跳跃积分 t</li>
          <li><strong>散射长度：</strong>通过Feshbach共振调节 U</li>
          <li><strong>粒子数：</strong>控制化学势 μ</li>
          <li><strong>温度：</strong>量子简并条件</li>
        </ul>
      </div>

      <h3>观测方法</h3>
      <div class="experiment-box">
        <h4>实验探测技术</h4>
        <ul>
          <li><strong>飞行时间：</strong>动量分布测量</li>
          <li><strong>原位成像：</strong>密度分布观测</li>
          <li><strong>干涉测量：</strong>相干性检验</li>
          <li><strong>激发谱：</strong>Bragg散射谱学</li>
        </ul>
      </div>

      <h3>实验结果</h3>
      <div class="experiment-box">
        <h4>关键实验发现</h4>
        <ul>
          <li><strong>相变观测：</strong>超流-Mott相变的直接观测</li>
          <li><strong>Mott壳层：</strong>谐振子势中的Mott壳层结构</li>
          <li><strong>激发能隙：</strong>Mott相中能隙的测量</li>
          <li><strong>临界行为：</strong>相变附近的临界现象</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论扩展</h2>
      
      <h3>扩展Hubbard模型</h3>
      <div class="theory-box">
        <h4>模型扩展</h4>
        <ul>
          <li><strong>长程相互作用：</strong>偶极-偶极相互作用</li>
          <li><strong>多组分系统：</strong>自旋-轨道耦合</li>
          <li><strong>无序系统：</strong>Anderson局域化</li>
          <li><strong>非平衡态：</strong>驱动系统</li>
        </ul>
      </div>

      <h3>高级理论方法</h3>
      <div class="theory-box">
        <h4>理论工具</h4>
        <ul>
          <li><strong>动力学平均场：</strong>DMFT方法</li>
          <li><strong>密度矩阵重整化：</strong>DMRG算法</li>
          <li><strong>张量网络：</strong>PEPS和MERA</li>
          <li><strong>机器学习：</strong>神经网络量子态</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>应用前景</h2>
      
      <h3>量子模拟</h3>
      <div class="application-box">
        <h4>模拟应用</h4>
        <ul>
          <li><strong>强关联系统：</strong>高温超导机制</li>
          <li><strong>量子磁性：</strong>自旋液体和磁序</li>
          <li><strong>拓扑相：</strong>拓扑绝缘体和超导体</li>
          <li><strong>非平衡态：</strong>量子淬火和弛豫</li>
        </ul>
      </div>

      <h3>量子技术</h3>
      <div class="application-box">
        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>量子比特和量子门</li>
          <li><strong>量子传感：</strong>精密测量和计量</li>
          <li><strong>量子存储：</strong>量子信息存储</li>
          <li><strong>量子网络：</strong>量子通信协议</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          通过分析Bose-Hubbard模型的几个重要极限，我们深入理解了晶格玻色子系统的丰富物理。
          弱相互作用极限展现了超流相的Bogoliubov激发谱和长程相干性，
          强相互作用极限揭示了Mott绝缘体的能隙结构和局域化特征。
          平均场理论提供了相图的定性理解，而量子蒙特卡罗计算给出了精确的数值结果。
          这些理论分析不仅加深了我们对超流-Mott相变的理解，
          也为光晶格中冷原子实验和量子模拟应用提供了重要的理论指导。
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