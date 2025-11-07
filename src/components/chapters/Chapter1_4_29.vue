<template>
  <div class="quantum-phase-transition-page">
    <div class="page-header">
      <h1>1.4.29 量子相变 (Quantum Phase Transition)</h1>
      <p class="subtitle">零温相变、量子临界点与量子临界现象</p>
    </div>

    <div class="content-container">
      <!-- 概述与历史背景 -->
      <section class="section">
        <h2>概述与历史背景</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>基本概念</h3>
            <p>量子相变是指在绝对零度下，由量子涨落驱动的相变现象。与经典相变不同，量子相变完全由量子力学效应主导，不涉及热涨落。</p>
            <div class="formula-box">
              <p><strong>量子相变条件：</strong></p>
              <p>T = 0, 调节参数 g 通过临界值 g<sub>c</sub></p>
            </div>
          </div>
          <div class="theory-card">
            <h3>历史发展</h3>
            <ul>
              <li><strong>1976年：</strong>Hertz提出量子相变理论框架</li>
              <li><strong>1989年：</strong>Sachdev发展量子临界现象理论</li>
              <li><strong>1990年代：</strong>高温超导体中量子临界点发现</li>
              <li><strong>2000年代：</strong>冷原子系统实现可控量子相变</li>
              <li><strong>近年来：</strong>机器学习在量子相变研究中的应用</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 量子相变的基本理论 -->
      <section class="section">
        <h2>量子相变的基本理论</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>量子涨落与经典涨落</h3>
            <p>在量子相变中，系统的基态性质发生突变，这种变化由量子涨落驱动：</p>
            <div class="formula-box">
              <p><strong>不确定性原理：</strong></p>
              <p>Δx Δp ≥ ℏ/2</p>
              <p><strong>零点能：</strong></p>
              <p>E₀ = ℏω/2</p>
            </div>
          </div>
          <div class="theory-card">
            <h3>调节参数</h3>
            <p>量子相变通过非热参数调节：</p>
            <ul>
              <li><strong>磁场：</strong>外加磁场强度</li>
              <li><strong>压强：</strong>静水压或单轴压</li>
              <li><strong>掺杂：</strong>载流子浓度</li>
              <li><strong>几何参数：</strong>晶格常数、层间距</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 量子临界点理论 -->
      <section class="section">
        <h2>量子临界点理论</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>Hertz-Millis理论</h3>
            <p>描述量子临界点附近的有效理论：</p>
            <div class="formula-box">
              <p><strong>有效作用量：</strong></p>
              <p>S = ∫ d^d x dτ [½(∂φ/∂τ)² + ½c²(∇φ)² + ½r φ² + u φ⁴]</p>
              <p><strong>动力学临界指数：</strong></p>
              <p>z = 2 (对于φ⁴理论)</p>
            </div>
          </div>
          <div class="theory-card">
            <h3>标度律</h3>
            <p>量子临界点附近的标度行为：</p>
            <div class="formula-box">
              <p><strong>关联长度：</strong></p>
              <p>ξ ~ |g - g<sub>c</sub>|<sup>-ν</sup></p>
              <p><strong>关联时间：</strong></p>
              <p>τ ~ ξ<sup>z</sup> ~ |g - g<sub>c</sub>|<sup>-νz</sup></p>
              <p><strong>能隙：</strong></p>
              <p>Δ ~ |g - g<sub>c</sub>|<sup>νz</sup></p>
            </div>
          </div>
        </div>
      </section>

      <!-- 量子临界现象 -->
      <section class="section">
        <h2>量子临界现象</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>有限温度标度</h3>
            <p>量子临界点对有限温度性质的影响：</p>
            <div class="formula-box">
              <p><strong>标度函数：</strong></p>
              <p>F(T, g) = T<sup>d/z</sup> f(|g - g<sub>c</sub>|/T<sup>1/(νz)</sup>)</p>
              <p><strong>量子临界区域：</strong></p>
              <p>T ≪ |g - g<sub>c</sub>|<sup>νz</sup></p>
            </div>
          </div>
          <div class="theory-card">
            <h3>非费米液体行为</h3>
            <p>量子临界点附近的异常金属行为：</p>
            <ul>
              <li><strong>电阻率：</strong>ρ ~ T^n (n ≠ 2)</li>
              <li><strong>比热：</strong>C/T ~ -log T 或幂律行为</li>
              <li><strong>磁化率：</strong>χ ~ T^(-α)</li>
              <li><strong>谱函数：</strong>边缘费米液体行为</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 量子相变的分类 -->
      <section class="section">
        <h2>量子相变的分类</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>连续量子相变</h3>
            <p>序参量连续变化的量子相变：</p>
            <ul>
              <li><strong>横场Ising模型：</strong>顺磁-铁磁相变</li>
              <li><strong>Bose-Hubbard模型：</strong>Mott绝缘体-超流相变</li>
              <li><strong>量子反铁磁：</strong>Néel态-量子自旋液体</li>
              <li><strong>金属-绝缘体相变：</strong>Anderson局域化</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>拓扑量子相变</h3>
            <p>拓扑性质改变的量子相变：</p>
            <div class="formula-box">
              <p><strong>拓扑不变量：</strong></p>
              <p>ν = (1/2π) ∫ dk · A(k)</p>
              <p><strong>边界态：</strong></p>
              <p>体-边对应原理</p>
            </div>
            <ul>
              <li><strong>量子霍尔相变</strong></li>
              <li><strong>拓扑绝缘体相变</strong></li>
              <li><strong>Kitaev链相变</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 实验实现与观测 -->
      <section class="section">
        <h2>实验实现与观测</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>典型材料系统</h3>
            <ul>
              <li><strong>重费米子化合物：</strong>CeCu₆₋ₓAuₓ, YbRh₂Si₂</li>
              <li><strong>量子磁体：</strong>TlCuCl₃, BaCuSi₂O₆</li>
              <li><strong>高温超导体：</strong>铜氧化物, 铁基超导体</li>
              <li><strong>有机导体：</strong>κ-(BEDT-TTF)₂Cu[N(CN)₂]Br</li>
              <li><strong>二维材料：</strong>石墨烯, 过渡金属硫化物</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>冷原子系统</h3>
            <p>高度可控的量子相变实现：</p>
            <ul>
              <li><strong>光晶格中的Bose-Hubbard模型</strong></li>
              <li><strong>Feshbach共振调节相互作用</strong></li>
              <li><strong>人工规范场</strong></li>
              <li><strong>低维系统的实现</strong></li>
            </ul>
            <div class="formula-box">
              <p><strong>Bose-Hubbard哈密顿量：</strong></p>
              <p>H = -t∑⟨i,j⟩(b†ᵢbⱼ + h.c.) + (U/2)∑ᵢnᵢ(nᵢ-1)</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 实验技术 -->
      <section class="section">
        <h2>实验技术</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>输运测量</h3>
            <ul>
              <li><strong>电阻率：</strong>温度和磁场依赖性</li>
              <li><strong>霍尔效应：</strong>载流子浓度变化</li>
              <li><strong>热导率：</strong>声子和电子贡献</li>
              <li><strong>热电效应：</strong>Seebeck系数</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>谱学技术</h3>
            <ul>
              <li><strong>ARPES：</strong>费米面演化</li>
              <li><strong>中子散射：</strong>磁激发谱</li>
              <li><strong>拉曼散射：</strong>声子软化</li>
              <li><strong>NMR/NQR：</strong>局域磁性质</li>
              <li><strong>μSR：</strong>内禀磁场分布</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 理论方法 -->
      <section class="section">
        <h2>理论方法</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>解析方法</h3>
            <ul>
              <li><strong>重整化群：</strong>临界指数计算</li>
              <li><strong>大N展开：</strong>1/N修正</li>
              <li><strong>ε展开：</strong>上临界维度附近</li>
              <li><strong>共形场论：</strong>一维系统</li>
              <li><strong>AdS/CFT对应：</strong>强关联系统</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>数值方法</h3>
            <ul>
              <li><strong>量子蒙特卡罗：</strong>符号问题</li>
              <li><strong>密度矩阵重整化群：</strong>一维和准一维</li>
              <li><strong>张量网络：</strong>高维推广</li>
              <li><strong>精确对角化：</strong>小系统</li>
              <li><strong>变分方法：</strong>神经网络波函数</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 应用与相关领域 -->
      <section class="section">
        <h2>应用与相关领域</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>凝聚态物理应用</h3>
            <ul>
              <li><strong>高温超导机理：</strong>量子临界涨落</li>
              <li><strong>重费米子物理：</strong>Kondo破坏</li>
              <li><strong>量子磁性：</strong>自旋液体态</li>
              <li><strong>拓扑物态：</strong>拓扑相变</li>
              <li><strong>强关联电子系统</strong></li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>量子技术</h3>
            <ul>
              <li><strong>量子计算：</strong>拓扑量子比特</li>
              <li><strong>量子模拟：</strong>人工量子系统</li>
              <li><strong>量子传感：</strong>临界增强</li>
              <li><strong>量子材料设计</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 前沿发展 -->
      <section class="section">
        <h2>前沿发展</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>机器学习方法</h3>
            <ul>
              <li><strong>相变识别：</strong>无监督学习</li>
              <li><strong>序参量发现：</strong>神经网络</li>
              <li><strong>临界指数提取：</strong>深度学习</li>
              <li><strong>波函数优化：</strong>变分神经网络</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>非平衡量子相变</h3>
            <ul>
              <li><strong>驱动系统：</strong>Floquet工程</li>
              <li><strong>开放系统：</strong>耗散相变</li>
              <li><strong>测量诱导相变</strong></li>
              <li><strong>时间晶体</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 开放问题与未来方向 -->
      <section class="section">
        <h2>开放问题与未来方向</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>理论挑战</h3>
            <ul>
              <li><strong>符号问题：</strong>费米子量子蒙特卡罗</li>
              <li><strong>强关联系统：</strong>超越平均场</li>
              <li><strong>非费米液体理论：</strong>奇异金属</li>
              <li><strong>多体局域化：</strong>无序与相互作用</li>
              <li><strong>量子纠缠：</strong>相变中的纠缠结构</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>实验前沿</h3>
            <ul>
              <li><strong>新材料平台：</strong>moiré超晶格</li>
              <li><strong>极端条件：</strong>超高压、强磁场</li>
              <li><strong>时间分辨技术：</strong>飞秒谱学</li>
              <li><strong>单原子操控：</strong>扫描探针</li>
              <li><strong>量子气体显微镜</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 总结 -->
      <section class="section">
        <h2>总结</h2>
        <div class="summary-card">
          <p>量子相变是现代凝聚态物理的核心概念之一，它揭示了量子涨落如何在零温下驱动物质相态的改变。从基本的Hertz-Millis理论到复杂的非费米液体行为，量子相变理论为理解强关联电子系统、高温超导、拓扑物态等前沿问题提供了重要框架。</p>
          
          <p>随着实验技术的进步和理论方法的发展，特别是机器学习、量子模拟等新工具的引入，量子相变研究正在向更深层次和更广泛的应用领域拓展。未来的研究将继续探索新的量子物态、开发更精确的理论描述，并寻求在量子技术中的实际应用。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuantumPhaseTransition',
  mounted() {
    // 添加数学公式渲染
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.quantum-phase-transition-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.page-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 300;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e1e8ed;
}

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
  font-weight: 400;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.theory-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.theory-card h3 {
  color: #2c3e50;
  font-size: 1.3em;
  margin-bottom: 15px;
  font-weight: 500;
}

.theory-card p {
  margin-bottom: 15px;
  color: #555;
}

.theory-card ul {
  list-style-type: none;
  padding-left: 0;
}

.theory-card li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  color: #555;
}

.theory-card li:before {
  content: "▸";
  color: #3498db;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.formula-box {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  border-left: 4px solid #e74c3c;
  font-family: 'Courier New', monospace;
}

.formula-box p {
  margin: 8px 0;
  color: #2c3e50;
}

.formula-box strong {
  color: #e74c3c;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.summary-card p {
  margin-bottom: 20px;
  font-size: 1.1em;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 2em;
  }
  
  .theory-card {
    padding: 20px;
  }
}
</style>