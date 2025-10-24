<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.2 与Kitaev超导链模型的等价</h1>
      <p class="chapter-subtitle">拓扑超导体的理论基础</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解Kitaev超导链模型的基本概念</li>
        <li>掌握量子横场Ising模型与Kitaev模型的等价关系</li>
        <li>学习拓扑相变和Majorana费米子的概念</li>
        <li>理解拓扑保护和量子计算的应用</li>
        <li>掌握边界态和零能模的物理意义</li>
      </ul>
    </div>

    <div class="kitaev-model-introduction">
      <h2>Kitaev超导链模型简介</h2>
      
      <div class="model-overview">
        <h3>模型的提出背景</h3>
        <p>
          2001年，Alexei Kitaev提出了一个一维超导链模型，
          该模型展现了拓扑超导的基本特征，并预言了Majorana费米子的存在。
          这个模型后来成为拓扑量子计算的理论基础。
        </p>
        
        <div class="historical-significance">
          <div class="significance-card">
            <h4>🏆 理论突破</h4>
            <p>
              首次在简单模型中实现了拓扑超导相，
              为理解拓扑物态提供了重要的理论工具。
            </p>
          </div>
          
          <div class="significance-card">
            <h4>🔬 实验指导</h4>
            <p>
              为实验上寻找和制备Majorana费米子
              提供了明确的理论指导。
            </p>
          </div>
          
          <div class="significance-card">
            <h4>💻 量子计算</h4>
            <p>
              Majorana费米子的拓扑保护性质
              使其成为拓扑量子计算的理想候选。
            </p>
          </div>
        </div>
      </div>

      <div class="model-definition">
        <h3>Kitaev模型的定义</h3>
        <p>
          Kitaev超导链的哈密顿量为：
        </p>
        <div class="formula-container">
          $$H_{\text{Kitaev}} = -\mu \sum_j c_j^\dagger c_j - t \sum_j (c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j) + \Delta \sum_j (c_j c_{j+1} + c_{j+1}^\dagger c_j^\dagger)$$</div>
        
        <div class="parameters-explanation">
          <h4>参数说明</h4>
          <div class="parameter-grid"><div class="parameter-card"><h5>化学势$\mu$</h5>
              <p>控制费米子数密度</p><div class="formula-container">$$\mu \sum_j c_j^\dagger c_j$$</div>
            </div><div class="parameter-card"><h5>跃迁强度$t$</h5>
              <p>相邻格点间的费米子跃迁</p><div class="formula-container">$$t \sum_j (c_j^\dagger c_{j+1} + \text{h.c.})$$</div>
            </div><div class="parameter-card"><h5>配对强度$\Delta$</h5>
              <p>p波超导配对</p><div class="formula-container">$$\Delta \sum_j (c_j c_{j+1} + \text{h.c.})$$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="physical-interpretation">
        <h3>物理图像</h3>
        <p>
          Kitaev模型描述了一个具有以下特征的一维系统：
        </p>
        
        <div class="feature-list">
          <div class="feature-item">
            <h4>🔗 p波配对</h4>
            <p>
              不同于传统s波超导体中的Cooper对， Kitaev模型中的配对是p波的，具有奇宇称。</p> <div class="formula-container">$$|\psi\rangle = \prod_j (u_j + v_j c_j^\dagger c_{j+1}^\dagger)|0\rangle$$</div>
          </div>
          
          <div class="feature-item">
            <h4>🎭 自旋极化</h4>
            <p>
              系统中的费米子是自旋极化的，
              这简化了配对的形式。
            </p>
          </div>
          
          <div class="feature-item">
            <h4>🌊 拓扑性质</h4>
            <p>
              系统的基态具有非平凡的拓扑性质，
              由拓扑不变量Z₂分类。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="equivalence-derivation">
      <h2>等价关系的推导</h2>
      
      <div class="transformation-steps">
        <h3>从Ising模型到Kitaev模型</h3>
        <p>
          我们将展示如何从Jordan-Wigner变换后的横场Ising模型
          得到Kitaev超导链模型。
        </p>
        
        <div class="step-by-step">
          <div class="step-card">
            <h4>步骤1：Jordan-Wigner变换后的Ising模型</h4>
            <p> 从前面的推导，我们知道横场Ising模型在Jordan-Wigner变换后为：</p> <div class="formula-container">$$H_{\text{TFIM}} = \sum_j \left[ J c_j^\dagger c_j - \frac{J}{2}(c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j) - \frac{h}{2}(c_j^\dagger + c_j) \right]$$</div>
          </div>
          
          <div class="step-card">
            <h4>步骤2：Majorana费米子表示</h4>
            <p> 引入Majorana费米子算符：</p> <div class="formula-container">$$\gamma_{j,A} = c_j + c_j^\dagger, \quad \gamma_{j,B} = i(c_j^\dagger - c_j)$$</div>
            <p> 反变换为：</p> <div class="formula-container">$$c_j = \frac{1}{2}(\gamma_{j,A} - i\gamma_{j,B}), \quad c_j^\dagger = \frac{1}{2}(\gamma_{j,A} + i\gamma_{j,B})$$</div>
          </div>
          
          <div class="step-card">
            <h4>步骤3：Majorana表示的哈密顿量</h4>
            <p> 将Majorana算符代入，得到：</p> <div class="formula-container">$$H = \frac{i}{4} \sum_j \left[ (J-h) \gamma_{j,B} \gamma_{j+1,A} + (J+h) \gamma_{j,A} \gamma_{j+1,B} \right]$$</div>
          </div>
          
          <div class="step-card">
            <h4>步骤4：重新标记和对比</h4><p>重新标记Majorana费米子：$\gamma_{2j-1} = \gamma_{j,A}$，$\gamma_{2j} = \gamma_{j,B}$</p><div class="formula-container">$$H = \frac{i}{4} \sum_j \left[ (J-h) \gamma_{2j} \gamma_{2j+1} + (J+h) \gamma_{2j-1} \gamma_{2j+2} \right]$$</div>
            <p>
              这正是Kitaev模型在特定参数下的形式！
            </p>
          </div>
        </div>
      </div>

      <div class="parameter-mapping">
        <h3>参数对应关系</h3>
        <p>
          两个模型之间的参数对应关系为：
        </p>
        
        <div class="mapping-table">
          <div class="mapping-row header">
            <div class="ising-param">横场Ising模型</div>
            <div class="arrow">↔</div>
            <div class="kitaev-param">Kitaev模型</div>
          </div>
          
          <div class="mapping-row">
            <div class="ising-param"><strong>Ising耦合</strong><br>$J$</div>
            <div class="arrow">↔</div>
            <div class="kitaev-param"><strong>跃迁 + 配对</strong><br>$t + \Delta$</div>
          </div>
          
          <div class="mapping-row">
            <div class="ising-param"><strong>横场强度</strong><br>$h$</div>
            <div class="arrow">↔</div>
            <div class="kitaev-param"><strong>跃迁 - 配对</strong><br>$t - \Delta$</div>
          </div>
          
          <div class="mapping-row">
            <div class="ising-param"><strong>临界点</strong><br>$h = J$</div>
            <div class="arrow">↔</div>
            <div class="kitaev-param"><strong>拓扑相变</strong><br>$\mu = 2t$</div>
          </div>
        </div>
      </div>

      <div class="exact-correspondence">
        <h3>精确对应关系</h3>
        <p>
          更精确地，两个模型的对应关系为：
        </p>
        
        <div class="correspondence-equations">
          <div class="equation-set">
            <h4>Kitaev → Ising</h4><div class="formula-container">$$J = t + \Delta$$</div> <div class="formula-container">$$h = t - \Delta$$</div> <div class="formula-container">$$\mu = J - h = 2\Delta$$</div>
          </div> <div class="equation-set"><h4>Ising → Kitaev</h4> <div class="formula-container">$$t = \frac{J + h}{2}$$</div> <div class="formula-container">$$\Delta = \frac{J - h}{2}$$</div> <div class="formula-container">$$\mu = J - h$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="topological-phases">
      <h2>拓扑相和相变</h2>
      
      <div class="phase-diagram">
        <h3>相图分析</h3>
        <p>
          Kitaev模型展现了丰富的相图，包括拓扑和平凡两种相：
        </p>
        
        <div class="phase-regions">
          <div class="phase-card topological">
            <h4>拓扑超导相</h4><div class="conditions"><p><strong>条件：</strong>$|\mu| < 2|t|$ 且 $\Delta \neq 0$</p><p><strong>对应Ising：</strong>$|J - h| < J + h$</p>
            </div>
            <div class="characteristics">
              <h5>特征：</h5>
              <ul>
                <li>非平凡拓扑不变量</li>
                <li>边界Majorana零模</li>
                <li>能隙中的边界态</li>
                <li>拓扑保护的简并</li>
              </ul>
            </div>
          </div>
          
          <div class="phase-card trivial">
            <h4>平凡相</h4><div class="conditions"><p><strong>条件：</strong>$|\mu| > 2|t|$ 或 $\Delta = 0$</p><p><strong>对应Ising：</strong>$|J - h| > J + h$</p>
            </div>
            <div class="characteristics">
              <h5>特征：</h5>
              <ul>
                <li>平凡拓扑不变量</li>
                <li>无边界零模</li>
                <li>完全能隙</li>
                <li>无拓扑保护</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="topological-invariant">
        <h3>拓扑不变量</h3>
        <p>
          系统的拓扑性质由Z₂拓扑不变量刻画：
        </p><div class="formula-container">$$\nu = \frac{1}{2\pi i} \oint dk \, \partial_k \ln \det[H(k)]$$</div>
        
        <div class="invariant-calculation">
          <h4>具体计算</h4>
          <p> 对于Kitaev模型，拓扑不变量可以通过以下方式计算：</p> <div class="formula-container">$$\nu = \begin{cases}
            0 & \text{平凡相} \\1 & \text{拓扑相}\end{cases}$$</div>
          
          <p> 判据为：</p> <div class="formula-container">$$\nu = \frac{1}{2}[1 - \text{sgn}(\mu - 2t) \cdot \text{sgn}(\mu + 2t)]$$</div>
        </div>
      </div>

      <div class="phase-transition">
        <h3>拓扑相变</h3>
        <p>
          拓扑相变发生在能隙关闭的点：
        </p>
        
        <div class="transition-points"><div class="transition-card"><h4>相变点1：$\mu = 2t$</h4><div class="formula-container">$$E_{\text{gap}} = |\mu - 2t| = 0$$</div><p>对应Ising模型中的$h = J$</p>
          </div><div class="transition-card"><h4>相变点2：$\mu = -2t$</h4><div class="formula-container">$$E_{\text{gap}} = |\mu + 2t| = 0$$</div>
            <p>对应Ising模型中的另一个临界点</p>
          </div>
        </div>
        
        <div class="universality-class">
          <h4>普适类</h4>
          <p> 拓扑相变属于2D Ising普适类，临界指数为：</p> <div class="formula-container">$$\nu = 1, \quad \beta = \frac{1}{8}, \quad \gamma = \frac{7}{4}$$</div>
        </div>
      </div>
    </div>

    <div class="majorana-fermions">
      <h2>Majorana费米子</h2>
      
      <div class="majorana-concept">
        <h3>Majorana费米子的概念</h3>
        <p> Majorana费米子是自己的反粒子，满足：</p> <div class="formula-container">$$\gamma^\dagger = \gamma$$</div>
        
        <div class="majorana-properties">
          <h4>基本性质</h4>
          <div class="property-grid"> <div class="property-card"><h5>反对易关系</h5> <div class="formula-container">$$\{\gamma_i, \gamma_j\} = 2\delta_{ij}$$</div>
            </div> <div class="property-card"><h5>实数性</h5> <div class="formula-container">$$\gamma_i^* = \gamma_i$$</div>
            </div> <div class="property-card"><h5>厄米性</h5> <div class="formula-container">$$\gamma_i^\dagger = \gamma_i$$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="edge-modes">
        <h3>边界零模</h3>
        <p>
          在拓扑相中，系统边界处存在零能的Majorana模：
        </p>
        
        <div class="edge-analysis"><div class="left-edge"><h4>左边界 ($j = 1$)</h4><div class="formula-container">$$\gamma_L = \gamma_1$$</div>
            <p>局域在左端的Majorana费米子</p>
          </div><div class="right-edge"><h4>右边界 ($j = N$)</h4><div class="formula-container">$$\gamma_R = \gamma_{2N}$$</div>
            <p>局域在右端的Majorana费米子</p>
          </div>
        </div>
        
        <div class="zero-mode-properties">
          <h4>零模的性质</h4><ul><li><strong>零能量</strong>：$E = 0$（精确）</li>
            <li><strong>边界局域</strong>：波函数指数衰减</li>
            <li><strong>拓扑保护</strong>：受拓扑能隙保护</li>
            <li><strong>非阿贝尔统计</strong>：交换产生非平凡相位</li>
          </ul>
        </div>
      </div>

      <div class="fermion-parity">
        <h3>费米子宇称</h3>
        <p>
          两个边界Majorana费米子组成一个普通费米子：
        </p><div class="formula-container">$$f = \frac{1}{2}(\gamma_L + i\gamma_R)$$</div>
        
        <div class="parity-states">
          <h4>宇称本征态</h4>
          <div class="state-grid"> <div class="state-card"><h5>偶宇称态</h5> <div class="formula-container">$$|0\rangle: \quad f|0\rangle = 0$$</div>
              <p>费米子数为偶数</p>
            </div> <div class="state-card"><h5>奇宇称态</h5> <div class="formula-container">$$|1\rangle: \quad f^\dagger|0\rangle$$</div>
              <p>费米子数为奇数</p>
            </div>
          </div>
        </div>
        
        <div class="degeneracy">
          <h4>基态简并</h4>
          <p>
            在拓扑相中，基态是二重简并的，
            对应两种不同的费米子宇称。这种简并受到拓扑保护。
          </p>
        </div>
      </div>
    </div>

    <div class="quantum-computation">
      <h2>拓扑量子计算</h2>
      
      <div class="topological-protection">
        <h3>拓扑保护机制</h3>
        <p>
          Majorana费米子的拓扑保护性质使其成为量子计算的理想候选：
        </p>
        
        <div class="protection-mechanisms">
          <div class="mechanism-card">
            <h4>🛡️ 能隙保护</h4>
            <p>
              零模与激发态之间存在有限能隙， 保护量子信息免受局域扰动影响。</p> <div class="formula-container">$$\Delta E \sim e^{-L/\xi}$$</div><p>其中$L$是系统长度，$\xi$是关联长度</p>
          </div>
          
          <div class="mechanism-card">
            <h4>🔄 非阿贝尔统计</h4>
            <p>
              Majorana费米子的交换产生非平凡的
              幺正变换，可用于量子门操作。
            </p>
          </div>
          
          <div class="mechanism-card">
            <h4>🎯 拓扑简并</h4>
            <p>
              基态简并度由系统的拓扑性质决定，
              不受局域扰动影响。
            </p>
          </div>
        </div>
      </div>

      <div class="quantum-gates">
        <h3>量子门操作</h3>
        <p>
          通过操控Majorana费米子可以实现通用量子计算：
        </p>
        
        <div class="gate-operations">
          <div class="gate-card">
            <h4>编织操作</h4>
            <p>
              通过绝热地交换Majorana费米子的位置
              实现量子门操作。
            </p><div class="formula-container">$$U_{\text{braid}} = e^{i\pi/4 \gamma_i \gamma_j}$$</div>
          </div>
          
          <div class="gate-card">
            <h4>测量操作</h4>
            <p>
              通过测量费米子宇称实现 量子态的投影测量。</p> <div class="formula-container">$$P_{\pm} = \frac{1 \pm i\gamma_i \gamma_j}{2}$$</div>
          </div>
        </div>
      </div>

      <div class="advantages">
        <h3>拓扑量子计算的优势</h3>
        
        <div class="advantage-list">
          <div class="advantage-item">
            <h4>🔒 内在保护</h4>
            <p>
              量子信息由拓扑性质保护，
              不需要主动的量子纠错。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>⚡ 高保真度</h4>
            <p>
              量子门操作的保真度由能隙决定，
              可以达到很高的精度。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>🎛️ 可扩展性</h4>
            <p>
              多个Majorana费米子可以构成
              更大的量子计算系统。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="experimental-realization">
      <h2>实验实现</h2>
      
      <div class="experimental-platforms">
        <h3>实验平台</h3>
        <p>
          目前有多种实验平台被用于寻找和操控Majorana费米子：
        </p>
        
        <div class="platform-grid">
          <div class="platform-card">
            <h4>🧲 磁性原子链</h4>
            <p>
              在超导体表面放置磁性原子链，
              通过近邻效应诱导拓扑超导。
            </p>
            <div class="examples">
              <strong>例子：</strong> Fe原子链/Pb超导体
            </div>
          </div>
          
          <div class="platform-card">
            <h4>🔌 半导体纳米线</h4>
            <p>
              具有强自旋轨道耦合的半导体纳米线
              与超导体和磁场结合。
            </p>
            <div class="examples">
              <strong>例子：</strong> InAs/Al异质结构
            </div>
          </div>
          
          <div class="platform-card">
            <h4>🌊 量子阱</h4>
            <p>
              二维电子气系统中的
              拓扑超导边界态。
            </p>
            <div class="examples">
              <strong>例子：</strong> HgTe/CdTe量子阱
            </div>
          </div>
        </div>
      </div>

      <div class="experimental-signatures">
        <h3>实验特征</h3>
        <p>
          Majorana费米子的实验特征包括：
        </p>
        
        <div class="signature-list">
          <div class="signature-item">
            <h4>零偏压峰</h4>
            <p>
              隧穿谱中在零偏压处出现的尖锐峰， 对应零能Majorana模。</p> <div class="formula-container">$$G(V) \propto \delta(eV)$$</div>
          </div>
          
          <div class="signature-item">
            <h4>量子化电导</h4>
            <p>
              零偏压电导的量子化值， 反映Majorana费米子的特殊性质。</p> <div class="formula-container">$$G_0 = \frac{2e^2}{h}$$
            </div>
          </div>
          
          <div class="signature-item">
            <h4>4π周期性</h4>
            <p>
              Josephson结中的4π周期性，
              反映Majorana费米子的非阿贝尔性质。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          本节建立了量子横场Ising模型与Kitaev超导链模型的等价关系：
        </p>
        <ul>
          <li><strong>理论等价</strong>：通过Jordan-Wigner变换和Majorana表示建立精确对应</li>
          <li><strong>拓扑相变</strong>：Ising模型的量子相变对应Kitaev模型的拓扑相变</li>
          <li><strong>Majorana费米子</strong>：拓扑相中存在受保护的边界零模</li>
          <li><strong>量子计算</strong>：为拓扑量子计算提供了理论基础</li>
        </ul>
        <p>
          这一等价关系不仅加深了我们对量子相变的理解，
          也为实现拓扑量子计算开辟了新的道路。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 等价关系推导</h4>
          <p>详细推导横场Ising模型与Kitaev模型的等价关系。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 拓扑不变量计算</h4>
          <p>计算Kitaev模型的Z₂拓扑不变量，并分析相图。</p>
        </div>
        <div class="exercise-item">
          <h4>3. Majorana零模</h4>
          <p>分析开边界条件下Majorana零模的存在条件和性质。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 量子门操作</h4>
          <p>设计基于Majorana费米子编织的量子门操作方案。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 渲染数学公式
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
})
</script>

