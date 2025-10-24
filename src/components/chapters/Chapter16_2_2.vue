<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.2.2 规范不变性</h1>
      <p class="chapter-subtitle">深入理解规范对称性：从局域不变性到物理可观测量的规范无关性</p>
    </header>

    <section class="content-section">
      <h2>🎯 规范不变性的核心概念</h2>
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-icon">🔄</div>
          <h3>局域规范变换</h3>
          <div class="concept-description">
            <p><strong>定义：</strong>每个格点上独立的相位变换</p>
            <div class="mathematical-content">
              <h4>变换规则：</h4>
              <katex-element expression="f_{i\sigma} \to e^{i\alpha_i} f_{i\sigma}"></katex-element>
              <katex-element expression="b_i \to e^{-i\alpha_i} b_i"></katex-element>
              <katex-element expression="\theta_i \to \theta_i + \alpha_i"></katex-element>
              
              <h4>关键特征：</h4>
              <ul>
                <li>αᵢ是任意实函数</li>
                <li>每个格点独立变换</li>
                <li>连续对称性群U(1)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">⚖️</div>
          <h3>物理不变性</h3>
          <div class="concept-description">
            <p><strong>原理：</strong>物理可观测量必须规范不变</p>
            <div class="invariance-examples">
              <h4>不变量示例：</h4>
              <div class="invariant-item">
                <h5>电子算符：</h5>
                <katex-element expression="c_{i\sigma} = e^{i\theta_i} f_{i\sigma} b_i^\dagger"></katex-element>
                <p>在规范变换下保持不变</p>
              </div>
              
              <div class="invariant-item">
                <h5>电子密度：</h5>
                <katex-element expression="n_{i\sigma} = c_{i\sigma}^\dagger c_{i\sigma}"></katex-element>
                <p>规范不变的局域可观测量</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔬 规范不变量的分类</h2>
      
      <div class="invariant-classification">
        <h3>局域不变量</h3>
        <div class="mathematical-content">
          <h4>单粒子可观测量：</h4>
          <div class="observable-grid">
            <div class="observable-item">
              <h5>粒子数密度：</h5>
              <katex-element expression="n_i = \sum_\sigma c_{i\sigma}^\dagger c_{i\sigma}"></katex-element>
              <p>总电子数密度</p>
            </div>
            
            <div class="observable-item">
              <h5>自旋密度：</h5>
              <katex-element expression="S_i^z = \frac{1}{2}(n_{i\uparrow} - n_{i\downarrow})"></katex-element>
              <p>局域磁矩</p>
            </div>
            
            <div class="observable-item">
              <h5>双占据：</h5>
              <katex-element expression="D_i = n_{i\uparrow} n_{i\downarrow}"></katex-element>
              <p>局域配对强度</p>
            </div>
          </div>
        </div>
      </div>

      <div class="invariant-classification">
        <h3>非局域不变量</h3>
        <div class="mathematical-content">
          <h4>关联函数：</h4>
          <div class="correlation-functions">
            <div class="correlation-item">
              <h5>密度关联：</h5>
              <katex-element expression="G_n(i,j) = \langle n_i n_j \rangle - \langle n_i \rangle \langle n_j \rangle"></katex-element>
              <p>电荷密度涨落关联</p>
            </div>
            
            <div class="correlation-item">
              <h5>自旋关联：</h5>
              <katex-element expression="G_s(i,j) = \langle \vec{S}_i \cdot \vec{S}_j \rangle"></katex-element>
              <p>磁性关联函数</p>
            </div>
            
            <div class="correlation-item">
              <h5>配对关联：</h5>
              <katex-element expression="G_p(i,j) = \langle c_{i\uparrow} c_{i\downarrow} c_{j\downarrow}^\dagger c_{j\uparrow}^\dagger \rangle"></katex-element>
              <p>超导配对关联</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚡ 规范场强度与拓扑不变量</h2>
      
      <div class="field-strength-container">
        <h3>规范场强度的定义</h3>
        <div class="mathematical-content">
          <h4>离散格子上的场强：</h4>
          <katex-element expression="F_{ij} = \theta_i - \theta_j - 2\pi n_{ij}"></katex-element>
          
          <div class="field-strength-properties">
            <h4>场强的性质：</h4>
            <div class="property-grid">
              <div class="property-item">
                <h5>🔄 规范不变性</h5>
                <p>Fᵢⱼ在规范变换下不变</p>
                <p>真正的物理场量</p>
              </div>
              
              <div class="property-item">
                <h5>📐 几何意义</h5>
                <p>连接上的"曲率"</p>
                <p>平行输运的相位</p>
              </div>
              
              <div class="property-item">
                <h5>🎯 物理效应</h5>
                <p>Aharonov-Bohm相位</p>
                <p>Berry相位的来源</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field-strength-container">
        <h3>磁通量与拓扑荷</h3>
        <div class="mathematical-content">
          <h4>格子上的磁通：</h4>
          <katex-element expression="\Phi_{\square} = \sum_{\partial \square} F_{ij} = \sum_{\partial \square} (\theta_i - \theta_j)"></katex-element>
          
          <div class="flux-quantization">
            <h4>磁通量子化：</h4>
            <div class="quantization-explanation">
              <div class="quantum-item">
                <h5>量子化条件：</h5>
                <katex-element expression="\Phi_{\square} = 2\pi n, \quad n \in \mathbb{Z}"></katex-element>
                <p>拓扑量子数</p>
              </div>
              
              <div class="quantum-item">
                <h5>物理起源：</h5>
                <p>波函数单值性要求</p>
                <p>拓扑保护的稳定性</p>
              </div>
              
              <div class="quantum-item">
                <h5>实验观测：</h5>
                <p>量子霍尔效应</p>
                <p>超导磁通量子</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🌊 规范固定与物理规范</h2>
      
      <div class="gauge-fixing-grid">
        <div class="fixing-method">
          <h3>🎯 Coulomb规范</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>规范条件：</h4>
              <katex-element expression="\nabla \cdot \vec{A} = 0"></katex-element>
              <p>连续情况下的横向规范</p>
              
              <h4>格子版本：</h4>
              <katex-element expression="\sum_{j \in nn(i)} (\theta_j - \theta_i) = 0"></katex-element>
              <p>每个格点的"散度"为零</p>
              
              <h4>物理意义：</h4>
              <ul>
                <li>消除纵向自由度</li>
                <li>保留横向涨落</li>
                <li>适合研究长程关联</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="fixing-method">
          <h3>🌡️ 时间规范</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>规范条件：</h4>
              <katex-element expression="A_0 = 0"></katex-element>
              <p>时间分量为零</p>
              
              <h4>隶粒子中的对应：</h4>
              <katex-element expression="\partial_t \theta_i = 0"></katex-element>
              <p>静态规范场配置</p>
              
              <h4>适用场景：</h4>
              <ul>
                <li>静态问题分析</li>
                <li>基态性质研究</li>
                <li>相变临界行为</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="fixing-method">
          <h3>🎪 轴向规范</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>规范条件：</h4>
              <katex-element expression="A_z = 0"></katex-element>
              <p>选定方向分量为零</p>
              
              <h4>格子实现：</h4>
              <katex-element expression="\theta_{i+\hat{z}} = \theta_i"></katex-element>
              <p>沿z方向规范场不变</p>
              
              <h4>优势：</h4>
              <ul>
                <li>保持平移对称性</li>
                <li>简化计算</li>
                <li>便于数值模拟</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎭 规范变换的生成元</h2>
      
      <div class="generator-analysis">
        <h3>无穷小规范变换</h3>
        <div class="mathematical-content">
          <h4>生成元的定义：</h4>
          <katex-element expression="G_i = \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} - b_i^\dagger b_i"></katex-element>
          
          <div class="generator-properties">
            <h4>生成元的性质：</h4>
            <div class="property-analysis">
              <div class="analysis-item">
                <h5>🔄 对易关系</h5>
                <katex-element expression="[G_i, G_j] = 0"></katex-element>
                <p>不同格点生成元对易</p>
                <p>U(1)^N 阿贝尔群结构</p>
              </div>
              
              <div class="analysis-item">
                <h5>⚖️ 约束关系</h5>
                <katex-element expression="G_i = -1"></katex-element>
                <p>约束条件的另一种表述</p>
                <p>生成元的本征值固定</p>
              </div>
              
              <div class="analysis-item">
                <h5>🎯 物理意义</h5>
                <p>局域电荷守恒</p>
                <p>规范对称性的Noether荷</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="generator-analysis">
        <h3>有限规范变换</h3>
        <div class="mathematical-content">
          <h4>指数映射：</h4>
          <katex-element expression="U_i(\alpha) = e^{i\alpha_i G_i}"></katex-element>
          
          <h4>作用在场上：</h4>
          <div class="transformation-action">
            <div class="action-item">
              <h5>费米子变换：</h5>
              <katex-element expression="U_i(\alpha) f_{i\sigma} U_i^\dagger(\alpha) = e^{i\alpha_i} f_{i\sigma}"></katex-element>
            </div>
            
            <div class="action-item">
              <h5>玻色子变换：</h5>
              <katex-element expression="U_i(\alpha) b_i U_i^\dagger(\alpha) = e^{-i\alpha_i} b_i"></katex-element>
            </div>
            
            <div class="action-item">
              <h5>电子不变性：</h5>
              <katex-element expression="U_i(\alpha) c_{i\sigma} U_i^\dagger(\alpha) = c_{i\sigma}"></katex-element>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔍 规范不变性的物理后果</h2>
      
      <div class="physical-consequences">
        <h3>长程关联的抑制</h3>
        <div class="mathematical-content">
          <h4>规范涨落的效应：</h4>
          <katex-element expression="\langle f_{i\sigma}^\dagger f_{j\sigma} \rangle \sim e^{-\frac{1}{2}\langle (\theta_i - \theta_j)^2 \rangle}"></katex-element>
          
          <div class="correlation-suppression">
            <h4>关联函数的行为：</h4>
            <div class="behavior-grid">
              <div class="behavior-item">
                <h5>📉 指数衰减</h5>
                <p>规范涨落导致关联快速衰减</p>
                <p>Anderson局域化效应</p>
              </div>
              
              <div class="behavior-item">
                <h5>🌡️ 温度依赖</h5>
                <p>高温下涨落增强</p>
                <p>关联长度缩短</p>
              </div>
              
              <div class="behavior-item">
                <h5>🎯 维度效应</h5>
                <p>低维系统涨落更强</p>
                <p>Mermin-Wagner定理</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="physical-consequences">
        <h3>拓扑激发的稳定性</h3>
        <div class="mathematical-content">
          <h4>拓扑保护机制：</h4>
          <div class="protection-mechanisms">
            <div class="mechanism-item">
              <h5>🛡️ 能隙保护</h5>
              <p>拓扑激发与基态间存在能隙</p>
              <p>小扰动无法改变拓扑性质</p>
            </div>
            
            <div class="mechanism-item">
              <h5>🔄 规范不变性</h5>
              <p>拓扑荷是规范不变量</p>
              <p>不依赖于具体规范选择</p>
            </div>
            
            <div class="mechanism-item">
              <h5>🎯 量子化</h5>
              <p>拓扑荷只能取整数值</p>
              <p>连续变形无法改变</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🧪 实验中的规范不变性</h2>
      
      <div class="experimental-manifestations">
        <h3>可观测的规范不变效应</h3>
        <div class="effect-grid">
          <div class="effect-card">
            <h4>🌊 Aharonov-Bohm效应</h4>
            <div class="effect-content">
              <div class="mathematical-content">
                <h5>相位积累：</h5>
                <katex-element expression="\phi_{AB} = \frac{e}{\hbar} \oint \vec{A} \cdot d\vec{l} = \frac{2\pi \Phi}{\Phi_0}"></katex-element>
                
                <h5>实验观测：</h5>
                <ul>
                  <li>电子干涉实验</li>
                  <li>量子环中的持续电流</li>
                  <li>磁通量子的直接测量</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="effect-card">
            <h4>🎯 量子霍尔效应</h4>
            <div class="effect-content">
              <div class="mathematical-content">
                <h5>霍尔电导：</h5>
                <katex-element expression="\sigma_{xy} = \nu \frac{e^2}{h}"></katex-element>
                
                <h5>拓扑起源：</h5>
                <ul>
                  <li>Chern数的量子化</li>
                  <li>边缘态的拓扑保护</li>
                  <li>规范不变的拓扑响应</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="effect-card">
            <h4>🔄 Berry相位</h4>
            <div class="effect-content">
              <div class="mathematical-content">
                <h5>几何相位：</h5>
                <katex-element expression="\gamma = i \oint \langle n(\vec{R}) | \nabla_{\vec{R}} | n(\vec{R}) \rangle \cdot d\vec{R}"></katex-element>
                
                <h5>物理表现：</h5>
                <ul>
                  <li>自旋轨道耦合系统</li>
                  <li>拓扑绝缘体表面态</li>
                  <li>Weyl半金属的手性异常</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚠️ 规范不变性的微妙之处</h2>
      
      <div class="subtleties-grid">
        <div class="subtlety-card">
          <h3>🎭 规范固定的歧义</h3>
          <div class="subtlety-content">
            <p><strong>问题：</strong>不同规范固定可能给出不同结果</p>
            <div class="ambiguity-analysis">
              <h4>产生原因：</h4>
              <ul>
                <li>规范固定破坏了对称性</li>
                <li>Gribov拷贝问题</li>
                <li>非微扰效应的遗漏</li>
              </ul>
              
              <h4>解决方案：</h4>
              <ul>
                <li>使用规范不变的可观测量</li>
                <li>BRST对称性方法</li>
                <li>路径积分的规范不变测度</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="subtlety-card">
          <h3>🌊 量子涨落的处理</h3>
          <div class="subtlety-content">
            <p><strong>挑战：</strong>规范场的量子涨落计算复杂</p>
            <div class="fluctuation-issues">
              <h4>技术困难：</h4>
              <ul>
                <li>路径积分测度的定义</li>
                <li>Faddeev-Popov鬼场</li>
                <li>规范异常的可能性</li>
              </ul>
              
              <h4>处理方法：</h4>
              <ul>
                <li>背景场方法</li>
                <li>有效作用量方法</li>
                <li>重整化群分析</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔗 与其他对称性的关系</h2>
      
      <div class="symmetry-relations">
        <h3>对称性的层次结构</h3>
        <div class="hierarchy-diagram">
          <div class="symmetry-level">
            <h4>🎯 基本对称性</h4>
            <div class="symmetry-items">
              <div class="symmetry-item">
                <h5>时空对称性</h5>
                <p>平移、旋转、洛伦兹变换</p>
              </div>
              <div class="symmetry-item">
                <h5>内部对称性</h5>
                <p>规范对称性、手征对称性</p>
              </div>
            </div>
          </div>
          
          <div class="symmetry-level">
            <h4>🔄 复合对称性</h4>
            <div class="symmetry-items">
              <div class="symmetry-item">
                <h5>超对称性</h5>
                <p>费米子-玻色子对称性</p>
              </div>
              <div class="symmetry-item">
                <h5>共形对称性</h5>
                <p>尺度不变性的推广</p>
              </div>
            </div>
          </div>
          
          <div class="symmetry-level">
            <h4>🎪 涌现对称性</h4>
            <div class="symmetry-items">
              <div class="symmetry-item">
                <h5>拓扑对称性</h5>
                <p>拓扑序中的对称性</p>
              </div>
              <div class="symmetry-item">
                <h5>分数化对称性</h5>
                <p>anyonic对称性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📚 本节总结</h2>
      <div class="summary-container">
        <div class="summary-points">
          <div class="point-item">
            <div class="point-number">1</div>
            <div class="point-content">
              <h4>局域规范不变性</h4>
              <p>每个格点独立的U(1)相位变换对称性</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>物理可观测量</h4>
              <p>只有规范不变的量才具有物理意义</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>拓扑不变量</h4>
              <p>规范场强度和磁通量的量子化</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>实验验证</h4>
              <p>AB效应、量子霍尔效应等展现规范不变性</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter16_2_2',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid #e3f2fd;
}

