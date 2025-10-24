<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">11.2.5 序参量和规范对称破缺</h1>
      <p class="chapter-subtitle">Order Parameter and Gauge Symmetry Breaking</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        序参量和规范对称破缺是理解玻色-爱因斯坦凝聚和超流现象的核心概念。序参量描述了系统从对称相到破缺相的转变，
        而规范对称破缺则解释了超流现象的微观机制。本节将深入探讨这些概念及其在BEC中的应用。
      </p>
    </div>

    <div class="content-section">
      <h2>序参量的概念</h2>
      
      <h3>序参量的定义</h3>
      <div class="formula-box">
        <p><strong>复序参量：</strong></p>
        <p>Ψ(r) = √n₀ e^(iφ(r))</p>
        <p>其中 n₀ 是凝聚体密度，φ(r) 是相位</p>
      </div>

      <div class="concept-box">
        <h4>序参量的物理意义</h4>
        <ul>
          <li><strong>振幅：</strong>|Ψ| = √n₀ 表示凝聚体密度</li>
          <li><strong>相位：</strong>φ(r) 描述量子相干性</li>
          <li><strong>对称性：</strong>反映U(1)规范对称性</li>
          <li><strong>非零值：</strong>表示对称性自发破缺</li>
        </ul>
      </div>

      <h3>Ginzburg-Landau理论</h3>
      <div class="formula-box">
        <p><strong>自由能泛函：</strong></p>
        <p>F[Ψ] = ∫ d³r [α|Ψ|² + β|Ψ|⁴ + γ|∇Ψ|²]</p>
        <p>其中 α = α₀(T - Tc)，β > 0，γ > 0</p>
      </div>

      <div class="theory-box">
        <h4>GL理论的预测</h4>
        <ul>
          <li><strong>临界温度：</strong>T < Tc 时序参量非零</li>
          <li><strong>相干长度：</strong>ξ = √(γ/|α|)</li>
          <li><strong>临界指数：</strong>|Ψ|² ∝ (Tc - T)^β</li>
          <li><strong>涨落效应：</strong>临界点附近的涨落</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>规范对称性</h2>
      
      <h3>U(1)规范对称性</h3>
      <div class="concept-box">
        <h4>对称性变换</h4>
        <ul>
          <li><strong>全局变换：</strong>Ψ → Ψ e^(iθ)</li>
          <li><strong>局域变换：</strong>Ψ(r) → Ψ(r) e^(iθ(r))</li>
          <li><strong>规范场：</strong>A_μ → A_μ + ∂_μθ</li>
          <li><strong>协变导数：</strong>D_μ = ∂_μ - iqA_μ</li>
        </ul>
      </div>

      <h3>规范不变的拉格朗日量</h3>
      <div class="formula-box">
        <p><strong>拉格朗日密度：</strong></p>
        <p>ℒ = |D_μΨ|² - V(|Ψ|²) - ¼F_μν F^μν</p>
        <p>其中 F_μν = ∂_μA_ν - ∂_νA_μ</p>
      </div>

      <div class="theory-box">
        <h4>Noether定理的应用</h4>
        <ul>
          <li><strong>守恒流：</strong>j_μ = iq(Ψ*D_μΨ - ΨD_μΨ*)</li>
          <li><strong>粒子数守恒：</strong>∂_μj^μ = 0</li>
          <li><strong>超流速度：</strong>v_s = ∇φ/m</li>
          <li><strong>量子化条件：</strong>∮ v_s·dl = 2πℏn/m</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>自发对称破缺</h2>
      
      <h3>对称破缺机制</h3>
      <div class="concept-box">
        <h4>破缺过程</h4>
        <ul>
          <li><strong>基态简并：</strong>无穷多个等价基态</li>
          <li><strong>自发选择：</strong>系统选择特定相位</li>
          <li><strong>Goldstone模式：</strong>相位涨落的无能隙激发</li>
          <li><strong>长程序：</strong>非对角长程关联</li>
        </ul>
      </div>

      <h3>Goldstone定理</h3>
      <div class="formula-box">
        <p><strong>Goldstone模式色散：</strong></p>
        <p>ω_G(k) = c|k| (k → 0)</p>
        <p>其中 c 是声速</p>
      </div>

      <div class="theory-box">
        <h4>Goldstone模式的性质</h4>
        <ul>
          <li><strong>无能隙：</strong>ω(k=0) = 0</li>
          <li><strong>线性色散：</strong>低动量下ω ∝ k</li>
          <li><strong>相位涨落：</strong>对应序参量相位变化</li>
          <li><strong>集体激发：</strong>密度波和相位波</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>超流现象</h2>
      
      <h3>超流速度场</h3>
      <div class="formula-box">
        <p><strong>速度场定义：</strong></p>
        <p>v_s(r) = (ℏ/m)∇φ(r)</p>
        <p><strong>无旋条件：</strong></p>
        <p>∇ × v_s = 0 (无涡旋时)</p>
      </div>

      <div class="concept-box">
        <h4>超流的特征</h4>
        <ul>
          <li><strong>无粘滞流动：</strong>零粘滞系数</li>
          <li><strong>量子涡旋：</strong>量子化的环流</li>
          <li><strong>临界速度：</strong>Landau判据</li>
          <li><strong>持续流：</strong>无能量耗散</li>
        </ul>
      </div>

      <h3>量子涡旋</h3>
      <div class="formula-box">
        <p><strong>涡旋解：</strong></p>
        <p>Ψ(r,θ) = f(r) e^(inθ)</p>
        <p><strong>环流量子化：</strong></p>
        <p>Γ = ∮ v_s·dl = 2πℏn/m</p>
      </div>

      <div class="theory-box">
        <h4>涡旋的性质</h4>
        <ul>
          <li><strong>拓扑稳定：</strong>拓扑保护的激发</li>
          <li><strong>量子化：</strong>环流为ℏ/m的整数倍</li>
          <li><strong>涡旋核：</strong>序参量为零的区域</li>
          <li><strong>相互作用：</strong>涡旋间的对数相互作用</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>相变理论</h2>
      
      <h3>Berezinskii-Kosterlitz-Thouless转变</h3>
      <div class="concept-box">
        <h4>BKT相变特征</h4>
        <ul>
          <li><strong>拓扑相变：</strong>涡旋-反涡旋对的解束缚</li>
          <li><strong>无序参量：</strong>没有局域序参量</li>
          <li><strong>代数衰减：</strong>关联函数的幂律衰减</li>
          <li><strong>普适跳跃：</strong>超流密度的普适跳跃</li>
        </ul>
      </div>

      <h3>有限尺寸效应</h3>
      <div class="formula-box">
        <p><strong>相干长度：</strong></p>
        <p>ξ(T) = ξ₀(T/Tc - 1)^(-ν)</p>
        <p>其中 ν ≈ 2/3 是临界指数</p>
      </div>

      <div class="theory-box">
        <h4>尺寸效应的影响</h4>
        <ul>
          <li><strong>临界温度移动：</strong>Tc(L) < Tc(∞)</li>
          <li><strong>涨落增强：</strong>有限尺寸涨落</li>
          <li><strong>相变圆滑化：</strong>尖锐相变的圆滑化</li>
          <li><strong>标度行为：</strong>有限尺寸标度律</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测</h2>
      
      <h3>相干性测量</h3>
      <div class="experiment-box">
        <h4>干涉实验</h4>
        <ul>
          <li><strong>双缝干涉：</strong>观测相位相干性</li>
          <li><strong>Ramsey干涉：</strong>测量相位演化</li>
          <li><strong>原子激光：</strong>相干原子束</li>
          <li><strong>Josephson效应：</strong>弱连接的相位差</li>
        </ul>
      </div>

      <h3>涡旋观测</h3>
      <div class="experiment-box">
        <h4>涡旋检测方法</h4>
        <ul>
          <li><strong>飞行时间成像：</strong>涡旋核的直接观测</li>
          <li><strong>相位成像：</strong>相位奇点的探测</li>
          <li><strong>干涉条纹：</strong>涡旋的干涉图样</li>
          <li><strong>旋转实验：</strong>人工产生涡旋</li>
        </ul>
      </div>

      <h3>超流性质测量</h3>
      <div class="experiment-box">
        <h4>超流特性</h4>
        <ul>
          <li><strong>临界速度：</strong>超流破坏的临界条件</li>
          <li><strong>持续流：</strong>环形几何中的持续流动</li>
          <li><strong>声速测量：</strong>Bogoliubov激发谱</li>
          <li><strong>涡旋格子：</strong>快速旋转下的涡旋阵列</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论发展</h2>
      
      <h3>现代理论方法</h3>
      <div class="theory-box">
        <h4>高级理论工具</h4>
        <ul>
          <li><strong>路径积分：</strong>量子涨落的处理</li>
          <li><strong>重整化群：</strong>临界现象的分析</li>
          <li><strong>拓扑场论：</strong>拓扑激发的描述</li>
          <li><strong>数值模拟：</strong>蒙特卡罗方法</li>
        </ul>
      </div>

      <h3>扩展应用</h3>
      <div class="concept-box">
        <h4>相关系统</h4>
        <ul>
          <li><strong>超导体：</strong>Cooper对的凝聚</li>
          <li><strong>液晶：</strong>取向序的破缺</li>
          <li><strong>磁性系统：</strong>自旋序的建立</li>
          <li><strong>宇宙学：</strong>早期宇宙的相变</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>应用前景</h2>
      
      <h3>量子技术应用</h3>
      <div class="application-box">
        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>拓扑量子比特</li>
          <li><strong>精密测量：</strong>原子干涉仪</li>
          <li><strong>量子模拟：</strong>复杂系统的模拟</li>
          <li><strong>量子传感：</strong>高精度传感器</li>
        </ul>
      </div>

      <h3>基础物理研究</h3>
      <div class="application-box">
        <h4>研究方向</h4>
        <ul>
          <li><strong>多体物理：</strong>强关联系统</li>
          <li><strong>拓扑物理：</strong>拓扑相和相变</li>
          <li><strong>非平衡态：</strong>动力学相变</li>
          <li><strong>人工规范场：</strong>合成维度</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          序参量和规范对称破缺为理解BEC和超流现象提供了深刻的理论框架。复序参量Ψ描述了系统的量子相干性，
          其非零值标志着U(1)对称性的自发破缺。这种破缺导致了Goldstone模式的出现和超流现象的产生。
          量子涡旋作为拓扑激发，体现了系统的拓扑性质。BKT相变理论进一步揭示了二维系统中的拓扑相变机制。
          这些概念不仅在凝聚态物理中具有重要意义，在粒子物理、宇宙学等领域也有广泛应用。
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