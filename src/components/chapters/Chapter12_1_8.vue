<template>
  <div class="chapter-content">
    <h1 class="chapter-title">12.1.8 层展的标准量(量子)场</h1>
    
    <div class="content-section">
      <h2>引言</h2>
      <p>
        层展的标准量子场理论是研究多体系统的强有力工具，特别适用于处理强关联电子系统和复杂的相互作用问题。
        在凝聚态物理中，这种方法能够系统地处理电子-声子相互作用、电子-电子相互作用等复杂问题。
      </p>
    </div>

    <div class="content-section">
      <h2>场论基础</h2>
      
      <h3>1. 量子场的基本概念</h3>
      <div class="formula-container">
        <p><strong>场算符的定义：</strong></p>
        <div class="formula">
          ψ(x,t) = ∑ₖ [aₖ uₖ(x)e^(-iωₖt) + bₖ† vₖ(x)e^(iωₖt)]
        </div>
      </div>
      
      <div class="key-points">
        <h4>基本性质：</h4>
        <ul>
          <li><strong>反对易关系：</strong> {ψ(x), ψ†(y)} = δ(x-y)</li>
          <li><strong>时间演化：</strong> ψ(x,t) = e^(iHt)ψ(x,0)e^(-iHt)</li>
          <li><strong>因果性：</strong> [ψ(x,t), ψ†(y,t')] = 0 for |x-y| > c|t-t'|</li>
        </ul>
      </div>

      <h3>2. 相互作用表象</h3>
      <div class="formula-container">
        <p><strong>相互作用表象中的场算符：</strong></p>
        <div class="formula">
          ψᵢ(x,t) = e^(iH₀t)ψ(x)e^(-iH₀t)
        </div>
        <p><strong>时间演化算符：</strong></p>
        <div class="formula">
          U(t,t₀) = T exp[-i∫ₜ₀ᵗ Hᵢ(t')dt']
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>微扰展开理论</h2>
      
      <h3>1. Dyson级数展开</h3>
      <div class="formula-container">
        <p><strong>时间有序指数：</strong></p>
        <div class="formula">
          U(t,t₀) = ∑ₙ₌₀^∞ (-i)ⁿ/n! ∫ₜ₀ᵗ dt₁...∫ₜ₀ᵗ dtₙ T[Hᵢ(t₁)...Hᵢ(tₙ)]
        </div>
      </div>

      <h3>2. Wick定理</h3>
      <div class="theory-box">
        <h4>Wick定理的表述：</h4>
        <p>时间有序乘积可以表示为正规有序乘积和所有可能收缩的和：</p>
        <div class="formula">
          T[ψ(x₁)...ψ(xₙ)] = :ψ(x₁)...ψ(xₙ): + 所有收缩项
        </div>
        <p>其中收缩定义为：</p>
        <div class="formula">
          ψ̄(x)ψ(y) = ⟨0|T[ψ(x)ψ†(y)]|0⟩
        </div>
      </div>

      <h3>3. Feynman图规则</h3>
      <div class="key-points">
        <h4>图形表示规则：</h4>
        <ul>
          <li><strong>传播子：</strong> 用线表示自由粒子的传播</li>
          <li><strong>顶点：</strong> 用点表示相互作用</li>
          <li><strong>外线：</strong> 表示初态和终态粒子</li>
          <li><strong>内线：</strong> 表示虚粒子的传播</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Green函数方法</h2>
      
      <h3>1. 单粒子Green函数</h3>
      <div class="formula-container">
        <p><strong>定义：</strong></p>
        <div class="formula">
          G(x,t;y,t') = -i⟨0|T[ψ(x,t)ψ†(y,t')]|0⟩
        </div>
        <p><strong>Fourier变换：</strong></p>
        <div class="formula">
          G(k,ω) = ∫ d⁴x e^(i(kx-ωt)) G(x,t;0,0)
        </div>
      </div>

      <h3>2. 自能和Dyson方程</h3>
      <div class="formula-container">
        <p><strong>Dyson方程：</strong></p>
        <div class="formula">
          G = G₀ + G₀ΣG
        </div>
        <p><strong>自能的微扰展开：</strong></p>
        <div class="formula">
          Σ = Σ⁽¹⁾ + Σ⁽²⁾ + Σ⁽³⁾ + ...
        </div>
      </div>

      <h3>3. 谱表示</h3>
      <div class="theory-box">
        <h4>Lehmann表示：</h4>
        <div class="formula">
          G(k,ω) = ∑ₙ |⟨n|ψₖ|0⟩|²/(ω - Eₙ + E₀ + iη) + ∑ₘ |⟨0|ψₖ|m⟩|²/(ω + Eₘ - E₀ - iη)
        </div>
        <p>其中谱函数为：</p>
        <div class="formula">
          A(k,ω) = -1/π Im G(k,ω+iη)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>路径积分方法</h2>
      
      <h3>1. 相干态路径积分</h3>
      <div class="formula-container">
        <p><strong>配分函数：</strong></p>
        <div class="formula">
          Z = ∫ D[ψ*,ψ] exp[-S[ψ*,ψ]/ℏ]
        </div>
        <p><strong>作用量：</strong></p>
        <div class="formula">
          S = ∫₀^β dτ ∫ d³x [ψ*(∂τ + H₀)ψ + Hᵢₙₜ[ψ*,ψ]]
        </div>
      </div>

      <h3>2. 虚时间形式主义</h3>
      <div class="key-points">
        <h4>Matsubara频率：</h4>
        <ul>
          <li><strong>费米子：</strong> ωₙ = (2n+1)π/β</li>
          <li><strong>玻色子：</strong> ωₙ = 2nπ/β</li>
          <li><strong>解析延拓：</strong> iωₙ → ω + iη</li>
        </ul>
      </div>

      <h3>3. 鞍点方法</h3>
      <div class="theory-box">
        <h4>平均场近似：</h4>
        <p>在鞍点附近展开作用量：</p>
        <div class="formula">
          S[ψ] ≈ S[ψ₀] + δS/δψ|ψ₀ (ψ-ψ₀) + 1/2 δ²S/δψ²|ψ₀ (ψ-ψ₀)²
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群理论</h2>
      
      <h3>1. 标度变换</h3>
      <div class="formula-container">
        <p><strong>标度变换：</strong></p>
        <div class="formula">
          x → x' = x/b, ψ(x) → ψ'(x') = b^(d/2)ψ(bx')
        </div>
        <p><strong>β函数：</strong></p>
        <div class="formula">
          β(g) = b dg/db|fixed physics
        </div>
      </div>

      <h3>2. Wilson重整化群</h3>
      <div class="key-points">
        <h4>重整化程序：</h4>
        <ul>
          <li><strong>积分高能模式：</strong> 消除高能自由度</li>
          <li><strong>重标度：</strong> 恢复原始截断</li>
          <li><strong>重整化：</strong> 调整耦合常数</li>
        </ul>
      </div>

      <h3>3. 临界现象</h3>
      <div class="theory-box">
        <h4>临界指数：</h4>
        <ul>
          <li><strong>关联长度：</strong> ξ ~ |T-Tc|^(-ν)</li>
          <li><strong>比热：</strong> C ~ |T-Tc|^(-α)</li>
          <li><strong>磁化强度：</strong> M ~ |T-Tc|^β</li>
          <li><strong>磁化率：</strong> χ ~ |T-Tc|^(-γ)</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>非平衡场论</h2>
      
      <h3>1. Keldysh形式主义</h3>
      <div class="formula-container">
        <p><strong>Keldysh轮廓：</strong></p>
        <div class="formula">
          G^K(t,t') = -i⟨ψ(t)ψ†(t')⟩
        </div>
        <p><strong>分布函数：</strong></p>
        <div class="formula">
          f(ω) = i/2 [G^K(ω) + G^R(ω) - G^A(ω)]
        </div>
      </div>

      <h3>2. 输运方程</h3>
      <div class="theory-box">
        <h4>Boltzmann方程的量子修正：</h4>
        <div class="formula">
          ∂f/∂t + v·∇f + F·∇ₖf = I[f]
        </div>
        <p>其中碰撞积分包含量子相干效应。</p>
      </div>

      <h3>3. 涨落-耗散定理</h3>
      <div class="formula-container">
        <p><strong>平衡态关系：</strong></p>
        <div class="formula">
          G^K(ω) = [G^R(ω) - G^A(ω)] tanh(βω/2)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>具体应用</h2>
      
      <h3>1. 电子-声子系统</h3>
      <div class="key-points">
        <h4>Holstein模型：</h4>
        <ul>
          <li><strong>哈密顿量：</strong> H = H_el + H_ph + H_ep</li>
          <li><strong>极化子形成：</strong> 强耦合极限的处理</li>
          <li><strong>输运性质：</strong> 迁移率的计算</li>
        </ul>
      </div>

      <h3>2. 强关联电子系统</h3>
      <div class="theory-box">
        <h4>Hubbard模型：</h4>
        <div class="formula">
          H = -t∑⟨i,j⟩,σ (c†ᵢσcⱼσ + h.c.) + U∑ᵢ nᵢ↑nᵢ↓
        </div>
        <p>应用动力学平均场理论(DMFT)求解。</p>
      </div>

      <h3>3. 超导理论</h3>
      <div class="formula-container">
        <p><strong>BCS哈密顿量：</strong></p>
        <div class="formula">
          H = ∑ₖσ εₖc†ₖσcₖσ + ∑ₖ (Δₖc†ₖ↑c†₋ₖ↓ + h.c.)
        </div>
        <p><strong>能隙方程：</strong></p>
        <div class="formula">
          Δₖ = -∑ₖ' Vₖₖ' Δₖ'/2Eₖ' tanh(βEₖ'/2)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>数值方法</h2>
      
      <h3>1. 量子蒙特卡罗</h3>
      <div class="key-points">
        <h4>主要方法：</h4>
        <ul>
          <li><strong>路径积分蒙特卡罗：</strong> 处理玻色系统</li>
          <li><strong>辅助场蒙特卡罗：</strong> 处理费米系统</li>
          <li><strong>连续时间蒙特卡罗：</strong> 避免Trotter误差</li>
        </ul>
      </div>

      <h3>2. 精确对角化</h3>
      <div class="theory-box">
        <h4>适用范围：</h4>
        <ul>
          <li><strong>小系统：</strong> 通常N < 20</li>
          <li><strong>基态性质：</strong> Lanczos算法</li>
          <li><strong>动力学性质：</strong> 连分数展开</li>
        </ul>
      </div>

      <h3>3. 密度矩阵重整化群</h3>
      <div class="formula-container">
        <p><strong>截断条件：</strong></p>
        <div class="formula">
          ∑ᵢ₌ₘ₊₁^D λᵢ < ε
        </div>
        <p>其中λᵢ是密度矩阵的本征值。</p>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展</h2>
      
      <h3>1. 拓扑场论</h3>
      <div class="key-points">
        <h4>拓扑不变量：</h4>
        <ul>
          <li><strong>Chern数：</strong> 量子霍尔效应</li>
          <li><strong>Z₂不变量：</strong> 拓扑绝缘体</li>
          <li><strong>缠绕数：</strong> 拓扑超导体</li>
        </ul>
      </div>

      <h3>2. 机器学习方法</h3>
      <div class="theory-box">
        <h4>神经网络量子态：</h4>
        <p>用神经网络表示多体波函数：</p>
        <div class="formula">
          ψ(s₁,...,sₙ) = exp[∑ᵢ aᵢsᵢ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ + ...]
        </div>
      </div>

      <h3>3. 量子信息视角</h3>
      <div class="key-points">
        <h4>纠缠熵：</h4>
        <ul>
          <li><strong>面积定律：</strong> 基态纠缠的标度</li>
          <li><strong>拓扑纠缠熵：</strong> 拓扑序的特征</li>
          <li><strong>纠缠谱：</strong> 相变的探测</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          层展的标准量子场理论为凝聚态物理提供了统一的理论框架，能够系统地处理多体相互作用问题。
          从微扰论到非微扰方法，从平衡态到非平衡态，这套理论工具不断发展，
          结合现代数值方法和机器学习技术，为理解复杂量子多体系统开辟了新的道路。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.2em;
  text-align: center;
}

.content-section {
  margin-bottom: 35px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2980b9;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.content-section h3 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula-container {
  background: #ffffff;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.formula {
  background: #f1f2f6;
  border-left: 4px solid #3498db;
  padding: 15px 20px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  border-radius: 0 5px 5px 0;
  overflow-x: auto;
}

.key-points {
  background: #e8f5e8;
  border: 1px solid #27ae60;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.key-points h4 {
  color: #27ae60;
  margin-bottom: 12px;
  font-size: 1.1em;
}

.key-points ul {
  margin: 0;
  padding-left: 20px;
}

.key-points li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.theory-box {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.theory-box h4 {
  color: #856404;
  margin-bottom: 12px;
  font-size: 1.1em;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.summary-box p {
  margin: 0;
  font-size: 1.1em;
  line-height: 1.7;
  text-align: justify;
}

p {
  text-align: justify;
  margin-bottom: 12px;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 6px;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 1.8em;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .formula {
    font-size: 1em;
    padding: 12px 15px;
  }
}
</style>