<style scoped>
.chapter-container {
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
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.learning-objectives {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.learning-objectives h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.learning-objectives li::before {
  content: "🎯";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.kitaev-model-introduction, .equivalence-derivation, .topological-phases,
.majorana-fermions, .quantum-computation, .experimental-realization,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.kitaev-model-introduction h2, .equivalence-derivation h2, .topological-phases h2,
.majorana-fermions h2, .quantum-computation h2, .experimental-realization h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.model-overview, .model-definition, .physical-interpretation, .transformation-steps,
.parameter-mapping, .exact-correspondence, .phase-diagram, .topological-invariant,
.phase-transition, .majorana-concept, .edge-modes, .fermion-parity,
.topological-protection, .quantum-gates, .advantages, .experimental-platforms,
.experimental-signatures, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.historical-significance, .parameter-grid, .feature-list, .step-by-step,
.phase-regions, .invariant-calculation, .transition-points, .majorana-properties,
.edge-analysis, .parity-states, .protection-mechanisms, .gate-operations,
.advantage-list, .platform-grid, .signature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.significance-card, .parameter-card, .feature-item, .step-card, .phase-card,
.property-card, .state-card, .mechanism-card, .gate-card, .advantage-item,
.platform-card, .signature-item {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.significance-card h4, .parameter-card h4, .parameter-card h5, .feature-item h4,
.step-card h4, .phase-card h4, .property-card h4, .property-card h5,
.state-card h4, .state-card h5, .mechanism-card h4, .gate-card h4,
.advantage-item h4, .platform-card h4, .signature-item h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.phase-card.topological {
  border-left: 4px solid #27ae60;
}

.phase-card.trivial {
  border-left: 4px solid #e74c3c;
}

.mapping-table {
  background: #f0f8ff;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
}

.mapping-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 8px;
  border: 1px solid #e1e8ff;
}

.mapping-row.header {
  background: #667eea;
  color: white;
  font-weight: bold;
}

.arrow {
  font-size: 1.5em;
  color: #667eea;
  font-weight: bold;
  text-align: center;
}

.ising-param, .kitaev-param {
  text-align: center;
  padding: 0.5rem;
}

.correspondence-equations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.equation-set {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.equation-set h4 {
  color: #667eea;
  margin-bottom: 1rem;
  text-align: center;
}

.conditions, .characteristics, .examples {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.conditions p, .examples {
  margin: 0.5rem 0;
}

.characteristics h5 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.characteristics ul {
  margin: 0;
  padding-left: 1.5rem;
}

.universality-class, .degeneracy, .zero-mode-properties {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.universality-class h4, .degeneracy h4, .zero-mode-properties h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.left-edge, .right-edge {
  background: #f8faff;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #e1e8ff;
  text-align: center;
}

.left-edge h4, .right-edge h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.transition-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
  border-left: 4px solid #f39c12;
}

.transition-card h4 {
  color: #f39c12;
  margin-bottom: 1rem;
}

.formula-container {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1e8ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exercise-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .historical-significance, .parameter-grid, .feature-list, .step-by-step,
  .phase-regions, .invariant-calculation, .transition-points, .majorana-properties,
  .edge-analysis, .parity-states, .protection-mechanisms, .gate-operations,
  .advantage-list, .platform-grid, .signature-list {
    grid-template-columns: 1fr;
  }
  
  .mapping-row {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .correspondence-equations {
    grid-template-columns: 1fr;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula-container {
    font-size: 0.8em;
    padding: 0.6rem;
  }
}
</style>