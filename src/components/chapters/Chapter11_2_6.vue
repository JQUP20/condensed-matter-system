<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.2.6 非对角长程序</h1>
      <p class="chapter-subtitle">Off-Diagonal Long-Range Order</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        非对角长程序(ODLRO)是描述玻色-爱因斯坦凝聚和超流现象的核心概念，由Yang在1962年首次提出。
        它通过单粒子密度矩阵的非对角元素来刻画量子多体系统中的长程量子相干性，
        为理解BEC的本质提供了深刻的物理洞察。
      </p>
    </div>

    <div class="content-section">
      <h2>单粒子密度矩阵</h2>
      
      <h3>密度矩阵的定义</h3>
      <div class="formula-box">
        <p><strong>单粒子约化密度矩阵：</strong></p>
        <p>ρ₁(r,r') = ⟨Ψ†(r')Ψ(r)⟩</p>
        <p>其中 Ψ(r) 是场算符</p>
      </div>

      <div class="concept-box">
        <h4>密度矩阵的性质</h4>
        <ul>
          <li><strong>厄米性：</strong>ρ₁(r,r') = ρ₁*(r',r)</li>
          <li><strong>正定性：</strong>所有本征值非负</li>
          <li><strong>归一化：</strong>Tr[ρ₁] = N (总粒子数)</li>
          <li><strong>对角元：</strong>ρ₁(r,r) = n(r) (局域密度)</li>
        </ul>
      </div>

      <h3>本征值分解</h3>
      <div class="formula-box">
        <p><strong>谱分解：</strong></p>
        <p>ρ₁(r,r') = Σᵢ nᵢ φᵢ*(r') φᵢ(r)</p>
        <p>其中 nᵢ 是占据数，φᵢ(r) 是自然轨道</p>
      </div>

      <div class="theory-box">
        <h4>自然轨道的意义</h4>
        <ul>
          <li><strong>最大占据：</strong>最大本征值对应的轨道</li>
          <li><strong>宏观占据：</strong>BEC中 n₀ ~ O(N)</li>
          <li><strong>正交完备：</strong>构成完备的单粒子基</li>
          <li><strong>物理意义：</strong>描述量子相干的空间结构</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>非对角长程序的定义</h2>
      
      <h3>ODLRO判据</h3>
      <div class="formula-box">
        <p><strong>Yang的定义：</strong></p>
        <p>lim |r-r'|→∞ ρ₁(r,r') = n₀ φ₀*(r') φ₀(r)</p>
        <p>当 n₀ > 0 时，系统具有ODLRO</p>
      </div>

      <div class="concept-box">
        <h4>ODLRO的特征</h4>
        <ul>
          <li><strong>长程相干：</strong>空间分离的点间保持相位关联</li>
          <li><strong>宏观占据：</strong>单一量子态的宏观占据</li>
          <li><strong>对称破缺：</strong>U(1)规范对称性的自发破缺</li>
          <li><strong>超流性：</strong>无摩擦流动的量子基础</li>
        </ul>
      </div>

      <h3>关联函数表示</h3>
      <div class="formula-box">
        <p><strong>一阶相干函数：</strong></p>
        <p>g⁽¹⁾(r,r') = ⟨Ψ†(r')Ψ(r)⟩/√(n(r)n(r'))</p>
        <p><strong>ODLRO条件：</strong></p>
        <p>lim |r-r'|→∞ |g⁽¹⁾(r,r')| > 0</p>
      </div>

      <div class="theory-box">
        <h4>相干函数的物理意义</h4>
        <ul>
          <li><strong>归一化：</strong>|g⁽¹⁾(r,r')| ≤ 1</li>
          <li><strong>局域值：</strong>g⁽¹⁾(r,r) = 1</li>
          <li><strong>相位信息：</strong>包含相对相位</li>
          <li><strong>干涉可见度：</strong>决定干涉条纹对比度</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理想玻色气体中的ODLRO</h2>
      
      <h3>均匀系统</h3>
      <div class="formula-box">
        <p><strong>T < Tc 时的密度矩阵：</strong></p>
        <p>ρ₁(r,r') = n₀ + Σₖ≠₀ nₖ e^(ik·(r-r'))</p>
        <p>其中 n₀ 是凝聚体密度</p>
      </div>

      <div class="concept-box">
        <h4>均匀BEC的特点</h4>
        <ul>
          <li><strong>常数项：</strong>n₀ 提供长程序</li>
          <li><strong>振荡项：</strong>激发态贡献快速衰减</li>
          <li><strong>相干长度：</strong>热de Broglie波长</li>
          <li><strong>凝聚分数：</strong>n₀/n 随温度变化</li>
        </ul>
      </div>

      <h3>谐振子势阱</h3>
      <div class="formula-box">
        <p><strong>基态波函数：</strong></p>
        <p>φ₀(r) = (mω/πℏ)^(3/4) exp(-mωr²/2ℏ)</p>
        <p><strong>ODLRO：</strong></p>
        <p>ρ₁(r,r') ≈ n₀ φ₀*(r') φ₀(r) + ...</p>
      </div>

      <div class="theory-box">
        <h4>束缚系统的特征</h4>
        <ul>
          <li><strong>高斯分布：</strong>基态为高斯型</li>
          <li><strong>空间局域：</strong>波函数空间局域化</li>
          <li><strong>Thomas-Fermi极限：</strong>强相互作用下的修正</li>
          <li><strong>集体激发：</strong>影响ODLRO的衰减</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>相互作用系统中的ODLRO</h2>
      
      <h3>Bogoliubov理论</h3>
      <div class="formula-box">
        <p><strong>准粒子变换：</strong></p>
        <p>αₖ = uₖaₖ - vₖa†₋ₖ</p>
        <p><strong>修正的密度矩阵：</strong></p>
        <p>ρ₁(r,r') = n₀ψ₀*(r')ψ₀(r) + δρ₁(r,r')</p>
      </div>

      <div class="concept-box">
        <h4>相互作用的影响</h4>
        <ul>
          <li><strong>量子耗尽：</strong>凝聚分数减少</li>
          <li><strong>关联效应：</strong>粒子间关联增强</li>
          <li><strong>激发谱修正：</strong>Bogoliubov谱</li>
          <li><strong>长程尾巴：</strong>相互作用引起的长程关联</li>
        </ul>
      </div>

      <h3>强相互作用极限</h3>
      <div class="formula-box">
        <p><strong>Tonks-Girardeau气体：</strong></p>
        <p>ρ₁(x,x') = n sin(πn|x-x'|)/(πn|x-x'|)</p>
        <p>无ODLRO，但有准长程序</p>
      </div>

      <div class="theory-box">
        <h4>一维系统的特殊性</h4>
        <ul>
          <li><strong>无真正BEC：</strong>一维系统无长程序</li>
          <li><strong>准长程序：</strong>幂律衰减的关联</li>
          <li><strong>Luttinger液体：</strong>一维强关联系统</li>
          <li><strong>量子涨落：</strong>维度效应的重要性</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>有限温度效应</h2>
      
      <h3>热涨落的影响</h3>
      <div class="formula-box">
        <p><strong>有限温度密度矩阵：</strong></p>
        <p>ρ₁(r,r') = n₀(T)ψ₀*(r')ψ₀(r) + ρ₁^th(r,r')</p>
        <p>其中 ρ₁^th 是热激发贡献</p>
      </div>

      <div class="concept-box">
        <h4>温度依赖性</h4>
        <ul>
          <li><strong>凝聚分数：</strong>n₀(T)/n 随T增加而减少</li>
          <li><strong>相干长度：</strong>ξ(T) ~ ℏ/√(mkᵦT)</li>
          <li><strong>临界行为：</strong>T → Tc 时的奇异性</li>
          <li><strong>涨落效应：</strong>临界涨落的增强</li>
        </ul>
      </div>

      <h3>Berezinskii-Kosterlitz-Thouless转变</h3>
      <div class="formula-box">
        <p><strong>二维系统的关联函数：</strong></p>
        <p>⟨Ψ†(r)Ψ(0)⟩ ~ r^(-η(T))</p>
        <p>其中 η(T) 是温度依赖的指数</p>
      </div>

      <div class="theory-box">
        <h4>BKT相变特征</h4>
        <ul>
          <li><strong>拓扑相变：</strong>涡旋-反涡旋对的解束缚</li>
          <li><strong>代数衰减：</strong>幂律关联函数</li>
          <li><strong>普适跳跃：</strong>超流密度的跳跃</li>
          <li><strong>无序参量：</strong>没有局域序参量</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验测量方法</h2>
      
      <h3>干涉实验</h3>
      <div class="experiment-box">
        <h4>干涉测量技术</h4>
        <ul>
          <li><strong>双缝干涉：</strong>测量一阶相干函数</li>
          <li><strong>Hanbury Brown-Twiss：</strong>二阶相干性</li>
          <li><strong>原子激光：</strong>相干原子束的产生</li>
          <li><strong>Ramsey干涉：</strong>相位演化测量</li>
        </ul>
      </div>

      <h3>飞行时间成像</h3>
      <div class="experiment-box">
        <h4>动量分布测量</h4>
        <ul>
          <li><strong>释放膨胀：</strong>原位动量分布的映射</li>
          <li><strong>凝聚峰：</strong>零动量处的尖锐峰</li>
          <li><strong>热翼：</strong>激发态的宽分布</li>
          <li><strong>各向异性：</strong>势阱形状的影响</li>
        </ul>
      </div>

      <h3>相位成像技术</h3>
      <div class="experiment-box">
        <h4>相位测量方法</h4>
        <ul>
          <li><strong>相位对比成像：</strong>直接相位测量</li>
          <li><strong>干涉条纹分析：</strong>相位差的提取</li>
          <li><strong>涡旋检测：</strong>相位奇点的观测</li>
          <li><strong>相位涨落：</strong>量子噪声的测量</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论发展与应用</h2>
      
      <h3>现代理论方法</h3>
      <div class="theory-box">
        <h4>高级理论工具</h4>
        <ul>
          <li><strong>量子蒙特卡罗：</strong>精确数值计算</li>
          <li><strong>密度泛函理论：</strong>非均匀系统</li>
          <li><strong>重整化群：</strong>临界现象分析</li>
          <li><strong>场论方法：</strong>连续极限描述</li>
        </ul>
      </div>

      <h3>扩展概念</h3>
      <div class="concept-box">
        <h4>相关概念</h4>
        <ul>
          <li><strong>k-体ODLRO：</strong>高阶关联的长程序</li>
          <li><strong>分数统计：</strong>任意子系统</li>
          <li><strong>拓扑序：</strong>拓扑保护的长程纠缠</li>
          <li><strong>多体局域化：</strong>无序系统中的相干性</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与前景</h2>
      
      <h3>量子技术应用</h3>
      <div class="application-box">
        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>相干性的保持和操控</li>
          <li><strong>精密测量：</strong>原子干涉仪</li>
          <li><strong>量子模拟：</strong>复杂量子系统的模拟</li>
          <li><strong>量子传感：</strong>高精度传感器</li>
        </ul>
      </div>

      <h3>基础物理研究</h3>
      <div class="application-box">
        <h4>研究方向</h4>
        <ul>
          <li><strong>多体纠缠：</strong>量子纠缠的集体性质</li>
          <li><strong>非平衡态：</strong>动力学相变和弛豫</li>
          <li><strong>人工规范场：</strong>合成维度和拓扑</li>
          <li><strong>强关联系统：</strong>Hubbard模型等</li>
        </ul>
      </div>

      <h3>跨学科应用</h3>
      <div class="application-box">
        <h4>其他领域</h4>
        <ul>
          <li><strong>超导理论：</strong>Cooper对的ODLRO</li>
          <li><strong>量子光学：</strong>光子的相干性</li>
          <li><strong>核物理：</strong>核超流和配对</li>
          <li><strong>宇宙学：</strong>早期宇宙的相变</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          非对角长程序为理解玻色-爱因斯坦凝聚提供了深刻的理论框架。通过单粒子密度矩阵的非对角元素，
          ODLRO刻画了量子多体系统中的长程量子相干性，揭示了BEC和超流现象的本质。
          从理想气体到强相互作用系统，从零温到有限温度，ODLRO概念都提供了统一的描述。
          现代实验技术使得ODLRO的直接测量成为可能，而理论的不断发展也拓展了其应用范围。
          ODLRO不仅是凝聚态物理的核心概念，也在量子技术和基础物理研究中发挥着重要作用。
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