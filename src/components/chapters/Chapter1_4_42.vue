<template>
  <div class="chapter-content">
    <h1>1.4.42 高斯近似 (Gaussian Approximation)</h1>
    
    <h2>引言</h2>
    <p>
      高斯近似是量子场论和统计力学中处理涨落效应的基本方法。它通过将作用量在平均场解附近展开到二次项，
      系统地包含了量子涨落和热涨落的贡献。这种方法在相变理论、临界现象和量子多体系统的研究中发挥着重要作用。
    </p>

    <h2>基本思想</h2>
    <p>
      高斯近似的核心思想是将复杂的相互作用系统的配分函数或路径积分在某个参考点（通常是平均场解）附近进行二次展开，
      从而将问题转化为可解的高斯积分。
    </p>

    <h3>基本步骤</h3>
    <ol>
      <li>找到作用量的经典解（平均场解）</li>
      <li>在经典解附近展开作用量到二次项</li>
      <li>计算高斯积分得到涨落修正</li>
      <li>重新求和得到有效理论</li>
    </ol>

    <h2>数学框架</h2>

    <h3>1. 路径积分表示</h3>
    <p>考虑一般的路径积分：</p>
    <KatexElement expression="Z = \int \mathcal{D}\phi \, e^{-S[\phi]}" :inline="false" />
    
    <p>其中 <KatexElement expression="S[\phi]" :inline="true" /> 是作用量泛函。对于典型的场论系统：</p>
    <KatexElement expression="S[\phi] = \int d^d x \left[ \frac{1}{2}(\nabla \phi)^2 + \frac{1}{2}m^2 \phi^2 + V(\phi) \right]" :inline="false" />

    <h3>2. 鞍点展开</h3>
    <p>设 <KatexElement expression="\phi_0" :inline="true" /> 是作用量的鞍点解，即 <KatexElement expression="\frac{\delta S}{\delta \phi}\big|_{\phi_0} = 0" :inline="true" />。
    在鞍点附近展开：</p>
    <KatexElement expression="S[\phi] = S[\phi_0] + \frac{1}{2} \int dx dy \, \eta(x) G^{-1}(x,y) \eta(y) + O(\eta^3)" :inline="false" />
    
    <p>其中 <KatexElement expression="\eta(x) = \phi(x) - \phi_0(x)" :inline="true" /> 是涨落场，<KatexElement expression="G^{-1}(x,y) = \frac{\delta^2 S}{\delta \phi(x) \delta \phi(y)}\big|_{\phi_0}" :inline="true" /> 是二阶导数算符。</p>

    <h4>鞍点方程的求解</h4>
    <p>对于 <KatexElement expression="\phi^4" :inline="true" /> 理论，鞍点方程为：</p>
    <KatexElement expression="-\nabla^2 \phi_0 + m^2 \phi_0 + \lambda \phi_0^3 = 0" :inline="false" />
    
    <p>在均匀情况下，<KatexElement expression="\phi_0 = \text{常数}" :inline="true" />，得到：</p>
    <KatexElement expression="m^2 \phi_0 + \lambda \phi_0^3 = 0" :inline="false" />
    
    <p>解为：</p>
    <ul>
      <li><strong>对称相：</strong> <KatexElement expression="\phi_0 = 0" :inline="true" /> （当 <KatexElement expression="m^2 > 0" :inline="true" />）</li>
      <li><strong>破缺相：</strong> <KatexElement expression="\phi_0 = \pm \sqrt{-m^2/\lambda}" :inline="true" /> （当 <KatexElement expression="m^2 < 0" :inline="true" />）</li>
    </ul>

    <h3>3. 高斯积分</h3>
    <p>在高斯近似下，配分函数变为：</p>
    <KatexElement expression="Z \approx e^{-S[\phi_0]} \int \mathcal{D}\eta \, e^{-\frac{1}{2} \int dx dy \, \eta(x) G^{-1}(x,y) \eta(y)}" :inline="false" />
    
    <p>高斯积分的结果是：</p>
    <KatexElement expression="Z \approx e^{-S[\phi_0]} (\det G^{-1})^{-1/2}" :inline="false" />

    <h4>涨落算符的计算</h4>
    <p>对于 <KatexElement expression="\phi^4" :inline="true" /> 理论，涨落算符为：</p>
    <KatexElement expression="G^{-1}(x,y) = \left(-\nabla^2 + m^2 + 3\lambda \phi_0^2\right) \delta(x-y)" :inline="false" />
    
    <p>在动量空间中：</p>
    <KatexElement expression="G^{-1}(k) = k^2 + m^2 + 3\lambda \phi_0^2 = k^2 + m_{\text{eff}}^2" :inline="false" />
    
    <p>其中 <KatexElement expression="m_{\text{eff}}^2 = m^2 + 3\lambda \phi_0^2" :inline="true" /> 是有效质量。</p>

    <h4>行列式的计算</h4>
    <p>在有限体积 <KatexElement expression="V" :inline="true" /> 中：</p>
    <KatexElement expression="\det G^{-1} = \prod_k (k^2 + m_{\text{eff}}^2)" :inline="false" />
    
    <p>使用正规化，得到：</p>
    <KatexElement expression="\ln \det G^{-1} = \frac{V}{(2\pi)^d} \int d^d k \ln(k^2 + m_{\text{eff}}^2)" :inline="false" />

    <h2>有效作用量</h2>

    <h3>1. 一圈修正</h3>
    <p>有效作用量包含经典项和一圈量子修正：</p>
    <KatexElement expression="S_{\text{eff}}[\phi_0] = S[\phi_0] + \frac{1}{2} \text{Tr} \ln G^{-1}" :inline="false" />
    
    <p>其中迹运算包含对所有模式的求和。</p>

    <h3>2. 重整化</h3>
    <p>一圈修正通常包含发散项，需要进行重整化处理：</p>
    <KatexElement expression="S_{\text{eff}}^{\text{ren}} = S_{\text{eff}} + S_{\text{ct}}" :inline="false" />
    
    <p>其中 <KatexElement expression="S_{\text{ct}}" :inline="true" /> 是反项。</p>

    <h2>应用实例</h2>

    <h3>1. φ⁴理论</h3>
    <p>考虑标量场的φ⁴理论：</p>
    <KatexElement expression="S = \int d^d x \left[ \frac{1}{2} (\partial \phi)^2 + \frac{r}{2} \phi^2 + \frac{u}{4!} \phi^4 \right]" :inline="false" />
    
    <p>在对称破缺相中，<KatexElement expression="\phi_0 = \text{const}" :inline="true" />，高斯近似给出：</p>
    <KatexElement expression="m^2 = r + \frac{u}{2} \phi_0^2" :inline="false" />

    <h4>相变分析</h4>
    <p>临界点由 <KatexElement expression="r = 0" :inline="true" /> 确定。在临界点附近：</p>
    <ul>
      <li><strong>对称相</strong> (<KatexElement expression="r > 0" :inline="true" />): <KatexElement expression="\phi_0 = 0" :inline="true" />，<KatexElement expression="m^2 = r" :inline="true" /></li>
      <li><strong>破缺相</strong> (<KatexElement expression="r < 0" :inline="true" />): <KatexElement expression="\phi_0^2 = -6r/u" :inline="true" />，<KatexElement expression="m^2 = -2r" :inline="true" /></li>
    </ul>

    <h4>关联函数</h4>
    <p>高斯近似下的两点关联函数：</p>
    <KatexElement expression="G(x-y) = \langle \phi(x) \phi(y) \rangle = \int \frac{d^d k}{(2\pi)^d} \frac{e^{ik(x-y)}}{k^2 + m^2}" :inline="false" />
    
    <p>在实空间中：</p>
    <KatexElement expression="G(r) = \frac{1}{(2\pi)^{d/2}} \left(\frac{m}{r}\right)^{(d-2)/2} K_{(d-2)/2}(mr)" :inline="false" />
    
    <p>其中 <KatexElement expression="K_\nu" :inline="true" /> 是修正贝塞尔函数。</p>

    <h3>2. Ising模型</h3>
    <p>Ising模型的高斯近似导致Ornstein-Zernike形式的关联函数：</p>
    <KatexElement expression="G(k) = \frac{1}{k^2 + m^2}" :inline="false" />
    
    <p>其中质量 <KatexElement expression="m^2 \propto |T - T_c|" :inline="true" />。</p>

    <h4>临界行为</h4>
    <p>在临界温度附近，关联长度发散：</p>
    <KatexElement expression="\xi = \frac{1}{m} \propto |T - T_c|^{-1/2}" :inline="false" />
    
    <p>磁化率的临界行为：</p>
    <KatexElement expression="\chi = G(k=0) = \frac{1}{m^2} \propto |T - T_c|^{-1}" :inline="false" />

    <h4>有限尺寸效应</h4>
    <p>在有限系统中，高斯近似预测：</p>
    <KatexElement expression="T_c(L) = T_c(\infty) + \frac{A}{L^2}" :inline="false" />
    
    <p>其中 <KatexElement expression="L" :inline="true" /> 是系统尺寸，<KatexElement expression="A" :inline="true" /> 是常数。</p>

    <h3>3. 超导体中的涨落</h3>
    <p>在BCS理论中，高斯近似描述了序参量的涨落：</p>
    <KatexElement expression="S_{\text{eff}} = \int d^4 k \frac{|\Delta(k)|^2}{\chi^{-1}(k)}" :inline="false" />
    
    <p>其中 <KatexElement expression="\chi(k)" :inline="true" /> 是配对敏感性。</p>

    <h4>Ginzburg-Landau理论</h4>
    <p>在临界温度附近，有效作用量简化为：</p>
    <KatexElement expression="S_{GL} = \int d^3 r \left[ \alpha |\Delta|^2 + \frac{\beta}{2} |\Delta|^4 + \gamma |(\nabla - 2ieA)\Delta|^2 \right]" :inline="false" />
    
    <p>高斯近似忽略四次项，得到线性化的GL方程：</p>
    <KatexElement expression="\gamma (\nabla - 2ieA)^2 \Delta + \alpha \Delta = 0" :inline="false" />

    <h4>涨落效应</h4>
    <p>超导涨落对电导率的贡献：</p>
    <KatexElement expression="\Delta \sigma = \frac{e^2}{16\hbar} \sum_n \frac{1}{|\omega_n| + \Gamma}" :inline="false" />
    
    <p>其中 <KatexElement expression="\Gamma" :inline="true" /> 是涨落的阻尼率。</p>

    <h3>4. 量子自旋系统</h3>
    <p>对于量子海森堡模型，使用Holstein-Primakoff变换后的高斯近似：</p>
    <KatexElement expression="H = \sum_k \omega_k a_k^\dagger a_k + \text{相互作用项}" :inline="false" />
    
    <p>其中 <KatexElement expression="\omega_k = J S z (1 - \gamma_k)" :inline="true" />，<KatexElement expression="\gamma_k" :inline="true" /> 是结构因子。</p>

    <h4>自旋波理论</h4>
    <p>高斯近似给出线性自旋波色散：</p>
    <KatexElement expression="\omega_k = J S \sqrt{(1-\gamma_k)^2 - \gamma_k^2}" :inline="false" />
    
    <p>在长波长极限下：</p>
    <KatexElement expression="\omega_k \approx J S a k \quad (k \to 0)" :inline="false" />

    <h3>5. 量子相变中的应用</h3>
    <p>考虑横场Ising模型的量子相变：</p>
    <KatexElement expression="H = -J \sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h \sum_i \sigma_i^x" :inline="false" />
    
    <p>在路径积分表示中，高斯近似给出：</p>
    <KatexElement expression="S = \int d\tau d^d x \left[ \frac{1}{2c} (\partial_\tau \phi)^2 + \frac{1}{2} (\nabla \phi)^2 + \frac{r}{2} \phi^2 \right]" :inline="false" />

    <h4>量子临界点</h4>
    <p>量子临界点由 <KatexElement expression="r = 0" :inline="true" /> 确定，对应 <KatexElement expression="h = h_c" :inline="true" />。</p>
    
    <p>关联长度的量子临界行为：</p>
    <KatexElement expression="\xi \propto |h - h_c|^{-1/2}" :inline="false" />
    
    <p>动力学关联长度：</p>
    <KatexElement expression="\xi_\tau \propto \xi^z \propto |h - h_c|^{-1}" :inline="false" />

    <h3>6. 有限温度量子系统</h3>
    <p>在有限温度下，Matsubara频率的求和导致：</p>
    <KatexElement expression="G(\mathbf{k}, i\omega_n) = \frac{1}{-i\omega_n + \epsilon_k}" :inline="false" />
    
    <p>其中 <KatexElement expression="\omega_n = (2n+1)\pi T" :inline="true" /> 是费米子Matsubara频率。</p>

    <h4>温度效应</h4>
    <p>温度对有效质量的修正：</p>
    <KatexElement expression="m^2_{\text{eff}}(T) = m^2 + \lambda T \sum_n \frac{1}{\omega_n^2 + m^2}" :inline="false" />
    
    <p>在高温极限下：</p>
    <KatexElement expression="m^2_{\text{eff}}(T) \approx m^2 + \frac{\lambda T}{2m} \quad (T \gg m)" :inline="false" />

    <h2>临界现象中的应用</h2>

    <h3>1. 临界指数</h3>
    <p>高斯近似给出的临界指数（上临界维数以上）：</p>
    <ul>
      <li>比热指数：<KatexElement expression="\alpha = 0" :inline="true" /></li>
      <li>磁化率指数：<KatexElement expression="\gamma = 1" :inline="true" /></li>
      <li>序参量指数：<KatexElement expression="\beta = 1/2" :inline="true" /></li>
      <li>关联长度指数：<KatexElement expression="\nu = 1/2" :inline="true" /></li>
    </ul>

    <h3>2. 上临界维数</h3>
    <p>对于φ⁴理论，上临界维数是 <KatexElement expression="d_c = 4" :inline="true" />。
    在 <KatexElement expression="d > 4" :inline="true" /> 时，高斯近似是精确的。</p>

    <h2>量子相变</h2>

    <h3>1. 量子临界点</h3>
    <p>在量子相变附近，高斯近似描述了量子涨落的效应：</p>
    <KatexElement expression="S = \int d\tau d^d x \left[ \frac{1}{2c} (\partial_\tau \phi)^2 + \frac{1}{2} (\nabla \phi)^2 + \frac{r}{2} \phi^2 \right]" :inline="false" />

    <h3>2. 动力学临界指数</h3>
    <p>高斯近似给出动力学临界指数 <KatexElement expression="z = 2" :inline="true" />。</p>

    <h2>有限温度效应</h2>

    <h3>1. Matsubara频率</h3>
    <p>有限温度下，时间方向被紧化，导致Matsubara频率：</p>
    <KatexElement expression="\omega_n = \frac{2\pi n T}{\hbar}" :inline="false" />

    <h3>2. 温度相关的有效质量</h3>
    <p>温度修正导致有效质量的变化：</p>
    <KatexElement expression="m^2_{\text{eff}}(T) = m^2 + \Pi(T)" :inline="false" />
    
    <p>其中 <KatexElement expression="\Pi(T)" :inline="true" /> 是热自能。</p>

    <h2>非平衡系统</h2>

    <h3>1. Keldysh形式</h3>
    <p>非平衡系统中的高斯近似需要使用Keldysh路径积分：</p>
    <KatexElement expression="Z = \int \mathcal{D}\phi_+ \mathcal{D}\phi_- \, e^{iS[\phi_+] - iS[\phi_-]}" :inline="false" />

    <h3>2. 噪声和耗散</h3>
    <p>高斯近似自然地包含了噪声和耗散的效应。</p>

    <h2>数值方法</h2>

    <h3>1. 蒙特卡罗方法</h3>
    <p>高斯近似可以作为蒙特卡罗模拟的起点，提供重要性采样的权重。</p>

    <h3>2. 变分方法</h3>
    <p>高斯变分方法通过优化高斯试探波函数来近似基态。</p>

    <h2>局限性和改进</h2>

    <h3>局限性</h3>
    <ul>
      <li>忽略了高阶涨落效应</li>
      <li>在强耦合区域精度较差</li>
      <li>可能预测错误的相变类型</li>
    </ul>

    <h3>改进方法</h3>
    <ul>
      <li>包含高阶修正（两圈、三圈等）</li>
      <li>重整化群改进</li>
      <li>非高斯变分方法</li>
    </ul>

    <h2>现代发展</h2>

    <h3>1. 函数重整化群</h3>
    <p>结合重整化群方法，系统地改进高斯近似。</p>

    <h3>2. 机器学习增强</h3>
    <p>利用神经网络等方法优化高斯近似的精度。</p>

    <h3>3. 拓扑相变</h3>
    <p>在拓扑相变的研究中，高斯近似提供了重要的理论框架。</p>

    <h2>实验相关性</h2>
    <p>高斯近似的预测在许多实验中得到验证：</p>
    <ul>
      <li>临界散射实验</li>
      <li>比热测量</li>
      <li>中子散射</li>
      <li>光散射</li>
    </ul>

    <h2>总结</h2>
    <p>
      高斯近似是理论物理中的基本工具，它提供了处理涨落效应的系统方法。
      虽然这种近似有其局限性，但它在理解相变、临界现象和量子多体系统方面发挥了重要作用。
      现代的理论发展，如重整化群和数值方法，都建立在高斯近似的基础之上，
      使其在当代凝聚态物理研究中仍然具有重要价值。
    </p>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter1_4_42',
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