<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.2.1 Landau能量泛函</h1>
      <p class="chapter-subtitle">费米液体理论的核心数学框架</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          Landau能量泛函是费米液体理论的数学核心，它描述了准粒子分布偏离平衡态时系统的能量变化。
          这个泛函不仅提供了理解费米液体行为的理论基础，更是计算各种物理性质的出发点。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🔬 核心思想</h3>
            <p>将系统能量表示为准粒子分布函数的泛函，通过变分原理确定平衡态</p>
          </div>
          <div class="concept-card">
            <h3>📊 数学框架</h3>
            <p>基于准粒子相互作用和动量分布的二次型泛函展开</p>
          </div>
          <div class="concept-card">
            <h3>🎯 物理意义</h3>
            <p>连接微观相互作用与宏观热力学性质的桥梁</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 基本形式 -->
    <section class="basic-form">
      <h2>📐 Landau能量泛函的基本形式</h2>
      
      <div class="formulation-content">
        <div class="main-formula">
          <h3>能量泛函表达式</h3>
          <div class="formula-box">
            <p>E[δn] = E₀ + ∫ ε(p)δn(p)d³p + ½∫∫ f(p,p')δn(p)δn(p')d³pd³p'</p>
          </div>
          <div class="formula-explanation">
            <div class="term-explanation">
              <h4>各项物理意义：</h4>
              <ul>
                <li><strong>E₀</strong>：基态能量（T=0时的费米海能量）</li>
                <li><strong>ε(p)</strong>：准粒子能谱，ε(p) = vF(|p| - pF)</li>
                <li><strong>δn(p)</strong>：准粒子分布偏离平衡态的变化</li>
                <li><strong>f(p,p')</strong>：Landau相互作用函数</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="detailed-analysis">
          <h3>泛函展开的物理基础</h3>
          <div class="analysis-grid">
            <div class="analysis-card">
              <h4>🔸 线性项</h4>
              <div class="math-content">
                <p>∫ ε(p)δn(p)d³p</p>
                <ul>
                  <li>描述准粒子动能的变化</li>
                  <li>反映费米面附近的能谱结构</li>
                  <li>在平衡态时通过化学势调节为零</li>
                </ul>
              </div>
            </div>
            
            <div class="analysis-card">
              <h4>🔸 二次项</h4>
              <div class="math-content">
                <p>½∫∫ f(p,p')δn(p)δn(p')d³pd³p'</p>
                <ul>
                  <li>描述准粒子间的相互作用能</li>
                  <li>决定系统的稳定性和响应函数</li>
                  <li>包含所有多体效应的重整化结果</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Landau相互作用函数 -->
    <section class="interaction-function">
      <h2>🔄 Landau相互作用函数</h2>
      
      <div class="interaction-content">
        <div class="function-properties">
          <h3>相互作用函数的性质</h3>
          <div class="properties-grid">
            <div class="property-card">
              <h4>🔹 对称性</h4>
              <div class="property-content">
                <p>f(p,p') = f(p',p)</p>
                <p>反映了相互作用的互易性</p>
              </div>
            </div>
            
            <div class="property-card">
              <h4>🔹 局域性</h4>
              <div class="property-content">
                <p>主要贡献来自费米面附近</p>
                <p>|p| ≈ |p'| ≈ pF</p>
              </div>
            </div>
            
            <div class="property-card">
              <h4>🔹 角度依赖</h4>
              <div class="property-content">
                <p>f(p,p') = f(cos θ)</p>
                <p>θ为动量p和p'的夹角</p>
              </div>
            </div>
          </div>
        </div>

        <div class="landau-parameters">
          <h3>Landau参数展开</h3>
          <div class="parameters-content">
            <div class="expansion-formula">
              <p>f(cos θ) = ∑ₗ fₗ Pₗ(cos θ)</p>
              <p>其中 Pₗ(cos θ) 是勒让德多项式</p>
            </div>
            
            <div class="parameters-grid">
              <div class="parameter-card">
                <h4>f₀ 参数</h4>
                <ul>
                  <li>描述各向同性相互作用</li>
                  <li>影响压缩模量和比热</li>
                  <li>与密度涨落相关</li>
                </ul>
              </div>
              
              <div class="parameter-card">
                <h4>f₁ 参数</h4>
                <ul>
                  <li>描述p波散射相互作用</li>
                  <li>影响有效质量</li>
                  <li>与自旋涨落相关</li>
                </ul>
              </div>
              
              <div class="parameter-card">
                <h4>高阶参数</h4>
                <ul>
                  <li>f₂, f₃, ... 描述高阶角度依赖</li>
                  <li>通常数值较小</li>
                  <li>影响输运性质的细节</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 变分原理 -->
    <section class="variational-principle">
      <h2>⚖️ 变分原理与平衡条件</h2>
      
      <div class="variational-content">
        <div class="principle-explanation">
          <h3>变分原理的应用</h3>
          <p>平衡态对应于能量泛函的极值，通过变分条件：</p>
          <div class="variational-formula">
            <p>δE/δn(p) = 0</p>
          </div>
        </div>

        <div class="equilibrium-conditions">
          <h3>平衡条件的推导</h3>
          <div class="derivation-steps">
            <div class="step-card">
              <h4>步骤1：泛函变分</h4>
              <div class="step-content">
                <p>δE/δn(p) = ε(p) + ∫ f(p,p')δn(p')d³p'</p>
                <p>这给出了准粒子的有效能谱</p>
              </div>
            </div>
            
            <div class="step-card">
              <h4>步骤2：化学势条件</h4>
              <div class="step-content">
                <p>ε*(p) = ε(p) + ∫ f(p,p')δn(p')d³p' = μ</p>
                <p>所有占据态具有相同的化学势</p>
              </div>
            </div>
            
            <div class="step-card">
              <h4>步骤3：自洽方程</h4>
              <div class="step-content">
                <p>δn(p) = n(ε*(p)) - n₀(ε(p))</p>
                <p>分布函数的自洽确定</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理应用 -->
    <section class="physical-applications">
      <h2>🔬 物理应用与计算</h2>
      
      <div class="applications-content">
        <div class="thermodynamic-properties">
          <h3>热力学性质的计算</h3>
          <div class="properties-calculation">
            <div class="calc-card">
              <h4>🌡️ 比热系数</h4>
              <div class="calc-content">
                <p>C = γT，其中</p>
                <p>γ = (π²k²ᵦ/3) × N(0) × (1 + F₀ˢ)</p>
                <ul>
                  <li>N(0)：费米面态密度</li>
                  <li>F₀ˢ：自旋对称Landau参数</li>
                  <li>相互作用增强比热系数</li>
                </ul>
              </div>
            </div>
            
            <div class="calc-card">
              <h4>🔄 压缩模量</h4>
              <div class="calc-content">
                <p>K = K₀/(1 + F₀ᵃ)</p>
                <ul>
                  <li>K₀：自由费米气体压缩模量</li>
                  <li>F₀ᵃ：反对称Landau参数</li>
                  <li>相互作用可增强或减弱压缩性</li>
                </ul>
              </div>
            </div>
            
            <div class="calc-card">
              <h4>⚡ 磁化率</h4>
              <div class="calc-content">
                <p>χ = χ₀/(1 + F₀ᵃ)</p>
                <ul>
                  <li>χ₀：Pauli磁化率</li>
                  <li>Stoner判据：F₀ᵃ > -1</li>
                  <li>铁磁不稳定性的判据</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="response-functions">
          <h3>响应函数的计算</h3>
          <div class="response-grid">
            <div class="response-card">
              <h4>密度响应</h4>
              <div class="response-content">
                <p>描述系统对外场的密度响应</p>
                <ul>
                  <li>静态结构因子</li>
                  <li>声子谱的重整化</li>
                  <li>等离激元模式</li>
                </ul>
              </div>
            </div>
            
            <div class="response-card">
              <h4>自旋响应</h4>
              <div class="response-content">
                <p>描述系统对磁场的响应</p>
                <ul>
                  <li>自旋涨落谱</li>
                  <li>磁振子相互作用</li>
                  <li>顺磁-铁磁转变</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 稳定性分析 -->
    <section class="stability-analysis">
      <h2>⚖️ 稳定性分析</h2>
      
      <div class="stability-content">
        <div class="stability-criteria">
          <h3>Pomeranchuk稳定性条件</h3>
          <p>费米液体的稳定性要求能量泛函的二次型为正定，这导致：</p>
          
          <div class="criteria-grid">
            <div class="criterion-card">
              <h4>🔸 密度通道稳定性</h4>
              <div class="criterion-content">
                <p>Fₗᵃ > -1 (l = 0, 1, 2, ...)</p>
                <ul>
                  <li>F₀ᵃ > -1：防止密度不稳定</li>
                  <li>F₁ᵃ > -1：防止p波不稳定</li>
                  <li>高阶模式的稳定性条件</li>
                </ul>
              </div>
            </div>
            
            <div class="criterion-card">
              <h4>🔸 自旋通道稳定性</h4>
              <div class="criterion-content">
                <p>Fₗˢ > -1 (l = 0, 1, 2, ...)</p>
                <ul>
                  <li>F₀ˢ > -1：Stoner稳定性</li>
                  <li>F₁ˢ > -1：防止自旋流不稳定</li>
                  <li>与磁性相变相关</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="instability-types">
          <h3>可能的不稳定性</h3>
          <div class="instability-grid">
            <div class="instability-card">
              <h4>🔥 铁磁不稳定性</h4>
              <div class="instability-content">
                <p>当F₀ᵃ → -1时发生</p>
                <ul>
                  <li>自发磁化的出现</li>
                  <li>Stoner模型的微观基础</li>
                  <li>巡游电子铁磁性</li>
                </ul>
              </div>
            </div>
            
            <div class="instability-card">
              <h4>🌊 密度波不稳定性</h4>
              <div class="instability-content">
                <p>高阶Landau参数的不稳定</p>
                <ul>
                  <li>电荷密度波形成</li>
                  <li>费米面嵌套效应</li>
                  <li>Peierls转变</li>
                </ul>
              </div>
            </div>
            
            <div class="instability-card">
              <h4>🔄 向列相不稳定性</h4>
              <div class="instability-content">
                <p>F₂参数相关的不稳定性</p>
                <ul>
                  <li>费米面变形</li>
                  <li>旋转对称性破缺</li>
                  <li>电子向列相</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="experimental-verification">
      <h2>🧪 实验验证与测量</h2>
      
      <div class="experimental-content">
        <div class="measurement-methods">
          <h3>Landau参数的实验测定</h3>
          <div class="methods-grid">
            <div class="method-card">
              <h4>🌡️ 热力学测量</h4>
              <div class="method-content">
                <ul>
                  <li><strong>比热测量</strong>：确定F₀ˢ参数</li>
                  <li><strong>压缩性测量</strong>：确定F₀ᵃ参数</li>
                  <li><strong>磁化率测量</strong>：验证Stoner增强</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <h4>🔊 声学测量</h4>
              <div class="method-content">
                <ul>
                  <li><strong>零声模式</strong>：直接探测集体激发</li>
                  <li><strong>声速测量</strong>：验证压缩模量</li>
                  <li><strong>阻尼测量</strong>：Landau阻尼机制</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <h4>📡 光谱学方法</h4>
              <div class="method-content">
                <ul>
                  <li><strong>ARPES</strong>：直接观测准粒子谱</li>
                  <li><strong>量子振荡</strong>：费米面性质</li>
                  <li><strong>中子散射</strong>：自旋涨落谱</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="case-studies">
          <h3>典型系统的研究案例</h3>
          <div class="cases-grid">
            <div class="case-card">
              <h4>🧊 液态³He</h4>
              <div class="case-content">
                <p><strong>Landau参数值：</strong></p>
                <ul>
                  <li>F₀ˢ ≈ -0.75（强相互作用）</li>
                  <li>F₁ˢ ≈ +6.0（有效质量增强）</li>
                  <li>完美的费米液体行为</li>
                </ul>
              </div>
            </div>
            
            <div class="case-card">
              <h4>⚡ 重费米子系统</h4>
              <div class="case-content">
                <p><strong>特征：</strong></p>
                <ul>
                  <li>巨大的有效质量（m*/m ~ 100-1000）</li>
                  <li>强关联效应</li>
                  <li>量子临界行为</li>
                </ul>
              </div>
            </div>
            
            <div class="case-card">
              <h4>🔬 二维电子气</h4>
              <div class="case-content">
                <p><strong>特点：</strong></p>
                <ul>
                  <li>可调节的相互作用强度</li>
                  <li>维度效应的影响</li>
                  <li>Wigner晶体转变</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>🚀 现代发展与扩展</h2>
      
      <div class="developments-content">
        <div class="theoretical-extensions">
          <h3>理论扩展</h3>
          <div class="extensions-grid">
            <div class="extension-card">
              <h4>🌐 非费米液体理论</h4>
              <div class="extension-content">
                <ul>
                  <li>边际费米液体理论</li>
                  <li>量子临界点附近的行为</li>
                  <li>奇异金属相的描述</li>
                </ul>
              </div>
            </div>
            
            <div class="extension-card">
              <h4>🔄 动力学扩展</h4>
              <div class="extension-content">
                <ul>
                  <li>频率依赖的相互作用函数</li>
                  <li>记忆效应和非局域性</li>
                  <li>输运性质的微观理论</li>
                </ul>
              </div>
            </div>
            
            <div class="extension-card">
              <h4>🎯 拓扑费米液体</h4>
              <div class="extension-content">
                <ul>
                  <li>拓扑不变量的影响</li>
                  <li>表面态的费米液体性质</li>
                  <li>拓扑相变的描述</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="computational-advances">
          <h3>计算方法进展</h3>
          <div class="computational-grid">
            <div class="comp-card">
              <h4>💻 第一性原理计算</h4>
              <div class="comp-content">
                <ul>
                  <li>从电子结构计算Landau参数</li>
                  <li>GW近似和DMFT方法</li>
                  <li>多体微扰理论</li>
                </ul>
              </div>
            </div>
            
            <div class="comp-card">
              <h4>🎲 量子蒙特卡罗</h4>
              <div class="comp-content">
                <ul>
                  <li>强关联系统的精确求解</li>
                  <li>符号问题的克服</li>
                  <li>有限温度性质</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary">
      <h2>📋 本节总结</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>🎯 关键要点</h3>
          <div class="points-grid">
            <div class="point-card">
              <h4>理论框架</h4>
              <ul>
                <li>Landau能量泛函提供了费米液体的完整数学描述</li>
                <li>相互作用函数包含所有多体效应</li>
                <li>变分原理确定平衡态性质</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>物理应用</h4>
              <ul>
                <li>热力学性质的微观计算</li>
                <li>稳定性分析和相变判据</li>
                <li>响应函数的理论预测</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>实验联系</h4>
              <ul>
                <li>Landau参数的实验测定</li>
                <li>理论预测的实验验证</li>
                <li>新材料性质的理解</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-outlook">
          <h3>🔮 未来展望</h3>
          <p>
            Landau能量泛函理论继续在现代凝聚态物理中发挥重要作用，特别是在理解强关联电子系统、
            量子临界现象和新奇量子相方面。随着实验技术和计算方法的进步，这一理论框架将继续
            为我们理解复杂量子多体系统提供重要指导。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.introduction {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.intro-content p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: justify;
}

.key-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.concept-card p {
  color: #4a5568;
  margin: 0;
}

.basic-form {
  background: #f7fafc;
}

.formulation-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-formula {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.main-formula h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.formula-box {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-left: 4px solid #667eea;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  text-align: center;
}

.formula-explanation {
  margin-top: 1.5rem;
}

.term-explanation h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.term-explanation ul {
  list-style: none;
  padding: 0;
}

.term-explanation li {
  padding: 0.5rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.term-explanation li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.detailed-analysis {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.detailed-analysis h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.analysis-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.analysis-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.math-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.math-content ul {
  list-style: none;
  padding: 0;
}

.math-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.math-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.interaction-function {
  background: #f0fff4;
}

.interaction-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.function-properties {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.function-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.property-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.property-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.property-content p {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-align: center;
}

.property-content p:last-child {
  font-family: inherit;
  background: none;
  padding: 0;
  text-align: left;
  font-style: italic;
}

.landau-parameters {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.landau-parameters h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.parameters-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.expansion-formula {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.expansion-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #2d3748;
}

.parameters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.parameter-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.parameter-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameter-card ul {
  list-style: none;
  padding: 0;
}

.parameter-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.parameter-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.variational-principle {
  background: #fffaf0;
}

.variational-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.principle-explanation {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.principle-explanation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.principle-explanation p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.variational-formula {
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.variational-formula p {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  margin: 0;
  color: #2d3748;
  font-weight: bold;
}

.equilibrium-conditions {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.equilibrium-conditions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #667eea;
}

.step-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.step-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.step-content p:last-child {
  font-family: inherit;
  background: none;
  padding: 0;
  text-align: left;
  font-style: italic;
  color: #4a5568;
}

.physical-applications {
  background: #f0f9ff;
}

.applications-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.thermodynamic-properties {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.thermodynamic-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.properties-calculation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.calc-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.calc-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.calc-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.calc-content ul {
  list-style: none;
  padding: 0;
}

.calc-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.calc-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.response-functions {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.response-functions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.response-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.response-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.response-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.response-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.response-content ul {
  list-style: none;
  padding: 0;
}

.response-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.response-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.stability-analysis {
  background: #fef5e7;
}

.stability-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stability-criteria {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.stability-criteria h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.stability-criteria > p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.criterion-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.criterion-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.criterion-content p {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.criterion-content ul {
  list-style: none;
  padding: 0;
}

.criterion-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.criterion-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.instability-types {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.instability-types h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.instability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.instability-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.instability-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.instability-content p {
  color: #4a5568;
  margin-bottom: 1rem;
  font-weight: 500;
}

.instability-content ul {
  list-style: none;
  padding: 0;
}

.instability-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.instability-content li::before {
  content: "⚠";
  position: absolute;
  left: 0;
  color: #f56565;
  font-weight: bold;
}

.experimental-verification {
  background: #f0fff4;
}

.experimental-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.measurement-methods {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.measurement-methods h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.method-content ul {
  list-style: none;
  padding: 0;
}

.method-content li {
  padding: 0.5rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.method-content li::before {
  content: "🔬";
  position: absolute;
  left: 0;
  font-size: 0.8rem;
}

.case-studies {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.case-studies h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.case-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.case-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.case-content p {
  color: #4a5568;
  margin-bottom: 1rem;
  font-weight: 600;
}

.case-content ul {
  list-style: none;
  padding: 0;
}

.case-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.case-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-developments {
  background: #f7fafc;
}

.developments-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theoretical-extensions {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.theoretical-extensions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.extension-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.extension-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.extension-content ul {
  list-style: none;
  padding: 0;
}

.extension-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.extension-content li::before {
  content: "🚀";
  position: absolute;
  left: 0;
  font-size: 0.8rem;
}

.computational-advances {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.computational-advances h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.computational-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.comp-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.comp-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comp-content ul {
  list-style: none;
  padding: 0;
}

.comp-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.comp-content li::before {
  content: "💻";
  position: absolute;
  left: 0;
  font-size: 0.8rem;
}

.summary {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.key-points {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.key-points h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.point-card {
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.point-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.point-card ul {
  list-style: none;
  padding: 0;
}

.point-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.point-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.future-outlook {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.future-outlook h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.future-outlook p {
  color: #4a5568;
  font-size: 1.1rem;
  text-align: justify;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .key-concepts,
  .properties-grid,
  .analysis-grid,
  .parameters-grid,
  .properties-calculation,
  .response-grid,
  .criteria-grid,
  .instability-grid,
  .methods-grid,
  .cases-grid,
  .extensions-grid,
  .computational-grid,
  .points-grid {
    grid-template-columns: 1fr;
  }
}
</style>