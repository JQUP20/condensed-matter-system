<template>
  <div class="chapter-content">
    <h1>1.4.43 Feynman图微扰论 (Feynman Diagram Perturbation Theory)</h1>
    
    <h2>引言</h2>
    <p>
      Feynman图技术是量子场论和多体理论中最重要的计算工具之一。它将复杂的微扰展开用直观的图形表示，
      不仅简化了计算过程，更重要的是提供了对物理过程的深刻理解。在凝聚态物理中，
      Feynman图方法广泛应用于电子-声子相互作用、磁性、超导等领域的研究。
    </p>

    <h2>历史背景</h2>
    <p>
      Richard Feynman在1940年代发展了这一图形化方法，最初用于量子电动力学的计算。
      后来这一方法被推广到凝聚态物理，成为处理多体相互作用问题的标准工具。
    </p>

    <h2>基本概念</h2>

    <h3>1. 格林函数</h3>
    <p>单粒子格林函数定义为：</p>
    <KatexElement expression="G(x,t;x',t') = -i\langle T[\psi(x,t)\psi^\dagger(x',t')] \rangle" :inline="false" />
    
    <p>其中T是时间排序算符。</p>

    <h3>2. 相互作用绘景</h3>
    <p>在相互作用绘景中，时间演化算符可以展开为：</p>
    <KatexElement expression="U(t,t_0) = T \exp\left(-i\int_{t_0}^t H_I(t') dt'\right)" :inline="false" />

    <h2>图形规则</h2>

    <h3>1. 基本元素</h3>
    <ul>
      <li><strong>传播子</strong>：用线表示粒子的传播</li>
      <li><strong>顶点</strong>：用点表示相互作用</li>
      <li><strong>外线</strong>：表示初末态粒子</li>
      <li><strong>内线</strong>：表示虚粒子</li>
    </ul>

    <h4>详细图形约定</h4>
    <ul>
      <li><strong>费米子线</strong>：实线，带箭头表示粒子流方向</li>
      <li><strong>玻色子线</strong>：波浪线或虚线</li>
      <li><strong>光子线</strong>：波浪线</li>
      <li><strong>声子线</strong>：虚线</li>
      <li><strong>自旋涨落线</strong>：双线</li>
    </ul>

    <h3>2. 费米子传播子</h3>
    <p>自由费米子传播子为：</p>
    <KatexElement expression="G_0(k,\omega) = \frac{1}{\omega - \epsilon_k + i\delta \text{sgn}(\epsilon_k - \mu)}" :inline="false" />

    <h4>温度格林函数</h4>
    <p>在有限温度下，使用Matsubara频率：</p>
    <KatexElement expression="G_0(k,i\omega_n) = \frac{1}{i\omega_n - \epsilon_k + \mu}" :inline="false" />
    
    <p>其中 <KatexElement expression="\omega_n = (2n+1)\pi T" :inline="true" /> 是费米子Matsubara频率。</p>

    <h4>实时格林函数</h4>
    <p>推迟格林函数：</p>
    <KatexElement expression="G^R(k,\omega) = \frac{1}{\omega - \epsilon_k + \mu + i\delta}" :inline="false" />
    
    <p>超前格林函数：</p>
    <KatexElement expression="G^A(k,\omega) = \frac{1}{\omega - \epsilon_k + \mu - i\delta}" :inline="false" />

    <h3>3. 玻色子传播子</h3>
    <p>自由玻色子传播子为：</p>
    <KatexElement expression="D_0(q,\Omega) = \frac{1}{\Omega^2 - \omega_q^2 + i\delta}" :inline="false" />

    <h4>声子传播子</h4>
    <p>声子的完整传播子：</p>
    <KatexElement expression="D(q,\Omega) = \frac{2\omega_q}{\Omega^2 - \omega_q^2 - \Pi(q,\Omega)}" :inline="false" />
    
    <p>其中 <KatexElement expression="\Pi(q,\Omega)" :inline="true" /> 是声子自能。</p>

    <h4>库仑相互作用</h4>
    <p>屏蔽库仑相互作用：</p>
    <KatexElement expression="V(q,\Omega) = \frac{V_q}{1 - V_q \Pi(q,\Omega)}" :inline="false" />
    
    <p>其中 <KatexElement expression="V_q = \frac{4\pi e^2}{q^2}" :inline="true" /> 是裸库仑相互作用。</p>

    <h3>4. 顶点规则</h3>
    <p>每个顶点对应一个相互作用强度：</p>
    <ul>
      <li><strong>电子-声子顶点</strong>：<KatexElement expression="g_{k,q}" :inline="true" /></li>
      <li><strong>库仑顶点</strong>：<KatexElement expression="V(q)" :inline="true" /></li>
      <li><strong>磁相互作用顶点</strong>：<KatexElement expression="J_{ij}" :inline="true" /></li>
    </ul>

    <h3>5. 拓扑规则</h3>
    <ul>
      <li>每个内部动量积分贡献因子 <KatexElement expression="\int \frac{d^d k}{(2\pi)^d}" :inline="true" /></li>
      <li>每个内部频率求和贡献因子 <KatexElement expression="T \sum_n" :inline="true" /> 或 <KatexElement expression="\int \frac{d\omega}{2\pi}" :inline="true" /></li>
      <li>每个费米子回路贡献因子 <KatexElement expression="(-1)" :inline="true" /></li>
      <li>对称因子：相同粒子交换的对称性</li>
    </ul>

    <h2>微扰展开</h2>

    <h3>1. Dyson方程</h3>
    <p>完整格林函数满足Dyson方程：</p>
    <KatexElement expression="G = G_0 + G_0 \Sigma G" :inline="false" />
    
    <p>其中Σ是自能。</p>

    <h3>2. 自能的图形表示</h3>
    <p>自能可以用不可约图的和表示：</p>
    <KatexElement expression="\Sigma = \Sigma^{(1)} + \Sigma^{(2)} + \cdots" :inline="false" />

    <h2>具体应用</h2>

    <h3>1. 电子-声子相互作用</h3>
    <p>电子-声子耦合的哈密顿量：</p>
    <KatexElement expression="H_{e-ph} = g \sum_{k,q} (b_q + b_{-q}^\dagger) c_{k+q}^\dagger c_k" :inline="false" />
    
    <p>一阶自能修正为：</p>
    <KatexElement expression="\Sigma^{(1)}(k,\omega) = g^2 \sum_q D_0(q,\omega-\epsilon_{k+q}) G_0(k+q,\omega)" :inline="false" />

    <h4>Fan自能和Debye-Waller项</h4>
    <p>在零温度下，自能可以分解为：</p>
    <KatexElement expression="\Sigma(k,\omega) = \Sigma_{\text{Fan}}(k,\omega) + \Sigma_{\text{DW}}(k)" :inline="false" />
    
    <p>Fan项（动态项）：</p>
    <KatexElement expression="\Sigma_{\text{Fan}}(k,\omega) = \sum_q |g_{k,q}|^2 \left[ \frac{n_q + f_{k+q}}{\omega - \epsilon_{k+q} - \omega_q + i\delta} + \frac{n_q + 1 - f_{k+q}}{\omega - \epsilon_{k+q} + \omega_q + i\delta} \right]" :inline="false" />
    
    <p>Debye-Waller项（静态项）：</p>
    <KatexElement expression="\Sigma_{\text{DW}}(k) = \sum_q |g_{k,q}|^2 \frac{2n_q + 1}{2\omega_q}" :inline="false" />

    <h4>温度依赖性</h4>
    <p>在高温极限下（<KatexElement expression="T \gg \omega_D" :inline="true" />）：</p>
    <KatexElement expression="\Sigma(k,T) \approx \Sigma_0(k) + \alpha T" :inline="false" />
    
    <p>其中线性温度系数：</p>
    <KatexElement expression="\alpha = \sum_q \frac{|g_{k,q}|^2}{\omega_q}" :inline="false" />

    <h3>2. Coulomb相互作用</h3>
    <p>电子间Coulomb相互作用的Hartree-Fock近似：</p>
    <KatexElement expression="\Sigma_{HF}(k) = \sum_{k'} V(k-k') n_{k'} - \sum_{k'} V(k-k') G_0(k',0^-)" :inline="false" />

    <h4>GW近似</h4>
    <p>在GW近似中，自能为：</p>
    <KatexElement expression="\Sigma_{GW}(k,\omega) = i \int \frac{d\omega'}{2\pi} G_0(k,\omega+\omega') W(\mathbf{k},\omega') e^{i\omega' 0^+}" :inline="false" />
    
    <p>其中屏蔽相互作用：</p>
    <KatexElement expression="W(q,\omega) = \frac{V_q}{\epsilon(q,\omega)}" :inline="false" />
    
    <p>介电函数在RPA近似下：</p>
    <KatexElement expression="\epsilon(q,\omega) = 1 - V_q \Pi_0(q,\omega)" :inline="false" />

    <h4>等离激元卫星峰</h4>
    <p>GW自能导致准粒子峰和等离激元卫星峰：</p>
    <KatexElement expression="A(k,\omega) = \frac{Z_k \Gamma_k}{(\omega - E_k)^2 + \Gamma_k^2} + A_{\text{sat}}(k,\omega)" :inline="false" />
    
    <p>其中准粒子权重：</p>
    <KatexElement expression="Z_k = \left[ 1 - \frac{\partial \text{Re} \Sigma(k,\omega)}{\partial \omega}\bigg|_{\omega=E_k} \right]^{-1}" :inline="false" />

    <h3>3. 磁性系统</h3>
    <p>海森堡模型的自旋波理论可以用Feynman图方法处理。</p>

    <h4>Holstein-Primakoff变换</h4>
    <p>使用Holstein-Primakoff变换后的哈密顿量：</p>
    <KatexElement expression="H = \sum_k \omega_k a_k^\dagger a_k + \frac{1}{2\sqrt{N}} \sum_{k,q} V_{k,q} (a_k^\dagger a_q^\dagger + a_k a_q) + \cdots" :inline="false" />
    
    <p>自旋波色散关系：</p>
    <KatexElement expression="\omega_k = JS z (1 - \gamma_k)" :inline="false" />
    
    <p>其中 <KatexElement expression="\gamma_k = \frac{1}{z} \sum_\delta e^{i\mathbf{k} \cdot \boldsymbol{\delta}}" :inline="true" /> 是结构因子。</p>

    <h4>自旋波相互作用</h4>
    <p>自旋波间的相互作用导致自能修正：</p>
    <KatexElement expression="\Sigma(k,\omega) = \sum_{q,q'} |V_{k,q,q'}|^2 \frac{n_q + n_{q'} + 1}{\omega - \omega_q - \omega_{q'} + i\delta}" :inline="false" />
    
    <p>这导致自旋波的有限寿命和色散关系的重整化。</p>

    <h3>4. 超导系统</h3>
    <p>在超导体中，需要考虑Nambu表示的格林函数：</p>
    <KatexElement expression="\mathbf{G}(k,\omega) = \begin{pmatrix} G_{11}(k,\omega) & G_{12}(k,\omega) \\ G_{21}(k,\omega) & G_{22}(k,\omega) \end{pmatrix}" :inline="false" />

    <h4>Eliashberg方程</h4>
    <p>超导序参量满足Eliashberg方程：</p>
    <KatexElement expression="\Delta(k,i\omega_n) = T \sum_{k',n'} V(k-k',i\omega_n - i\omega_{n'}) \frac{\Delta(k',i\omega_{n'})}{\omega_{n'}^2 + \xi_{k'}^2 + |\Delta(k',i\omega_{n'})|^2}" :inline="false" />
    
    <p>其中配对相互作用：</p>
    <KatexElement expression="V(q,i\Omega_m) = -g^2 \frac{2\omega_q}{\Omega_m^2 + \omega_q^2}" :inline="false" />

    <h4>McMillan公式</h4>
    <p>在弱耦合极限下，临界温度由McMillan公式给出：</p>
    <KatexElement expression="T_c = \frac{\omega_D}{1.2} \exp\left( -\frac{1.04(1+\lambda)}{\lambda - \mu^*(1+0.62\lambda)} \right)" :inline="false" />
    
    <p>其中电子-声子耦合常数：</p>
    <KatexElement expression="\lambda = 2 \int_0^{\omega_D} d\omega \frac{\alpha^2 F(\omega)}{\omega}" :inline="false" />

    <h3>5. 量子点系统</h3>
    <p>在量子点中，库仑阻塞效应可以用Feynman图方法描述：</p>
    <KatexElement expression="H = \sum_\sigma \epsilon_d d_\sigma^\dagger d_\sigma + U n_\uparrow n_\downarrow + \sum_{k,\sigma} (V_k d_\sigma^\dagger c_{k\sigma} + \text{h.c.})" :inline="false" />

    <h4>Kondo效应</h4>
    <p>在Kondo区域，自能的对数发散：</p>
    <KatexElement expression="\Sigma(\omega) \approx -i\Gamma \left[ 1 + \frac{U^2}{16\Gamma^2} \ln\left(\frac{D}{|\omega|}\right) \right]" :inline="false" />
    
    <p>其中 <KatexElement expression="\Gamma = \pi \sum_k |V_k|^2 \delta(\omega - \epsilon_k)" :inline="true" /> 是能级宽度。</p>

    <h4>Anderson杂质模型</h4>
    <p>在Anderson模型中，局域态密度为：</p>
    <KatexElement expression="\rho_d(\omega) = -\frac{1}{\pi} \text{Im} G_d(\omega)" :inline="false" />
    
    <p>其中局域格林函数：</p>
    <KatexElement expression="G_d(\omega) = \frac{1}{\omega - \epsilon_d - \Sigma(\omega)}" :inline="false" />

    <h3>6. 拓扑系统</h3>
    <p>在拓扑绝缘体中，表面态的自能修正：</p>
    <KatexElement expression="\Sigma_{\text{surf}}(k,\omega) = \sum_q V(q) \frac{f(\epsilon_{k+q}) - f(\omega)}{\omega - \epsilon_{k+q} + i\delta}" :inline="false" />
    
    <p>其中表面态色散：</p>
    <KatexElement expression="\epsilon_k = v_F (\mathbf{k} \times \hat{\mathbf{z}}) \cdot \boldsymbol{\sigma}" :inline="false" />

    <h2>高阶修正</h2>

    <h3>1. 顶点修正</h3>
    <p>完整顶点函数满足Bethe-Salpeter方程：</p>
    <KatexElement expression="\Gamma = \Gamma_0 + \Gamma_0 \chi \Gamma" :inline="false" />

    <h3>2. Ward恒等式</h3>
    <p>规范不变性导致Ward恒等式，约束顶点修正和自能的关系。</p>

    <h2>求和技术</h2>

    <h3>1. 随机相近似(RPA)</h3>
    <p>RPA对应于对特定类型图的无穷级数求和：</p>
    <KatexElement expression="\chi_{RPA} = \frac{\chi_0}{1 - V\chi_0}" :inline="false" />

    <h3>2. 梯形近似</h3>
    <p>包含所有梯形图的贡献，用于处理强关联系统。</p>

    <h2>解析性质</h2>

    <h3>1. 因果性</h3>
    <p>格林函数的解析结构反映了系统的因果性质。</p>

    <h3>2. 谱表示</h3>
    <p>格林函数可以用谱密度表示：</p>
    <KatexElement expression="G(k,\omega) = \int_{-\infty}^{\infty} d\omega' \frac{A(k,\omega')}{\omega - \omega' + i\delta}" :inline="false" />

    <h2>数值实现</h2>

    <h3>1. 蒙特卡罗方法</h3>
    <p>对于强耦合系统，可以用蒙特卡罗方法对Feynman图进行数值求和。</p>

    <h3>2. 连续时间量子蒙特卡罗</h3>
    <p>CTQMC方法本质上是对相互作用展开图的随机采样。</p>

    <h2>现代发展</h2>

    <h3>1. 非平衡格林函数</h3>
    <p>Keldysh形式的格林函数用于处理非平衡系统。</p>

    <h3>2. 功能重整化群</h3>
    <p>结合重整化群思想，系统地处理所有阶的修正。</p>

    <h3>3. 机器学习辅助</h3>
    <p>利用神经网络等方法加速Feynman图的计算和求和。</p>

    <h2>总结</h2>
    <p>
      Feynman图技术是理论物理中不可或缺的工具，它将抽象的数学表达式转化为直观的图形表示，
      极大简化了复杂多体问题的处理。在凝聚态物理中，这一方法不仅用于微扰计算，
      更为理解各种物理现象提供了深刻的洞察。随着计算技术的发展，
      Feynman图方法在处理强关联系统方面也展示了新的潜力。
    </p>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter1_4_43',
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