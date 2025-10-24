<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.5.2 一维量子反铁磁Heisenberg反铁磁链模型</h1>
      <p class="chapter-subtitle">One-Dimensional Quantum Antiferromagnetic Heisenberg Chain Model</p>
    </div>

    <div class="content-section">
      <h2>Heisenberg模型基础</h2>
      <div class="concept-box">
        <h3>一维反铁磁Heisenberg链</h3>
        <p>一维反铁磁Heisenberg链是量子磁性的经典模型，描述相邻自旋之间的反铁磁交换相互作用：</p>
        <ul>
          <li>最简单的量子多体系统</li>
          <li>精确可解的量子模型</li>
          <li>量子涨落的重要性</li>
          <li>拓扑性质和边界态</li>
          <li>实验可实现的系统</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>Hamiltonian和基本性质</h3>
        <p>一维反铁磁Heisenberg链的Hamiltonian：</p>
        <div class="formula-block">
          H = J∑ᵢ Ŝᵢ·Ŝᵢ₊₁ = J∑ᵢ [SᵢˣSᵢ₊₁ˣ + SᵢʸSᵢ₊₁ʸ + SᵢᶻSᵢ₊₁ᶻ]
        </div>
        <p>其中J > 0为反铁磁交换常数。对于S=1/2情况：</p>
        <div class="formula-block">
          H = (J/2)∑ᵢ [Sᵢ⁺Sᵢ₊₁⁻ + Sᵢ⁻Sᵢ₊₁⁺ + SᵢᶻSᵢ₊₁ᶻ]
        </div>
        <div class="formula-block">
          Sᵢ± = Sᵢˣ ± iSᵢʸ
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Bethe Ansatz精确解</h2>
      <div class="bethe-ansatz">
        <div class="ansatz-method">
          <h3>Bethe Ansatz方法</h3>
          <div class="method-grid">
            <div class="method-card">
              <h4>坐标Bethe Ansatz</h4>
              <p>对于S=1/2链的精确求解：</p>
              <div class="formula-block">
                |ψ⟩ = ∑ₚ A(P)∏ⱼ Sⱼ⁻|↑↑...↑⟩
              </div>
              <ul>
                <li>多粒子散射态</li>
                <li>Yang-Baxter方程</li>
                <li>Bethe方程</li>
                <li>准粒子激发</li>
              </ul>
            </div>

            <div class="method-card">
              <h4>Bethe方程</h4>
              <p>准动量的量子化条件：</p>
              <div class="formula-block">
                e^{ikⱼL} = ∏ₗ≠ⱼ (sin(kⱼ/2) - sin(kₗ/2) + i)/(sin(kⱼ/2) - sin(kₗ/2) - i)
              </div>
              <ul>
                <li>周期边界条件</li>
                <li>相位因子</li>
                <li>散射矩阵</li>
                <li>能谱计算</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ground-state">
          <h3>基态性质</h3>
          <div class="ground-state-grid">
            <div class="gs-card">
              <h4>基态能量</h4>
              <div class="formula-block">
                E₀/N = J/4 - J ln(2) ≈ -0.443147J
              </div>
              <ul>
                <li>每个键的能量</li>
                <li>量子涨落修正</li>
                <li>经典极限比较</li>
              </ul>
            </div>

            <div class="gs-card">
              <h4>关联函数</h4>
              <div class="formula-block">
                ⟨Sᵢᶻ Sⱼᶻ⟩ ~ (-1)^{|i-j|} |i-j|^{-1/2}
              </div>
              <ul>
                <li>代数衰减</li>
                <li>交替符号</li>
                <li>临界行为</li>
              </ul>
            </div>

            <div class="gs-card">
              <h4>能隙和激发</h4>
              <div class="formula-block">
                Δ = πJ/2 (Haldane猜想)
              </div>
              <ul>
                <li>S=1/2无能隙</li>
                <li>S=1有能隙</li>
                <li>拓扑区别</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>低能有效理论</h2>
      <div class="effective-theory">
        <div class="bosonization">
          <h3>玻色化理论</h3>
          <div class="bosonization-grid">
            <div class="boson-card">
              <h4>Jordan-Wigner变换</h4>
              <p>自旋算符到费米子的映射：</p>
              <div class="formula-block">
                Sⱼ⁺ = cⱼ†e^{iπ∑ₖ<ⱼ cₖ†cₖ}, Sⱼᶻ = cⱼ†cⱼ - 1/2
              </div>
              <ul>
                <li>费米子表示</li>
                <li>弦算符</li>
                <li>非局域性</li>
                <li>一维特殊性</li>
              </ul>
            </div>

            <div class="boson-card">
              <h4>连续化极限</h4>
              <p>低能长波长有效理论：</p>
              <div class="formula-block">
                H = (v/2)∫dx [Π² + (∂ₓφ)²]
              </div>
              <ul>
                <li>Luttinger液体</li>
                <li>共形场论</li>
                <li>c=1 CFT</li>
                <li>临界指数</li>
              </ul>
            </div>

            <div class="boson-card">
              <h4>非线性σ模型</h4>
              <p>O(3)非线性σ模型：</p>
              <div class="formula-block">
                S = (1/2g)∫dτdx [(∂τn⃗)² + v²(∂ₓn⃗)²]
              </div>
              <ul>
                <li>连续对称性</li>
                <li>拓扑项</li>
                <li>重整化群</li>
                <li>渐近自由</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="critical-properties">
          <h3>临界性质</h3>
          <div class="critical-grid">
            <div class="critical-card">
              <h4>共形不变性</h4>
              <div class="formula-block">
                c = 1, Δₙ = n²/4 (n = 1,2,3,...)
              </div>
              <ul>
                <li>中心荷c=1</li>
                <li>标度维数</li>
                <li>算符代数</li>
                <li>Virasoro代数</li>
              </ul>
            </div>

            <div class="critical-card">
              <h4>关联函数指数</h4>
              <div class="formula-block">
                ⟨S⁺(x)S⁻(0)⟩ ~ x^{-1/2}, ⟨Sᶻ(x)Sᶻ(0)⟩ ~ (-1)ˣx^{-1/2}
              </div>
              <ul>
                <li>幂律衰减</li>
                <li>普适指数</li>
                <li>对数修正</li>
              </ul>
            </div>

            <div class="critical-card">
              <h4>动力学性质</h4>
              <div class="formula-block">
                S(q,ω) ~ δ(ω - v|q|)/|q|^{1/2}
              </div>
              <ul>
                <li>线性色散</li>
                <li>自旋波速度</li>
                <li>奇异谱函数</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Haldane猜想和拓扑性质</h2>
      <div class="haldane-conjecture">
        <div class="conjecture-statement">
          <h3>Haldane猜想</h3>
          <div class="concept-box">
            <p>Haldane在1983年提出的著名猜想：</p>
            <ul>
              <li><strong>整数自旋链</strong>：具有有限能隙，基态是唯一的</li>
              <li><strong>半整数自旋链</strong>：无能隙，基态是临界的</li>
              <li>拓扑起源：Berry相位和θ项</li>
              <li>对称性保护的拓扑相</li>
            </ul>
          </div>
        </div>

        <div class="topological-analysis">
          <h3>拓扑分析</h3>
          <div class="topology-grid">
            <div class="topology-card">
              <h4>θ项和Berry相位</h4>
              <p>拓扑项的起源：</p>
              <div class="formula-block">
                θ = 2πS (mod 2π)
              </div>
              <ul>
                <li>S=1/2: θ=π (临界)</li>
                <li>S=1: θ=0 (有隙)</li>
                <li>Berry相位贡献</li>
                <li>WZW项</li>
              </ul>
            </div>

            <div class="topology-card">
              <h4>边界态</h4>
              <p>开边界条件下的边界自旋：</p>
              <div class="formula-block">
                H_edge = h∑_{boundary} Sᶻ
              </div>
              <ul>
                <li>S=1/2边界自旋</li>
                <li>拓扑保护</li>
                <li>Kramers定理</li>
                <li>边界-体对应</li>
              </ul>
            </div>

            <div class="topology-card">
              <h4>对称性保护</h4>
              <div class="formula-block">
                Z₂ × Z₂ᵀ 对称性
              </div>
              <ul>
                <li>时间反演对称</li>
                <li>π旋转对称</li>
                <li>SPT相分类</li>
                <li>群上同调</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子蒙特卡罗和数值方法</h2>
      <div class="numerical-methods">
        <div class="qmc-methods">
          <h3>量子蒙特卡罗方法</h3>
          <div class="qmc-grid">
            <div class="qmc-card">
              <h4>随机级数展开(SSE)</h4>
              <p>高温级数的蒙特卡罗采样：</p>
              <div class="formula-block">
                Z = Tr[e^{-βH}] = ∑ₙ (-β)ⁿ/n! Tr[Hⁿ]
              </div>
              <ul>
                <li>对角化更新</li>
                <li>非对角更新</li>
                <li>无符号问题</li>
                <li>高精度结果</li>
              </ul>
            </div>

            <div class="qmc-card">
              <h4>量子Wang-Landau</h4>
              <p>态密度的直接计算：</p>
              <div class="formula-block">
                g(E) = ⟨δ(E - H)⟩
              </div>
              <ul>
                <li>平坦直方图</li>
                <li>熵计算</li>
                <li>相变研究</li>
                <li>临界指数</li>
              </ul>
            </div>

            <div class="qmc-card">
              <h4>连续时间QMC</h4>
              <p>连续虚时间的蒙特卡罗：</p>
              <div class="formula-block">
                Z = ∫₀^β dτ₁...∫₀^β dτₙ ⟨ψ₀|T[H(τ₁)...H(τₙ)]|ψ₀⟩
              </div>
              <ul>
                <li>蠕虫算法</li>
                <li>动力学量</li>
                <li>解析延拓</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="other-methods">
          <h3>其他数值方法</h3>
          <div class="methods-grid">
            <div class="method-card">
              <h4>密度矩阵重整化群(DMRG)</h4>
              <ul>
                <li>基态精确求解</li>
                <li>纠缠熵计算</li>
                <li>矩阵乘积态</li>
                <li>一维系统优势</li>
              </ul>
            </div>

            <div class="method-card">
              <h4>精确对角化(ED)</h4>
              <ul>
                <li>小系统精确解</li>
                <li>有限尺寸标度</li>
                <li>动力学性质</li>
                <li>基准测试</li>
              </ul>
            </div>

            <div class="method-card">
              <h4>张量网络方法</h4>
              <ul>
                <li>MPS/MPO表示</li>
                <li>时间演化</li>
                <li>无限系统</li>
                <li>纠缠结构</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验实现和材料</h2>
      <div class="experimental-section">
        <div class="material-systems">
          <h3>实验材料系统</h3>
          <div class="materials-grid">
            <div class="material-card">
              <h4>铜氧化物链</h4>
              <ul>
                <li>Sr₂CuO₃</li>
                <li>SrCuO₂</li>
                <li>CuGeO₃</li>
                <li>准一维结构</li>
              </ul>
              <p>特点：强交换相互作用，良好的一维性</p>
            </div>

            <div class="material-card">
              <h4>有机磁体</h4>
              <ul>
                <li>TMMC</li>
                <li>CuPM</li>
                <li>NENP</li>
                <li>分子磁体</li>
              </ul>
              <p>特点：可调参数，化学修饰</p>
            </div>

            <div class="material-card">
              <h4>冷原子系统</h4>
              <ul>
                <li>光晶格</li>
                <li>Feshbach共振</li>
                <li>可调相互作用</li>
                <li>量子模拟</li>
              </ul>
              <p>特点：高度可控，清洁系统</p>
            </div>

            <div class="material-card">
              <h4>量子点阵列</h4>
              <ul>
                <li>半导体量子点</li>
                <li>人工原子</li>
                <li>电学调控</li>
                <li>单自旋操控</li>
              </ul>
              <p>特点：精确控制，可扩展</p>
            </div>
          </div>
        </div>

        <div class="experimental-techniques">
          <h3>实验技术</h3>
          <div class="techniques-grid">
            <div class="technique-card">
              <h4>中子散射</h4>
              <ul>
                <li>磁结构因子</li>
                <li>自旋波谱</li>
                <li>动力学结构因子</li>
                <li>临界散射</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>磁化率测量</h4>
              <ul>
                <li>温度依赖性</li>
                <li>Bonner-Fisher公式</li>
                <li>能隙确定</li>
                <li>交换常数</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>比热测量</h4>
              <ul>
                <li>熵变化</li>
                <li>相变信号</li>
                <li>能标确定</li>
                <li>量子临界性</li>
              </ul>
            </div>

            <div class="technique-card">
              <h4>ESR/NMR</h4>
              <ul>
                <li>局域磁场</li>
                <li>自旋动力学</li>
                <li>弛豫时间</li>
                <li>相关函数</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>推广和变形</h2>
      <div class="generalizations">
        <div class="model-variations">
          <h3>模型变形</h3>
          <div class="variations-grid">
            <div class="variation-card">
              <h4>XXZ模型</h4>
              <p>各向异性Heisenberg模型：</p>
              <div class="formula-block">
                H = J∑ᵢ [SᵢˣSᵢ₊₁ˣ + SᵢʸSᵢ₊₁ʸ + ΔSᵢᶻSᵢ₊₁ᶻ]
              </div>
              <ul>
                <li>Δ < 1: XY相</li>
                <li>Δ = 1: Heisenberg点</li>
                <li>Δ > 1: Ising相</li>
                <li>Kosterlitz-Thouless相变</li>
              </ul>
            </div>

            <div class="variation-card">
              <h4>J₁-J₂模型</h4>
              <p>次近邻相互作用：</p>
              <div class="formula-block">
                H = J₁∑ᵢ Sᵢ·Sᵢ₊₁ + J₂∑ᵢ Sᵢ·Sᵢ₊₂
              </div>
              <ul>
                <li>阻挫效应</li>
                <li>二聚化相</li>
                <li>临界点</li>
                <li>拓扑相变</li>
              </ul>
            </div>

            <div class="variation-card">
              <h4>自旋梯子</h4>
              <p>耦合的自旋链：</p>
              <div class="formula-block">
                H = J∥∑ᵢ(S₁ᵢ·S₁ᵢ₊₁ + S₂ᵢ·S₂ᵢ₊₁) + J⊥∑ᵢ S₁ᵢ·S₂ᵢ
              </div>
              <ul>
                <li>偶数腿：有隙</li>
                <li>奇数腿：无隙</li>
                <li>Haldane相</li>
                <li>准一维性</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="higher-dimensions">
          <h3>高维推广</h3>
          <div class="dimensions-grid">
            <div class="dim-card">
              <h4>二维方格子</h4>
              <ul>
                <li>长程Néel序</li>
                <li>自旋波理论</li>
                <li>量子涨落</li>
                <li>RVB态</li>
              </ul>
            </div>

            <div class="dim-card">
              <h4>阻挫系统</h4>
              <ul>
                <li>三角晶格</li>
                <li>Kagome晶格</li>
                <li>量子自旋液体</li>
                <li>拓扑序</li>
              </ul>
            </div>

            <div class="dim-card">
              <h4>三维系统</h4>
              <ul>
                <li>立方晶格</li>
                <li>经典相变</li>
                <li>O(3)普适类</li>
                <li>临界指数</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论意义和应用</h2>
      <div class="significance-applications">
        <div class="theoretical-significance">
          <h3>理论意义</h3>
          <div class="significance-grid">
            <div class="significance-card">
              <h4>量子多体理论</h4>
              <ul>
                <li>精确可解模型</li>
                <li>Bethe Ansatz方法</li>
                <li>积分性质</li>
                <li>Yang-Baxter方程</li>
              </ul>
            </div>

            <div class="significance-card">
              <h4>共形场论</h4>
              <ul>
                <li>c=1 CFT</li>
                <li>Virasoro代数</li>
                <li>临界指数</li>
                <li>有限尺寸标度</li>
              </ul>
            </div>

            <div class="significance-card">
              <h4>拓扑量子态</h4>
              <ul>
                <li>SPT相</li>
                <li>边界态</li>
                <li>拓扑不变量</li>
                <li>分类理论</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="applications">
          <h3>实际应用</h3>
          <div class="applications-grid">
            <div class="app-card">
              <h4>量子计算</h4>
              <ul>
                <li>量子模拟</li>
                <li>绝热量子计算</li>
                <li>拓扑量子计算</li>
                <li>量子纠错</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>自旋电子学</h4>
              <ul>
                <li>自旋流</li>
                <li>自旋泵浦</li>
                <li>磁阻效应</li>
                <li>自旋器件</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>量子信息</h4>
              <ul>
                <li>量子纠缠</li>
                <li>量子通信</li>
                <li>量子传感</li>
                <li>量子存储</li>
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
          <h3>精确解</h3>
          <ul>
            <li>Bethe Ansatz方法</li>
            <li>基态能量和激发</li>
            <li>关联函数</li>
            <li>热力学性质</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>临界性质</h3>
          <ul>
            <li>共形不变性</li>
            <li>c=1 CFT</li>
            <li>幂律关联</li>
            <li>普适行为</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>拓扑性质</h3>
          <ul>
            <li>Haldane猜想</li>
            <li>SPT相</li>
            <li>边界态</li>
            <li>拓扑保护</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验验证</h3>
          <ul>
            <li>材料实现</li>
            <li>测量技术</li>
            <li>量子模拟</li>
            <li>应用前景</li>
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

.method-grid, .ground-state-grid, .bosonization-grid, .critical-grid, .topology-grid, .qmc-grid, .methods-grid, .materials-grid, .techniques-grid, .variations-grid, .dimensions-grid, .significance-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.method-card, .gs-card, .boson-card, .critical-card, .topology-card, .qmc-card, .material-card, .technique-card, .variation-card, .dim-card, .significance-card, .app-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.method-card:hover, .gs-card:hover, .boson-card:hover, .critical-card:hover, .topology-card:hover, .qmc-card:hover, .material-card:hover, .technique-card:hover, .variation-card:hover, .dim-card:hover, .significance-card:hover, .app-card:hover {
  transform: translateY(-5px);
}

.method-card h4, .gs-card h4, .boson-card h4, .critical-card h4, .topology-card h4, .qmc-card h4, .material-card h4, .technique-card h4, .variation-card h4, .dim-card h4, .significance-card h4, .app-card h4 {
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
  
  .method-grid, .ground-state-grid, .bosonization-grid, .critical-grid, .topology-grid, .qmc-grid, .methods-grid, .materials-grid, .techniques-grid, .variations-grid, .dimensions-grid, .significance-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>