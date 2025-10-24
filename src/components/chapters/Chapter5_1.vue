<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.1 相变和对称破缺：不对称的世界</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">相变理论</span>
        <span class="reading-time">阅读时间：25分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        相变是自然界中最引人入胜的现象之一，从水的沸腾到磁性材料的居里转变，
        从超导体的形成到宇宙早期的对称性破缺，相变无处不在。
        理解相变的本质不仅是凝聚态物理的核心内容，也是现代物理学的重要基石。
      </p>
    </div>

    <div class="content-section">
      <h2>相变的基本概念</h2>
      
      <div class="concept-overview">
        <div class="definition-card">
          <h3>🔄 什么是相变？</h3>
          <div class="definition-content">
            <p class="definition-text">
              相变是物质在外界条件（如温度、压力、磁场等）变化时，
              从一种热力学相转变为另一种热力学相的过程。
            </p>
            
            <div class="characteristics-grid">
              <div class="characteristic-item">
                <h4>宏观特征</h4>
                <ul>
                  <li>物理性质的突变或连续变化</li>
                  <li>对称性的改变</li>
                  <li>序参量的出现或消失</li>
                </ul>
              </div>
              
              <div class="characteristic-item">
                <h4>微观机制</h4>
                <ul>
                  <li>原子/分子排列的重组</li>
                  <li>相互作用能与热运动的竞争</li>
                  <li>集体激发模式的变化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="classification-section">
          <h3>📊 相变的分类</h3>
          
          <div class="classification-tabs">
            <div class="tab-content">
              <div class="phase-transition-types">
                <div class="transition-type-card">
                  <h4>一级相变</h4>
                  <div class="transition-details">
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>自由能的一阶导数不连续</li>
                      <li>存在潜热</li>
                      <li>相变点处两相共存</li>
                    </ul>
                    
                    <p><strong>典型例子：</strong></p>
                    <ul>
                      <li>固-液相变（熔化）</li>
                      <li>液-气相变（沸腾）</li>
                      <li>某些磁性相变</li>
                    </ul>
                    
                    <div class="formula-block">
                      <katex-element expression="\Delta S = \frac{L}{T_c} \neq 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="transition-type-card">
                  <h4>二级相变（连续相变）</h4>
                  <div class="transition-details">
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>自由能的二阶导数不连续</li>
                      <li>无潜热</li>
                      <li>序参量连续变化</li>
                    </ul>
                    
                    <p><strong>典型例子：</strong></p>
                    <ul>
                      <li>铁磁-顺磁相变</li>
                      <li>超导相变</li>
                      <li>超流相变</li>
                    </ul>
                    
                    <div class="formula-block">
                      <katex-element expression="C_V = -T\frac{\partial^2 F}{\partial T^2} \to \infty" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>对称性与对称破缺</h2>
      
      <div class="symmetry-analysis">
        <div class="symmetry-intro">
          <h3>🔍 对称性的重要性</h3>
          <p class="symmetry-description">
            对称性是现代物理学的核心概念之一。诺特定理告诉我们，
            每一个连续对称性都对应一个守恒定律。而对称性的破缺则往往伴随着新物理现象的出现。
          </p>
        </div>

        <div class="symmetry-types">
          <div class="symmetry-grid">
            <div class="symmetry-card">
              <h4>🔄 空间对称性</h4>
              <div class="symmetry-content">
                <p><strong>平移对称性：</strong></p>
                <ul>
                  <li>均匀系统的基本特征</li>
                  <li>动量守恒的来源</li>
                  <li>晶体中的破缺→能带结构</li>
                </ul>
                
                <p><strong>旋转对称性：</strong></p>
                <ul>
                  <li>各向同性系统</li>
                  <li>角动量守恒</li>
                  <li>磁性相变中的破缺</li>
                </ul>
                
                <p><strong>反演对称性：</strong></p>
                <ul>
                  <li>宇称守恒</li>
                  <li>铁电相变中的破缺</li>
                </ul>
              </div>
            </div>
            
            <div class="symmetry-card">
              <h4>⏰ 时间对称性</h4>
              <div class="symmetry-content">
                <p><strong>时间反演对称性：</strong></p>
                <ul>
                  <li>微观可逆性</li>
                  <li>磁性系统中的破缺</li>
                  <li>Kramers简并</li>
                </ul>
                
                <p><strong>时间平移对称性：</strong></p>
                <ul>
                  <li>能量守恒</li>
                  <li>周期驱动系统中的破缺</li>
                </ul>
              </div>
            </div>
            
            <div class="symmetry-card">
              <h4>🔀 内部对称性</h4>
              <div class="symmetry-content">
                <p><strong>规范对称性：</strong></p>
                <ul>
                  <li>电磁场的U(1)对称性</li>
                  <li>超导中的破缺</li>
                  <li>Higgs机制</li>
                </ul>
                
                <p><strong>同位旋对称性：</strong></p>
                <ul>
                  <li>核物理中的SU(2)</li>
                  <li>粒子物理标准模型</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="symmetry-breaking">
          <h3>💥 自发对称破缺</h3>
          <div class="breaking-mechanism">
            <p class="mechanism-description">
              自发对称破缺是指系统的哈密顿量具有某种对称性，
              但基态却不具有这种对称性的现象。这是相变理论的核心概念。
            </p>
            
            <div class="breaking-examples">
              <div class="example-card">
                <h4>🧲 铁磁相变</h4>
                <div class="example-content">
                  <p><strong>对称性：</strong>旋转对称性 SO(3)</p>
                  <p><strong>序参量：</strong>磁化强度 <katex-element expression="\vec{M}" :inline="true" /></p>
                  <p><strong>破缺后：</strong>选择特定方向</p>
                  
                  <div class="formula-block">
                    <katex-element expression="H = -J\sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j" :inline="false" />
                  </div>
                  
                  <p>哈密顿量具有旋转对称性，但低温基态选择了特定的磁化方向。</p>
                </div>
              </div>
              
              <div class="example-card">
                <h4>⚡ 超导相变</h4>
                <div class="example-content">
                  <p><strong>对称性：</strong>U(1)规范对称性</p>
                  <p><strong>序参量：</strong>Cooper对波函数 <katex-element expression="\Delta" :inline="true" /></p>
                  <p><strong>破缺后：</strong>选择特定相位</p>
                  
                  <div class="formula-block">
                    <katex-element expression="|\Delta| e^{i\phi} \neq 0" :inline="false" />
                  </div>
                  
                  <p>规范对称性的破缺导致Meissner效应和零电阻现象。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>序参量理论</h2>
      
      <div class="order-parameter-theory">
        <div class="theory-introduction">
          <h3>📏 序参量的概念</h3>
          <p class="theory-description">
            序参量是描述相变和有序态的核心概念，它量化了系统偏离高对称相的程度。
            序参量的选择往往反映了我们对物理问题的深刻理解。
          </p>
        </div>

        <div class="parameter-properties">
          <div class="properties-grid">
            <div class="property-card">
              <h4>🎯 基本性质</h4>
              <div class="property-content">
                <ul>
                  <li><strong>对称性：</strong>反映系统的对称性破缺</li>
                  <li><strong>连续性：</strong>在相变点连续或不连续</li>
                  <li><strong>临界行为：</strong>接近相变点的标度律</li>
                  <li><strong>涨落：</strong>热力学涨落和量子涨落</li>
                </ul>
              </div>
            </div>
            
            <div class="property-card">
              <h4>📊 数学描述</h4>
              <div class="property-content">
                <p><strong>标量序参量：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\eta = \langle \hat{O} \rangle" :inline="false" />
                </div>
                
                <p><strong>矢量序参量：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\vec{\eta} = \langle \vec{\hat{O}} \rangle" :inline="false" />
                </div>
                
                <p><strong>复数序参量：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\Delta = |\Delta|e^{i\phi}" :inline="false" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parameter-examples">
          <h3>🔬 典型序参量</h3>
          <div class="examples-table">
            <div class="table-container">
              <table class="parameter-table">
                <thead>
                  <tr>
                    <th>相变类型</th>
                    <th>序参量</th>
                    <th>对称性</th>
                    <th>物理意义</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>铁磁相变</td>
                    <td><katex-element expression="\vec{M}" :inline="true" /></td>
                    <td>SO(3)→SO(2)</td>
                    <td>自发磁化</td>
                  </tr>
                  <tr>
                    <td>超导相变</td>
                    <td><katex-element expression="\Delta" :inline="true" /></td>
                    <td>U(1)→1</td>
                    <td>Cooper对振幅</td>
                  </tr>
                  <tr>
                    <td>超流相变</td>
                    <td><katex-element expression="\Psi" :inline="true" /></td>
                    <td>U(1)→1</td>
                    <td>凝聚体波函数</td>
                  </tr>
                  <tr>
                    <td>铁电相变</td>
                    <td><katex-element expression="\vec{P}" :inline="true" /></td>
                    <td>反演对称性</td>
                    <td>自发极化</td>
                  </tr>
                  <tr>
                    <td>向列相变</td>
                    <td><katex-element expression="Q_{ij}" :inline="true" /></td>
                    <td>旋转对称性</td>
                    <td>取向有序</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相变的物理图像</h2>
      
      <div class="physical-picture">
        <div class="energy-landscape">
          <h3>🏔️ 能量地貌图像</h3>
          <div class="landscape-description">
            <p>
              相变可以用能量地貌的变化来理解。随着外界参数的改变，
              系统的自由能地貌发生变化，导致基态的改变。
            </p>
            
            <div class="landscape-scenarios">
              <div class="scenario-card">
                <h4>高温相（无序相）</h4>
                <div class="scenario-content">
                  <ul>
                    <li>单一的全局最小值</li>
                    <li>高对称性</li>
                    <li>序参量为零</li>
                    <li>热涨落占主导</li>
                  </ul>
                  
                  <div class="formula-block">
                    <katex-element expression="F(\eta) = \frac{1}{2}r\eta^2 + \frac{1}{4}u\eta^4, \quad r > 0" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>低温相（有序相）</h4>
                <div class="scenario-content">
                  <ul>
                    <li>多个简并的最小值</li>
                    <li>对称性破缺</li>
                    <li>非零序参量</li>
                    <li>相互作用能占主导</li>
                  </ul>
                  
                  <div class="formula-block">
                    <katex-element expression="F(\eta) = \frac{1}{2}r\eta^2 + \frac{1}{4}u\eta^4, \quad r < 0" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="competition-mechanism">
          <h3>⚖️ 竞争机制</h3>
          <div class="competition-analysis">
            <p class="competition-description">
              相变的本质是不同物理机制之间的竞争，
              主要体现在有序化趋势与无序化趋势之间的平衡。
            </p>
            
            <div class="competition-factors">
              <div class="factor-grid">
                <div class="factor-card">
                  <h4>🔗 有序化因素</h4>
                  <div class="factor-content">
                    <ul>
                      <li><strong>相互作用能：</strong>倾向于形成有序结构</li>
                      <li><strong>交换作用：</strong>磁性系统中的铁磁耦合</li>
                      <li><strong>库仑作用：</strong>电荷有序</li>
                      <li><strong>配对作用：</strong>超导中的Cooper配对</li>
                    </ul>
                    
                    <div class="formula-block">
                      <katex-element expression="E_{int} \propto -J|\eta|^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="factor-card">
                  <h4>🌡️ 无序化因素</h4>
                  <div class="factor-content">
                    <ul>
                      <li><strong>热涨落：</strong>破坏有序结构</li>
                      <li><strong>量子涨落：</strong>零点运动</li>
                      <li><strong>熵效应：</strong>统计权重</li>
                      <li><strong>动能：</strong>粒子的运动</li>
                    </ul>
                    
                    <div class="formula-block">
                      <katex-element expression="F_{entropy} = -TS \propto T\ln(\text{configurations})" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相变的实验观测</h2>
      
      <div class="experimental-observations">
        <div class="observation-methods">
          <h3>🔬 实验技术</h3>
          <div class="methods-grid">
            <div class="method-card">
              <h4>热力学测量</h4>
              <div class="method-content">
                <ul>
                  <li><strong>比热测量：</strong>相变点的异常</li>
                  <li><strong>磁化率：</strong>磁性相变的探测</li>
                  <li><strong>介电常数：</strong>铁电相变</li>
                  <li><strong>电阻率：</strong>金属-绝缘体相变</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <h4>结构表征</h4>
              <div class="method-content">
                <ul>
                  <li><strong>X射线衍射：</strong>晶体结构变化</li>
                  <li><strong>中子散射：</strong>磁结构</li>
                  <li><strong>电子显微镜：</strong>微观形貌</li>
                  <li><strong>扫描探针：</strong>表面性质</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <h4>光谱技术</h4>
              <div class="method-content">
                <ul>
                  <li><strong>拉曼散射：</strong>声子模式</li>
                  <li><strong>红外光谱：</strong>振动模式</li>
                  <li><strong>光电子能谱：</strong>电子结构</li>
                  <li><strong>核磁共振：</strong>局域环境</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="signature-behaviors">
          <h3>📊 特征行为</h3>
          <div class="behaviors-analysis">
            <div class="behavior-categories">
              <div class="category-card">
                <h4>🌡️ 临界现象</h4>
                <div class="category-content">
                  <p><strong>临界指数：</strong></p>
                  <div class="critical-exponents">
                    <div class="exponent-item">
                      <katex-element expression="\eta \propto |T-T_c|^\beta" :inline="false" />
                      <p>序参量临界指数</p>
                    </div>
                    <div class="exponent-item">
                      <katex-element expression="C \propto |T-T_c|^{-\alpha}" :inline="false" />
                      <p>比热临界指数</p>
                    </div>
                    <div class="exponent-item">
                      <katex-element expression="\chi \propto |T-T_c|^{-\gamma}" :inline="false" />
                      <p>磁化率临界指数</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="category-card">
                <h4>📏 标度律</h4>
                <div class="category-content">
                  <p><strong>相关长度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\xi \propto |T-T_c|^{-\nu}" :inline="false" />
                  </div>
                  
                  <p><strong>标度假设：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="F(t,h) = |t|^{2-\alpha} f(h/|t|^{\Delta})" :inline="false" />
                  </div>
                  
                  <p>其中 <katex-element expression="t = (T-T_c)/T_c" :inline="true" />，<katex-element expression="h" :inline="true" /> 是外场。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相变的现代理解</h2>
      
      <div class="modern-understanding">
        <div class="theoretical-frameworks">
          <h3>🧠 理论框架</h3>
          <div class="frameworks-grid">
            <div class="framework-card">
              <h4>重整化群理论</h4>
              <div class="framework-content">
                <p><strong>核心思想：</strong></p>
                <ul>
                  <li>标度不变性</li>
                  <li>普适性类</li>
                  <li>临界指数的计算</li>
                  <li>维度的作用</li>
                </ul>
                
                <p><strong>Wilson的贡献：</strong></p>
                <ul>
                  <li>ε展开方法</li>
                  <li>固定点理论</li>
                  <li>临界现象的统一描述</li>
                </ul>
              </div>
            </div>
            
            <div class="framework-card">
              <h4>拓扑相变</h4>
              <div class="framework-content">
                <p><strong>新概念：</strong></p>
                <ul>
                  <li>拓扑不变量</li>
                  <li>拓扑保护</li>
                  <li>边界态</li>
                  <li>量子霍尔效应</li>
                </ul>
                
                <p><strong>应用：</strong></p>
                <ul>
                  <li>拓扑绝缘体</li>
                  <li>拓扑超导体</li>
                  <li>Weyl半金属</li>
                </ul>
              </div>
            </div>
            
            <div class="framework-card">
              <h4>量子相变</h4>
              <div class="framework-content">
                <p><strong>特点：</strong></p>
                <ul>
                  <li>T=0时发生</li>
                  <li>量子涨落驱动</li>
                  <li>量子临界点</li>
                  <li>非费米液体行为</li>
                </ul>
                
                <p><strong>调控参数：</strong></p>
                <ul>
                  <li>压力</li>
                  <li>磁场</li>
                  <li>掺杂</li>
                  <li>应力</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="applications-prospects">
          <h3>🚀 应用与前景</h3>
          <div class="applications-content">
            <div class="application-areas">
              <div class="area-card">
                <h4>🔬 基础研究</h4>
                <ul>
                  <li>新奇量子态的发现</li>
                  <li>多体物理的理解</li>
                  <li>临界现象的普适性</li>
                  <li>量子信息的应用</li>
                </ul>
              </div>
              
              <div class="area-card">
                <h4>💻 技术应用</h4>
                <ul>
                  <li>相变存储器</li>
                  <li>磁性器件</li>
                  <li>超导技术</li>
                  <li>量子计算</li>
                </ul>
              </div>
              
              <div class="area-card">
                <h4>🌍 跨学科影响</h4>
                <ul>
                  <li>生物物理中的相变</li>
                  <li>社会科学中的临界现象</li>
                  <li>网络科学</li>
                  <li>机器学习</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.definition-card, .transition-type-card, .symmetry-card, .example-card, .property-card, .method-card, .category-card, .framework-card, .area-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.definition-card h3, .symmetry-card h4, .example-card h4, .property-card h4, .method-card h4, .category-card h4, .framework-card h4, .area-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.characteristics-grid, .symmetry-grid, .properties-grid, .methods-grid, .frameworks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.characteristic-item, .scenario-card, .factor-card {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 4px solid #667eea;
}

.characteristic-item h4, .scenario-card h4, .factor-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.phase-transition-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.transition-type-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.transition-type-card h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.formula-block {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
}

.table-container {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.parameter-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.parameter-table th {
  background: #667eea;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.parameter-table td {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.parameter-table tr:hover {
  background: #f7fafc;
}

.critical-exponents {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.exponent-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
}

.exponent-item p {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.9;
}

.application-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  
  .characteristics-grid, .symmetry-grid, .properties-grid, .methods-grid, .frameworks-grid {
    grid-template-columns: 1fr;
  }
  
  .phase-transition-types {
    grid-template-columns: 1fr;
  }
}
</style>