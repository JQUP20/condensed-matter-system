<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.4.4 二维无自旋费米子体系：临界玻色型液态和非费米液体</h1>
      <p class="chapter-subtitle">Two-Dimensional Spinless Fermions: Critical Bose Liquids and Non-Fermi Liquids</p>
    </div>

    <div class="content-section">
      <h2>非费米液体理论概述</h2>
      <div class="concept-box">
        <h3>费米液体理论的局限性</h3>
        <p>在强关联系统中，传统的Landau费米液体理论可能失效：</p>
        <ul>
          <li>准粒子图像的破坏</li>
          <li>异常的输运性质</li>
          <li>非解析的自能</li>
          <li>量子临界行为</li>
          <li>奇异金属相的出现</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>非费米液体的特征</h3>
        <p>非费米液体系统的典型特征：</p>
        <div class="formula-block">
          ρ(T) ∝ T^α, α ≠ 2 (异常电阻率)
        </div>
        <div class="formula-block">
          C(T) ∝ T^γ log T (异常比热)
        </div>
        <div class="formula-block">
          χ(T) ∝ T^β (异常磁化率)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>临界玻色型液态</h2>
      <div class="bose-liquid-theory">
        <div class="concept-box">
          <h3>玻色型液态的概念</h3>
          <p>临界玻色型液态是一种新的量子物质相：</p>
          <ul>
            <li>费米子通过玻色子激发耦合</li>
            <li>临界玻色子的软化</li>
            <li>非费米液体行为的出现</li>
            <li>量子临界点附近的物理</li>
          </ul>
        </div>

        <div class="bose-mechanism">
          <h3>玻色型耦合机制</h3>
          <div class="mechanism-grid">
            <div class="mechanism-card">
              <h4>自旋涨落耦合</h4>
              <p>费米子与自旋涨落的耦合：</p>
              <div class="formula-block">
                H_int = g ∑_k ψ†_k σ·S_q ψ_{k+q}
              </div>
              <ul>
                <li>反铁磁涨落</li>
                <li>临界慢化</li>
                <li>动力学指数z ≠ 1</li>
              </ul>
            </div>

            <div class="mechanism-card">
              <h4>声子耦合</h4>
              <p>费米子与声子的强耦合：</p>
              <div class="formula-block">
                H_ep = λ ∑_k ψ†_k (u_q·∇_k ε_k) ψ_{k+q}
              </div>
              <ul>
                <li>电子-声子相互作用</li>
                <li>Jahn-Teller效应</li>
                <li>极化子形成</li>
              </ul>
            </div>

            <div class="mechanism-card">
              <h4>电荷涨落</h4>
              <p>费米子与电荷密度涨落：</p>
              <div class="formula-block">
                H_charge = V ∑_q ρ_q ρ_{-q}
              </div>
              <ul>
                <li>库仑相互作用</li>
                <li>等离子体激发</li>
                <li>Wigner晶体化</li>
              </ul>
            </div>

            <div class="mechanism-card">
              <h4>轨道涨落</h4>
              <p>多轨道系统中的轨道自由度：</p>
              <div class="formula-block">
                H_orb = J ∑_i T_i·T_{i+1}
              </div>
              <ul>
                <li>轨道有序</li>
                <li>Jahn-Teller畸变</li>
                <li>轨道液体</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子临界点理论</h2>
      <div class="quantum-critical">
        <div class="critical-theory">
          <h3>量子临界点的分类</h3>
          <div class="qcp-grid">
            <div class="qcp-card hertz">
              <h4>Hertz-Millis理论</h4>
              <p>传统的量子临界点理论：</p>
              <div class="formula-block">
                S_eff = ∫ d^d r dτ [|∇φ|² + r|φ|² + u|φ|⁴ + ...]
              </div>
              <ul>
                <li>序参量场论</li>
                <li>高斯固定点</li>
                <li>上临界维数</li>
                <li>平均场指数</li>
              </ul>
            </div>

            <div class="qcp-card non-hertz">
              <h4>非Hertz类临界点</h4>
              <p>超越传统理论的临界点：</p>
              <div class="formula-block">
                z ≠ 2, η ≠ 0
              </div>
              <ul>
                <li>异常动力学指数</li>
                <li>非高斯固定点</li>
                <li>强耦合效应</li>
                <li>非解析行为</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scaling-theory">
          <h3>标度理论</h3>
          <div class="scaling-analysis">
            <div class="scaling-card">
              <h4>动力学标度</h4>
              <p>时间和空间的不同标度行为：</p>
              <div class="formula-block">
                t → b^z t, x → b x
              </div>
              <p>其中z是动力学临界指数</p>
            </div>

            <div class="scaling-card">
              <h4>有限尺寸标度</h4>
              <p>有限系统中的标度行为：</p>
              <div class="formula-block">
                F(T,L) = L^{-d} f(TL^z)
              </div>
              <p>其中L是系统尺寸</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>边际费米液体理论</h2>
      <div class="marginal-fl">
        <div class="marginal-concept">
          <h3>边际费米液体的特征</h3>
          <div class="concept-box">
            <p>边际费米液体是介于费米液体和非费米液体之间的状态：</p>
            <ul>
              <li>对数修正的准粒子寿命</li>
              <li>线性电阻率</li>
              <li>对数增强的比热</li>
              <li>临界维数d = 2的特殊性</li>
            </ul>
          </div>
        </div>

        <div class="marginal-properties">
          <h3>边际费米液体的性质</h3>
          <div class="properties-grid">
            <div class="property-card">
              <h4>自能结构</h4>
              <div class="formula-block">
                Σ(k,ω) = -iΓ₀ω log(ω/ω₀)
              </div>
              <ul>
                <li>对数奇异性</li>
                <li>准粒子峰的展宽</li>
                <li>谱权重的重分布</li>
              </ul>
            </div>

            <div class="property-card">
              <h4>输运性质</h4>
              <div class="formula-block">
                ρ(T) = ρ₀ + AT
              </div>
              <ul>
                <li>线性电阻率</li>
                <li>异常霍尔效应</li>
                <li>热电效应</li>
              </ul>
            </div>

            <div class="property-card">
              <h4>热力学性质</h4>
              <div class="formula-block">
                C(T) = γT log(T₀/T)
              </div>
              <ul>
                <li>对数增强比热</li>
                <li>磁化率的温度依赖</li>
                <li>熵的行为</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>奇异金属相</h2>
      <div class="strange-metal">
        <div class="strange-properties">
          <h3>奇异金属的特征</h3>
          <div class="strange-grid">
            <div class="strange-card transport">
              <h4>输运异常</h4>
              <ul>
                <li>线性电阻率：ρ ∝ T</li>
                <li>违反Drude公式</li>
                <li>异常的霍尔角</li>
                <li>热电系数异常</li>
              </ul>
            </div>

            <div class="strange-card spectral">
              <h4>谱学异常</h4>
              <ul>
                <li>准粒子峰的消失</li>
                <li>非相干背景</li>
                <li>赝能隙现象</li>
                <li>动量依赖的自能</li>
              </ul>
            </div>

            <div class="strange-card thermodynamic">
              <h4>热力学异常</h4>
              <ul>
                <li>增强的比热系数</li>
                <li>异常的磁化率</li>
                <li>熵的非费米液体行为</li>
                <li>量子临界标度</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="theoretical-models">
          <h3>理论模型</h3>
          <div class="model-grid">
            <div class="model-card">
              <h4>SYK模型</h4>
              <p>Sachdev-Ye-Kitaev模型：</p>
              <div class="formula-block">
                H = ∑_{i&lt;j&lt;k&lt;l} J_{ijkl} c<sup>†</sup>_i c_j c<sup>†</sup>_k c_l
              </div>
              <ul>
                <li>最大混沌</li>
                <li>全息对偶</li>
                <li>非费米液体</li>
              </ul>
            </div>

            <div class="model-card">
              <h4>Planckian耗散</h4>
              <p>普朗克尺度的耗散：</p>
              <div class="formula-block">
                τ⁻¹ ~ k_B T/ℏ
              </div>
              <ul>
                <li>量子极限</li>
                <li>普适常数</li>
                <li>输运边界</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测和材料实现</h2>
      <div class="experimental-section">
        <div class="materials-examples">
          <h3>典型材料系统</h3>
          <div class="materials-grid">
            <div class="material-card cuprates">
              <h4>铜氧化物超导体</h4>
              <ul>
                <li>La₂₋ₓSrₓCuO₄</li>
                <li>YBa₂Cu₃O₇₋δ</li>
                <li>Bi₂Sr₂CaCu₂O₈₊δ</li>
              </ul>
              <p>特征：赝能隙、奇异金属、d波超导</p>
            </div>

            <div class="material-card heavy-fermion">
              <h4>重费米子系统</h4>
              <ul>
                <li>CeCu₆₋ₓAuₓ</li>
                <li>YbRh₂Si₂</li>
                <li>CeCoIn₅</li>
              </ul>
              <p>特征：量子临界点、非费米液体、大有效质量</p>
            </div>

            <div class="material-card iron-based">
              <h4>铁基超导体</h4>
              <ul>
                <li>BaFe₂As₂</li>
                <li>FeSe</li>
                <li>LaFeAsO</li>
              </ul>
              <p>特征：向列相、轨道涨落、s±配对</p>
            </div>

            <div class="material-card twisted">
              <h4>扭转双分子层</h4>
              <ul>
                <li>扭转双层石墨烯</li>
                <li>扭转TMD</li>
                <li>摩尔超晶格</li>
              </ul>
              <p>特征：平带、强关联、可调性</p>
            </div>
          </div>
        </div>

        <div class="experimental-techniques">
          <h3>实验技术</h3>
          <div class="technique-grid">
            <div class="technique-card">
              <h4>角分辨光电子谱</h4>
              <ul>
                <li>费米面映射</li>
                <li>准粒子谱权重</li>
                <li>自能提取</li>
                <li>能隙结构</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>量子振荡</h4>
              <ul>
                <li>de Haas-van Alphen</li>
                <li>Shubnikov-de Haas</li>
                <li>有效质量</li>
                <li>散射时间</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>中子散射</h4>
              <ul>
                <li>磁性激发</li>
                <li>自旋涨落</li>
                <li>动力学结构因子</li>
                <li>临界散射</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>输运测量</h4>
              <ul>
                <li>电阻率</li>
                <li>霍尔效应</li>
                <li>热导率</li>
                <li>Nernst效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论计算方法</h2>
      <div class="theoretical-methods">
        <div class="method-grid">
          <div class="method-card">
            <h3>动力学平均场理论</h3>
            <ul>
              <li>局域自能近似</li>
              <li>杂质求解器</li>
              <li>集团扩展</li>
              <li>双时格林函数</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>量子蒙特卡罗</h3>
            <ul>
              <li>连续时间算法</li>
              <li>辅助场方法</li>
              <li>解析延拓</li>
              <li>有限尺寸标度</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>函数重整化群</h3>
            <ul>
              <li>频率依赖顶点</li>
              <li>多回路计算</li>
              <li>截断方案</li>
              <li>流方程求解</li>
            </ul>
          </div>

          <div class="method-card">
            <h3>全息对偶</h3>
            <ul>
              <li>AdS/CFT对应</li>
              <li>黑洞物理</li>
              <li>引力双重描述</li>
              <li>强耦合极限</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>开放问题和未来方向</h2>
      <div class="future-directions">
        <div class="open-problems">
          <h3>主要开放问题</h3>
          <div class="problem-grid">
            <div class="problem-card">
              <h4>奇异金属的微观机制</h4>
              <ul>
                <li>线性电阻率的起源</li>
                <li>Planckian耗散的普适性</li>
                <li>量子临界性的角色</li>
              </ul>
            </div>

            <div class="problem-card">
              <h4>非费米液体的分类</h4>
              <ul>
                <li>不同类型的非费米液体</li>
                <li>普适性类别</li>
                <li>相变的性质</li>
              </ul>
            </div>

            <div class="problem-card">
              <h4>高温超导机制</h4>
              <ul>
                <li>配对机制</li>
                <li>赝能隙的本质</li>
                <li>竞争序参量</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-research">
          <h3>未来研究方向</h3>
          <div class="research-grid">
            <div class="research-card">
              <h4>新材料平台</h4>
              <ul>
                <li>扭转双分子层系统</li>
                <li>摩尔超晶格</li>
                <li>拓扑材料</li>
                <li>人工量子材料</li>
              </ul>
            </div>

            <div class="research-card">
              <h4>理论发展</h4>
              <ul>
                <li>机器学习方法</li>
                <li>张量网络</li>
                <li>全息理论</li>
                <li>量子信息观点</li>
              </ul>
            </div>

            <div class="research-card">
              <h4>实验技术</h4>
              <ul>
                <li>时间分辨谱学</li>
                <li>扫描探针技术</li>
                <li>量子模拟</li>
                <li>极端条件物理</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论概念</h3>
          <ul>
            <li>非费米液体理论</li>
            <li>临界玻色型液态</li>
            <li>边际费米液体</li>
            <li>量子临界点</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>奇异金属相</li>
            <li>线性电阻率</li>
            <li>准粒子相干性丧失</li>
            <li>Planckian耗散</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>材料实现</h3>
          <ul>
            <li>铜氧化物超导体</li>
            <li>重费米子系统</li>
            <li>铁基超导体</li>
            <li>扭转双分子层</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>研究方法</h3>
          <ul>
            <li>动力学平均场</li>
            <li>量子蒙特卡罗</li>
            <li>函数重整化群</li>
            <li>全息对偶</li>
          </ul>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
  font-family: 'Times New Roman', serif;
}

