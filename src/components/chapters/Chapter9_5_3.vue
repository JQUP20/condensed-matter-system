<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.5.3 高维Heisenberg反铁磁体：非线性sigma模型场论</h1>
      <p class="chapter-subtitle">Higher-Dimensional Heisenberg Antiferromagnets: Nonlinear Sigma Model Field Theory</p>
    </div>

    <div class="content-section">
      <h2>从微观模型到连续场论</h2>
      <div class="concept-box">
        <h3>高维Heisenberg反铁磁体</h3>
        <p>高维Heisenberg反铁磁体展现出丰富的物理现象，其低能有效理论可以用非线性sigma模型描述：</p>
        <ul>
          <li>长程反铁磁序的建立</li>
          <li>Goldstone模式和自旋波</li>
          <li>量子涨落的重整化效应</li>
          <li>拓扑激发和孤子</li>
          <li>临界现象和相变</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>微观Heisenberg模型</h3>
        <p>d维反铁磁Heisenberg模型：</p>
        <div class="formula-block">
          H = J∑⟨i,j⟩ Ŝᵢ·Ŝⱼ
        </div>
        <p>其中J > 0，⟨i,j⟩表示最近邻格点对。在长波长极限下，引入交错磁化：</p>
        <div class="formula-block">
          n⃗(r⃗) = (-1)^{r⃗·Q⃗}⟨Ŝ(r⃗)⟩, |n⃗(r⃗)| = 1
        </div>
        <div class="formula-block">
          Q⃗ = (π,π,...,π)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>O(3)非线性sigma模型</h2>
      <div class="nlsm-theory">
        <div class="model-derivation">
          <h3>模型推导</h3>
          <div class="derivation-grid">
            <div class="derivation-card">
              <h4>连续化过程</h4>
              <p>从格点模型到连续场论：</p>
              <div class="formula-block">
                Ŝᵢ → S n⃗(x⃗), x⃗ = ia
              </div>
              <ul>
                <li>格常数a → 0</li>
                <li>自旋长度S → ∞</li>
                <li>保持ρₛ = JSa^{d-2}有限</li>
                <li>约束条件|n⃗(x⃗)| = 1</li>
              </ul>
            </div>

            <div class="derivation-card">
              <h4>有效作用量</h4>
              <p>O(3)非线性sigma模型：</p>
              <div class="formula-block">
                S = (ρₛ/2)∫d^d x (∇n⃗)²
              </div>
              <ul>
                <li>自旋刚度ρₛ</li>
                <li>O(3)对称性</li>
                <li>单位球面约束</li>
                <li>Goldstone模式</li>
              </ul>
            </div>

            <div class="derivation-card">
              <h4>对称性分析</h4>
              <p>对称性破缺模式：</p>
              <div class="formula-block">
                O(3) → O(2)
              </div>
              <ul>
                <li>连续对称性破缺</li>
                <li>两个Goldstone模式</li>
                <li>自旋波激发</li>
                <li>Mermin-Wagner定理</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="field-parametrization">
          <h3>场的参数化</h3>
          <div class="param-grid">
            <div class="param-card">
              <h4>球坐标参数化</h4>
              <div class="formula-block">
                n⃗ = (sin θ cos φ, sin θ sin φ, cos θ)
              </div>
              <div class="formula-block">
                S = (ρₛ/2)∫d^d x [(∇θ)² + sin²θ(∇φ)²]
              </div>
              <ul>
                <li>θ ∈ [0,π]：极角</li>
                <li>φ ∈ [0,2π]：方位角</li>
                <li>度规张量</li>
              </ul>
            </div>

            <div class="param-card">
              <h4>复数参数化</h4>
              <div class="formula-block">
                z = tan(θ/2)e^{iφ}
              </div>
              <div class="formula-block">
                n⃗ = (2Re[z], 2Im[z], 1-|z|²)/(1+|z|²)
              </div>
              <ul>
                <li>立体投影</li>
                <li>复平面表示</li>
                <li>共形不变性</li>
              </ul>
            </div>

            <div class="param-card">
              <h4>CP¹表示</h4>
              <div class="formula-block">
                n⃗ = z†σ⃗z, z†z = 1
              </div>
              <div class="formula-block">
                S = ρₛ∫d^d x |∇z|²
              </div>
              <ul>
                <li>复射影空间</li>
                <li>SU(2)对称性</li>
                <li>规范不变性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群分析</h2>
      <div class="rg-analysis">
        <div class="dimensional-analysis">
          <h3>维度分析</h3>
          <div class="dimension-grid">
            <div class="dimension-card">
              <h4>标度维数</h4>
              <p>场和耦合常数的维度：</p>
              <div class="formula-block">
                [n⃗] = 0, [ρₛ] = d-2
              </div>
              <ul>
                <li>d > 2: ρₛ相关</li>
                <li>d = 2: 边界情况</li>
                <li>d < 2: ρₛ不相关</li>
                <li>上临界维度d_c = 2</li>
              </ul>
            </div>

            <div class="dimension-card">
              <h4>Wilson-Fisher不动点</h4>
              <p>ε = 2-d展开：</p>
              <div class="formula-block">
                β(g) = -εg + bg² + O(g³)
              </div>
              <ul>
                <li>g = 1/ρₛ</li>
                <li>不动点g* = ε/b</li>
                <li>临界指数</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rg-equations">
          <h3>重整化群方程</h3>
          <div class="rg-grid">
            <div class="rg-card">
              <h4>一圈修正</h4>
              <p>自能和顶点修正：</p>
              <div class="formula-block">
                Σ(p) = (1/ρₛ)∫(d^d k/(2π)^d) 1/(k² + m²)
              </div>
              <ul>
                <li>红外发散</li>
                <li>质量重整化</li>
                <li>波函数重整化</li>
                <li>耦合常数流</li>
              </ul>
            </div>

            <div class="rg-card">
              <h4>β函数</h4>
              <div class="formula-block">
                β(g) = μ∂g/∂μ = -εg + (N-2)g²/(2π) + O(g³)
              </div>
              <ul>
                <li>N = 3 (O(3)模型)</li>
                <li>不动点g* = 2πε/(N-2)</li>
                <li>临界指数ν = 1/ε</li>
              </ul>
            </div>

            <div class="rg-card">
              <h4>异常维数</h4>
              <div class="formula-block">
                γ(g) = μ∂ln Z/∂μ = g²/(2π) + O(g³)
              </div>
              <ul>
                <li>场重整化</li>
                <li>异常标度</li>
                <li>临界指数η</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>拓扑激发和孤子</h2>
      <div class="topological-excitations">
        <div class="soliton-solutions">
          <h3>孤子解</h3>
          <div class="soliton-grid">
            <div class="soliton-card">
              <h4>一维孤子</h4>
              <p>一维情况下的孤子解：</p>
              <div class="formula-block">
                θ(x) = 2arctan(e^{x/ξ}), φ = const
              </div>
              <ul>
                <li>相关长度ξ</li>
                <li>拓扑荷Q = 1</li>
                <li>有限能量</li>
                <li>粒子性质</li>
              </ul>
            </div>

            <div class="soliton-card">
              <h4>二维涡旋</h4>
              <p>二维平面中的涡旋解：</p>
              <div class="formula-block">
                φ(r,θ) = nθ + φ₀, n ∈ Z
              </div>
              <ul>
                <li>涡旋数n</li>
                <li>对数发散能量</li>
                <li>Kosterlitz-Thouless相变</li>
                <li>涡旋-反涡旋对</li>
              </ul>
            </div>

            <div class="soliton-card">
              <h4>三维磁单极子</h4>
              <p>三维空间中的磁单极子：</p>
              <div class="formula-block">
                n⃗(r⃗) = r⃗/|r⃗|
              </div>
              <ul>
                <li>Hopf映射</li>
                <li>拓扑荷π₂(S²)</li>
                <li>有限能量</li>
                <li>磁单极子</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="topological-classification">
          <h3>拓扑分类</h3>
          <div class="classification-grid">
            <div class="class-card">
              <h4>同伦群</h4>
              <p>拓扑激发的分类：</p>
              <div class="formula-block">
                π_{d-1}(S^{N-1})
              </div>
              <ul>
                <li>d=1: π₀(S²) = 0</li>
                <li>d=2: π₁(S²) = 0</li>
                <li>d=3: π₂(S²) = Z</li>
                <li>d=4: π₃(S²) = Z</li>
              </ul>
            </div>

            <div class="class-card">
              <h4>拓扑荷</h4>
              <div class="formula-block">
                Q = (1/4π)∫ n⃗·(∂ₓn⃗ × ∂ᵧn⃗) dxdy
              </div>
              <ul>
                <li>整数量子化</li>
                <li>守恒量</li>
                <li>拓扑保护</li>
                <li>能量下界</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子涨落和1/N展开</h2>
      <div class="quantum-fluctuations">
        <div class="large-n-expansion">
          <h3>大N展开</h3>
          <div class="large-n-grid">
            <div class="large-n-card">
              <h4>O(N)推广</h4>
              <p>O(N)非线性sigma模型：</p>
              <div class="formula-block">
                S = (ρₛ/2)∫d^d x (∇n⃗)², n⃗·n⃗ = 1
              </div>
              <ul>
                <li>N个分量</li>
                <li>球面约束</li>
                <li>1/N展开</li>
                <li>鞍点近似</li>
              </ul>
            </div>

            <div class="large-n-card">
              <h4>辅助场方法</h4>
              <p>Lagrange乘子场：</p>
              <div class="formula-block">
                S = ∫d^d x [(ρₛ/2)(∇n⃗)² + λ(n⃗·n⃗ - 1)]
              </div>
              <ul>
                <li>约束场λ</li>
                <li>鞍点方程</li>
                <li>自洽条件</li>
                <li>动力学质量生成</li>
              </ul>
            </div>

            <div class="large-n-card">
              <h4>临界指数</h4>
              <p>大N极限下的结果：</p>
              <div class="formula-block">
                ν = 1/(d-2), η = 0
              </div>
              <ul>
                <li>平均场指数</li>
                <li>1/N修正</li>
                <li>临界维度</li>
                <li>交叉现象</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="quantum-corrections">
          <h3>量子修正</h3>
          <div class="corrections-grid">
            <div class="correction-card">
              <h4>零点涨落</h4>
              <p>基态能量的量子修正：</p>
              <div class="formula-block">
                ΔE₀ = -(1/2)∑ₖ ωₖ
              </div>
              <ul>
                <li>自旋波频谱</li>
                <li>紫外发散</li>
                <li>重整化</li>
                <li>Casimir效应</li>
              </ul>
            </div>

            <div class="correction-card">
              <h4>序参量约化</h4>
              <p>量子涨落对序参量的影响：</p>
              <div class="formula-block">
                ⟨n⃗²⟩ = 1 - δ, δ ~ 1/S
              </div>
              <ul>
                <li>序参量压制</li>
                <li>1/S展开</li>
                <li>量子无序</li>
                <li>相变临界点</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>有限温度性质</h2>
      <div class="finite-temperature">
        <div class="thermal-properties">
          <h3>热力学性质</h3>
          <div class="thermal-grid">
            <div class="thermal-card">
              <h4>Mermin-Wagner定理</h4>
              <p>低维系统中的长程序：</p>
              <div class="formula-block">
                d ≤ 2: 无长程序 (T > 0)
              </div>
              <ul>
                <li>Goldstone模式</li>
                <li>红外发散</li>
                <li>热涨落</li>
                <li>准长程序</li>
              </ul>
            </div>

            <div class="thermal-card">
              <h4>相关长度</h4>
              <p>温度依赖的相关长度：</p>
              <div class="formula-block">
                ξ(T) ~ e^{2πρₛ/T} (d = 2)
              </div>
              <ul>
                <li>指数增长</li>
                <li>BKT行为</li>
                <li>重整化群流</li>
                <li>标度律</li>
              </ul>
            </div>

            <div class="thermal-card">
              <h4>比热和磁化率</h4>
              <div class="formula-block">
                C ~ T^{d/2}, χ ~ T^{(d-2)/2}
              </div>
              <ul>
                <li>幂律行为</li>
                <li>维度依赖</li>
                <li>临界指数</li>
                <li>标度关系</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="phase-transitions">
          <h3>相变现象</h3>
          <div class="transition-grid">
            <div class="transition-card">
              <h4>二维BKT相变</h4>
              <p>Berezinskii-Kosterlitz-Thouless相变：</p>
              <div class="formula-block">
                T_{BKT} = (π/2)ρₛ
              </div>
              <ul>
                <li>涡旋解束缚</li>
                <li>无穷级相变</li>
                <li>普适跳跃</li>
                <li>重整化群流</li>
              </ul>
            </div>

            <div class="transition-card">
              <h4>三维相变</h4>
              <p>三维O(3)相变：</p>
              <div class="formula-block">
                ν ≈ 0.705, η ≈ 0.038
              </div>
              <ul>
                <li>连续相变</li>
                <li>O(3)普适类</li>
                <li>临界指数</li>
                <li>标度律</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测和材料实现</h2>
      <div class="experimental-section">
        <div class="material-realizations">
          <h3>材料实现</h3>
          <div class="materials-grid">
            <div class="material-card">
              <h4>二维磁性材料</h4>
              <ul>
                <li>K₂NiF₄</li>
                <li>La₂CuO₄</li>
                <li>BaNi₂(PO₄)₂</li>
                <li>石墨烯量子点</li>
              </ul>
              <p>特点：准二维结构，BKT相变</p>
            </div>

            <div class="material-card">
              <h4>三维反铁磁体</h4>
              <ul>
                <li>MnF₂</li>
                <li>FeF₂</li>
                <li>RbMnF₃</li>
                <li>CsMnF₃</li>
              </ul>
              <p>特点：三维长程序，O(3)相变</p>
            </div>

            <div class="material-card">
              <h4>量子磁体</h4>
              <ul>
                <li>TlCuCl₃</li>
                <li>NH₄CuCl₃</li>
                <li>BaCu₂Si₂O₇</li>
                <li>SrCu₂(BO₃)₂</li>
              </ul>
              <p>特点：强量子涨落，量子相变</p>
            </div>

            <div class="material-card">
              <h4>人工量子系统</h4>
              <ul>
                <li>冷原子气体</li>
                <li>离子阱</li>
                <li>超导量子比特</li>
                <li>光子晶格</li>
              </ul>
              <p>特点：高度可控，量子模拟</p>
            </div>
          </div>
        </div>

        <div class="experimental-techniques">
          <h3>实验技术</h3>
          <div class="techniques-grid">
            <div class="technique-card">
              <h4>中子散射</h4>
              <ul>
                <li>弹性散射</li>
                <li>非弹性散射</li>
                <li>自旋波谱</li>
                <li>临界散射</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>磁化率测量</h4>
              <ul>
                <li>直流磁化率</li>
                <li>交流磁化率</li>
                <li>临界指数</li>
                <li>标度分析</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>比热测量</h4>
              <ul>
                <li>相变信号</li>
                <li>临界指数</li>
                <li>熵变化</li>
                <li>量子涨落</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>光谱学方法</h4>
              <ul>
                <li>拉曼散射</li>
                <li>红外吸收</li>
                <li>太赫兹谱</li>
                <li>磁子模式</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论发展和应用</h2>
      <div class="theoretical-developments">
        <div class="advanced-topics">
          <h3>理论发展</h3>
          <div class="topics-grid">
            <div class="topic-card">
              <h4>共形场论</h4>
              <ul>
                <li>临界点理论</li>
                <li>算符代数</li>
                <li>中心荷</li>
                <li>标度维数</li>
              </ul>
            </div>

            <div class="topic-card">
              <h4>AdS/CFT对应</h4>
              <ul>
                <li>全息对偶</li>
                <li>强耦合系统</li>
                <li>量子临界点</li>
                <li>输运性质</li>
              </ul>
            </div>

            <div class="topic-card">
              <h4>机器学习方法</h4>
              <ul>
                <li>神经网络</li>
                <li>变分蒙特卡罗</li>
                <li>相变识别</li>
                <li>序参量发现</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="applications">
          <h3>应用前景</h3>
          <div class="applications-grid">
            <div class="app-card">
              <h4>量子计算</h4>
              <ul>
                <li>拓扑量子计算</li>
                <li>绝热量子计算</li>
                <li>量子模拟</li>
                <li>量子优化</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>自旋电子学</h4>
              <ul>
                <li>磁子学</li>
                <li>自旋流</li>
                <li>磁性存储</li>
                <li>自旋器件</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>量子材料</h4>
              <ul>
                <li>拓扑绝缘体</li>
                <li>量子自旋液体</li>
                <li>多铁性材料</li>
                <li>磁性拓扑材料</li>
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
          <h3>理论框架</h3>
          <ul>
            <li>非线性sigma模型</li>
            <li>重整化群理论</li>
            <li>大N展开</li>
            <li>拓扑场论</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>量子涨落效应</li>
            <li>拓扑激发</li>
            <li>相变临界性</li>
            <li>维度效应</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>计算方法</h3>
          <ul>
            <li>重整化群</li>
            <li>ε展开</li>
            <li>1/N展开</li>
            <li>数值模拟</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验验证</h3>
          <ul>
            <li>材料实现</li>
            <li>测量技术</li>
            <li>临界指数</li>
            <li>量子模拟</li>
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

