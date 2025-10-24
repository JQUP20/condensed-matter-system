<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2 Landau平均场理论：临界点的故事</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">平均场理论</span>
        <span class="reading-time">阅读时间：30分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Landau平均场理论是理解相变现象的基石，它以其优雅的数学形式和深刻的物理洞察，
        为我们揭示了相变的普遍规律。从Landau的天才构想到现代重整化群理论的发展，
        平均场理论始终是凝聚态物理学的核心内容。
      </p>
    </div>

    <div class="content-section">
      <h2>Landau理论的基本思想</h2>
      
      <div class="landau-framework">
        <div class="core-concepts">
          <h3>🎯 核心概念</h3>
          <div class="concepts-grid">
            <div class="concept-card">
              <h4>序参量展开</h4>
              <div class="concept-content">
                <p>Landau的关键洞察是将自由能按序参量展开：</p>
                <div class="formula-block">
                  <katex-element expression="F(\eta,T) = F_0(T) + \frac{1}{2}a(T)\eta^2 + \frac{1}{4}b(T)\eta^4 + \frac{1}{6}c(T)\eta^6 + \cdots" :inline="false" />
                </div>
                <p>其中 <katex-element expression="\eta" :inline="true" /> 是序参量，展开系数依赖于温度。</p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>对称性约束</h4>
              <div class="concept-content">
                <p>展开形式受系统对称性约束：</p>
                <ul>
                  <li><strong>反演对称：</strong>只包含偶次项</li>
                  <li><strong>旋转对称：</strong>各向同性系数</li>
                  <li><strong>平移对称：</strong>均匀序参量</li>
                </ul>
                <p>对称性决定了允许的项和系数关系。</p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>平均场近似</h4>
              <div class="concept-content">
                <p>忽略序参量的空间涨落：</p>
                <div class="formula-block">
                  <katex-element expression="\eta(\vec{r}) \approx \langle\eta\rangle = \text{常数}" :inline="false" />
                </div>
                <p>这是理论的主要近似，在临界点附近可能失效。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="temperature-dependence">
          <h3>🌡️ 温度依赖性</h3>
          <div class="temperature-analysis">
            <p class="analysis-description">
              Landau理论的精髓在于展开系数的温度依赖性，
              特别是二次项系数在相变点的行为。
            </p>
            
            <div class="coefficient-behavior">
              <div class="behavior-card">
                <h4>二次项系数 a(T)</h4>
                <div class="behavior-content">
                  <p><strong>线性近似：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="a(T) = a_0(T - T_c)" :inline="false" />
                  </div>
                  
                  <p><strong>物理意义：</strong></p>
                  <ul>
                    <li><katex-element expression="T > T_c" :inline="true" />：<katex-element expression="a > 0" :inline="true" />，无序相稳定</li>
                    <li><katex-element expression="T < T_c" :inline="true" />：<katex-element expression="a < 0" :inline="true" />，有序相稳定</li>
                    <li><katex-element expression="T = T_c" :inline="true" />：<katex-element expression="a = 0" :inline="true" />，临界点</li>
                  </ul>
                </div>
              </div>
              
              <div class="behavior-card">
                <h4>四次项系数 b(T)</h4>
                <div class="behavior-content">
                  <p><strong>稳定性条件：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="b > 0" :inline="false" />
                  </div>
                  
                  <p><strong>作用：</strong></p>
                  <ul>
                    <li>保证自由能有下界</li>
                    <li>决定序参量的饱和值</li>
                    <li>通常假设为温度无关常数</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>子主题导航</h2>
      
      <div class="subtopics-navigation">
        <div class="nav-grid">
          <div class="nav-card" @click="navigateToSubtopic('5_2_1')">
            <div class="nav-icon">📊</div>
            <h3>5.2.1 Landau平均场理论的可观测量</h3>
            <p>探讨如何从Landau理论计算各种物理可观测量，包括比热、磁化率等热力学量的温度依赖性。</p>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5_2_2')">
            <div class="nav-icon">🎯</div>
            <h3>5.2.2 临界指数与标度律</h3>
            <p>详细分析Landau理论预测的临界指数，以及这些指数之间的标度关系和物理意义。</p>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5_2_3')">
            <div class="nav-icon">⚖️</div>
            <h3>5.2.3 Ginzburg-Landau理论：非均匀序参量</h3>
            <p>扩展到包含序参量梯度项的Ginzburg-Landau理论，研究界面、畴壁等非均匀结构。</p>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5_2_4')">
            <div class="nav-icon">✅</div>
            <h3>5.2.4 Landau平均场理论的正确性</h3>
            <p>讨论平均场理论的适用范围、成功之处以及在临界点附近的局限性。</p>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5_2_5')">
            <div class="nav-icon">🌊</div>
            <h3>5.2.5 平均场上的涨落效应I</h3>
            <p>研究平均场解周围的高斯涨落，计算涨落对热力学量的修正。</p>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5_2_6')">
            <div class="nav-icon">🌊</div>
            <h3>5.2.6 平均场上的涨落效应II</h3>
            <p>深入探讨非高斯涨落、临界涨落以及涨落-耗散定理在相变中的应用。</p>
            <div class="nav-arrow">→</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>经典应用实例</h2>
      
      <div class="applications-showcase">
        <div class="application-examples">
          <div class="example-card">
            <h3>🧲 Ising模型的平均场解</h3>
            <div class="example-content">
              <p><strong>模型哈密顿量：</strong></p>
              <div class="formula-block">
                <katex-element expression="H = -J\sum_{\langle i,j \rangle} S_i S_j - h\sum_i S_i" :inline="false" />
              </div>
              
              <p><strong>平均场近似：</strong></p>
              <div class="formula-block">
                <katex-element expression="S_i S_j \approx \langle S_i \rangle S_j + S_i \langle S_j \rangle - \langle S_i \rangle \langle S_j \rangle" :inline="false" />
              </div>
              
              <p><strong>自洽方程：</strong></p>
              <div class="formula-block">
                <katex-element expression="m = \tanh\left(\frac{J z m + h}{k_B T}\right)" :inline="false" />
              </div>
              
              <p>其中 <katex-element expression="m = \langle S_i \rangle" :inline="true" /> 是磁化强度，<katex-element expression="z" :inline="true" /> 是配位数。</p>
            </div>
          </div>
          
          <div class="example-card">
            <h3>⚡ BCS超导理论</h3>
            <div class="example-content">
              <p><strong>序参量：</strong></p>
              <div class="formula-block">
                <katex-element expression="\Delta = \langle c_{k\uparrow} c_{-k\downarrow} \rangle" :inline="false" />
              </div>
              
              <p><strong>自由能：</strong></p>
              <div class="formula-block">
                <katex-element expression="F = \frac{|\Delta|^2}{V} - 2\sum_k E_k f(E_k)" :inline="false" />
              </div>
              
              <p><strong>能隙方程：</strong></p>
              <div class="formula-block">
                <katex-element expression="1 = V\sum_k \frac{1}{2E_k}\tanh\left(\frac{E_k}{2k_B T}\right)" :inline="false" />
              </div>
              
              <p>其中 <katex-element expression="E_k = \sqrt{\xi_k^2 + |\Delta|^2}" :inline="true" /> 是准粒子能谱。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论的优势与局限</h2>
      
      <div class="theory-assessment">
        <div class="assessment-grid">
          <div class="strength-card">
            <h3>✅ 理论优势</h3>
            <div class="strength-content">
              <div class="strength-list">
                <div class="strength-item">
                  <h4>🎯 概念清晰</h4>
                  <p>序参量概念直观，物理图像清楚</p>
                </div>
                
                <div class="strength-item">
                  <h4>📊 定量预测</h4>
                  <p>给出具体的临界指数和标度关系</p>
                </div>
                
                <div class="strength-item">
                  <h4>🔧 计算简便</h4>
                  <p>数学处理相对简单，易于应用</p>
                </div>
                
                <div class="strength-item">
                  <h4>🌐 普适性</h4>
                  <p>适用于多种不同的相变系统</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="limitation-card">
            <h3>❌ 理论局限</h3>
            <div class="limitation-content">
              <div class="limitation-list">
                <div class="limitation-item">
                  <h4>🌊 忽略涨落</h4>
                  <p>在临界点附近涨落效应重要</p>
                </div>
                
                <div class="limitation-item">
                  <h4>📏 维度依赖</h4>
                  <p>低维系统中平均场近似失效</p>
                </div>
                
                <div class="limitation-item">
                  <h4>🎯 临界指数</h4>
                  <p>预测的临界指数与实验不符</p>
                </div>
                
                <div class="limitation-item">
                  <h4>🔍 短程关联</h4>
                  <p>无法描述临界点的长程关联</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与扩展</h2>
      
      <div class="modern-developments">
        <div class="development-areas">
          <div class="development-card">
            <h3>🔄 重整化群理论</h3>
            <div class="development-content">
              <p><strong>Wilson的贡献：</strong></p>
              <ul>
                <li>解释了平均场理论的局限性</li>
                <li>给出了正确的临界指数</li>
                <li>建立了标度理论的微观基础</li>
              </ul>
              
              <p><strong>ε展开：</strong></p>
              <div class="formula-block">
                <katex-element expression="\epsilon = 4 - d" :inline="false" />
              </div>
              <p>其中 <katex-element expression="d" :inline="true" /> 是空间维度，<katex-element expression="d = 4" :inline="true" /> 是上临界维度。</p>
            </div>
          </div>
          
          <div class="development-card">
            <h3>🌐 非平衡相变</h3>
            <div class="development-content">
              <p><strong>动力学相变：</strong></p>
              <ul>
                <li>吸收态相变</li>
                <li>定向渗流</li>
                <li>接触过程</li>
              </ul>
              
              <p><strong>时间依赖Landau方程：</strong></p>
              <div class="formula-block">
                <katex-element expression="\frac{\partial \eta}{\partial t} = -\Gamma \frac{\delta F}{\delta \eta} + \xi(t)" :inline="false" />
              </div>
            </div>
          </div>
          
          <div class="development-card">
            <h3>🔬 量子相变</h3>
            <div class="development-content">
              <p><strong>量子临界点：</strong></p>
              <ul>
                <li>T=0时的相变</li>
                <li>量子涨落驱动</li>
                <li>动力学临界指数</li>
              </ul>
              
              <p><strong>量子-经典映射：</strong></p>
              <div class="formula-block">
                <katex-element expression="d_{quantum} + z = d_{classical}" :inline="false" />
              </div>
              <p>其中 <katex-element expression="z" :inline="true" /> 是动力学临界指数。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigateToSubtopic = (subtopic: string) => {
  // 这里将实现导航到子主题的逻辑
  console.log(`Navigating to subtopic: ${subtopic}`);
  // 实际实现中会使用路由器导航
};
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.concept-card, .behavior-card, .example-card, .development-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.concept-card h4, .behavior-card h4, .example-card h3, .development-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.nav-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.nav-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.nav-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.nav-card p {
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.nav-arrow {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.coefficient-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.assessment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.strength-card {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.limitation-card {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.strength-card h3, .limitation-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.strength-list, .limitation-list {
  display: grid;
  gap: 1rem;
}

.strength-item, .limitation-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.strength-item h4, .limitation-item h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.strength-item p, .limitation-item p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.development-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concepts-grid, .nav-grid, .coefficient-behavior, .assessment-grid, .development-areas {
    grid-template-columns: 1fr;
  }
  
  .nav-card {
    padding: 1.5rem;
  }
}
</style>