.mechanism-grid, .qcp-grid, .properties-grid, .strange-grid, .model-grid, .materials-grid, .technique-grid, .method-grid, .problem-grid, .research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.mechanism-card, .qcp-card, .property-card, .strange-card, .model-card, .material-card, .technique-card, .method-card, .problem-card, .research-card, .scaling-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.mechanism-card:hover, .qcp-card:hover, .property-card:hover, .strange-card:hover, .model-card:hover, .material-card:hover, .technique-card:hover, .method-card:hover, .problem-card:hover, .research-card:hover, .scaling-card:hover {
  transform: translateY(-5px);
}

.mechanism-card h4, .qcp-card h4, .property-card h4, .strange-card h4, .model-card h4, .material-card h4, .technique-card h4, .method-card h3, .problem-card h4, .research-card h4, .scaling-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.qcp-card.hertz {
  border-top-color: #3498db;
}

.qcp-card.hertz h4 {
  color: #3498db;
}

.qcp-card.non-hertz {
  border-top-color: #e74c3c;
}

.strange-card.transport {
  border-top-color: #e74c3c;
}

.strange-card.transport h4 {
  color: #e74c3c;
}

.strange-card.spectral {
  border-top-color: #9b59b6;
}

.strange-card.spectral h4 {
  color: #9b59b6;
}

.strange-card.thermodynamic {
  border-top-color: #f39c12;
}

.strange-card.thermodynamic h4 {
  color: #f39c12;
}

.material-card.cuprates {
  border-top-color: #e74c3c;
}

.material-card.cuprates h4 {
  color: #e74c3c;
}

.material-card.heavy-fermion {
  border-top-color: #3498db;
}

.material-card.heavy-fermion h4 {
  color: #3498db;
}

.material-card.iron-based {
  border-top-color: #f39c12;
}

.material-card.iron-based h4 {
  color: #f39c12;
}

.material-card.twisted {
  border-top-color: #9b59b6;
}

.material-card.twisted h4 {
  color: #9b59b6;
}

.scaling-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .mechanism-grid, .qcp-grid, .properties-grid, .strange-grid, .model-grid, .materials-grid, .technique-grid, .method-grid, .problem-grid, .research-grid {
    grid-template-columns: 1fr;
  }
  
  .scaling-analysis {
    grid-template-columns: 1fr;
  }
}
</style>