.derivation-grid, .param-grid, .dimension-grid, .rg-grid, .soliton-grid, .classification-grid, .large-n-grid, .corrections-grid, .thermal-grid, .transition-grid, .materials-grid, .techniques-grid, .topics-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.derivation-card, .param-card, .dimension-card, .rg-card, .soliton-card, .class-card, .large-n-card, .correction-card, .thermal-card, .transition-card, .material-card, .technique-card, .topic-card, .app-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.derivation-card:hover, .param-card:hover, .dimension-card:hover, .rg-card:hover, .soliton-card:hover, .class-card:hover, .large-n-card:hover, .correction-card:hover, .thermal-card:hover, .transition-card:hover, .material-card:hover, .technique-card:hover, .topic-card:hover, .app-card:hover {
  transform: translateY(-5px);
}

.derivation-card h4, .param-card h4, .dimension-card h4, .rg-card h4, .soliton-card h4, .class-card h4, .large-n-card h4, .correction-card h4, .thermal-card h4, .transition-card h4, .material-card h4, .technique-card h4, .topic-card h4, .app-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
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
  
  .derivation-grid, .param-grid, .dimension-grid, .rg-grid, .soliton-grid, .classification-grid, .large-n-grid, .corrections-grid, .thermal-grid, .transition-grid, .materials-grid, .techniques-grid, .topics-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>