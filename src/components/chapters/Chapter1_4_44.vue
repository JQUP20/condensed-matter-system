<template>
  <div class="chapter-content">
    <h1>1.4.44 微扰重整化 (Perturbative Renormalization)</h1>
    
    <h2>引言</h2>
    <p>
      微扰重整化是量子场论和凝聚态物理中处理发散问题的核心技术。当微扰展开中出现无穷大时，
      重整化程序通过系统地重新定义物理参数，使得物理可观测量保持有限。
      这一方法不仅解决了计算中的技术问题，更揭示了物理系统在不同能量尺度下的行为规律。
    </p>

    <h2>基本概念</h2>

    <h3>1. 发散的起源</h3>
    <p>在量子场论中，高阶圈图积分常常发散：</p>
    <KatexElement expression="\int \frac{d^d k}{(2\pi)^d} \frac{1}{k^2 + m^2}" :inline="false" />
    
    <p>当d≥2时，此积分在k→∞时发散。</p>

    <h3>2. 正规化方案</h3>
    <p>常用的正规化方法包括：</p>
    <ul>
      <li><strong>Pauli-Villars正规化</strong>：引入辅助场</li>
      <li><strong>维数正规化</strong>：在d=4-ε维中计算</li>
      <li><strong>动量截断</strong>：引入紫外截断Λ</li>
    </ul>

    <h2>维数正规化</h2>

    <h3>1. 基本思想</h3>
    <p>在d=4-ε维中，发散积分变为：</p>
    <KatexElement expression="\int \frac{d^{4-\varepsilon} k}{(2\pi)^{4-\varepsilon}} \frac{1}{k^2 + m^2} = \frac{1}{(4\pi)^{2-\varepsilon/2}} \frac{\Gamma(\varepsilon/2)}{(m^2)^{\varepsilon/2}}" :inline="false" />

    <h4>球坐标积分</h4>
    <p>在d维空间中，动量积分可以写为：</p>
    <KatexElement expression="\int d^d k = \frac{2\pi^{d/2}}{\Gamma(d/2)} \int_0^\infty k^{d-1} dk" :inline="false" />
    
    <p>其中 <KatexElement expression="\frac{2\pi^{d/2}}{\Gamma(d/2)}" :inline="true" /> 是d维单位球的表面积。</p>

    <h4>Γ函数的性质</h4>
    <p>利用Γ函数的解析延拓：</p>
    <KatexElement expression="\Gamma(z) = \frac{\Gamma(z+1)}{z}" :inline="false" />
    
    <p>在ε→0附近的展开：</p>
    <KatexElement expression="\Gamma(\varepsilon/2) = \frac{2}{\varepsilon} - \gamma + \frac{\varepsilon}{12}(\pi^2 + 6\gamma^2) + O(\varepsilon^2)" :inline="false" />
    
    <p>其中γ≈0.5772是Euler-Mascheroni常数。</p>

    <h3>2. 极点结构</h3>
    <p>发散表现为1/ε极点：</p>
    <KatexElement expression="\frac{1}{\varepsilon} + \gamma + \ln(4\pi) + \text{有限项}" :inline="false" />

    <h4>标准积分公式</h4>
    <p>常用的一圈积分结果：</p>
    <KatexElement expression="I_1 = \int \frac{d^d k}{(2\pi)^d} \frac{1}{k^2 + m^2} = \frac{1}{(4\pi)^{d/2}} \frac{\Gamma(1-d/2)}{(m^2)^{1-d/2}}" :inline="false" />
    
    <p>在d=4-ε维中：</p>
    <KatexElement expression="I_1 = \frac{m^2}{(4\pi)^2} \left[ \frac{1}{\varepsilon} - \gamma + \ln(4\pi) - \ln(m^2) + O(\varepsilon) \right]" :inline="false" />

    <h4>两点函数积分</h4>
    <p>带外动量的积分：</p>
    <KatexElement expression="I_2(p^2) = \int \frac{d^d k}{(2\pi)^d} \frac{1}{[k^2 + m^2][(k+p)^2 + m^2]}" :inline="false" />
    
    <p>使用Feynman参数化：</p>
    <KatexElement expression="I_2(p^2) = \frac{1}{(4\pi)^{d/2}} \int_0^1 dx \frac{\Gamma(2-d/2)}{[m^2 + x(1-x)p^2]^{2-d/2}}" :inline="false" />

    <h4>MS̄方案</h4>
    <p>修正的最小减除方案同时减除：</p>
    <KatexElement expression="\frac{1}{\varepsilon} - \gamma + \ln(4\pi)" :inline="false" />
    
    <p>这样重整化参数直接与物理量相关，避免了额外的常数项。</p>

    <h2>重整化程序</h2>

    <h3>1. 裸参数与重整化参数</h3>
    <p>将裸参数分解为：</p>
    <KatexElement expression="g_0 = Z_g g_r \mu^{\varepsilon}" :inline="false" />
    
    <p>其中g_r是重整化参数，μ是重整化标度。</p>

    <h3>2. 重整化常数</h3>
    <p>Z因子的一般形式：</p>
    <KatexElement expression="Z_g = 1 + \frac{a_1}{ε} + \frac{a_2}{ε^2} + \cdots" :inline="false" />

    <h3>3. 最小减除方案(MS)</h3>
    <p>只减除1/ε极点和相关的常数项。</p>

    <h2>重整化群方程</h2>

    <h3>1. Callan-Symanzik方程</h3>
    <p>物理量的标度不变性导致：</p>
    <KatexElement expression="\left[\mu \frac{\partial}{\partial \mu} + \beta(g) \frac{\partial}{\partial g} + \gamma(g) n\right] G^{(n)} = 0" :inline="false" />

    <h3>2. β函数</h3>
    <p>耦合常数的流动方程：</p>
    <KatexElement expression="\beta(g) = \mu \frac{\partial g}{\partial \mu} = -\varepsilon g + b_1 g^2 + b_2 g^3 + \cdots" :inline="false" />

    <h3>3. 异常维度</h3>
    <p>场的异常维度：</p>
    <KatexElement expression="\gamma(g) = \mu \frac{\partial \ln Z}{\partial \mu}" :inline="false" />

    <h2>具体应用</h2>

    <h3>1. φ⁴理论</h3>
    <p>标量场理论的拉格朗日量：</p>
    <KatexElement expression="\mathcal{L} = \frac{1}{2}(\partial \phi)^2 - \frac{1}{2}m^2\phi^2 - \frac{\lambda}{4!}\phi^4" :inline="false" />
    
    <p>一圈β函数：</p>
    <KatexElement expression="\beta(\lambda) = -\varepsilon \lambda + \frac{3\lambda^2}{(4\pi)^2} + O(\lambda^3)" :inline="false" />

    <h4>Wilson-Fisher固定点</h4>
    <p>在d=4-ε维中，Wilson-Fisher固定点为：</p>
    <KatexElement expression="\lambda^* = \frac{16\pi^2 \varepsilon}{3} + O(\varepsilon^2)" :inline="false" />
    
    <p>对应的临界指数：</p>
    <KatexElement expression="\nu = \frac{1}{2} + \frac{\varepsilon}{12} + O(\varepsilon^2)" :inline="false" />
    <KatexElement expression="\eta = \frac{\varepsilon^2}{54} + O(\varepsilon^3)" :inline="false" />

    <h4>两圈修正</h4>
    <p>包含两圈修正的β函数：</p>
    <KatexElement expression="\beta(\lambda) = -\varepsilon \lambda + \frac{3\lambda^2}{(4\pi)^2} - \frac{17\lambda^3}{3(4\pi)^4} + O(\lambda^4)" :inline="false" />
    
    <p>改进的Wilson-Fisher固定点：</p>
    <KatexElement expression="\lambda^* = \frac{16\pi^2 \varepsilon}{3} \left[ 1 - \frac{17\varepsilon}{18} + O(\varepsilon^2) \right]" :inline="false" />

    <h4>O(N)模型</h4>
    <p>N分量标量场的β函数：</p>
    <KatexElement expression="\beta(\lambda) = -\varepsilon \lambda + \frac{(N+8)\lambda^2}{3(4\pi)^2} + O(\lambda^3)" :inline="false" />
    
    <p>大N极限下的临界指数：</p>
    <KatexElement expression="\nu = \frac{1}{2} + \frac{1}{N} + O(1/N^2)" :inline="false" />

    <h3>2. 非线性σ模型</h3>
    <p>二维非线性σ模型的β函数：</p>
    <KatexElement expression="\beta(g) = -\frac{1}{2\pi} + \frac{g}{2\pi} + O(g^2)" :inline="false" />

    <h4>拓扑项的影响</h4>
    <p>包含θ项的作用量：</p>
    <KatexElement expression="S = \frac{1}{2g} \int d^2x (\partial \mathbf{n})^2 + i\theta Q" :inline="false" />
    
    <p>其中拓扑荷：</p>
    <KatexElement expression="Q = \frac{1}{4\pi} \int d^2x \mathbf{n} \cdot (\partial_x \mathbf{n} \times \partial_y \mathbf{n})" :inline="false" />

    <h4>Kosterlitz-Thouless相变</h4>
    <p>在二维XY模型中，涡旋-反涡旋对的解束缚导致KT相变：</p>
    <KatexElement expression="\beta_{\text{KT}}(g) = -\frac{1}{2\pi} + \frac{g}{2\pi} - \frac{g^2}{2\pi} y(g)" :inline="false" />
    
    <p>其中y(g)是涡旋逸散子的标度维度。</p>

    <h3>3. 安德森局域化</h3>
    <p>无序系统中的电导率重整化。</p>

    <h4>σ模型描述</h4>
    <p>无序电子系统的有效理论：</p>
    <KatexElement expression="S = \frac{\sigma}{8} \int d^d x \text{Tr}[(\nabla Q)^2]" :inline="false" />
    
    <p>其中Q是超对称矩阵场，σ是电导率。</p>

    <h4>一圈β函数</h4>
    <p>在d=2+ε维中：</p>
    <KatexElement expression="\beta(\sigma) = \varepsilon \sigma - \frac{1}{2\pi} + O(\sigma^{-1})" :inline="false" />
    
    <p>这预言了二维系统中的弱局域化行为。</p>

    <h4>相互作用效应</h4>
    <p>包含库仑相互作用的修正：</p>
    <KatexElement expression="\beta(\sigma) = \varepsilon \sigma - \frac{1}{2\pi} + \frac{e^2}{2\pi^2 \sigma} + O(e^4)" :inline="false" />

    <h3>4. 量子色动力学(QCD)</h3>
    <p>非阿贝尔规范理论的β函数：</p>
    <KatexElement expression="\beta(g) = -\frac{11N_c - 2N_f}{12\pi} g^3 + O(g^5)" :inline="false" />
    
    <p>其中N_c是色荷数，N_f是夸克味数。</p>

    <h4>渐近自由</h4>
    <p>当N_f < 11N_c/2时，β(g) < 0，理论具有渐近自由性：</p>
    <KatexElement expression="g^2(Q^2) = \frac{g^2(\mu^2)}{1 + \frac{g^2(\mu^2)}{12\pi^2}(11N_c - 2N_f) \ln(Q^2/\mu^2)}" :inline="false" />

    <h4>QCD标度</h4>
    <p>动力学产生的质量标度：</p>
    <KatexElement expression="\Lambda_{\text{QCD}} = \mu \exp\left(-\frac{12\pi^2}{(11N_c - 2N_f)g^2(\mu)}\right)" :inline="false" />

    <h3>5. 超导体中的Ginzburg-Landau理论</h3>
    <p>接近临界温度的有效理论：</p>
    <KatexElement expression="\mathcal{F} = \alpha |\psi|^2 + \frac{\beta}{2} |\psi|^4 + \frac{1}{2m^*} |(\nabla - ie\mathbf{A})\psi|^2 + \frac{1}{2\mu_0} \mathbf{B}^2" :inline="false" />

    <h4>上临界维度</h4>
    <p>在d=4维以上，平均场理论精确成立：</p>
    <KatexElement expression="\nu = \frac{1}{2}, \quad \beta = \frac{1}{2}, \quad \gamma = 1" :inline="false" />

    <h4>涨落修正</h4>
    <p>在d=4-ε维中的修正：</p>
    <KatexElement expression="\nu = \frac{1}{2} + \frac{\varepsilon}{12} + O(\varepsilon^2)" :inline="false" />

    <h3>6. 量子反铁磁体</h3>
    <p>海森堡反铁磁体的非线性σ模型描述：</p>
    <KatexElement expression="S = \frac{\rho_s}{2} \int d^2x d\tau [(\nabla \mathbf{n})^2 + c^{-2}(\partial_\tau \mathbf{n})^2]" :inline="false" />

    <h4>自旋波速度重整化</h4>
    <p>量子涨落导致自旋波速度的重整化：</p>
    <KatexElement expression="c_{\text{ren}} = c \left[ 1 + \frac{1}{2\pi \rho_s} \ln(\Lambda/m) \right]" :inline="false" />
    
    <p>其中Λ是紫外截断，m是自旋波质量。</p>

    <h2>固定点分析</h2>

    <h3>1. 紫外固定点</h3>
    <p>β(g*)=0的解决定临界行为：</p>
    <KatexElement expression="g^* = \frac{\varepsilon}{b_1} + O(\varepsilon^2)" :inline="false" />

    <h3>2. 临界指数</h3>
    <p>关联长度指数：</p>
    <KatexElement expression="\nu = \frac{1}{2 + \gamma^*}" :inline="false" />
    
    <p>其中γ*是固定点处的异常维度。</p>

    <h3>3. 标度律</h3>
    <p>不同临界指数间的关系：</p>
    <KatexElement expression="\alpha + 2\beta + \gamma = 2" :inline="false" />

    <h2>高阶计算</h2>

    <h3>1. 多圈计算</h3>
    <p>高阶β函数系数的计算需要处理更复杂的Feynman图。</p>

    <h3>2. Padé近似</h3>
    <p>用有理函数近似改善微扰级数的收敛性。</p>

    <h3>3. Borel求和</h3>
    <p>处理渐近级数的求和技术。</p>

    <h2>非微扰效应</h2>

    <h3>1. 瞬子贡献</h3>
    <p>非微扰的拓扑解对物理量的贡献。</p>

    <h3>2. 大N展开</h3>
    <p>在N→∞极限下的非微扰求解。</p>

    <h3>3. 精确重整化群</h3>
    <p>Wetterich方程提供非微扰的重整化群流。</p>

    <h2>数值方法</h2>

    <h3>1. 蒙特卡罗重整化群</h3>
    <p>结合数值模拟和重整化群思想。</p>

    <h3>2. 密度矩阵重整化群</h3>
    <p>一维强关联系统的精确数值方法。</p>

    <h3>3. 张量网络方法</h3>
    <p>高维系统的数值重整化群实现。</p>

    <h2>现代发展</h2>

    <h3>1. 共形场论</h3>
    <p>临界点的共形对称性提供额外约束。</p>

    <h3>2. AdS/CFT对偶</h3>
    <p>强耦合场论与弱耦合引力理论的对偶关系。</p>

    <h3>3. 机器学习重整化群</h3>
    <p>利用神经网络等方法自动发现重整化群流。</p>

    <h2>实验验证</h2>

    <h3>1. 临界现象</h3>
    <p>相变附近的标度行为验证重整化群预言。</p>

    <h3>2. 量子相变</h3>
    <p>零温相变的临界指数测量。</p>

    <h3>3. 高能物理</h3>
    <p>粒子物理实验中耦合常数的能量依赖性。</p>

    <h2>总结</h2>
    <p>
      微扰重整化不仅是处理发散的技术工具，更是理解物理系统多尺度行为的基本框架。
      它揭示了看似不同的物理现象之间的深层联系，为临界现象、相变理论等提供了统一的描述。
      随着计算技术和理论方法的发展，重整化群理论在凝聚态物理、高能物理、
      统计物理等领域继续发挥着重要作用。
    </p>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter1_4_44',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #7f8c8d;
  margin-top: 25px;
  margin-bottom: 10px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

ul, ol {
  margin-bottom: 15px;
  padding-left: 30px;
}

li {
  margin-bottom: 5px;
}

.katex-display {
  margin: 20px 0;
}
</style>