.chapter-header h1 {
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #546e7a;
  font-style: italic;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  color: #1976d2;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bbdefb;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #ff9800;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.concept-description p {
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.mathematical-content h4 {
  color: #424242;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.mathematical-content ul {
  list-style: none;
  padding: 0;
}

.mathematical-content li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.mathematical-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ff9800;
}

.invariance-examples {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.invariance-examples h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
}

.invariant-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 6px;
  border-left: 3px solid #ff9800;
}

.invariant-item h5 {
  color: #e65100;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.invariant-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.invariant-classification {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #4caf50;
}

.invariant-classification h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.observable-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.observable-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.observable-item h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.observable-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.correlation-functions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.correlation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.correlation-item h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.correlation-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.field-strength-container {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #9c27b0;
}

.field-strength-container h3 {
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.field-strength-properties {
  margin-top: 1.5rem;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.property-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.property-item h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.property-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.flux-quantization {
  margin-top: 1.5rem;
}

.quantization-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.quantum-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quantum-item h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.quantum-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.gauge-fixing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.fixing-method {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #009688;
}

.fixing-method h3 {
  color: #00695c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.method-content ul {
  list-style: none;
  padding: 0;
}

.method-content li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.method-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #009688;
}

.generator-analysis {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #2196f3;
}

.generator-analysis h3 {
  color: #0d47a1;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.generator-properties {
  margin-top: 1.5rem;
}

.property-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.analysis-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.analysis-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.analysis-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.transformation-action {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.action-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.action-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.physical-consequences {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
}

.physical-consequences h3 {
  color: #f57f17;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.correlation-suppression {
  margin-top: 1.5rem;
}

.behavior-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.behavior-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.behavior-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.behavior-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.protection-mechanisms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.mechanism-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mechanism-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.mechanism-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.experimental-manifestations {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #8bc34a;
}

.experimental-manifestations h3 {
  color: #33691e;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.effect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.effect-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.effect-card h4 {
  color: #689f38;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.effect-content h5 {
  color: #558b2f;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.effect-content ul {
  list-style: none;
  padding: 0;
}

.effect-content li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.effect-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #8bc34a;
}

.subtleties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.subtlety-card {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #f44336;
}

.subtlety-card h3 {
  color: #c62828;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.subtlety-content p {
  margin-bottom: 1rem;
}

.ambiguity-analysis, .fluctuation-issues {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.ambiguity-analysis h4, .fluctuation-issues h4 {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.ambiguity-analysis ul, .fluctuation-issues ul {
  list-style: none;
  padding: 0;
}

.ambiguity-analysis li, .fluctuation-issues li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.ambiguity-analysis li::before, .fluctuation-issues li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #f44336;
}

.symmetry-relations {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #607d8b;
}

.symmetry-relations h3 {
  color: #37474f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.hierarchy-diagram {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.symmetry-level {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.symmetry-level h4 {
  color: #455a64;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.symmetry-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.symmetry-item {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #607d8b;
}

.symmetry-item h5 {
  color: #546e7a;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.symmetry-item p {
  color: #546e7a;
  font-size: 0.9rem;
}

.summary-container {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #607d8b;
}

.summary-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: #607d8b;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content h4 {
  color: #37474f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  color: #546e7a;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 0 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .concept-grid,
  .gauge-fixing-grid,
  .subtleties-grid,
  .effect-grid {
    grid-template-columns: 1fr;
  }
  
  .observable-grid,
  .property-grid,
  .quantization-explanation,
  .property-analysis,
  .behavior-grid,
  .protection-mechanisms,
  .symmetry-items,
  .summary-points {
    grid-template-columns: 1fr;
  }
  
  .correlation-functions,
  .transformation-action {
    gap: 0.5rem;
  }
  
  .hierarchy-diagram {
    gap: 1rem;
  }
}
</style>